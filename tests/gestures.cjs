// Deterministic gesture tests: no browser or Home Assistant installation needed.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('dist/antarikfox-glass-card.js', 'utf8');
let now = 0, serial = 0;
const timers = new Map();
const advance = (ms) => {
  const end = now + ms;
  while (true) {
    const next = [...timers].filter(([, t]) => t.at <= end).sort((a, b) => a[1].at - b[1].at)[0];
    if (!next) break;
    now = next[1].at; timers.delete(next[0]); next[1].fn();
  }
  now = end;
};
const Renderer = vm.runInNewContext(source.slice(source.indexOf('  class NativeRenderer {'), source.indexOf('\n  const NB = {')) + '\nNativeRenderer;', {
  setTimeout: (fn, ms) => { const id = ++serial; timers.set(id, { fn, at: now + ms }); return id; },
  clearTimeout: (id) => timers.delete(id), clearInterval: () => {},
});
class Node {
  constructor() { this.handlers = {}; this.classList = { add() {} }; }
  getAttribute() { return null; }
  setAttribute() {}
  addEventListener(name, fn) { (this.handlers[name] ||= []).push(fn); }
  emit(name, extra = {}) {
    const ev = { detail: 1, pointerId: 1, button: 0, isPrimary: true, clientX: 0, clientY: 0, stopPropagation() {}, preventDefault() {}, ...extra };
    for (const fn of this.handlers[name] || []) fn(ev);
  }
}
let passed = 0;
function test(name, fn) { timers.clear(); now = 0; fn(); passed++; console.log('OK', name); }
function setup(double = true) {
  const renderer = new Renderer({}, {}), node = new Node(), calls = [], feedback = [];
  renderer.run = (n, a, entity) => calls.push([a.action, a.perform_action, entity]);
  renderer.act(node, {
    tap_action: { action: 'perform-action', perform_action: 'media_player.toggle' },
    ...(double ? { double_tap_action: { action: 'perform-action', perform_action: 'media_player.media_next_track' } } : {}),
    hold_action: { action: 'more-info' },
  }, 'media_player.test', 'auto', (a) => feedback.push(a));
  const tap = () => { node.emit('pointerdown'); advance(30); node.emit('pointerup'); node.emit('click'); };
  return { renderer, node, calls, feedback, tap };
}
test('single tap waits and toggles exactly once', () => {
  const x = setup(); x.tap(); advance(349); assert.equal(x.calls.length, 0); advance(1);
  assert.equal(x.calls[0][1], 'media_player.toggle'); assert.equal(x.calls.length, 1); assert.equal(x.feedback.length, 1);
});
test('double tap only skips track without power toggle or image feedback', () => {
  const x = setup(); x.tap(); advance(100); x.tap(); x.node.emit('dblclick'); advance(1000);
  assert.deepEqual(x.calls, [['perform-action', 'media_player.media_next_track', 'media_player.test']]); assert.equal(x.feedback.length, 0);
});
test('separate taps toggle twice', () => {
  const x = setup(); x.tap(); advance(400); x.tap(); advance(400); assert.equal(x.calls.length, 2);
  assert.ok(x.calls.every((a) => a[1] === 'media_player.toggle'));
});
test('hold opens more-info without tap', () => {
  const x = setup(); x.node.emit('pointerdown'); advance(600); x.node.emit('pointerup'); x.node.emit('click'); advance(1000);
  assert.deepEqual(x.calls, [['more-info', undefined, 'media_player.test']]);
});
test('hold after first tap cancels pending toggle', () => {
  const x = setup(); x.tap(); advance(100); x.node.emit('pointerdown'); advance(600); x.node.emit('pointerup'); x.node.emit('click'); advance(1000);
  assert.deepEqual(x.calls, [['more-info', undefined, 'media_player.test']]);
});
for (const event of ['pointercancel', 'pointerleave', 'pointermove']) test(event + ' cancels gesture', () => {
  const x = setup(); x.node.emit('pointerdown'); x.node.emit(event, { clientX: 50 }); advance(700); x.node.emit('pointerup'); x.node.emit('click'); advance(500); assert.equal(x.calls.length, 0);
});
test('disconnect cancels pending tap and hold', () => {
  const x = setup(); x.tap(); x.renderer.stop(); advance(1000); assert.equal(x.calls.length, 0);
  x.node.emit('pointerdown'); x.renderer.stop(); advance(1000); assert.equal(x.calls.length, 0);
});
test('keyboard activation works immediately and ignores repeated keydown', () => {
  const x = setup(); x.node.emit('keydown', { key: 'Enter' }); x.node.emit('keydown', { key: 'Enter', repeat: true }); advance(1000); assert.equal(x.calls.length, 1);
});
test('cards without double-tap keep immediate single action', () => {
  const x = setup(false); x.tap(); assert.equal(x.calls.length, 1);
});
test('right mouse button cannot trigger hold', () => {
  const x = setup(); x.node.emit('pointerdown', { button: 2 }); advance(1000); assert.equal(x.calls.length, 0);
});
test('perform-action forwards service and entity target unchanged', () => {
  const calls = [];
  const run = vm.runInNewContext(source.slice(source.indexOf('  const runAction ='), source.indexOf('\n  /** Что умеет ползунок')) + '\nrunAction;', {});
  const target = { entity_id: 'media_player.test' };
  run({}, { callService: (...args) => calls.push(args) }, { action: 'perform-action', perform_action: 'media_player.media_next_track', target }, 'media_player.test');
  assert.equal(calls[0][0], 'media_player'); assert.equal(calls[0][1], 'media_next_track'); assert.equal(calls[0][3], target);
});
console.log(`${passed} gesture/action tests passed`);
