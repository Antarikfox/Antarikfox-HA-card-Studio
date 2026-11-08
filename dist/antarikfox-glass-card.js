/*!
 * Antarikfox Glass Card v3 — стеклянная обёртка для карточек Home Assistant
 * Трёхцветное свечение, блики, живые текстуры, 49 спецэффектов, события, RU/EN.
 * by Antarikfox · v3.8.0
 */
(() => {
  'use strict';
  const VERSION = '3.8.0';
  const TAG = 'antarikfox-glass-card';
  const SHELL = 'afx-glass-shell';
  const EDITOR = `${TAG}-editor`;

  /* ═════════════════════════ ЛОКАЛИЗАЦИЯ ═════════════════════════ */
  const I18N = {
    ru: {
      preset: {
        aurora: 'Аврора', neon_city: 'Неон-сити', cyber: 'Киберпанк', ice: 'Лёд', ember: 'Пламя',
        sunset: 'Закат', matrix: 'Матрица', ocean: 'Океан', royal: 'Королевский', holo: 'Голограмма',
        toxic: 'Токсик', mono: 'Монохром',
      },
      texture: {
        none: 'Без текстуры', noise: 'Зерно', frost: 'Иней', carbon: 'Карбон', hex: 'Соты', grid: 'Сетка',
        dots: 'Точки', scanlines: 'Строки развёртки', brushed: 'Шлифованный металл', diamond: 'Ромбы',
        circuit: 'Схема', waves: 'Волны', lowpoly: 'Низкополигональная', topo: 'Топография', weave: 'Плетение',
        plexus: 'Плексус (живая)', synapse: 'Синапсы (живая)', shards: 'Кристаллы (живая)', constellation: 'Созвездия (живая)',
      },
      fx: {
        sparks: 'Искры', pollen: 'Пыльца', lightning: 'Молнии', fog: 'Туман', rays: 'Лучи', air: 'Воздушность',
        snow: 'Снег', rain: 'Дождь', fireflies: 'Светлячки', aurora: 'Северное сияние', stars: 'Звёздное небо',
        embers: 'Тлеющие угли', matrix: 'Цифровой дождь', bokeh: 'Боке', comets: 'Кометы', glitch: 'Глитч',
        plasma: 'Плазма', ripple: 'Круги на воде', edge_runner: 'Огонь по кромке', confetti: 'Конфетти', vortex: 'Вихрь',
      },
      opt: {
        static: 'Статичный', rotate: 'Вращение', pulse: 'Пульс', sweep: 'Пробег света', follow: 'За курсором',
        off: 'Выключен', overlay: 'Перекрытие', 'soft-light': 'Мягкий свет', screen: 'Экран', normal: 'Обычный',
        'color-dodge': 'Осветление', auto: 'Авто', high: 'Максимум', lite: 'Лёгкий (слабые панели)',
        glow: 'Цвета свечения', white: 'Белый свет', rainbow: 'Радуга', warm: 'Тёплый огонь',
        always: 'Всегда', active: 'Когда включено', inactive: 'Когда выключено', alert: 'Только при тревоге',
        back: 'Под содержимым', front: 'Поверх содержимого', low: 'Экономно', medium: 'Сбалансировано',
        analogous: 'Аналоговая', triadic: 'Триада', complementary: 'Комплементарная', split: 'Раздельная',
        monochrome: 'Монохромная', tetradic: 'Тетрада',
      },
      section: {
        glow: 'Свечение и кант', glass: 'Стекло', glare: 'Блик', texture: 'Текстура', fx: 'Спецэффекты',
        motion: 'Движение и детали', entity: 'Реакция на сущности', card: 'Вложенная карточка',
      },
      label: {
        preset: 'Пресет', glow_tl: 'Верх-лево', glow_mid: 'Середина', glow_br: 'Низ-право', harmony: 'Гармония из средней',
        glow_intensity: 'Интенсивность свечения', glow_spread: 'Размах ореола', edge_width: 'Толщина канта',
        glow_angle: 'Угол градиента', inner_glow: 'Внутреннее свечение', edge_mode: 'Режим канта',
        hue_cycle: 'Радужный цикл', hue_shift: 'Сдвиг оттенка', light_follow: 'Свет за курсором',
        opacity: 'Непрозрачность', blur: 'Размытие фона', saturate: 'Насыщенность фона', tint: 'Тонировка стекла',
        radius: 'Скругление', iridescent: 'Голо-плёнка', reflection: 'Отсвет снизу',
        glare_intensity: 'Интенсивность блика', glare_angle: 'Угол блика', glare_mode: 'Режим блика',
        texture: 'Текстура', texture_lit: 'Подсветка текстуры', texture_opacity: 'Сила текстуры',
        texture_scale: 'Масштаб', texture_blend: 'Смешивание', texture_color: 'Цвет текстуры', texture_fade: 'Затухание',
        fx: 'Эффекты', fx_density: 'Плотность', fx_speed: 'Скорость', fx_opacity: 'Яркость эффектов',
        fx_colors: 'Цвета эффектов', fx_when: 'Показывать', fx_layer: 'Слой', fx_quality: 'Качество', tap_burst: 'Взрыв частиц при касании',
        tilt: '3D-наклон', hover: 'Подъём', tap_flash: 'Вспышка', breathe: 'Дыхание', scan: 'Сканирование',
        corners: 'HUD-уголки', chromatic: 'Хроматика', led: 'Светодиод', text_glow: 'Неон-текст', accent: 'Акцент',
        ignite: 'Зажигание', haptic: 'Вибро-отклик', beat: 'Ритм музыки', beat_bpm: 'Темп, уд/мин',
        tilt_max: 'Макс. наклон', animation_speed: 'Скорость анимаций', performance: 'Производительность',
        engrave: 'Гравировка на стекле', engrave_opacity: 'Яркость гравировки',
        entity: 'Сущность', light_glow: 'Цвет от лампы', dim_inactive: 'Гасить выключенное',
        inactive_dim: 'Яркость выключенного', night_dim: 'Яркость ночью',
        progress_entity: 'Прогресс-кант: сущность', progress_min: 'Минимум', progress_max: 'Максимум',
        fx_entity: 'Сила эффектов от датчика', fx_min: 'Минимум', fx_max: 'Максимум',
        alert_entity: 'Тревога: сущность', alert_state: 'Состояние тревоги', alert_above: 'Выше чем', alert_below: 'Ниже чем',
        alert_color: 'Цвет тревоги', alert_fx: 'Эффекты при тревоге', card: 'YAML вложенной карточки',
      },
      ui: {
        search: 'Поиск…', none: 'Нет', reset: 'Сбросить', recent: 'Недавние', materials: 'Материалы и предметы',
        eyedropper: 'Пипетка', usePreset: 'Из пресета', surprise: 'Удиви меня', copyStyle: 'Копировать стиль',
        pasteStyle: 'Вставить стиль', resetAll: 'Сбросить вид', copied: 'Стиль скопирован', pasted: 'Стиль вставлен',
        nothing: 'Буфер стиля пуст', selected: 'выбрано', live: 'живая', apply: 'Применить',
        noCard: 'Укажите вложенную карточку в «card:» или список «cards:»', yamlError: 'Ошибка в YAML',
        stub: '### Antarikfox Glass\nСтекло, свет и эффекты настраиваются в редакторе.', noResults: 'Ничего не найдено',
        hex: 'HEX', spectrum: 'Спектр', hue: 'Оттенок', clear: 'Очистить', fxNone: 'Без эффектов', byDefault: 'По умолчанию', dblReset: 'Двойной щелчок — сброс',
      },
    },
    en: {
      preset: {
        aurora: 'Aurora', neon_city: 'Neon city', cyber: 'Cyberpunk', ice: 'Ice', ember: 'Ember',
        sunset: 'Sunset', matrix: 'Matrix', ocean: 'Ocean', royal: 'Royal', holo: 'Hologram',
        toxic: 'Toxic', mono: 'Monochrome',
      },
      texture: {
        none: 'No texture', noise: 'Grain', frost: 'Frost', carbon: 'Carbon', hex: 'Honeycomb', grid: 'Grid',
        dots: 'Dots', scanlines: 'Scanlines', brushed: 'Brushed metal', diamond: 'Diamonds',
        circuit: 'Circuit', waves: 'Waves', lowpoly: 'Low poly', topo: 'Topography', weave: 'Weave',
        plexus: 'Plexus (live)', synapse: 'Synapses (live)', shards: 'Crystals (live)', constellation: 'Constellations (live)',
      },
      fx: {
        sparks: 'Sparks', pollen: 'Pollen', lightning: 'Lightning', fog: 'Fog', rays: 'Light rays', air: 'Airiness',
        snow: 'Snow', rain: 'Rain', fireflies: 'Fireflies', aurora: 'Northern lights', stars: 'Starry sky',
        embers: 'Embers', matrix: 'Digital rain', bokeh: 'Bokeh', comets: 'Comets', glitch: 'Glitch',
        plasma: 'Plasma', ripple: 'Ripples', edge_runner: 'Edge fire', confetti: 'Confetti', vortex: 'Vortex',
      },
      opt: {
        static: 'Static', rotate: 'Rotating', pulse: 'Pulse', sweep: 'Light sweep', follow: 'Follows cursor',
        off: 'Off', overlay: 'Overlay', 'soft-light': 'Soft light', screen: 'Screen', normal: 'Normal',
        'color-dodge': 'Color dodge', auto: 'Auto', high: 'Maximum', lite: 'Lite (weak panels)',
        glow: 'Glow colors', white: 'White light', rainbow: 'Rainbow', warm: 'Warm fire',
        always: 'Always', active: 'When on', inactive: 'When off', alert: 'Only on alert',
        back: 'Behind content', front: 'Above content', low: 'Economy', medium: 'Balanced',
        analogous: 'Analogous', triadic: 'Triadic', complementary: 'Complementary', split: 'Split',
        monochrome: 'Monochrome', tetradic: 'Tetradic',
      },
      section: {
        glow: 'Glow & edge', glass: 'Glass', glare: 'Glare', texture: 'Texture', fx: 'Special effects',
        motion: 'Motion & details', entity: 'Entity reactions', card: 'Inner card',
      },
      label: {
        preset: 'Preset', glow_tl: 'Top-left', glow_mid: 'Middle', glow_br: 'Bottom-right', harmony: 'Harmony from middle',
        glow_intensity: 'Glow intensity', glow_spread: 'Halo spread', edge_width: 'Edge width',
        glow_angle: 'Gradient angle', inner_glow: 'Inner glow', edge_mode: 'Edge mode',
        hue_cycle: 'Rainbow cycle', hue_shift: 'Hue shift', light_follow: 'Light follows cursor',
        opacity: 'Opacity', blur: 'Background blur', saturate: 'Background saturation', tint: 'Glass tint',
        radius: 'Corner radius', iridescent: 'Holo film', reflection: 'Under-glow',
        glare_intensity: 'Glare intensity', glare_angle: 'Glare angle', glare_mode: 'Glare mode',
        texture: 'Texture', texture_lit: 'Lit by glow', texture_opacity: 'Texture strength',
        texture_scale: 'Scale', texture_blend: 'Blend', texture_color: 'Texture color', texture_fade: 'Fade out',
        fx: 'Effects', fx_density: 'Density', fx_speed: 'Speed', fx_opacity: 'Effect brightness',
        fx_colors: 'Effect colors', fx_when: 'Show', fx_layer: 'Layer', fx_quality: 'Quality', tap_burst: 'Particle burst on tap',
        tilt: '3D tilt', hover: 'Lift', tap_flash: 'Flash', breathe: 'Breathing', scan: 'Scanning',
        corners: 'HUD corners', chromatic: 'Chromatic', led: 'Status LED', text_glow: 'Neon text', accent: 'Accent',
        ignite: 'Ignition', haptic: 'Haptics', beat: 'Music beat', beat_bpm: 'Tempo, BPM',
        tilt_max: 'Max tilt', animation_speed: 'Animation speed', performance: 'Performance',
        engrave: 'Glass engraving', engrave_opacity: 'Engraving brightness',
        entity: 'Entity', light_glow: 'Color from light', dim_inactive: 'Dim when off',
        inactive_dim: 'Brightness when off', night_dim: 'Brightness at night',
        progress_entity: 'Progress edge: entity', progress_min: 'Minimum', progress_max: 'Maximum',
        fx_entity: 'Effect strength from sensor', fx_min: 'Minimum', fx_max: 'Maximum',
        alert_entity: 'Alert: entity', alert_state: 'Alert state', alert_above: 'Above', alert_below: 'Below',
        alert_color: 'Alert color', alert_fx: 'Effects on alert', card: 'Inner card YAML',
      },
      ui: {
        search: 'Search…', none: 'None', reset: 'Reset', recent: 'Recent', materials: 'Materials & objects',
        eyedropper: 'Eyedropper', usePreset: 'From preset', surprise: 'Surprise me', copyStyle: 'Copy style',
        pasteStyle: 'Paste style', resetAll: 'Reset look', copied: 'Style copied', pasted: 'Style pasted',
        nothing: 'Style clipboard is empty', selected: 'selected', live: 'live', apply: 'Apply',
        noCard: 'Add an inner card under "card:" or a list under "cards:"', yamlError: 'YAML error',
        stub: '### Antarikfox Glass\nGlass, light and effects are set up in the editor.', noResults: 'Nothing found',
        hex: 'HEX', spectrum: 'Spectrum', hue: 'Hue', clear: 'Clear', fxNone: 'No effects', byDefault: 'Default', dblReset: 'Double-click to reset',
      },
    },
  };
  /** Язык, выбранный вручную (RU/EN), главнее языка HA и браузера */
  const langOverride = () => { try { const v = localStorage.getItem('afx-lang'); return ['ru', 'en', 'zh', 'ja'].includes(v) ? v : null; } catch (e) { return null; } };
  const detectLang = (hass) => {
    const ov = langOverride();
    if (ov) return ov;
    const l = (hass && ((hass.locale && hass.locale.language) || hass.language))
      || (typeof navigator !== 'undefined' && navigator.language) || 'en';
    return /^(ru|be|kk)\b/i.test(l) ? 'ru' : /^zh\b/i.test(l) ? 'zh' : /^ja\b/i.test(l) ? 'ja' : 'en';
  };
  const tr = (lang, group, key) => {
    const L = I18N[lang] || I18N.en;
    return (L[group] && L[group][key]) ?? (I18N.en[group] && I18N.en[group][key]) ?? key;
  };

  /* ═════════════════════════ ЦВЕТ ═════════════════════════ */
  const isNil = (v) => v === undefined || v === null || v === '';
  const num = (v, d) => (isNil(v) || isNaN(Number(v)) ? d : Number(v));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const px = (v) => (isNil(v) ? null : typeof v === 'number' || /^-?[\d.]+$/.test(String(v)) ? `${v}px` : String(v));

  let _pc = null;
  const parseColor = (c) => {
    if (isNil(c)) return null;
    if (Array.isArray(c)) return c.length >= 3 && c.slice(0, 3).every((x) => !isNaN(Number(x))) ? c.slice(0, 3).map((x) => clamp(Math.round(Number(x)), 0, 255)) : null;
    const s = String(c).trim();
    const m = /^#?([\da-f]{3}|[\da-f]{6})$/i.exec(s);
    if (m) {
      let h = m[1];
      if (h.length === 3) h = h.split('').map((x) => x + x).join('');
      return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
    }
    if (!_pc) { try { _pc = document.createElement('canvas').getContext('2d'); } catch (e) { return null; } }
    if (!_pc) return null;
    _pc.fillStyle = '#010203';
    _pc.fillStyle = s;
    const v = String(_pc.fillStyle);
    if (v === '#010203') return null;
    if (v[0] === '#') return [1, 3, 5].map((i) => parseInt(v.slice(i, i + 2), 16));
    const n = v.match(/-?[\d.]+/g);
    return n && n.length >= 3 ? n.slice(0, 3).map((x) => clamp(Math.round(Number(x)), 0, 255)) : null;
  };
  const toHex = (rgb) => `#${rgb.map((x) => clamp(Math.round(x), 0, 255).toString(16).padStart(2, '0')).join('')}`;
  const rgbStr = (rgb, a) => (a === undefined ? `rgb(${rgb.map(Math.round).join(',')})` : `rgba(${rgb.map(Math.round).join(',')},${a})`);
  const mixRgb = (a, b, t) => a.map((x, i) => x + (b[i] - x) * t);

  const rgbToHsv = ([r, g, b]) => {
    r /= 255; g /= 255; b /= 255;
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
    let h = 0;
    if (d) h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
    h = (h * 60 + 360) % 360;
    return [h, mx ? d / mx : 0, mx];
  };
  const hsvToRgb = (h, s, v) => {
    const f = (n) => { const k = (n + h / 60) % 6; return v - v * s * Math.max(0, Math.min(k, 4 - k, 1)); };
    return [f(5) * 255, f(3) * 255, f(1) * 255].map(Math.round);
  };
  const rgbToHsl = ([r, g, b]) => {
    r /= 255; g /= 255; b /= 255;
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    let h = 0, s = 0; const l = (mx + mn) / 2;
    if (mx !== mn) {
      const d = mx - mn;
      s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
      h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }
    return [h, s * 100, l * 100];
  };
  const hslToRgb = (h, s, l) => {
    h = ((h % 360) + 360) % 360; s /= 100; l /= 100;
    const k = (n) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
    const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
    return [f(0) * 255, f(8) * 255, f(4) * 255].map(Math.round);
  };
  /** Из одного цвета строим «живую» триаду: светлее → цвет → сдвиг оттенка */
  const triadFromRgb = (rgb) => {
    const [h, s, l] = rgbToHsl(rgb);
    const S = Math.max(s, 55);
    return [hslToRgb(h - 8, S, Math.min(l + 20, 84)), rgb.slice(), hslToRgb(h + 38, S, clamp(l - 6, 36, 70))];
  };
  const HARMONIES = {
    analogous: (h, s, l) => [[h - 32, s, l + 8], [h, s, l], [h + 32, s, l - 4]],
    triadic: (h, s, l) => [[h - 120, s, l], [h, s, l], [h + 120, s, l]],
    complementary: (h, s, l) => [[h, s, l + 18], [h, s, l], [h + 180, s, l]],
    split: (h, s, l) => [[h + 150, s, l], [h, s, l], [h + 210, s, l]],
    monochrome: (h, s, l) => [[h, s - 10, l + 24], [h, s, l], [h, s + 5, l - 22]],
    tetradic: (h, s, l) => [[h + 90, s, l], [h, s, l], [h + 270, s, l]],
  };
  const harmony = (rgb, kind) => {
    const [h, s, l] = rgbToHsl(rgb);
    return (HARMONIES[kind] || HARMONIES.analogous)(h, Math.max(s, 50), clamp(l, 35, 70))
      .map(([H, S, L]) => toHex(hslToRgb(H, clamp(S, 0, 100), clamp(L, 18, 88))));
  };

  /* ═════════════════════════ ПРЕСЕТЫ ═════════════════════════ */
  const PRESETS = {
    aurora: ['#38bdf8', '#818cf8', '#c084fc'],
    neon_city: ['#67e8f9', '#22d3ee', '#4ade80'],
    cyber: ['#00f0ff', '#ff2bd6', '#7c3aed'],
    ice: ['#e0f2fe', '#7dd3fc', '#2563eb'],
    ember: ['#ffc46b', '#ff6a3d', '#ff2d55'],
    sunset: ['#fde047', '#fb923c', '#f43f5e'],
    matrix: ['#c8ff3d', '#22c55e', '#0f766e'],
    ocean: ['#5eead4', '#0ea5e9', '#1e40af'],
    royal: ['#fde68a', '#a78bfa', '#5b21b6'],
    holo: ['#a5f3fc', '#f0abfc', '#fde68a'],
    toxic: ['#ecfccb', '#a3e635', '#14b8a6'],
    mono: ['#ffffff', '#a5b4cb', '#475569'],
  };

  /** «Материалы и предметы» для палитры */
  const MATERIALS = [
    ['#ff4d1a', 'Лава', 'Lava'], ['#ffb000', 'Янтарь', 'Amber'], ['#ffd34d', 'Золото', 'Gold'],
    ['#c8ff3d', 'Лаймовый неон', 'Lime neon'], ['#10b981', 'Изумруд', 'Emerald'], ['#5eead4', 'Мята', 'Mint'],
    ['#06d6d6', 'Бирюза', 'Turquoise'], ['#bae6fd', 'Ледник', 'Glacier'], ['#38bdf8', 'Лазурь', 'Azure'],
    ['#2563eb', 'Сапфир', 'Sapphire'], ['#6366f1', 'Индиго', 'Indigo'], ['#a855f7', 'Аметист', 'Amethyst'],
    ['#e879f9', 'Орхидея', 'Orchid'], ['#ff2bd6', 'Неоновая вывеска', 'Neon sign'], ['#e11d48', 'Рубин', 'Ruby'],
    ['#fb7185', 'Коралл', 'Coral'], ['#c2703d', 'Медь', 'Copper'], ['#cbd5e1', 'Ртуть', 'Mercury'],
    ['#475569', 'Графит', 'Graphite'], ['#f1f5ff', 'Лунный свет', 'Moonlight'],
  ];

  /* ═════════════════════════ ТЕКСТУРЫ ═════════════════════════ */
  const svg = (s) => `url("data:image/svg+xml,${encodeURIComponent(s)}")`;
  const TEXTURES = {
    noise: { img: svg("<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2.2 0 0 0 -.95'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>"), size: (s) => `${160 * s}px` },
    frost: { img: svg("<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'><filter id='f'><feTurbulence type='fractalNoise' baseFrequency='.32' numOctaves='5' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1.6 0 0 0 -.55'/></filter><rect width='100%' height='100%' filter='url(#f)'/></svg>"), size: (s) => `${260 * s}px` },
    carbon: { img: svg("<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><defs><linearGradient id='a' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-opacity='1'/><stop offset='1' stop-opacity='.25'/></linearGradient><linearGradient id='b' x1='0' y1='0' x2='1' y2='0'><stop offset='0' stop-opacity='1'/><stop offset='1' stop-opacity='.25'/></linearGradient></defs><rect width='5' height='5' fill='url(#a)'/><rect x='5' y='5' width='5' height='5' fill='url(#a)'/><rect x='5' width='5' height='5' fill='url(#b)'/><rect y='5' width='5' height='5' fill='url(#b)'/></svg>"), size: (s) => `${10 * s}px` },
    hex: { img: svg("<svg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'><path fill='#000' d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/></svg>"), size: (s) => `${28 * s}px ${49 * s}px` },
    grid: { img: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', size: (s) => `${22 * s}px ${22 * s}px` },
    dots: { img: 'radial-gradient(circle, #000 1px, transparent 1.7px)', size: (s) => `${14 * s}px ${14 * s}px` },
    scanlines: { img: 'linear-gradient(#000 0 1px, transparent 1px)', size: (s) => `100% ${3 * s}px` },
    brushed: { img: 'linear-gradient(90deg, #000 0 1px, transparent 1px 3px, rgba(0,0,0,.45) 3px 4px, transparent 4px 6px, rgba(0,0,0,.7) 6px 6.5px, transparent 6.5px)', size: (s) => `${9 * s}px 100%` },
    diamond: { img: 'linear-gradient(45deg, transparent 47%, #000 47% 53%, transparent 53%), linear-gradient(-45deg, transparent 47%, #000 47% 53%, transparent 53%)', size: (s) => `${18 * s}px ${18 * s}px` },
    circuit: { img: svg("<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' fill='none' stroke='#000' stroke-width='1'><path d='M0 20h20l10 10h20M50 30v20l10 10h20M10 80V60l10-10M60 0v10l10 10M30 80V70h10M80 40H66'/><circle cx='50' cy='30' r='2.5' fill='#000'/><circle cx='20' cy='50' r='2'/><circle cx='70' cy='20' r='2'/><circle cx='40' cy='70' r='2'/><circle cx='64' cy='40' r='2'/></svg>"), size: (s) => `${80 * s}px` },
    waves: { img: svg("<svg xmlns='http://www.w3.org/2000/svg' width='120' height='22'><path d='M0 11 Q15 1 30 11 T60 11 T90 11 T120 11' fill='none' stroke='#000' stroke-width='1'/></svg>"), size: (s) => `${120 * s}px ${22 * s}px` },
    lowpoly: { img: svg("<svg xmlns='http://www.w3.org/2000/svg' width='120' height='104' fill='none' stroke='#000' stroke-width='.8'><path d='M0 0L34 22L70 0L104 30L120 0M0 0L18 48L34 22L60 52L70 0M60 52L104 30L120 62L90 104M18 48L0 80L44 104L60 52L18 48M44 104L90 104L60 52M120 62L120 104L90 104M0 80L0 104L44 104M104 30L120 0M34 22L0 0'/></svg>"), size: (s) => `${120 * s}px ${104 * s}px` },
    topo: { img: svg("<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' fill='none' stroke='#000' stroke-width='.9'><path d='M80 20c34 0 58 22 58 52s-28 62-62 60-54-30-52-62 22-50 56-50z'/><path d='M80 40c22 0 38 14 38 34s-18 40-40 38-34-18-34-38 14-34 36-34z'/><path d='M80 60c10 0 18 6 18 16s-8 18-18 18-16-8-16-18 6-16 16-16z'/><path d='M0 150c30-14 52-6 80 4s56 6 80-8M0 8c26 10 50 4 72-6'/></svg>"), size: (s) => `${160 * s}px` },
    weave: { img: 'linear-gradient(45deg, #000 12%, transparent 12% 38%, #000 38% 62%, transparent 62% 88%, #000 88%), linear-gradient(-45deg, rgba(0,0,0,.5) 12%, transparent 12% 38%, rgba(0,0,0,.5) 38% 62%, transparent 62% 88%, rgba(0,0,0,.5) 88%)', size: (s) => `${16 * s}px ${16 * s}px` },
  };
  /** «Живые» текстуры рисуются на canvas и подсвечиваются краями */
  const CANVAS_TEXTURES = ['plexus', 'synapse', 'shards', 'constellation'];
  const TEXTURE_KEYS = ['none', ...Object.keys(TEXTURES), ...CANVAS_TEXTURES];

  const FX_KEYS = ['sparks', 'pollen', 'lightning', 'fog', 'rays', 'air', 'snow', 'rain', 'fireflies', 'aurora', 'stars', 'embers', 'matrix', 'bokeh', 'comets', 'glitch', 'plasma', 'ripple', 'edge_runner', 'confetti', 'vortex'];
  const FX_ICONS = {
    sparks: '✨', pollen: '🌼', lightning: '⚡', fog: '🌫️', rays: '🔆', air: '🫧', snow: '❄️', rain: '🌧️',
    fireflies: '💫', aurora: '🌌', stars: '⭐', embers: '🔥', matrix: '🟩', bokeh: '🔵', comets: '☄️',
    glitch: '📺', plasma: '🔮', ripple: '💧', edge_runner: '⭕', confetti: '🎉', vortex: '🌀',
  };

  const DEFAULTS = {
    glow_intensity: 1, glow_spread: 14, edge_width: 1.5, glow_angle: 135, inner_glow: 0.55, edge_mode: 'static',
    hue_shift: 0, opacity: 0.28, blur: 18, saturate: 160, tint: '#0b1226', radius: 24,
    glare_intensity: 0.55, glare_angle: 115, glare_mode: 'static',
    texture: 'none', texture_opacity: 0.12, texture_scale: 1, texture_blend: 'overlay', texture_color: '#ffffff',
    fx_density: 1, fx_speed: 1, fx_opacity: 0.85, fx_colors: 'glow', fx_when: 'always', fx_layer: 'back', fx_quality: 'medium',
    animation_speed: 1, tilt_max: 8, hover: true, tap_flash: true, ignite: true, performance: 'auto',
    inactive_dim: 0.35, beat_bpm: 120, engrave_opacity: 0.16,
  };
  const DEFAULT_TRUE = ['hover', 'tap_flash', 'ignite', 'dim_inactive'];
  const BEHAVIOR_KEYS = ['type', 'card', 'cards', 'layout', 'entity', 'light_glow', 'state_colors', 'value_colors', 'dim_inactive', 'inactive_dim', 'night_dim', 'alert', 'progress_entity', 'progress_attribute', 'progress_min', 'progress_max', 'fx_entity', 'fx_attribute', 'fx_min', 'fx_max', 'fx_when'];
  const INACTIVE = new Set(['off', 'idle', 'standby', 'unavailable', 'unknown', 'closed', 'not_home', 'paused', 'docked']);

  /** Системное «Уменьшить движение»: можно обойти для устройства (afx-motion=force) или для карточки (Производительность: Максимум) */
  const sysReduceMotion = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const motionForced = (cfg) => { try { if (localStorage.getItem('afx-motion') === 'force') return true; } catch (e) { /* без хранилища */ } return !!(cfg && cfg.performance === 'high'); };
  const reduceMotion = (cfg) => sysReduceMotion() && !motionForced(cfg);
  const rand = (a, b) => a + Math.random() * (b - a);

  ['--afx-spin', '--afx-hue', '--afx-irid', '--afx-gl'].forEach((name) => {
    try { CSS.registerProperty({ name, syntax: '<angle>', inherits: true, initialValue: '0deg' }); } catch (e) { /* уже есть */ }
  });
  /* ═════════════════════════ v3: СЛОВАРЬ, ПРЕСЕТЫ, ОБРАЗЫ, ШРИФТЫ ═════════════════════════ */
  const deepMerge = (a, b) => {
    for (const k in b) {
      if (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k])) { a[k] = a[k] || {}; deepMerge(a[k], b[k]); }
      else a[k] = b[k];
    }
    return a;
  };

  deepMerge(I18N, {
    ru: {
      preset: {
        new_year: 'Новый год', northern_lights: 'Северное сияние', sakura: 'Сакура', autumn: 'Осень', synthwave: 'Синтвейв',
        lava: 'Лава', deep_sea: 'Глубина', gold_luxe: 'Золото', arctic: 'Арктика', forest: 'Лес',
      },
      fx: {
        aurora_real: 'Настоящее северное сияние', hail: 'Град', snowfall: 'Снегопад с сугробом', snowflakes: 'Снежинки',
        blizzard: 'Метель', garland: 'Гирлянда', lanterns: 'Ёлочные шары', sparkler: 'Бенгальский огонь',
        leaves: 'Листопад', petals: 'Лепестки сакуры', meteor_shower: 'Метеорный дождь', nebula: 'Туманность',
        sea: 'Море', fire: 'Пламя', smoke: 'Дым', hearts: 'Сердечки', butterflies: 'Бабочки', neon_grid: 'Неоновый горизонт',
        radar: 'Радар', caustics: 'Подводные блики', dna: 'Спираль ДНК', orbits: 'Атом', fireworks: 'Салют',
        motion_trail: 'След за пальцем', magnet: 'Магнит', heartbeat: 'Кардиограмма', charge: 'Жидкий заряд', equalizer: 'Эквалайзер',
      },
      fxgroup: { weather: 'Погода и зима', festive: 'Праздник', nature: 'Природа', space: 'Космос', light: 'Свет', tech: 'Техно', dynamic: 'Живые и реактивные' },
      ev: {
        fireworks: 'Салют', shockwave: 'Ударная волна', sparkle: 'Искорки', ring: 'Звонок (кольца)', flash: 'Вспышка',
        confetti: 'Хлопушка', smoke: 'Облачко дыма', lightning: 'Удар молнии', glitch: 'Глитч-рывок', gust: 'Порыв ветра',
      },
      look: {
        new_year: 'Новый год', northern: 'Полярная ночь', winter_storm: 'Зимняя буря', autumn: 'Осенний парк', sakura: 'Сакура',
        synthwave: 'Синтвейв', underwater: 'Под водой', campfire: 'Костёр', cyber_city: 'Кибергород', starry_night: 'Звёздная ночь',
      },
      opt: {
        auto: 'Авто', natural: 'Природные', classic: 'Классика', cold: 'Холодный белый', chase: 'Бегущие огни', twinkle: 'Мерцание',
        alternate: 'Чередование', steady: 'Постоянный', top: 'По верху', perimeter: 'По периметру', soft: 'Мягкая', strong: 'Сильная',
      },
      section: { content: 'Фон, текст и шрифт', festive: 'Праздник и зима', events: 'Динамические события' },
      label: {
        radius_auto: 'Авто-скругление узких карточек', background_image: 'Фоновое изображение (URL)', background_dim: 'Затемнение фона',
        background_blur: 'Размытие фона', legibility: 'Читаемость текста', text_color: 'Цвет текста', font: 'Шрифт',
        font_scale: 'Размер шрифта', content_scale: 'Масштаб содержимого', content_padding: 'Внутренний отступ',
        garland_colors: 'Цвета гирлянды', garland_mode: 'Режим гирлянды', garland_edges: 'Где висит гирлянда',
        snow_cap: 'Снежная шапка', icicles: 'Сосульки', seasonal: 'Новый год по календарю', fx_schedule: 'Эффекты по времени (18:00-07:00)',
        ev_change: 'При смене состояния', ev_on: 'При включении', ev_off: 'При выключении', ev_tap: 'При касании', ev_alert: 'При тревоге',
        idle_dim: 'Притушить при простое, с', bpm_entity: 'Пульс/темп из сущности',
      },
      ui: {
        looks: 'Образы', myStyles: 'Мои стили', undo: 'Отменить', redo: 'Повторить', exportCode: 'Код стиля', collapse: 'Свернуть всё',
        findSetting: 'Найти настройку…', save: 'Сохранить', styleName: 'Название стиля', delete: 'Удалить', noStyles: 'Пока нет сохранённых стилей',
        importApply: 'Применить код', copyCode: 'Скопировать код', badCode: 'Код не распознан', applied: 'Применено', saved: 'Стиль сохранён',
        fontTheme: 'Из темы', cyr: 'кириллица', latin: 'только латиница', off: 'Выключено',
      },
    },
    en: {
      preset: {
        new_year: 'New Year', northern_lights: 'Northern lights', sakura: 'Sakura', autumn: 'Autumn', synthwave: 'Synthwave',
        lava: 'Lava', deep_sea: 'Deep sea', gold_luxe: 'Gold', arctic: 'Arctic', forest: 'Forest',
      },
      fx: {
        aurora_real: 'Real northern lights', hail: 'Hail', snowfall: 'Snowfall with drift', snowflakes: 'Snowflakes',
        blizzard: 'Blizzard', garland: 'Garland', lanterns: 'Christmas baubles', sparkler: 'Sparkler',
        leaves: 'Falling leaves', petals: 'Sakura petals', meteor_shower: 'Meteor shower', nebula: 'Nebula',
        sea: 'Sea', fire: 'Fire', smoke: 'Smoke', hearts: 'Hearts', butterflies: 'Butterflies', neon_grid: 'Neon horizon',
        radar: 'Radar', caustics: 'Underwater caustics', dna: 'DNA helix', orbits: 'Atom', fireworks: 'Fireworks',
        motion_trail: 'Finger trail', magnet: 'Magnet', heartbeat: 'ECG', charge: 'Liquid charge', equalizer: 'Equalizer',
      },
      fxgroup: { weather: 'Weather & winter', festive: 'Festive', nature: 'Nature', space: 'Space', light: 'Light', tech: 'Tech', dynamic: 'Live & reactive' },
      ev: {
        fireworks: 'Fireworks', shockwave: 'Shockwave', sparkle: 'Sparkles', ring: 'Doorbell rings', flash: 'Flash',
        confetti: 'Party popper', smoke: 'Smoke puff', lightning: 'Lightning strike', glitch: 'Glitch jolt', gust: 'Wind gust',
      },
      look: {
        new_year: 'New Year', northern: 'Polar night', winter_storm: 'Winter storm', autumn: 'Autumn park', sakura: 'Sakura',
        synthwave: 'Synthwave', underwater: 'Underwater', campfire: 'Campfire', cyber_city: 'Cyber city', starry_night: 'Starry night',
      },
      opt: {
        auto: 'Auto', natural: 'Natural', classic: 'Classic', cold: 'Cold white', chase: 'Chasing', twinkle: 'Twinkle',
        alternate: 'Alternating', steady: 'Steady', top: 'Along the top', perimeter: 'Around the edge', soft: 'Soft', strong: 'Strong',
      },
      section: { content: 'Background, text & font', festive: 'Holiday & winter', events: 'Dynamic events' },
      label: {
        radius_auto: 'Auto radius for narrow cards', background_image: 'Background image (URL)', background_dim: 'Background dim',
        background_blur: 'Background blur', legibility: 'Text legibility', text_color: 'Text color', font: 'Font',
        font_scale: 'Font size', content_scale: 'Content scale', content_padding: 'Inner padding',
        garland_colors: 'Garland colors', garland_mode: 'Garland mode', garland_edges: 'Garland placement',
        snow_cap: 'Snow cap', icicles: 'Icicles', seasonal: 'New Year by calendar', fx_schedule: 'Effects by time (18:00-07:00)',
        ev_change: 'On state change', ev_on: 'On turn on', ev_off: 'On turn off', ev_tap: 'On tap', ev_alert: 'On alert',
        idle_dim: 'Dim when idle, s', bpm_entity: 'Pulse/tempo from entity',
      },
      ui: {
        looks: 'Looks', myStyles: 'My styles', undo: 'Undo', redo: 'Redo', exportCode: 'Style code', collapse: 'Collapse all',
        findSetting: 'Find a setting…', save: 'Save', styleName: 'Style name', delete: 'Delete', noStyles: 'No saved styles yet',
        importApply: 'Apply code', copyCode: 'Copy code', badCode: 'Code not recognized', applied: 'Applied', saved: 'Style saved',
        fontTheme: 'From theme', cyr: 'Cyrillic', latin: 'Latin only', off: 'Off',
      },
    },
  });

  Object.assign(PRESETS, {
    new_year: ['#ffd36b', '#ff3b4e', '#22c55e'],
    northern_lights: ['#a7f3d0', '#34d399', '#8b5cf6'],
    sakura: ['#ffe4ef', '#f9a8d4', '#db2777'],
    autumn: ['#fcd34d', '#f97316', '#9a3412'],
    synthwave: ['#f472b6', '#a855f7', '#f97316'],
    lava: ['#fde68a', '#ef4444', '#7f1d1d'],
    deep_sea: ['#67e8f9', '#0284c7', '#1e1b4b'],
    gold_luxe: ['#fff7cc', '#facc15', '#a16207'],
    arctic: ['#ffffff', '#bae6fd', '#38bdf8'],
    forest: ['#d9f99d', '#16a34a', '#14532d'],
  });

  const FX_GROUPS = {
    weather: ['snow', 'snowfall', 'snowflakes', 'hail', 'blizzard', 'rain', 'fog', 'lightning', 'aurora_real'],
    festive: ['garland', 'lanterns', 'sparkler', 'fireworks', 'confetti', 'hearts'],
    nature: ['leaves', 'petals', 'pollen', 'fireflies', 'butterflies', 'sea', 'caustics', 'air', 'fire', 'embers', 'smoke'],
    space: ['stars', 'meteor_shower', 'nebula', 'comets', 'aurora', 'vortex', 'orbits'],
    light: ['rays', 'bokeh', 'plasma', 'ripple', 'sparks', 'edge_runner'],
    tech: ['matrix', 'glitch', 'neon_grid', 'radar', 'dna'],
    dynamic: ['motion_trail', 'magnet', 'heartbeat', 'charge', 'equalizer'],
  };
  const NEW_FX = ['aurora_real', 'hail', 'snowfall', 'snowflakes', 'blizzard', 'garland', 'lanterns', 'sparkler', 'leaves', 'petals', 'meteor_shower', 'nebula', 'sea', 'fire', 'smoke', 'hearts', 'butterflies', 'neon_grid', 'radar', 'caustics', 'dna', 'orbits', 'fireworks', 'motion_trail', 'magnet', 'heartbeat', 'charge', 'equalizer'];
  FX_KEYS.push(...NEW_FX);
  Object.assign(FX_ICONS, {
    aurora_real: '🌌', hail: '🧊', snowfall: '🌨️', snowflakes: '❄️', blizzard: '💨', garland: '💡', lanterns: '🎄', sparkler: '🎇',
    leaves: '🍂', petals: '🌸', meteor_shower: '🌠', nebula: '🪐', sea: '🌊', fire: '🔥', smoke: '💭', hearts: '💗', butterflies: '🦋',
    neon_grid: '🌆', radar: '📡', caustics: '🐠', dna: '🧬', orbits: '⚛️', fireworks: '🎆', motion_trail: '👆', magnet: '🧲',
    heartbeat: '💓', charge: '🔋', equalizer: '🎚️',
  });
  const EVENT_FX = ['fireworks', 'shockwave', 'sparkle', 'ring', 'flash', 'confetti', 'smoke', 'lightning', 'glitch', 'gust'];
  const EVENT_ICONS = { fireworks: '🎆', shockwave: '💥', sparkle: '✨', ring: '🔔', flash: '⚪', confetti: '🎉', smoke: '💨', lightning: '⚡', glitch: '📺', gust: '🌬️' };

  /** Готовые образы: визуальная часть конфигурации */
  const LOOKS = {
    new_year: { icon: '🎄', preset: 'new_year', fx: ['snowfall', 'lanterns', 'garland'], snow_cap: true, icicles: true, texture: 'frost', texture_opacity: 0.14, garland_colors: 'classic', glow_intensity: 1.15 },
    northern: { icon: '🌌', preset: 'northern_lights', fx: ['aurora_real'], texture: 'constellation', texture_opacity: 0.1, glare_intensity: 0.4 },
    winter_storm: { icon: '🌨️', preset: 'arctic', fx: ['blizzard', 'hail'], texture: 'frost', texture_opacity: 0.2, snow_cap: true, icicles: true },
    autumn: { icon: '🍂', preset: 'autumn', fx: ['leaves', 'fog'], texture: 'topo', texture_lit: true, texture_opacity: 0.1 },
    sakura: { icon: '🌸', preset: 'sakura', fx: ['petals', 'pollen'], texture: 'waves', texture_lit: true, texture_opacity: 0.1, iridescent: true },
    synthwave: { icon: '🌆', preset: 'synthwave', fx: ['neon_grid'], texture: 'scanlines', texture_opacity: 0.1, edge_mode: 'rotate', chromatic: true },
    underwater: { icon: '🐠', preset: 'deep_sea', fx: ['caustics', 'air'], texture: 'waves', texture_lit: true, texture_opacity: 0.1 },
    campfire: { icon: '🔥', preset: 'lava', fx: ['fire', 'embers', 'smoke'], texture: 'brushed', texture_opacity: 0.08, breathe: true },
    cyber_city: { icon: '🏙️', preset: 'neon_city', fx: ['matrix'], texture: 'plexus', glare_mode: 'sweep', events: { change: ['glitch'] } },
    starry_night: { icon: '✨', preset: 'royal', fx: ['stars', 'meteor_shower', 'nebula'], texture: 'constellation', texture_opacity: 0.12 },
  };

  /** Шрифты Google с кириллицей (кроме отмеченных) и доступные начертания */
  const FONTS = {
    Onest: '400;500;600;700', Manrope: '400;500;600;700', Inter: '400;500;600;700', Montserrat: '400;500;600;700',
    Rubik: '400;500;600;700', 'Golos Text': '400;500;600;700', Geologica: '400;500;600;700', 'Exo 2': '400;500;600;700',
    Unbounded: '400;500;600;700', Comfortaa: '400;500;600;700', Nunito: '400;500;600;700', Raleway: '400;500;600;700',
    Jost: '400;500;600;700', Tektur: '400;500;600;700', Oswald: '400;500;600;700', 'Roboto Condensed': '400;500;600;700',
    'JetBrains Mono': '400;500;600;700', Play: '400;700', Philosopher: '400;700', 'Russo One': '400', Orbitron: '400;500;600;700',
  };
  const LATIN_ONLY = new Set(['Orbitron']);

  const FontLoader = {
    done: new Set(),
    load(name, url) {
      if (typeof document === 'undefined') return;
      const fam = String(name || '').replace(/["']/g, '').split(',')[0].trim();
      const key = url || fam;
      if (!key || this.done.has(key) || /^(inherit|initial|system-ui|sans-serif|serif|monospace|roboto)$/i.test(fam)) return;
      this.done.add(key);
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = url || `https://fonts.googleapis.com/css2?family=${fam.replace(/ /g, '+')}${FONTS[fam] ? `:wght@${FONTS[fam]}` : ''}&display=swap`;
      document.head.appendChild(l);
    },
    previews() {
      if (this.done.has('#preview') || typeof document === 'undefined') return;
      this.done.add('#preview');
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = `https://fonts.googleapis.com/css2?${Object.keys(FONTS).map((f) => `family=${f.replace(/ /g, '+')}`).join('&')}&text=${encodeURIComponent('АаБбAaBb')}&display=swap`;
      document.head.appendChild(l);
    },
    /** Шрифт всей темы: --afx-theme-font и (необязательно) --afx-theme-font-url */
    watchTheme() {
      if (typeof document === 'undefined' || this._watching) return;
      this._watching = true;
      const check = () => {
        const cs = getComputedStyle(document.documentElement);
        const f = cs.getPropertyValue('--afx-theme-font').trim().replace(/^["']|["']$/g, '');
        const u = cs.getPropertyValue('--afx-theme-font-url').trim().replace(/^["']|["']$/g, '');
        if (f || u) this.load(f, u || undefined);
      };
      check();
      try { new MutationObserver(check).observe(document.documentElement, { attributes: true, attributeFilter: ['style', 'class'] }); } catch (e) { /* без наблюдения */ }
    },
  };

  Object.assign(DEFAULTS, {
    fx_colors: 'auto', radius_auto: true, legibility: 'off', font_scale: 1, content_scale: 1, content_padding: 0,
    background_dim: 0.35, background_blur: 0, garland_colors: 'classic', garland_mode: 'auto', garland_edges: 'top', idle_dim: 0,
  });
  DEFAULT_TRUE.push('radius_auto');
  BEHAVIOR_KEYS.push('events', 'fx_schedule', 'seasonal', 'idle_dim', 'bpm_entity', 'background_image', 'content');

  const HA_FONT_SIZES = { xs: 10, s: 12, m: 14, l: 16, xl: 20, '2xl': 24, '3xl': 28, '4xl': 32, '5xl': 40 };
  const isNewYearSeason = (d = new Date()) => (d.getMonth() === 11 && d.getDate() >= 10) || (d.getMonth() === 0 && d.getDate() <= 14);
  const isNewYearNight = (d = new Date()) => d.getMonth() === 0 && d.getDate() === 1 && d.getHours() === 0 && d.getMinutes() < 15;
  const inSchedule = (spec, d = new Date()) => {
    const m = /^\s*(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})\s*$/.exec(String(spec || ''));
    if (!m) return true;
    const a = +m[1] * 60 + +m[2], b = +m[3] * 60 + +m[4], n = d.getHours() * 60 + d.getMinutes();
    return a <= b ? n >= a && n < b : n >= a || n < b;
  };

  deepMerge(I18N, {
    ru: {
      label: { glare_tint: 'Цвет блика от свечения' },
      ui: {
        importCard: 'Импорт карточки', convert: 'Преобразовать', converted: 'Карточка преобразована',
        importAbout: 'Вставьте YAML или JSON старой карточки. Она станет содержимым стекла: найдутся сущность, цвета и шрифт, старые фон и рамки уберутся, эффекты подберутся по типу устройства.',
        importHint: 'type: custom:button-card\nentity: light.living_room\nstyles:\n  card:\n    - background: "#111"\n    - box-shadow: "0 0 12px #ff6a00"',
        optStrip: 'Убрать старые фон и рамки', optColors: 'Взять цвета из карточки', optEffects: 'Подобрать эффекты',
        badCard: 'Не удалось разобрать: нужен YAML или JSON одной карточки',
      },
      rep: {
        type: 'Тип карточки', entity: 'Главная сущность', entities: 'Всего сущностей', colors: 'Свечение из цветов карточки',
        preset: 'Пресет', font: 'Шрифт', effects: 'Эффекты под устройство', progress: 'Кант-прогресс', stripped: 'Убрано конфликтующих стилей',
        already: 'Это уже карточка Antarikfox',
      },
    },
    en: {
      label: { glare_tint: 'Glare tinted by glow' },
      ui: {
        importCard: 'Import card', convert: 'Convert', converted: 'Card converted',
        importAbout: 'Paste the YAML or JSON of an old card. It becomes the content of the glass: its entity, colors and font are detected, old backgrounds and borders are removed, effects are picked for the device type.',
        importHint: 'type: custom:button-card\nentity: light.living_room\nstyles:\n  card:\n    - background: "#111"\n    - box-shadow: "0 0 12px #ff6a00"',
        optStrip: 'Remove old background & borders', optColors: 'Take colors from the card', optEffects: 'Pick effects',
        badCard: 'Could not parse: paste the YAML or JSON of one card',
      },
      rep: {
        type: 'Card type', entity: 'Main entity', entities: 'Entities found', colors: 'Glow from the card colors',
        preset: 'Preset', font: 'Font', effects: 'Effects for the device', progress: 'Progress edge', stripped: 'Conflicting styles removed',
        already: 'This is already an Antarikfox card',
      },
    },
  });
  DEFAULTS.glare_tint = 0.45;

  /* ── v3.2: конструктор ── */
  const BLOCK_TYPES = ['title', 'image', 'camera', 'entity', 'value', 'button', 'buttons', 'slider', 'select', 'progress', 'media', 'chips', 'text', 'row', 'column', 'divider', 'spacer', 'card'];
  const BLOCK_ICONS = { camera: '📷', select: '📋', title: '🔤', image: '🖼️', entity: '💡', value: '🔢', button: '🔘', buttons: '🎛️', slider: '🎚️', progress: '📶', media: '🎵', chips: '💊', text: '📝', row: '↔️', column: '↕️', divider: '➖', spacer: '⬜', card: '🧩' };
  deepMerge(I18N, {
    ru: {
      section: { builder: 'Конструктор карточки' },
      blk: { camera: 'Камера', select: 'Выбор из списка', title: 'Заголовок', image: 'Фото', entity: 'Сущность', value: 'Число', button: 'Кнопка', buttons: 'Ряд кнопок', slider: 'Ползунок', progress: 'Прогресс', media: 'Медиа', chips: 'Чипы', text: 'Текст', row: 'Ряд', column: 'Колонка', divider: 'Разделитель', spacer: 'Отступ', card: 'Карточка HA' },
      fld: { graph: 'График истории', hours: 'Часов на графике', mode: 'Режим', refresh: 'Обновление снимка', state: 'Состояние', state_not: 'Кроме состояния', above: 'Больше чем', below: 'Меньше чем', text: 'Текст', subtitle: 'Подпись', icon: 'Иконка (mdi:… или эмодзи)', entity: 'Сущность', size: 'Размер', align: 'Выравнивание', image: 'Фото по умолчанию (URL)', state_images: 'Фото по состояниям', height: 'Высота', fit: 'Вписать фото', use_entity_picture: 'Картинка сущности', name: 'Название', secondary: 'Вторая строка', toggle: 'Переключатель', unit: 'Единица', decimals: 'Знаков после запятой', style: 'Стиль', tap_action: 'Нажатие', hold_action: 'Удержание', show_value: 'Показывать значение', min: 'Минимум', max: 'Максимум', entities: 'Сущности', items: 'Кнопки', card: 'Карточка (YAML или JSON)', color: 'Акцентный цвет', padding: 'Внутренний отступ', gap: 'Промежуток', blocks: 'Содержимое', navigation_path: 'Путь (/lovelace/…)', url_path: 'Ссылка', perform_action: 'Действие (домен.сервис)', data: 'Данные (JSON)' },
      act: { auto: 'Авто', toggle: 'Переключить', 'more-info': 'Подробнее', navigate: 'Перейти', url: 'Открыть ссылку', 'perform-action': 'Выполнить действие', none: 'Ничего' },
      opt: { snapshot: 'Снимки', s: 'S', m: 'M', l: 'L', xl: 'XL', left: 'Слева', center: 'По центру', cover: 'Заполнить', contain: 'Целиком', solid: 'Заливка', ghost: 'Контур', round: 'Круглая' },
      rep: { rebuilt: 'Собрано предметов', images: 'Найдено фото', stateImages: 'Фото меняются по состояниям', keptCards: 'Оставлено как вставка (шаблоны)' },
      ui: {
        palette: 'Добавить предмет', layouts: 'Быстрые макеты', layoutEntity: 'Сущность для макета',
        builderEmpty: 'Соберите карточку из предметов: нажмите на любой ниже. Предметы сами управляют устройствами, вложенная карточка не нужна.',
        moveUp: 'Выше', moveDown: 'Ниже', dup: 'Дублировать', del: 'Удалить', addState: '+ состояние', onoff: '+ on / off', addItem: '+ кнопка', addEntity: '+ сущность',
        state: 'Состояние', addInto: 'Добавить внутрь', clearBuilder: 'Очистить конструктор',
        modeWrap: 'Обернуть как есть', modeRebuild: 'Пересобрать в конструкторе', copyResult: 'Скопировать YAML', copiedYaml: 'YAML скопирован',
        lay_light: 'Свет', lay_tv: 'Телевизор', lay_climate: 'Климат', lay_media: 'Музыка', lay_sensor: 'Датчик с графиком', lay_scene: 'Кнопки сцен',
        lay_auto: 'Авто по сущности', lay_power: 'Вкл/выкл', lay_receiver: 'Ресивер', lay_dune: 'Dune HD', lay_alice: 'Алиса', lay_lock: 'Замок', lay_camera: 'Камера',
        unlock: 'Открыть', lock: 'Закрыть', confirm: 'Спрашивать подтверждение', cond: 'Показывать, когда', condTime: 'Время (18:00-07:00)', drag: 'Перетащить',
      },
    },
    en: {
      section: { builder: 'Card builder' },
      blk: { camera: 'Camera', select: 'Option picker', title: 'Title', image: 'Photo', entity: 'Entity', value: 'Number', button: 'Button', buttons: 'Button row', slider: 'Slider', progress: 'Progress', media: 'Media', chips: 'Chips', text: 'Text', row: 'Row', column: 'Column', divider: 'Divider', spacer: 'Spacer', card: 'HA card' },
      fld: { graph: 'History graph', hours: 'Hours on graph', mode: 'Mode', refresh: 'Snapshot refresh', state: 'State', state_not: 'Except state', above: 'Above', below: 'Below', text: 'Text', subtitle: 'Subtitle', icon: 'Icon (mdi:… or emoji)', entity: 'Entity', size: 'Size', align: 'Alignment', image: 'Default photo (URL)', state_images: 'Photos by state', height: 'Height', fit: 'Photo fit', use_entity_picture: 'Entity picture', name: 'Name', secondary: 'Second line', toggle: 'Toggle', unit: 'Unit', decimals: 'Decimals', style: 'Style', tap_action: 'Tap', hold_action: 'Hold', show_value: 'Show value', min: 'Minimum', max: 'Maximum', entities: 'Entities', items: 'Buttons', card: 'Card (YAML or JSON)', color: 'Accent color', padding: 'Inner padding', gap: 'Gap', blocks: 'Content', navigation_path: 'Path (/lovelace/…)', url_path: 'Link', perform_action: 'Action (domain.service)', data: 'Data (JSON)' },
      act: { auto: 'Auto', toggle: 'Toggle', 'more-info': 'More info', navigate: 'Navigate', url: 'Open link', 'perform-action': 'Perform action', none: 'Nothing' },
      opt: { snapshot: 'Snapshots', s: 'S', m: 'M', l: 'L', xl: 'XL', left: 'Left', center: 'Center', cover: 'Fill', contain: 'Fit', solid: 'Solid', ghost: 'Outline', round: 'Round' },
      rep: { rebuilt: 'Blocks built', images: 'Photos found', stateImages: 'Photos switch by state', keptCards: 'Kept as embedded card (templates)' },
      ui: {
        palette: 'Add a block', layouts: 'Quick layouts', layoutEntity: 'Entity for the layout',
        builderEmpty: 'Build the card from blocks: tap any below. Blocks control devices themselves, no inner card needed.',
        moveUp: 'Up', moveDown: 'Down', dup: 'Duplicate', del: 'Delete', addState: '+ state', onoff: '+ on / off', addItem: '+ button', addEntity: '+ entity',
        state: 'State', addInto: 'Add inside', clearBuilder: 'Clear builder',
        modeWrap: 'Wrap as is', modeRebuild: 'Rebuild in the builder', copyResult: 'Copy YAML', copiedYaml: 'YAML copied',
        lay_light: 'Light', lay_tv: 'TV', lay_climate: 'Climate', lay_media: 'Music', lay_sensor: 'Sensor with graph', lay_scene: 'Scene buttons',
        lay_auto: 'Auto by entity', lay_power: 'On/off', lay_receiver: 'Receiver', lay_dune: 'Dune HD', lay_alice: 'Alice', lay_lock: 'Lock', lay_camera: 'Camera',
        unlock: 'Unlock', lock: 'Lock', confirm: 'Ask for confirmation', cond: 'Show when', condTime: 'Time (18:00-07:00)', drag: 'Drag',
      },
    },
  });
  const LAYOUTS = {
    auto: { icon: '✨', make: (e, T) => (LAYOUTS[autoLayout(e)] || LAYOUTS.light).make(e, T) },
    light: { icon: '💡', make: (e) => [{ type: 'title', entity: e }, { type: 'slider', entity: e, name: '' }] },
    tv: { icon: '📺', make: (e) => [{ type: 'image', entity: e, state_images: { on: '', off: '' }, height: 170, fit: 'contain' }, { type: 'row', blocks: [{ type: 'title', entity: e, size: 's' }, { type: 'button', entity: e, icon: 'mdi:power', style: 'round', tap_action: { action: 'toggle' } }] }, { type: 'slider', entity: e, name: '' }] },
    receiver: { icon: '📻', make: (e) => [{ type: 'row', blocks: [{ type: 'title', entity: e, size: 's' }, { type: 'button', entity: e, icon: 'mdi:power', style: 'round', tap_action: { action: 'toggle' } }] }, { type: 'select', entity: e, name: '' }, { type: 'slider', entity: e, name: '' }] },
    dune: { icon: '🎬', make: (e) => [{ type: 'media', entity: e }, { type: 'select', entity: e, name: '' }, { type: 'slider', entity: e, name: '' }] },
    alice: { icon: '🟣', make: (e) => [{ type: 'media', entity: e }, { type: 'slider', entity: e, name: '' }] },
    climate: { icon: '🌡️', make: (e) => [{ type: 'title', entity: e }, { type: 'select', entity: e, name: '' }, { type: 'slider', entity: e, name: '' }] },
    media: { icon: '🎵', make: (e) => [{ type: 'media', entity: e }, { type: 'slider', entity: e, name: '' }] },
    sensor: { icon: '📈', make: (e) => [{ type: 'value', entity: e, size: 'l', graph: true, hours: 24 }] },
    power: { icon: '⏻', make: (e) => [{ type: 'row', blocks: [{ type: 'title', entity: e }, { type: 'button', entity: e, icon: 'mdi:power', style: 'round', tap_action: { action: 'toggle' } }] }] },
    lock: { icon: '🔒', make: (e, T) => [{ type: 'title', entity: e }, { type: 'buttons', items: [
      { type: 'button', name: T('ui', 'unlock'), icon: 'mdi:lock-open', tap_action: { action: 'perform-action', perform_action: 'lock.unlock', data: { entity_id: e }, confirmation: true } },
      { type: 'button', name: T('ui', 'lock'), icon: 'mdi:lock', tap_action: { action: 'perform-action', perform_action: 'lock.lock', data: { entity_id: e } } }] }] },
    camera: { icon: '📷', make: (e) => [{ type: 'camera', entity: e }, { type: 'title', entity: e, size: 's' }] },
    scene: { icon: '🎬', make: (e) => [{ type: 'title', text: '🎬' }, { type: 'buttons', items: [{ type: 'button', name: 'A', icon: 'mdi:lamp', entity: e }, { type: 'button', name: 'B', icon: 'mdi:sofa' }, { type: 'button', name: 'C', icon: 'mdi:bed' }] }] },
  };
  /** Подбор макета по устройству: тип сущности и название (TV, ресивер, Dune HD, Алиса…) */
  const autoLayout = (e) => {
    const id = String(e || '').toLowerCase(), d = id.split('.')[0];
    if (d === 'media_player') {
      if (/alice|alisa|алис|station|yandex/.test(id)) return 'alice';
      if (/dune/.test(id)) return 'dune';
      if (/receiver|resiver|denon|yamaha|onkyo|marantz|pioneer|avr/.test(id)) return 'receiver';
      if (/tv|telek|televizor|lg_|samsung|bravia|webos|android_tv/.test(id)) return 'tv';
      return 'media';
    }
    return { light: 'light', switch: 'power', input_boolean: 'power', automation: 'power', siren: 'power', remote: 'power', humidifier: 'power', climate: 'climate', sensor: 'sensor', lock: 'lock', camera: 'camera', fan: 'light', cover: 'light', script: 'power', scene: 'power' }[d] || 'power';
  };
  const BLOCK_FIELDS = {
    title: [['text', 'text'], ['subtitle', 'text'], ['icon', 'icon'], ['entity', 'entity'], ['size', 'select', ['s', 'm', 'l', 'xl']], ['align', 'select', ['left', 'center']], ['color', 'color'], ['tap_action', 'action']],
    image: [['entity', 'entity'], ['image', 'imageurl'], ['state_images', 'states'], ['height', 'imgheight'], ['fit', 'select', ['cover', 'contain']], ['position', 'select', ['center', 'top', 'bottom', 'left', 'right']], ['off_filter', 'bool'], ['on_glow', 'bool'], ['alt', 'text'], ['use_entity_picture', 'bool'], ['tap_action', 'action'], ['hold_action', 'action']],
    entity: [['entity', 'entity'], ['name', 'text'], ['secondary', 'text'], ['icon', 'icon'], ['toggle', 'bool', true], ['color', 'color'], ['tap_action', 'action'], ['hold_action', 'action']],
    value: [['entity', 'entity'], ['name', 'text'], ['unit', 'text'], ['decimals', 'slider', [0, 3, 1]], ['size', 'select', ['s', 'm', 'l', 'xl']], ['align', 'select', ['left', 'center']], ['graph', 'bool'], ['hours', 'slider', [1, 72, 1, 'h']], ['color', 'color']],
    camera: [['entity', 'entity'], ['mode', 'select', ['auto', 'snapshot']], ['refresh', 'slider', [2, 60, 1, 's']], ['height', 'slider', [80, 480, 10, 'px']], ['fit', 'select', ['cover', 'contain']], ['tap_action', 'action']],
    select: [['entity', 'entity'], ['name', 'text']],
    button: [['name', 'text'], ['icon', 'icon'], ['entity', 'entity'], ['style', 'select', ['solid', 'ghost', 'round']], ['color', 'color'], ['tap_action', 'action'], ['hold_action', 'action']],
    buttons: [['style', 'select', ['solid', 'ghost', 'round']], ['items', 'items']],
    slider: [['entity', 'entity'], ['name', 'text'], ['show_value', 'bool', true]],
    progress: [['entity', 'entity'], ['name', 'text'], ['min', 'number'], ['max', 'number']],
    media: [['entity', 'entity']],
    chips: [['entities', 'entities']],
    text: [['text', 'textarea'], ['size', 'select', ['s', 'm', 'l', 'xl']], ['align', 'select', ['left', 'center']]],
    row: [['blocks', 'nested']], column: [['blocks', 'nested']],
    divider: [], spacer: [['size', 'slider', [2, 60, 2, 'px']]],
    card: [['card', 'yaml']],
  };

  /* ── v3.4: иконки для выбора и размер на панели ── */
  const ICON_LIST = [
    'power:питание вкл выкл', 'lightbulb:лампа свет', 'lightbulb-outline:лампа свет', 'lightbulb-group:люстра свет', 'ceiling-light:люстра потолок свет', 'floor-lamp:торшер свет', 'lamp:настольная лампа ночник', 'led-strip-variant:лента подсветка', 'track-light:споты свет', 'string-lights:гирлянда огни',
    'fireplace:камин огонь', 'fire:огонь пламя', 'radiator:батарея отопление', 'thermometer:температура градусник', 'thermostat:термостат климат', 'snowflake:холод снег', 'air-conditioner:кондиционер', 'fan:вентилятор', 'air-purifier:очиститель воздух', 'air-humidifier:увлажнитель',
    'water:вода капля', 'water-percent:влажность', 'water-boiler:бойлер водонагреватель', 'kettle:чайник', 'coffee-maker:кофеварка кофе', 'washing-machine:стиральная машина', 'tumble-dryer:сушилка', 'dishwasher:посудомойка', 'fridge:холодильник', 'stove:плита', 'microwave:микроволновка', 'robot-vacuum:пылесос робот', 'iron:утюг',
    'television:телевизор тв', 'television-classic:телевизор старый', 'monitor:монитор экран', 'projector:проектор', 'speaker:колонка динамик', 'speaker-wireless:колонка беспроводная', 'cast:трансляция', 'audio-video:ресивер av', 'music:музыка', 'music-note:нота музыка', 'play:играть плей', 'pause:пауза', 'play-pause:играть пауза', 'stop:стоп', 'skip-next:следующий', 'skip-previous:предыдущий', 'volume-high:громкость звук', 'volume-off:без звука', 'microphone:микрофон алиса', 'remote:пульт', 'gamepad-variant:геймпад игры', 'sony-playstation:playstation ps5', 'movie-open:кино фильм', 'filmstrip:плёнка видео', 'popcorn:попкорн кино',
    'router-wireless:роутер wifi', 'wifi:wifi сеть', 'lan:сеть провод', 'server:сервер', 'nas:nas хранилище', 'desktop-tower:компьютер пк', 'laptop:ноутбук', 'cellphone:телефон смартфон', 'tablet:планшет', 'printer-3d:3d принтер', 'printer:принтер', 'bluetooth:bluetooth',
    'camera:камера фото', 'cctv:видеонаблюдение камера', 'doorbell:звонок дверь', 'door:дверь', 'door-open:дверь открыта', 'door-closed:дверь закрыта', 'garage:гараж', 'garage-open:гараж открыт', 'gate:ворота калитка', 'lock:замок закрыт', 'lock-open:замок открыт', 'shield-home:охрана дом', 'shield-lock:охрана', 'alarm-light:сирена тревога', 'motion-sensor:движение датчик', 'smoke-detector:дым датчик', 'leak:протечка',
    'home:дом', 'home-outline:дом', 'sofa:диван гостиная', 'bed:кровать спальня', 'bed-king:кровать спальня', 'bathtub:ванна', 'shower:душ', 'toilet:туалет', 'silverware-fork-knife:кухня еда', 'table-furniture:стол', 'desk:рабочий стол', 'chair-rolling:кресло', 'wardrobe:шкаф', 'window-closed:окно закрыто', 'window-open:окно открыто', 'blinds:жалюзи', 'curtains:шторы', 'roller-shade:рулонная штора',
    'flower:цветок', 'sprout:росток растение', 'tree:дерево', 'pine-tree:ель ёлка', 'christmas-tree:новогодняя ёлка', 'weather-sunny:солнце погода', 'weather-night:ночь', 'weather-cloudy:облачно', 'weather-rainy:дождь', 'weather-snowy:снег', 'weather-windy:ветер', 'moon-waning-crescent:луна', 'star:звезда', 'heart:сердце', 'lightning-bolt:молния энергия', 'flash:вспышка',
    'battery:батарея заряд', 'battery-charging:зарядка', 'ev-station:зарядная станция', 'car:машина авто', 'car-electric:электромобиль', 'solar-power:солнечная панель', 'gauge:датчик шкала', 'chart-line:график', 'speedometer:скорость', 'clock-outline:часы время', 'timer-outline:таймер', 'alarm:будильник', 'calendar:календарь', 'bell:уведомление колокол', 'bell-ring:звонок',
    'account:человек', 'account-group:семья люди', 'baby-face-outline:ребёнок', 'dog:собака', 'cat:кошка', 'robot:робот', 'creation:магия звезды', 'palette:палитра цвет', 'script-text:скрипт', 'cog:настройки', 'tune:настройка регулировка', 'gesture-tap:нажатие', 'toggle-switch:выключатель', 'power-socket-eu:розетка', 'power-plug:вилка розетка', 'party-popper:праздник', 'glass-cocktail:коктейль бар', 'gift:подарок',
  ].map((x) => { const [n, k] = x.split(':'); return { icon: `mdi:${n}`, keys: `${n} ${k}`.toLowerCase() }; });
  const ICON_EMOJI = ['🔥', '💡', '📺', '🎵', '🌡️', '❄️', '💧', '🔒', '🚪', '🛋️', '🛏️', '🎄', '⚡', '🔌', '🎮', '🦊'];
  deepMerge(I18N, {
    ru: {
      section: { layout: 'Размер на панели' },
      label: { grid_cols: 'Ширина (колонок из 12)', grid_rows: 'Высота (рядов)', valign: 'Содержимое по высоте' },
      opt: { v_top: 'Сверху', v_center: 'По центру', v_bottom: 'Снизу', v_between: 'Распределить' },
      ui: { layoutHint: 'Работает в панелях с разделами (sections). 12 — во всю ширину, 6 — половина. В панелях-колонках ширину задаёт сама колонка.', iconSearch: 'Найти иконку: камин, лампа, tv…', iconEmoji: 'Эмодзи', iconAll: 'Иконки', auto: 'Авто', fullWidth: 'Во всю ширину' },
    },
    en: {
      section: { layout: 'Size on dashboard' },
      label: { grid_cols: 'Width (columns of 12)', grid_rows: 'Height (rows)', valign: 'Content vertical position' },
      opt: { v_top: 'Top', v_center: 'Center', v_bottom: 'Bottom', v_between: 'Spread out' },
      ui: { layoutHint: 'Works in sections dashboards. 12 is full width, 6 is half. In masonry dashboards the column sets the width.', iconSearch: 'Find an icon: fireplace, lamp, tv…', iconEmoji: 'Emoji', iconAll: 'Icons', auto: 'Auto', fullWidth: 'Full width' },
    },
  });
  BEHAVIOR_KEYS.push('grid_options', 'valign');
  /** mdi:… в любом регистре, с пробелами после двоеточия */
  const normIcon = (v) => {
    if (isNil(v)) return v;
    const s = String(v).trim();
    const m = /^([a-z]+)\s*:\s*([a-z0-9-]+)$/i.exec(s);
    return m ? `${m[1].toLowerCase()}:${m[2].toLowerCase()}` : s;
  };

  /* ── v3.5: загрузка фото ── */
  deepMerge(I18N, {
    ru: {
      ui: {
        upload: 'Загрузить на сервер', uploading: 'Сжимаю и загружаю фото…', upFail: 'Не удалось загрузить фото',
        up_www: 'Фото сохранено в /config/www/antarikfox/', up_image: 'File editor недоступен — фото сохранено во встроенное хранилище HA',
        up_download: 'Автозагрузка недоступна — файл скачан. Положите его в /config/www/antarikfox/', up_preview: 'Демо: фото только для предпросмотра',
        uploadPair: '☁ Загрузить на сервер фото «вкл» и «выкл» (выберите оба сразу)', whereWww: 'На сервере: ', whereImage: 'На сервере: во встроенном хранилище HA', wherePreview: 'Только предпросмотр — не на сервере', whereMissing: 'Файла нет на сервере, положите его сюда: ', lay_photo: 'С фото вкл/выкл', stOn: 'включено', stOff: 'выключено',
      },
    },
    en: {
      ui: {
        upload: 'Upload to the server', uploading: 'Compressing and uploading…', upFail: 'Photo upload failed',
        up_www: 'Photo saved to /config/www/antarikfox/', up_image: 'File editor unavailable — photo saved to HA image storage',
        up_download: 'Auto upload unavailable — the file was downloaded. Put it into /config/www/antarikfox/', up_preview: 'Demo: photo is for preview only',
        uploadPair: '☁ Upload “on” and “off” photos to the server (pick both at once)', whereWww: 'On the server: ', whereImage: 'On the server: HA image storage', wherePreview: 'Preview only — not on the server', whereMissing: 'File is missing on the server, put it here: ', lay_photo: 'Photo on/off', stOn: 'on', stOff: 'off',
      },
    },
  });
  LAYOUTS.photo = { icon: '🖼️', make: (e) => [
    { type: 'image', entity: e, state_images: { on: '', off: '' }, height: 220, fit: 'contain', tap_action: { action: 'toggle' } },
    { type: 'row', blocks: [{ type: 'title', entity: e, size: 's' }, { type: 'button', entity: e, icon: 'mdi:power', style: 'round', tap_action: { action: 'toggle' } }] },
  ] };

  /* ── v3.6: «только фото», язык вручную, работа с панелями ── */
  LAYOUTS.photoonly = { icon: '🖼', pad: 0, make: (e) => [
    { type: 'image', entity: e, state_images: { on: '', off: '' }, height: 'auto', fit: 'cover', tap_action: { action: 'toggle' }, hold_action: { action: 'more-info' } },
  ] };
  deepMerge(I18N, {
    ru: {
      fld: { position: 'Положение фото', off_filter: 'Затемнять, когда выключено', on_glow: 'Тёплый свет, когда включено', alt: 'Описание фото (для экранного диктора)', height: 'Высота' },
      opt: { bottom: 'Снизу', right: 'Справа', h_fixed: 'Фиксированная', h_auto: 'По пропорциям фото', h_fill: 'Заполнить карточку' },
      ui: { lay_photoonly: 'Только фото', lang: 'Язык', langAuto: 'Авто', langHint: 'Язык редактора и карточек: Авто — как в HA', dropHere: 'Перетащите фото сюда или вставьте Ctrl+V' },
    },
    en: {
      fld: { position: 'Photo position', off_filter: 'Darken when off', on_glow: 'Warm light when on', alt: 'Photo description (screen readers)', height: 'Height' },
      opt: { bottom: 'Bottom', right: 'Right', h_fixed: 'Fixed', h_auto: 'Photo proportions', h_fill: 'Fill the card' },
      ui: { lay_photoonly: 'Photo only', lang: 'Language', langAuto: 'Auto', langHint: 'Editor and card language: Auto follows HA', dropHere: 'Drop a photo here or paste with Ctrl+V' },
    },
  });

  /* ── v3.7: без рамки, свой фон, движение, зима ── */
  Object.assign(DEFAULTS, { auto_contrast: true, bg_opacity: 0.85, bg_angle: 165, snow_depth: 1, icicle_length: 1, texture_speed: 1 });
  BEHAVIOR_KEYS.push('bare', 'hide_edge', 'hide_glow', 'hide_bg', 'bg_color', 'bg_color2', 'bg_opacity', 'bg_angle', 'auto_contrast');
  deepMerge(I18N, {
    ru: {
      label: {
        bare: 'Без стекла и рамки (только содержимое)', hide_edge: 'Убрать окантовку', hide_glow: 'Убрать свечение', hide_bg: 'Убрать фон стекла', depth: 'Тень под карточкой',
        bg_color: 'Цвет фона', bg_color2: 'Второй цвет фона (градиент)', bg_opacity: 'Непрозрачность фона', bg_angle: 'Угол градиента фона', auto_contrast: 'Тёмный текст на светлом фоне',
        garland: 'Гирлянда', snow_depth: 'Толщина снега', icicle_length: 'Длина сосулек', texture_speed: 'Скорость живой текстуры',
        float: 'Парение', sway: 'Покачивание (и на планшете)', jelly: 'Желе при нажатии', parallax: 'Параллакс содержимого', spotlight: 'Прожектор за пальцем',
        grain: 'Плёночное зерно', neon: 'Мерцание неона', marching: 'Бегущий кант', state_pulse: 'Волна при смене состояния', glint: 'Блик по канту',
      },
      ui: {
        lightCard: '☀ Светлая карточка', darkCard: '🌙 Тёмная карточка', bareHint: 'Подходит для фото на прозрачном фоне: остаётся только содержимое, без стекла, рамки и свечения.',
        resetSec: '↺ Сбросить раздел', secReset: 'Раздел сброшен', texLive: 'Живые', texStatic: 'Статичные',
        rmTitle: 'На устройстве включено «Уменьшить движение»', rmText: 'Система просит не показывать анимации, поэтому эффекты, гирлянда и движение выключены. Можно включить их для этого устройства.',
        rmOn: 'Показывать анимации на этом устройстве', rmOff: 'Вернуть системную настройку',
        motionHint: 'Наклон, подъём, параллакс и прожектор работают от мыши и от пальца (пока палец на карточке). При включении эффект один раз показывается в предпросмотре.',
      },
    },
    en: {
      label: {
        bare: 'No glass or frame (content only)', hide_edge: 'Hide the edge', hide_glow: 'Hide the glow', hide_bg: 'Hide the glass background', depth: 'Drop shadow',
        bg_color: 'Background color', bg_color2: 'Second background color (gradient)', bg_opacity: 'Background opacity', bg_angle: 'Background gradient angle', auto_contrast: 'Dark text on light background',
        garland: 'Garland', snow_depth: 'Snow thickness', icicle_length: 'Icicle length', texture_speed: 'Live texture speed',
        float: 'Floating', sway: 'Sway (works on tablets)', jelly: 'Jelly on tap', parallax: 'Content parallax', spotlight: 'Spotlight follows finger',
        grain: 'Film grain', neon: 'Neon flicker', marching: 'Marching edge', state_pulse: 'Pulse on state change', glint: 'Glint along the edge',
      },
      ui: {
        lightCard: '☀ Light card', darkCard: '🌙 Dark card', bareHint: 'Great for photos with a transparent background: only the content stays, no glass, frame or glow.',
        resetSec: '↺ Reset section', secReset: 'Section reset', texLive: 'Live', texStatic: 'Static',
        rmTitle: '“Reduce motion” is on for this device', rmText: 'The system asks to avoid animations, so effects, the garland and motion are off. You can enable them for this device.',
        rmOn: 'Show animations on this device', rmOff: 'Restore the system setting',
        motionHint: 'Tilt, lift, parallax and spotlight follow the mouse and your finger (while it is on the card). Enabling an effect plays it once in the preview.',
      },
    },
  });
  /* ═════════════════════════ ДВИЖОК СПЕЦЭФФЕКТОВ ═════════════════════════ */
  const WARM = [[255, 214, 140], [255, 140, 60], [255, 72, 48]];
  const GLYPHS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789ABCDEF';
  const r3 = () => Math.floor(Math.random() * 3);

  const FX_IMPL = {
    /* ── Искры ── */
    sparks: {
      init(s) { s.p = []; s.acc = 0; s.burst = rand(0.4, 1.6); },
      frame(s, ctx, dt, e) {
        s.acc += dt * e.n(20);
        while (s.acc >= 1) { s.acc -= 1; s.p.push(e.spark(rand(0, e.w), e.h + 4, rand(-50, 50), rand(-270, -110))); }
        s.burst -= dt;
        if (s.burst <= 0) {
          s.burst = rand(1.4, 3.8) / Math.max(0.3, e.o.density);
          const x = rand(e.w * 0.15, e.w * 0.85);
          for (let i = 0; i < 14; i++) {
            const a = rand(-Math.PI * 0.85, -Math.PI * 0.15), v = rand(120, 300);
            s.p.push(e.spark(x, e.h + 2, Math.cos(a) * v, Math.sin(a) * v));
          }
        }
        e.drawSparks(s.p, ctx, dt, 260);
      },
      tap(s, e, x, y) { for (let i = 0; i < 16; i++) { const a = rand(0, Math.PI * 2), v = rand(80, 240); s.p.push(e.spark(x, y, Math.cos(a) * v, Math.sin(a) * v - 60)); } },
    },
    /* ── Пыльца ── */
    pollen: {
      init(s, e) { s.p = Array.from({ length: e.n(36) }, () => e.mk({ x: rand(0, e.w), y: rand(0, e.h), r: rand(0.8, 2.6), vx: rand(-7, 7), vy: rand(-12, -3), ph: rand(0, 6.28), tw: rand(1, 3) })); },
      frame(s, ctx, dt, e) {
        for (const p of s.p) {
          p.x += (p.vx + Math.sin(e.t * 0.8 + p.ph) * 9) * dt; p.y += p.vy * dt;
          if (p.y < -8) { p.y = e.h + 8; p.x = rand(0, e.w); }
          if (p.x < -8) p.x = e.w + 8; else if (p.x > e.w + 8) p.x = -8;
          e.dot(ctx, p.x, p.y, p.r * 7, e.pc(p), 0.45 + 0.45 * Math.sin(e.t * p.tw + p.ph), 'glow');
        }
      },
    },
    /* ── Молнии ── */
    lightning: {
      init(s) { s.b = []; s.next = rand(0.3, 1.2); s.flash = 0; },
      frame(s, ctx, dt, e) {
        s.next -= dt;
        if (s.next <= 0) {
          s.next = rand(1.2, 3.8) / Math.max(0.35, e.o.density);
          s.b.push(e.bolt()); if (Math.random() < 0.35) s.b.push(e.bolt());
          s.flash = 1;
        }
        if (s.flash > 0) {
          ctx.globalAlpha = clamp(e.alpha * s.flash * 0.22, 0, 1);
          ctx.fillStyle = rgbStr(mixRgb(e.c(0), [255, 255, 255], 0.5));
          ctx.fillRect(0, 0, e.w, e.h);
          s.flash -= dt * 4;
        }
        ctx.lineJoin = 'round'; ctx.lineCap = 'round';
        for (let i = s.b.length - 1; i >= 0; i--) {
          const b = s.b[i]; b.life -= dt;
          if (b.life <= 0) { s.b.splice(i, 1); continue; }
          const a = clamp(b.life / b.max, 0, 1) * (Math.random() > 0.15 ? 1 : 0.35);
          for (const seg of b.segs) {
            ctx.beginPath();
            seg.pts.forEach((p, j) => (j ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
            ctx.globalAlpha = clamp(e.alpha * a * 0.35, 0, 1); ctx.strokeStyle = rgbStr(b.col); ctx.lineWidth = seg.w * 5; ctx.stroke();
            ctx.globalAlpha = clamp(e.alpha * a, 0, 1); ctx.strokeStyle = rgbStr(mixRgb(b.col, [255, 255, 255], 0.7)); ctx.lineWidth = seg.w; ctx.stroke();
          }
        }
      },
      tap(s, e, x, y) { s.b.push(e.bolt(x, y)); s.flash = 0.7; },
    },
    /* ── Туман ── */
    fog: {
      blend: 'screen',
      init(s, e) { s.p = Array.from({ length: Math.max(3, e.n(6)) }, () => e.mk({ x: rand(0, e.w), y: rand(e.h * 0.2, e.h), r: rand(0.35, 0.7) * Math.max(e.w, e.h), vx: rand(6, 14) * (Math.random() < 0.5 ? -1 : 1), ph: rand(0, 6.28) })); },
      frame(s, ctx, dt, e) {
        for (const p of s.p) {
          p.x += p.vx * dt;
          if (p.x - p.r > e.w) p.x = -p.r; else if (p.x + p.r < 0) p.x = e.w + p.r;
          e.dot(ctx, p.x, p.y + Math.sin(e.t * 0.3 + p.ph) * 8, p.r * 2, mixRgb(e.pc(p), [255, 255, 255], 0.35), 0.24 + 0.08 * Math.sin(e.t * 0.4 + p.ph), 'soft');
        }
      },
    },
    /* ── Лучи ── */
    rays: {
      init(s, e) { s.r = Array.from({ length: 7 }, (_, i) => e.mk({ a: 0.22 + i * 0.17 + rand(-0.05, 0.05), w: rand(0.03, 0.08), ph: rand(0, 6.28), sp: rand(0.3, 0.7), ci: i % 3 })); s.d = Array.from({ length: e.n(14) }, () => ({ x: rand(0, e.w), y: rand(0, e.h), ph: rand(0, 6.28) })); },
      frame(s, ctx, dt, e) {
        const ox = -e.w * 0.08, oy = -e.h * 0.18, L = Math.hypot(e.w, e.h) * 1.3;
        for (const r of s.r) {
          const ang = r.a + Math.sin(e.t * r.sp * 0.5 + r.ph) * 0.06;
          const a = 0.14 + 0.1 * Math.sin(e.t * r.sp + r.ph);
          const col = e.pc(r);
          const g = ctx.createLinearGradient(ox, oy, ox + Math.cos(ang) * L, oy + Math.sin(ang) * L);
          g.addColorStop(0, rgbStr(col, 0.9)); g.addColorStop(0.45, rgbStr(col, 0.22)); g.addColorStop(1, rgbStr(col, 0));
          ctx.globalAlpha = clamp(e.alpha * a * 2, 0, 1); ctx.fillStyle = g;
          ctx.beginPath(); ctx.moveTo(ox, oy);
          ctx.lineTo(ox + Math.cos(ang - r.w) * L, oy + Math.sin(ang - r.w) * L);
          ctx.lineTo(ox + Math.cos(ang + r.w) * L, oy + Math.sin(ang + r.w) * L);
          ctx.closePath(); ctx.fill();
        }
        for (const d of s.d) {
          d.y += Math.sin(e.t * 0.5 + d.ph) * 4 * dt; d.x += 3 * dt; if (d.x > e.w) d.x = 0;
          e.dot(ctx, d.x, d.y, 4, [255, 255, 255], 0.35 + 0.3 * Math.sin(e.t * 2 + d.ph), 'glow');
        }
      },
    },
    /* ── Воздушность (пузырьки) ── */
    air: {
      init(s, e) { s.p = Array.from({ length: e.n(16) }, () => e.mk({ x: rand(0, e.w), y: rand(0, e.h), r: rand(2, 7), vy: rand(-34, -12), ph: rand(0, 6.28), wob: rand(4, 12) })); },
      frame(s, ctx, dt, e) {
        ctx.lineWidth = 1;
        for (const p of s.p) {
          p.y += p.vy * dt;
          if (p.y < -12) { p.y = e.h + 12; p.x = rand(0, e.w); }
          const x = p.x + Math.sin(e.t * 1.5 + p.ph) * p.wob, col = e.pc(p);
          ctx.globalAlpha = clamp(e.alpha * 0.6, 0, 1);
          ctx.beginPath(); ctx.arc(x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = rgbStr(col, 0.08); ctx.fill(); ctx.strokeStyle = rgbStr(col, 0.9); ctx.stroke();
          ctx.beginPath(); ctx.arc(x - p.r * 0.35, p.y - p.r * 0.35, p.r * 0.25, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.fill();
        }
      },
    },
    /* ── Снег ── */
    snow: {
      init(s, e) { s.p = Array.from({ length: e.n(55) }, () => e.mk({ x: rand(0, e.w), y: rand(0, e.h), r: rand(0.6, 2.4), ph: rand(0, 6.28) })); },
      frame(s, ctx, dt, e) {
        for (const p of s.p) {
          p.y += (10 + p.r * 14) * dt; p.x += Math.sin(e.t * 0.7 + p.ph) * 12 * dt;
          if (p.y > e.h + 6) { p.y = -6; p.x = rand(0, e.w); }
          e.dot(ctx, p.x, p.y, p.r * 5, mixRgb(e.pc(p), [255, 255, 255], 0.7), 0.85, 'glow');
        }
      },
    },
    /* ── Дождь ── */
    rain: {
      init(s, e) { s.p = Array.from({ length: e.n(60) }, () => e.mk({ x: rand(0, e.w * 1.1), y: rand(-e.h, e.h), vy: rand(420, 640), len: rand(8, 18) })); s.sp = []; },
      frame(s, ctx, dt, e) {
        ctx.lineWidth = 1; ctx.lineCap = 'round';
        for (const p of s.p) {
          p.y += p.vy * dt; p.x -= p.vy * 0.12 * dt;
          if (p.y > e.h) { if (Math.random() < 0.5) s.sp.push({ x: p.x, life: 0.3, ci: p.ci, rb: p.rb }); p.y = rand(-e.h * 0.3, -5); p.x = rand(0, e.w * 1.15); }
          ctx.globalAlpha = clamp(e.alpha * 0.55, 0, 1);
          ctx.strokeStyle = rgbStr(mixRgb(e.pc(p), [255, 255, 255], 0.4));
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.len * 0.12, p.y - p.len); ctx.stroke();
        }
        for (let i = s.sp.length - 1; i >= 0; i--) {
          const sp = s.sp[i]; sp.life -= dt;
          if (sp.life <= 0) { s.sp.splice(i, 1); continue; }
          const k = 1 - sp.life / 0.3;
          ctx.globalAlpha = clamp(e.alpha * (1 - k) * 0.7, 0, 1); ctx.strokeStyle = rgbStr(e.pc(sp));
          ctx.beginPath(); ctx.ellipse(sp.x, e.h - 2, 2 + k * 7, 1 + k * 2, 0, Math.PI, Math.PI * 2); ctx.stroke();
        }
      },
    },
    /* ── Светлячки ── */
    fireflies: {
      init(s, e) { s.p = Array.from({ length: e.n(12) }, () => e.mk({ x: rand(0, e.w), y: rand(0, e.h), a: rand(0, 6.28), sp: rand(10, 26), ph: rand(0, 6.28), f: rand(0.6, 1.6) })); },
      frame(s, ctx, dt, e) {
        for (const p of s.p) {
          p.a += rand(-1, 1) * dt * 2.5;
          p.x += Math.cos(p.a) * p.sp * dt; p.y += Math.sin(p.a) * p.sp * dt;
          if (p.x < 0 || p.x > e.w) { p.a = Math.PI - p.a; p.x = clamp(p.x, 0, e.w); }
          if (p.y < 0 || p.y > e.h) { p.a = -p.a; p.y = clamp(p.y, 0, e.h); }
          const a = Math.pow(Math.max(0, Math.sin(e.t * p.f + p.ph)), 3);
          e.dot(ctx, p.x, p.y, 22, e.pc(p), a * 0.8, 'glow');
          e.dot(ctx, p.x, p.y, 5, [255, 255, 240], a, 'glow');
        }
      },
    },
    /* ── Северное сияние ── */
    aurora: {
      blend: 'screen',
      init(s, e) { s.b = [0, 1, 2].map((i) => e.mk({ ph: rand(0, 6.28), y: 0.14 + i * 0.13, A: rand(0.06, 0.12), k: rand(1.5, 3), sp: rand(0.25, 0.5), ci: i })); },
      frame(s, ctx, dt, e) {
        for (const b of s.b) {
          const H = e.h * (0.22 + 0.06 * Math.sin(e.t * 0.7 + b.ph)), top = [], step = Math.max(6, e.w / 40);
          for (let x = 0; x <= e.w + step; x += step) {
            top.push([x, e.h * (b.y + b.A * Math.sin((x / e.w) * b.k * Math.PI + e.t * b.sp + b.ph)) + 6 * Math.sin(x * 0.05 + e.t)]);
          }
          ctx.beginPath();
          top.forEach((p, j) => (j ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
          for (let j = top.length - 1; j >= 0; j--) {
            const [x, y] = top[j];
            ctx.lineTo(x, y + H * (0.6 + 0.4 * Math.sin((x / e.w) * 5 + e.t * 0.8 + b.ph)));
          }
          ctx.closePath();
          const col = e.pc(b), y0 = e.h * (b.y - 0.12);
          const g = ctx.createLinearGradient(0, y0, 0, y0 + H + e.h * 0.3);
          g.addColorStop(0, rgbStr(col, 0)); g.addColorStop(0.35, rgbStr(col, 0.6)); g.addColorStop(1, rgbStr(col, 0));
          ctx.globalAlpha = clamp(e.alpha * 0.7, 0, 1); ctx.fillStyle = g; ctx.fill();
        }
      },
    },
    /* ── Звёздное небо ── */
    stars: {
      init(s, e) { s.p = Array.from({ length: e.n(46) }, () => e.mk({ x: rand(0, e.w), y: rand(0, e.h), r: rand(0.4, 1.4), tw: rand(0.8, 3), ph: rand(0, 6.28) })); s.sh = null; s.next = rand(1, 4); },
      frame(s, ctx, dt, e) {
        for (const p of s.p) e.dot(ctx, p.x, p.y, p.r * 6, mixRgb(e.pc(p), [255, 255, 255], 0.55), 0.25 + 0.75 * Math.pow(Math.sin(e.t * p.tw + p.ph), 2), 'glow');
        s.next -= dt;
        if (!s.sh && s.next <= 0) { s.sh = { x: rand(0, e.w * 0.7), y: rand(0, e.h * 0.4), v: rand(260, 400), life: 0.9 }; s.next = rand(2.5, 7) / Math.max(0.3, e.o.density); }
        if (s.sh) {
          const m = s.sh; m.life -= dt; m.x += m.v * dt; m.y += m.v * 0.45 * dt;
          if (m.life <= 0) { s.sh = null; return; }
          const g = ctx.createLinearGradient(m.x - 70, m.y - 31, m.x, m.y);
          g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(1, 'rgba(255,255,255,.95)');
          ctx.globalAlpha = clamp(e.alpha * m.life, 0, 1); ctx.strokeStyle = g; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(m.x - 70, m.y - 31); ctx.lineTo(m.x, m.y); ctx.stroke();
        }
      },
    },
    /* ── Тлеющие угли ── */
    embers: {
      init(s, e) { s.p = Array.from({ length: e.n(24) }, () => e.mk({ x: rand(0, e.w), y: rand(0, e.h), vy: rand(-45, -15), vx: rand(-8, 8), ph: rand(0, 6.28), sz: rand(1.2, 3), fl: rand(0, 6), fs: rand(8, 16) })); },
      frame(s, ctx, dt, e) {
        for (const p of s.p) {
          p.y += p.vy * dt; p.x += (p.vx + Math.sin(e.t * 2 + p.ph) * 10) * dt; p.fl += dt * p.fs;
          if (p.y < -6) { p.y = e.h + 6; p.x = rand(0, e.w); }
          const a = (0.55 + 0.45 * Math.sin(p.fl)) * clamp((p.y / e.h) * 1.4, 0, 1);
          e.dot(ctx, p.x, p.y, p.sz * 6, e.pc(p), a, 'glow');
        }
      },
    },
    /* ── Цифровой дождь ── */
    matrix: {
      init(s, e) { s.fs = 12; s.cols = Math.ceil(e.w / s.fs); s.d = Array.from({ length: s.cols }, () => ({ y: rand(-e.h, e.h), sp: rand(50, 130), on: Math.random() < 0.45 * e.o.density + 0.1 })); },
      frame(s, ctx, dt, e) {
        ctx.font = `${s.fs}px ui-monospace, monospace`; ctx.textBaseline = 'top';
        const L = 14;
        s.d.forEach((d, i) => {
          if (!d.on) { if (Math.random() < dt * 0.3) { d.on = true; d.y = rand(-e.h * 0.5, 0); } return; }
          d.y += d.sp * dt;
          const hr = Math.floor(d.y / s.fs), col = e.c(i % 3);
          for (let k = 0; k < L; k++) {
            const row = hr - k;
            if (row < 0 || row * s.fs > e.h) continue;
            const ch = GLYPHS[Math.abs(i * 7919 + row * 104729 + (k < 2 ? Math.floor(e.t * 10) : 0)) % GLYPHS.length];
            ctx.globalAlpha = clamp(e.alpha * (1 - k / L) * 0.9, 0, 1);
            ctx.fillStyle = rgbStr(k === 0 ? mixRgb(col, [255, 255, 255], 0.75) : col);
            ctx.fillText(ch, i * s.fs, row * s.fs);
          }
          if ((hr - L) * s.fs > e.h) { d.y = rand(-e.h * 0.5, 0); d.sp = rand(50, 130); d.on = Math.random() < 0.45 * e.o.density + 0.1; }
        });
      },
    },
    /* ── Боке ── */
    bokeh: {
      blend: 'screen',
      init(s, e) { s.p = Array.from({ length: e.n(9) }, () => e.mk({ x: rand(0, e.w), y: rand(0, e.h), r: rand(10, 34), vx: rand(-6, 6), vy: rand(-5, 5), ph: rand(0, 6.28) })); },
      frame(s, ctx, dt, e) {
        for (const p of s.p) {
          p.x += p.vx * dt; p.y += p.vy * dt;
          if (p.x < -p.r) p.x = e.w + p.r; else if (p.x > e.w + p.r) p.x = -p.r;
          if (p.y < -p.r) p.y = e.h + p.r; else if (p.y > e.h + p.r) p.y = -p.r;
          e.dot(ctx, p.x, p.y, p.r * 2, e.pc(p), 0.4 + 0.15 * Math.sin(e.t * 0.6 + p.ph), 'disc');
        }
      },
    },
    /* ── Кометы ── */
    comets: {
      init(s) { s.c = []; s.next = rand(0.2, 1); },
      frame(s, ctx, dt, e) {
        s.next -= dt;
        if (s.next <= 0) {
          s.next = rand(0.6, 2.2) / Math.max(0.3, e.o.density);
          const a = rand(0.4, 0.8);
          s.c.push(e.mk({ x: rand(-e.w * 0.2, e.w * 0.8), y: -10, vx: Math.cos(a), vy: Math.sin(a), v: rand(260, 460), len: rand(60, 120) }));
        }
        ctx.lineCap = 'round';
        for (let i = s.c.length - 1; i >= 0; i--) {
          const c = s.c[i];
          c.x += c.vx * c.v * dt; c.y += c.vy * c.v * dt;
          if (c.x - c.len > e.w || c.y - c.len > e.h) { s.c.splice(i, 1); continue; }
          const tx = c.x - c.vx * c.len, ty = c.y - c.vy * c.len, col = e.pc(c);
          const g = ctx.createLinearGradient(tx, ty, c.x, c.y);
          g.addColorStop(0, rgbStr(col, 0)); g.addColorStop(1, rgbStr(col, 0.95));
          ctx.globalAlpha = clamp(e.alpha, 0, 1); ctx.strokeStyle = g; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(c.x, c.y); ctx.stroke();
          e.dot(ctx, c.x, c.y, 12, col, 1, 'glow');
        }
      },
    },
    /* ── Глитч ── */
    glitch: {
      blend: 'source-over',
      init(s) { s.next = rand(0.6, 2); s.on = 0; s.bars = []; },
      frame(s, ctx, dt, e) {
        s.next -= dt;
        if (s.next <= 0) {
          s.on = rand(0.12, 0.3);
          s.next = rand(1.5, 4.5) / Math.max(0.3, e.o.density);
          s.bars = Array.from({ length: Math.floor(rand(3, 7)) }, () => ({ y: rand(0, e.h), hh: rand(2, 14), dx: rand(-18, 18), ci: r3() }));
          e.shell._glitch(s.on);
        }
        if (s.on <= 0) return;
        s.on -= dt;
        for (const b of s.bars) {
          if (Math.random() < 0.3) b.dx = rand(-18, 18);
          ctx.globalAlpha = clamp(e.alpha * 0.35, 0, 1); ctx.fillStyle = rgbStr(e.c(b.ci)); ctx.fillRect(b.dx, b.y, e.w, b.hh);
          ctx.globalAlpha = clamp(e.alpha * 0.6, 0, 1); ctx.fillStyle = 'rgba(255,255,255,.8)'; ctx.fillRect(0, b.y + b.hh, e.w, 1);
        }
        ctx.fillStyle = '#fff';
        for (let i = 0; i < 40; i++) { ctx.globalAlpha = clamp(e.alpha * Math.random() * 0.4, 0, 1); ctx.fillRect(rand(0, e.w), rand(0, e.h), rand(1, 3), 1); }
      },
    },
    /* ── Плазма ── */
    plasma: {
      blend: 'screen',
      init(s, e) { s.b = Array.from({ length: 4 }, (_, i) => e.mk({ a: rand(0.15, 0.35), b: rand(0.15, 0.35), p1: rand(0, 6.28), p2: rand(0, 6.28), r: rand(0.35, 0.55), ci: i % 3 })); },
      frame(s, ctx, dt, e) {
        const M = Math.max(e.w, e.h);
        for (const b of s.b) {
          const x = e.w * (0.5 + 0.42 * Math.sin(e.t * b.a + b.p1)), y = e.h * (0.5 + 0.42 * Math.cos(e.t * b.b + b.p2));
          e.dot(ctx, x, y, b.r * M * 2, e.pc(b), 0.38, 'soft');
        }
      },
    },
    /* ── Круги на воде ── */
    ripple: {
      init(s) { s.r = []; s.next = rand(0.2, 1); },
      frame(s, ctx, dt, e) {
        s.next -= dt;
        if (s.next <= 0) { s.next = rand(0.6, 1.6) / Math.max(0.3, e.o.density); s.r.push(e.mk({ x: rand(0, e.w), y: rand(0, e.h), r: 0, max: rand(40, 100), sp: rand(40, 80) })); }
        ctx.lineWidth = 1.5;
        for (let i = s.r.length - 1; i >= 0; i--) {
          const r = s.r[i]; r.r += r.sp * dt;
          if (r.r >= r.max) { s.r.splice(i, 1); continue; }
          const a = (1 - r.r / r.max) * 0.85;
          ctx.strokeStyle = rgbStr(e.pc(r));
          ctx.globalAlpha = clamp(e.alpha * a, 0, 1); ctx.beginPath(); ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2); ctx.stroke();
          ctx.globalAlpha = clamp(e.alpha * a * 0.5, 0, 1); ctx.beginPath(); ctx.arc(r.x, r.y, r.r * 0.6, 0, Math.PI * 2); ctx.stroke();
        }
      },
      tap(s, e, x, y) { s.r.push(e.mk({ x, y, r: 0, max: 120, sp: 110 })); },
    },
    /* ── Огонь по кромке ── */
    edge_runner: {
      init(s) { s.u = 0; s.tr = [[], []]; },
      frame(s, ctx, dt, e) {
        s.u = (s.u + (dt * 150) / Math.max(1, e.perimLen())) % 1;
        ctx.lineCap = 'round';
        for (let k = 0; k < 2; k++) {
          const p = e.perim((s.u + k * 0.5) % 1, 1.5), trail = s.tr[k];
          trail.push(p); if (trail.length > 28) trail.shift();
          const col = e.fxColor(k === 0 ? 0 : 2);
          ctx.strokeStyle = rgbStr(col);
          for (let i = 1; i < trail.length; i++) {
            const f = i / trail.length;
            ctx.globalAlpha = clamp(e.alpha * f, 0, 1); ctx.lineWidth = 0.8 + 2.6 * f;
            ctx.beginPath(); ctx.moveTo(trail[i - 1][0], trail[i - 1][1]); ctx.lineTo(trail[i][0], trail[i][1]); ctx.stroke();
          }
          e.dot(ctx, p[0], p[1], 22, col, 1, 'glow');
        }
      },
    },
    /* ── Конфетти ── */
    confetti: {
      blend: 'source-over',
      init(s, e) { s.p = Array.from({ length: e.n(30) }, () => e.mk({ x: rand(0, e.w), y: rand(-e.h, e.h), vy: rand(30, 70), vx: rand(-15, 15), rot: rand(0, 6.28), vr: rand(-4, 4), w: rand(4, 7), h: rand(7, 11), ph: rand(0, 6.28) }, true)); },
      frame(s, ctx, dt, e) {
        for (const p of s.p) {
          p.y += p.vy * dt; p.x += (p.vx + Math.sin(e.t * 2 + p.ph) * 14) * dt; p.rot += p.vr * dt;
          if (p.y > e.h + 12) { p.y = -12; p.x = rand(0, e.w); }
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(Math.cos(e.t * 3 + p.ph), 1);
          ctx.globalAlpha = clamp(e.alpha * 0.9, 0, 1); ctx.fillStyle = rgbStr(e.pc(p));
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
        }
      },
    },
    /* ── Вихрь ── */
    vortex: {
      init(s, e) { const M = Math.max(e.w, e.h); s.p = Array.from({ length: e.n(40) }, () => e.mk({ ang: rand(0, 6.28), rad: rand(0.08, 0.6) * M, sp: rand(0.6, 1.6) })); },
      frame(s, ctx, dt, e) {
        const cx = e.w / 2, cy = e.h / 2, M = Math.max(e.w, e.h);
        ctx.lineWidth = 1;
        for (const p of s.p) {
          const ox = cx + Math.cos(p.ang) * p.rad, oy = cy + Math.sin(p.ang) * p.rad * 0.62;
          p.rad -= dt * (p.rad * 0.22 + 6); p.ang += dt * p.sp * (1 + 60 / (p.rad + 20));
          if (p.rad < 5) { p.rad = rand(0.45, 0.65) * M; p.ang = rand(0, 6.28); continue; }
          const x = cx + Math.cos(p.ang) * p.rad, y = cy + Math.sin(p.ang) * p.rad * 0.62, col = e.pc(p);
          ctx.globalAlpha = clamp(e.alpha * 0.6, 0, 1); ctx.strokeStyle = rgbStr(col);
          ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(x, y); ctx.stroke();
          e.dot(ctx, x, y, 6, col, clamp(p.rad / (M * 0.2), 0.2, 1), 'glow');
        }
      },
    },

    /* ═══════ «Живые» текстуры: подсвечиваются краями карточки ═══════ */
    plexus: {
      tex: true,
      init(s, e) {
        const sp = 58 * e.o.texScale;
        const n = clamp(Math.round((e.w * e.h) / (sp * sp) * 1.15), 8, 150);
        s.p = Array.from({ length: n }, () => ({ x: rand(0, e.w), y: rand(0, e.h), vx: rand(-6, 6), vy: rand(-6, 6), r: rand(0.8, 1.8) }));
        s.D = sp * 1.4; s.links = [];
      },
      frame(s, ctx, dt, e) { e.plexus(s, ctx, dt, false); },
    },
    synapse: {
      tex: true,
      init(s, e) { FX_IMPL.plexus.init(s, e); s.pulses = []; s.next = 0; },
      frame(s, ctx, dt, e) {
        e.plexus(s, ctx, dt, true);
        s.next -= dt;
        if (s.next <= 0 && s.links.length) { s.next = rand(0.08, 0.25); const l = s.links[Math.floor(Math.random() * s.links.length)]; s.pulses.push({ a: l[0], b: l[1], t: 0, sp: rand(0.8, 1.8) }); }
        for (let i = s.pulses.length - 1; i >= 0; i--) {
          const q = s.pulses[i]; q.t += dt * q.sp;
          if (q.t >= 1) { s.pulses.splice(i, 1); continue; }
          const A = s.p[q.a], B = s.p[q.b];
          const x = A.x + (B.x - A.x) * q.t, y = A.y + (B.y - A.y) * q.t;
          e.dot(ctx, x, y, 9, mixRgb(e.colorAt(x, y), [255, 255, 255], 0.4), Math.sin(q.t * Math.PI), 'glow');
        }
      },
    },
    shards: {
      tex: true,
      init(s, e) {
        const cell = 72 * e.o.texScale, cols = Math.ceil(e.w / cell) + 1, rows = Math.ceil(e.h / cell) + 1, P = [];
        for (let y = 0; y <= rows; y++) {
          P.push([]);
          for (let x = 0; x <= cols; x++) {
            const edge = x === 0 || y === 0 || x === cols || y === rows;
            P[y].push([x * cell + (edge ? 0 : rand(-0.35, 0.35) * cell), y * cell + (edge ? 0 : rand(-0.35, 0.35) * cell)]);
          }
        }
        s.t = [];
        for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
          const a = P[y][x], b = P[y][x + 1], c = P[y + 1][x], d = P[y + 1][x + 1];
          const flip = Math.random() < 0.5;
          s.t.push({ p: flip ? [a, b, d] : [a, b, c], ph: rand(0, 6.28), sp: rand(0.4, 1.2) });
          s.t.push({ p: flip ? [a, d, c] : [b, d, c], ph: rand(0, 6.28), sp: rand(0.4, 1.2) });
        }
      },
      frame(s, ctx, dt, e) {
        ctx.lineWidth = 0.6;
        for (const t of s.t) {
          const [a, b, c] = t.p, cx = (a[0] + b[0] + c[0]) / 3, cy = (a[1] + b[1] + c[1]) / 3;
          const lit = e.edgeLit(cx, cy), col = e.colorAt(cx, cy);
          ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.closePath();
          ctx.globalAlpha = clamp(e.alpha * lit * (0.12 + 0.16 * (0.5 + 0.5 * Math.sin(e.t * t.sp + t.ph))), 0, 1);
          ctx.fillStyle = rgbStr(col); ctx.fill();
          ctx.globalAlpha = clamp(e.alpha * lit * 0.45, 0, 1); ctx.strokeStyle = rgbStr(col); ctx.stroke();
        }
      },
    },
    constellation: {
      tex: true,
      init(s, e) {
        const n = clamp(Math.round((e.w * e.h) / (2600 * e.o.texScale * e.o.texScale)), 10, 120);
        s.p = Array.from({ length: n }, () => ({ x: rand(0, e.w), y: rand(0, e.h), r: rand(0.6, 1.8), tw: rand(0.5, 2), ph: rand(0, 6.28) }));
        s.l = [];
        s.p.forEach((a, i) => {
          const near = s.p.map((b, j) => [j, (a.x - b.x) ** 2 + (a.y - b.y) ** 2]).filter(([j]) => j !== i).sort((x, y) => x[1] - y[1]).slice(0, 2);
          near.forEach(([j, d2]) => { if (d2 < (90 * e.o.texScale) ** 2 && i < j) s.l.push([i, j]); });
        });
      },
      frame(s, ctx, dt, e) {
        ctx.lineWidth = 0.7;
        for (const [i, j] of s.l) {
          const a = s.p[i], b = s.p[j], mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
          ctx.globalAlpha = clamp(e.alpha * e.edgeLit(mx, my) * 0.6, 0, 1); ctx.strokeStyle = rgbStr(e.colorAt(mx, my));
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
        for (const p of s.p) e.dot(ctx, p.x, p.y, p.r * 7, mixRgb(e.colorAt(p.x, p.y), [255, 255, 255], 0.35), e.edgeLit(p.x, p.y) * (0.5 + 0.5 * Math.sin(e.t * p.tw + p.ph)), 'glow');
      },
    },
  };

  /* ═════════════════════════ v3: НОВЫЕ ЭФФЕКТЫ ═════════════════════════ */
  const ri = (n) => Math.floor(Math.random() * n);
  const gauss = (u, c, w, a) => a * Math.exp(-(((u - c) / w) ** 2));
  const ecg = (u) => gauss(u, 0.12, 0.03, 0.12) + gauss(u, 0.26, 0.01, -0.14) + gauss(u, 0.29, 0.012, 1) + gauss(u, 0.32, 0.012, -0.28) + gauss(u, 0.55, 0.055, 0.3);
  const CLASSIC = [[255, 64, 64], [255, 205, 50], [40, 220, 100], [50, 150, 255], [255, 90, 220]];
  const FW_NAT = [[255, 90, 90], [255, 214, 70], [90, 205, 255], [190, 100, 255], [100, 255, 150]];

  /* общий «падающий предмет» для листьев и лепестков */
  const fallingShape = (nat, count, draw) => ({
    blend: 'source-over', nat,
    init(s, e) { s.p = Array.from({ length: e.n(count) }, () => e.mk({ x: rand(0, e.w), y: rand(-e.h, e.h), s: rand(5, 11), vy: rand(18, 42), rot: rand(0, 6.28), vr: rand(-2, 2), ph: rand(0, 6.28), sw: rand(14, 34) })); },
    frame(s, ctx, dt, e) {
      for (const p of s.p) {
        p.y += p.vy * dt; p.x += (Math.sin(e.t * 1.2 + p.ph) * p.sw + 8) * dt; p.rot += p.vr * dt;
        if (p.y > e.h + 14) { p.y = -14; p.x = rand(-10, e.w); }
        if (p.x > e.w + 14) p.x = -14;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(Math.cos(e.t * 2 + p.ph), 1);
        ctx.globalAlpha = clamp(e.alpha * 0.92, 0, 1);
        draw(ctx, p.s, e.pc(p));
        ctx.restore();
      }
    },
  });

  /* салют: взрыв и шаг частиц (общие для эффекта и события) */
  const fwExplode = (arr, e, x, y) => {
    const n = Math.round(rand(46, 76)), ring = Math.random() < 0.3, ci = ri(5), rb = hslToRgb(rand(0, 360), 100, 62);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + rand(-0.05, 0.05), v = ring ? rand(115, 130) : rand(30, 150);
      arr.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: rand(1, 1.7), age: 0, ci, rb, cr: Math.random() < 0.3 });
    }
  };
  const fwStep = (arr, ctx, dt, e) => {
    ctx.lineCap = 'round'; ctx.lineWidth = 1.3;
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      const p = arr[i];
      p.age += dt; p.vx *= 1 - dt * 1.2; p.vy = p.vy * (1 - dt * 1.2) + 70 * dt; p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.age >= p.life) continue;
      arr[j++] = p;
      let a = 1 - p.age / p.life;
      if (p.cr && p.age > p.life * 0.5) a *= Math.random();
      const col = e.pc(p);
      ctx.globalAlpha = clamp(e.alpha * a, 0, 1); ctx.strokeStyle = rgbStr(col);
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * 0.06, p.y - p.vy * 0.06); ctx.stroke();
      e.dot(ctx, p.x, p.y, 6, col, a, 'glow');
    }
    arr.length = j;
  };

  const auroraPal = (e) => (e.o.colors === 'glow' ? [e.c(0), e.c(1), e.c(2)] : e.o.colors === 'rainbow' ? [hslToRgb(e.t * 20, 90, 60), hslToRgb(e.t * 20 + 60, 90, 60), hslToRgb(e.t * 20 + 140, 90, 65)] : [[90, 255, 160], [40, 225, 200], [190, 110, 255]]);

  Object.assign(FX_IMPL, {
    /* ── Настоящее северное сияние: вертикальные лучи-занавесы ── */
    aurora_real: {
      blend: 'lighter',
      init(s, e) { s.st = Array.from({ length: e.n(28) }, () => ({ x: rand(0, e.w), y: rand(0, e.h * 0.75), r: rand(0.4, 1.2), ph: rand(0, 6.28) })); s.ph = rand(0, 100); },
      frame(s, ctx, dt, e) {
        for (const st of s.st) e.dot(ctx, st.x, st.y, st.r * 6, [235, 240, 255], 0.3 + 0.3 * Math.sin(e.t * 2 + st.ph), 'glow');
        const P = auroraPal(e).map((c) => c.map(Math.round));
        const spr = e.cache(`aur|${P}`, 4, 160, (g, w, h) => {
          const gr = g.createLinearGradient(0, 0, 0, h);
          gr.addColorStop(0, rgbStr(P[2], 0)); gr.addColorStop(0.28, rgbStr(P[2], 0.32)); gr.addColorStop(0.55, rgbStr(P[1], 0.55));
          gr.addColorStop(0.82, rgbStr(P[0], 0.95)); gr.addColorStop(0.9, rgbStr(mixRgb(P[0], [255, 255, 255], 0.5), 1));
          gr.addColorStop(0.94, rgbStr(P[0], 0.7)); gr.addColorStop(1, rgbStr(P[0], 0));
          g.fillStyle = gr; g.fillRect(0, 0, w, h);
        });
        const T = e.t, step = Math.max(2, e.w / 150);
        for (let b = 0; b < 2; b++) {
          const ph = s.ph + b * 17;
          for (let x = -step; x < e.w + step; x += step) {
            const base = e.h * (0.6 + 0.12 * b) + Math.sin(x * 0.012 + T * 0.25 + ph) * e.h * 0.09 + Math.sin(x * 0.031 - T * 0.17 + ph * 1.3) * e.h * 0.04;
            const I = (0.55 + 0.45 * Math.sin(x * 0.022 + T * 0.8 + ph)) * (0.6 + 0.4 * Math.sin(x * 0.007 - T * 0.33 + ph)) * (0.8 + 0.2 * Math.sin(T * 4.5 + x * 0.15));
            const H = e.h * (0.32 + 0.3 * (0.5 + 0.5 * Math.sin(x * 0.017 + T * 0.21 + ph * 0.7)));
            ctx.globalAlpha = clamp(e.alpha * I * (b ? 0.4 : 0.6), 0, 1);
            ctx.drawImage(spr, x, base - H, step * 1.7, H * 1.08);
          }
        }
        e.dot(ctx, e.w * 0.5, e.h * 0.66, e.w * 1.3, P[0], 0.1, 'soft');
      },
    },
    /* ── Град с отскоками ── */
    hail: {
      blend: 'source-over', nat: [[236, 246, 255], [205, 228, 255], [255, 255, 255]],
      init(s, e) {
        s.mk = (top) => e.mk({ x: rand(0, e.w * 1.15), y: top ? rand(-e.h * 0.6, -5) : rand(-e.h, e.h), vx: rand(-60, -20), vy: rand(380, 560), r: rand(1.3, 3), b: 0 });
        s.p = Array.from({ length: e.n(26) }, () => s.mk(false));
      },
      frame(s, ctx, dt, e) {
        ctx.lineCap = 'round';
        for (let i = 0; i < s.p.length; i++) {
          const p = s.p[i];
          p.vy += 520 * dt; p.x += p.vx * dt; p.y += p.vy * dt;
          if (p.y >= e.h - p.r) {
            if (p.b < 2 && Math.random() < 0.75) { p.y = e.h - p.r; p.vy = -Math.abs(p.vy) * rand(0.2, 0.36); p.vx = rand(-80, 80); p.b++; }
            else { s.p[i] = s.mk(true); continue; }
          }
          const col = e.pc(p);
          if (p.vy > 220) {
            ctx.globalAlpha = clamp(e.alpha * 0.35, 0, 1); ctx.strokeStyle = rgbStr(col); ctx.lineWidth = p.r;
            ctx.beginPath(); ctx.moveTo(p.x - p.vx * 0.025, p.y - p.vy * 0.025); ctx.lineTo(p.x, p.y); ctx.stroke();
          }
          ctx.globalAlpha = clamp(e.alpha * 0.95, 0, 1); ctx.fillStyle = rgbStr(col);
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = 'rgba(255,255,255,.95)'; ctx.beginPath(); ctx.arc(p.x - p.r * 0.35, p.y - p.r * 0.35, p.r * 0.35, 0, Math.PI * 2); ctx.fill();
        }
      },
    },
    /* ── Снегопад с порывами ветра и растущим сугробом ── */
    snowfall: {
      blend: 'source-over', nat: [[255, 255, 255], [232, 241, 255], [246, 250, 255]],
      init(s, e) {
        s.p = Array.from({ length: e.n(70) }, () => e.mk({ x: rand(0, e.w), y: rand(-e.h, e.h), z: rand(0.25, 1), ph: rand(0, 6.28) }));
        s.cols = Math.ceil(e.w / 3) + 2; s.d = new Float32Array(s.cols); s.wind = 0; s.target = rand(-20, 20); s.next = rand(2, 5);
      },
      frame(s, ctx, dt, e) {
        s.next -= dt;
        if (s.next <= 0) { s.target = rand(-38, 38); s.next = rand(2, 6); }
        s.wind += (s.target - s.wind) * Math.min(1, dt * 0.6);
        const cap = e.h * 0.14, d = s.d;
        for (const p of s.p) {
          p.y += (14 + 46 * p.z) * dt;
          p.x += (s.wind * p.z + Math.sin(e.t * 0.9 + p.ph) * 10 * p.z) * dt;
          if (p.x < -6) p.x = e.w + 6; else if (p.x > e.w + 6) p.x = -6;
          const ci = clamp(Math.floor(p.x / 3), 0, s.cols - 1);
          if (p.y >= e.h - d[ci]) {
            if (p.z > 0.5) { d[ci] = Math.min(cap, d[ci] + 0.4 * p.z); if (ci > 0) d[ci - 1] = Math.min(cap, d[ci - 1] + 0.15 * p.z); if (ci < s.cols - 1) d[ci + 1] = Math.min(cap, d[ci + 1] + 0.15 * p.z); }
            p.y = rand(-24, -4); p.x = rand(0, e.w);
          }
          e.dot(ctx, p.x, p.y, 2 + 5 * p.z, e.pc(p), 0.4 + 0.6 * p.z, p.z < 0.45 ? 'soft' : 'glow');
        }
        for (let i = 1; i < s.cols - 1; i++) d[i] = (d[i] * 0.9 + (d[i - 1] + d[i + 1]) * 0.05) * (1 - dt * 0.003);
        ctx.globalAlpha = clamp(e.alpha, 0, 1);
        const g = ctx.createLinearGradient(0, e.h - cap, 0, e.h);
        g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(1, 'rgba(205,225,255,.85)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(0, e.h);
        for (let i = 0; i < s.cols; i++) ctx.lineTo(i * 3, e.h - d[i]);
        ctx.lineTo(e.w, e.h); ctx.closePath(); ctx.fill();
      },
    },
    /* ── Узорные снежинки ── */
    snowflakes: {
      nat: [[255, 255, 255], [225, 238, 255], [205, 228, 255]],
      init(s, e) { s.p = Array.from({ length: e.n(12) }, () => e.mk({ x: rand(0, e.w), y: rand(-e.h, e.h), s: rand(6, 14), rot: rand(0, 6.28), vr: rand(-1, 1), vy: rand(12, 30), ph: rand(0, 6.28) })); },
      frame(s, ctx, dt, e) {
        for (const p of s.p) {
          p.y += p.vy * dt; p.x += Math.sin(e.t * 0.8 + p.ph) * 12 * dt; p.rot += p.vr * dt;
          if (p.y > e.h + 16) { p.y = -16; p.x = rand(0, e.w); }
          const col = e.pc(p).map(Math.round);
          const spr = e.cache(`flake|${col}`, 64, 64, (g) => {
            g.translate(32, 32); g.strokeStyle = rgbStr(col); g.lineCap = 'round'; g.shadowColor = rgbStr(col); g.shadowBlur = 6; g.lineWidth = 3;
            for (let k = 0; k < 6; k++) {
              g.save(); g.rotate((k * Math.PI) / 3); g.beginPath();
              g.moveTo(0, 0); g.lineTo(0, -26); g.moveTo(0, -12); g.lineTo(-7, -19); g.moveTo(0, -12); g.lineTo(7, -19);
              g.moveTo(0, -20); g.lineTo(-4, -24); g.moveTo(0, -20); g.lineTo(4, -24); g.stroke(); g.restore();
            }
          });
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.globalAlpha = clamp(e.alpha * 0.9, 0, 1); ctx.drawImage(spr, -p.s, -p.s, p.s * 2, p.s * 2); ctx.restore();
        }
      },
    },
    /* ── Метель ── */
    blizzard: {
      nat: [[255, 255, 255], [226, 238, 255], [240, 248, 255]],
      init(s, e) { s.p = Array.from({ length: e.n(80) }, () => e.mk({ x: rand(0, e.w), y: rand(0, e.h), v: rand(220, 420), vy: rand(30, 90), len: rand(6, 18), z: rand(0.3, 1) })); },
      frame(s, ctx, dt, e) {
        const gust = 1 + 0.6 * Math.sin(e.t * 0.7) + 0.3 * Math.sin(e.t * 2.3);
        ctx.fillStyle = 'rgba(255,255,255,1)'; ctx.globalAlpha = clamp(e.alpha * 0.04 * gust, 0, 1); ctx.fillRect(0, 0, e.w, e.h);
        ctx.lineCap = 'round';
        for (const p of s.p) {
          p.x += p.v * gust * p.z * dt; p.y += p.vy * dt;
          if (p.x > e.w + 20) { p.x = -20; p.y = rand(0, e.h); }
          if (p.y > e.h + 5) p.y = -5;
          ctx.globalAlpha = clamp(e.alpha * 0.55 * p.z, 0, 1); ctx.strokeStyle = rgbStr(e.pc(p)); ctx.lineWidth = 0.6 + 1.2 * p.z;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.len * gust, p.y - p.len * 0.2); ctx.stroke();
        }
      },
    },
    /* ── Гирлянда (на внешнем холсте, висит на кромке) ── */
    garland: {
      outer: true,
      init(s, e) {
        const P = e.o.pad || 0, W = e.w - 2 * P, H = e.h - 2 * P;
        s.b = []; s.mode = e.o.garlandEdges || 'top';
        if (s.mode === 'perimeter') {
          const n = Math.max(10, Math.round(e.perimLen(P) / 30));
          for (let i = 0; i < n; i++) { const [x, y] = e.perim(i / n, P); s.b.push({ x, y, ph: rand(0, 6.28), f: rand(1, 3) }); }
        } else {
          const sw = Math.max(2, Math.round(W / 150)), seg = W / sw, sag = Math.min(18, H * 0.2);
          s.sw = []; s.sag = sag;
          for (let k = 0; k < sw; k++) {
            const x0 = P + k * seg; s.sw.push(x0);
            const per = Math.max(3, Math.round(seg / 30));
            for (let j = 1; j <= per; j++) { const t = j / (per + 1); s.b.push({ x: x0 + seg * t, y: P + 1 + 4 * sag * t * (1 - t), ph: rand(0, 6.28), f: rand(1, 3) }); }
          }
          s.seg = seg;
        }
      },
      frame(s, ctx, dt, e) {
        const P = e.o.pad || 0, pal = e.garlandPal();
        ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = clamp(e.alpha, 0, 1);
        ctx.strokeStyle = 'rgba(28,40,34,.9)'; ctx.lineWidth = 1.5; ctx.beginPath();
        if (s.mode === 'perimeter') { for (let i = 0; i <= 120; i++) { const [x, y] = e.perim(i / 120, P); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); } }
        else s.sw.forEach((x0) => { ctx.moveTo(x0, P + 1); ctx.quadraticCurveTo(x0 + s.seg / 2, P + 1 + s.sag * 2, x0 + s.seg, P + 1); });
        ctx.stroke();
        const modes = ['chase', 'twinkle', 'alternate', 'breathe'];
        const mode = e.o.garlandMode && e.o.garlandMode !== 'auto' ? e.o.garlandMode : modes[Math.floor(e.t / 8) % 4];
        const t = e.t;
        s.b.forEach((b, i) => {
          let k;
          if (mode === 'chase') k = 0.2 + 0.8 * Math.pow(0.5 + 0.5 * Math.sin(i * 0.9 - t * 5), 3);
          else if (mode === 'twinkle') k = 0.3 + 0.7 * Math.pow(0.5 + 0.5 * Math.sin(t * b.f * 2 + b.ph), 4);
          else if (mode === 'alternate') k = (Math.floor(t * 1.5) + i) % 2 ? 1 : 0.22;
          else if (mode === 'steady') k = 0.92 + 0.08 * Math.sin(t * 3 + b.ph);
          else k = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 1.6));
          b.k = k; b.col = pal[i % pal.length];
          ctx.globalAlpha = clamp(e.alpha, 0, 1);
          ctx.fillStyle = 'rgba(40,46,40,.95)'; ctx.fillRect(b.x - 1.6, b.y - 0.5, 3.2, 3);
          ctx.fillStyle = rgbStr(mixRgb(mixRgb(b.col, [30, 30, 30], 0.55), mixRgb(b.col, [255, 255, 255], 0.35), k));
          ctx.beginPath(); ctx.ellipse(b.x, b.y + 6, 3, 4.6, 0, 0, Math.PI * 2); ctx.fill();
        });
        ctx.globalCompositeOperation = 'lighter';
        for (const b of s.b) e.dot(ctx, b.x, b.y + 6, 30 * b.k, b.col, b.k, 'glow');
      },
    },
    /* ── Ёлочные шары на ниточках ── */
    lanterns: {
      blend: 'source-over', nat: CLASSIC,
      init(s, e) { const n = clamp(Math.round(e.w / 85), 2, 7); s.l = Array.from({ length: n }, (_, i) => e.mk({ x: ((i + 0.5) * e.w) / n + rand(-12, 12), L: rand(0.16, 0.4) * e.h, r: rand(7, 12), A: rand(0.06, 0.14), w: rand(1.2, 2.2), ph: rand(0, 6.28), ci: i % 5 })); },
      frame(s, ctx, dt, e) {
        for (const l of s.l) {
          const ang = l.A * Math.sin(e.t * l.w + l.ph), bx = l.x + Math.sin(ang) * l.L, by = Math.cos(ang) * l.L, col = e.pc(l);
          ctx.globalAlpha = clamp(e.alpha * 0.6, 0, 1); ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(l.x, 0); ctx.lineTo(bx, by - l.r - 2); ctx.stroke();
          ctx.globalCompositeOperation = 'lighter'; e.dot(ctx, bx, by, l.r * 5, col, 0.35, 'glow'); ctx.globalCompositeOperation = 'source-over';
          ctx.globalAlpha = clamp(e.alpha, 0, 1);
          ctx.fillStyle = '#d4a93c'; ctx.fillRect(bx - 2.6, by - l.r - 3.5, 5.2, 4);
          const g = ctx.createRadialGradient(bx - l.r * 0.35, by - l.r * 0.35, l.r * 0.1, bx, by, l.r);
          g.addColorStop(0, rgbStr(mixRgb(col, [255, 255, 255], 0.75))); g.addColorStop(0.4, rgbStr(col)); g.addColorStop(1, rgbStr(mixRgb(col, [0, 0, 0], 0.5)));
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(bx, by, l.r, 0, Math.PI * 2); ctx.fill();
          const tw = Math.pow(Math.max(0, Math.sin(e.t * 1.7 + l.ph * 3)), 12);
          if (tw > 0.05) { ctx.globalCompositeOperation = 'lighter'; e.dot(ctx, bx - l.r * 0.4, by - l.r * 0.4, 14, [255, 255, 255], tw, 'glow'); ctx.globalCompositeOperation = 'source-over'; }
        }
      },
    },
    /* ── Бенгальский огонь ── */
    sparkler: {
      nat: [[255, 232, 160], [255, 200, 90], [255, 255, 230]],
      init(s) { s.p = []; },
      frame(s, ctx, dt, e) {
        const cx = e.w * (0.5 + 0.32 * Math.sin(e.t * 0.7)), cy = e.h * (0.5 + 0.25 * Math.sin(e.t * 1.1));
        const k = Math.round(e.n(9) * Math.min(1, dt * 50));
        for (let i = 0; i < k; i++) { const a = rand(0, Math.PI * 2), v = rand(60, 230), p = e.spark(cx, cy, Math.cos(a) * v, Math.sin(a) * v); p.life = rand(0.15, 0.45); s.p.push(p); }
        e.drawSparks(s.p, ctx, dt, 140);
        e.dot(ctx, cx, cy, 28, [255, 236, 190], 1, 'glow'); e.dot(ctx, cx, cy, 9, [255, 255, 255], 1, 'glow');
      },
    },
    /* ── Листопад и лепестки ── */
    leaves: fallingShape([[234, 88, 12], [202, 138, 4], [185, 64, 28], [245, 158, 11], [146, 112, 40]], 11, (ctx, s, col) => {
      ctx.fillStyle = rgbStr(col); ctx.beginPath(); ctx.moveTo(0, -s);
      ctx.quadraticCurveTo(s * 0.95, -s * 0.2, 0, s); ctx.quadraticCurveTo(-s * 0.95, -s * 0.2, 0, -s); ctx.fill();
      ctx.strokeStyle = rgbStr(mixRgb(col, [0, 0, 0], 0.4)); ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(0, -s); ctx.lineTo(0, s * 1.2); ctx.stroke();
    }),
    petals: fallingShape([[255, 183, 210], [255, 214, 232], [249, 168, 212], [255, 236, 244]], 16, (ctx, s, col) => {
      const k = s * 0.7;
      ctx.fillStyle = rgbStr(col); ctx.beginPath(); ctx.moveTo(0, -k);
      ctx.bezierCurveTo(k, -k * 0.6, k * 0.7, k, 0, k * 0.75); ctx.bezierCurveTo(-k * 0.7, k, -k, -k * 0.6, 0, -k); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.45)'; ctx.beginPath(); ctx.ellipse(-k * 0.2, -k * 0.2, k * 0.25, k * 0.45, 0.4, 0, Math.PI * 2); ctx.fill();
    }),
    /* ── Метеорный дождь ── */
    meteor_shower: {
      init(s, e) { s.m = []; s.next = 0; s.st = Array.from({ length: e.n(24) }, () => ({ x: rand(0, e.w), y: rand(0, e.h), ph: rand(0, 6.28) })); },
      frame(s, ctx, dt, e) {
        for (const st of s.st) e.dot(ctx, st.x, st.y, 4, [235, 240, 255], 0.3 + 0.3 * Math.sin(e.t * 2 + st.ph), 'glow');
        s.next -= dt;
        while (s.next <= 0) { s.next += rand(0.12, 0.45) / Math.max(0.3, e.o.density); s.m.push(e.mk({ x: rand(-0.2 * e.w, e.w), y: rand(-0.3 * e.h, 0.3 * e.h), v: rand(380, 620), len: rand(50, 140), life: rand(0.6, 1.2), age: 0 })); }
        const ax = Math.cos(0.55), ay = Math.sin(0.55);
        ctx.lineCap = 'round'; ctx.lineWidth = 1.3;
        for (let i = s.m.length - 1; i >= 0; i--) {
          const m = s.m[i]; m.age += dt; m.x += ax * m.v * dt; m.y += ay * m.v * dt;
          if (m.age >= m.life) { s.m.splice(i, 1); continue; }
          const a = Math.sin((m.age / m.life) * Math.PI), col = mixRgb(e.pc(m), [255, 255, 255], 0.4);
          const g = ctx.createLinearGradient(m.x - ax * m.len, m.y - ay * m.len, m.x, m.y);
          g.addColorStop(0, rgbStr(col, 0)); g.addColorStop(1, rgbStr(col, 1));
          ctx.globalAlpha = clamp(e.alpha * a, 0, 1); ctx.strokeStyle = g;
          ctx.beginPath(); ctx.moveTo(m.x - ax * m.len, m.y - ay * m.len); ctx.lineTo(m.x, m.y); ctx.stroke();
          e.dot(ctx, m.x, m.y, 8, col, a, 'glow');
        }
      },
    },
    /* ── Туманность ── */
    nebula: {
      blend: 'screen', nat: [[168, 85, 247], [56, 189, 248], [236, 72, 153], [99, 102, 241]],
      init(s, e) {
        s.c = Array.from({ length: 6 }, (_, i) => e.mk({ a: rand(0.04, 0.12), b: rand(0.04, 0.12), p1: rand(0, 6.28), p2: rand(0, 6.28), r: rand(0.3, 0.55), ci: i % 4 }));
        s.st = Array.from({ length: e.n(34) }, () => ({ x: rand(0, e.w), y: rand(0, e.h), r: rand(0.4, 1.3), ph: rand(0, 6.28) }));
      },
      frame(s, ctx, dt, e) {
        const M = Math.max(e.w, e.h);
        for (const c of s.c) e.dot(ctx, e.w * (0.5 + 0.38 * Math.sin(e.t * c.a + c.p1)), e.h * (0.5 + 0.38 * Math.cos(e.t * c.b + c.p2)), c.r * M * 2, e.pc(c), 0.3, 'soft');
        ctx.globalCompositeOperation = 'lighter';
        for (const st of s.st) e.dot(ctx, st.x, st.y, st.r * 6, [240, 244, 255], 0.35 + 0.45 * Math.pow(Math.sin(e.t * 1.3 + st.ph), 2), 'glow');
      },
    },
    /* ── Море ── */
    sea: {
      blend: 'source-over', nat: [[125, 211, 252], [14, 116, 144], [8, 47, 73]],
      frame(s, ctx, dt, e) {
        for (let k = 0; k < 3; k++) {
          const base = e.h * (0.66 + k * 0.1), amp = 6 + 4 * k, f = 0.018 - k * 0.003, sp = 0.8 + k * 0.4, col = e.pc({ ci: k, rb: hslToRgb(190 + k * 40, 90, 55) });
          ctx.beginPath(); ctx.moveTo(0, e.h);
          let crest = [];
          for (let x = 0; x <= e.w + 6; x += 6) {
            const y = base + Math.sin(x * f + e.t * sp + k) * amp + Math.sin(x * f * 2.3 - e.t * sp * 1.3) * amp * 0.4;
            ctx.lineTo(x, y);
            if (k === 2 && Math.cos(x * f + e.t * sp + k) > 0.97) crest.push([x, y]);
          }
          ctx.lineTo(e.w, e.h); ctx.closePath();
          const g = ctx.createLinearGradient(0, base - amp, 0, e.h);
          g.addColorStop(0, rgbStr(col, 0.55)); g.addColorStop(1, rgbStr(mixRgb(col, [0, 0, 0], 0.5), 0.85));
          ctx.globalAlpha = clamp(e.alpha * (0.45 + k * 0.15), 0, 1); ctx.fillStyle = g; ctx.fill();
          ctx.globalCompositeOperation = 'lighter';
          crest.forEach(([x, y]) => e.dot(ctx, x, y, 8, [255, 255, 255], 0.6, 'glow'));
          ctx.globalCompositeOperation = 'source-over';
        }
      },
    },
    /* ── Пламя ── */
    fire: {
      blend: 'lighter', nat: [[255, 240, 180], [255, 150, 40], [220, 50, 20]],
      init(s) { s.p = []; s.acc = 0; },
      frame(s, ctx, dt, e) {
        const [c0, c1, c2] = e.pal3();
        s.acc += dt * e.n(70);
        while (s.acc >= 1) { s.acc -= 1; s.p.push({ x: e.w * 0.5 + (Math.random() + Math.random() - 1) * e.w * 0.38, y: e.h + 6, vx: rand(-10, 10), vy: rand(-115, -60), life: rand(0.6, 1.25), age: 0, r: rand(10, 22) }); }
        let j = 0;
        for (let i = 0; i < s.p.length; i++) {
          const p = s.p[i]; p.age += dt;
          const k = p.age / p.life;
          if (k >= 1) continue;
          s.p[j++] = p;
          p.x += (p.vx + Math.sin(e.t * 6 + p.y * 0.05) * 12) * dt; p.y += p.vy * dt;
          const col = k < 0.25 ? mixRgb(c0, c1, k / 0.25) : k < 0.6 ? mixRgb(c1, c2, (k - 0.25) / 0.35) : c2;
          e.dot(ctx, p.x, p.y, p.r * (1 - k * 0.6) * 2, col, (1 - k) * 0.55, 'soft');
        }
        s.p.length = j;
      },
    },
    /* ── Дым ── */
    smoke: {
      blend: 'source-over', nat: [[170, 175, 186], [140, 146, 158], [205, 205, 214]],
      init(s) { s.p = []; s.acc = 0; },
      frame(s, ctx, dt, e) {
        s.acc += dt * e.n(5);
        while (s.acc >= 1) { s.acc -= 1; s.p.push(e.mk({ x: rand(e.w * 0.15, e.w * 0.85), y: e.h + 20, vy: rand(-28, -14), vx: rand(-6, 6), life: rand(3.5, 5.5), age: 0, r: rand(18, 30) })); }
        let j = 0;
        for (let i = 0; i < s.p.length; i++) {
          const p = s.p[i]; p.age += dt;
          const k = p.age / p.life;
          if (k >= 1) continue;
          s.p[j++] = p;
          p.x += (p.vx + Math.sin(e.t * 0.6 + p.life) * 6) * dt; p.y += p.vy * dt;
          e.dot(ctx, p.x, p.y, p.r * (1 + k * 2.2), e.pc(p), 0.16 * Math.sin(k * Math.PI), 'soft');
        }
        s.p.length = j;
      },
    },
    /* ── Сердечки ── */
    hearts: {
      blend: 'source-over', nat: [[255, 82, 122], [255, 145, 175], [232, 40, 92]],
      init(s, e) { s.p = Array.from({ length: e.n(10) }, () => e.mk({ x: rand(0, e.w), y: rand(0, e.h * 1.3), s: rand(9, 18), vy: rand(-26, -12), ph: rand(0, 6.28) })); },
      frame(s, ctx, dt, e) {
        for (const p of s.p) {
          p.y += p.vy * dt; p.x += Math.sin(e.t * 1.4 + p.ph) * 14 * dt;
          if (p.y < -20) { p.y = e.h + 20; p.x = rand(0, e.w); }
          const col = e.pc(p).map(Math.round);
          const spr = e.cache(`heart|${col}`, 48, 48, (g) => {
            g.shadowColor = rgbStr(col); g.shadowBlur = 8; g.fillStyle = rgbStr(col);
            g.beginPath(); g.moveTo(24, 38); g.bezierCurveTo(4, 26, 8, 8, 24, 16); g.bezierCurveTo(40, 8, 44, 26, 24, 38); g.fill();
            g.shadowBlur = 0; g.fillStyle = 'rgba(255,255,255,.5)'; g.beginPath(); g.ellipse(17, 18, 3, 4.5, -0.5, 0, Math.PI * 2); g.fill();
          });
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(Math.sin(e.t * 1.4 + p.ph) * 0.25);
          ctx.globalAlpha = clamp(e.alpha * clamp(p.y / (e.h * 0.4), 0, 1), 0, 1);
          ctx.drawImage(spr, -p.s, -p.s, p.s * 2, p.s * 2); ctx.restore();
        }
      },
    },
    /* ── Бабочки ── */
    butterflies: {
      blend: 'source-over',
      init(s, e) { s.p = Array.from({ length: e.n(4) }, () => e.mk({ x: rand(0, e.w), y: rand(0, e.h), a: rand(0, 6.28), sp: rand(18, 34), ph: rand(0, 6.28) })); },
      frame(s, ctx, dt, e) {
        for (const p of s.p) {
          p.a += Math.sin(e.t * 0.7 + p.ph) * dt * 1.6;
          p.x += Math.cos(p.a) * p.sp * dt; p.y += Math.sin(p.a) * p.sp * dt;
          if (p.x < 0 || p.x > e.w) { p.a = Math.PI - p.a; p.x = clamp(p.x, 0, e.w); }
          if (p.y < 0 || p.y > e.h) { p.a = -p.a; p.y = clamp(p.y, 0, e.h); }
          const fl = 0.25 + 0.75 * Math.abs(Math.sin(e.t * 13 + p.ph)), col = e.pc(p);
          ctx.globalCompositeOperation = 'lighter'; e.dot(ctx, p.x, p.y, 26, col, 0.3, 'glow'); ctx.globalCompositeOperation = 'source-over';
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a + Math.PI / 2);
          ctx.globalAlpha = clamp(e.alpha * 0.9, 0, 1); ctx.fillStyle = rgbStr(col);
          [-1, 1].forEach((sd) => {
            ctx.beginPath(); ctx.ellipse(sd * 5 * fl, -2, 5.5 * fl, 5, 0, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(sd * 3.5 * fl, 4, 3.5 * fl, 3.2, 0, 0, Math.PI * 2); ctx.fill();
          });
          ctx.fillStyle = 'rgba(20,20,30,.85)'; ctx.fillRect(-0.8, -5, 1.6, 10); ctx.restore();
        }
      },
    },
    /* ── Неоновый горизонт ── */
    neon_grid: {
      blend: 'lighter',
      frame(s, ctx, dt, e) {
        const [c0, c1, c2] = e.pal3(), hz = e.h * 0.55, cx = e.w / 2, R = Math.min(e.w, e.h) * 0.24;
        for (let y = hz - R; y < hz; y += 5) {
          const k = (y - (hz - R)) / R, half = Math.sqrt(Math.max(0, R * R - (hz - y) * (hz - y))), th = 3.5 - k * 2.6;
          ctx.globalAlpha = clamp(e.alpha * 0.55, 0, 1); ctx.fillStyle = rgbStr(mixRgb(c0, c2, k));
          ctx.fillRect(cx - half, y, half * 2, Math.max(0.6, th));
        }
        ctx.strokeStyle = rgbStr(c1); ctx.lineWidth = 1;
        const N = 9;
        for (let i = 0; i < N; i++) {
          const z = (i + ((e.t * 0.5) % 1)) / N, y = hz + (e.h - hz) * z * z;
          ctx.globalAlpha = clamp(e.alpha * z * 0.85, 0, 1); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(e.w, y); ctx.stroke();
        }
        ctx.globalAlpha = clamp(e.alpha * 0.5, 0, 1);
        for (let k = -8; k <= 8; k++) { ctx.beginPath(); ctx.moveTo(cx + k * 6, hz); ctx.lineTo(cx + k * (e.w / 6), e.h); ctx.stroke(); }
        ctx.globalAlpha = clamp(e.alpha * 0.9, 0, 1); ctx.strokeStyle = rgbStr(c0); ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(0, hz); ctx.lineTo(e.w, hz); ctx.stroke();
      },
    },
    /* ── Радар ── */
    radar: {
      init(s, e) { s.b = Array.from({ length: e.n(6) }, () => ({ ang: rand(0, 6.28), r: rand(0.2, 0.95), lit: 0 })); },
      frame(s, ctx, dt, e) {
        const cx = e.w / 2, cy = e.h / 2, R = Math.min(e.w, e.h) * 0.45, a = (e.t * 1.6) % (Math.PI * 2), c0 = e.fxColor(0), c1 = e.fxColor(1);
        ctx.strokeStyle = rgbStr(c1); ctx.lineWidth = 1; ctx.globalAlpha = clamp(e.alpha * 0.28, 0, 1);
        for (let k = 1; k <= 3; k++) { ctx.beginPath(); ctx.arc(cx, cy, (R * k) / 3, 0, Math.PI * 2); ctx.stroke(); }
        ctx.beginPath(); ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy); ctx.moveTo(cx, cy - R); ctx.lineTo(cx, cy + R); ctx.stroke();
        ctx.fillStyle = rgbStr(c0);
        for (let k = 0; k < 16; k++) {
          ctx.globalAlpha = clamp(e.alpha * 0.28 * (1 - k / 16), 0, 1);
          ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, R, a - (k + 1) * 0.045, a - k * 0.045); ctx.closePath(); ctx.fill();
        }
        for (const b of s.b) {
          const d = (((a - b.ang) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
          if (d < 0.1) b.lit = 1;
          b.lit = Math.max(0, b.lit - dt * 0.55);
          e.dot(ctx, cx + Math.cos(b.ang) * b.r * R, cy + Math.sin(b.ang) * b.r * R, 12, c0, b.lit, 'glow');
        }
      },
    },
    /* ── Подводные блики ── */
    caustics: {
      blend: 'lighter', nat: [[150, 230, 255], [90, 200, 240], [200, 255, 250]],
      frame(s, ctx, dt, e) {
        ctx.lineWidth = 1.6;
        for (let set = 0; set < 2; set++) {
          const L = set ? e.w : e.h, M = set ? e.h : e.w, n = Math.ceil(L / 22) + 2;
          for (let k = 0; k < n; k++) {
            ctx.globalAlpha = clamp(e.alpha * 0.14, 0, 1); ctx.strokeStyle = rgbStr(e.pc({ ci: k % 3, rb: hslToRgb(k * 30, 90, 65) }));
            ctx.beginPath();
            for (let u = 0; u <= M + 8; u += 8) {
              const v = k * 22 - 11 + Math.sin(u * 0.035 + e.t * 1.1 + k * 1.7 + set * 2) * 7 + Math.sin(u * 0.011 - e.t * 0.6 + k) * 10;
              if (set) { if (u) ctx.lineTo(v, u); else ctx.moveTo(v, u); } else if (u) ctx.lineTo(u, v); else ctx.moveTo(u, v);
            }
            ctx.stroke();
          }
        }
      },
    },
    /* ── Спираль ДНК ── */
    dna: {
      frame(s, ctx, dt, e) {
        const cy = e.h / 2, A = e.h * 0.22, c0 = e.fxColor(0), c2 = e.fxColor(2);
        ctx.lineWidth = 1;
        for (let x = 6; x < e.w; x += 14) {
          const ph = x * 0.045 + e.t * 1.5, y1 = cy + Math.sin(ph) * A, y2 = cy - Math.sin(ph) * A, z = Math.cos(ph);
          ctx.globalAlpha = clamp(e.alpha * 0.25, 0, 1); ctx.strokeStyle = rgbStr(mixRgb(c0, c2, 0.5));
          ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2); ctx.stroke();
          e.dot(ctx, x, y1, 9 + 5 * z, c0, 0.55 + 0.45 * z, 'glow');
          e.dot(ctx, x, y2, 9 - 5 * z, c2, 0.55 - 0.45 * z, 'glow');
        }
      },
    },
    /* ── Атом ── */
    orbits: {
      frame(s, ctx, dt, e) {
        const cx = e.w / 2, cy = e.h / 2, R = Math.min(e.w, e.h) * 0.4;
        ctx.lineWidth = 1;
        for (let i = 0; i < 3; i++) {
          const rot = (i * Math.PI) / 3 + e.t * 0.12, col = e.fxColor(i);
          ctx.save(); ctx.translate(cx, cy); ctx.rotate(rot);
          ctx.globalAlpha = clamp(e.alpha * 0.32, 0, 1); ctx.strokeStyle = rgbStr(col);
          ctx.beginPath(); ctx.ellipse(0, 0, R, R * 0.34, 0, 0, Math.PI * 2); ctx.stroke();
          const a = e.t * (1.6 + i * 0.4) + i * 2;
          e.dot(ctx, Math.cos(a) * R, Math.sin(a) * R * 0.34, 14, col, 1, 'glow');
          ctx.restore();
        }
        e.dot(ctx, cx, cy, 30, e.fxColor(1), 0.6 + 0.25 * Math.sin(e.t * 3), 'glow');
      },
    },
    /* ── Салют ── */
    fireworks: {
      nat: FW_NAT,
      init(s) { s.r = []; s.p = []; s.next = rand(0.2, 1); },
      frame(s, ctx, dt, e) {
        s.next -= dt;
        if (s.next <= 0) {
          s.next = rand(0.8, 2.2) / Math.max(0.3, e.o.density);
          const ty = rand(0.15, 0.45) * e.h;
          s.r.push({ x: rand(0.15, 0.85) * e.w, y: e.h + 4, vy: -Math.sqrt(2 * 220 * (e.h - ty)), vx: rand(-15, 15) });
        }
        for (let i = s.r.length - 1; i >= 0; i--) {
          const r = s.r[i]; r.vy += 220 * dt; r.x += r.vx * dt; r.y += r.vy * dt;
          e.dot(ctx, r.x, r.y, 7, [255, 230, 190], 1, 'glow');
          if (r.vy >= -20) { fwExplode(s.p, e, r.x, r.y); s.r.splice(i, 1); }
        }
        fwStep(s.p, ctx, dt, e);
      },
      tap(s, e, x, y) { fwExplode(s.p, e, x, y); },
    },
    /* ═══ Реактивные (зависят от касаний, значений, музыки) ═══ */
    motion_trail: {
      init(s) { s.p = []; s.path = []; },
      frame(s, ctx, dt, e) {
        const now = performance.now(), P = e.ptr;
        if (P.active && now - P.t < 120) {
          for (let i = 0; i < 3; i++) s.p.push(e.mk({ x: P.x + rand(-4, 4), y: P.y + rand(-4, 4), vx: rand(-25, 25) - P.vx * 2, vy: rand(-25, 25) - P.vy * 2, age: 0, life: rand(0.5, 0.9) }));
          s.path.push({ x: P.x, y: P.y, t: now });
        }
        while (s.path.length && now - s.path[0].t > 450) s.path.shift();
        ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        for (let i = 1; i < s.path.length; i++) {
          const f = 1 - (now - s.path[i].t) / 450;
          ctx.globalAlpha = clamp(e.alpha * f * 0.8, 0, 1); ctx.strokeStyle = rgbStr(e.fxColor(i % 3)); ctx.lineWidth = 1 + 5 * f;
          ctx.beginPath(); ctx.moveTo(s.path[i - 1].x, s.path[i - 1].y); ctx.lineTo(s.path[i].x, s.path[i].y); ctx.stroke();
        }
        let j = 0;
        for (let i = 0; i < s.p.length; i++) {
          const p = s.p[i]; p.age += dt;
          if (p.age >= p.life) continue;
          s.p[j++] = p; p.x += p.vx * dt; p.y += p.vy * dt;
          e.dot(ctx, p.x, p.y, 9, e.pc(p), 1 - p.age / p.life, 'glow');
        }
        s.p.length = j;
      },
    },
    magnet: {
      init(s, e) { s.p = Array.from({ length: e.n(36) }, () => e.mk({ x: rand(0, e.w), y: rand(0, e.h), vx: rand(-20, 20), vy: rand(-20, 20) })); },
      frame(s, ctx, dt, e) {
        const P = e.ptr, on = P.active && performance.now() - P.t < 1500;
        ctx.lineWidth = 1;
        for (const p of s.p) {
          if (on) {
            const dx = P.x - p.x, dy = P.y - p.y, d = Math.hypot(dx, dy) + 1, f = 1400 / (d + 40);
            p.vx += ((dx / d) * f - (dy / d) * f * 0.6) * dt; p.vy += ((dy / d) * f + (dx / d) * f * 0.6) * dt;
          } else { p.vx += rand(-30, 30) * dt; p.vy += rand(-30, 30) * dt; }
          p.vx *= 1 - dt * 1.4; p.vy *= 1 - dt * 1.4;
          p.x += p.vx * dt; p.y += p.vy * dt;
          if (p.x < 0) p.x += e.w; else if (p.x > e.w) p.x -= e.w;
          if (p.y < 0) p.y += e.h; else if (p.y > e.h) p.y -= e.h;
          const col = e.pc(p);
          ctx.globalAlpha = clamp(e.alpha * 0.5, 0, 1); ctx.strokeStyle = rgbStr(col);
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * 0.06, p.y - p.vy * 0.06); ctx.stroke();
          e.dot(ctx, p.x, p.y, 7, col, 0.9, 'glow');
        }
      },
    },
    heartbeat: {
      init(s, e) { s.n = Math.ceil(e.w / 2) + 1; s.buf = new Float32Array(s.n); s.head = 0; s.ph = 0; s.acc = 0; },
      frame(s, ctx, dt, e) {
        const bpm = clamp(e.o.bpm || 72, 30, 220), speed = 90;
        s.acc += speed * dt / 2;
        while (s.acc >= 1) { s.acc -= 1; s.ph = (s.ph + (bpm / 60) * (2 / speed)) % 1; s.buf[s.head] = ecg(s.ph); s.head = (s.head + 1) % s.n; }
        const y0 = e.h * 0.58, A = e.h * 0.32, col = e.fxColor(0);
        ctx.lineJoin = 'round'; ctx.strokeStyle = rgbStr(col);
        for (const [w, al] of [[5, 0.22], [1.8, 1]]) {
          ctx.lineWidth = w; ctx.globalAlpha = clamp(e.alpha * al, 0, 1); ctx.beginPath();
          let started = false;
          for (let k = 0; k < s.n - 8; k++) {
            const idx = (s.head + 8 + k) % s.n, x = idx * 2, y = y0 - s.buf[idx] * A;
            if (!started || idx === 0) { ctx.moveTo(x, y); started = true; } else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        const hx = ((s.head - 1 + s.n) % s.n) * 2;
        e.dot(ctx, hx, y0 - s.buf[(s.head - 1 + s.n) % s.n] * A, 16, mixRgb(col, [255, 255, 255], 0.5), 1, 'glow');
      },
    },
    charge: {
      blend: 'source-over',
      init(s, e) { s.lv = e.o.level ?? 0.6; s.b = Array.from({ length: e.n(10) }, () => ({ x: rand(0, e.w), y: rand(0, e.h), v: rand(14, 36), r: rand(1, 3) })); },
      frame(s, ctx, dt, e) {
        s.lv += ((e.o.level ?? 0.6) - s.lv) * Math.min(1, dt * 2);
        const sy = e.h * (1 - clamp(s.lv, 0, 1)), [c0, , c2] = e.pal3();
        ctx.beginPath(); ctx.moveTo(0, e.h);
        for (let x = 0; x <= e.w + 6; x += 6) ctx.lineTo(x, sy + Math.sin(x * 0.04 + e.t * 2) * 4 + Math.sin(x * 0.09 - e.t * 3) * 2);
        ctx.lineTo(e.w, e.h); ctx.closePath();
        const g = ctx.createLinearGradient(0, sy, 0, e.h);
        g.addColorStop(0, rgbStr(c0, 0.5)); g.addColorStop(1, rgbStr(c2, 0.28));
        ctx.globalAlpha = clamp(e.alpha * 0.8, 0, 1); ctx.fillStyle = g; ctx.fill();
        ctx.globalCompositeOperation = 'lighter';
        for (const b of s.b) {
          b.y -= b.v * dt;
          if (b.y < sy + 4) { b.y = e.h + rand(0, 20); b.x = rand(0, e.w); }
          e.dot(ctx, b.x + Math.sin(e.t * 2 + b.v) * 3, b.y, b.r * 4, mixRgb(c0, [255, 255, 255], 0.5), 0.6, 'glow');
        }
        ctx.globalAlpha = clamp(e.alpha * 0.7, 0, 1); ctx.strokeStyle = 'rgba(255,255,255,.8)'; ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x <= e.w + 6; x += 6) { const y = sy + Math.sin(x * 0.04 + e.t * 2) * 4 + Math.sin(x * 0.09 - e.t * 3) * 2; if (x) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
        ctx.stroke();
      },
    },
    equalizer: {
      blend: 'lighter',
      init(s, e) { s.n = clamp(Math.floor(e.w / 16), 8, 40); s.h = new Float32Array(s.n); s.pk = new Float32Array(s.n); },
      frame(s, ctx, dt, e) {
        const bpm = clamp(e.o.bpm || 120, 40, 220), pulse = Math.exp(-((e.t * bpm) / 60 % 1) * 6);
        const energy = e.o.beatOn ? 0.5 + 0.5 * pulse : 0.16 + 0.05 * pulse;
        const bw = e.w / s.n, [c0, c1, c2] = e.pal3();
        for (let i = 0; i < s.n; i++) {
          const target = energy * (0.25 + 0.75 * (0.5 + 0.5 * Math.sin(e.t * (2 + i * 0.37) + i))) * (0.7 + 0.3 * Math.random());
          s.h[i] += (target - s.h[i]) * Math.min(1, dt * 12);
          s.pk[i] = Math.max(s.h[i], s.pk[i] - dt * 0.35);
          const H = s.h[i] * e.h * 0.85, x = i * bw + 2;
          const g = ctx.createLinearGradient(0, e.h, 0, e.h - H);
          g.addColorStop(0, rgbStr(c2)); g.addColorStop(0.6, rgbStr(c1)); g.addColorStop(1, rgbStr(c0));
          ctx.globalAlpha = clamp(e.alpha * 0.55, 0, 1); ctx.fillStyle = g; ctx.fillRect(x, e.h - H, bw - 4, H);
          ctx.globalAlpha = clamp(e.alpha * 0.9, 0, 1); ctx.fillStyle = rgbStr(mixRgb(c0, [255, 255, 255], 0.5)); ctx.fillRect(x, e.h - s.pk[i] * e.h * 0.85 - 3, bw - 4, 2);
        }
      },
    },
  });

  /* ═════════════════════════ v3: РАЗОВЫЕ ДИНАМИЧЕСКИЕ СОБЫТИЯ ═════════════════════════ */
  const EVENT_IMPL = {
    fireworks: {
      start(ev, e) { ev.p = []; fwExplode(ev.p, e, ev.x, ev.y); if (Math.random() < 0.6) fwExplode(ev.p, e, ev.x + rand(-60, 60), ev.y + rand(-40, 20)); },
      frame(ev, ctx, dt, e) { e.nat = FW_NAT; fwStep(ev.p, ctx, dt, e); return !ev.p.length; },
    },
    shockwave: {
      start(ev, e) { ev.R = Math.hypot(e.w, e.h) * 0.9; },
      frame(ev, ctx, dt, e) {
        const k = ev.age / 0.9, r = (1 - (1 - Math.min(k, 1)) ** 3) * ev.R;
        e.dot(ctx, ev.x, ev.y, 90 * (1 - k), [255, 255, 255], Math.max(0, 1 - k * 3), 'glow');
        ctx.lineWidth = 1 + 6 * (1 - k);
        [[0, 1], [2, 0.7]].forEach(([ci, m]) => {
          ctx.globalAlpha = clamp((1 - k) * 0.9, 0, 1); ctx.strokeStyle = rgbStr(mixRgb(e.c(ci), [255, 255, 255], 0.3));
          ctx.beginPath(); ctx.arc(ev.x, ev.y, Math.max(0.1, r * m), 0, Math.PI * 2); ctx.stroke();
        });
        return k >= 1;
      },
    },
    sparkle: {
      start(ev) { ev.s = Array.from({ length: 14 }, () => ({ dx: rand(-70, 70), dy: rand(-45, 45), d: rand(0, 0.35), sz: rand(8, 18), ci: r3() })); },
      frame(ev, ctx, dt, e) {
        for (const g of ev.s) {
          const k = (ev.age - g.d) / 0.6;
          if (k <= 0 || k >= 1) continue;
          const a = Math.sin(k * Math.PI), x = ev.x + g.dx, y = ev.y + g.dy, L = g.sz * a, col = mixRgb(e.c(g.ci), [255, 255, 255], 0.5);
          ctx.globalAlpha = clamp(a, 0, 1); ctx.strokeStyle = rgbStr(col); ctx.lineWidth = 1.4;
          ctx.beginPath(); ctx.moveTo(x - L, y); ctx.lineTo(x + L, y); ctx.moveTo(x, y - L); ctx.lineTo(x, y + L); ctx.stroke();
          e.dot(ctx, x, y, L * 1.2, col, a, 'glow');
        }
        return ev.age > 1;
      },
    },
    ring: {
      frame(ev, ctx, dt, e) {
        ctx.lineWidth = 2;
        for (let i = 0; i < 3; i++) {
          const k = (ev.age - i * 0.25) / 1.1;
          if (k <= 0 || k >= 1) continue;
          ctx.globalAlpha = clamp(1 - k, 0, 1); ctx.strokeStyle = rgbStr(e.c(i));
          ctx.beginPath(); ctx.arc(ev.x, ev.y, 8 + k * 140, 0, Math.PI * 2); ctx.stroke();
        }
        return ev.age > 1.6;
      },
    },
    flash: {
      frame(ev, ctx, dt, e) {
        const k = ev.age / 0.5, R = Math.hypot(e.w, e.h);
        const g = ctx.createRadialGradient(ev.x, ev.y, 0, ev.x, ev.y, R);
        g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.4, rgbStr(e.c(1), 0.6)); g.addColorStop(1, rgbStr(e.c(2), 0));
        ctx.globalAlpha = clamp((1 - k) ** 2 * 0.6, 0, 1); ctx.fillStyle = g; ctx.fillRect(0, 0, e.w, e.h);
        return k >= 1;
      },
    },
    confetti: {
      start(ev, e) {
        ev.p = [];
        [[0, 1], [e.w, -1]].forEach(([x0, dir]) => {
          for (let i = 0; i < 32; i++) ev.p.push({ x: x0, y: e.h, vx: dir * rand(80, 260), vy: -rand(220, 430), rot: rand(0, 6), vr: rand(-8, 8), w: rand(4, 7), h: rand(7, 11), c: hslToRgb(rand(0, 360), 95, 60) });
        });
      },
      frame(ev, ctx, dt, e) {
        ctx.globalCompositeOperation = 'source-over';
        const a = clamp(1.6 - ev.age * 0.7, 0, 1);
        for (const p of ev.p) {
          p.vy += 480 * dt; p.vx *= 1 - dt * 0.8; p.x += p.vx * dt; p.y += p.vy * dt; p.rot += p.vr * dt;
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(Math.cos(ev.age * 9 + p.rot), 1);
          ctx.globalAlpha = a; ctx.fillStyle = rgbStr(p.c); ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
        }
        return ev.age > 2.3;
      },
    },
    smoke: {
      start(ev) { ev.p = Array.from({ length: 9 }, () => ({ dx: rand(-14, 14), vy: rand(-45, -20), vx: rand(-15, 15), r: rand(12, 22) })); },
      frame(ev, ctx, dt, e) {
        ctx.globalCompositeOperation = 'source-over';
        const k = ev.age / 1.8;
        for (const p of ev.p) e.dot(ctx, ev.x + p.dx + p.vx * ev.age, ev.y + p.vy * ev.age, p.r * (1 + k * 2.5), [175, 180, 192], 0.35 * (1 - k), 'soft');
        return k >= 1;
      },
    },
    lightning: {
      start(ev, e) { ev.b = e.bolt(ev.x, ev.y); ev.b.life = ev.b.max = 0.5; },
      frame(ev, ctx, dt, e) {
        const k = ev.age / 0.5;
        if (k < 0.3) { ctx.globalAlpha = clamp((0.3 - k) * 0.8, 0, 1); ctx.fillStyle = 'rgba(255,255,255,1)'; ctx.fillRect(0, 0, e.w, e.h); }
        ctx.lineJoin = 'round'; ctx.lineCap = 'round';
        const a = (1 - k) * (Math.random() > 0.2 ? 1 : 0.4);
        for (const seg of ev.b.segs) {
          ctx.beginPath(); seg.pts.forEach((p, j) => (j ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
          ctx.globalAlpha = clamp(a * 0.4, 0, 1); ctx.strokeStyle = rgbStr(ev.b.col); ctx.lineWidth = seg.w * 5; ctx.stroke();
          ctx.globalAlpha = clamp(a, 0, 1); ctx.strokeStyle = '#fff'; ctx.lineWidth = seg.w; ctx.stroke();
        }
        return k >= 1;
      },
    },
    glitch: {
      start(ev, e) { e.shell._glitch(0.45); ev.bars = Array.from({ length: 6 }, () => ({ y: rand(0, e.h), hh: rand(2, 16), ci: r3() })); },
      frame(ev, ctx, dt, e) {
        ctx.globalCompositeOperation = 'source-over';
        for (const b of ev.bars) { ctx.globalAlpha = 0.35; ctx.fillStyle = rgbStr(e.c(b.ci)); ctx.fillRect(rand(-20, 20), b.y, e.w, b.hh); }
        return ev.age > 0.45;
      },
    },
    gust: {
      start(ev, e) { ev.p = Array.from({ length: 28 }, () => ({ y: rand(0, e.h), d: rand(0, 0.3), v: rand(500, 900), len: rand(30, 90) })); },
      frame(ev, ctx, dt, e) {
        ctx.lineCap = 'round'; ctx.lineWidth = 1.2; ctx.strokeStyle = 'rgba(255,255,255,1)';
        for (const p of ev.p) {
          const t = ev.age - p.d;
          if (t <= 0) continue;
          const x = -p.len + t * p.v, wy = p.y + Math.sin(t * 6 + p.y) * 6;
          ctx.globalAlpha = clamp(0.5 * (1 - ev.age), 0, 1); ctx.beginPath(); ctx.moveTo(x - p.len, wy); ctx.lineTo(x, wy); ctx.stroke();
        }
        return ev.age > 1;
      },
    },
  };
  /* ═════════════════════════ ОБЩИЙ ПЛАНИРОВЩИК КАДРОВ ═════════════════════════ */
  /** Один requestAnimationFrame на все карточки, адаптивное качество и экономия батареи */
  const Scheduler = {
    set: new Set(), raf: 0, prev: 0, avg: 16.7, q: 1, budget: 1, saver: false,
    add(e) { this.set.add(e); this.kick(); },
    remove(e) { this.set.delete(e); },
    kick() { if (!this.raf && this.set.size) this.raf = requestAnimationFrame((t) => this.loop(t)); },
    loop(now) {
      this.raf = 0;
      if (this.prev) this.avg = this.avg * 0.95 + Math.min(100, now - this.prev) * 0.05;
      this.prev = now;
      if (this.avg > 30) this.q = Math.max(0.45, this.q - 0.01);
      else if (this.avg < 19) this.q = Math.min(1, this.q + 0.004);
      this.budget = this.set.size > 8 ? 8 / this.set.size : 1;
      for (const e of [...this.set]) { try { e.tick(now); } catch (err) { console.warn('[antarikfox-glass]', err); } }
      if (this.set.size) this.kick(); else this.prev = 0;
    },
  };
  try {
    if (typeof navigator !== 'undefined' && navigator.getBattery) {
      navigator.getBattery().then((b) => {
        const u = () => { Scheduler.saver = !b.charging && b.level < 0.2; };
        u(); b.addEventListener('levelchange', u); b.addEventListener('chargingchange', u);
      }).catch(() => {});
    }
  } catch (e) { /* нет Battery API */ }

  const GARLAND = { classic: CLASSIC, warm: [[255, 214, 140], [255, 190, 100], [255, 226, 170]], cold: [[225, 242, 255], [190, 225, 255], [240, 250, 255]] };

  class FxEngine {
    constructor(canvas, shell) {
      this.cv = canvas; this.ctx = canvas.getContext('2d'); this.shell = shell;
      this.layers = []; this.key = ''; this.bursts = []; this.events = [];
      this.running = false; this.visible = true; this.paused = false;
      this.w = 0; this.h = 0; this.dpr = 1; this.t = 0; this.last = 0; this.alpha = 1; this.nat = null;
      this.ptr = { x: 0, y: 0, vx: 0, vy: 0, active: false, t: 0 };
      this.colors = [[56, 189, 248], [129, 140, 248], [192, 132, 252]];
      this.o = { density: 1, speed: 1, opacity: 0.85, colors: 'auto', fps: 50, texOpacity: 0.6, texScale: 1, lit: 1, radius: 24, quality: 'medium', static: false, pad: 0 };
      this.sprites = new Map(); this.shapes = new Map();
      this._vis = () => this.update();
      document.addEventListener('visibilitychange', this._vis);
      if (typeof ResizeObserver !== 'undefined') { this.ro = new ResizeObserver(() => this.resize()); this.ro.observe(canvas); }
    }

    configure(names, o) {
      const prev = JSON.stringify([this.o.density, this.o.texScale, this.o.quality, this.o.garlandEdges, this.o.pad]);
      Object.assign(this.o, o);
      const key = names.join(',');
      const changed = key !== this.key || prev !== JSON.stringify([this.o.density, this.o.texScale, this.o.quality, this.o.garlandEdges, this.o.pad]);
      if (key !== this.key) {
        this.key = key;
        this.layers = names.filter((n) => FX_IMPL[n]).map((n) => ({ name: n, impl: FX_IMPL[n], tex: !!FX_IMPL[n].tex, s: {} }));
      }
      if (changed) { this.w = 0; this.resize(); }
      this.update();
      if (!this.running) this.renderOnce();
    }

    setColors(cols) {
      const k = JSON.stringify(cols);
      if (k === this._ck) return;
      this._ck = k; this.colors = cols; this.sprites.clear();
      if (!this.running) this.renderOnce();
    }
    setVisible(v) { this.visible = v; this.update(); }
    setPaused(p) { this.paused = p; this.update(); }

    resize() {
      const w = Math.max(1, Math.round(this.cv.clientWidth)), h = Math.max(1, Math.round(this.cv.clientHeight));
      const cap = this.o.quality === 'low' ? 1 : this.o.quality === 'high' ? 2 : 1.5;
      const dpr = Math.min(window.devicePixelRatio || 1, cap * (Scheduler.q < 0.7 ? 0.75 : 1));
      if (w === this.w && h === this.h && Math.abs(dpr - this.dpr) < 0.01) return;
      this.w = w; this.h = h; this.dpr = Math.max(1, dpr);
      this.cv.width = Math.round(w * this.dpr); this.cv.height = Math.round(h * this.dpr);
      this.areaF = clamp((w * h) / (300 * 170), 0.35, 3.5);
      this.layers.forEach((l) => {
        l.s = {}; this.nat = l.impl.nat || null;
        try { if (l.impl.init) l.impl.init(l.s, this); } catch (err) { l.dead = true; console.warn('[antarikfox-glass]', l.name, err); }
      });
      this.nat = null;
      if (!this.running) this.renderOnce();
    }

    update() {
      const want = (this.layers.length > 0 || this.bursts.length > 0 || this.events.length > 0)
        && this.visible && !document.hidden && !this.o.static && !this.paused;
      if (want && !this.running) { this.running = true; this.last = performance.now(); Scheduler.add(this); }
      else if (!want && this.running) { this.running = false; Scheduler.remove(this); }
      if (!this.layers.length && !this.bursts.length && !this.events.length) this.clear();
    }

    clear() { this.ctx.setTransform(1, 0, 0, 1, 0, 0); this.ctx.clearRect(0, 0, this.cv.width, this.cv.height); }
    renderOnce() { if (this.w > 1 && this.layers.length) this.render(0.016); }

    tick(now) {
      const fps = Math.max(12, this.o.fps * Scheduler.q * (Scheduler.saver ? 0.5 : 1) * Scheduler.budget);
      if (now - this.last < 1000 / fps - 2) return;
      const dt = Math.min((now - this.last) / 1000, 0.06);
      this.last = now;
      this.render(dt);
      if (!this.layers.length && !this.bursts.length && !this.events.length) this.update();
    }

    render(dt) {
      const ctx = this.ctx;
      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      ctx.clearRect(0, 0, this.w, this.h);
      if (this.w < 2 || this.h < 2) return;
      this.t += dt * this.o.speed;
      for (const l of this.layers) {
        if (l.dead) continue;
        ctx.save();
        ctx.globalCompositeOperation = l.impl.blend || 'lighter';
        this.alpha = l.tex ? clamp(this.o.texOpacity * this.o.lit, 0, 1) : clamp(this.o.opacity, 0, 1);
        this.nat = l.impl.nat || null;
        ctx.globalAlpha = this.alpha;
        try { l.impl.frame(l.s, ctx, dt * (l.tex ? (this.o.texSpeed ?? 1) : this.o.speed), this); }
        catch (err) { l.dead = true; console.warn('[antarikfox-glass] fx', l.name, err); }
        ctx.restore();
      }
      this.nat = null;
      if (this.bursts.length) {
        ctx.save(); ctx.globalCompositeOperation = 'lighter'; this.alpha = 1;
        this.drawSparks(this.bursts, ctx, dt, 320);
        ctx.restore();
      }
      for (let i = this.events.length - 1; i >= 0; i--) {
        const ev = this.events[i];
        ev.age += dt;
        let done = true;
        ctx.save(); ctx.globalCompositeOperation = 'lighter'; this.alpha = 1; this.nat = null;
        try { done = EVENT_IMPL[ev.type].frame(ev, ctx, dt, this); } catch (err) { console.warn('[antarikfox-glass] event', ev.type, err); }
        ctx.restore();
        if (done) this.events.splice(i, 1);
      }
      this.nat = null;
    }

    tap(x, y, burst) {
      for (const l of this.layers) if (l.impl.tap && !l.dead) { this.nat = l.impl.nat || null; l.impl.tap(l.s, this, x, y); }
      this.nat = null;
      if (burst) for (let i = 0; i < 22; i++) { const a = rand(0, Math.PI * 2), v = rand(90, 260); this.bursts.push(this.spark(x, y, Math.cos(a) * v, Math.sin(a) * v - 40)); }
      this.update();
    }
    spawn(type, x, y) {
      if (!EVENT_IMPL[type] || this.events.length > 12) return;
      if (this.w < 2) this.resize();
      const ev = { type, x: x ?? this.w / 2, y: y ?? this.h / 2, age: 0 };
      try { if (EVENT_IMPL[type].start) EVENT_IMPL[type].start(ev, this); } catch (err) { console.warn('[antarikfox-glass] event', type, err); return; }
      this.events.push(ev);
      this.update();
    }
    move(x, y) { const p = this.ptr; p.vx = x - p.x; p.vy = y - p.y; p.x = x; p.y = y; p.active = true; p.t = performance.now(); }
    leave() { this.ptr.active = false; }

    destroy() {
      this.running = false; Scheduler.remove(this);
      if (this.ro) this.ro.disconnect();
      document.removeEventListener('visibilitychange', this._vis);
    }

    /* ── помощники ── */
    n(base) {
      const q = this.o.quality === 'low' ? 0.6 : this.o.quality === 'high' ? 1.3 : 1;
      return Math.max(1, Math.round(base * this.o.density * (this.areaF || 1) * q * (Scheduler.saver ? 0.6 : 1)));
    }
    c(i) { return this.colors[((i || 0) % 3 + 3) % 3] || this.colors[0]; }
    palPick(i) {
      const m = this.o.colors, nat = this.nat;
      if (m === 'white') return mixRgb(this.c(i), [255, 255, 255], 0.82);
      if (m === 'warm') return WARM[i % 3];
      if ((m === 'auto' || m === 'natural') && nat) return nat[i % nat.length];
      return this.c(i);
    }
    fxColor(i) { return this.o.colors === 'rainbow' ? hslToRgb(i * 120 + this.t * 30, 95, 62) : this.palPick(i); }
    pal3() { return [0, 1, 2].map((i) => this.fxColor(i)); }
    garlandPal() {
      const m = this.o.garlandColors || 'classic';
      if (m === 'glow') return this.colors;
      if (m === 'rainbow') return Array.from({ length: 7 }, (_, i) => hslToRgb(i * 51 + this.t * 20, 95, 60));
      return GARLAND[m] || CLASSIC;
    }
    mk(p, rainbow) {
      if (p.ci === undefined) p.ci = ri(this.nat ? this.nat.length : 3);
      p.rb = hslToRgb(rand(0, 360), 100, rainbow ? 58 : 64);
      return p;
    }
    pc(p) { return this.o.colors === 'rainbow' ? (p.rb || [255, 255, 255]) : this.palPick(p.ci || 0); }
    colorAt(x, y) {
      const t = clamp((x / this.w + y / this.h) / 2, 0, 1);
      return t < 0.5 ? mixRgb(this.colors[0], this.colors[1], t * 2) : mixRgb(this.colors[1], this.colors[2], (t - 0.5) * 2);
    }
    edgeLit(x, y) {
      const d = Math.min(x, this.w - x, y, this.h - y), f = 1 - clamp(d / (Math.min(this.w, this.h) * 0.5), 0, 1);
      return 0.16 + 0.84 * f * f;
    }
    cache(key, w, h, draw) {
      let s = this.shapes.get(key);
      if (s) return s;
      if (this.shapes.size > 120) this.shapes.clear();
      s = document.createElement('canvas'); s.width = w; s.height = h;
      draw(s.getContext('2d'), w, h);
      this.shapes.set(key, s);
      return s;
    }
    sprite(rgb, kind) {
      const q = rgb.map((v) => Math.round(v / 8) * 8);
      const key = `${q}|${kind}`;
      let s = this.sprites.get(key);
      if (s) return s;
      if (this.sprites.size > 240) this.sprites.clear();
      s = document.createElement('canvas'); s.width = s.height = 64;
      const g = s.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      if (kind === 'soft') { gr.addColorStop(0, rgbStr(q, 0.9)); gr.addColorStop(0.5, rgbStr(q, 0.35)); gr.addColorStop(1, rgbStr(q, 0)); }
      else if (kind === 'disc') { gr.addColorStop(0, rgbStr(q, 0.3)); gr.addColorStop(0.78, rgbStr(q, 0.42)); gr.addColorStop(0.9, rgbStr(q, 0.6)); gr.addColorStop(1, rgbStr(q, 0)); }
      else { gr.addColorStop(0, rgbStr(mixRgb(q, [255, 255, 255], 0.6), 1)); gr.addColorStop(0.18, rgbStr(q, 0.9)); gr.addColorStop(0.45, rgbStr(q, 0.25)); gr.addColorStop(1, rgbStr(q, 0)); }
      g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
      this.sprites.set(key, s);
      return s;
    }
    dot(ctx, x, y, size, rgb, a, kind) {
      if (a <= 0.01 || size <= 0) return;
      ctx.globalAlpha = clamp(this.alpha * a, 0, 1);
      ctx.drawImage(this.sprite(rgb, kind || 'glow'), x - size / 2, y - size / 2, size, size);
    }
    spark(x, y, vx, vy) { return this.mk({ x, y, vx, vy, life: rand(0.6, 1.3), age: 0 }); }
    drawSparks(arr, ctx, dt, grav) {
      ctx.lineCap = 'round'; ctx.lineWidth = 1.4;
      let j = 0;
      for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        p.age += dt; p.vy += grav * dt; p.x += p.vx * dt; p.y += p.vy * dt;
        if (p.age >= p.life || p.y > this.h + 30) continue;
        arr[j++] = p;
        const a = 1 - p.age / p.life, col = this.pc(p);
        ctx.globalAlpha = clamp(this.alpha * a, 0, 1);
        ctx.strokeStyle = rgbStr(mixRgb(col, [255, 255, 255], 0.35));
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * 0.035, p.y - p.vy * 0.035); ctx.stroke();
        this.dot(ctx, p.x, p.y, 7, col, a, 'glow');
      }
      arr.length = j;
    }
    bolt(x0, y1) {
      const sx = x0 ?? rand(this.w * 0.1, this.w * 0.9);
      const ex = sx + rand(-this.w * 0.3, this.w * 0.3), ey = y1 ?? this.h * rand(0.6, 1.05);
      const path = (ax, ay, bx, by, disp, depth) => {
        let pts = [[ax, ay], [bx, by]];
        for (let d = 0; d < depth; d++) {
          const nx = [pts[0]];
          for (let i = 1; i < pts.length; i++) {
            const [x1, ya] = pts[i - 1], [x2, yb] = pts[i];
            nx.push([(x1 + x2) / 2 + rand(-disp, disp), (ya + yb) / 2 + rand(-disp * 0.3, disp * 0.3)], pts[i]);
          }
          pts = nx; disp /= 2;
        }
        return pts;
      };
      const main = path(sx, -5, x0 !== undefined ? sx + rand(-20, 20) : ex, ey, this.w * 0.12, 5);
      const segs = [{ pts: main, w: 1.6 }];
      const nb = Math.floor(rand(1, 3));
      for (let b = 0; b < nb; b++) {
        const st = main[Math.floor(rand(main.length * 0.25, main.length * 0.7))];
        segs.push({ pts: path(st[0], st[1], st[0] + rand(-60, 60), st[1] + rand(30, 80), 14, 4), w: 0.9 });
      }
      return { segs, life: 0.4, max: 0.4, col: this.fxColor(r3()) };
    }
    perimLen(ins = 1.5) {
      const w = this.w - 2 * ins, h = this.h - 2 * ins, r = Math.min(this.o.radius, w / 2, h / 2);
      return 2 * (w - 2 * r) + 2 * (h - 2 * r) + 2 * Math.PI * r;
    }
    perim(u, ins) {
      const w = this.w - 2 * ins, h = this.h - 2 * ins, r = Math.max(0.01, Math.min(this.o.radius, w / 2, h / 2));
      const sw = w - 2 * r, sh = h - 2 * r, arc = (Math.PI * r) / 2;
      let d = (((u % 1) + 1) % 1) * (2 * sw + 2 * sh + 4 * arc);
      const P = (x, y) => [x + ins, y + ins];
      if (d < sw) return P(r + d, 0); d -= sw;
      if (d < arc) { const a = -Math.PI / 2 + d / r; return P(w - r + Math.cos(a) * r, r + Math.sin(a) * r); } d -= arc;
      if (d < sh) return P(w, r + d); d -= sh;
      if (d < arc) { const a = d / r; return P(w - r + Math.cos(a) * r, h - r + Math.sin(a) * r); } d -= arc;
      if (d < sw) return P(w - r - d, h); d -= sw;
      if (d < arc) { const a = Math.PI / 2 + d / r; return P(r + Math.cos(a) * r, h - r + Math.sin(a) * r); } d -= arc;
      if (d < sh) return P(0, h - r - d); d -= sh;
      const a = Math.PI + d / r; return P(r + Math.cos(a) * r, r + Math.sin(a) * r);
    }
    /** Плексус с пространственной сеткой: O(n) вместо O(n²) */
    plexus(s, ctx, dt, collect) {
      const { w, h } = this, D = s.D, D2 = D * D, P = s.p;
      for (const p of P) {
        p.x += p.vx * dt; p.y += p.vy * dt;
        if (p.x < 0 || p.x > w) { p.vx *= -1; p.x = clamp(p.x, 0, w); }
        if (p.y < 0 || p.y > h) { p.vy *= -1; p.y = clamp(p.y, 0, h); }
      }
      const cols = Math.ceil(w / D) + 1, grid = new Map();
      P.forEach((p, i) => { const k = Math.floor(p.x / D) + Math.floor(p.y / D) * cols; const l = grid.get(k); if (l) l.push(i); else grid.set(k, [i]); });
      if (collect) s.links = [];
      ctx.lineWidth = 0.75;
      for (let i = 0; i < P.length; i++) {
        const a = P[i], cx = Math.floor(a.x / D), cy = Math.floor(a.y / D);
        for (let gy = cy - 1; gy <= cy + 1; gy++) for (let gx = cx - 1; gx <= cx + 1; gx++) {
          const list = grid.get(gx + gy * cols);
          if (!list) continue;
          for (const j of list) {
            if (j <= i) continue;
            const b = P[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
            if (d2 > D2) continue;
            const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
            ctx.globalAlpha = clamp(this.alpha * (1 - Math.sqrt(d2) / D) * this.edgeLit(mx, my), 0, 1);
            ctx.strokeStyle = rgbStr(this.colorAt(mx, my));
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            if (collect) s.links.push([i, j]);
          }
        }
      }
      for (const p of P) this.dot(ctx, p.x, p.y, p.r * 6, mixRgb(this.colorAt(p.x, p.y), [255, 255, 255], 0.3), this.edgeLit(p.x, p.y), 'glow');
    }
  }
  /* ═════════════════════ v3.7: НОВЫЕ ТЕКСТУРЫ (21 живая + 10 статичных) ═════════════════════ */
  const tcol = (c, a) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${clamp(a, 0, 1).toFixed(3)})`;
  const LIVE_TEX = {
    /* волнистые линии жидкости */
    liquid: {
      tex: true,
      init(s, e) { s.n = clamp(Math.round(e.h / (26 * e.o.texScale)), 3, 18); },
      frame(s, ctx, dt, e) {
        const t = e.t; ctx.lineWidth = 1;
        for (let k = 0; k < s.n; k++) {
          const y0 = (e.h * (k + 0.5)) / s.n;
          ctx.strokeStyle = tcol(e.colorAt(e.w / 2, y0), 0.9); ctx.beginPath();
          for (let x = 0; x <= e.w + 8; x += 8) { const y = y0 + Math.sin(x * 0.02 + t * 0.8 + k) * 6 + Math.sin(x * 0.007 - t * 0.5 + k * 0.6) * 5; if (x) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
          ctx.stroke();
        }
      },
    },
    /* круги сонара */
    sonar: {
      tex: true,
      init(s) { s.r = []; s.next = 0; },
      frame(s, ctx, dt, e) {
        s.next -= dt;
        if (s.next <= 0) { s.next = rand(0.6, 1.6); s.r.push({ x: rand(0, e.w), y: rand(0, e.h), r: 0, m: rand(60, 160) * e.o.texScale }); }
        ctx.lineWidth = 1.2;
        for (let i = s.r.length - 1; i >= 0; i--) {
          const q = s.r[i]; q.r += dt * 40;
          if (q.r > q.m) { s.r.splice(i, 1); continue; }
          for (let j = 0; j < 3; j++) { const rr = q.r - j * 12; if (rr <= 0) continue; ctx.strokeStyle = tcol(e.colorAt(q.x, q.y), (1 - q.r / q.m) * (1 - j * 0.3)); ctx.beginPath(); ctx.arc(q.x, q.y, rr, 0, 6.283); ctx.stroke(); }
        }
      },
    },
    /* капли на стекле */
    droplets: {
      tex: true,
      init(s, e) { s.d = Array.from({ length: clamp(Math.round((e.w * e.h) / (900 * e.o.texScale)), 12, 160) }, () => ({ x: rand(0, e.w), y: rand(0, e.h), r: rand(1, 3.6) * e.o.texScale, v: 0, w: rand(0, 1) })); },
      frame(s, ctx, dt, e) {
        for (const d of s.d) {
          if (d.r > 2.6 && Math.random() < dt * 0.15) d.v = rand(20, 60);
          if (d.v) { d.y += d.v * dt; d.v *= 0.985; if (d.v < 2) d.v = 0; if (d.y > e.h + 5) { d.y = -5; d.x = rand(0, e.w); } }
          const c = e.colorAt(d.x, d.y);
          ctx.fillStyle = tcol(c, 0.18); ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, 6.283); ctx.fill();
          ctx.strokeStyle = tcol(c, 0.7); ctx.lineWidth = 0.8; ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0.4, 2.6); ctx.stroke();
          ctx.fillStyle = 'rgba(255,255,255,.75)'; ctx.fillRect(d.x - d.r * 0.4, d.y - d.r * 0.5, Math.max(0.6, d.r * 0.35), Math.max(0.6, d.r * 0.35));
          if (d.v) { ctx.strokeStyle = tcol(c, 0.25); ctx.beginPath(); ctx.moveTo(d.x, d.y - d.r); ctx.lineTo(d.x, d.y - d.r - d.v * 0.4); ctx.stroke(); }
        }
      },
    },
    /* светлячки-червячки со шлейфом */
    glowworms: {
      tex: true,
      init(s, e) { s.p = Array.from({ length: clamp(Math.round(e.w * e.h / 9000), 5, 40) }, () => ({ x: rand(0, e.w), y: rand(0, e.h), a: rand(0, 6.28), tr: [] })); },
      frame(s, ctx, dt, e) {
        for (const p of s.p) {
          p.a += (Math.sin(e.t * 0.7 + p.x * 0.01) * 1.6) * dt; p.x += Math.cos(p.a) * 22 * dt; p.y += Math.sin(p.a) * 22 * dt;
          if (p.x < -10) p.x = e.w + 10; if (p.x > e.w + 10) p.x = -10; if (p.y < -10) p.y = e.h + 10; if (p.y > e.h + 10) p.y = -10;
          p.tr.push([p.x, p.y]); if (p.tr.length > 18) p.tr.shift();
          const c = e.colorAt(p.x, p.y);
          p.tr.forEach((q, i) => { ctx.fillStyle = tcol(c, (i / p.tr.length) * 0.5); ctx.fillRect(q[0] - 0.8, q[1] - 0.8, 1.6, 1.6); });
          e.dot(ctx, p.x, p.y, 7, c, 0.9, 'glow');
        }
      },
    },
    /* звёздная пыль */
    stardust: {
      tex: true,
      init(s, e) { s.p = Array.from({ length: clamp(Math.round(e.w * e.h / (420 * e.o.texScale)), 30, 500) }, () => ({ x: rand(0, e.w), y: rand(0, e.h), f: rand(0.5, 3), ph: rand(0, 6.28), r: rand(0.4, 1.3) })); },
      frame(s, ctx, dt, e) {
        for (const p of s.p) { const k = Math.pow(0.5 + 0.5 * Math.sin(e.t * p.f + p.ph), 3); ctx.fillStyle = tcol(mixRgb(e.colorAt(p.x, p.y), [255, 255, 255], 0.5), k); ctx.fillRect(p.x, p.y, p.r, p.r); }
      },
    },
    /* соты с бегущей волной света */
    hexpulse: {
      tex: true,
      init(s, e) { s.R = 14 * e.o.texScale; },
      frame(s, ctx, dt, e) {
        const R = s.R, w = R * Math.sqrt(3), cx = e.w / 2, cy = e.h / 2; ctx.lineWidth = 1;
        for (let row = -1, y = 0; y < e.h + R * 2; row++, y = row * R * 1.5) {
          for (let x = (row % 2 ? w / 2 : 0) - w; x < e.w + w; x += w) {
            const d = Math.hypot(x - cx, y - cy), k = 0.12 + 0.88 * Math.pow(Math.max(0, Math.sin(d * 0.035 - e.t * 2)), 6);
            ctx.strokeStyle = tcol(e.colorAt(x, y), k); ctx.beginPath();
            for (let i = 0; i < 6; i++) { const a = Math.PI / 3 * i + Math.PI / 6, px2 = x + R * 0.92 * Math.cos(a), py2 = y + R * 0.92 * Math.sin(a); if (i) ctx.lineTo(px2, py2); else ctx.moveTo(px2, py2); }
            ctx.closePath(); ctx.stroke();
          }
        }
      },
    },
    /* дорожки платы с бегущими импульсами */
    traces: {
      tex: true,
      init(s, e) {
        const g = 18 * e.o.texScale; s.paths = [];
        const n = clamp(Math.round(e.w * e.h / 5000), 6, 50);
        for (let i = 0; i < n; i++) {
          let x = Math.round(rand(0, e.w) / g) * g, y = Math.round(rand(0, e.h) / g) * g; const pts = [[x, y]];
          for (let k = 0; k < 5; k++) { if (Math.random() < 0.5) x += (Math.random() < 0.5 ? -1 : 1) * g * Math.ceil(rand(1, 4)); else y += (Math.random() < 0.5 ? -1 : 1) * g * Math.ceil(rand(1, 3)); pts.push([x, y]); }
          s.paths.push({ pts, t: rand(0, 1), sp: rand(0.15, 0.5) });
        }
      },
      frame(s, ctx, dt, e) {
        ctx.lineWidth = 1;
        for (const p of s.paths) {
          const c = e.colorAt(p.pts[0][0], p.pts[0][1]);
          ctx.strokeStyle = tcol(c, 0.35); ctx.beginPath(); p.pts.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.stroke();
          ctx.fillStyle = tcol(c, 0.6); ctx.beginPath(); ctx.arc(p.pts[0][0], p.pts[0][1], 2, 0, 6.283); ctx.fill();
          p.t = (p.t + dt * p.sp) % 1;
          const seg = p.t * (p.pts.length - 1), i0 = Math.floor(seg), f = seg - i0, A = p.pts[i0], B = p.pts[Math.min(i0 + 1, p.pts.length - 1)];
          e.dot(ctx, A[0] + (B[0] - A[0]) * f, A[1] + (B[1] - A[1]) * f, 8, mixRgb(c, [255, 255, 255], 0.4), 1, 'glow');
        }
      },
    },
    /* гиперпрыжок: звёзды из центра */
    warp: {
      tex: true,
      init(s, e) { s.p = Array.from({ length: clamp(Math.round(e.w * e.h / 2500), 20, 160) }, () => ({ a: rand(0, 6.283), d: rand(0, 1), v: rand(0.15, 0.5) })); },
      frame(s, ctx, dt, e) {
        const cx = e.w / 2, cy = e.h / 2, M = Math.hypot(cx, cy); ctx.lineCap = 'round';
        for (const p of s.p) {
          p.d += dt * p.v * (0.3 + p.d); if (p.d > 1) { p.d = 0.02; p.a = rand(0, 6.283); }
          const r1 = p.d * M, r0 = Math.max(0, r1 - 6 - p.d * 26), x = cx + Math.cos(p.a) * r1, y = cy + Math.sin(p.a) * r1;
          ctx.strokeStyle = tcol(e.colorAt(x, y), p.d); ctx.lineWidth = 0.6 + p.d * 1.4; ctx.beginPath(); ctx.moveTo(cx + Math.cos(p.a) * r0, cy + Math.sin(p.a) * r0); ctx.lineTo(x, y); ctx.stroke();
        }
      },
    },
    /* лавовая лампа: мягкие пятна */
    lava: {
      tex: true,
      init(s, e) { s.b = Array.from({ length: 5 }, (_, i) => ({ x: rand(0, e.w), y: rand(0, e.h), r: rand(0.25, 0.45) * Math.max(e.w, e.h), fx: rand(0.05, 0.15), fy: rand(0.05, 0.15), ph: i * 1.3 })); },
      frame(s, ctx, dt, e) {
        for (const b of s.b) {
          const x = e.w / 2 + Math.sin(e.t * b.fx + b.ph) * e.w * 0.42, y = e.h / 2 + Math.cos(e.t * b.fy + b.ph * 1.7) * e.h * 0.42, c = e.colorAt(x, y);
          const g = ctx.createRadialGradient(x, y, 0, x, y, b.r); g.addColorStop(0, tcol(c, 0.55)); g.addColorStop(1, tcol(c, 0));
          ctx.fillStyle = g; ctx.fillRect(0, 0, e.w, e.h);
        }
      },
    },
    /* шёлк: плавные ленты */
    silk: {
      tex: true,
      init(s) { s.n = 7; },
      frame(s, ctx, dt, e) {
        ctx.lineWidth = 1;
        for (let i = 0; i < s.n; i++) {
          const t = e.t * 0.35 + i * 0.5, y = e.h * (0.15 + 0.7 * (i / (s.n - 1)));
          ctx.strokeStyle = tcol(e.colorAt(e.w * 0.5, y), 0.75); ctx.beginPath();
          ctx.moveTo(-10, y + Math.sin(t) * e.h * 0.2);
          ctx.bezierCurveTo(e.w * 0.33, y + Math.sin(t * 1.3 + 1) * e.h * 0.4, e.w * 0.66, y + Math.cos(t * 1.1 + 2) * e.h * 0.4, e.w + 10, y + Math.cos(t * 0.9) * e.h * 0.2);
          ctx.stroke();
        }
      },
    },
    /* перспективная сетка-горизонт */
    horizon: {
      tex: true,
      frame(s, ctx, dt, e) {
        const hy = e.h * 0.42, cx = e.w / 2; ctx.lineWidth = 1;
        for (let i = -12; i <= 12; i++) { ctx.strokeStyle = tcol(e.colorAt(cx + i * 30, e.h), 0.5); ctx.beginPath(); ctx.moveTo(cx + i * 6, hy); ctx.lineTo(cx + i * e.w * 0.18, e.h); ctx.stroke(); }
        const off = (e.t * 0.5) % 1;
        for (let k = 0; k < 10; k++) { const z = (k + off) / 10, y = hy + (e.h - hy) * z * z; ctx.strokeStyle = tcol(e.colorAt(cx, y), z); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(e.w, y); ctx.stroke(); }
      },
    },
    /* точечная матрица с волной */
    dotwave: {
      tex: true,
      frame(s, ctx, dt, e) {
        const g = 12 * e.o.texScale;
        for (let y = g / 2; y < e.h; y += g) for (let x = g / 2; x < e.w; x += g) {
          const k = 0.5 + 0.5 * Math.sin(x * 0.045 + y * 0.03 - e.t * 2.2), r = 0.4 + k * 1.8 * e.o.texScale;
          ctx.fillStyle = tcol(e.colorAt(x, y), 0.25 + 0.75 * k); ctx.fillRect(x - r / 2, y - r / 2, r, r);
        }
      },
    },
    /* гироскоп: вращающиеся дуги HUD */
    gyro: {
      tex: true,
      frame(s, ctx, dt, e) {
        const cx = e.w * 0.78, cy = e.h * 0.5, R = Math.min(e.w, e.h) * 0.42;
        for (let k = 0; k < 5; k++) {
          const r = R * (0.35 + k * 0.16), a0 = e.t * (k % 2 ? -0.6 : 0.45) * (1 + k * 0.2);
          ctx.strokeStyle = tcol(e.colorAt(cx, cy - r), 0.8); ctx.lineWidth = k === 2 ? 2 : 1;
          for (let j = 0; j < 3; j++) { ctx.beginPath(); ctx.arc(cx, cy, r, a0 + j * 2.094, a0 + j * 2.094 + 1.1 - k * 0.12); ctx.stroke(); }
        }
      },
    },
    /* сканер: луч с хвостом */
    scanner: {
      tex: true,
      frame(s, ctx, dt, e) {
        const cx = e.w / 2, cy = e.h / 2, R = Math.hypot(cx, cy), a = e.t * 1.2;
        for (let i = 0; i < 24; i++) { const aa = a - i * 0.025; ctx.strokeStyle = tcol(e.colorAt(cx + Math.cos(aa) * R * 0.5, cy + Math.sin(aa) * R * 0.5), (1 - i / 24) * 0.6); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(aa) * R, cy + Math.sin(aa) * R); ctx.stroke(); }
        ctx.strokeStyle = tcol(e.colorAt(cx, cy), 0.35); ctx.lineWidth = 1;
        [0.25, 0.5, 0.75].forEach((k) => { ctx.beginPath(); ctx.arc(cx, cy, R * k, 0, 6.283); ctx.stroke(); });
      },
    },
    /* морозные кристаллы растут и тают */
    frostbloom: {
      tex: true,
      init(s) { s.c = []; s.next = 0; },
      frame(s, ctx, dt, e) {
        s.next -= dt;
        if (s.next <= 0) { s.next = rand(0.4, 1.1); s.c.push({ x: rand(0, e.w), y: rand(0, e.h), a: rand(0, 1), age: 0, life: rand(4, 7), R: rand(12, 34) * e.o.texScale }); }
        ctx.lineWidth = 0.9;
        for (let i = s.c.length - 1; i >= 0; i--) {
          const q = s.c[i]; q.age += dt; if (q.age > q.life) { s.c.splice(i, 1); continue; }
          const g = Math.min(1, q.age / 1.5), fade = Math.min(1, (q.life - q.age) / 1.5), L = q.R * g;
          ctx.strokeStyle = tcol(mixRgb(e.colorAt(q.x, q.y), [255, 255, 255], 0.5), fade * 0.9); ctx.beginPath();
          for (let k = 0; k < 6; k++) {
            const an = q.a + (k * Math.PI) / 3, ex = q.x + Math.cos(an) * L, ey = q.y + Math.sin(an) * L;
            ctx.moveTo(q.x, q.y); ctx.lineTo(ex, ey);
            [0.45, 0.7].forEach((t) => { const bx = q.x + Math.cos(an) * L * t, by = q.y + Math.sin(an) * L * t, bl = L * 0.28 * (1 - t * 0.4);
              ctx.moveTo(bx, by); ctx.lineTo(bx + Math.cos(an + 0.7) * bl, by + Math.sin(an + 0.7) * bl);
              ctx.moveTo(bx, by); ctx.lineTo(bx + Math.cos(an - 0.7) * bl, by + Math.sin(an - 0.7) * bl); });
          }
          ctx.stroke();
        }
      },
    },
    /* старый экран: строки и бегущая полоса */
    crt: {
      tex: true,
      frame(s, ctx, dt, e) {
        const band = ((e.t * 40) % (e.h + 80)) - 40;
        for (let y = 0; y < e.h; y += 3) { const k = 0.25 + 0.75 * Math.max(0, 1 - Math.abs(y - band) / 40); ctx.fillStyle = tcol(e.colorAt(e.w / 2, y), k * 0.6); ctx.fillRect(0, y, e.w, 1); }
      },
    },
    /* косой лёгкий дрейф частиц */
    drift: {
      tex: true,
      init(s, e) { s.p = Array.from({ length: clamp(Math.round(e.w * e.h / 1600), 20, 220) }, () => ({ x: rand(0, e.w), y: rand(0, e.h), v: rand(10, 30), l: rand(4, 12) })); },
      frame(s, ctx, dt, e) {
        ctx.lineWidth = 1;
        for (const p of s.p) {
          p.x += p.v * dt * 0.6; p.y -= p.v * dt; if (p.y < -12) { p.y = e.h + 12; p.x = rand(-e.h * 0.6, e.w); } if (p.x > e.w + 12) p.x = -12;
          ctx.strokeStyle = tcol(e.colorAt(p.x, p.y), 0.7); ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.l * 0.5, p.y + p.l); ctx.stroke();
        }
      },
    },
    /* шевроны, бегущие вверх */
    chevrons: {
      tex: true,
      frame(s, ctx, dt, e) {
        const g = 22 * e.o.texScale, off = (e.t * 18) % g; ctx.lineWidth = 1.2;
        for (let y = e.h + g - off; y > -g; y -= g) {
          ctx.strokeStyle = tcol(e.colorAt(e.w / 2, y), 0.25 + 0.6 * (1 - y / e.h)); ctx.beginPath();
          for (let x = -g; x < e.w + g; x += g) { ctx.moveTo(x, y); ctx.lineTo(x + g / 2, y - g * 0.35); ctx.lineTo(x + g, y); }
          ctx.stroke();
        }
      },
    },
    /* клетки, которые вспыхивают по одной */
    pulsegrid: {
      tex: true,
      init(s, e) { s.g = 20 * e.o.texScale; s.on = new Map(); },
      frame(s, ctx, dt, e) {
        const g = s.g, cols = Math.ceil(e.w / g), rows = Math.ceil(e.h / g);
        if (Math.random() < dt * 9) s.on.set(`${Math.floor(rand(0, cols))},${Math.floor(rand(0, rows))}`, 1);
        ctx.strokeStyle = tcol(e.colorAt(e.w / 2, e.h / 2), 0.18); ctx.lineWidth = 1; ctx.beginPath();
        for (let x = 0; x <= e.w; x += g) { ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, e.h); }
        for (let y = 0; y <= e.h; y += g) { ctx.moveTo(0, y + 0.5); ctx.lineTo(e.w, y + 0.5); }
        ctx.stroke();
        s.on.forEach((v, k) => { const [cx, cy] = k.split(',').map(Number), nv = v - dt * 0.6; if (nv <= 0) { s.on.delete(k); return; } s.on.set(k, nv);
          ctx.fillStyle = tcol(e.colorAt(cx * g, cy * g), nv * 0.55); ctx.fillRect(cx * g + 1, cy * g + 1, g - 1, g - 1); });
      },
    },
    /* занавес-вуаль */
    veil: {
      tex: true,
      frame(s, ctx, dt, e) {
        const n = 9;
        for (let i = 0; i < n; i++) {
          const x = (e.w * (i + 0.5)) / n + Math.sin(e.t * 0.5 + i * 0.9) * e.w * 0.06, w = e.w / n * (0.6 + 0.4 * Math.sin(e.t * 0.7 + i));
          const c = e.colorAt(x, 0), g = ctx.createLinearGradient(0, 0, 0, e.h);
          g.addColorStop(0, tcol(c, 0.5 * (0.5 + 0.5 * Math.sin(e.t * 0.9 + i * 1.7)))); g.addColorStop(1, tcol(c, 0));
          ctx.fillStyle = g; ctx.fillRect(x - w / 2, 0, w, e.h);
        }
      },
    },
    /* каркасная сетка-волна */
    mesh: {
      tex: true,
      frame(s, ctx, dt, e) {
        const g = 26 * e.o.texScale, Z = (x, y) => Math.sin(x * 0.03 + e.t) * 5 + Math.cos(y * 0.04 - e.t * 0.8) * 5; ctx.lineWidth = 0.8;
        for (let y = 0; y <= e.h + g; y += g) { ctx.strokeStyle = tcol(e.colorAt(e.w / 2, y), 0.45); ctx.beginPath(); for (let x = 0; x <= e.w + g; x += g / 2) { const yy = y + Z(x, y); if (x) ctx.lineTo(x, yy); else ctx.moveTo(x, yy); } ctx.stroke(); }
        for (let x = 0; x <= e.w + g; x += g) { ctx.strokeStyle = tcol(e.colorAt(x, e.h / 2), 0.3); ctx.beginPath(); for (let y = 0; y <= e.h + g; y += g / 2) { const yy = y + Z(x, y); if (y) ctx.lineTo(x, yy); else ctx.moveTo(x, yy); } ctx.stroke(); }
      },
    },
    /* пузырьки, поднимающиеся вверх */
    fizz: {
      tex: true,
      init(s, e) { s.p = Array.from({ length: clamp(Math.round(e.w * e.h / 3000), 10, 120) }, () => ({ x: rand(0, e.w), y: rand(0, e.h), r: rand(1, 4) * e.o.texScale, v: rand(8, 26), ph: rand(0, 6.28) })); },
      frame(s, ctx, dt, e) {
        ctx.lineWidth = 0.9;
        for (const p of s.p) {
          p.y -= p.v * dt; if (p.y < -6) { p.y = e.h + 6; p.x = rand(0, e.w); }
          const x = p.x + Math.sin(e.t * 1.5 + p.ph) * 3, c = e.colorAt(x, p.y);
          ctx.strokeStyle = tcol(c, 0.75); ctx.beginPath(); ctx.arc(x, p.y, p.r, 0, 6.283); ctx.stroke();
          ctx.fillStyle = 'rgba(255,255,255,.6)'; ctx.fillRect(x - p.r * 0.45, p.y - p.r * 0.45, 0.9, 0.9);
        }
      },
    },
  };
  Object.assign(FX_IMPL, LIVE_TEX);
  CANVAS_TEXTURES.push(...Object.keys(LIVE_TEX));

  /* статичные: маски SVG/CSS */
  const S = (w, h, body) => svg(`<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>${body}</svg>`);
  Object.assign(TEXTURES, {
    scales: { img: S(20, 10, "<g fill='none' stroke='#000' stroke-width='1'><path d='M0 10A10 10 0 0 1 20 10'/><path d='M-10 5A10 10 0 0 1 10 5M10 5A10 10 0 0 1 30 5'/></g>"), size: (s) => `${20 * s}px ${10 * s}px` },
    triangles: { img: S(24, 21, "<path d='M0 21L12 0L24 21Z' fill='none' stroke='#000' stroke-width='1'/>"), size: (s) => `${24 * s}px ${21 * s}px` },
    plaid: { img: 'linear-gradient(0deg, rgba(0,0,0,.7) 0 8%, transparent 8% 50%, rgba(0,0,0,.35) 50% 70%, transparent 70%), linear-gradient(90deg, rgba(0,0,0,.7) 0 8%, transparent 8% 50%, rgba(0,0,0,.35) 50% 70%, transparent 70%)', size: (s) => `${24 * s}px ${24 * s}px` },
    bricks: { img: S(32, 16, "<path d='M0 .5H32M0 8.5H32M.5 0V8.5M16.5 8.5V16' fill='none' stroke='#000' stroke-width='1'/>"), size: (s) => `${32 * s}px ${16 * s}px` },
    starry: { img: S(60, 60, "<g fill='#000'><path d='M12 6l1 4 4 1-4 1-1 4-1-4-4-1 4-1z'/><path d='M44 30l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7z'/><path d='M22 44l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5z'/><circle cx='50' cy='8' r='.8'/><circle cx='34' cy='16' r='.6'/><circle cx='6' cy='34' r='.7'/><circle cx='54' cy='52' r='.9'/><circle cx='36' cy='54' r='.5'/></g>"), size: (s) => `${60 * s}px` },
    rings: { img: S(28, 28, "<g fill='none' stroke='#000'><circle cx='14' cy='14' r='10'/><circle cx='14' cy='14' r='3'/></g>"), size: (s) => `${28 * s}px` },
    crosshatch: { img: 'linear-gradient(45deg, transparent 46%, #000 46% 54%, transparent 54%), linear-gradient(-45deg, transparent 46%, rgba(0,0,0,.55) 46% 54%, transparent 54%)', size: (s) => `${10 * s}px ${10 * s}px` },
    terrazzo: { img: S(80, 80, "<g fill='#000'><path d='M8 10l6-3 3 5-5 4z'/><path d='M40 6l5 2-2 5-4-1z' opacity='.6'/><path d='M62 20l7 1-2 6-6-2z'/><path d='M20 40l4-4 4 3-3 5z' opacity='.7'/><path d='M50 46l6 2-1 5-6-1z'/><path d='M10 64l5-2 2 5-5 2z' opacity='.5'/><path d='M66 64l4 3-3 4-4-3z'/><path d='M34 70l3-3 3 3-3 3z' opacity='.8'/><circle cx='30' cy='22' r='1.5'/><circle cx='70' cy='40' r='1.2' opacity='.7'/><circle cx='44' cy='32' r='1'/></g>"), size: (s) => `${80 * s}px` },
    zigzag: { img: S(24, 12, "<path d='M0 9L6 3L12 9L18 3L24 9' fill='none' stroke='#000' stroke-width='1.4'/>"), size: (s) => `${24 * s}px ${12 * s}px` },
    quatrefoil: { img: S(24, 24, "<g fill='none' stroke='#000' stroke-width='.9'><circle cx='12' cy='6' r='6'/><circle cx='12' cy='18' r='6'/><circle cx='6' cy='12' r='6'/><circle cx='18' cy='12' r='6'/></g>"), size: (s) => `${24 * s}px` },
  });
  TEXTURE_KEYS.length = 0;
  TEXTURE_KEYS.push('none', ...Object.keys(TEXTURES), ...CANVAS_TEXTURES);
  deepMerge(I18N, {
    ru: {
      texture: {
        liquid: 'Жидкость (живая)', sonar: 'Сонар (живая)', droplets: 'Капли на стекле (живая)', glowworms: 'Светлячки (живая)', stardust: 'Звёздная пыль (живая)',
        hexpulse: 'Пульсирующие соты (живая)', traces: 'Дорожки платы (живая)', warp: 'Гиперпрыжок (живая)', lava: 'Лавовая лампа (живая)', silk: 'Шёлк (живая)',
        horizon: 'Неоновый горизонт (живая)', dotwave: 'Точечная волна (живая)', gyro: 'Гироскоп HUD (живая)', scanner: 'Сканер (живая)', frostbloom: 'Морозные кристаллы (живая)',
        crt: 'Старый экран (живая)', drift: 'Дрейф (живая)', chevrons: 'Шевроны (живая)', pulsegrid: 'Мигающая сетка (живая)', veil: 'Вуаль (живая)', mesh: 'Каркасная волна (живая)', fizz: 'Пузырьки (живая)',
        scales: 'Чешуя', triangles: 'Треугольники', plaid: 'Клетка', bricks: 'Кирпич', starry: 'Звёздочки', rings: 'Кольца', crosshatch: 'Штриховка', terrazzo: 'Терраццо', zigzag: 'Зигзаг', quatrefoil: 'Цветочный узор',
      },
    },
    en: {
      texture: {
        liquid: 'Liquid (live)', sonar: 'Sonar (live)', droplets: 'Droplets on glass (live)', glowworms: 'Glowworms (live)', stardust: 'Stardust (live)',
        hexpulse: 'Pulsing hex (live)', traces: 'Circuit traces (live)', warp: 'Warp (live)', lava: 'Lava lamp (live)', silk: 'Silk (live)',
        horizon: 'Neon horizon (live)', dotwave: 'Dot wave (live)', gyro: 'Gyro HUD (live)', scanner: 'Scanner (live)', frostbloom: 'Frost bloom (live)',
        crt: 'Old screen (live)', drift: 'Drift (live)', chevrons: 'Chevrons (live)', pulsegrid: 'Blinking grid (live)', veil: 'Veil (live)', mesh: 'Wire wave (live)', fizz: 'Bubbles (live)',
        scales: 'Scales', triangles: 'Triangles', plaid: 'Plaid', bricks: 'Bricks', starry: 'Little stars', rings: 'Rings', crosshatch: 'Crosshatch', terrazzo: 'Terrazzo', zigzag: 'Zigzag', quatrefoil: 'Quatrefoil',
      },
    },
  });
  /* ═════════════════════════ НАТИВНЫЙ КОНСТРУКТОР КАРТОЧЕК ═════════════════════════ */
  const TOGGLE_DOMAINS = new Set(['light', 'switch', 'fan', 'input_boolean', 'media_player', 'cover', 'automation', 'siren', 'humidifier', 'remote']);
  const dom = (id) => String(id || '').split('.')[0];
  const STATE_TXT = {
    ru: { on: 'Включено', off: 'Выключено', unavailable: 'Недоступно', unknown: 'Неизвестно', playing: 'Играет', paused: 'Пауза', idle: 'Бездействие', standby: 'Ожидание', home: 'Дома', not_home: 'Не дома', open: 'Открыто', closed: 'Закрыто', opening: 'Открывается', closing: 'Закрывается', locked: 'Заперто', unlocked: 'Не заперто', heat: 'Обогрев', cool: 'Охлаждение', auto: 'Авто', dry: 'Осушение', heat_cool: 'Обогрев/охлаждение', armed_home: 'Охрана (дома)', armed_away: 'Охрана', disarmed: 'Снято с охраны', triggered: 'Тревога', cleaning: 'Уборка', docked: 'На базе' },
    zh: { on: '开', off: '关', unavailable: '不可用', unknown: '未知', playing: '播放中', paused: '已暂停', idle: '空闲', standby: '待机', home: '在家', not_home: '离家', open: '打开', closed: '关闭', opening: '正在打开', closing: '正在关闭', locked: '已上锁', unlocked: '未上锁', heat: '制热', cool: '制冷', auto: '自动', dry: '除湿', heat_cool: '制热/制冷', armed_home: '在家布防', armed_away: '离家布防', disarmed: '已撤防', triggered: '已触发', cleaning: '清扫中', docked: '已回充' },
    ja: { on: 'オン', off: 'オフ', unavailable: '利用不可', unknown: '不明', playing: '再生中', paused: '一時停止', idle: 'アイドル', standby: 'スタンバイ', home: '在宅', not_home: '外出', open: '開', closed: '閉', opening: '開いています', closing: '閉じています', locked: '施錠', unlocked: '解錠', heat: '暖房', cool: '冷房', auto: '自動', dry: '除湿', heat_cool: '冷暖房', armed_home: '在宅警戒', armed_away: '外出警戒', disarmed: '警戒解除', triggered: '発報', cleaning: '掃除中', docked: 'ドック' },
    en: { on: 'On', off: 'Off', unavailable: 'Unavailable', unknown: 'Unknown', playing: 'Playing', paused: 'Paused', idle: 'Idle', standby: 'Standby', home: 'Home', not_home: 'Away', open: 'Open', closed: 'Closed', opening: 'Opening', closing: 'Closing', locked: 'Locked', unlocked: 'Unlocked', heat: 'Heat', cool: 'Cool', auto: 'Auto', dry: 'Dry', heat_cool: 'Heat/Cool', armed_home: 'Armed home', armed_away: 'Armed away', disarmed: 'Disarmed', triggered: 'Triggered', cleaning: 'Cleaning', docked: 'Docked' },
  };
  const DOMAIN_EMOJI = { light: '💡', switch: '🔌', fan: '🌀', media_player: '📺', climate: '🌡️', sensor: '📈', binary_sensor: '🔘', cover: '🪟', lock: '🔒', camera: '📷', person: '🙂', weather: '⛅', vacuum: '🧹', input_boolean: '🔘', alarm_control_panel: '🛡️', script: '📜', scene: '🎬', automation: '🤖', water_heater: '♨️', humidifier: '💧' };
  const MDI_EMOJI = { 'mdi:power': '⏻', 'mdi:lightbulb': '💡', 'mdi:television': '📺', 'mdi:play': '▶', 'mdi:pause': '⏸', 'mdi:play-pause': '⏯', 'mdi:skip-next': '⏭', 'mdi:skip-previous': '⏮', 'mdi:volume-high': '🔊', 'mdi:thermometer': '🌡️', 'mdi:sofa': '🛋️', 'mdi:home': '🏠', 'mdi:fire': '🔥', 'mdi:fan': '🌀', 'mdi:gesture-tap': '👆', 'mdi:lock': '🔒', 'mdi:music': '🎵', 'mdi:lamp': '🪔', 'mdi:bed': '🛏️', 'mdi:water': '💧' };

  const fireEv = (node, type, detail) => node.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
  /** Родные действия HA: toggle, more-info, navigate, url, perform-action, fire-dom-event */
  const runAction = (node, hass, a, entity) => {
    if (!a || a.action === 'none') return;
    const eid = a.entity || entity;
    const act = !a.action || a.action === 'auto' ? (eid && TOGGLE_DOMAINS.has(dom(eid)) ? 'toggle' : eid ? 'more-info' : 'none') : a.action;
    try {
      if (act === 'toggle' && eid && hass && hass.callService) hass.callService('homeassistant', 'toggle', { entity_id: eid });
      else if (act === 'more-info' && eid) fireEv(node, 'hass-more-info', { entityId: eid });
      else if (act === 'navigate' && a.navigation_path) { history.pushState(null, '', a.navigation_path); window.dispatchEvent(new CustomEvent('location-changed', { detail: { replace: false } })); }
      else if (act === 'url' && a.url_path) window.open(a.url_path, a.new_tab === false ? '_self' : '_blank', 'noopener');
      else if ((act === 'perform-action' || act === 'call-service') && hass && hass.callService) {
        const [d, s] = String(a.perform_action || a.service || '').split('.');
        if (d && s) hass.callService(d, s, a.data || a.service_data || {}, a.target);
      } else if (act === 'fire-dom-event') fireEv(node, 'll-custom', a);
    } catch (err) { console.warn('[antarikfox-glass] action', err); }
  };

  /** Что умеет ползунок для каждого типа устройства */
  const sliderSpec = (so) => {
    const none = { ok: false, min: 0, max: 100, step: 1, value: 0, unit: '' };
    if (!so) return none;
    const a = so.attributes || {}, on = !INACTIVE.has(so.state);
    switch (dom(so.entity_id)) {
      case 'light': return { ok: true, min: 0, max: 100, step: 1, unit: '%', value: on ? Math.round((a.brightness || 0) / 2.55) : 0, call: (v) => (v > 0 ? ['light', 'turn_on', { brightness_pct: v }] : ['light', 'turn_off', {}]) };
      case 'media_player': return { ok: true, min: 0, max: 100, step: 1, unit: '%', value: Math.round((a.volume_level || 0) * 100), call: (v) => ['media_player', 'volume_set', { volume_level: v / 100 }] };
      case 'cover': return { ok: true, min: 0, max: 100, step: 1, unit: '%', value: a.current_position ?? 0, call: (v) => ['cover', 'set_cover_position', { position: v }] };
      case 'fan': return { ok: true, min: 0, max: 100, step: a.percentage_step || 1, unit: '%', value: a.percentage ?? 0, call: (v) => ['fan', 'set_percentage', { percentage: v }] };
      case 'input_number': case 'number': return { ok: true, min: a.min ?? 0, max: a.max ?? 100, step: a.step ?? 1, unit: a.unit_of_measurement || '', value: parseFloat(so.state) || 0, call: (v) => [dom(so.entity_id), 'set_value', { value: v }] };
      case 'climate': return { ok: true, min: a.min_temp ?? 7, max: a.max_temp ?? 35, step: a.target_temp_step || 0.5, unit: '°', value: a.temperature ?? 20, call: (v) => ['climate', 'set_temperature', { temperature: v }] };
      default: return none;
    }
  };

  class NativeRenderer {
    constructor(shell, root) { this.shell = shell; this.root = root; this.ups = []; this.key = ''; this.last = {}; this.jobs = []; this.running = false; }
    /** Периодические задачи предметов (камера, условия по времени): останавливаются, когда карточка не на экране */
    every(ms, fn) { const j = { ms, fn, id: 0 }; this.jobs.push(j); if (this.running) j.id = setInterval(fn, ms); }
    start() { if (this.running) return; this.running = true; this.jobs.forEach((j) => { j.id = setInterval(j.fn, j.ms); }); }
    stop() { this.running = false; this.jobs.forEach((j) => clearInterval(j.id)); }
    /** Условие показа: формат HA (condition: state | numeric_state | screen) и короткий (entity/state/above/below/time) */
    check(x) {
      if (!x || typeof x !== 'object') return true;
      if (x.condition === 'screen') return !x.media_query || matchMedia(x.media_query).matches;
      if (x.condition === 'and') return (x.conditions || []).every((y) => this.check(y));
      if (x.condition === 'or') return (x.conditions || []).some((y) => this.check(y));
      if (x.time && !inSchedule(x.time)) return false;
      if (!x.entity) return true;
      const so = this.so(x.entity);
      if (!so) return false;
      const v = x.attribute ? so.attributes[x.attribute] : so.state;
      if (!isNil(x.state) && ![].concat(x.state).map(String).includes(String(v))) return false;
      if (!isNil(x.state_not) && [].concat(x.state_not).map(String).includes(String(v))) return false;
      const n = parseFloat(v);
      if (!isNil(x.above) && !(n > Number(x.above))) return false;
      if (!isNil(x.below) && !(n < Number(x.below))) return false;
      return true;
    }
    confirm(text) {
      return new Promise((res) => {
        const glass = this.shell._glass;
        if (!glass) { res(true); return; }
        const ov = el('div', 'nb-confirm', { role: 'alertdialog', 'aria-modal': 'true' });
        const box = el('div', 'box');
        const yes = el('button', 'nb-btn', { type: 'button', text: tr(this.lang, 'ui', 'yes') });
        const no = el('button', 'nb-btn st-ghost', { type: 'button', text: tr(this.lang, 'ui', 'cancel') });
        const row = el('div', 'nb-btns'); row.append(no, yes);
        box.append(el('div', 'q', { text: text }), row);
        ov.appendChild(box); glass.appendChild(ov);
        const done = (v) => (e) => { if (e) e.stopPropagation(); ov.remove(); res(v); };
        yes.addEventListener('click', done(true)); no.addEventListener('click', done(false));
        ov.addEventListener('click', (e) => { if (e.target === ov) done(false)(e); });
        ov.addEventListener('keydown', (e) => { if (e.key === 'Escape') done(false)(e); });
        setTimeout(() => yes.focus(), 30);
      });
    }
    async run(node, a, entity, title) {
      if (a && a.confirmation) {
        let eid = a.entity || entity || (a.data && a.data.entity_id) || (a.target && a.target.entity_id);
        if (Array.isArray(eid)) eid = eid[0];
        const so = this.so(eid);
        const what = title || (a.action === 'perform-action' ? (a.perform_action || a.service || '') : tr(this.lang, 'act', a.action || 'auto'));
        const txt = (typeof a.confirmation === 'object' && a.confirmation.text)
          || tr(this.lang, 'ui', 'confirmQ').replace('%s', what).replace('%n', so ? ` — ${this.name(so)}` : '');
        if (!(await this.confirm(txt))) return;
      }
      runAction(node, this.hass(), a, entity);
    }
    hass() { return this.shell._hass; }
    get lang() { return detectLang(this.hass()); }
    so(id) {
      const h = this.hass(), st = id && h && h.states ? h.states[id] : null;
      return st && !st.entity_id ? { ...st, entity_id: id } : st;
    }
    name(so) { return (so.attributes && so.attributes.friendly_name) || so.entity_id; }
    active(so) { return !!so && !INACTIVE.has(so.state); }
    stateText(so) {
      const h = this.hass();
      if (h && typeof h.formatEntityState === 'function') { try { return h.formatEntityState(so); } catch (e) { /* старый HA */ } }
      const u = so.attributes && so.attributes.unit_of_measurement;
      const t = (STATE_TXT[this.lang] || STATE_TXT.en)[so.state];
      return t || `${so.state}${u ? ` ${u}` : ''}`;
    }
    t(k) { return (STATE_TXT[this.lang] || STATE_TXT.en)[k] || k; }
    tpl(s) {
      if (typeof s !== 'string') return s ?? '';
      return s.replace(/\{(state|name|attr|unit):([a-z_]+\.[a-z0-9_]+)(?::([a-z0-9_]+))?\}/g, (m, kind, id, attr) => {
        const so = this.so(id);
        if (!so) return '—';
        if (kind === 'name') return this.name(so);
        if (kind === 'unit') return so.attributes.unit_of_measurement || '';
        if (kind === 'attr') return String(so.attributes[attr] ?? '');
        return this.stateText(so);
      });
    }
    call(d, s, data) { const h = this.hass(); if (h && h.callService) { try { h.callService(d, s, data); } catch (e) { console.warn(e); } } }
    up(fn) { this.ups.push(fn); }
    icon(holder, icon0, so) {
      let icon = normIcon(icon0);
      if (icon && !/^[a-z]+:/.test(icon) && [...icon].length > 4) icon = null;
      const key = `${icon || ''}|${icon ? '' : (so ? so.entity_id : '')}`;
      if (holder._k !== key) {
        holder._k = key; holder.textContent = '';
        let n;
        if (icon && customElements.get('ha-icon') && /^[a-z]+:/.test(icon)) { n = document.createElement('ha-icon'); n.setAttribute('icon', icon); n.icon = icon; }
        else if (!icon && so && customElements.get('ha-state-icon')) { n = document.createElement('ha-state-icon'); }
        else n = el('span', 'emo', { text: MDI_EMOJI[icon] || (icon && !/^[a-z]+:/.test(icon) ? icon : DOMAIN_EMOJI[dom(so && so.entity_id)] || '●') });
        holder.appendChild(n); holder._n = n;
      }
      if (holder._n && holder._n.localName === 'ha-state-icon') { holder._n.hass = this.hass(); holder._n.stateObj = so; }
    }
    act(node, b, entity, def, onTap) {
      node.tabIndex = 0;
      if (!node.getAttribute('role')) node.setAttribute('role', 'button');
      node.classList.add('nb-act');
      node.addEventListener('click', (e) => {
        if (node._held) { node._held = false; return; }
        e.stopPropagation();
        if (onTap) onTap(b.tap_action || { action: def });
        this.run(node, b.tap_action || { action: def }, entity, b.name);
      });
      node.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); node.click(); } });
      if (b.hold_action) {
        node.addEventListener('pointerdown', () => { clearTimeout(node._ht); node._held = false; node._ht = setTimeout(() => { node._held = true; this.run(node, b.hold_action, entity, b.name); }, 550); });
        ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => node.addEventListener(ev, () => clearTimeout(node._ht)));
      }
    }
    ids(blocks = (this.content && this.content.blocks) || [], out = new Set()) {
      for (const b of blocks || []) {
        if (!b || typeof b !== 'object') continue;
        if (b.entity) out.add(b.entity);
        (b.entities || []).forEach((x) => out.add(typeof x === 'string' ? x : x && x.entity));
        (b.items || []).forEach((x) => x && x.entity && out.add(x.entity));
        if (b.blocks) this.ids(b.blocks, out);
        [].concat(b.show_if || b.visibility || []).forEach((x) => { if (x && x.entity) out.add(x.entity); (x && x.conditions || []).forEach((y) => y && y.entity && out.add(y.entity)); });
        [b.text, b.subtitle, b.name, b.image].forEach((s) => { if (typeof s === 'string') (s.match(/[a-z_]+\.[a-z0-9_]+(?=[}:])/g) || []).forEach((id) => out.add(id)); });
      }
      out.delete(undefined); out.delete(null);
      return out;
    }
    set(content) {
      const key = JSON.stringify(content || null);
      if (key === this.key) return;
      this.key = key; this.content = content; this._ids = [...this.ids()];
      this.build();
    }
    changed(h) {
      if (!h || !h.states || !this._ids) return false;
      let ch = false;
      for (const id of this._ids) { const s = h.states[id]; if (s !== this.last[id]) { this.last[id] = s; ch = true; } }
      return ch;
    }
    build() {
      this.root.textContent = ''; this.ups = [];
      this.jobs.forEach((j) => clearInterval(j.id)); this.jobs = [];
      const c = this.content;
      if (!c || !Array.isArray(c.blocks)) return;
      this.root.style.setProperty('--afx-npad', px(num(c.padding, 16)));
      this.root.classList.toggle('pad0', num(c.padding, 16) === 0);
      this.root.style.setProperty('--afx-ngap', px(num(c.gap, 12)));
      c.blocks.forEach((b) => this.root.appendChild(this.block(b)));
      if (this.shell.isConnected) this.start();
      this.update();
    }
    update() { for (const fn of this.ups) { try { fn(this.hass()); } catch (e) { console.warn('[antarikfox-glass] block', e); } } }
    block(b) {
      if (!b || typeof b !== 'object') return el('div');
      const fn = NB[b.type];
      if (!fn) return el('div', 'nb-unk', { text: `? ${b.type}` });
      const node = fn(this, b);
      if (b.color) node.style.setProperty('--nb-accent', String(b.color));
      const cond = b.show_if || b.visibility;
      if (cond) {
        const list = [].concat(cond);
        const apply = () => { node.style.display = list.every((x) => this.check(x)) ? '' : 'none'; };
        this.up(apply);
        if (list.some((x) => x && (x.time || x.condition === 'screen'))) this.every(30000, apply);
      }
      return node;
    }
  }

  const NB = {
    title(r, b) {
      const w = el('div', `nb-title al-${b.align || 'left'} sz-${b.size || 'm'}`);
      const ic = b.icon || b.entity ? el('div', 'nb-ic') : null;
      if (ic) w.appendChild(ic);
      const tx = el('div', 'tx'), t = el('div', 't'), s = el('div', 's');
      tx.append(t, s); w.appendChild(tx);
      r.up(() => {
        const so = r.so(b.entity);
        t.textContent = r.tpl(b.text ?? (so ? r.name(so) : ''));
        s.textContent = b.subtitle !== undefined ? r.tpl(b.subtitle) : so ? r.stateText(so) : '';
        s.hidden = !s.textContent;
        if (ic) { r.icon(ic, b.icon, so); ic.classList.toggle('on', r.active(so)); }
      });
      if (b.entity || b.tap_action) r.act(w, b, b.entity, 'more-info');
      return w;
    },
    image(r, b) {
      const w = el('div', `nb-img${b.off_filter ? ' dimoff' : ''}${b.on_glow ? ' onglow' : ''}`);
      const hMode = b.height === 'auto' ? 'auto' : b.height === 'fill' ? 'fill' : 'fixed';
      if (hMode === 'fixed') w.style.height = px(num(b.height, 180));
      else if (hMode === 'fill') { w.style.flex = '1 1 auto'; w.style.minHeight = '80px'; }
      else w.style.aspectRatio = '4 / 3';
      w.style.setProperty('--fit', b.fit || 'cover');
      if (b.position) w.style.setProperty('--pos', b.position);
      const A = el('img'), B = el('img'), glowEl = el('i', 'glowov');
      [A, B].forEach((x) => {
        x.decoding = 'async'; x.draggable = false;
        x.addEventListener('load', () => { if (hMode === 'auto' && x.naturalWidth && x.style.opacity !== '0') w.style.aspectRatio = `${x.naturalWidth} / ${x.naturalHeight}`; });
      });
      B.style.opacity = '0';
      w.append(A, B, glowEl);
      /* заранее подгружаем все фото состояний: переключение без задержки */
      [b.image, ...Object.values(b.state_images || {})].filter((u) => typeof u === 'string' && u && !u.includes('{')).forEach((u) => { const im = new Image(); im.decoding = 'async'; im.src = u; });
      let front = A, back = B, cur = null, opt = null, optBase = null, optUntil = 0;
      const pick = (so, st) => {
        const si = b.state_images || {};
        let src = b.image || '';
        if (so) {
          const bySt = si[st] ?? si[INACTIVE.has(st) ? 'off' : 'on'];
          if (!isNil(bySt) && bySt !== '') src = bySt;
          else if (b.use_entity_picture && so.attributes.entity_picture) src = so.attributes.entity_picture;
        }
        return r.tpl(String(src || ''));
      };
      r.up(() => {
        const so = r.so(b.entity);
        let st = so ? so.state : '';
        if (opt !== null) { if (so && so.state === optBase && Date.now() < optUntil) st = opt; else opt = null; }
        const on = !!so && !INACTIVE.has(st);
        w.classList.toggle('off', !!so && !on); w.classList.toggle('on', on);
        const alt = b.alt || (so ? r.name(so) : '');
        [A, B].forEach((x) => { x.alt = alt; });
        const src = pick(so, st);
        if (src === cur) return;
        const first = cur === null;
        cur = src;
        w.classList.toggle('empty', !src);
        if (!src) { [front, back].forEach((x) => { x.removeAttribute('src'); x.style.visibility = 'hidden'; }); return; }
        front.style.visibility = ''; back.style.visibility = '';
        if (first || !front.getAttribute('src')) { front.src = src; front.style.opacity = '1'; back.style.opacity = '0'; return; }
        const f = front, bk = back;
        bk.onload = () => { bk.style.opacity = '1'; f.style.opacity = '0'; front = bk; back = f; if (hMode === 'auto' && bk.naturalWidth) w.style.aspectRatio = `${bk.naturalWidth} / ${bk.naturalHeight}`; };
        bk.onerror = () => { f.src = src; };
        bk.src = src;
      });
      /* мгновенная смена фото при нажатии, не дожидаясь ответа устройства */
      r.act(w, b, b.entity, 'auto', (a) => {
        const so = r.so(b.entity);
        if (!so || (a && a.confirmation)) return;
        const act = (a && a.action) || 'auto';
        if (!(act === 'toggle' || (act === 'auto' && TOGGLE_DOMAINS.has(dom(b.entity))))) return;
        optBase = so.state; opt = INACTIVE.has(so.state) ? 'on' : 'off'; optUntil = Date.now() + 4000;
        r.update();
        setTimeout(() => r.update(), 4100);
      });
      return w;
    },
    entity(r, b) {
      const w = el('div', 'nb-ent'), ic = el('div', 'nb-ic'), tx = el('div', 'tx'), n = el('div', 'n'), s = el('div', 's');
      tx.append(n, s); w.append(ic, tx);
      let sw = null;
      if (b.toggle !== false && b.entity && TOGGLE_DOMAINS.has(dom(b.entity))) {
        sw = el('button', 'nb-sw', { type: 'button', role: 'switch', 'aria-label': b.name || b.entity });
        sw.appendChild(el('i'));
        sw.addEventListener('click', (e) => { e.stopPropagation(); r.run(sw, { action: 'toggle', confirmation: b.tap_action && b.tap_action.confirmation }, b.entity); });
        w.appendChild(sw);
      }
      r.up(() => {
        const so = r.so(b.entity), on = r.active(so);
        n.textContent = r.tpl(b.name ?? (so ? r.name(so) : b.entity || '—'));
        s.textContent = so ? (b.secondary !== undefined ? r.tpl(b.secondary) : r.stateText(so)) : r.t('unavailable');
        r.icon(ic, b.icon, so); ic.classList.toggle('on', on);
        if (sw) sw.setAttribute('aria-checked', String(on));
      });
      r.act(w, b, b.entity, 'more-info');
      return w;
    },
    value(r, b) {
      const w = el('div', `nb-val sz-${b.size || 'l'} al-${b.align || 'left'}`), lb = el('div', 'lbl'), v = el('div', 'v'), nv = el('span'), u = el('small');
      v.append(nv, u); w.append(lb, v);
      let pts = [], gsvg = null, area = null, line = null, loaded = false;
      const hours = num(b.hours, 24);
      if (b.graph) {
        const uid = `g${Math.random().toString(36).slice(2, 8)}`;
        const gw = el('div', 'nb-graph');
        gw.innerHTML = `<svg viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--nb-accent,var(--afx-mid));stop-opacity:.45"/><stop offset="1" style="stop-color:var(--nb-accent,var(--afx-mid));stop-opacity:0"/></linearGradient></defs><path class="a" fill="url(#${uid})"/><path class="l" fill="none" vector-effect="non-scaling-stroke"/></svg>`;
        gsvg = gw.firstChild; area = gsvg.querySelector('.a'); line = gsvg.querySelector('.l');
        w.appendChild(gw);
      }
      const draw = () => {
        if (!gsvg) return;
        const now = Date.now(), from = now - hours * 3600e3;
        pts = pts.filter((p) => p[0] >= from - 3600e3);
        const vis = pts.filter((p) => p[0] >= from);
        const use = vis.length ? [pts.filter((p) => p[0] < from).slice(-1)[0], ...vis].filter(Boolean) : pts.slice(-1);
        if (use.length < 2) { area.setAttribute('d', ''); line.setAttribute('d', ''); return; }
        const ys = use.map((p) => p[1]), lo = Math.min(...ys), hi = Math.max(...ys), span = hi - lo || 1;
        const X = (t) => clamp(((t - from) / (now - from)) * 100, 0, 100), Y = (v) => 28 - ((v - lo) / span) * 25;
        let d = '';
        use.forEach((p, i) => { d += `${i ? 'L' : 'M'}${X(p[0]).toFixed(2)} ${Y(p[1]).toFixed(2)} `; });
        d += `L100 ${Y(use[use.length - 1][1]).toFixed(2)}`;
        line.setAttribute('d', d); area.setAttribute('d', `${d} L100 30 L${X(use[0][0]).toFixed(2)} 30 Z`);
      };
      const loadHistory = () => {
        const h = r.hass();
        if (loaded || !b.graph || !b.entity || !h || typeof h.callWS !== 'function') return;
        loaded = true;
        h.callWS({ type: 'history/history_during_period', start_time: new Date(Date.now() - hours * 3600e3).toISOString(), entity_ids: [b.entity], minimal_response: true, no_attributes: true, significant_changes_only: false })
          .then((res) => {
            const arr = (res && res[b.entity]) || [];
            const hist = arr.map((p) => [p.lu ? p.lu * 1000 : Date.parse(p.last_updated || p.last_changed), parseFloat(p.s ?? p.state)]).filter((p) => !isNaN(p[0]) && !isNaN(p[1]));
            pts = [...hist, ...pts].sort((a, c) => a[0] - c[0]);
            draw();
          }).catch(() => { loaded = false; });
      };
      if (b.graph) r.every(60000, draw);
      r.up(() => {
        const so = r.so(b.entity), x = so ? parseFloat(so.state) : NaN;
        if (b.graph) { loadHistory(); if (!isNaN(x) && (!pts.length || pts[pts.length - 1][1] !== x)) pts.push([Date.now(), x]); draw(); }
        lb.textContent = r.tpl(b.name ?? (so ? r.name(so) : '')); lb.hidden = !lb.textContent;
        nv.textContent = isNaN(x) ? (so ? r.stateText(so) : '—') : x.toLocaleString(r.lang, { maximumFractionDigits: num(b.decimals, 1), minimumFractionDigits: isNil(b.decimals) ? 0 : num(b.decimals, 0) });
        u.textContent = isNaN(x) ? '' : (b.unit ?? (so && so.attributes.unit_of_measurement) ?? '');
      });
      r.act(w, b, b.entity, 'more-info');
      return w;
    },
    button(r, b) {
      const w = el('button', `nb-btn st-${b.style || 'solid'}`, { type: 'button' }), ic = el('span', 'nb-bi'), lb = el('span', 'bl');
      w.append(ic, lb);
      r.up(() => {
        const so = r.so(b.entity);
        lb.textContent = r.tpl(b.name ?? ''); lb.hidden = !lb.textContent;
        r.icon(ic, b.icon || (so ? null : 'mdi:gesture-tap'), so);
        w.classList.toggle('on', r.active(so));
      });
      r.act(w, b, b.entity, 'auto');
      return w;
    },
    buttons(r, b) { const w = el('div', 'nb-btns'); (b.items || []).forEach((it) => w.appendChild(NB.button(r, { ...it, style: it.style || b.style || 'ghost' }))); return w; },
    slider(r, b) {
      const w = el('div', 'nb-sl'), top = el('div', 'top'), n = el('span', 'n'), v = el('span', 'v');
      const inp = el('input', '', { type: 'range', 'aria-label': b.name || b.entity || 'slider' });
      top.append(n, v); w.append(top, inp);
      let drag = false, sp = sliderSpec(null);
      const paint = () => {
        const k = sp.max > sp.min ? ((Number(inp.value) - sp.min) / (sp.max - sp.min)) * 100 : 0;
        inp.style.setProperty('--v', `${k}%`);
        v.textContent = `${Number(inp.value).toLocaleString(r.lang, { maximumFractionDigits: 1 })}${sp.unit}`;
      };
      inp.addEventListener('pointerdown', (e) => { e.stopPropagation(); drag = true; });
      inp.addEventListener('input', paint);
      inp.addEventListener('change', () => {
        drag = false;
        const so = r.so(b.entity);
        if (!so || !sp.ok) return;
        const [d, s, data] = sp.call(Number(inp.value));
        r.call(d, s, { entity_id: so.entity_id, ...data });
      });
      r.up(() => {
        const so = r.so(b.entity);
        sp = sliderSpec(so);
        n.textContent = r.tpl(b.name ?? (so ? r.name(so) : '')); n.hidden = !n.textContent;
        inp.min = sp.min; inp.max = sp.max; inp.step = sp.step; inp.disabled = !sp.ok;
        w.style.display = so && !sp.ok ? 'none' : '';
        if (!drag) inp.value = sp.value;
        v.hidden = b.show_value === false;
        paint();
      });
      return w;
    },
    progress(r, b) {
      const w = el('div', 'nb-prog'), top = el('div', 'top'), n = el('span', 'n'), v = el('span', 'v'), bar = el('div', 'bar'), fill = el('i');
      bar.appendChild(fill); top.append(n, v); w.append(top, bar);
      r.up(() => {
        const so = r.so(b.entity), x = so ? parseFloat(so.state) : NaN, lo = num(b.min, 0), hi = num(b.max, 100);
        n.textContent = r.tpl(b.name ?? (so ? r.name(so) : '')); n.hidden = !n.textContent;
        v.textContent = so ? r.stateText(so) : '—';
        fill.style.width = `${isNaN(x) ? 0 : clamp((x - lo) / ((hi - lo) || 1), 0, 1) * 100}%`;
      });
      r.act(w, b, b.entity, 'more-info');
      return w;
    },
    media(r, b) {
      const w = el('div', 'nb-media'), art = el('div', 'art'), tx = el('div', 'tx'), t = el('div', 'n'), s = el('div', 's'), ctl = el('div', 'ctl');
      tx.append(t, s); w.append(art, tx, ctl);
      const btn = (icon, svc, label) => {
        const x = el('button', 'nb-btn st-round', { type: 'button', 'aria-label': label });
        const i = el('span', 'nb-bi'); x.appendChild(i); r.icon(i, icon, null);
        x.addEventListener('click', (e) => { e.stopPropagation(); r.call('media_player', svc, { entity_id: b.entity }); });
        ctl.appendChild(x); return x;
      };
      btn('mdi:skip-previous', 'media_previous_track', 'previous');
      const pp = btn('mdi:play-pause', 'media_play_pause', 'play/pause');
      btn('mdi:skip-next', 'media_next_track', 'next');
      r.up(() => {
        const so = r.so(b.entity), a = (so && so.attributes) || {};
        t.textContent = a.media_title || (so ? r.name(so) : '—');
        s.textContent = a.media_artist || (so ? r.stateText(so) : '');
        art.style.backgroundImage = a.entity_picture ? `url(${JSON.stringify(a.entity_picture)})` : '';
        art.classList.toggle('noart', !a.entity_picture);
        pp.classList.toggle('on', !!so && so.state === 'playing');
      });
      r.act(art, b, b.entity, 'more-info');
      return w;
    },
    chips(r, b) {
      const w = el('div', 'nb-chips');
      (b.entities || []).forEach((x) => {
        const e = typeof x === 'string' ? { entity: x } : x || {};
        const c = el('div', 'chip'), ic = el('span', 'nb-bi'), tx = el('span');
        c.append(ic, tx); w.appendChild(c);
        r.up(() => { const so = r.so(e.entity); r.icon(ic, e.icon, so); tx.textContent = so ? r.stateText(so) : '—'; c.classList.toggle('on', r.active(so)); });
        r.act(c, e, e.entity, 'more-info');
      });
      return w;
    },
    text(r, b) {
      const w = el('div', `nb-text sz-${b.size || 'm'} al-${b.align || 'left'}`);
      r.up(() => { w.textContent = r.tpl(b.text || ''); });
      if (b.tap_action) r.act(w, b, b.entity, 'none');
      return w;
    },
    camera(r, b) {
      const w = el('div', 'nb-img nb-cam');
      w.style.height = px(num(b.height, 200));
      w.style.setProperty('--fit', b.fit || 'cover');
      const img = el('img', '', { alt: '' });
      const badge = el('span', 'live', { text: '● LIVE' });
      w.append(img, badge);
      let stream = null, last = 0;
      const refresh = num(b.refresh, 10) * 1000;
      const snap = (force) => {
        const so = r.so(b.entity), pic = so && so.attributes.entity_picture;
        if (!pic || (!force && Date.now() - last < refresh - 100)) return;
        last = Date.now();
        img.src = /^data:/.test(pic) ? pic : `${pic}${pic.includes('?') ? '&' : '?'}_t=${last}`;
      };
      r.up(() => {
        const so = r.so(b.entity);
        w.classList.toggle('empty', !so);
        if (!so) return;
        if ((b.mode || 'auto') !== 'snapshot' && customElements.get('ha-camera-stream')) {
          if (!stream) { stream = document.createElement('ha-camera-stream'); stream.muted = true; stream.controls = false; img.remove(); w.insertBefore(stream, badge); }
          stream.hass = r.hass(); stream.stateObj = so;
          badge.hidden = false;
          return;
        }
        badge.hidden = true;
        snap(false);
      });
      r.every(Math.max(2000, refresh), () => { if (!stream) snap(true); });
      r.act(w, b, b.entity, 'more-info');
      return w;
    },
    select(r, b) {
      const w = el('div', 'nb-sel');
      const lb = el('div', 'lbl'), btn = el('button', 'nb-btn st-ghost', { type: 'button', 'aria-haspopup': 'listbox', 'aria-expanded': 'false' });
      const cur = el('span', 'cur'), chev = el('span', 'chev', { text: '▾' });
      btn.append(cur, chev);
      const list = el('div', 'list', { role: 'listbox' });
      w.append(lb, btn, list);
      const spec = (so) => {
        if (!so) return null;
        const a = so.attributes || {}, d = dom(so.entity_id);
        if (d === 'input_select' || d === 'select') return { opts: a.options || [], cur: so.state, call: (o) => [d, 'select_option', { option: o }] };
        if (d === 'media_player') return { opts: a.source_list || [], cur: a.source, call: (o) => ['media_player', 'select_source', { source: o }] };
        if (d === 'climate') return { opts: a.hvac_modes || [], cur: so.state, call: (o) => ['climate', 'set_hvac_mode', { hvac_mode: o }] };
        if (d === 'fan') return { opts: a.preset_modes || [], cur: a.preset_mode, call: (o) => ['fan', 'set_preset_mode', { preset_mode: o }] };
        if (d === 'light') return { opts: a.effect_list || [], cur: a.effect, call: (o) => ['light', 'turn_on', { effect: o }] };
        return null;
      };
      const close = () => { w.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const sp = spec(r.so(b.entity));
        if (!sp || !sp.opts.length) return;
        if (w.classList.contains('open')) { close(); return; }
        list.textContent = '';
        sp.opts.forEach((o) => {
          const it = el('button', `it${String(o) === String(sp.cur) ? ' on' : ''}`, { type: 'button', role: 'option', text: STATE_TXT[r.lang] && STATE_TXT[r.lang][o] ? STATE_TXT[r.lang][o] : String(o) });
          it.setAttribute('aria-selected', String(String(o) === String(sp.cur)));
          it.addEventListener('click', (ev) => { ev.stopPropagation(); close(); const [d, s, data] = sp.call(o); r.call(d, s, { entity_id: b.entity, ...data }); });
          list.appendChild(it);
        });
        w.classList.add('open'); btn.setAttribute('aria-expanded', 'true');
        const first = list.querySelector('.on') || list.firstChild; if (first) first.focus();
      });
      w.addEventListener('keydown', (e) => { if (e.key === 'Escape') { close(); btn.focus(); } });
      r.up(() => {
        const so = r.so(b.entity), sp = spec(so);
        lb.textContent = r.tpl(b.name ?? (so ? r.name(so) : '')); lb.hidden = !lb.textContent;
        const c = sp ? sp.cur : null;
        cur.textContent = isNil(c) ? '—' : (STATE_TXT[r.lang] && STATE_TXT[r.lang][c]) || String(c);
        btn.disabled = !sp || !sp.opts.length;
      });
      return w;
    },
    row(r, b) { const w = el('div', 'nb-row'); (b.blocks || []).forEach((x) => w.appendChild(r.block(x))); return w; },
    column(r, b) { const w = el('div', 'nb-col'); (b.blocks || []).forEach((x) => w.appendChild(r.block(x))); return w; },
    divider() { return el('div', 'nb-div'); },
    spacer(r, b) { const w = el('div'); w.style.height = px(num(b.size, 12)); return w; },
    card(r, b) {
      const w = el('div', 'nb-card');
      if (!b.card || typeof b.card !== 'object') return w;
      if (window.loadCardHelpers) {
        window.loadCardHelpers().then((h) => {
          const c = h.createCardElement(b.card);
          c.hass = r.hass();
          w.appendChild(c);
          r.up((hh) => { c.hass = hh; });
        }).catch(() => { w.textContent = String(b.card.type || ''); });
      } else w.appendChild(el('div', 'nb-ph', { text: `⧉ ${b.card.type || 'card'}${b.card.entity ? ` · ${b.card.entity}` : ''}` }));
      return w;
    },
  };

  const NATIVE_CSS = `
.native{display:none;position:relative;flex-direction:column;gap:var(--afx-ngap,12px);padding:var(--afx-npad,16px);color:var(--primary-text-color,#eaf2ff);flex:1 1 auto;justify-content:var(--afx-valign,flex-start);box-sizing:border-box}
.frame.has-native .native{display:flex}
.nb-act{cursor:pointer;-webkit-tap-highlight-color:transparent;outline:none;border-radius:14px}
.nb-act:focus-visible{box-shadow:0 0 0 2px var(--afx-tl)}
.nb-ic{width:40px;height:40px;border-radius:13px;display:grid;place-items:center;flex:none;font-size:20px;--mdc-icon-size:22px;
  background:color-mix(in srgb,var(--nb-accent,var(--afx-mid)) 22%,transparent);color:var(--nb-accent,var(--afx-tl));transition:background .3s,box-shadow .3s,color .3s}
.nb-ic.on{background:color-mix(in srgb,var(--nb-accent,var(--afx-tl)) 38%,transparent);color:#fff;box-shadow:0 0 16px color-mix(in srgb,var(--nb-accent,var(--afx-tl)) 55%,transparent)}
.nb-title,.nb-ent{display:flex;align-items:center;gap:12px}
.nb-title .tx,.nb-ent .tx{flex:1;min-width:0}
.nb-title .t{font-weight:600;font-size:18px;line-height:1.2}
.nb-title.sz-s .t{font-size:15px}.nb-title.sz-l .t{font-size:22px}.nb-title.sz-xl .t{font-size:28px;font-weight:500;letter-spacing:-.01em}
.nb-title .s,.nb-ent .s,.nb-media .s{font-size:13px;color:var(--secondary-text-color,rgba(210,222,255,.72));margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.nb-ent .n,.nb-media .n{font-weight:600;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.al-center{justify-content:center;text-align:center}
.nb-title.al-center .tx{flex:none}
.nb-img{position:relative;border-radius:calc(var(--afx-r) * .6);overflow:hidden;background:var(--nb-img-bg,transparent);flex:none}
.nb-img img:not([src]){display:none}
.nb-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:var(--fit,cover);object-position:var(--pos,center);transition:opacity .5s ease,filter .6s ease}
.nb-img.dimoff.off img{filter:grayscale(.65) brightness(.55)}
.nb-img .glowov{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .6s;mix-blend-mode:screen;
  background:radial-gradient(60% 55% at 50% 62%,color-mix(in srgb,var(--afx-mid) 45%,transparent),transparent 70%)}
.nb-img.onglow.on .glowov{opacity:1;animation:afx-ong 3.2s ease-in-out infinite}
@keyframes afx-ong{50%{opacity:.55}}
.native.pad0{border-radius:inherit;overflow:hidden}
.native.pad0>.nb-img{border-radius:0}
.nb-img.empty{background:repeating-linear-gradient(45deg,rgba(255,255,255,.04) 0 10px,transparent 10px 20px)}
.nb-sw{all:unset;flex:none;width:44px;height:26px;border-radius:13px;cursor:pointer;position:relative;background:rgba(255,255,255,.14);transition:background .25s,box-shadow .25s}
.nb-sw i{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:left .25s;box-shadow:0 1px 3px rgba(0,0,0,.4)}
.nb-sw[aria-checked=true]{background:linear-gradient(90deg,var(--afx-tl),var(--afx-mid));box-shadow:0 0 14px color-mix(in srgb,var(--afx-mid) 60%,transparent)}
.nb-sw[aria-checked=true] i{left:21px}
.nb-sw:focus-visible{outline:2px solid var(--afx-tl);outline-offset:2px}
.nb-val .lbl{font-size:13px;color:var(--secondary-text-color,rgba(210,222,255,.72))}
.nb-val .v{font-size:40px;font-weight:300;letter-spacing:-.03em;line-height:1.05}
.nb-val.sz-m .v{font-size:30px}.nb-val.sz-xl .v{font-size:56px}.nb-val.sz-s .v{font-size:22px}
.nb-val small{font-size:.45em;margin-left:4px;color:var(--secondary-text-color,rgba(210,222,255,.72))}
.nb-btn{all:unset;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:42px;padding:8px 16px;border-radius:14px;cursor:pointer;
  font-weight:600;font-size:14px;color:var(--primary-text-color,#eaf2ff);background:color-mix(in srgb,var(--nb-accent,var(--afx-mid)) 20%,transparent);
  border:1px solid color-mix(in srgb,var(--nb-accent,var(--afx-mid)) 45%,transparent);transition:background .25s,box-shadow .25s,transform .12s;--mdc-icon-size:20px}
.nb-btn:active{transform:scale(.96)}
.nb-btn.st-ghost{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12)}
.nb-btn.st-round{width:46px;height:46px;padding:0;border-radius:50%}
.nb-btn.on{background:linear-gradient(135deg,color-mix(in srgb,var(--afx-tl) 70%,transparent),color-mix(in srgb,var(--afx-br) 70%,transparent));color:#fff;box-shadow:0 0 18px color-mix(in srgb,var(--afx-mid) 55%,transparent)}
.nb-btn:focus-visible{outline:2px solid var(--afx-tl);outline-offset:2px}
.nb-bi{display:inline-grid;place-items:center;font-size:18px;line-height:1}
.nb-btns{display:flex;gap:10px;flex-wrap:wrap}
.nb-btns .nb-btn{flex:1}
.nb-sl .top,.nb-prog .top{display:flex;justify-content:space-between;font-size:13px;color:var(--secondary-text-color,rgba(210,222,255,.72));margin-bottom:6px}
.nb-sl input{-webkit-appearance:none;appearance:none;width:100%;height:8px;border-radius:8px;margin:6px 0;cursor:pointer;outline:none;
  background:linear-gradient(90deg,var(--afx-tl),var(--afx-mid) var(--v,0%),rgba(255,255,255,.12) var(--v,0%))}
.nb-sl input::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:#fff;box-shadow:0 0 0 3px var(--afx-mid),0 0 14px var(--afx-mid)}
.nb-sl input::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#fff;border:0;box-shadow:0 0 0 3px var(--afx-mid),0 0 14px var(--afx-mid)}
.nb-sl input:disabled{opacity:.4}
.nb-prog .bar{height:8px;border-radius:8px;background:rgba(255,255,255,.1);overflow:hidden}
.nb-prog .bar i{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--afx-tl),var(--afx-mid),var(--afx-br));box-shadow:0 0 12px var(--afx-mid);transition:width .6s}
.nb-media{display:grid;grid-template-columns:64px 1fr;gap:6px 14px;align-items:center}
.nb-media .art{width:64px;height:64px;border-radius:16px;background:center/cover no-repeat;grid-row:span 2;box-shadow:0 8px 22px rgba(0,0,0,.4)}
.nb-media .art.noart{background-image:linear-gradient(135deg,var(--afx-tl),var(--afx-mid),var(--afx-br))!important}
.nb-media .ctl{display:flex;gap:8px;grid-column:2}
.nb-chips{display:flex;gap:8px;flex-wrap:wrap}
.nb-chips .chip{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;font-size:13px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);--mdc-icon-size:16px}
.nb-chips .chip.on{border-color:color-mix(in srgb,var(--afx-mid) 60%,transparent);background:color-mix(in srgb,var(--afx-mid) 20%,transparent)}
.nb-text{font-size:14px;line-height:1.5;white-space:pre-line}
.nb-text.sz-s{font-size:12px}.nb-text.sz-l{font-size:17px}.nb-text.sz-xl{font-size:22px}
.nb-row{display:flex;gap:var(--afx-ngap,12px)}
.nb-row>*{flex:1;min-width:0}
.nb-row>.nb-btn.st-round{flex:none}
.nb-col{display:flex;flex-direction:column;gap:var(--afx-ngap,12px)}
.nb-div{height:1px;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--afx-mid) 55%,transparent),transparent)}
.nb-ph{padding:14px;border-radius:14px;border:1px dashed rgba(255,255,255,.2);font-size:13px;color:var(--secondary-text-color,rgba(210,222,255,.72))}
.nb-unk{font-size:12px;opacity:.6}
.emo{font-size:20px;line-height:1}
.nb-graph{height:46px;margin-top:6px}
.nb-graph svg{width:100%;height:100%;display:block;overflow:visible}
.nb-graph .l{stroke:var(--nb-accent,var(--afx-tl));stroke-width:2;filter:drop-shadow(0 0 4px var(--nb-accent,var(--afx-mid)))}
.nb-cam ha-camera-stream{position:absolute;inset:0;width:100%;height:100%;--video-max-height:100%}
.nb-cam .live{position:absolute;top:8px;left:10px;font-size:11px;font-weight:700;letter-spacing:.05em;color:#fff;padding:3px 8px;border-radius:8px;background:rgba(239,68,68,.85);box-shadow:0 0 10px rgba(239,68,68,.6)}
.nb-sel{position:relative;display:grid;gap:6px}
.nb-sel .lbl{font-size:13px;color:var(--secondary-text-color,rgba(210,222,255,.72))}
.nb-sel>.nb-btn{justify-content:space-between;width:100%}
.nb-sel .chev{opacity:.7;transition:transform .2s}
.nb-sel.open .chev{transform:rotate(180deg)}
.nb-sel .list{display:none;flex-direction:column;gap:2px;padding:6px;border-radius:14px;max-height:220px;overflow:auto;
  background:color-mix(in srgb,var(--afx-tint) 85%,transparent);border:1px solid color-mix(in srgb,var(--afx-mid) 40%,transparent);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}
.nb-sel.open .list{display:flex}
.nb-sel .it{all:unset;box-sizing:border-box;padding:9px 12px;border-radius:10px;cursor:pointer;font-size:14px;color:var(--primary-text-color,#eaf2ff)}
.nb-sel .it:hover,.nb-sel .it:focus-visible{background:rgba(255,255,255,.08)}
.nb-sel .it.on{background:color-mix(in srgb,var(--afx-mid) 30%,transparent)}
.nb-confirm{position:absolute;inset:0;z-index:9;display:grid;place-items:center;padding:16px;background:rgba(4,6,14,.55);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);animation:afx-cf .18s ease-out}
.nb-confirm .box{display:grid;gap:14px;max-width:320px;padding:18px;border-radius:18px;background:color-mix(in srgb,var(--afx-tint) 80%,transparent);
  border:1px solid color-mix(in srgb,var(--afx-mid) 50%,transparent);box-shadow:0 0 24px color-mix(in srgb,var(--afx-mid) 35%,transparent)}
.nb-confirm .q{font-size:15px;line-height:1.4;color:var(--primary-text-color,#eaf2ff)}
@keyframes afx-cf{from{opacity:0}}
`;
  /* ═════════════════════════ СТИЛИ СТЕКЛА ═════════════════════════ */
  try { CSS.registerProperty({ name: '--afx-p', syntax: '<percentage>', inherits: true, initialValue: '0%' }); } catch (e) { /* уже есть */ }
  [['--afx-tl', '#38bdf8'], ['--afx-mid', '#818cf8'], ['--afx-br', '#c084fc']].forEach(([name, initialValue]) => {
    try { CSS.registerProperty({ name, syntax: '<color>', inherits: true, initialValue }); } catch (e) { /* уже есть */ }
  });

  /** Таймер для расписаний, сезона и простоя (одна проверка раз в 5 с на все карточки) */
  const Ticker = {
    set: new Set(), last: Date.now(), timer: 0,
    add(s) {
      this.set.add(s);
      if (!this.timer) this.timer = setInterval(() => this.set.forEach((x) => x._tick()), 5000);
      if (!this._b) {
        this._b = true;
        const wake = () => { this.last = Date.now(); this.set.forEach((x) => { if (x._idle) x._tick(); }); };
        ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((ev) => document.addEventListener(ev, wake, { passive: true, capture: true }));
        let mt = 0;
        document.addEventListener('pointermove', () => { const n = Date.now(); if (n - mt > 1000) { mt = n; wake(); } }, { passive: true, capture: true });
      }
    },
    remove(s) { this.set.delete(s); if (!this.set.size && this.timer) { clearInterval(this.timer); this.timer = 0; } },
    idleFor() { return (Date.now() - this.last) / 1000; },
  };

  const RING_MASK = '-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)';
  const HUE = 'hue-rotate(calc(var(--afx-hue-base,0deg) + var(--afx-hue)))';

  const CSS_TEXT = `
:host{
  display:block;position:relative;height:100%;box-sizing:border-box;
  --afx-tl:var(--afx-theme-tl,#38bdf8);--afx-mid:var(--afx-theme-mid,#818cf8);--afx-br:var(--afx-theme-br,#c084fc);
  --afx-glow:var(--afx-theme-glow,1);--afx-spread:var(--afx-theme-spread,14px);--afx-edge:var(--afx-theme-edge,1.5px);
  --afx-ga:var(--afx-theme-angle,135deg);--afx-alpha:var(--afx-theme-alpha,.28);--afx-tint:var(--afx-theme-tint,#0b1226);
  --afx-blur:var(--afx-theme-blur,18px);--afx-sat:var(--afx-theme-saturate,160%);--afx-glare:var(--afx-theme-glare,.55);
  --afx-glare-angle:var(--afx-theme-glare-angle,115deg);--afx-r:var(--afx-theme-radius,24px);--afx-inner:var(--afx-theme-inner,.55);
  --afx-tex:none;--afx-tex-size:auto;--afx-tex-op:.12;--afx-tex-color:#fff;--afx-tex-blend:overlay;
  --afx-dim:1;--afx-speed:1;--afx-led:var(--afx-mid);--afx-engrave-op:.16;
  --ha-card-background:transparent;--card-background-color:transparent;--ha-card-border-width:0px;
  --ha-card-border-color:transparent;--ha-card-box-shadow:none;--ha-card-backdrop-filter:none;
  --ha-card-border-radius:var(--afx-r);--afx-cm-off:1;
  transition:--afx-p .9s cubic-bezier(.2,.8,.2,1),--afx-tl .8s ease,--afx-mid .8s ease,--afx-br .8s ease;
}
*{box-sizing:border-box}
.root{position:relative;height:100%;perspective:1000px}
.frame{position:relative;height:100%;border-radius:var(--afx-r);
  transform:translateY(var(--afx-lift,0px)) scale(var(--afx-press,1)) rotateX(var(--afx-rx,0deg)) rotateY(var(--afx-ry,0deg));
  transition:transform .22s cubic-bezier(.2,.8,.2,1);
  --afx-g1:clamp(0,var(--afx-glow),1);--afx-g2:clamp(0,calc(var(--afx-glow) - 1),1);
  --afx-ring:calc(var(--afx-spread) * .55 + 2px);
  --afx-grad:linear-gradient(var(--afx-ga),var(--afx-tl) 0%,var(--afx-mid) 50%,var(--afx-br) 100%);
  --afx-gt:var(--afx-glare-tint,var(--afx-theme-glare-tint,45%));
  --afx-g-tl:color-mix(in srgb,var(--afx-tl) var(--afx-gt),#fff);
  --afx-g-mid:color-mix(in srgb,var(--afx-mid) var(--afx-gt),#fff);
  --afx-g-br:color-mix(in srgb,var(--afx-br) var(--afx-gt),#fff)}
.frame.edge-rotate{--afx-grad:conic-gradient(from var(--afx-spin),var(--afx-tl),var(--afx-mid),var(--afx-br),var(--afx-mid),var(--afx-tl));
  animation:afx-spin calc(9s / var(--afx-speed)) linear var(--afx-sync,0s) infinite}
.frame.hue-cycle{animation:afx-hue calc(12s / var(--afx-speed)) linear var(--afx-sync,0s) infinite}
.frame.edge-rotate.hue-cycle{animation:afx-spin calc(9s / var(--afx-speed)) linear var(--afx-sync,0s) infinite,afx-hue calc(12s / var(--afx-speed)) linear var(--afx-sync,0s) infinite}
@keyframes afx-spin{to{--afx-spin:360deg}}
@keyframes afx-hue{to{--afx-hue:360deg}}
.frame.hover:hover{--afx-lift:-3px;--afx-hb:1.25}
.frame.hover.pressed{--afx-press:.985}

.ring{position:absolute;border-radius:inherit;background:var(--afx-grad);${RING_MASK}}
.halo{position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:0;filter:blur(var(--afx-spread));
  opacity:calc(var(--afx-g1) * var(--afx-dim) * var(--afx-hb,1));transition:opacity .45s}
.halo .ring{inset:calc(var(--afx-ring) * -1);padding:calc(var(--afx-ring) * 2);border-radius:calc(var(--afx-r) + var(--afx-ring))}
.halo.h2{filter:blur(calc(var(--afx-spread) * .4));opacity:calc(var(--afx-g2) * var(--afx-dim) * var(--afx-hb,1))}
.reflect{display:none;position:absolute;left:10%;right:10%;top:calc(100% + 2px);height:34px;pointer-events:none;z-index:0;
  background:radial-gradient(ellipse at 50% 0%,color-mix(in srgb,var(--afx-mid) 70%,transparent),transparent 70%);filter:blur(8px);opacity:calc(.75 * var(--afx-dim))}
.frame.reflect-on .reflect{display:block}

.glass{position:relative;z-index:1;height:100%;border-radius:inherit;overflow:hidden;isolation:isolate;
  background:linear-gradient(165deg,
    color-mix(in srgb,var(--afx-tint) min(100%,calc(var(--afx-alpha) * 100% + 8%)),transparent),
    color-mix(in srgb,var(--afx-tint) calc(var(--afx-alpha) * 100%),transparent));
  -webkit-backdrop-filter:blur(var(--afx-blur)) saturate(var(--afx-sat));backdrop-filter:blur(var(--afx-blur)) saturate(var(--afx-sat));
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.045),inset 0 -40px 60px -45px rgba(0,0,0,.7)}
.tex-wrap{position:absolute;inset:0;pointer-events:none;z-index:0;display:none}
.frame.has-tex .tex-wrap{display:block}
.frame.tex-fade .tex-wrap{-webkit-mask:linear-gradient(var(--afx-ga),#000 0%,rgba(0,0,0,.35) 55%,transparent 95%);mask:linear-gradient(var(--afx-ga),#000 0%,rgba(0,0,0,.35) 55%,transparent 95%)}
.tex{position:absolute;inset:0;background:var(--afx-tex-color);-webkit-mask-image:var(--afx-tex);mask-image:var(--afx-tex);
  -webkit-mask-size:var(--afx-tex-size);mask-size:var(--afx-tex-size);opacity:var(--afx-tex-op);mix-blend-mode:var(--afx-tex-blend)}
.frame.tex-lit .tex{background:var(--afx-grad);mix-blend-mode:screen;opacity:min(1,calc(var(--afx-tex-op) * 2.6 * var(--afx-dim) * var(--afx-glow)))}
.frame.tex-lit .tex-wrap{-webkit-mask:radial-gradient(farthest-side at 50% 50%,rgba(0,0,0,.12) 30%,#000 100%);mask:radial-gradient(farthest-side at 50% 50%,rgba(0,0,0,.12) 30%,#000 100%)}
.inner{position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:1;filter:blur(9px);opacity:calc(var(--afx-inner) * var(--afx-dim))}
.inner .ring{inset:0;padding:5px}
.fxc{position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;z-index:1}
.frame.fx-front .fxc{z-index:5}
.glare{position:absolute;inset:0;pointer-events:none;z-index:2;mix-blend-mode:screen;opacity:var(--afx-glare);
  background:radial-gradient(130% 90% at 0% 0%,color-mix(in srgb,var(--afx-g-tl) 34%,transparent),color-mix(in srgb,var(--afx-g-tl) 7%,transparent) 35%,transparent 55%),
    radial-gradient(90% 70% at 100% 100%,color-mix(in srgb,var(--afx-g-br) 16%,transparent),transparent 60%),
    linear-gradient(var(--afx-glare-angle),transparent 32%,color-mix(in srgb,var(--afx-g-mid) 22%,transparent) 44%,color-mix(in srgb,var(--afx-g-mid) 6%,transparent) 49%,transparent 60%)}
.frame.glare-follow .glare{background:radial-gradient(55% 65% at var(--afx-mx,22%) var(--afx-my,0%),color-mix(in srgb,var(--afx-g-tl) 38%,transparent),color-mix(in srgb,var(--afx-g-mid) 6%,transparent) 45%,transparent 65%),
    radial-gradient(90% 70% at 100% 100%,color-mix(in srgb,var(--afx-g-br) 14%,transparent),transparent 60%),
    linear-gradient(var(--afx-glare-angle),transparent 36%,color-mix(in srgb,var(--afx-g-mid) 12%,transparent) 46%,transparent 58%)}
.frame.glare-off .glare,.frame.glare-off .spec:not(.b){display:none}
.sweep{display:none;position:absolute;inset:-50%;pointer-events:none;z-index:2;mix-blend-mode:screen;opacity:var(--afx-glare);
  background:linear-gradient(var(--afx-glare-angle),transparent 44%,color-mix(in srgb,var(--afx-g-mid) 55%,transparent) 50%,transparent 56%);
  animation:afx-sweep calc(7.2s / var(--afx-speed)) cubic-bezier(.6,0,.2,1) var(--afx-sync,0s) infinite}
.frame.glare-sweep .sweep{display:block}
@keyframes afx-sweep{0%{transform:translateX(-70%)}35%,100%{transform:translateX(70%)}}
.irid{display:none;position:absolute;inset:0;z-index:2;pointer-events:none;mix-blend-mode:screen;opacity:.2;
  background:conic-gradient(from var(--afx-irid) at var(--afx-mx,30%) var(--afx-my,20%),#ff3df2,#2de2ff,#b6ff3d,#ffe13d,#ff3df2);
  -webkit-mask:radial-gradient(120% 95% at var(--afx-mx,30%) var(--afx-my,20%),#000,transparent 72%);mask:radial-gradient(120% 95% at var(--afx-mx,30%) var(--afx-my,20%),#000,transparent 72%);
  animation:afx-irid calc(18s / var(--afx-speed)) linear var(--afx-sync,0s) infinite}
.frame.irid-on .irid{display:block}
@keyframes afx-irid{to{--afx-irid:360deg}}
.scanbar{display:none;position:absolute;left:0;right:0;top:0;height:45%;z-index:2;pointer-events:none;mix-blend-mode:screen;
  background:linear-gradient(180deg,transparent,color-mix(in srgb,var(--afx-mid) 18%,transparent) 75%,color-mix(in srgb,var(--afx-mid) 60%,transparent) 99%,transparent);
  animation:afx-scan calc(6s / var(--afx-speed)) linear var(--afx-sync,0s) infinite}
.frame.scan .scanbar{display:block}
@keyframes afx-scan{from{transform:translateY(-100%)}to{transform:translateY(230%)}}
.spec{position:absolute;top:0;left:9%;right:9%;height:1px;z-index:3;pointer-events:none;
  background:linear-gradient(90deg,transparent,var(--afx-g-tl) 30%,var(--afx-g-mid) 70%,transparent);opacity:min(1,calc(var(--afx-glare) * 1.4))}
.spec.b{top:auto;bottom:0;left:22%;right:22%;background:linear-gradient(90deg,transparent,var(--afx-br),transparent);opacity:calc(.7 * var(--afx-dim))}
.engrave{display:none;position:absolute;right:16px;bottom:6px;z-index:3;pointer-events:none;white-space:nowrap;
  font-weight:800;font-size:30px;line-height:1;font-family:inherit;letter-spacing:.06em;background:var(--afx-grad);
  -webkit-background-clip:text;background-clip:text;color:transparent;opacity:var(--afx-engrave-op);mix-blend-mode:screen}
.frame.engrave-on .engrave{display:block}
.content{position:relative;z-index:4;height:100%;border-radius:inherit;display:flex;flex-direction:column}
.content>slot{display:contents}
::slotted(*){flex:1 1 auto;min-height:0}
.frame.text-glow .content{text-shadow:0 0 10px color-mix(in srgb,var(--afx-mid) 70%,transparent)}
.frame.glitching .content{animation:afx-glitch .14s steps(2) infinite}
@keyframes afx-glitch{0%{transform:translate(2px,0);text-shadow:-2px 0 rgba(255,0,80,.7),2px 0 rgba(0,240,255,.7)}
  50%{transform:translate(-2px,1px);text-shadow:2px 0 rgba(255,0,80,.7),-2px 0 rgba(0,240,255,.7)}}

.edge{position:absolute;inset:0;border-radius:inherit;padding:var(--afx-edge);pointer-events:none;z-index:3;
  background:linear-gradient(var(--afx-ga),rgba(255,255,255,.6),transparent 28%),var(--afx-grad);${RING_MASK};
  opacity:calc(.35 + .65 * var(--afx-dim));transition:opacity .4s}
.edge.c1,.edge.c2{display:none;opacity:.5;filter:blur(.4px)}
.edge.c1{background:var(--afx-tl);transform:translate(-1.2px,-1px)}
.edge.c2{background:var(--afx-br);transform:translate(1.2px,1px)}
.frame.chromatic .edge.c1,.frame.chromatic .edge.c2{display:block}
.frame.edge-pulse .edge.main{animation:afx-pulse calc(3s / var(--afx-speed)) ease-in-out var(--afx-sync,0s) infinite}
@keyframes afx-pulse{50%{opacity:.3}}
.progw{display:none;position:absolute;inset:-1px;border-radius:calc(var(--afx-r) + 1px);pointer-events:none;z-index:3;
  filter:drop-shadow(0 0 4px var(--afx-mid)) drop-shadow(0 0 1px #fff)}
.prog{position:absolute;inset:0;border-radius:inherit;padding:calc(var(--afx-edge) + 1.5px);
  background:conic-gradient(from 0deg,var(--afx-tl) 0%,var(--afx-mid) calc(var(--afx-p) * .5),var(--afx-br) var(--afx-p),rgba(255,255,255,.08) var(--afx-p));${RING_MASK}}
.frame.has-prog .progw{display:block}
.frame.has-prog .edge.main{opacity:.22}

.corner{display:none;position:absolute;width:16px;height:16px;z-index:5;pointer-events:none;opacity:calc(.45 + .55 * var(--afx-dim))}
.frame.corners .corner{display:block}
.corner.tl{top:8px;left:8px;border-top:2px solid var(--afx-tl);border-left:2px solid var(--afx-tl);border-top-left-radius:6px;filter:drop-shadow(0 0 4px var(--afx-tl))}
.corner.tr{top:8px;right:8px;border-top:2px solid var(--afx-mid);border-right:2px solid var(--afx-mid);border-top-right-radius:6px;filter:drop-shadow(0 0 4px var(--afx-mid))}
.corner.bl{bottom:8px;left:8px;border-bottom:2px solid var(--afx-mid);border-left:2px solid var(--afx-mid);border-bottom-left-radius:6px;filter:drop-shadow(0 0 4px var(--afx-mid))}
.corner.br{bottom:8px;right:8px;border-bottom:2px solid var(--afx-br);border-right:2px solid var(--afx-br);border-bottom-right-radius:6px;filter:drop-shadow(0 0 4px var(--afx-br))}
.led{display:none;position:absolute;top:12px;right:14px;width:7px;height:7px;border-radius:50%;z-index:6;pointer-events:none;
  background:var(--afx-led);box-shadow:0 0 6px 1px var(--afx-led),0 0 16px 3px color-mix(in srgb,var(--afx-led) 45%,transparent)}
.frame.led-on .led{display:block}
.frame.alert .led{animation:afx-blink .8s steps(2) infinite}
@keyframes afx-blink{50%{opacity:.2}}
.flash{position:absolute;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;pointer-events:none;z-index:3;mix-blend-mode:screen;
  background:radial-gradient(circle,color-mix(in srgb,var(--afx-mid) 70%,#fff) 0%,transparent 70%);animation:afx-flash .7s ease-out forwards}
@keyframes afx-flash{from{transform:scale(1);opacity:.9}to{transform:scale(30);opacity:0}}

.frame.breathe .halo{animation:afx-breathe calc(4.8s / var(--afx-speed)) ease-in-out var(--afx-sync,0s) infinite}
@keyframes afx-breathe{50%{opacity:calc(var(--afx-g1) * var(--afx-dim) * .4)}}
.frame.beat .halo{animation:afx-beat var(--afx-beat,.5s) cubic-bezier(.2,.9,.3,1) infinite}
@keyframes afx-beat{0%{opacity:min(1,calc(var(--afx-g1) * var(--afx-dim) * 1.6))}60%,100%{opacity:calc(var(--afx-g1) * var(--afx-dim) * .5)}}
.frame.alert .halo{animation:afx-alert 1.2s ease-in-out var(--afx-sync,0s) infinite}
@keyframes afx-alert{50%{opacity:.2}}

.frame.hue .halo{filter:blur(var(--afx-spread)) ${HUE}}
.frame.hue .halo.h2{filter:blur(calc(var(--afx-spread) * .4)) ${HUE}}
.frame.hue .inner{filter:blur(9px) ${HUE}}
.frame.hue .edge,.frame.hue .tex-wrap,.frame.hue .fxc,.frame.hue .engrave,.frame.hue .corner{filter:${HUE}}
.frame.hue .progw{filter:drop-shadow(0 0 4px var(--afx-mid)) ${HUE}}
.frame.hue .reflect{filter:blur(8px) ${HUE}}

.frame.ignite .glass{animation:afx-fadein .7s ease-out both}
.frame.ignite .halo,.frame.ignite .edge.main,.frame.ignite .inner,.frame.ignite .progw{animation:afx-ignite 1.3s linear backwards}
@keyframes afx-fadein{from{opacity:0;transform:scale(.985)}}
@keyframes afx-ignite{0%{opacity:0}8%{opacity:.9}12%{opacity:.08}22%{opacity:1}27%{opacity:.2}38%{opacity:1}46%{opacity:.6}}

.frame.lite .glass{-webkit-backdrop-filter:none;backdrop-filter:none;
  background:color-mix(in srgb,var(--afx-tint) min(100%,calc(var(--afx-alpha) * 100% + 50%)),transparent)}
.frame.lite .halo.h2,.frame.lite .inner,.frame.lite .sweep,.frame.lite .scanbar,.frame.lite .fxc,.frame.lite .irid{display:none}
.frame.lite,.frame.lite *{animation:none!important}
.frame.paused,.frame.paused *{animation-play-state:paused!important}
@media (prefers-reduced-motion:reduce){.frame:not(.force-motion),.frame:not(.force-motion) *{animation:none!important;transition:none!important}}
.content{padding:var(--afx-pad,0);zoom:var(--afx-zoom,1);font-size:calc(100% * var(--afx-fs,1))}
.frame.leg-soft .content{text-shadow:0 1px 2px rgba(0,0,0,.5)}
.frame.leg-strong .content{text-shadow:0 1px 2px rgba(0,0,0,.75),0 0 12px rgba(0,0,0,.5)}
.bgimg{display:none;position:absolute;inset:0;z-index:0;pointer-events:none;background:var(--afx-bg-img) center/cover no-repeat;
  filter:blur(var(--afx-bg-blur,0px)) brightness(calc(1 - var(--afx-bg-dim,.35)));transform:scale(1.03)}
.bgimg::after{content:"";position:absolute;inset:0;background:color-mix(in srgb,var(--afx-tint) calc(var(--afx-alpha) * 100%),transparent)}
.frame.bg-on .bgimg{display:block}
.fxo{position:absolute;left:-18px;top:-18px;width:calc(100% + 36px);height:calc(100% + 36px);pointer-events:none;z-index:7;display:none}
.frame.has-outer .fxo{display:block}
.snowcap,.icicles{display:none;position:absolute;left:0;right:0;pointer-events:none;z-index:8}
.frame.snowcap-on .snowcap,.frame.icicles-on .icicles{display:block}
.snowcap svg,.icicles svg{display:block;width:100%;height:100%;overflow:visible}
.snowcap svg{filter:drop-shadow(0 2px 2px rgba(10,20,40,.32)) drop-shadow(0 0 6px rgba(210,235,255,.5))}
.icicles svg{filter:drop-shadow(0 0 3px rgba(180,220,255,.55))}
.snowcap .sp{animation:afx-tw 3.4s ease-in-out infinite}
@keyframes afx-tw{0%,100%{opacity:.08}50%{opacity:1}}
.icicles .drip{animation:afx-drip2 4.2s ease-in infinite}
@keyframes afx-drip2{0%,62%{transform:translateY(0);opacity:0}66%{opacity:1}100%{transform:translateY(46px);opacity:0}}
.frame.idle .halo,.frame.idle .fxc,.frame.idle .fxo,.frame.idle .edge{opacity:.18!important;transition:opacity 1.5s}
.frame.lite .fxo{display:none!important}
@media (prefers-reduced-transparency:reduce){.glass{-webkit-backdrop-filter:none;backdrop-filter:none;background:color-mix(in srgb,var(--afx-tint) 92%,transparent)}}
/* ── v3.7: без рамки, свой фон, новые эффекты движения ── */
.frame.no-edge .edge,.frame.no-edge .progw,.frame.no-edge .march,.frame.no-edge .glint{display:none}
.frame.no-glow .halo,.frame.no-glow .inner,.frame.no-glow .reflect{display:none}
.frame.no-bg .glass{background:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;box-shadow:none!important}
.frame.bare .halo,.frame.bare .inner,.frame.bare .reflect,.frame.bare .edge,.frame.bare .progw,.frame.bare .glare,.frame.bare .sweep,.frame.bare .spec,
.frame.bare .irid,.frame.bare .scanbar,.frame.bare .corner,.frame.bare .tex-wrap,.frame.bare .engrave,.frame.bare .march,.frame.bare .glint,.frame.bare .led{display:none!important}
.frame.bare .glass{background:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;box-shadow:none!important}
.frame.custom-bg .glass,.frame.custom-bg.lite .glass{background:linear-gradient(var(--afx-bgang,165deg),
  color-mix(in srgb,var(--afx-bgc) calc(var(--afx-bgo) * 100%),transparent),color-mix(in srgb,var(--afx-bgc2,var(--afx-bgc)) calc(var(--afx-bgo) * 100%),transparent));
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.07)}
.frame.depth .glass{box-shadow:inset 0 0 0 1px rgba(255,255,255,.045),0 18px 36px -14px rgba(0,0,0,.65),0 4px 10px -2px rgba(0,0,0,.35)}
.frame.hover.touchpress{--afx-lift:-3px;--afx-hb:1.25}
.root.float{animation:afx-float calc(6s / var(--afx-speed)) ease-in-out infinite}
.root.sway{animation:afx-sway calc(9s / var(--afx-speed)) ease-in-out infinite}
.root.float.sway{animation:afx-floatsway calc(9s / var(--afx-speed)) ease-in-out infinite}
@keyframes afx-float{50%{transform:translateY(-6px)}}
@keyframes afx-sway{25%{transform:perspective(900px) rotateX(2.5deg) rotateY(-3deg)}75%{transform:perspective(900px) rotateX(-2deg) rotateY(3deg)}}
@keyframes afx-floatsway{25%{transform:perspective(900px) translateY(-5px) rotateX(2.5deg) rotateY(-3deg)}75%{transform:perspective(900px) translateY(-2px) rotateX(-2deg) rotateY(3deg)}}
.root.jelly{animation:afx-jelly .6s cubic-bezier(.3,1.6,.5,1) both!important}
@keyframes afx-jelly{0%{transform:scale(1)}30%{transform:scale(1.035,.965)}55%{transform:scale(.985,1.015)}80%{transform:scale(1.008,.994)}100%{transform:scale(1)}}
.frame.parallax .content{transform:translate(calc(var(--afx-px,0) * -7px),calc(var(--afx-py,0) * -5px));transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.spot{display:none;position:absolute;inset:0;z-index:2;pointer-events:none;
  background:radial-gradient(circle at var(--afx-mx,50%) var(--afx-my,40%),color-mix(in srgb,var(--afx-mid) 22%,transparent) 0,transparent 26%,rgba(0,0,0,.32) 70%)}
.frame.spotlight .spot{display:block}
.grain{display:none;position:absolute;inset:-20%;z-index:2;pointer-events:none;opacity:.13;mix-blend-mode:overlay;background:var(--afx-grain-img) 0 0/180px 180px;animation:afx-grain .5s steps(3) infinite}
.frame.grain-on .grain{display:block}
@keyframes afx-grain{0%{transform:translate(0,0)}33%{transform:translate(-4%,3%)}66%{transform:translate(3%,-5%)}100%{transform:translate(-2%,2%)}}
.frame.neon .edge.main,.frame.neon .inner{animation:afx-neon calc(7s / var(--afx-speed)) steps(1) infinite}
@keyframes afx-neon{0%,18%,22%,60%,63%,100%{opacity:1}19%,21%{opacity:.25}61%{opacity:.4}62%{opacity:.8}}
.march{display:none;position:absolute;inset:0;border-radius:inherit;padding:calc(var(--afx-edge) + 1px);pointer-events:none;z-index:3;
  background:repeating-linear-gradient(45deg,var(--afx-tl) 0 7px,transparent 7px 14px,var(--afx-br) 14px 21px,transparent 21px 28px);background-size:40px 40px;${RING_MASK};
  animation:afx-march calc(1.4s / var(--afx-speed)) linear infinite}
.frame.marching .march{display:block}
.frame.marching .edge.main{opacity:.25}
@keyframes afx-march{to{background-position:40px 0}}
.glint{display:none;position:absolute;inset:0;border-radius:inherit;padding:calc(var(--afx-edge) + 1.5px);pointer-events:none;z-index:4;
  background:conic-gradient(from var(--afx-gl),transparent 0deg 320deg,color-mix(in srgb,var(--afx-mid) 40%,#fff) 352deg,transparent 360deg);${RING_MASK};
  filter:drop-shadow(0 0 4px #fff);animation:afx-glint calc(6s / var(--afx-speed)) ease-in-out infinite}
.frame.glint-on .glint{display:block}
@keyframes afx-glint{0%{--afx-gl:0deg;opacity:0}8%{opacity:1}42%{--afx-gl:360deg;opacity:1}48%,100%{--afx-gl:360deg;opacity:0}}
.pulsering{display:none;position:absolute;inset:0;border-radius:inherit;border:2px solid var(--afx-mid);pointer-events:none;z-index:6;box-shadow:0 0 14px var(--afx-mid)}
.frame.pulsing .pulsering{display:block;animation:afx-pr 1s ease-out forwards}
@keyframes afx-pr{from{transform:scale(1);opacity:.95}to{transform:scale(1.1);opacity:0}}
${NATIVE_CSS}`;

  /* ═════════ Снег и лёд: процедурная отрисовка под размер карточки ═════════ */
  const seededRnd = (seed) => { let x = seed % 2147483647; if (x <= 0) x += 2147483646; return () => { x = (x * 16807) % 2147483647; return (x - 1) / 2147483646; }; };
  /** насколько опускается край карточки над скруглённым углом */
  const cornerDrop = (x, W, r) => { if (x < r) { const d = r - x; return r - Math.sqrt(Math.max(0, r * r - d * d)); } if (x > W - r) { const d = x - (W - r); return r - Math.sqrt(Math.max(0, r * r - d * d)); } return 0; };
  const smoothPath = (pts) => {
    let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
    for (let i = 1; i < pts.length - 1; i++) { const mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2; d += ` Q${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`; }
    const L = pts[pts.length - 1]; return `${d} L${L[0].toFixed(1)} ${L[1].toFixed(1)}`;
  };
  function snowSVG(W, r, depth, seed) {
    const R = seededRnd(seed), T = 13 * depth, ov = 5, H = Math.ceil(T + ov + 12), base = H - ov - 4;
    const xs = Math.max(2, r * 0.22), xe = W - xs, fade = Math.max(14, r * 0.9);
    const ph = [R() * 6.28, R() * 6.28, R() * 6.28], f1 = 0.018 + R() * 0.01, f2 = 0.045 + R() * 0.02, f3 = 0.11 + R() * 0.04;
    const lumps = Array.from({ length: Math.max(2, Math.round(W / 70)) }, () => ({ x: xs + R() * (xe - xs), w: 18 + R() * 40, a: 0.25 + R() * 0.45 }));
    const env = (x) => { const a = Math.min(1, (x - xs) / fade), b = Math.min(1, (xe - x) / fade); const k = Math.max(0, Math.min(a, b)); return k * k * (3 - 2 * k); };
    const thick = (x) => { let t = 0.62 + 0.16 * Math.sin(x * f1 + ph[0]) + 0.1 * Math.sin(x * f2 + ph[1]) + 0.05 * Math.sin(x * f3 + ph[2]);
      lumps.forEach((l) => { const d = (x - l.x) / l.w; t += l.a * Math.exp(-d * d); }); return T * env(x) * Math.min(1.25, t); };
    const edge = (x) => base + cornerDrop(x, W, r);
    const top = [], bot = [], shade = [];
    for (let x = xs; x <= xe + 0.01; x += 7) { const th = thick(x), e = edge(x); top.push([x, e - th]); shade.push([x, e - th * 0.35]); }
    let drips = [];
    for (let x = xe; x >= xs - 0.01; x -= 6) {
      const e = edge(x), k = env(x); let hang = ov * k * (0.55 + 0.3 * Math.sin(x * 0.09 + ph[1]));
      bot.push([x, e + hang]);
      if (k > 0.6 && R() < 0.12) drips.push([x, e + hang, 1.6 + R() * 2.2]);
    }
    const body = `${smoothPath(top)} L${bot[0][0].toFixed(1)} ${bot[0][1].toFixed(1)} ${smoothPath(bot).replace(/^M/, 'L')} Z`;
    const shadePath = `${smoothPath(shade)} L${bot[0][0].toFixed(1)} ${bot[0][1].toFixed(1)} ${smoothPath(bot).replace(/^M/, 'L')} Z`;
    const lobes = drips.map(([x, y, rr]) => `<ellipse cx='${x.toFixed(1)}' cy='${(y - rr * 0.55).toFixed(1)}' rx='${(rr * 2.4).toFixed(1)}' ry='${(rr * 0.85).toFixed(1)}' fill='#e4effc'/>`).join('');
    const sparks = Array.from({ length: Math.round(W / 22) }, () => { const x = xs + R() * (xe - xs), th = thick(x); if (th < 3) return ''; const y = edge(x) - th * (0.35 + R() * 0.55);
      return `<circle class='sp' cx='${x.toFixed(1)}' cy='${y.toFixed(1)}' r='${(0.45 + R() * 0.75).toFixed(2)}' fill='#fff' style='animation-delay:${(-R() * 3.4).toFixed(2)}s'/>`; }).join('');
    const svgTxt = `<svg viewBox='0 0 ${W} ${H}' preserveAspectRatio='none' aria-hidden='true'><defs>
      <linearGradient id='sg' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#ffffff'/><stop offset='.55' stop-color='#f1f7ff'/><stop offset='1' stop-color='#cfe2fb'/></linearGradient>
      <linearGradient id='ss' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#b9d3f3' stop-opacity='0'/><stop offset='1' stop-color='#9fbfe8' stop-opacity='.55'/></linearGradient></defs>
      <path d='${body}' fill='url(#sg)'/>${lobes}<path d='${shadePath}' fill='url(#ss)'/>
      <path d='${smoothPath(top)}' fill='none' stroke='#fff' stroke-width='1.3' stroke-linecap='round' opacity='.95'/>${sparks}</svg>`;
    return { svg: svgTxt, h: H, top: base };
  }
  function icicleSVG(W, r, len, seed) {
    const R = seededRnd(seed * 7 + 3), L = 30 * len, H = Math.ceil(L + 14), xs = Math.max(4, r * 0.45), xe = W - xs, fade = Math.max(16, r * 0.8), up = 2;
    const env = (x) => { const a = Math.min(1, (x - xs) / fade), b = Math.min(1, (xe - x) / fade); return Math.max(0, Math.min(a, b)); };
    const edge = (x) => up - cornerDrop(x, W, r) * 0.9;
    let rim = [], rimB = [];
    for (let x = xs; x <= xe + 0.01; x += 6) { rim.push([x, edge(x)]); }
    for (let x = xe; x >= xs - 0.01; x -= 6) { rimB.push([x, edge(x) + 2.2 + 1.3 * Math.sin(x * 0.13 + seed) * env(x)]); }
    const rimPath = `${smoothPath(rim)} ${smoothPath(rimB).replace(/^M/, 'L')} Z`;
    const ice = [], drips = [];
    let x = xs + 3 + R() * 5;
    while (x < xe - 3) {
      const k = env(x), roll = R();
      const l = L * k * (roll < 0.18 ? 0.75 + R() * 0.25 : roll < 0.55 ? 0.35 + R() * 0.35 : 0.1 + R() * 0.2);
      if (l > 2) {
        const w = Math.min(7.5, 2.2 + l * 0.14), y0 = edge(x) + 1, tipX = x + (R() - 0.5) * 1.6, bulge = (R() - 0.5) * 0.8;
        const d = `M${(x - w / 2).toFixed(1)} ${y0.toFixed(1)} C${(x - w * 0.42 + bulge).toFixed(1)} ${(y0 + l * 0.35).toFixed(1)} ${(tipX - w * 0.12).toFixed(1)} ${(y0 + l * 0.75).toFixed(1)} ${tipX.toFixed(1)} ${(y0 + l).toFixed(1)}`
          + ` C${(tipX + w * 0.12).toFixed(1)} ${(y0 + l * 0.75).toFixed(1)} ${(x + w * 0.42 + bulge).toFixed(1)} ${(y0 + l * 0.35).toFixed(1)} ${(x + w / 2).toFixed(1)} ${y0.toFixed(1)} Z`;
        ice.push(`<path d='${d}' fill='url(#ig)'/><path d='M${(x - w * 0.22).toFixed(1)} ${(y0 + 0.6).toFixed(1)} Q${(x - w * 0.18).toFixed(1)} ${(y0 + l * 0.45).toFixed(1)} ${(tipX - 0.2).toFixed(1)} ${(y0 + l * 0.82).toFixed(1)}' stroke='#fff' stroke-width='.7' fill='none' opacity='.75' stroke-linecap='round'/>`);
        if (l > L * 0.55 && drips.length < Math.max(2, W / 120) && R() < 0.5) drips.push(`<circle class='drip' cx='${tipX.toFixed(1)}' cy='${(y0 + l + 1.6).toFixed(1)}' r='1.5' fill='#e6f6ff' style='animation-delay:${(-R() * 4.2).toFixed(2)}s'/>`);
      }
      x += 4 + R() * 9 + (l > L * 0.6 ? 3 : 0);
    }
    const svgTxt = `<svg viewBox='0 0 ${W} ${H}' preserveAspectRatio='none' aria-hidden='true'><defs>
      <linearGradient id='ig' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#ffffff' stop-opacity='.96'/><stop offset='.45' stop-color='#dff1ff' stop-opacity='.78'/><stop offset='1' stop-color='#9fd2ff' stop-opacity='.28'/></linearGradient>
      <linearGradient id='ir' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#ffffff'/><stop offset='1' stop-color='#cfe6ff'/></linearGradient></defs>
      ${ice.join('')}<path d='${rimPath}' fill='url(#ir)' opacity='.95'/>${drips.join('')}</svg>`;
    return { svg: svgTxt, h: H, top: up + 1 };
  }

  const TEMPLATE = `
<div class="root"><div class="frame">
  <div class="halo"><i class="ring"></i></div><div class="halo h2"><i class="ring"></i></div>
  <i class="reflect"></i>
  <div class="glass">
    <div class="bgimg"></div>
    <div class="tex-wrap"><div class="tex"></div></div>
    <div class="inner"><i class="ring"></i></div>
    <canvas class="fxc"></canvas>
    <div class="glare"></div><div class="irid"></div><div class="sweep"></div><div class="scanbar"></div><i class="spot"></i><i class="grain"></i>
    <div class="spec"></div><div class="spec b"></div><div class="engrave"></div>
    <div class="content"><div class="native"></div><slot></slot></div>
  </div>
  <div class="edge c1"></div><div class="edge c2"></div><div class="edge main"></div>
  <div class="progw"><div class="prog"></div></div><i class="march"></i><i class="glint"></i><i class="pulsering"></i>
  <i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>
  <i class="led"></i>
  <canvas class="fxo"></canvas><i class="snowcap"></i><i class="icicles"></i>
</div></div>`;

  const fxEvList = (v) => (Array.isArray(v) ? v : isNil(v) ? [] : String(v).split(/[\s,]+/)).filter((x) => EVENT_FX.includes(x));
  const fxList = (v) => (Array.isArray(v) ? v : isNil(v) ? [] : String(v).split(/[\s,]+/)).map((x) => String(x).trim()).filter((x) => FX_KEYS.includes(x));

  /* ═════════════════════════ ОБОЛОЧКА ═════════════════════════ */
  class AfxGlassShell extends HTMLElement {
    constructor() {
      super();
      this._cfg = {}; this._hass = null; this._sig = null; this._fx = null; this._visible = true;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `<style>${CSS_TEXT}</style>${TEMPLATE}`;
      const $ = (s) => this.shadowRoot.querySelector(s);
      this._root = $('.root'); this._snow = $('.snowcap'); this._ice = $('.icicles');
      this._frame = $('.frame'); this._glass = $('.glass'); this._canvas = $('.fxc'); this._canvasO = $('.fxo'); this._nativeEl = $('.native'); this._engrave = $('.engrave');
      ['_onMove', '_onLeave', '_onDown', '_onUp'].forEach((m) => { this[m] = this[m].bind(this); });
    }

    connectedCallback() {
      this.addEventListener('pointermove', this._onMove);
      this.addEventListener('pointerleave', this._onLeave);
      this.addEventListener('pointerdown', this._onDown);
      this.addEventListener('pointerup', this._onUp);
      this.addEventListener('pointercancel', this._onUp);
      this.style.setProperty('--afx-sync', `-${Date.now() % 3600000}ms`);
      if ('IntersectionObserver' in window) {
        this._io = new IntersectionObserver(([en]) => {
          this._visible = en.isIntersecting;
          this._frame.classList.toggle('paused', !en.isIntersecting);
          if (this._fx) this._fx.setVisible(en.isIntersecting);
          if (this._fxo) this._fxo.setVisible(en.isIntersecting);
        }, { rootMargin: '80px' });
        this._io.observe(this);
      }
      if (typeof ResizeObserver !== 'undefined') { this._ro = new ResizeObserver(() => this._fit()); this._ro.observe(this); }
      Ticker.add(this);
      if (this._native) this._native.start();
      if (this._cfg.ignite !== false && !this._ignited && !reduceMotion(this._cfg)) {
        this._ignited = true;
        this._frame.classList.add('ignite');
        setTimeout(() => this._frame.classList.remove('ignite'), 1400);
      }
      this._apply();
    }

    disconnectedCallback() {
      this.removeEventListener('pointermove', this._onMove);
      this.removeEventListener('pointerleave', this._onLeave);
      this.removeEventListener('pointerdown', this._onDown);
      this.removeEventListener('pointerup', this._onUp);
      this.removeEventListener('pointercancel', this._onUp);
      if (this._io) this._io.disconnect();
      if (this._ro) this._ro.disconnect();
      Ticker.remove(this);
      if (this._native) this._native.stop();
      if (this._fx) { this._fx.destroy(); this._fx = null; }
      if (this._fxo) { this._fxo.destroy(); this._fxo = null; }
    }

    set config(c) {
      const prev = this._cfg || {};
      this._cfg = c || {}; this._sig = null; this._apply();
      if (Object.keys(prev).length && this.isConnected) {
        const on = (k) => !!this._cfg[k] && !prev[k];
        if (on('ignite') || (this._cfg.ignite !== false && prev.ignite === false)) { this._frame.classList.add('ignite'); setTimeout(() => this._frame.classList.remove('ignite'), 1400); }
        if (on('tilt')) this._demoTilt();
        if (on('jelly')) this._jelly();
        if (on('state_pulse')) this._pulse();
        if ((this._cfg.hover !== false && prev.hover === false)) { this._frame.classList.add('touchpress'); setTimeout(() => this._frame.classList.remove('touchpress'), 700); }
        if ((this._cfg.tap_flash !== false && prev.tap_flash === false)) { const r = this._glass.getBoundingClientRect(); this._flashAt(r.width / 2, r.height / 2); }
        if (on('haptic') && navigator.vibrate) { try { navigator.vibrate(20); } catch (e) { /* нет */ } }
      }
    }
    _demoTilt() {
      const s = this._frame.style, m = num(this._cfg.tilt_max, DEFAULTS.tilt_max), seq = [[0.2, 0.9], [0.85, 0.2], [0.8, 0.85], [0.5, 0.5]];
      seq.forEach(([x, y], i) => setTimeout(() => { s.setProperty('--afx-rx', `${((0.5 - y) * m).toFixed(2)}deg`); s.setProperty('--afx-ry', `${((x - 0.5) * m).toFixed(2)}deg`); if (i === seq.length - 1) { s.removeProperty('--afx-rx'); s.removeProperty('--afx-ry'); } }, i * 260));
    }
    _jelly() {
      const r = this._root; r.classList.remove('jelly'); void r.offsetWidth; r.classList.add('jelly');
      clearTimeout(this._jt); this._jt = setTimeout(() => r.classList.remove('jelly'), 650);
    }
    _pulse() {
      const f = this._frame; f.classList.remove('pulsing'); void f.offsetWidth; f.classList.add('pulsing');
      clearTimeout(this._pt); this._pt = setTimeout(() => f.classList.remove('pulsing'), 1050);
    }
    _flashAt(x, y) {
      const fl = document.createElement('i');
      fl.className = 'flash'; fl.style.left = `${x}px`; fl.style.top = `${y}px`;
      this._glass.appendChild(fl);
      fl.addEventListener('animationend', () => fl.remove(), { once: true });
      setTimeout(() => fl.remove(), 1200);
    }
    /** Снежная шапка и сосульки: рисуются под размер карточки и её скругления */
    _winter() {
      const w = this._winterOn || {};
      if (!w.snow && !w.ice) return;
      const W = Math.round(this._frame.offsetWidth);
      if (W < 20) return;
      const r = Math.min(parseFloat(getComputedStyle(this).getPropertyValue('--afx-r')) || 24, W / 2);
      const c = this._cfg, depth = clamp(num(c.snow_depth, 1), 0.4, 2.2), len = clamp(num(c.icicle_length, 1), 0.3, 2.5);
      const seed = [...String(c.entity || c.title || 'afx')].reduce((a, ch) => (a * 31 + ch.charCodeAt(0)) % 2147483646, 7) + 1;
      if (w.snow) { const k = `${W}|${r}|${depth}|${seed}`; if (k !== this._snowKey) { this._snowKey = k; const g = snowSVG(W, r, depth, seed); this._snow.style.top = `${-g.top}px`; this._snow.style.height = `${g.h}px`; this._snow.innerHTML = g.svg; } }
      if (w.ice) { const k = `${W}|${r}|${len}|${seed}`; if (k !== this._iceKey) { this._iceKey = k; const g = icicleSVG(W, r, len, seed); this._ice.style.top = `calc(100% - ${g.top}px)`; this._ice.style.height = `${g.h}px`; this._ice.innerHTML = g.svg; } }
    }
    get config() { return this._cfg; }
    set hass(h) {
      this._hass = h;
      if (this._native && this._native.changed(h)) this._native.update();
      const sig = this._signature();
      if (sig === this._sig) return;
      this._sig = sig;
      const ent = this._entity(this._cfg.entity), st = ent ? ent.state : undefined, evs = [];
      if (this._prevState !== undefined && st !== undefined && st !== this._prevState) {
        evs.push('change');
        const was = !INACTIVE.has(this._prevState), is = !INACTIVE.has(st);
        if (!was && is) evs.push('on');
        if (was && !is) evs.push('off');
      }
      this._prevState = st;
      this._apply();
      evs.forEach((k) => this._fireEvent(k));
    }
    get hass() { return this._hass; }

    _ids() {
      const c = this._cfg;
      return [c.entity, c.alert && c.alert.entity, c.fx_entity, c.progress_entity, c.bpm_entity, c.value_colors && c.value_colors.entity, isNil(c.night_dim) ? null : 'sun.sun']
        .filter(Boolean);
    }
    _signature() {
      const h = this._hass;
      if (!h || !h.states) return '';
      return this._ids().map((id) => {
        const e = h.states[id];
        if (!e) return '-';
        const a = e.attributes || {};
        return [e.state, a.brightness, a.rgb_color, a[this._cfg.progress_attribute], a[this._cfg.fx_attribute],
          this._cfg.alert && a[this._cfg.alert.attribute], this._cfg.value_colors && a[this._cfg.value_colors.attribute]].join('|');
      }).join(';');
    }
    _entity(id) { return this._hass && this._hass.states && id ? this._hass.states[id] : null; }
    _num(id, attr) {
      const e = this._entity(id);
      if (!e) return NaN;
      return parseFloat(attr ? e.attributes[attr] : e.state);
    }

    _alertActive() {
      const a = this._cfg.alert;
      if (!a) return false;
      const e = this._entity(a.entity || this._cfg.entity);
      if (!e) return false;
      const v = a.attribute ? e.attributes[a.attribute] : e.state;
      if (!isNil(a.state) && [].concat(a.state).map(String).includes(String(v))) return true;
      const n = parseFloat(v);
      if (!isNaN(n)) {
        if (!isNil(a.above) && n > Number(a.above)) return true;
        if (!isNil(a.below) && n < Number(a.below)) return true;
      }
      return false;
    }

    /** Возвращает [tl, mid, br] как массивы rgb или null (тогда цвет из темы) */
    _colors(alert) {
      const c = this._cfg, ent = this._entity(c.entity);
      const triOf = (v) => {
        if (isNil(v)) return null;
        if (typeof v === 'string' && PRESETS[v]) return PRESETS[v].map(parseColor);
        if (Array.isArray(v) && v.length && typeof v[0] !== 'number') { const t = v.map(parseColor); return [t[0], t[1] || t[0], t[2] || t[1] || t[0]]; }
        const rgb = parseColor(v);
        return rgb ? triadFromRgb(rgb) : null;
      };
      if (alert) return triOf(c.alert.color || '#ff2d55');
      if (c.light_glow && ent && ent.state === 'on' && Array.isArray(ent.attributes.rgb_color)) return triadFromRgb(ent.attributes.rgb_color.slice(0, 3));
      const vc = c.value_colors;
      if (vc && Array.isArray(vc.colors) && vc.colors.length > 1) {
        const v = this._num(vc.entity || c.entity, vc.attribute);
        if (!isNaN(v)) {
          const cols = vc.colors.map(parseColor).filter(Boolean);
          if (cols.length > 1) {
            const t = clamp((v - num(vc.min, 0)) / ((num(vc.max, 100) - num(vc.min, 0)) || 1), 0, 1) * (cols.length - 1);
            const i = Math.min(Math.floor(t), cols.length - 2);
            return triadFromRgb(mixRgb(cols[i], cols[i + 1], t - i).map(Math.round));
          }
        }
      }
      if (c.state_colors && ent) { const t = triOf(c.state_colors[ent.state] ?? c.state_colors.default); if (t) return t; }
      const p = PRESETS[c.preset];
      const g = Array.isArray(c.glow) && c.glow.length && typeof c.glow[0] !== 'number' ? c.glow : null;
      const slot = (key, i) => parseColor(c[key]) || (g && parseColor(g[i])) || (p && parseColor(p[i])) || null;
      return [slot('glow_tl', 0), slot('glow_mid', 1), slot('glow_br', 2)];
    }

    _isLite() {
      const p = this._cfg.performance || DEFAULTS.performance;
      if (p === 'lite') return true;
      if (p === 'high') return false;
      return (navigator.hardwareConcurrency || 8) <= 2 || (navigator.deviceMemory || 8) <= 2;
    }

    _apply() {
      const c = this._cfg, f = this._frame, st = this.style;
      const set = (k, v) => (isNil(v) ? st.removeProperty(k) : st.setProperty(k, String(v)));
      const cls = (n, on) => f.classList.toggle(n, !!on);
      const alert = this._alertActive();
      const ent = this._entity(c.entity);

      /* цвета */
      const cols = this._colors(alert);
      this._rgb = cols;
      ['--afx-tl', '--afx-mid', '--afx-br'].forEach((k, i) => set(k, cols[i] ? rgbStr(cols[i]) : null));

      /* приглушение */
      let dim = 1;
      if (ent) {
        if (c.dim_inactive !== false && INACTIVE.has(ent.state)) dim *= num(c.inactive_dim, DEFAULTS.inactive_dim);
        if (c.light_glow && ent.state === 'on' && !isNil(ent.attributes.brightness)) dim *= 0.4 + 0.6 * (Number(ent.attributes.brightness) / 255);
      }
      const sun = this._entity('sun.sun');
      if (!isNil(c.night_dim) && sun && sun.state === 'below_horizon') dim *= num(c.night_dim, 1);
      if (alert) dim = 1;
      this._dim = dim;
      set('--afx-dim', dim.toFixed(3));

      /* числа */
      const glow = isNil(c.glow_intensity) ? null : Number(c.glow_intensity);
      set('--afx-glow', alert ? Math.max(glow ?? 1, 1.35) : glow);
      set('--afx-spread', px(c.glow_spread));
      set('--afx-edge', px(c.edge_width));
      set('--afx-ga', isNil(c.glow_angle) ? null : `${c.glow_angle}deg`);
      set('--afx-inner', c.inner_glow);
      set('--afx-alpha', c.opacity);
      set('--afx-tint', parseColor(c.tint) ? rgbStr(parseColor(c.tint)) : null);
      set('--afx-blur', px(c.blur));
      set('--afx-sat', isNil(c.saturate) ? null : `${c.saturate}%`);
      set('--afx-glare', c.glare_intensity);
      set('--afx-glare-angle', isNil(c.glare_angle) ? null : `${c.glare_angle}deg`);
      set('--afx-glare-tint', isNil(c.glare_tint) ? null : `${Math.round(clamp(Number(c.glare_tint), 0, 1) * 100)}%`);
      set('--afx-r', px(c.radius));
      set('--afx-speed', c.animation_speed);
      set('--afx-hue-base', isNil(c.hue_shift) ? null : `${c.hue_shift}deg`);
      set('--afx-engrave-op', c.engrave_opacity);

      /* шрифт, размер, цвет и читаемость текста */
      if (c.font) FontLoader.load(c.font, c.font_url);
      const fam = c.font ? `"${String(c.font).replace(/["\\]/g, '')}", var(--afx-font-fallback, Roboto, Noto, sans-serif)` : null;
      ['--ha-font-family-body', '--ha-font-family-heading', '--primary-font-family', '--paper-font-common-base_-_font-family', '--mdc-typography-font-family'].forEach((k) => set(k, fam));
      st.fontFamily = fam || '';
      const fs = isNil(c.font_scale) ? 1 : Number(c.font_scale) || 1;
      Object.entries(HA_FONT_SIZES).forEach(([k, v]) => set(`--ha-font-size-${k}`, fs !== 1 ? `${(v * fs).toFixed(1)}px` : null));
      [['body1', 14], ['subhead', 16], ['title', 20], ['headline', 24]].forEach(([k, v]) => set(`--paper-font-${k}_-_font-size`, fs !== 1 ? `${(v * fs).toFixed(1)}px` : null));
      set('--afx-fs', fs !== 1 ? fs : null);
      const tc = parseColor(c.text_color);
      set('--primary-text-color', tc ? rgbStr(tc) : null);
      set('--secondary-text-color', tc ? rgbStr(tc, 0.7) : null);
      st.color = tc ? rgbStr(tc) : '';

      /* свой цвет фона и прозрачность, автоконтраст текста */
      const bgc = parseColor(c.bg_color), bgc2 = parseColor(c.bg_color2);
      cls('custom-bg', !!bgc);
      set('--afx-bgc', bgc ? rgbStr(bgc) : null); set('--afx-bgc2', bgc2 ? rgbStr(bgc2) : null);
      set('--afx-bgo', bgc ? clamp(num(c.bg_opacity, 0.85), 0, 1) : null);
      set('--afx-bgang', bgc2 ? `${num(c.bg_angle, 165)}deg` : null);
      if (!tc && bgc && c.auto_contrast !== false) {
        const lum = (q) => (0.2126 * q[0] + 0.7152 * q[1] + 0.0722 * q[2]) / 255;
        const L = (lum(bgc) + (bgc2 ? lum(bgc2) : lum(bgc))) / 2, op = clamp(num(c.bg_opacity, 0.85), 0, 1);
        const dark = L > 0.6 && op >= 0.45;
        set('--primary-text-color', dark ? '#0f172a' : null);
        set('--secondary-text-color', dark ? 'rgba(15,23,42,.66)' : null);
        st.color = dark ? '#0f172a' : '';
        cls('on-light', dark);
      } else cls('on-light', false);
      cls('leg-soft', c.legibility === 'soft'); cls('leg-strong', c.legibility === 'strong');
      set('--afx-zoom', c.content_scale); set('--afx-pad', px(c.content_padding));

      /* нативный конструктор */
      const hasNative = !!(c.content && Array.isArray(c.content.blocks) && c.content.blocks.length);
      cls('has-native', hasNative);
      set('--afx-valign', { center: 'center', bottom: 'flex-end', between: 'space-between' }[c.valign] || null);
      if (hasNative) { if (!this._native) this._native = new NativeRenderer(this, this._nativeEl); this._native.set(c.content); if (this._hass) this._native.changed(this._hass); }
      else if (this._native) { this._native.set(null); }

      /* фоновое изображение */
      cls('bg-on', !isNil(c.background_image));
      set('--afx-bg-img', isNil(c.background_image) ? null : `url(${JSON.stringify(String(c.background_image))})`);
      set('--afx-bg-dim', c.background_dim); set('--afx-bg-blur', px(c.background_blur));

      /* зима и праздник */
      const season = !!c.seasonal && isNewYearSeason();
      cls('snowcap-on', c.snow_cap || season); cls('icicles-on', c.icicles || season);
      this._winterOn = { snow: !!(c.snow_cap || season), ice: !!(c.icicles || season) };
      this._timeKey = [season, !!c.seasonal && isNewYearNight(), c.fx_schedule ? inSchedule(c.fx_schedule) : ''].join();

      /* текстура */
      const t = TEXTURES[c.texture];
      cls('has-tex', t);
      set('--afx-tex', t ? t.img : null);
      set('--afx-tex-size', t ? t.size(num(c.texture_scale, 1)) : null);
      set('--afx-tex-op', c.texture_opacity);
      set('--afx-tex-color', parseColor(c.texture_color) ? rgbStr(parseColor(c.texture_color)) : null);
      set('--afx-tex-blend', c.texture_blend);
      cls('tex-fade', c.texture_fade);
      cls('tex-lit', c.texture_lit);

      /* режимы */
      const edge = c.edge_mode || DEFAULTS.edge_mode;
      cls('edge-rotate', edge === 'rotate'); cls('edge-pulse', edge === 'pulse');
      const gm = c.glare_mode === 'none' ? 'off' : (c.glare_mode || DEFAULTS.glare_mode);
      ['follow', 'sweep', 'off'].forEach((m) => cls(`glare-${m}`, gm === m));
      cls('hover', c.hover !== false);
      ['breathe', 'scan', 'corners', 'chromatic', 'parallax', 'spotlight', 'neon', 'marching', 'depth', 'bare'].forEach((k) => cls(k, !!c[k]));
      cls('no-edge', !!c.hide_edge); cls('no-glow', !!c.hide_glow); cls('no-bg', !!c.hide_bg);
      cls('grain-on', !!c.grain); cls('glint-on', !!c.glint);
      cls('force-motion', motionForced(c));
      this._root.classList.toggle('float', !!c.float); this._root.classList.toggle('sway', !!c.sway);
      if (c.grain) set('--afx-grain-img', TEXTURES.noise.img);
      const sk = ent ? `${ent.entity_id}:${ent.state}` : '';
      if (c.state_pulse && this._lastSt && sk && sk !== this._lastSt) this._pulse();
      this._lastSt = sk;
      cls('text-glow', c.text_glow);
      cls('irid-on', c.iridescent); cls('reflect-on', c.reflection);
      cls('hue-cycle', c.hue_cycle); cls('hue', c.hue_cycle || (!isNil(c.hue_shift) && Number(c.hue_shift) !== 0));
      cls('fx-front', c.fx_layer === 'front');
      cls('alert', alert);
      const lite = this._isLite(); this._lite = lite;
      cls('lite', lite);

      /* ритм музыки */
      const beatOn = !!c.beat && !alert && (!ent || ent.state === 'playing');
      cls('beat', beatOn);
      set('--afx-beat', beatOn ? `${(60 / clamp(num(c.beat_bpm, 120), 30, 240)).toFixed(3)}s` : null);

      /* гравировка */
      cls('engrave-on', !isNil(c.engrave));
      if (this._engrave.textContent !== String(c.engrave ?? '')) this._engrave.textContent = String(c.engrave ?? '');

      /* прогресс-кант */
      const pv = c.progress_entity ? this._num(c.progress_entity, c.progress_attribute) : NaN;
      cls('has-prog', !isNaN(pv));
      this._level = undefined;
      if (!isNaN(pv)) {
        const lo = num(c.progress_min, 0), hi = num(c.progress_max, 100);
        this._level = clamp((pv - lo) / ((hi - lo) || 1), 0, 1);
        set('--afx-p', `${(this._level * 100).toFixed(2)}%`);
      } else if (c.fx_entity) {
        const fv = this._num(c.fx_entity, c.fx_attribute);
        if (!isNaN(fv)) this._level = clamp((fv - num(c.fx_min, 0)) / ((num(c.fx_max, 100) - num(c.fx_min, 0)) || 1), 0, 1);
      }

      /* светодиод */
      cls('led-on', c.led);
      let led = null;
      if (c.led) {
        if (alert) led = 'var(--afx-tl)';
        else if (ent && (ent.state === 'unavailable' || ent.state === 'unknown')) led = '#f59e0b';
        else if (ent && INACTIVE.has(ent.state)) led = 'rgba(148,163,184,.55)';
      }
      set('--afx-led', led);

      /* акцент */
      set('--primary-color', c.accent ? 'var(--afx-mid)' : null);
      set('--accent-color', c.accent ? 'var(--afx-br)' : null);
      set('--state-icon-active-color', c.accent ? 'var(--afx-tl)' : null);
      set('--state-active-color', c.accent ? 'var(--afx-mid)' : null);

      this._fit();
      this._beatOn = beatOn || (!!ent && ent.state === 'playing');
      this._syncFx(alert, ent, glow);
      if (alert && this._prevAlert === false) this._fireEvent('alert');
      this._prevAlert = alert;
    }

    /** Узкие карточки: скругление не больше трети высоты, чтобы текст не упирался в дугу */
    _fit() {
      const c = this._cfg;
      if (!this.isConnected) return;
      requestAnimationFrame(() => this._winter());
      const h = this.offsetHeight;
      if (!h) return;
      if (c.radius_auto === false) return;
      const theme = parseFloat(getComputedStyle(this).getPropertyValue('--afx-theme-radius')) || 24;
      const base = isNil(c.radius) ? theme : num(c.radius, 24);
      if (h < base * 3.2) this.style.setProperty('--afx-r', `${Math.max(6, Math.round(h * 0.3))}px`);
      else if (isNil(c.radius)) this.style.removeProperty('--afx-r');
      else this.style.setProperty('--afx-r', px(c.radius));
    }

    _tick() {
      const c = this._cfg, lim = num(c.idle_dim, 0);
      const idle = lim > 0 && Ticker.idleFor() > lim;
      if (idle !== !!this._idle) {
        this._idle = idle;
        this._frame.classList.toggle('idle', idle);
        [this._fx, this._fxo].forEach((e) => e && e.setPaused(idle));
      }
      const key = [!!c.seasonal && isNewYearSeason(), !!c.seasonal && isNewYearNight(), c.fx_schedule ? inSchedule(c.fx_schedule) : ''].join();
      if (key !== this._timeKey) this._apply();
    }

    _fireEvent(kind, x, y) {
      const ev = this._cfg.events;
      const list = ev && ev[kind] ? [].concat(ev[kind]).filter((n) => EVENT_FX.includes(n)) : [];
      if (!list.length || this._lite || reduceMotion() || !this._fx) return;
      list.forEach((n) => this._fx.spawn(n, x, y));
    }

    _fxNames(alert, ent) {
      const c = this._cfg;
      const active = ent ? !INACTIVE.has(ent.state) : true;
      const when = c.fx_when || DEFAULTS.fx_when;
      const ok = when === 'always' || (when === 'active' && active) || (when === 'inactive' && !active) || (when === 'alert' && alert);
      let names = ok && (!c.fx_schedule || inSchedule(c.fx_schedule)) ? fxList(c.fx) : [];
      if (c.fx_entity && names.length) {
        const v = this._num(c.fx_entity, c.fx_attribute);
        if (!isNaN(v)) {
          const k = clamp((v - num(c.fx_min, 0)) / ((num(c.fx_max, 100) - num(c.fx_min, 0)) || 1), 0, 1);
          this._fxScale = k * 1.5;
          if (k <= 0.001) names = [];
        } else this._fxScale = 1;
      } else this._fxScale = 1;
      if (alert && c.alert) names = names.concat(fxList(c.alert.fx));
      return [...new Set(names)];
    }

    _themeRgb(i) {
      if (!this.isConnected) return null;
      const v = getComputedStyle(this).getPropertyValue(['--afx-tl', '--afx-mid', '--afx-br'][i]);
      return parseColor(v);
    }

    _syncFx(alert, ent, glow) {
      const c = this._cfg, rm = reduceMotion(c);
      let names = [];
      if (!this._lite) {
        if (CANVAS_TEXTURES.includes(c.texture)) names.push(c.texture);
        if (!rm) names = names.concat(this._fxNames(alert, ent));
        if (!rm && c.garland) names.push('garland');
        if (!rm && c.seasonal) { if (isNewYearSeason()) names.push('snowfall', 'garland'); if (isNewYearNight()) names.push('fireworks'); }
      }
      names = [...new Set(names)];
      const inner = names.filter((n) => !FX_IMPL[n].outer), outer = names.filter((n) => FX_IMPL[n].outer);
      const hasEvents = !!c.events && Object.values(c.events).some((v) => fxEvList(v).length);
      const needInner = inner.length > 0 || (!this._lite && (c.tap_burst || hasEvents));
      this._frame.classList.toggle('has-outer', outer.length > 0);
      if (!needInner && this._fx) this._fx.configure([], {});
      if (!outer.length && this._fxo) this._fxo.configure([], {});
      if (!needInner && !outer.length) return;
      if (!this.isConnected) return;
      const fallback = [[56, 189, 248], [129, 140, 248], [192, 132, 252]];
      const cols = [0, 1, 2].map((i) => (this._rgb && this._rgb[i]) || this._themeRgb(i) || fallback[i]);
      const q = c.fx_quality || DEFAULTS.fx_quality;
      const bpmV = c.bpm_entity ? this._num(c.bpm_entity) : NaN;
      const opts = {
        density: num(c.fx_density, 1) * (this._fxScale ?? 1),
        speed: num(c.fx_speed, 1) * num(c.animation_speed, 1),
        opacity: num(c.fx_opacity, DEFAULTS.fx_opacity),
        colors: c.fx_colors || DEFAULTS.fx_colors,
        fps: q === 'low' ? 30 : q === 'high' ? 60 : 50,
        quality: q,
        texOpacity: Math.min(1, num(c.texture_opacity, DEFAULTS.texture_opacity) * 5),
        texScale: num(c.texture_scale, 1),
        texSpeed: num(c.texture_speed, 1),
        lit: clamp(Math.min(1.4, glow ?? 1) * (this._dim ?? 1), 0, 1.4),
        radius: parseFloat(getComputedStyle(this).getPropertyValue('--afx-r')) || num(c.radius, 24),
        static: rm,
        bpm: !isNaN(bpmV) ? bpmV : num(c.beat_bpm, 120),
        beatOn: !!this._beatOn,
        level: this._level,
        garlandColors: c.garland_colors || DEFAULTS.garland_colors,
        garlandMode: c.garland_mode || DEFAULTS.garland_mode,
        garlandEdges: c.garland_edges || DEFAULTS.garland_edges,
      };
      if (needInner) {
        if (!this._fx) { this._fx = new FxEngine(this._canvas, this); this._fx.setVisible(this._visible); this._fx.setPaused(!!this._idle); }
        this._fx.setColors(cols); this._fx.configure(inner, opts);
      }
      if (outer.length) {
        if (!this._fxo) { this._fxo = new FxEngine(this._canvasO, this); this._fxo.setVisible(this._visible); this._fxo.setPaused(!!this._idle); }
        this._fxo.setColors(cols); this._fxo.configure(outer, { ...opts, pad: 18 });
      }
    }

    _glitch(sec) {
      this._frame.classList.add('glitching');
      clearTimeout(this._gt);
      this._gt = setTimeout(() => this._frame.classList.remove('glitching'), sec * 1000);
    }

    _onMove(e) {
      const c = this._cfg;
      const follow = (c.glare_mode || DEFAULTS.glare_mode) === 'follow';
      const tilt = c.tilt && (e.pointerType === 'mouse' || this._touchDown) && !this._lite;
      const lf = c.light_follow, ir = c.iridescent;
      if (this._fx && this._fx.layers.some((l) => l.name === 'motion_trail' || l.name === 'magnet')) {
        const g = this._glass.getBoundingClientRect();
        if (g.width && g.height) this._fx.move(((e.clientX - g.left) * this._canvas.clientWidth) / g.width, ((e.clientY - g.top) * this._canvas.clientHeight) / g.height);
      }
      const px2 = c.parallax, sp = c.spotlight;
      if (!follow && !tilt && !lf && !ir && !px2 && !sp) return;
      const r = this.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      cancelAnimationFrame(this._raf);
      this._raf = requestAnimationFrame(() => {
        const s = this._frame.style;
        if (follow || ir || sp) { s.setProperty('--afx-mx', `${(x * 100).toFixed(1)}%`); s.setProperty('--afx-my', `${(y * 100).toFixed(1)}%`); }
        if (px2) { s.setProperty('--afx-px', (x - 0.5).toFixed(3)); s.setProperty('--afx-py', (y - 0.5).toFixed(3)); }
        if (tilt) {
          const m = num(c.tilt_max, DEFAULTS.tilt_max);
          s.setProperty('--afx-rx', `${((0.5 - y) * m).toFixed(2)}deg`);
          s.setProperty('--afx-ry', `${((x - 0.5) * m).toFixed(2)}deg`);
        }
        if (lf) {
          const ang = (Math.atan2(x - 0.5, -(y - 0.5)) * 180) / Math.PI;
          s.setProperty('--afx-ga', `${(ang + 180).toFixed(1)}deg`);
        }
      });
    }

    _onLeave() {
      cancelAnimationFrame(this._raf);
      const s = this._frame.style;
      ['--afx-rx', '--afx-ry', '--afx-mx', '--afx-my', '--afx-ga', '--afx-px', '--afx-py'].forEach((k) => s.removeProperty(k));
      if (this._fx) this._fx.leave();
      this._touchDown = false;
      this._frame.classList.remove('pressed', 'touchpress');
    }

    _onUp(e) {
      this._frame.classList.remove('pressed', 'touchpress');
      if (this._touchDown) { this._touchDown = false; const s = this._frame.style; ['--afx-rx', '--afx-ry', '--afx-px', '--afx-py'].forEach((k) => s.removeProperty(k)); }
    }

    _onDown(e) {
      const c = this._cfg;
      this._frame.classList.add('pressed');
      if (e.pointerType !== 'mouse') { this._touchDown = true; this._frame.classList.add('touchpress'); if (c.tilt || c.parallax || c.spotlight) this._onMove(e); }
      if (c.haptic && navigator.vibrate) { try { navigator.vibrate(8); } catch (err) { /* нет вибро */ } }
      if (this._lite) return;
      const r = this._glass.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (c.tap_flash !== false) this._flashAt(x, y);
      if (c.jelly) this._jelly();
      if (this._fx && !reduceMotion(c)) {
        const sx = r.width ? this._canvas.clientWidth / r.width : 1, sy = r.height ? this._canvas.clientHeight / r.height : 1;
        this._fx.tap(x * sx, y * sy, !!c.tap_burst);
        this._fireEvent('tap', x * sx, y * sy);
      }
    }
  }

  window.addEventListener('afx-motion-changed', () => Ticker.set.forEach((sh) => { if (sh && sh._apply) { sh._sig = null; sh._apply(); } }));

  /* ═════════════════════════ КАРТОЧКА HA ═════════════════════════ */
  class AntarikfoxGlassCard extends AfxGlassShell {
    static getConfigElement() { return document.createElement(EDITOR); }
    static getStubConfig(hass) {
      return { preset: 'aurora', texture: 'plexus', fx: ['pollen'], card: { type: 'markdown', content: tr(detectLang(hass), 'ui', 'stub') } };
    }

    setConfig(config) {
      const hasContent = !!(config && config.content && Array.isArray(config.content.blocks));
      if (!config || (!config.card && !config.cards && !hasContent)) throw new Error(tr(detectLang(this._hass), 'ui', 'noCard'));
      this.config = config;
      const child = config.cards
        ? { type: config.layout === 'horizontal' ? 'horizontal-stack' : 'vertical-stack', cards: config.cards }
        : config.card || null;
      const key = JSON.stringify(child);
      if (key !== this._childKey) {
        this._childKey = key;
        if (child) this._build(child);
        else { this._token = Symbol('none'); if (this._child && this._child.parentNode === this) this._child.remove(); this._child = null; }
      }
    }

    async _build(conf) {
      const token = (this._token = Symbol('build'));
      let el;
      try {
        if (typeof window.loadCardHelpers !== 'function') {
          el = document.createElement('div');
          el.style.cssText = 'padding:16px;font-size:13px;opacity:.75;border:1px dashed rgba(255,255,255,.25);border-radius:14px;margin:12px';
          el.textContent = `⧉ ${conf.type || 'card'}${conf.entity ? ` · ${conf.entity}` : ''} — ${tr(detectLang(this._hass), 'ui', 'haCardHere') || 'this HA card renders inside Home Assistant'}`;
        } else {
          const helpers = await window.loadCardHelpers();
          if (token !== this._token) return;
          el = helpers.createCardElement(conf);
        }
      } catch (err) {
        if (token !== this._token) return;
        el = document.createElement('div');
        el.style.cssText = 'padding:16px;color:#ff8080;font:13px monospace';
        el.textContent = String(err && err.message ? err.message : err);
      }
      el.addEventListener('ll-rebuild', (ev) => { ev.stopPropagation(); this._build(conf); }, { once: true });
      if (this._hass) el.hass = this._hass;
      if (this._child && this._child.parentNode === this) this._child.replaceWith(el);
      else this.appendChild(el);
      this._child = el;
    }

    set hass(h) { super.hass = h; if (this._child) this._child.hass = h; }
    get hass() { return super.hass; }
    getCardSize() { return this._child && this._child.getCardSize ? this._child.getCardSize() : 3; }
    getGridOptions() { return this._child && this._child.getGridOptions ? this._child.getGridOptions() : { columns: 6, min_columns: 3, rows: 'auto' }; }
  }
  /* ═════════════════════════ ИМПОРТ СТАРЫХ КАРТОЧЕК ═════════════════════════ */
  /** Небольшой YAML-парсер для конфигураций карточек: словари, списки, блоки | и >, [..] и {..}, комментарии */
  const YAML = {
    parse(src) {
      const text = String(src || '').replace(/\t/g, '  ');
      const t0 = text.trim();
      if (/^[[{]/.test(t0)) { try { return JSON.parse(t0); } catch (e) { /* не JSON — разбираем как YAML */ } }
      const lines = text.split(/\r?\n/);
      let i = 0;
      const stripComment = (s) => {
        let q = null;
        for (let k = 0; k < s.length; k++) {
          const ch = s[k];
          if (q) { if (ch === q && s[k - 1] !== '\\') q = null; }
          else if (ch === '"' || ch === "'") q = ch;
          else if (ch === '#' && (k === 0 || /\s/.test(s[k - 1]))) return s.slice(0, k).replace(/\s+$/, '');
        }
        return s.replace(/\s+$/, '');
      };
      const next = () => {
        while (i < lines.length) {
          const t = stripComment(lines[i]);
          if (t.trim() === '' || t.trim() === '---') { i++; continue; }
          return { ind: t.match(/^ */)[0].length, text: t.trim() };
        }
        return null;
      };
      const unq = (s) => {
        s = s.trim();
        if (/^".*"$/.test(s)) { try { return JSON.parse(s); } catch (e) { return s.slice(1, -1); } }
        if (/^'.*'$/.test(s)) return s.slice(1, -1).replace(/''/g, "'");
        return s;
      };
      const splitTop = (s) => {
        const out = []; let d = 0, q = null, cur = '';
        for (const ch of s) {
          if (q) { if (ch === q) q = null; cur += ch; continue; }
          if (ch === '"' || ch === "'") { q = ch; cur += ch; continue; }
          if (ch === '[' || ch === '{') d++;
          if (ch === ']' || ch === '}') d--;
          if (ch === ',' && d === 0) { out.push(cur); cur = ''; } else cur += ch;
        }
        if (cur.trim() !== '') out.push(cur);
        return out;
      };
      const findColon = (s) => {
        let q = null;
        for (let k = 0; k < s.length; k++) {
          const ch = s[k];
          if (q) { if (ch === q) q = null; continue; }
          if (ch === '"' || ch === "'") { if (k === 0 || /[\s,[{]/.test(s[k - 1])) q = ch; continue; }
          if (ch === ':' && (k === s.length - 1 || s[k + 1] === ' ')) return k;
        }
        return -1;
      };
      const scalar = (v) => {
        v = String(v).trim().replace(/^!\S+\s*/, '');
        if (v === '' || v === '~' || v === 'null') return null;
        if (/^".*"$/.test(v) || /^'.*'$/.test(v)) return unq(v);
        if (v[0] === '[' && v.endsWith(']')) return splitTop(v.slice(1, -1)).map(scalar);
        if (v[0] === '{' && v.endsWith('}')) {
          const o = {};
          splitTop(v.slice(1, -1)).forEach((p) => { const c = findColon(p.trim()); if (c > 0) o[unq(p.trim().slice(0, c))] = scalar(p.trim().slice(c + 1)); });
          return o;
        }
        if (v === 'true') return true;
        if (v === 'false') return false;
        if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
        return v;
      };
      const isSeq = (t) => t === '-' || t.startsWith('- ');
      const block = (parentInd, style) => {
        const raw = [];
        while (i < lines.length) {
          const l = lines[i];
          if (l.trim() !== '' && l.match(/^ */)[0].length <= parentInd) break;
          raw.push(l); i++;
        }
        while (raw.length && raw[raw.length - 1].trim() === '') raw.pop();
        const bi = Math.min(...raw.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length));
        const body = raw.map((l) => l.slice(Number.isFinite(bi) ? bi : 0));
        return style === '>' ? body.join(' ').replace(/ {2,}/g, ' ') : body.join('\n');
      };
      let parseNode;
      const parseMap = (ind) => {
        const o = {};
        for (;;) {
          const l = next();
          if (!l || l.ind < ind || (l.ind === ind && isSeq(l.text))) break;
          if (l.ind > ind) { i++; continue; }
          const c = findColon(l.text);
          if (c < 0) { i++; continue; }
          const key = unq(l.text.slice(0, c));
          const val = l.text.slice(c + 1).trim();
          i++;
          if (val === '') {
            const n = next();
            o[key] = n && (n.ind > ind || (n.ind === ind && isSeq(n.text))) ? parseNode() : null;
          } else if (/^[|>][+-]?\d*$/.test(val)) o[key] = block(ind, val[0]);
          else o[key] = scalar(val);
        }
        return o;
      };
      const parseSeq = (ind) => {
        const arr = [];
        for (;;) {
          const l = next();
          if (!l || l.ind !== ind || !isSeq(l.text)) break;
          const rest = l.text.slice(1).replace(/^ +/, '');
          if (rest === '') { i++; arr.push(parseNode()); continue; }
          if (findColon(rest) > 0 && !/^["'[{]/.test(rest)) {
            lines[i] = ' '.repeat(ind + (l.text.length - rest.length)) + rest;
            arr.push(parseMap(ind + (l.text.length - rest.length)));
          } else if (/^[|>][+-]?\d*$/.test(rest)) { i++; arr.push(block(ind, rest[0])); }
          else { i++; arr.push(scalar(rest)); }
        }
        return arr;
      };
      parseNode = () => { const l = next(); if (!l) return null; return isSeq(l.text) ? parseSeq(l.ind) : parseMap(l.ind); };
      return parseNode();
    },

    dump(v, ind = 0) {
      const pad = '  '.repeat(ind);
      const fmtKey = (k) => (/^[\w.$-]+$/.test(k) ? k : JSON.stringify(k));
      const fmt = (x, d) => {
        if (x === null || x === undefined) return 'null';
        if (Array.isArray(x)) return '[]';
        if (typeof x === 'object') return '{}';
        if (typeof x !== 'string') return String(x);
        if (x.includes('\n')) return `${x.endsWith('\n') ? '|' : '|-'}\n${x.replace(/\n$/, '').split('\n').map((l) => (l ? '  '.repeat(d) + l : '')).join('\n')}`;
        if (x === '' || /^[\s#&*!|>'"%@`{}[\],?:-]|: | #|^(true|false|null|~|yes|no|on|off)$|^-?\d+(\.\d+)?$|\s$/i.test(x)) return JSON.stringify(x);
        return x;
      };
      const filled = (x) => x && typeof x === 'object' && (Array.isArray(x) ? x.length : Object.keys(x).length);
      if (Array.isArray(v)) {
        return v.map((x) => {
          if (filled(x) && !Array.isArray(x)) { const lines = YAML.dump(x, ind + 1).split('\n'); lines[0] = `${pad}- ${lines[0].slice((ind + 1) * 2)}`; return lines.join('\n'); }
          if (filled(x)) return `${pad}-\n${YAML.dump(x, ind + 1)}`;
          return `${pad}- ${fmt(x, ind + 1)}`;
        }).join('\n');
      }
      if (v && typeof v === 'object') {
        return Object.keys(v).filter((k) => v[k] !== undefined).map((k) => (filled(v[k]) ? `${pad}${fmtKey(k)}:\n${YAML.dump(v[k], ind + 1)}` : `${pad}${fmtKey(k)}: ${fmt(v[k], ind + 1)}`)).join('\n');
      }
      return pad + fmt(v, ind);
    },
  };

  /* ── Анализ чужой карточки ── */
  const ENTITY_RE = /\b(light|switch|media_player|climate|sensor|binary_sensor|alarm_control_panel|weather|fan|cover|lock|camera|vacuum|input_boolean|person|water_heater|humidifier|scene|script|automation|remote|device_tracker)\.[a-z0-9_]+/g;
  const COLOR_RE = /#(?:[0-9a-f]{6}|[0-9a-f]{3})\b|rgba?\(\s*\d+[\s,]+\d+[\s,]+\d+[^)]*\)|hsla?\([^)]*\)/gi;
  const CONFLICT_PROPS = ['background', 'background-color', 'background-image', 'border', 'border-color', 'border-width', 'border-style', 'border-radius', 'box-shadow', 'backdrop-filter', '-webkit-backdrop-filter'];
  const CONFLICT_RE = new RegExp(`(^|[;{\\s])(${CONFLICT_PROPS.map((p) => p.replace(/[-]/g, '\\-')).join('|')})\\s*:[^;{}]*;?`, 'gi');
  const DOMAIN_FX = {
    light: { style: { light_glow: true, led: true, events: { on: ['flash'], off: ['smoke'] } } },
    switch: { style: { led: true, events: { on: ['sparkle'] } } },
    input_boolean: { style: { led: true, events: { on: ['sparkle'] } } },
    media_player: { preset: 'synthwave', style: { beat: true, fx: ['equalizer'], fx_when: 'active', edge_mode: 'rotate' } },
    climate: { preset: 'ice', style: { texture: 'shards', texture_opacity: 0.12 } },
    water_heater: { preset: 'lava', style: { fx: ['air'], fx_when: 'active' } },
    humidifier: { preset: 'deep_sea', style: { fx: ['air'], fx_when: 'active' } },
    fan: { preset: 'arctic', style: { fx: ['vortex'], fx_when: 'active' } },
    alarm_control_panel: { preset: 'royal', style: { corners: true, led: true, alert: { state: 'triggered', fx: ['lightning'] }, events: { alert: ['shockwave'] } } },
    lock: { preset: 'gold_luxe', style: { corners: true, events: { change: ['ring'] } } },
    binary_sensor: { style: { led: true, events: { change: ['ring'] } } },
    weather: { preset: 'ocean', style: { fx: ['fog'], texture: 'waves', texture_lit: true } },
    camera: { preset: 'neon_city', style: { scan: true, corners: true } },
    vacuum: { preset: 'neon_city', style: { fx: ['magnet'], fx_when: 'active' } },
    cover: { preset: 'forest', style: { texture: 'weave', texture_opacity: 0.1 } },
    person: { preset: 'aurora', style: { events: { change: ['sparkle'] } } },
    sensor: { preset: 'matrix', style: { texture: 'plexus', texture_opacity: 0.12 } },
  };

  const walk = (v, fn, path = '') => {
    if (typeof v === 'string') fn(v, path);
    else if (Array.isArray(v)) v.forEach((x, k) => walk(x, fn, `${path}[${k}]`));
    else if (v && typeof v === 'object') Object.keys(v).forEach((k) => walk(v[k], fn, `${path}.${k}`));
  };
  const isImageDecl = (txt) => /url\(|image-set\(/i.test(String(txt));
  const stripDecls = (body, counter) => body.replace(CONFLICT_RE, (mm, pre) => { if (isImageDecl(mm)) { counter.img = (counter.img || 0) + 1; return mm; } counter.n++; return pre; });
  const stripCss = (css, counter) => css.replace(/(ha-card[^{]*\{)([^}]*)(\})/gi, (m, a, body, c) => a + stripDecls(body, counter) + c);
  const cleanCard = (card, counter) => {
    if (Array.isArray(card)) return card.map((x) => cleanCard(x, counter));
    if (!card || typeof card !== 'object') return card;
    const out = {};
    for (const [k, v] of Object.entries(card)) {
      if (k === 'card_mod' && v && typeof v === 'object') {
        const strip = (css) => (css.includes('{') ? stripCss(css, counter) : stripDecls(css, counter));
        const cm = { ...v };
        if (typeof cm.style === 'string') cm.style = strip(cm.style);
        else if (cm.style && typeof cm.style === 'object') cm.style = Object.fromEntries(Object.entries(cm.style).map(([sel, css]) => [sel, typeof css === 'string' ? strip(css) : css]));
        out[k] = cm;
      } else if (k === 'styles' && v && typeof v === 'object' && Array.isArray(v.card)) {
        out[k] = { ...cleanCard(v, counter), card: v.card.filter((rule) => {
          if (!rule || typeof rule !== 'object') return true;
          const bad = Object.keys(rule).some((p) => CONFLICT_PROPS.includes(p));
          if (bad && Object.values(rule).some(isImageDecl)) { counter.img = (counter.img || 0) + 1; return true; }
          if (bad) counter.n++;
          return !bad;
        }) };
      } else if (k === 'style' && typeof v === 'string' && /ha-card/.test(v)) out[k] = stripCss(v, counter);
      else out[k] = cleanCard(v, counter);
    }
    return out;
  };

  /* ── Фото: основное и по состояниям, чтобы при нажатии они менялись как раньше ── */
  const URL_RE = /url\(\s*['"]?([^'")]+)['"]?\s*\)/i;
  const urlOf = (v) => { if (typeof v !== 'string') return null; const m = URL_RE.exec(v); if (m) return m[1]; return /^(\/|https?:|data:image)/.test(v.trim()) && !/\s/.test(v.trim()) ? v.trim() : null; };
  const imageFromStyles = (styles) => {
    let found = null;
    const scan = (arr) => (Array.isArray(arr) ? arr : []).forEach((rule) => { if (rule && typeof rule === 'object') Object.entries(rule).forEach(([k, v]) => { if (/background/.test(k) && !found) found = urlOf(v); }); });
    if (styles && typeof styles === 'object') { scan(styles.card); scan(styles.img_cell); scan(styles.entity_picture); }
    return found;
  };
  const extractImages = (c) => {
    const res = { image: null, states: {}, count: 0 };
    if (!c || typeof c !== 'object') return res;
    res.image = urlOf(c.image) || urlOf(c.entity_picture) || urlOf(c.picture) || imageFromStyles(c.styles);
    if (!res.image && c.card_mod && typeof c.card_mod.style === 'string') res.image = urlOf(c.card_mod.style);
    if (c.state_image && typeof c.state_image === 'object') Object.entries(c.state_image).forEach(([st, u]) => { const x = urlOf(u); if (x) res.states[String(st)] = x; });
    if (Array.isArray(c.state)) c.state.forEach((st) => {
      if (!st || isNil(st.value)) return;
      const x = urlOf(st.entity_picture) || imageFromStyles(st.styles);
      if (x) res.states[String(st.value)] = x;
    });
    res.count = (res.image ? 1 : 0) + Object.keys(res.states).length;
    return res;
  };
  const hasTemplate = (c) => /\{\{|\{%|\[\[\[/.test(JSON.stringify(c));
  const mkImage = (c, imgs, extra = {}) => (imgs.count ? {
    type: 'image', entity: c.entity, image: imgs.image || undefined,
    state_images: Object.keys(imgs.states).length ? imgs.states : undefined,
    height: 180, fit: c.type === 'picture-entity' || c.type === 'picture' ? 'cover' : 'contain',
    tap_action: c.tap_action, hold_action: c.hold_action, ...extra,
  } : null);
  const clean = (o) => JSON.parse(JSON.stringify(o, (k, v) => (v === undefined || v === null ? undefined : v)));
  /** Раскладывает карточку на «предметы» конструктора. Шаблоны и неизвестные типы сохраняются как вставка исходной карточки. */
  const buildBlocks = (c, counter) => {
    if (!c || typeof c !== 'object') return [];
    const T = String(c.type || ''), ent = c.entity, name = c.name ?? c.title;
    const imgs = extractImages(c);
    counter.images += imgs.count;
    if (Object.keys(imgs.states).length) counter.states.push(...Object.keys(imgs.states));
    const keep = () => { counter.kept++; return [{ type: 'card', card: cleanCard(c, counter) }]; };
    if (T === 'vertical-stack') return (c.cards || []).flatMap((x) => buildBlocks(x, counter));
    if (T === 'horizontal-stack') return [{ type: 'row', blocks: (c.cards || []).map((x) => { const b = buildBlocks(x, counter); return b.length === 1 ? b[0] : { type: 'column', blocks: b }; }) }];
    if (hasTemplate(c)) {
      const im = mkImage(c, imgs);
      if (im && T === 'custom:button-card') { counter.kept++; return [im, { type: 'card', card: cleanCard({ ...c, styles: { ...(c.styles || {}), card: [] } }, counter) }]; }
      return keep();
    }
    const title = name ? { type: 'title', text: name, entity: undefined } : null;
    switch (T) {
      case 'picture': return [mkImage(c, imgs)].filter(Boolean);
      case 'picture-entity': return [mkImage(c, imgs), c.show_name !== false || c.show_state !== false ? { type: 'title', entity: ent, text: name, size: 's', subtitle: c.show_state === false ? '' : undefined } : null].filter(Boolean);
      case 'picture-glance': return [mkImage(c, imgs), title, { type: 'chips', entities: (c.entities || []).map((x) => (typeof x === 'string' ? x : { entity: x.entity, icon: x.icon, tap_action: x.tap_action })) }].filter(Boolean);
      case 'custom:button-card': {
        const im = mkImage(c, imgs);
        if (im) return [im, { type: 'title', entity: ent, text: name, icon: c.icon, size: 's' }];
        if (!ent) return [{ type: 'button', name, icon: c.icon, tap_action: c.tap_action, hold_action: c.hold_action }];
        return [{ type: 'entity', entity: ent, name, icon: c.icon, tap_action: c.tap_action, hold_action: c.hold_action }];
      }
      case 'tile': case 'entity': case 'custom:mushroom-entity-card': case 'custom:mushroom-light-card': {
        const out = [{ type: 'entity', entity: ent, name, icon: c.icon, tap_action: c.tap_action, hold_action: c.hold_action }];
        const wantsSlider = (c.features || []).some((f) => /brightness|volume|position|target-temperature|fan-speed/.test(f && f.type)) || c.show_brightness_control;
        if (wantsSlider) out.push({ type: 'slider', entity: ent, name: '' });
        return out;
      }
      case 'button': return [{ type: 'button', entity: ent, name, icon: c.icon, tap_action: c.tap_action, hold_action: c.hold_action, style: 'solid' }];
      case 'light': return [{ type: 'title', entity: ent, text: name }, { type: 'slider', entity: ent, name: '' }];
      case 'media-control': return [{ type: 'media', entity: ent }, { type: 'slider', entity: ent, name: '' }];
      case 'thermostat': return [{ type: 'title', entity: ent, text: name }, { type: 'slider', entity: ent, name: '' }];
      case 'sensor': return [{ type: 'value', entity: ent, name, unit: c.unit }];
      case 'gauge': return [{ type: 'value', entity: ent, name, unit: c.unit }, { type: 'progress', entity: ent, name: '', min: c.min, max: c.max }];
      case 'entities': return [title].concat((c.entities || []).map((x) => (typeof x === 'string' ? { type: 'entity', entity: x } : x && x.entity ? { type: 'entity', entity: x.entity, name: x.name, icon: x.icon, tap_action: x.tap_action } : null))).filter(Boolean);
      case 'glance': return [title, { type: 'chips', entities: (c.entities || []).map((x) => (typeof x === 'string' ? x : { entity: x.entity, icon: x.icon })) }].filter(Boolean);
      case 'markdown': return [{ type: 'text', text: String(c.content || '').replace(/^#+\s*/gm, '').replace(/[*_`]/g, '') }];
      default: return keep();
    }
  };

  /**
   * Превращает конфигурацию любой карточки в antarikfox-glass-card.
   * Возвращает { config, report: [[ключ, значение]] }.
   */
  const convertCard = (input, opts = {}) => {
    const o = { strip: true, colors: true, effects: true, ...opts };
    const src = typeof input === 'string' ? YAML.parse(input) : input;
    if (!src || typeof src !== 'object' || Array.isArray(src) || !src.type) throw new Error('not-a-card');
    if (src.type === `custom:${TAG}`) return { config: src, report: [['already', '']] };
    const report = [];
    report.push(['type', String(src.type || '?')]);

    /* сущности */
    const ents = new Map();
    walk(src, (s, path) => { (s.match(ENTITY_RE) || []).forEach((id) => ents.set(id, (ents.get(id) || 0) + (/entity$/.test(path) ? 5 : 1))); });
    const main = src.entity || [...ents.entries()].sort((a, b) => b[1] - a[1]).map((x) => x[0])[0];
    if (main) report.push(['entity', main]);
    if (ents.size > 1) report.push(['entities', String(ents.size)]);
    const domain = main ? main.split('.')[0] : null;

    /* цвета: тени и свечения весят больше */
    const counts = new Map();
    walk(src, (s) => {
      s.split(/[\n;]/).forEach((line) => {
        const w = /shadow|glow|border|accent|color/i.test(line) ? 3 : 1;
        (line.match(COLOR_RE) || []).forEach((c) => { const rgb = parseColor(c); if (rgb) { const k = toHex(rgb); counts.set(k, (counts.get(k) || 0) + w); } });
      });
    });
    const vivid = [...counts.entries()].map(([hex, w]) => ({ hex, w, hsl: rgbToHsl(parseColor(hex)) }))
      .filter((c) => c.hsl[1] >= 35 && c.hsl[2] >= 22 && c.hsl[2] <= 85).sort((a, b) => b.w - a.w);
    const pick = [];
    for (const c of vivid) { if (pick.every((p) => Math.min(Math.abs(p.hsl[0] - c.hsl[0]), 360 - Math.abs(p.hsl[0] - c.hsl[0])) > 26)) pick.push(c); if (pick.length === 3) break; }
    for (const c of vivid) { if (pick.length >= 3) break; if (!pick.includes(c)) pick.push(c); }

    /* шрифт */
    let font = null;
    walk(src, (s, path) => {
      if (font) return;
      if (/font-family$|\.font$/i.test(path)) { font = s.split(',')[0].replace(/['"]/g, '').trim(); return; }
      const m = /font-family\s*:\s*['"]?([^,;'"\n]+)/i.exec(s);
      if (m) font = m[1].trim();
    });

    const style = {};
    const fx = o.effects && domain && DOMAIN_FX[domain] ? DOMAIN_FX[domain] : null;
    if (o.colors && pick.length) {
      const cols = pick.length === 3 ? pick.map((p) => p.hex) : pick.length === 2 ? [pick[0].hex, toHex(mixRgb(parseColor(pick[0].hex), parseColor(pick[1].hex), 0.5)), pick[1].hex] : triadFromRgb(parseColor(pick[0].hex)).map(toHex);
      Object.assign(style, { glow_tl: cols[0], glow_mid: cols[1], glow_br: cols[2] });
      report.push(['colors', cols.join(' ')]);
    } else {
      style.preset = (fx && fx.preset) || 'aurora';
      report.push(['preset', style.preset]);
    }
    if (font) {
      const fam = Object.keys(FONTS).find((f) => f.toLowerCase() === font.toLowerCase());
      style.font = fam || font;
      report.push(['font', style.font]);
    }
    if (fx) {
      const st = JSON.parse(JSON.stringify(fx.style));
      if (st.alert) st.alert.entity = main;
      Object.assign(style, st);
      report.push(['effects', domain]);
    } else if (o.effects) { style.texture = 'plexus'; style.texture_opacity = 0.1; }
    if (main && (domain === 'light' || domain === 'media_player' || domain === 'switch' || domain === 'input_boolean' || domain === 'binary_sensor' || domain === 'lock' || domain === 'person' || /fx_when|events/.test(JSON.stringify(style)))) style.entity = main;
    if (domain === 'sensor' && main) {
      const unitHint = JSON.stringify(src).match(/battery|humidity|влажн|заряд|%/i);
      if (unitHint) { style.progress_entity = main; report.push(['progress', main]); }
    }

    const counter = { n: 0, img: 0, images: 0, states: [], kept: 0 };
    if (o.mode === 'rebuild') {
      const blocks = clean(buildBlocks(src, counter));
      report.push(['rebuilt', String(blocks.length)]);
      if (counter.images) report.push(['images', String(counter.images)]);
      if (counter.states.length) report.push(['stateImages', [...new Set(counter.states)].join(', ')]);
      if (counter.kept) report.push(['keptCards', String(counter.kept)]);
      if (counter.n) report.push(['stripped', String(counter.n)]);
      return { config: { type: `custom:${TAG}`, ...style, content: { padding: 16, gap: 12, blocks } }, report };
    }
    const card = o.strip ? cleanCard(src, counter) : src;
    const imgs = extractImages(src);
    if (imgs.count || counter.img) report.push(['images', String(Math.max(imgs.count, counter.img))]);
    if (Object.keys(imgs.states).length) report.push(['stateImages', Object.keys(imgs.states).join(', ')]);
    if (counter.n) report.push(['stripped', String(counter.n)]);
    return { config: { type: `custom:${TAG}`, ...style, card }, report };
  };
  /* ═════════════════════ 中文 / 日本語 ═════════════════════ */
  deepMerge(I18N, {
    zh: {
      ui: {
        search: '搜索…', none: '无', reset: '重置', recent: '最近', materials: '材质与物件', eyedropper: '取色器', usePreset: '来自预设',
        surprise: '给我惊喜', copyStyle: '复制样式', pasteStyle: '粘贴样式', resetAll: '重置外观', copied: '样式已复制', pasted: '样式已粘贴', nothing: '样式剪贴板为空',
        selected: '已选', live: '动态', apply: '应用', noCard: '请在 "card:" 下添加内嵌卡片，或在 "cards:" 下添加列表', yamlError: 'YAML 错误',
        stub: '### Antarikfox Glass\n玻璃、灯光和特效都在编辑器中设置。', noResults: '未找到', hex: 'HEX', spectrum: '色谱', hue: '色相', clear: '清除',
        fxNone: '无特效', byDefault: '默认', dblReset: '双击重置', looks: '风格', myStyles: '我的样式', undo: '撤销', redo: '重做', exportCode: '样式代码',
        collapse: '全部收起', findSetting: '查找设置…', save: '保存', styleName: '样式名称', delete: '删除', noStyles: '还没有保存的样式',
        importApply: '应用代码', copyCode: '复制代码', badCode: '无法识别代码', applied: '已应用', saved: '样式已保存', fontTheme: '跟随主题',
        cyr: '西里尔字母', latin: '仅拉丁字母', off: '关闭', importCard: '导入卡片', convert: '转换', converted: '卡片已转换',
        importAbout: '粘贴旧卡片的 YAML 或 JSON。它将成为玻璃的内容：自动识别实体、颜色和字体，去除旧的背景和边框，并按设备类型挑选特效。',
        importHint: 'type: custom:button-card\nentity: light.living_room\nstyles:\n  card:\n    - background: "#111"\n    - box-shadow: "0 0 12px #ff6a00"',
        optStrip: '去除旧背景和边框', optColors: '沿用卡片颜色', optEffects: '自动挑选特效', badCard: '无法解析：请粘贴一张卡片的 YAML 或 JSON',
        palette: '添加组件', layouts: '快速布局', layoutEntity: '布局使用的实体', builderEmpty: '用组件搭建卡片：点击下方任意一个。组件可直接控制设备，无需内嵌卡片。',
        moveUp: '上移', moveDown: '下移', dup: '复制', del: '删除', addState: '+ 状态', onoff: '+ 开 / 关', addItem: '+ 按钮', addEntity: '+ 实体', state: '状态',
        addInto: '添加到内部', clearBuilder: '清空搭建器', modeWrap: '原样包裹', modeRebuild: '在搭建器中重建', copyResult: '复制 YAML', copiedYaml: 'YAML 已复制',
        lay_light: '灯光', lay_tv: '电视', lay_climate: '空调', lay_media: '音乐', lay_sensor: '带图表的传感器', lay_scene: '场景按钮', lay_auto: '按实体自动',
        lay_power: '开/关', lay_receiver: '功放', lay_dune: 'Dune HD', lay_alice: 'Alice 音箱', lay_lock: '门锁', lay_camera: '摄像头', lay_photo: '照片 开/关', lay_photoonly: '仅照片',
        unlock: '开锁', lock: '上锁', confirm: '需要确认', cond: '显示条件', condTime: '时间 (18:00-07:00)', drag: '拖动',
        layoutHint: '适用于分区（sections）仪表板。12 为全宽，6 为半宽。在瀑布流仪表板中宽度由列决定。', iconSearch: '查找图标：壁炉、台灯、tv…',
        iconEmoji: '表情', iconAll: '图标', auto: '自动', fullWidth: '全宽', upload: '上传到服务器', uploading: '正在压缩并上传…', upFail: '照片上传失败',
        up_www: '照片已保存到 /config/www/antarikfox/', up_image: 'File editor 不可用 — 照片已存入 HA 图片存储', up_download: '无法自动上传 — 文件已下载，请放到 /config/www/antarikfox/',
        up_preview: '演示：照片仅用于预览', uploadPair: '☁ 上传“开”和“关”照片到服务器（请同时选择两张）', whereWww: '在服务器上：', whereImage: '在服务器上：HA 图片存储',
        wherePreview: '仅预览 — 不在服务器上', whereMissing: '服务器上缺少文件，请放到此处：', stOn: '开', stOff: '关',
        lang: '语言', langAuto: '自动', langHint: '编辑器与卡片语言：自动 = 跟随 HA', dropHere: '把照片拖到这里，或用 Ctrl+V 粘贴',
        lightCard: '☀ 浅色卡片', darkCard: '🌙 深色卡片', bareHint: '适合透明背景的照片：只保留内容，没有玻璃、边框和光晕。',
        resetSec: '↺ 重置本节', secReset: '本节已重置', texLive: '动态', texStatic: '静态',
        rmTitle: '本设备开启了“减少动态效果”', rmText: '系统要求避免动画，因此特效、彩灯和动效已关闭。可以为本设备开启它们。',
        rmOn: '在本设备上显示动画', rmOff: '恢复系统设置', motionHint: '倾斜、抬起、视差和聚光灯会跟随鼠标和手指（手指停在卡片上时）。开启某个效果时，会在预览中演示一次。',
      },
      section: { glow: '光晕与边框', glass: '玻璃', glare: '反光', texture: '纹理', fx: '特效', motion: '动效与细节', entity: '实体联动', card: '内嵌卡片', content: '背景、文字与字体', festive: '节日与冬季', events: '动态事件', builder: '卡片搭建器', layout: '仪表板中的尺寸' },
      label: {
        preset: '预设', glow_tl: '左上', glow_mid: '中间', glow_br: '右下', harmony: '由中间色生成配色', glow_intensity: '光晕强度', glow_spread: '光晕扩散', edge_width: '边框宽度',
        glow_angle: '渐变角度', inner_glow: '内发光', edge_mode: '边框模式', hue_cycle: '彩虹循环', hue_shift: '色相偏移', light_follow: '光线跟随光标', opacity: '不透明度',
        blur: '背景模糊', saturate: '背景饱和度', tint: '玻璃色调', radius: '圆角', iridescent: '全息膜', reflection: '底部倒影', glare_intensity: '反光强度',
        glare_angle: '反光角度', glare_mode: '反光模式', texture: '纹理', texture_lit: '被光晕照亮', texture_opacity: '纹理强度', texture_scale: '缩放', texture_blend: '混合',
        texture_color: '纹理颜色', texture_fade: '渐隐', fx: '特效', fx_density: '密度', fx_speed: '速度', fx_opacity: '特效亮度', fx_colors: '特效颜色', fx_when: '显示时机',
        fx_layer: '图层', fx_quality: '质量', tap_burst: '点击迸发粒子', tilt: '3D 倾斜', hover: '抬起', tap_flash: '闪光', breathe: '呼吸', scan: '扫描', corners: 'HUD 角标',
        chromatic: '色差', led: '状态指示灯', text_glow: '霓虹文字', accent: '强调色', ignite: '点亮动画', haptic: '震动反馈', beat: '音乐节拍', beat_bpm: '节奏 BPM',
        tilt_max: '最大倾斜', animation_speed: '动画速度', performance: '性能', engrave: '玻璃刻字', engrave_opacity: '刻字亮度', entity: '实体', light_glow: '颜色取自灯光',
        dim_inactive: '关闭时变暗', inactive_dim: '关闭时亮度', night_dim: '夜间亮度', progress_entity: '进度边框：实体', progress_min: '最小值', progress_max: '最大值',
        fx_entity: '特效强度取自传感器', fx_min: '最小值', fx_max: '最大值', alert_entity: '警报：实体', alert_state: '警报状态', alert_above: '高于', alert_below: '低于',
        alert_color: '警报颜色', alert_fx: '警报特效', card: '内嵌卡片 YAML', radius_auto: '窄卡片自动圆角', background_image: '背景图片 (URL)', background_dim: '背景变暗',
        background_blur: '背景模糊', legibility: '文字可读性', text_color: '文字颜色', font: '字体', font_scale: '字号', content_scale: '内容缩放', content_padding: '内边距',
        garland_colors: '彩灯颜色', garland_mode: '彩灯模式', garland_edges: '彩灯位置', snow_cap: '积雪', icicles: '冰柱', seasonal: '按日历过新年',
        fx_schedule: '按时间显示特效 (18:00-07:00)', ev_change: '状态变化时', ev_on: '打开时', ev_off: '关闭时', ev_tap: '点击时', ev_alert: '警报时',
        idle_dim: '空闲变暗（秒）', bpm_entity: '脉搏/节奏取自实体', glare_tint: '反光染上光晕色', grid_cols: '宽度（共 12 列）', grid_rows: '高度（行）', valign: '内容垂直位置',
        bare: '无玻璃无边框（仅内容）', hide_edge: '隐藏边框', hide_glow: '隐藏光晕', hide_bg: '隐藏玻璃背景', depth: '投影',
        bg_color: '背景颜色', bg_color2: '第二背景色（渐变）', bg_opacity: '背景不透明度', bg_angle: '背景渐变角度', auto_contrast: '浅色背景用深色文字',
        garland: '彩灯', snow_depth: '积雪厚度', icicle_length: '冰柱长度', texture_speed: '动态纹理速度', float: '悬浮', sway: '摇摆（平板也可用）', jelly: '点击果冻效果',
        parallax: '内容视差', spotlight: '聚光灯跟随手指', grain: '胶片颗粒', neon: '霓虹闪烁', marching: '流动边框', state_pulse: '状态变化波纹', glint: '边框流光',
      },
      blk: { camera: '摄像头', select: '选项选择', title: '标题', image: '照片', entity: '实体', value: '数值', button: '按钮', buttons: '按钮行', slider: '滑块', progress: '进度', media: '媒体', chips: '标签', text: '文本', row: '行', column: '列', divider: '分隔线', spacer: '间隔', card: 'HA 卡片' },
      fld: {
        graph: '历史图表', hours: '图表小时数', mode: '模式', refresh: '快照刷新', state: '状态', state_not: '排除状态', above: '高于', below: '低于', text: '文字', subtitle: '副标题',
        icon: '图标（mdi:… 或表情）', entity: '实体', size: '大小', align: '对齐', image: '默认照片 (URL)', state_images: '按状态显示照片', height: '高度', fit: '照片适配',
        use_entity_picture: '实体图片', name: '名称', secondary: '第二行', toggle: '开关', unit: '单位', decimals: '小数位', style: '样式', tap_action: '点击', hold_action: '长按',
        show_value: '显示数值', min: '最小值', max: '最大值', entities: '实体', items: '按钮', card: '卡片（YAML 或 JSON）', color: '强调色', padding: '内边距', gap: '间距',
        blocks: '内容', navigation_path: '路径 (/lovelace/…)', url_path: '链接', perform_action: '动作 (domain.service)', data: '数据 (JSON)', position: '照片位置',
        off_filter: '关闭时变暗', on_glow: '开启时暖光', alt: '照片描述（读屏用）',
      },
      act: { auto: '自动', toggle: '切换', 'more-info': '详细信息', navigate: '跳转', url: '打开链接', 'perform-action': '执行动作', none: '无' },
    },
    ja: {
      ui: {
        search: '検索…', none: 'なし', reset: 'リセット', recent: '最近', materials: '素材とオブジェクト', eyedropper: 'スポイト', usePreset: 'プリセットから',
        surprise: 'おまかせ', copyStyle: 'スタイルをコピー', pasteStyle: 'スタイルを貼り付け', resetAll: '見た目をリセット', copied: 'スタイルをコピーしました', pasted: 'スタイルを貼り付けました', nothing: 'スタイルのクリップボードは空です',
        selected: '選択中', live: 'ライブ', apply: '適用', noCard: '"card:" に内側のカードを、または "cards:" にリストを追加してください', yamlError: 'YAML エラー',
        stub: '### Antarikfox Glass\nガラス、光、エフェクトはエディターで設定します。', noResults: '見つかりません', hex: 'HEX', spectrum: 'スペクトル', hue: '色相', clear: 'クリア',
        fxNone: 'エフェクトなし', byDefault: 'デフォルト', dblReset: 'ダブルクリックでリセット', looks: 'ルック', myStyles: 'マイスタイル', undo: '元に戻す', redo: 'やり直す', exportCode: 'スタイルコード',
        collapse: 'すべて折りたたむ', findSetting: '設定を検索…', save: '保存', styleName: 'スタイル名', delete: '削除', noStyles: '保存したスタイルはまだありません',
        importApply: 'コードを適用', copyCode: 'コードをコピー', badCode: 'コードを認識できません', applied: '適用しました', saved: 'スタイルを保存しました', fontTheme: 'テーマに従う',
        cyr: 'キリル文字', latin: 'ラテン文字のみ', off: 'オフ', importCard: 'カードを取り込む', convert: '変換', converted: 'カードを変換しました',
        importAbout: '古いカードの YAML または JSON を貼り付けてください。ガラスの中身になります。エンティティ・色・フォントを検出し、古い背景と枠を取り除き、デバイスの種類に合うエフェクトを選びます。',
        importHint: 'type: custom:button-card\nentity: light.living_room\nstyles:\n  card:\n    - background: "#111"\n    - box-shadow: "0 0 12px #ff6a00"',
        optStrip: '古い背景と枠を削除', optColors: 'カードの色を使う', optEffects: 'エフェクトを選ぶ', badCard: '解析できません：カード 1 枚分の YAML または JSON を貼り付けてください',
        palette: 'ブロックを追加', layouts: 'クイックレイアウト', layoutEntity: 'レイアウト用のエンティティ', builderEmpty: 'ブロックでカードを組み立てます。下のどれかをタップ。ブロックがデバイスを直接操作するので、内側のカードは不要です。',
        moveUp: '上へ', moveDown: '下へ', dup: '複製', del: '削除', addState: '+ 状態', onoff: '+ オン / オフ', addItem: '+ ボタン', addEntity: '+ エンティティ', state: '状態',
        addInto: '中に追加', clearBuilder: 'ビルダーを空にする', modeWrap: 'そのまま包む', modeRebuild: 'ビルダーで作り直す', copyResult: 'YAML をコピー', copiedYaml: 'YAML をコピーしました',
        lay_light: '照明', lay_tv: 'テレビ', lay_climate: 'エアコン', lay_media: '音楽', lay_sensor: 'グラフ付きセンサー', lay_scene: 'シーンボタン', lay_auto: 'エンティティから自動',
        lay_power: 'オン/オフ', lay_receiver: 'AV アンプ', lay_dune: 'Dune HD', lay_alice: 'Alice スピーカー', lay_lock: 'ドアロック', lay_camera: 'カメラ', lay_photo: '写真 オン/オフ', lay_photoonly: '写真だけ',
        unlock: '解錠', lock: '施錠', confirm: '確認を求める', cond: '表示する条件', condTime: '時間 (18:00-07:00)', drag: 'ドラッグ',
        layoutHint: 'セクション型ダッシュボードで有効です。12 は全幅、6 は半分。メイソンリー型では列の幅に従います。', iconSearch: 'アイコンを検索：暖炉、ランプ、tv…',
        iconEmoji: '絵文字', iconAll: 'アイコン', auto: '自動', fullWidth: '全幅', upload: 'サーバーにアップロード', uploading: '圧縮してアップロード中…', upFail: '写真のアップロードに失敗しました',
        up_www: '写真を /config/www/antarikfox/ に保存しました', up_image: 'File editor が使えないため、HA の画像ストレージに保存しました', up_download: '自動アップロードできません。ファイルをダウンロードしたので /config/www/antarikfox/ に置いてください',
        up_preview: 'デモ：写真はプレビュー用です', uploadPair: '☁ 「オン」と「オフ」の写真をサーバーへ（2 枚同時に選択）', whereWww: 'サーバー上：', whereImage: 'サーバー上：HA 画像ストレージ',
        wherePreview: 'プレビューのみ — サーバーにはありません', whereMissing: 'サーバーにファイルがありません。ここに置いてください：', stOn: 'オン', stOff: 'オフ',
        lang: '言語', langAuto: '自動', langHint: 'エディターとカードの言語：自動 = HA に合わせる', dropHere: '写真をここにドロップ、または Ctrl+V で貼り付け',
        lightCard: '☀ ライトカード', darkCard: '🌙 ダークカード', bareHint: '背景が透明な写真に最適：中身だけが残り、ガラス・枠・光はなくなります。',
        resetSec: '↺ このセクションをリセット', secReset: 'セクションをリセットしました', texLive: 'ライブ', texStatic: '静止',
        rmTitle: 'この端末で「視差効果を減らす」がオンです', rmText: 'システムがアニメーションを控えるよう求めているため、エフェクト・ガーランド・動きはオフです。この端末で有効にできます。',
        rmOn: 'この端末でアニメーションを表示', rmOff: 'システム設定に戻す', motionHint: '傾き・浮き上がり・パララックス・スポットライトはマウスと指（カードに触れている間）に反応します。オンにすると、プレビューで一度再生されます。',
      },
      section: { glow: '光と縁', glass: 'ガラス', glare: '反射', texture: 'テクスチャ', fx: 'エフェクト', motion: '動きとディテール', entity: 'エンティティ連動', card: '内側のカード', content: '背景・文字・フォント', festive: '季節と冬', events: 'ダイナミックイベント', builder: 'カードビルダー', layout: 'ダッシュボード上のサイズ' },
      label: {
        preset: 'プリセット', glow_tl: '左上', glow_mid: '中央', glow_br: '右下', harmony: '中央色から配色', glow_intensity: '光の強さ', glow_spread: 'ハローの広がり', edge_width: '縁の太さ',
        glow_angle: 'グラデーション角度', inner_glow: '内側の光', edge_mode: '縁のモード', hue_cycle: 'レインボー循環', hue_shift: '色相シフト', light_follow: '光がカーソルを追う', opacity: '不透明度',
        blur: '背景ぼかし', saturate: '背景の彩度', tint: 'ガラスの色味', radius: '角の丸み', iridescent: 'ホログラムフィルム', reflection: '下の映り込み', glare_intensity: '反射の強さ',
        glare_angle: '反射の角度', glare_mode: '反射モード', texture: 'テクスチャ', texture_lit: '光で照らす', texture_opacity: 'テクスチャの強さ', texture_scale: 'スケール', texture_blend: '合成',
        texture_color: 'テクスチャの色', texture_fade: 'フェード', fx: 'エフェクト', fx_density: '密度', fx_speed: '速度', fx_opacity: 'エフェクトの明るさ', fx_colors: 'エフェクトの色', fx_when: '表示',
        fx_layer: 'レイヤー', fx_quality: '品質', tap_burst: 'タップで粒子が弾ける', tilt: '3D チルト', hover: '浮き上がり', tap_flash: 'フラッシュ', breathe: '呼吸', scan: 'スキャン', corners: 'HUD コーナー',
        chromatic: '色収差', led: 'ステータス LED', text_glow: 'ネオン文字', accent: 'アクセント', ignite: '点灯アニメ', haptic: '振動', beat: '音楽のビート', beat_bpm: 'テンポ BPM',
        tilt_max: '最大の傾き', animation_speed: 'アニメ速度', performance: 'パフォーマンス', engrave: 'ガラスの刻印', engrave_opacity: '刻印の明るさ', entity: 'エンティティ', light_glow: '照明の色を使う',
        dim_inactive: 'オフで暗く', inactive_dim: 'オフ時の明るさ', night_dim: '夜間の明るさ', progress_entity: '進捗の縁：エンティティ', progress_min: '最小', progress_max: '最大',
        fx_entity: 'センサーでエフェクト強度', fx_min: '最小', fx_max: '最大', alert_entity: 'アラート：エンティティ', alert_state: 'アラート状態', alert_above: 'より上', alert_below: 'より下',
        alert_color: 'アラートの色', alert_fx: 'アラート時のエフェクト', card: '内側のカード YAML', radius_auto: '細いカードは自動で丸み調整', background_image: '背景画像 (URL)', background_dim: '背景を暗く',
        background_blur: '背景ぼかし', legibility: '文字の読みやすさ', text_color: '文字色', font: 'フォント', font_scale: '文字サイズ', content_scale: '中身の拡大', content_padding: '内側の余白',
        garland_colors: 'ガーランドの色', garland_mode: 'ガーランドのモード', garland_edges: 'ガーランドの位置', snow_cap: '雪の帽子', icicles: 'つらら', seasonal: '暦に合わせて新年',
        fx_schedule: '時間帯でエフェクト (18:00-07:00)', ev_change: '状態が変わったら', ev_on: 'オンになったら', ev_off: 'オフになったら', ev_tap: 'タップしたら', ev_alert: 'アラート時',
        idle_dim: '放置で暗く（秒）', bpm_entity: '鼓動/テンポをエンティティから', glare_tint: '反射に光の色', grid_cols: '幅（12 列中）', grid_rows: '高さ（行）', valign: '中身の縦位置',
        bare: 'ガラスも枠もなし（中身だけ）', hide_edge: '縁を隠す', hide_glow: '光を隠す', hide_bg: 'ガラスの背景を隠す', depth: '影',
        bg_color: '背景色', bg_color2: '2 色目の背景（グラデーション）', bg_opacity: '背景の不透明度', bg_angle: '背景グラデーションの角度', auto_contrast: '明るい背景では暗い文字',
        garland: 'ガーランド', snow_depth: '雪の厚さ', icicle_length: 'つららの長さ', texture_speed: 'ライブテクスチャの速度', float: 'ふわふわ', sway: '揺れ（タブレットでも）', jelly: 'タップでぷるん',
        parallax: '中身のパララックス', spotlight: '指を追うスポットライト', grain: 'フィルムグレイン', neon: 'ネオンのちらつき', marching: '流れる縁', state_pulse: '状態変化で波紋', glint: '縁を走る光',
      },
      blk: { camera: 'カメラ', select: '選択リスト', title: 'タイトル', image: '写真', entity: 'エンティティ', value: '数値', button: 'ボタン', buttons: 'ボタン列', slider: 'スライダー', progress: '進捗', media: 'メディア', chips: 'チップ', text: 'テキスト', row: '横並び', column: '縦並び', divider: '区切り線', spacer: 'スペース', card: 'HA カード' },
      fld: {
        graph: '履歴グラフ', hours: 'グラフの時間', mode: 'モード', refresh: 'スナップショット更新', state: '状態', state_not: '除く状態', above: 'より上', below: 'より下', text: 'テキスト', subtitle: 'サブタイトル',
        icon: 'アイコン（mdi:… または絵文字）', entity: 'エンティティ', size: 'サイズ', align: '揃え', image: '標準の写真 (URL)', state_images: '状態ごとの写真', height: '高さ', fit: '写真の合わせ方',
        use_entity_picture: 'エンティティの画像', name: '名前', secondary: '2 行目', toggle: 'スイッチ', unit: '単位', decimals: '小数桁', style: 'スタイル', tap_action: 'タップ', hold_action: '長押し',
        show_value: '値を表示', min: '最小', max: '最大', entities: 'エンティティ', items: 'ボタン', card: 'カード（YAML または JSON）', color: 'アクセント色', padding: '内側の余白', gap: '間隔',
        blocks: '中身', navigation_path: 'パス (/lovelace/…)', url_path: 'リンク', perform_action: 'アクション (domain.service)', data: 'データ (JSON)', position: '写真の位置',
        off_filter: 'オフで暗く', on_glow: 'オンで暖かい光', alt: '写真の説明（読み上げ用）',
      },
      act: { auto: '自動', toggle: '切り替え', 'more-info': '詳細', navigate: '移動', url: 'リンクを開く', 'perform-action': 'アクション実行', none: '何もしない' },
    },
  });
  deepMerge(I18N, {
    zh: {
      preset: { aurora: '极光', neon_city: '霓虹都市', cyber: '赛博朋克', ice: '冰', ember: '余烬', sunset: '日落', matrix: '矩阵', ocean: '海洋', royal: '皇家', holo: '全息', toxic: '剧毒', mono: '单色', new_year: '新年', northern_lights: '北极光', sakura: '樱花', autumn: '秋天', synthwave: '合成波', lava: '熔岩', deep_sea: '深海', gold_luxe: '金色', arctic: '北极', forest: '森林' },
      opt: {
        static: '静态', rotate: '旋转', pulse: '脉动', sweep: '光扫', follow: '跟随光标', off: '关闭', overlay: '叠加', 'soft-light': '柔光', screen: '滤色', normal: '正常', 'color-dodge': '颜色减淡',
        auto: '自动', high: '最高', lite: '精简（弱性能面板）', glow: '光晕颜色', white: '白光', rainbow: '彩虹', warm: '暖火', always: '始终', active: '打开时', inactive: '关闭时', alert: '仅警报时',
        back: '内容后面', front: '内容上方', low: '节能', medium: '均衡', analogous: '类似色', triadic: '三角色', complementary: '互补色', split: '分裂互补', monochrome: '单色', tetradic: '四角色',
        natural: '自然', classic: '经典', cold: '冷白', chase: '追逐', twinkle: '闪烁', alternate: '交替', steady: '常亮', top: '沿顶部', perimeter: '环绕四周', soft: '柔和', strong: '强',
        snapshot: '快照', left: '左', center: '居中', cover: '填满', contain: '完整显示', solid: '实心', ghost: '描边', round: '圆形', v_top: '顶部', v_center: '居中', v_bottom: '底部', v_between: '均匀分布',
        bottom: '底部', right: '右', h_fixed: '固定', h_auto: '按照片比例', h_fill: '填满卡片',
      },
      fxgroup: { weather: '天气与冬季', festive: '节日', nature: '自然', space: '太空', light: '光', tech: '科技', dynamic: '动态与互动' },
      ev: { fireworks: '烟花', shockwave: '冲击波', sparkle: '闪光点', ring: '门铃响', flash: '闪光', confetti: '礼花', smoke: '烟雾', lightning: '闪电', glitch: '故障抖动', gust: '阵风' },
      look: { new_year: '新年', northern: '极夜', winter_storm: '暴风雪', autumn: '秋日公园', sakura: '樱花', synthwave: '合成波', underwater: '水下', campfire: '篝火', cyber_city: '赛博城市', starry_night: '星夜' },
      rep: { type: '卡片类型', entity: '主实体', entities: '找到的实体', colors: '光晕取自卡片颜色', preset: '预设', font: '字体', effects: '适合设备的特效', progress: '进度边框', stripped: '已移除冲突样式', already: '这已经是 Antarikfox 卡片', rebuilt: '已生成组件', images: '找到的照片', stateImages: '照片随状态切换', keptCards: '保留为内嵌卡片（模板）' },
      fx: {
        sparks: '火花', pollen: '花粉', lightning: '闪电', fog: '雾', rays: '光线', air: '气泡', snow: '雪', rain: '雨', fireflies: '萤火虫', aurora: '北极光', stars: '星空', embers: '余烬', matrix: '数字雨', bokeh: '散景',
        comets: '彗星', glitch: '故障', plasma: '等离子', ripple: '涟漪', edge_runner: '边缘火焰', confetti: '彩纸', vortex: '漩涡', aurora_real: '真实极光', hail: '冰雹', snowfall: '飘雪', snowflakes: '雪花',
        blizzard: '暴风雪', garland: '彩灯', lanterns: '圣诞彩球', sparkler: '仙女棒', leaves: '落叶', petals: '樱花花瓣', meteor_shower: '流星雨', nebula: '星云', sea: '大海', fire: '火焰', smoke: '烟雾',
        hearts: '爱心', butterflies: '蝴蝶', neon_grid: '霓虹地平线', radar: '雷达', caustics: '水下光纹', dna: 'DNA 螺旋', orbits: '原子', fireworks: '烟花', motion_trail: '手指轨迹', magnet: '磁铁',
        heartbeat: '心电图', charge: '液体充电', equalizer: '均衡器',
      },
      texture: {
        none: '无纹理', noise: '颗粒', frost: '霜', carbon: '碳纤维', hex: '蜂窝', grid: '网格', dots: '圆点', scanlines: '扫描线', brushed: '拉丝金属', diamond: '菱形', circuit: '电路', waves: '波浪', lowpoly: '低多边形',
        topo: '等高线', weave: '编织', plexus: '神经网', synapse: '突触', shards: '晶体', constellation: '星座', liquid: '液体', sonar: '声呐', droplets: '玻璃水珠', glowworms: '萤光虫', stardust: '星尘',
        hexpulse: '脉动蜂窝', traces: '电路走线', warp: '曲速', lava: '熔岩灯', silk: '丝绸', horizon: '霓虹地平线', dotwave: '点阵波', gyro: '陀螺仪 HUD', scanner: '扫描仪', frostbloom: '冰晶绽放',
        crt: '老式屏幕', drift: '漂移', chevrons: 'V 形纹', pulsegrid: '闪烁网格', veil: '帷幕', mesh: '线框波', fizz: '气泡', scales: '鱼鳞', triangles: '三角形', plaid: '格子', bricks: '砖墙', starry: '小星星',
        rings: '圆环', crosshatch: '交叉线', terrazzo: '水磨石', zigzag: '锯齿', quatrefoil: '四叶花纹',
      },
    },
    ja: {
      preset: { aurora: 'オーロラ', neon_city: 'ネオンシティ', cyber: 'サイバーパンク', ice: '氷', ember: '熾火', sunset: '夕焼け', matrix: 'マトリックス', ocean: '海', royal: 'ロイヤル', holo: 'ホログラム', toxic: 'トキシック', mono: 'モノクロ', new_year: 'お正月', northern_lights: '北極光', sakura: '桜', autumn: '秋', synthwave: 'シンセウェイブ', lava: '溶岩', deep_sea: '深海', gold_luxe: 'ゴールド', arctic: '北極', forest: '森' },
      opt: {
        static: '固定', rotate: '回転', pulse: 'パルス', sweep: '光が流れる', follow: 'カーソルを追う', off: 'オフ', overlay: 'オーバーレイ', 'soft-light': 'ソフトライト', screen: 'スクリーン', normal: '通常', 'color-dodge': '覆い焼き',
        auto: '自動', high: '最大', lite: '軽量（非力なパネル向け）', glow: '光の色', white: '白い光', rainbow: 'レインボー', warm: '暖かい炎', always: '常に', active: 'オンのとき', inactive: 'オフのとき', alert: 'アラート時のみ',
        back: '中身の後ろ', front: '中身の前', low: '省エネ', medium: 'バランス', analogous: '類似色', triadic: 'トライアド', complementary: '補色', split: 'スプリット', monochrome: 'モノクロ', tetradic: 'テトラード',
        natural: 'ナチュラル', classic: 'クラシック', cold: '冷たい白', chase: '追いかけ', twinkle: 'きらめき', alternate: '交互', steady: '点灯', top: '上辺に沿って', perimeter: '周囲に', soft: 'ソフト', strong: '強め',
        snapshot: 'スナップショット', left: '左', center: '中央', cover: '全面', contain: '全体を表示', solid: '塗り', ghost: '枠線', round: '丸', v_top: '上', v_center: '中央', v_bottom: '下', v_between: '均等配置',
        bottom: '下', right: '右', h_fixed: '固定', h_auto: '写真の比率', h_fill: 'カードいっぱい',
      },
      fxgroup: { weather: '天気と冬', festive: 'お祝い', nature: '自然', space: '宇宙', light: '光', tech: 'テック', dynamic: 'ライブ・反応' },
      ev: { fireworks: '花火', shockwave: '衝撃波', sparkle: 'きらきら', ring: 'チャイム', flash: 'フラッシュ', confetti: 'クラッカー', smoke: '煙', lightning: '落雷', glitch: 'グリッチ', gust: '突風' },
      look: { new_year: 'お正月', northern: '極夜', winter_storm: '吹雪', autumn: '秋の公園', sakura: '桜', synthwave: 'シンセウェイブ', underwater: '水中', campfire: '焚き火', cyber_city: 'サイバーシティ', starry_night: '星降る夜' },
      rep: { type: 'カードの種類', entity: 'メインのエンティティ', entities: '見つかったエンティティ', colors: 'カードの色から光を作成', preset: 'プリセット', font: 'フォント', effects: 'デバイスに合うエフェクト', progress: '進捗の縁', stripped: '競合するスタイルを削除', already: 'すでに Antarikfox カードです', rebuilt: '作成したブロック', images: '見つかった写真', stateImages: '状態で写真が切り替わる', keptCards: '埋め込みカードとして保持（テンプレート）' },
      fx: {
        sparks: '火花', pollen: '花粉', lightning: '稲妻', fog: '霧', rays: '光線', air: '泡', snow: '雪', rain: '雨', fireflies: 'ホタル', aurora: 'オーロラ', stars: '星空', embers: '火の粉', matrix: 'デジタルレイン', bokeh: 'ボケ',
        comets: '彗星', glitch: 'グリッチ', plasma: 'プラズマ', ripple: '波紋', edge_runner: '縁の炎', confetti: '紙吹雪', vortex: '渦', aurora_real: '本物のオーロラ', hail: 'あられ', snowfall: '吹き寄せる雪', snowflakes: '雪の結晶',
        blizzard: '吹雪', garland: 'ガーランド', lanterns: 'クリスマスボール', sparkler: '線香花火', leaves: '落ち葉', petals: '桜の花びら', meteor_shower: '流星群', nebula: '星雲', sea: '海', fire: '炎', smoke: '煙',
        hearts: 'ハート', butterflies: '蝶', neon_grid: 'ネオンの地平線', radar: 'レーダー', caustics: '水中のゆらめき', dna: 'DNA らせん', orbits: '原子', fireworks: '花火', motion_trail: '指の軌跡', magnet: '磁石',
        heartbeat: '心電図', charge: '液体チャージ', equalizer: 'イコライザー',
      },
      texture: {
        none: 'テクスチャなし', noise: '粒子', frost: '霜', carbon: 'カーボン', hex: 'ハニカム', grid: 'グリッド', dots: 'ドット', scanlines: '走査線', brushed: 'ヘアライン金属', diamond: 'ひし形', circuit: '回路', waves: '波', lowpoly: 'ローポリ',
        topo: '等高線', weave: '織り', plexus: 'プレクサス', synapse: 'シナプス', shards: '結晶', constellation: '星座', liquid: '液体', sonar: 'ソナー', droplets: 'ガラスの水滴', glowworms: '光る虫', stardust: '星くず',
        hexpulse: '脈打つハニカム', traces: '回路の配線', warp: 'ワープ', lava: 'ラバランプ', silk: 'シルク', horizon: 'ネオンの地平線', dotwave: 'ドットの波', gyro: 'ジャイロ HUD', scanner: 'スキャナー', frostbloom: '氷の花',
        crt: 'ブラウン管', drift: 'ドリフト', chevrons: 'シェブロン', pulsegrid: '点滅グリッド', veil: 'ベール', mesh: 'ワイヤーの波', fizz: '泡', scales: 'うろこ', triangles: '三角形', plaid: 'チェック', bricks: 'レンガ', starry: '小さな星',
        rings: 'リング', crosshatch: 'クロスハッチ', terrazzo: 'テラゾー', zigzag: 'ジグザグ', quatrefoil: '四つ葉模様',
      },
    },
  });
  CANVAS_TEXTURES.forEach((k) => {
    if (I18N.zh.texture[k]) I18N.zh.texture[k] += '（动态）';
    if (I18N.ja.texture[k]) I18N.ja.texture[k] += '（ライブ）';
  });
  deepMerge(I18N, {
    ru: { ui: { yes: 'Да', cancel: 'Отмена', confirmQ: 'Подтвердите: «%s»%n?', haCardHere: 'эта карточка HA появится в Home Assistant', kb: 'КБ' } },
    en: { ui: { yes: 'Yes', cancel: 'Cancel', confirmQ: 'Confirm “%s”%n?', haCardHere: 'this HA card renders inside Home Assistant', kb: 'KB' } },
    zh: { ui: { yes: '确定', cancel: '取消', confirmQ: '确认：“%s”%n？', haCardHere: '此 HA 卡片将在 Home Assistant 中显示', kb: 'KB' } },
    ja: { ui: { yes: 'はい', cancel: 'キャンセル', confirmQ: '「%s」%n を実行しますか？', haCardHere: 'この HA カードは Home Assistant 内で表示されます', kb: 'KB' } },
  });
  /* ═════════════════════════ ЗАГРУЗКА ФОТО ДЛЯ КАРТОЧЕК ═════════════════════════ */
  const TRANSLIT = { а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya' };
  const slugify = (s) => String(s || '').toLowerCase().split('').map((ch) => TRANSLIT[ch] ?? ch).join('')
    .replace(/^[a-z_]+\./, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'card';

  const Uploader = {
    /** Сжимаем: до 1400px по большей стороне, WebP с прозрачностью (или PNG, если WebP недоступен) */
    async optimize(file, max = 1200) {
      if (!file || !/^image\//.test(file.type)) throw new Error('not-image');
      if (/svg|gif/.test(file.type)) return { blob: file, ext: file.type.includes('svg') ? 'svg' : 'gif' };
      let src;
      try { src = await createImageBitmap(file); } catch (e) {
        src = await new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = URL.createObjectURL(file); });
      }
      const w = src.width || src.naturalWidth, h = src.height || src.naturalHeight, k = Math.min(1, max / Math.max(w, h));
      const c = document.createElement('canvas');
      c.width = Math.round(w * k); c.height = Math.round(h * k);
      c.getContext('2d').drawImage(src, 0, 0, c.width, c.height);
      const webp = await new Promise((r) => c.toBlob(r, 'image/webp', 0.85));
      if (webp && webp.type === 'image/webp' && webp.size < file.size * 1.1) return { blob: webp, ext: 'webp' };
      const png = await new Promise((r) => c.toBlob(r, 'image/png'));
      return png && png.size < file.size ? { blob: png, ext: 'png' } : { blob: file, ext: (file.type.split('/')[1] || 'png').replace('jpeg', 'jpg') };
    },
    fetchAuth(hass, path, init = {}) {
      if (hass && typeof hass.fetchWithAuth === 'function') return hass.fetchWithAuth(path, init);
      const tok = hass && ((hass.auth && hass.auth.data && hass.auth.data.access_token) || hass.__token);
      return fetch(path, { ...init, headers: { ...(init.headers || {}), ...(tok ? { Authorization: `Bearer ${tok}` } : {}) } });
    },
    async exists(url) {
      try { const r = await fetch(`${url}${url.includes('?') ? '&' : '?'}_t=${Date.now()}`, { method: 'GET', cache: 'no-store' }); return r.ok && /image|octet/.test(r.headers.get('content-type') || 'image'); } catch (e) { return false; }
    },
    /** 1. В /config/www/antarikfox через дополнение File editor (core_configurator) */
    async viaFileEditor(hass, blob, name) {
      if (!hass || typeof hass.callWS !== 'function') throw new Error('no-ws');
      const info = await hass.callWS({ type: 'supervisor/api', endpoint: '/addons/core_configurator/info', method: 'get' });
      if (!info || !info.ingress_entry || (info.state && info.state !== 'started')) throw new Error('no-file-editor');
      const sess = await hass.callWS({ type: 'supervisor/api', endpoint: '/ingress/session', method: 'post' });
      if (!sess || !sess.session) throw new Error('no-session');
      document.cookie = `ingress_session=${sess.session};path=/api/hassio_ingress/;SameSite=Strict${location.protocol === 'https:' ? ';Secure' : ''}`;
      const base = String(info.ingress_entry).replace(/\/+$/, '');
      for (const root of ['/homeassistant', '/config']) {
        try { await fetch(`${base}/api/newfolder`, { method: 'POST', credentials: 'same-origin', body: new URLSearchParams({ path: `${root}/www`, name: 'antarikfox' }) }); } catch (e) { /* папка уже есть */ }
        const fd = new FormData();
        fd.append('path', `${root}/www/antarikfox`);
        fd.append('file', new File([blob], name, { type: blob.type }));
        try {
          const r = await fetch(`${base}/api/upload`, { method: 'POST', body: fd, credentials: 'same-origin' });
          if (r.ok && await this.exists(`/local/antarikfox/${name}`)) return `/local/antarikfox/${name}?v=${Date.now().toString(36)}`;
        } catch (e) { /* пробуем следующий корень */ }
      }
      throw new Error('file-editor-upload-failed');
    },
    /** 2. Во встроенное хранилище картинок HA (без дополнений) */
    async viaImageApi(hass, blob, name) {
      if (!hass) throw new Error('no-hass');
      const fd = new FormData();
      fd.append('file', new File([blob], name, { type: blob.type }));
      const r = await this.fetchAuth(hass, '/api/image/upload', { method: 'POST', body: fd });
      if (!r || !r.ok) throw new Error(`image-api-${r && r.status}`);
      const j = await r.json();
      if (!j || !j.id) throw new Error('image-api-no-id');
      return `/api/image/serve/${j.id}/original`;
    },
    download(blob, name) {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = name;
      document.body.appendChild(a); a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    },
    /** Загружает фото и возвращает { url, method, name, size } */
    async upload(hass, file, base, state) {
      const { blob, ext } = await this.optimize(file);
      const name = `antarikfox-${slugify(base)}${state ? `-${slugify(state)}` : ''}.${ext}`;
      const online = hass && (typeof hass.callWS === 'function' || typeof hass.fetchWithAuth === 'function' || hass.__token);
      if (!online) {
        const url = await new Promise((res) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.readAsDataURL(blob); });
        return { url, method: 'preview', name, size: blob.size };
      }
      try { return { url: await this.viaFileEditor(hass, blob, name), method: 'www', name, size: blob.size }; } catch (e) { /* дальше */ }
      try { return { url: await this.viaImageApi(hass, blob, name), method: 'image', name, size: blob.size }; } catch (e) { /* дальше */ }
      this.download(blob, name);
      return { url: `/local/antarikfox/${name}`, method: 'download', name, size: blob.size };
    },
  };
  /* ═════════════════════════ UI-КИТ РЕДАКТОРА ═════════════════════════ */
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const el = (tag, cls, attrs) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (attrs) for (const k in attrs) {
      if (k === 'text') e.textContent = attrs[k];
      else if (k === 'html') e.innerHTML = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    return e;
  };
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
  };
  /** Копирование, которое работает и по http (HA в локальной сети), и во встроенных окнах */
  const copyLegacy = (text) => {
    const ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:0;left:0;width:2px;height:2px;opacity:0;pointer-events:none';
    document.body.appendChild(ta);
    ta.focus(); ta.select(); ta.setSelectionRange(0, text.length);
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    ta.remove();
    return ok;
  };
  const copyText = async (text) => {
    try { if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; } } catch (e) { /* запасной способ */ }
    return copyLegacy(text);
  };
  const PLEXUS_PREVIEW = "<svg viewBox='0 0 34 20' width='34' height='20'><g stroke='url(#pg)' stroke-width='.7' fill='none'><path d='M3 4L12 9L22 3L31 10L24 17L12 9M3 4L6 16L12 9M24 17L6 16M22 3L24 17'/></g><g fill='#fff'><circle cx='3' cy='4' r='1.2'/><circle cx='12' cy='9' r='1.2'/><circle cx='22' cy='3' r='1.2'/><circle cx='31' cy='10' r='1.2'/><circle cx='24' cy='17' r='1.2'/><circle cx='6' cy='16' r='1.2'/></g><defs><linearGradient id='pg' x1='0' x2='1'><stop offset='0' stop-color='#38bdf8'/><stop offset='1' stop-color='#c084fc'/></linearGradient></defs></svg>";

  class UISelect {
    constructor(ed, o) {
      this.ed = ed; this.o = o; this.multi = !!o.multi; this.val = this.multi ? [] : null;
      this.el = el('div', 'sel');
      this.btn = el('button', 'sel-btn', { type: 'button', 'aria-haspopup': 'listbox', 'aria-expanded': 'false' });
      this.prev = el('span', 'sel-prev'); this.txt = el('span', 'sel-txt');
      this.btn.append(this.prev, this.txt, el('i', 'chev'));
      if (o.label) this.btn.setAttribute('aria-label', o.label);
      this.pop = el('div', 'sel-pop', { role: 'listbox' });
      if (this.multi) this.pop.setAttribute('aria-multiselectable', 'true');
      if (o.search) {
        this.q = el('input', 'in sel-q', { type: 'text', placeholder: tr(ed._lang, 'ui', 'search'), 'aria-label': tr(ed._lang, 'ui', 'search') });
        this.q.addEventListener('input', () => this.renderList());
        this.q.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowDown') { e.preventDefault(); this.focusOpt(0); }
          else if (e.key === 'Escape') { e.preventDefault(); this.close(true); }
          else if (e.key === 'Enter') { e.preventDefault(); const first = this.list.querySelector('.opt'); if (first) first.click(); }
        });
        this.pop.appendChild(this.q);
      }
      this.list = el('div', 'sel-list');
      this.pop.appendChild(this.list);
      this.el.append(this.btn, this.pop);
      this.btn.addEventListener('click', () => (this.isOpen() ? this.close() : this.open()));
      this.btn.addEventListener('keydown', (e) => { if (e.key === 'ArrowDown') { e.preventDefault(); if (!this.isOpen()) this.open(); this.focusOpt(0); } });
      this.list.addEventListener('keydown', (e) => {
        const items = [...this.list.querySelectorAll('.opt')], i = items.indexOf(this.ed.shadowRoot.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); this.focusOpt(i + 1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); if (i <= 0 && this.q) this.q.focus(); else this.focusOpt(i - 1); }
        else if (e.key === 'Escape') { e.preventDefault(); this.close(true); }
      });
      this.renderBtn();
    }
    options() { return typeof this.o.options === 'function' ? this.o.options() : this.o.options; }
    isOpen() { return this.el.classList.contains('open'); }
    open() {
      this.ed._openCtrl(this);
      this.el.classList.add('open'); this.btn.setAttribute('aria-expanded', 'true');
      if (this.q) this.q.value = '';
      if (this.o.onOpen) this.o.onOpen();
      this.renderList();
      if (this.q && matchMedia('(pointer: fine)').matches) this.q.focus();
    }
    close(focus) { this.el.classList.remove('open'); this.btn.setAttribute('aria-expanded', 'false'); if (focus) this.btn.focus(); }
    focusOpt(i) { const items = this.list.querySelectorAll('.opt'); if (items.length) items[clamp(i, 0, items.length - 1)].focus(); }
    renderList() {
      const q = ((this.q && this.q.value) || '').toLowerCase().trim();
      this.list.textContent = '';
      const opts = this.options().filter((o) => !q || o.label.toLowerCase().includes(q) || String(o.value).toLowerCase().includes(q));
      if (!opts.length) { this.list.appendChild(el('div', 'empty', { text: tr(this.ed._lang, 'ui', 'noResults') })); return; }
      let grp = null;
      for (const o of opts) {
        if (o.group && o.group !== grp) { grp = o.group; this.list.appendChild(el('div', 'grp', { text: grp })); }
        const sel = this.multi ? this.val.includes(o.value) : this.val === o.value;
        const b = el('button', 'opt', { type: 'button', role: 'option', 'aria-selected': String(sel) });
        const pv = typeof o.prev === 'function' ? o.prev() : o.prev ? el('span', 'pvh', { html: o.prev }) : null;
        if (pv) b.appendChild(pv);
        b.appendChild(el('span', 'ol', { html: `${esc(o.label)}${o.hint ? `<small>${esc(o.hint)}</small>` : ''}` }));
        b.appendChild(el('i', 'ck', { text: '✓' }));
        b.addEventListener('click', () => this.pick(o.value));
        this.list.appendChild(b);
      }
    }
    pick(v) {
      if (this.multi) {
        this.val = this.val.includes(v) ? this.val.filter((x) => x !== v) : [...this.val, v];
        this.renderBtn();
        [...this.list.querySelectorAll('.opt')].forEach((b, i) => {
          const q = ((this.q && this.q.value) || '').toLowerCase().trim();
          const o = this.options().filter((x) => !q || x.label.toLowerCase().includes(q) || String(x.value).toLowerCase().includes(q))[i];
          if (o) b.setAttribute('aria-selected', String(this.val.includes(o.value)));
        });
        this.o.onChange(this.val.slice());
      } else {
        this.val = this.o.momentary ? null : v;
        this.renderBtn(); this.close(true);
        this.o.onChange(v);
      }
    }
    set(v) {
      this.val = this.multi ? (Array.isArray(v) ? v.slice() : isNil(v) ? [] : String(v).split(/[\s,]+/).filter(Boolean)) : (v ?? null);
      this.renderBtn();
      if (this.isOpen()) this.renderList();
    }
    renderBtn() {
      const opts = this.options();
      this.prev.textContent = '';
      if (this.multi) {
        const sel = opts.filter((o) => this.val.includes(o.value));
        this.prev.innerHTML = sel.slice(0, 7).map((o) => (o.icon ? `<span class="ico">${o.icon}</span>` : '')).join('');
        this.txt.textContent = sel.length ? (sel.length <= 2 ? sel.map((o) => o.label).join(', ') : `${sel.length} ${tr(this.ed._lang, 'ui', 'selected')}`) : (this.o.placeholder || '—');
        this.txt.classList.toggle('ph', !sel.length);
      } else {
        const o = opts.find((x) => x.value === this.val);
        const pv = o && (typeof o.prev === 'function' ? o.prev() : o.prev ? el('span', 'pvh', { html: o.prev }) : null);
        if (pv) this.prev.appendChild(pv);
        this.txt.textContent = o ? o.label : (this.o.placeholder || '—');
        this.txt.classList.toggle('ph', !o);
      }
    }
  }

  class UIColor {
    constructor(ed, o) {
      this.ed = ed; this.o = o; this.val = null; this.fallback = '#38bdf8'; this.hsv = [200, 0.7, 0.9]; this.drag = false;
      const L = ed._lang;
      this.el = el('div', 'cp');
      this.btn = el('button', 'cp-btn', { type: 'button', 'aria-expanded': 'false', 'aria-label': o.label || '' });
      this.sw = el('span', 'cp-sw'); this.hex = el('span', 'cp-hex');
      this.btn.append(this.sw, this.hex, el('i', 'chev'));
      this.pop = el('div', 'cp-pop');
      this.sv = el('div', 'cp-sv', { role: 'slider', tabindex: '0', 'aria-label': tr(L, 'ui', 'spectrum') });
      this.svTh = el('i', 'th'); this.sv.appendChild(this.svTh);
      this.hue = el('div', 'cp-hue', { role: 'slider', tabindex: '0', 'aria-label': tr(L, 'ui', 'hue'), 'aria-valuemin': '0', 'aria-valuemax': '360' });
      this.hueTh = el('i', 'th'); this.hue.appendChild(this.hueTh);
      const row = el('div', 'cp-row');
      this.orb = el('span', 'cp-orb');
      this.inp = el('input', 'in cp-in', { type: 'text', spellcheck: 'false', 'aria-label': tr(L, 'ui', 'hex'), maxlength: '7' });
      row.append(this.orb, this.inp);
      if ('EyeDropper' in window) {
        const ed2 = el('button', 'ib', { type: 'button', title: tr(L, 'ui', 'eyedropper'), 'aria-label': tr(L, 'ui', 'eyedropper'), html: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.7 5.6l-2.3-2.3a1 1 0 0 0-1.4 0l-3.1 3.1-1.4-1.4-1.4 1.4 1.4 1.4L4 16.3V20h3.7l8.5-8.5 1.4 1.4 1.4-1.4-1.4-1.4 3.1-3.1a1 1 0 0 0 0-1.4zM6.9 18H6v-.9l8-8 .9.9z"/></svg>' });
        ed2.addEventListener('click', () => { new window.EyeDropper().open().then((r) => { const rgb = parseColor(r.sRGBHex); if (rgb) { this.hsv = rgbToHsv(rgb); this.emit(true); this.paint(); } }).catch(() => {}); });
        row.appendChild(ed2);
      }
      if (o.nullable) {
        const clr = el('button', 'ib txt', { type: 'button', text: tr(L, 'ui', o.nullLabel || 'usePreset') });
        clr.addEventListener('click', () => { this.val = null; this.paintBtn(); this.fromVal(); this.o.onChange(null); });
        row.appendChild(clr);
      }
      this.matsCap = el('div', 'cp-cap', { text: tr(L, 'ui', 'materials') });
      this.mats = el('div', 'cp-mats');
      this.name = el('div', 'cp-name');
      MATERIALS.forEach(([hex, ru, en]) => {
        const nm = L === 'ru' ? ru : en;
        const g = el('button', 'gem', { type: 'button', title: nm, 'aria-label': nm });
        g.style.setProperty('--c', hex);
        g.addEventListener('click', () => { this.hsv = rgbToHsv(parseColor(hex)); this.emit(true); this.paint(); this.name.textContent = nm; });
        g.addEventListener('pointerenter', () => { this.name.textContent = nm; });
        g.addEventListener('focus', () => { this.name.textContent = nm; });
        this.mats.appendChild(g);
      });
      this.recCap = el('div', 'cp-cap', { text: tr(L, 'ui', 'recent') });
      this.rec = el('div', 'cp-rec');
      this.pop.append(this.sv, this.hue, row, this.matsCap, this.mats, this.name, this.recCap, this.rec);
      this.el.append(this.btn, this.pop);

      this.btn.addEventListener('click', () => (this.isOpen() ? this.close() : this.open()));
      this._bindDrag(this.sv, (x, y) => { this.hsv[1] = x; this.hsv[2] = 1 - y; });
      this._bindDrag(this.hue, (x) => { this.hsv[0] = x * 360; });
      this.sv.addEventListener('keydown', (e) => this._key(e, (dx, dy) => { this.hsv[1] = clamp(this.hsv[1] + dx * 0.02, 0, 1); this.hsv[2] = clamp(this.hsv[2] - dy * 0.02, 0, 1); }));
      this.hue.addEventListener('keydown', (e) => this._key(e, (dx) => { this.hsv[0] = (this.hsv[0] + dx * 4 + 360) % 360; }));
      this.inp.addEventListener('input', () => { const v = this.inp.value.trim(); if (/^#?[\da-f]{6}$/i.test(v)) { this.hsv = rgbToHsv(parseColor(v)); this.emit(false); this.paint(true); } });
      this.inp.addEventListener('change', () => { const rgb = parseColor(this.inp.value); if (rgb) { this.hsv = rgbToHsv(rgb); this.emit(true); this.paint(); } else this.paint(); });
      this.paintBtn();
    }
    _key(e, fn) {
      const map = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
      if (!map[e.key]) return;
      e.preventDefault(); fn(...map[e.key]); this.emit(false); this.paint();
      clearTimeout(this._kt); this._kt = setTimeout(() => this.commit(), 500);
    }
    _bindDrag(area, fn) {
      const handle = (e) => {
        const r = area.getBoundingClientRect();
        fn(clamp((e.clientX - r.left) / r.width, 0, 1), clamp((e.clientY - r.top) / r.height, 0, 1));
        this.emit(false); this.paint();
      };
      area.addEventListener('pointerdown', (e) => {
        e.preventDefault(); this.drag = true;
        try { area.setPointerCapture(e.pointerId); } catch (err) { /* нет захвата */ }
        handle(e);
      });
      area.addEventListener('pointermove', (e) => { if (this.drag) handle(e); });
      const end = () => { if (!this.drag) return; this.drag = false; this.commit(); };
      area.addEventListener('pointerup', end);
      area.addEventListener('pointercancel', end);
    }
    isOpen() { return this.el.classList.contains('open'); }
    open() { this.ed._openCtrl(this); this.el.classList.add('open'); this.btn.setAttribute('aria-expanded', 'true'); this.fromVal(); this.renderRecent(); }
    close(focus) { this.el.classList.remove('open'); this.btn.setAttribute('aria-expanded', 'false'); if (focus) this.btn.focus(); }
    set(v, fallback) {
      if (fallback) this.fallback = fallback;
      if (this.drag) return;
      const rgb = parseColor(v);
      const nv = rgb ? toHex(rgb) : null;
      if (nv === this.val && this.isOpen()) return;
      this.val = nv;
      this.paintBtn();
      if (this.isOpen()) this.fromVal();
    }
    fromVal() { this.hsv = rgbToHsv(parseColor(this.val || this.fallback) || [56, 189, 248]); this.paint(); }
    cur() { return toHex(hsvToRgb(...this.hsv)); }
    paint(keepInput) {
      const [hh, s, v] = this.hsv, hex = this.cur();
      this.sv.style.backgroundColor = `hsl(${hh} 100% 50%)`;
      this.svTh.style.left = `${s * 100}%`; this.svTh.style.top = `${(1 - v) * 100}%`; this.svTh.style.background = hex;
      this.hueTh.style.left = `${(hh / 360) * 100}%`; this.hueTh.style.background = `hsl(${hh} 100% 50%)`;
      this.hue.setAttribute('aria-valuenow', String(Math.round(hh)));
      this.orb.style.setProperty('--c', hex);
      if (!keepInput && this.ed.shadowRoot.activeElement !== this.inp) this.inp.value = hex;
    }
    paintBtn() {
      const shown = this.val || this.fallback;
      this.sw.style.setProperty('--c', shown);
      this.sw.classList.toggle('auto', !this.val);
      this.hex.textContent = this.val ? this.val.toUpperCase() : `${tr(this.ed._lang, 'ui', this.o.nullLabel || 'usePreset')} · ${String(shown).toUpperCase()}`;
    }
    emit(commit) {
      this.val = this.cur();
      this.paintBtn();
      cancelAnimationFrame(this._raf);
      this._raf = requestAnimationFrame(() => this.o.onChange(this.val));
      if (commit) this.commit();
    }
    commit() {
      if (!this.val) return;
      const rec = [this.val, ...store.get('afx-recent-colors', []).filter((x) => x !== this.val)].slice(0, 12);
      store.set('afx-recent-colors', rec);
      this.renderRecent();
    }
    renderRecent() {
      const rec = store.get('afx-recent-colors', []);
      this.rec.textContent = '';
      this.recCap.style.display = rec.length ? '' : 'none';
      rec.forEach((hex) => {
        const b = el('button', 'chipc', { type: 'button', title: hex, 'aria-label': hex });
        b.style.setProperty('--c', hex);
        b.addEventListener('click', () => { const rgb = parseColor(hex); if (rgb) { this.hsv = rgbToHsv(rgb); this.emit(false); this.paint(); } });
        this.rec.appendChild(b);
      });
    }
  }

  class UISlider {
    constructor(ed, o) {
      this.o = o;
      this.el = el('div', 'sl');
      const lb = el('div', 'lb', { title: tr(ed._lang, 'ui', 'dblReset') });
      lb.appendChild(el('span', '', { text: o.label }));
      this.out = el('output');
      lb.appendChild(this.out);
      this.inp = el('input', '', { type: 'range', min: String(o.min), max: String(o.max), step: String(o.step), 'aria-label': o.label });
      this.inp.addEventListener('input', () => { this.paint(); o.onChange(Number(this.inp.value)); });
      lb.addEventListener('dblclick', () => o.onChange(null));
      this.el.append(lb, this.inp);
    }
    set(v) { this.inp.value = String(v); this.paint(); }
    paint() {
      const { min, max, unit } = this.o, v = Number(this.inp.value);
      this.inp.style.setProperty('--fill', `${((v - min) / (max - min)) * 100}%`);
      this.out.textContent = `${Number.isInteger(this.o.step) ? v : v.toFixed(2).replace(/0$/, '')}${unit || ''}`;
    }
  }

  class UISwitch {
    constructor(ed, o) {
      this.el = el('button', 'sw', { type: 'button', role: 'switch', 'aria-checked': 'false' });
      this.el.append(el('i'), el('span', '', { text: o.label }));
      this.el.addEventListener('click', () => { const v = this.el.getAttribute('aria-checked') !== 'true'; this.set(v); o.onChange(v); });
    }
    set(v) { this.el.setAttribute('aria-checked', String(!!v)); }
  }

  class UIInput {
    constructor(ed, o) {
      this.el = el('label', 'fld');
      this.el.appendChild(el('span', 'lbt', { text: o.label }));
      this.inp = el('input', 'in', { type: o.number ? 'number' : 'text', step: 'any', 'aria-label': o.label });
      if (!isNil(o.placeholder)) this.inp.placeholder = String(o.placeholder);
      this.inp.addEventListener('change', () => {
        const v = this.inp.value.trim();
        o.onChange(v === '' ? null : o.number ? (isNaN(Number(v)) ? null : Number(v)) : v);
      });
      this.el.appendChild(this.inp);
    }
    set(v) { if (this.inp !== this.inp.getRootNode().activeElement) this.inp.value = isNil(v) ? '' : String(v); }
  }

  class UIEntity {
    constructor(ed, o) {
      this.ed = ed; this.o = o;
      this.el = el('div', 'sel ent');
      const lab = el('label', 'fld');
      lab.appendChild(el('span', 'lbt', { text: o.label }));
      this.inp = el('input', 'in', { type: 'text', spellcheck: 'false', placeholder: 'light.living_room', 'aria-label': o.label, autocomplete: 'off', autocapitalize: 'off', autocorrect: 'off' });
      lab.appendChild(this.inp);
      this.pop = el('div', 'sel-pop', { role: 'listbox' });
      this.list = el('div', 'sel-list'); this.pop.appendChild(this.list);
      this.el.append(lab, this.pop);
      this.inp.addEventListener('focus', () => this.open());
      this.inp.addEventListener('input', () => { if (!this.isOpen()) this.open(); else this.render(); });
      this.inp.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); const f = this.list.querySelector('.opt'); if (f) f.focus(); }
        if (e.key === 'Escape') this.close();
        if (e.key === 'Enter') { e.preventDefault(); this.commit(this.inp.value.trim()); }
      });
      this.inp.addEventListener('change', () => this.commit(this.inp.value.trim()));
      this.list.addEventListener('keydown', (e) => {
        const items = [...this.list.querySelectorAll('.opt')], i = items.indexOf(this.ed.shadowRoot.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); if (items[i + 1]) items[i + 1].focus(); }
        if (e.key === 'ArrowUp') { e.preventDefault(); if (i <= 0) this.inp.focus(); else items[i - 1].focus(); }
        if (e.key === 'Escape') { this.close(); this.inp.focus(); }
      });
    }
    isOpen() { return this.el.classList.contains('open'); }
    open() { if (!this.ed._hass || !this.ed._hass.states) return; this.ed._openCtrl(this); this.el.classList.add('open'); this.render(); }
    close() { this.el.classList.remove('open'); }
    commit(v) { const nv = v ? String(v).trim().replace(/^([A-Za-z_]+)\./, (m) => m.toLowerCase()) : null; if (nv !== this._last) { this._last = nv; this.o.onChange(nv); } }
    render() {
      const q = this.inp.value.toLowerCase().trim(), st = (this.ed._hass && this.ed._hass.states) || {};
      const ids = Object.keys(st).filter((id) => !q || id.includes(q) || String(st[id].attributes && st[id].attributes.friendly_name || '').toLowerCase().includes(q)).sort().slice(0, 60);
      this.list.textContent = '';
      if (!ids.length) { this.list.appendChild(el('div', 'empty', { text: tr(this.ed._lang, 'ui', 'noResults') })); return; }
      ids.forEach((id) => {
        const s = st[id], b = el('button', 'opt', { type: 'button', role: 'option' });
        const on = !INACTIVE.has(s.state);
        b.appendChild(el('i', `dot${on ? ' on' : ''}`));
        b.appendChild(el('span', 'ol', { html: `${esc((s.attributes && s.attributes.friendly_name) || id)}<small>${esc(id)} · ${esc(s.state)}</small>` }));
        b.addEventListener('click', () => { this.inp.value = id; this.close(); this.commit(id); this.inp.focus(); });
        this.list.appendChild(b);
      });
    }
    set(v) { this._last = v || null; if (this.inp !== this.ed.shadowRoot.activeElement) this.inp.value = v || ''; }
  }

  /** Выбор иконки: поиск по-русски и по-английски, превью, эмодзи, свободный ввод */
  class UIIcon {
    constructor(ed, o) {
      this.ed = ed; this.o = o;
      const T = (k) => tr(ed._lang, 'ui', k);
      this.el = el('div', 'sel ent icp');
      const lab = el('label', 'fld');
      lab.appendChild(el('span', 'lbt', { text: o.label }));
      const row = el('div', 'icrow');
      this.pv = el('span', 'icpv');
      this.inp = el('input', 'in', { type: 'text', spellcheck: 'false', autocapitalize: 'off', autocorrect: 'off', autocomplete: 'off', placeholder: T('iconSearch'), 'aria-label': o.label });
      this.clr = el('button', 'tbi sm', { type: 'button', text: '✕', title: T('clear'), 'aria-label': T('clear') });
      row.append(this.pv, this.inp, this.clr);
      lab.appendChild(row);
      this.pop = el('div', 'sel-pop', { role: 'listbox' });
      this.grid = el('div', 'icgrid');
      this.emo = el('div', 'icemo');
      this.pop.append(el('div', 'grp', { text: T('iconEmoji') }), this.emo, el('div', 'grp', { text: T('iconAll') }), this.grid);
      this.el.append(lab, this.pop);
      ICON_EMOJI.forEach((e) => { const b = el('button', 'ice', { type: 'button', text: e, 'aria-label': e }); b.addEventListener('click', () => this.pick(e)); this.emo.appendChild(b); });
      this.inp.addEventListener('focus', () => this.open());
      this.inp.addEventListener('input', () => { if (!this.isOpen()) this.open(); else this.render(); });
      this.inp.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.close();
        if (e.key === 'Enter') { e.preventDefault(); const f = this.grid.querySelector('.ici'); if (f && this.inp.value && !/:/.test(this.inp.value)) f.click(); else this.commit(); }
        if (e.key === 'ArrowDown') { e.preventDefault(); const f = this.grid.querySelector('.ici'); if (f) f.focus(); }
      });
      this.inp.addEventListener('change', () => this.commit());
      this.clr.addEventListener('click', () => { this.inp.value = ''; this.pick(null); });
    }
    isOpen() { return this.el.classList.contains('open'); }
    open() { this.ed._openCtrl(this); this.el.classList.add('open'); this.render(); }
    close() { this.el.classList.remove('open'); }
    glyph(icon) {
      if (icon && /^[a-z]+:/.test(icon) && customElements.get('ha-icon')) { const h = document.createElement('ha-icon'); h.setAttribute('icon', icon); h.icon = icon; return h; }
      return el('span', '', { text: icon ? (MDI_EMOJI[icon] || (/:/.test(icon) ? '◻' : icon)) : '·' });
    }
    render() {
      const q = this.inp.value.toLowerCase().replace(/^mdi\s*:\s*/, '').trim();
      this.grid.textContent = '';
      const list = ICON_LIST.filter((x) => !q || x.keys.includes(q)).slice(0, 80);
      if (!list.length) { this.grid.appendChild(el('div', 'empty', { text: tr(this.ed._lang, 'ui', 'noResults') })); return; }
      list.forEach((x) => {
        const b = el('button', 'ici', { type: 'button', title: x.icon, 'aria-label': x.icon });
        b.append(this.glyph(x.icon), el('small', '', { text: x.icon.slice(4) }));
        b.addEventListener('click', () => this.pick(x.icon));
        this.grid.appendChild(b);
      });
    }
    pick(v) { this.set(v); this.close(); this.o.onChange(v || null); }
    commit() { const v = normIcon(this.inp.value) || null; this.set(v); this.o.onChange(v); }
    set(v) {
      this.val = v || '';
      if (this.inp !== this.ed.shadowRoot.activeElement) this.inp.value = this.val;
      this.pv.textContent = ''; this.pv.appendChild(this.glyph(this.val));
    }
  }

  class UIYaml {
    constructor(ed, o) {
      this.ed = ed; this.o = o;
      this.el = el('div', 'yaml');
      this.err = el('div', 'err');
      if (customElements.get('ha-yaml-editor')) {
        this.ha = document.createElement('ha-yaml-editor');
        this.ha.addEventListener('value-changed', (e) => { e.stopPropagation(); if (e.detail && e.detail.isValid !== false && e.detail.value && typeof e.detail.value === 'object') { this.err.textContent = ''; o.onChange(e.detail.value); } else this.err.textContent = tr(ed._lang, 'ui', 'yamlError'); });
        this.el.appendChild(this.ha);
      } else {
        this.ta = el('textarea', 'in ta', { spellcheck: 'false', 'aria-label': o.label });
        this.ta.addEventListener('change', () => {
          try { const v = YAML.parse(this.ta.value); if (!v || typeof v !== 'object') throw new Error('empty'); this.err.textContent = ''; o.onChange(v); }
          catch (e) { this.err.textContent = `${tr(ed._lang, 'ui', 'yamlError')}: ${e.message}`; }
        });
        this.el.appendChild(this.ta);
      }
      this.el.appendChild(this.err);
    }
    set(v) {
      const key = JSON.stringify(v ?? {});
      if (key === this._key) return;
      this._key = key;
      if (this.ha) {
        this.ha.hass = this.ed._hass;
        if (this.ha.setValue) this.ha.setValue(v ?? {}); else this.ha.defaultValue = v ?? {};
      } else if (this.ta !== this.ed.shadowRoot.activeElement) this.ta.value = v ? YAML.dump(v) : '';
    }
  }

  const EDITOR_CSS = `
:host{display:block;position:relative;max-width:100%;min-width:0;color:var(--e-text);
  --e-text:var(--primary-text-color,#e6eeff);--e-muted:var(--secondary-text-color,rgba(200,215,255,.62));
  --e-line:var(--divider-color,rgba(160,190,255,.16));--e-accent:var(--primary-color,#7dd3fc);
  --e-field:color-mix(in srgb,var(--e-text) 6%,transparent);--e-field2:color-mix(in srgb,var(--e-text) 11%,transparent);
  font-size:14px}
*{box-sizing:border-box}
button{font:inherit;color:inherit}
.bar{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px}
.tb{all:unset;box-sizing:border-box;display:inline-flex;align-items:center;gap:7px;padding:8px 12px;border-radius:12px;cursor:pointer;
  font-size:13px;font-weight:500;background:var(--e-field);border:1px solid var(--e-line);transition:background .15s,border-color .15s}
.tb:hover{background:var(--e-field2)}
.tb:focus-visible,.sel-btn:focus-visible,.cp-btn:focus-visible,.opt:focus-visible,.sw:focus-visible,.gem:focus-visible,.sh:focus-visible,.ib:focus-visible,.chipc:focus-visible{outline:2px solid var(--e-accent);outline-offset:2px}
.tb.hero{background:linear-gradient(120deg,#38bdf8,#818cf8 55%,#c084fc);color:#060812;border:0;font-weight:600}
.sec{border:1px solid var(--e-line);border-radius:18px;margin:10px 0;background:color-mix(in srgb,var(--e-text) 2.5%,transparent)}
.sh{all:unset;box-sizing:border-box;width:100%;display:flex;align-items:center;gap:10px;padding:13px 16px;font-weight:600;font-size:14px;cursor:pointer;border-radius:18px}
.sh .gd{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,#38bdf8,#818cf8,#c084fc);box-shadow:0 0 10px #818cf8}
.sh .chev{margin-left:auto}
.sb{display:none;padding:2px 16px 16px;gap:14px}
.sec.open .sb{display:grid}
.sec.open>.sh .chev{transform:rotate(-135deg)}
.chev{flex:none;width:8px;height:8px;border-right:2px solid var(--e-muted);border-bottom:2px solid var(--e-muted);transform:rotate(45deg);transition:transform .2s;margin:-3px 2px 0 auto}
.fld{display:grid;gap:6px}
.lbt,.lb{font-size:12.5px;color:var(--e-muted)}
.lb{display:flex;justify-content:space-between;cursor:default;user-select:none}
.lb output{font-variant-numeric:tabular-nums;color:var(--e-text)}
.in{all:unset;box-sizing:border-box;width:100%;padding:10px 12px;border-radius:12px;background:var(--e-field);border:1px solid var(--e-line);font-size:13.5px;color:var(--e-text)}
.in:focus{border-color:var(--e-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--e-accent) 22%,transparent)}
.ta{min-height:160px;white-space:pre;font-family:ui-monospace,monospace;font-size:12px}
.two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.sw-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px}

.sel{position:relative}
.sel-btn,.cp-btn{all:unset;box-sizing:border-box;width:100%;display:flex;align-items:center;gap:10px;padding:8px 12px;min-height:42px;border-radius:12px;
  background:var(--e-field);border:1px solid var(--e-line);cursor:pointer;transition:border-color .15s,box-shadow .15s}
.sel.open>.sel-btn,.cp.open>.cp-btn{border-color:var(--e-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--e-accent) 20%,transparent)}
.sel.open>.sel-btn .chev,.cp.open>.cp-btn .chev{transform:rotate(-135deg)}
.sel-prev{display:flex;gap:2px;align-items:center}
.sel-prev:empty{display:none}
.sel-txt{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13.5px}
.sel-txt.ph{color:var(--e-muted)}
.sel-pop{display:none;margin-top:6px;padding:6px;border-radius:14px;background:var(--e-field);border:1px solid var(--e-line);max-height:300px;overflow:auto;overscroll-behavior:contain}
.sel.open>.sel-pop{display:block;animation:afx-pop .18s cubic-bezier(.2,.8,.2,1)}
@keyframes afx-pop{from{opacity:0;transform:translateY(-4px)}}
.sel-q{margin-bottom:6px;padding:8px 10px}
.opt{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:10px;width:100%;padding:7px 10px;border-radius:10px;cursor:pointer;font-size:13.5px}
.opt:hover{background:var(--e-field2)}
.opt[aria-selected=true]{background:color-mix(in srgb,var(--e-accent) 18%,transparent)}
.ol{flex:1;min-width:0;display:grid}
.ol small{font-size:11.5px;color:var(--e-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ck{font-style:normal;opacity:0;color:var(--e-accent);font-weight:700}
.opt[aria-selected=true] .ck{opacity:1}
.empty{padding:10px;color:var(--e-muted);font-size:13px}
.pvh{display:flex}
.pv{display:block;width:34px;height:20px;border-radius:7px;flex:none}
.pvw{display:block;width:34px;height:20px;border-radius:7px;background:#0b1226;overflow:hidden;flex:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
.pvw .tx{display:block;width:100%;height:100%;background:linear-gradient(135deg,#38bdf8,#818cf8,#c084fc)}
.ico{font-size:16px;line-height:1;width:22px;text-align:center}
.dot{width:9px;height:9px;border-radius:50%;background:var(--e-field2);flex:none}
.dot.on{background:var(--e-accent);box-shadow:0 0 8px var(--e-accent)}

.cp-sw{width:24px;height:24px;border-radius:50%;flex:none;background:var(--c);box-shadow:0 0 12px color-mix(in srgb,var(--c) 70%,transparent),inset 0 0 0 2px rgba(255,255,255,.3)}
.cp-sw.auto{background:conic-gradient(var(--c) 0 50%,transparent 0) ,repeating-conic-gradient(rgba(127,127,127,.35) 0 25%,transparent 0 50%) 0 0/8px 8px}
.cp-hex{flex:1;font-family:ui-monospace,monospace;font-size:12.5px;letter-spacing:.02em}
.cp-pop{display:none;margin-top:8px;padding:12px;border-radius:16px;background:var(--e-field);border:1px solid var(--e-line);gap:11px}
.cp.open>.cp-pop{display:grid;animation:afx-pop .18s cubic-bezier(.2,.8,.2,1)}
.cp-sv{position:relative;height:150px;border-radius:12px;cursor:crosshair;touch-action:none;outline-offset:2px;
  background-image:linear-gradient(to top,#000,rgba(0,0,0,0)),linear-gradient(to right,#fff,rgba(255,255,255,0))}
.cp-hue{position:relative;height:14px;border-radius:8px;cursor:pointer;touch-action:none;outline-offset:2px;
  background:linear-gradient(90deg,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)}
.th{position:absolute;width:18px;height:18px;border-radius:50%;border:2px solid #fff;transform:translate(-50%,-50%);pointer-events:none;
  box-shadow:0 0 0 1px rgba(0,0,0,.35),0 2px 8px rgba(0,0,0,.5)}
.cp-hue .th{top:50%}
.cp-sv:focus-visible,.cp-hue:focus-visible{outline:2px solid var(--e-accent)}
.cp-row{display:flex;gap:8px;align-items:center}
.cp-orb{width:36px;height:36px;border-radius:50%;flex:none;background:var(--c);box-shadow:0 0 18px var(--c),inset 0 0 0 2px rgba(255,255,255,.25)}
.cp-in{flex:1;min-width:0;font-family:ui-monospace,monospace}
.ib{all:unset;box-sizing:border-box;display:grid;place-items:center;min-width:38px;height:38px;padding:0 10px;border-radius:11px;background:var(--e-field2);cursor:pointer;font-size:12.5px;white-space:nowrap}
.ib:hover{background:color-mix(in srgb,var(--e-accent) 22%,transparent)}
.cp-cap{font-size:12px;color:var(--e-muted);margin-top:2px}
.cp-mats{display:grid;grid-template-columns:repeat(10,1fr);gap:7px}
.gem{all:unset;aspect-ratio:1;border-radius:50%;cursor:pointer;transition:transform .15s;
  background:radial-gradient(circle at 32% 28%,rgba(255,255,255,.9) 0 7%,transparent 32%),radial-gradient(circle at 50% 58%,var(--c),color-mix(in srgb,var(--c) 50%,#000) 100%);
  box-shadow:0 0 9px color-mix(in srgb,var(--c) 60%,transparent),inset 0 -2px 4px rgba(0,0,0,.35)}
.gem:hover,.gem:focus-visible{transform:scale(1.2)}
.cp-name{font-size:12px;min-height:16px;margin-top:-4px}
.cp-rec{display:flex;flex-wrap:wrap;gap:6px}
.chipc{all:unset;width:22px;height:22px;border-radius:7px;cursor:pointer;background:var(--c);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25)}

.sl{display:grid;gap:7px}
.sl input{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:6px;margin:6px 0;outline:none;cursor:pointer;
  background:linear-gradient(90deg,var(--e-accent) var(--fill,0%),var(--e-field2) var(--fill,0%))}
.sl input::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#fff;border:0;
  box-shadow:0 0 0 3px var(--e-accent),0 0 12px var(--e-accent)}
.sl input::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#fff;border:0;box-shadow:0 0 0 3px var(--e-accent),0 0 12px var(--e-accent)}
.sl input:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 3px var(--e-accent),0 0 0 6px color-mix(in srgb,var(--e-accent) 35%,transparent)}

.sw{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:9px;padding:9px 11px;border-radius:12px;background:var(--e-field);cursor:pointer;font-size:13px;line-height:1.2}
.sw i{width:32px;height:18px;border-radius:9px;background:var(--e-field2);position:relative;flex:none;transition:background .2s}
.sw i::after{content:"";position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:#fff;transition:left .2s;box-shadow:0 1px 3px rgba(0,0,0,.4)}
.sw[aria-checked=true] i{background:var(--e-accent);box-shadow:0 0 10px color-mix(in srgb,var(--e-accent) 60%,transparent)}
.sw[aria-checked=true] i::after{left:16px}
.err{color:#ff6b81;font-size:12px;min-height:0}
.grp{font-size:11px;font-weight:600;letter-spacing:.04em;color:var(--e-muted);padding:10px 10px 4px}
.fnt{display:block;width:34px;text-align:center;font-size:17px;line-height:20px}
.tools{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:8px}
.tbi{all:unset;box-sizing:border-box;display:grid;place-items:center;width:36px;height:36px;border-radius:11px;cursor:pointer;font-size:15px;
  background:var(--e-field);border:1px solid var(--e-line)}
.tbi:hover{background:var(--e-field2)}
.tbi:disabled{opacity:.35;cursor:default}
.tbi:focus-visible,.look:focus-visible{outline:2px solid var(--e-accent);outline-offset:2px}
.tb[aria-pressed=true]{border-color:var(--e-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--e-accent) 20%,transparent)}
.search{margin:4px 0 6px}
.drawer{display:none;border:1px solid var(--e-line);border-radius:18px;padding:12px;margin:8px 0;background:color-mix(in srgb,var(--e-text) 2.5%,transparent)}
.drawer.open{display:grid;gap:10px;animation:afx-pop .18s cubic-bezier(.2,.8,.2,1)}
.looks{display:grid;grid-template-columns:repeat(auto-fill,minmax(112px,1fr));gap:8px}
.look{all:unset;box-sizing:border-box;cursor:pointer;border-radius:14px;padding:10px;min-height:74px;display:flex;flex-direction:column;justify-content:space-between;
  color:#fff;font-size:12.5px;font-weight:600;text-shadow:0 1px 3px rgba(0,0,0,.6);box-shadow:inset 0 0 0 1px rgba(255,255,255,.18);transition:transform .15s}
.look:hover{transform:translateY(-2px)}
.look span{font-size:20px}
.stl{display:flex;gap:8px;align-items:center}
.stl .nm{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px}
.hint2{font-size:12px;color:var(--e-muted)}
.pal{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(108px,100%),1fr));gap:6px}
.sb,.fld,.fields2,.bbody{grid-template-columns:minmax(0,1fr)}
.sb>*,.fld>*,.pal,.sel,.cp,.bitem,.blist{min-width:0}
.palb{all:unset;box-sizing:border-box;min-width:0;overflow-wrap:anywhere;line-height:1.2;display:flex;align-items:center;gap:7px;padding:8px 10px;border-radius:12px;cursor:pointer;font-size:12.5px;
  background:var(--e-field);border:1px solid var(--e-line);transition:background .15s,transform .12s}
.palb:hover{background:var(--e-field2)}
.palb:active{transform:scale(.97)}
.palb:focus-visible{outline:2px solid var(--e-accent);outline-offset:2px}
.palb span{font-size:16px}
.blist{display:grid;gap:6px}
.bitem{border:1px solid var(--e-line);border-radius:14px;background:var(--e-field)}
.bitem.open{border-color:color-mix(in srgb,var(--e-accent) 55%,transparent)}
.bhead{display:flex;align-items:center;gap:4px;padding:4px}
.bname{all:unset;box-sizing:border-box;flex:1;min-width:0;display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:10px;cursor:pointer;font-size:13.5px;font-weight:600}
.bname:focus-visible{outline:2px solid var(--e-accent)}
.bname small{font-weight:400;color:var(--e-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}
.bico{font-size:16px}
.tbi.sm{width:30px;height:30px;font-size:13px;border-radius:9px}
.bbody{display:grid;gap:12px;padding:6px 12px 14px;border-top:1px solid var(--e-line)}
.bbody .blist{padding-left:8px;border-left:2px solid color-mix(in srgb,var(--e-accent) 35%,transparent)}
.strow{display:grid;grid-template-columns:84px minmax(0,1fr) 30px 30px;gap:6px;align-items:center}
.strow.drop,.icrow.drop{outline:2px dashed var(--e-accent);outline-offset:3px;border-radius:12px}
.afx-credit{display:block;margin:14px 0 4px;padding:10px 12px;border-radius:14px;text-align:center;font-size:12px;color:var(--e-muted);text-decoration:none;
  border:1px solid var(--e-line);background:linear-gradient(135deg,rgba(56,189,248,.08),rgba(167,139,250,.08),rgba(244,114,182,.08))}
.afx-credit .g{background:linear-gradient(90deg,#38bdf8,#a78bfa,#f472b6);-webkit-background-clip:text;background-clip:text;color:transparent;letter-spacing:.03em}
.afx-credit .u{color:var(--e-accent)}
.afx-credit:hover{filter:brightness(1.15)}
.sbadge{margin-left:8px;min-width:18px;padding:1px 6px;border-radius:9px;font-size:11px;font-weight:700;background:var(--e-accent);color:#06101f;text-align:center}
.sh .chev{margin-left:auto}
.tb.rsec{justify-self:start;font-size:12px;padding:6px 10px;opacity:.85}
.rmbox{display:grid;gap:8px;padding:12px;border-radius:12px;border:1px solid rgba(245,158,11,.5);background:rgba(245,158,11,.1);font-size:12.5px;line-height:1.4}
.langseg{display:inline-flex;margin-left:auto;padding:2px;border-radius:10px;border:1px solid var(--e-line);background:var(--e-field)}
.langseg button{all:unset;cursor:pointer;padding:5px 9px;border-radius:8px;font-size:11.5px;font-weight:700;color:var(--e-muted)}
.langseg button[aria-pressed=true]{background:var(--e-accent);color:#06101f}
.langseg button:focus-visible{outline:2px solid var(--e-accent)}
.tb.hero2{background:linear-gradient(120deg,#22c55e,#14b8a6);color:#04120b;border-color:transparent}
.stwhere{grid-column:1/-1;font-size:11.5px;color:var(--e-muted);overflow-wrap:anywhere;margin-top:-2px}
.stthumb{grid-column:1/-1;max-height:90px;max-width:100%;object-fit:contain;border-radius:10px;background:repeating-conic-gradient(rgba(127,127,127,.18) 0 25%,transparent 0 50%) 0 0/14px 14px;justify-self:start}
.erow{display:grid;grid-template-columns:1fr 30px;gap:6px;align-items:end}
.rowb{display:flex;flex-wrap:wrap;gap:6px}
.seg2{display:flex;gap:6px;flex-wrap:wrap}
.bdrag{flex:none;display:grid;place-items:center;width:26px;height:30px;cursor:grab;touch-action:none;color:var(--e-muted);font-size:16px;user-select:none;border-radius:8px}
.bdrag:hover{background:var(--e-field2)}
.bitem.dragging{position:relative;z-index:3;opacity:.92;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:none}
.bitem.drop-before{box-shadow:0 -3px 0 var(--e-accent)}
.bitem.drop-after{box-shadow:0 3px 0 var(--e-accent)}
.icrow{display:flex;gap:6px;align-items:center}
.icrow .in{flex:1;min-width:0}
.icpv{flex:none;width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:var(--e-field);border:1px solid var(--e-line);font-size:18px;--mdc-icon-size:22px}
.icgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(76px,1fr));gap:4px}
.ici{all:unset;box-sizing:border-box;display:grid;justify-items:center;gap:3px;padding:8px 4px;border-radius:10px;cursor:pointer;font-size:18px;--mdc-icon-size:24px;min-width:0}
.ici small{font-size:10px;color:var(--e-muted);max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ici:hover,.ici:focus-visible,.ice:hover,.ice:focus-visible{background:var(--e-field2);outline:none}
.icemo{display:flex;flex-wrap:wrap;gap:2px}
.ice{all:unset;width:36px;height:36px;display:grid;place-items:center;border-radius:9px;cursor:pointer;font-size:19px}
.cond{border:1px dashed var(--e-line);border-radius:12px;padding:8px 10px}
.cond summary{cursor:pointer;font-size:12.5px;color:var(--e-muted)}
.fields2{display:grid;gap:10px;margin-top:10px}
.toast{position:absolute;top:0;right:0;padding:8px 12px;border-radius:10px;font-size:12.5px;background:var(--e-accent);color:#060812;
  opacity:0;transform:translateY(-6px);transition:.2s;pointer-events:none;z-index:5}
.toast.show{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
`;

  /* ═════════════════════════ РЕДАКТОР ═════════════════════════ */
  const EXTRA_DEFAULTS = { grid_cols: 6, grid_rows: 'auto', night_dim: 1, hue_shift: 0, progress_min: 0, progress_max: 100, fx_min: 0, fx_max: 100 };
  const NESTED = {
    alert_entity: ['alert', 'entity'], alert_state: ['alert', 'state'], alert_above: ['alert', 'above'], alert_below: ['alert', 'below'], alert_color: ['alert', 'color'], alert_fx: ['alert', 'fx'],
    grid_cols: ['grid_options', 'columns'], grid_rows: ['grid_options', 'rows'],
    ev_change: ['events', 'change'], ev_on: ['events', 'on'], ev_off: ['events', 'off'], ev_tap: ['events', 'tap'], ev_alert: ['events', 'alert'],
  };
  const b64e = (o) => `AFX3:${btoa(unescape(encodeURIComponent(JSON.stringify(o))))}`;
  const b64d = (s) => JSON.parse(decodeURIComponent(escape(atob(String(s).trim().replace(/^AFX\d?:/, '')))));

  class AntarikfoxGlassCardEditor extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._config = {}; this._ctrls = {}; this._lang = null; this._built = false; this._open = null;
      this._openSecs = new Set(['builder', 'glow']);
      this._undo = []; this._redo = []; this._drawer = null; this._bOpen = new Set();
      this.shadowRoot.addEventListener('keydown', (e) => {
        if (!(e.ctrlKey || e.metaKey) || /^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
        const k = e.key.toLowerCase();
        if (k === 'z' && !e.shiftKey) { e.preventDefault(); this._hist(true); }
        else if (k === 'y' || (k === 'z' && e.shiftKey)) { e.preventDefault(); this._hist(false); }
      });
      this.standalone = false;
      this.shadowRoot.addEventListener('click', (e) => {
        if (this._open && !this._open.el.contains(e.target)) { this._open.close(); this._open = null; }
      }, true);
    }

    set hass(h) {
      this._hass = h;
      const l = detectLang(h);
      if (!this._langForced && l !== this._lang) { this._lang = l; if (this._built) this._build(); }
      if (this._ctrls.card) this._ctrls.card.c.set(this._config.card ?? this._config.cards);
    }
    get hass() { return this._hass; }
    set extraActions(v) { this._extra = Array.isArray(v) ? v : []; if (this._built) this._build(); }
    get extraActions() { return this._extra || []; }
    set lang(l) { this._langForced = true; this._lang = ['ru', 'en', 'zh', 'ja'].includes(l) ? l : 'en'; if (this._built) this._build(); }
    get lang() { return this._lang; }

    setConfig(c) {
      if (this._built && JSON.stringify(c || {}) === JSON.stringify(this._config)) return;
      this._config = { ...(c || {}) };
      if (!this._built) this._build(); else this._sync();
    }
    connectedCallback() { if (!this._built) this._build(); }

    _openCtrl(c) { if (this._open && this._open !== c) this._open.close(); this._open = c; }

    _get(k) {
      const n = NESTED[k];
      if (n) return this._config[n[0]] ? this._config[n[0]][n[1]] : undefined;
      return this._config[k];
    }
    _shown(k) { const v = this._get(k); return isNil(v) ? (DEFAULTS[k] ?? EXTRA_DEFAULTS[k]) : v; }

    _record() {
      const now = Date.now();
      if (now - (this._lastRec || 0) > 700) {
        this._undo.push(JSON.stringify(this._config));
        if (this._undo.length > 80) this._undo.shift();
        this._redo = [];
      }
      this._lastRec = now;
      this._histBtns();
    }
    _histBtns() { if (this._ub) { this._ub.disabled = !this._undo.length; this._rb.disabled = !this._redo.length; } }
    _hist(back) {
      const from = back ? this._undo : this._redo, to = back ? this._redo : this._undo;
      if (!from.length) return;
      to.push(JSON.stringify(this._config));
      this._config = JSON.parse(from.pop());
      this._lastRec = 0; this._sync(); this._fire(); this._histBtns();
    }
    _applyStyle(st, keepBehavior = true) {
      this._record();
      const keep = Object.fromEntries(Object.entries(this._config).filter(([k]) => BEHAVIOR_KEYS.includes(k) && (keepBehavior || k === 'card' || k === 'cards' || k === 'type')));
      const vis = Object.fromEntries(Object.entries(st).filter(([k]) => k !== 'icon' && k !== 'type' && k !== 'card' && k !== 'cards'));
      this._config = { ...keep, ...vis };
      this._sync(); this._fire();
    }

    _set(k, v) {
      this._record();
      const c = { ...this._config };
      const n = NESTED[k];
      if (n) {
        const a = { ...(c[n[0]] || {}) };
        if (isNil(v) || (Array.isArray(v) && !v.length)) delete a[n[1]]; else a[n[1]] = v;
        if (Object.keys(a).length) c[n[0]] = a; else delete c[n[0]];
      } else if (isNil(v) || (Array.isArray(v) && !v.length)) delete c[k];
      else c[k] = v;
      this._config = c;
      if (isNil(v) && this._ctrls[k]) this._syncOne(k);
      this._fire();
    }

    _setBool(k, v) {
      if (DEFAULT_TRUE.includes(k)) this._set(k, v ? null : false);
      else this._set(k, v ? true : null);
    }

    _fire() {
      if (this._secKeys) this._badges();
      cancelAnimationFrame(this._fq);
      this._fq = requestAnimationFrame(() => {
        this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: { ...this._config } }, bubbles: true, composed: true }));
      });
    }

    _toast(msg) {
      if (!this._toastEl) return;
      this._toastEl.textContent = msg; this._toastEl.classList.add('show');
      clearTimeout(this._tt); this._tt = setTimeout(() => this._toastEl.classList.remove('show'), 1600);
    }

    _presetRgb(i) {
      const c = this._config, p = PRESETS[c.preset] || PRESETS.aurora;
      return p[i];
    }

    _syncOne(k) {
      const ctl = this._ctrls[k];
      if (!ctl) return;
      if (ctl.kind === 'bool') ctl.c.set(DEFAULT_TRUE.includes(k) ? this._get(k) !== false : !!this._get(k));
      else if (ctl.kind === 'color') ctl.c.set(this._get(k), ctl.fallback());
      else if (ctl.kind === 'slider') ctl.c.set(this._shown(k));
      else if (ctl.kind === 'yaml') ctl.c.set(this._config.card ?? this._config.cards);
      else if (ctl.kind === 'gridrows') ctl.c.set(String(this._get('grid_rows') ?? 'auto'));
      else if (ctl.kind === 'valign') ctl.c.set(this._get('valign') || 'top');
      else if (ctl.kind === 'select') ctl.c.set(isNil(this._get(k)) ? (ctl.nullable ? '' : this._shown(k)) : this._get(k));
      else ctl.c.set(this._get(k));
    }
    _sync() {
      Object.keys(this._ctrls).forEach((k) => this._syncOne(k));
      this._badges();
      if (this._builderBox && JSON.stringify(this._config.content || null) !== this._bKey) this._renderBuilder();
    }

    /** Сколько настроек изменено в каждом разделе */
    _badges() {
      Object.values(this._secKeys || {}).forEach(({ keys, badge }) => {
        const n = keys.filter((k) => { const v = this._get(k); return !isNil(v) && v !== '' && !(Array.isArray(v) && !v.length); }).length;
        badge.textContent = n ? String(n) : '';
        badge.hidden = !n;
      });
    }

    /* ═════════ Конструктор ═════════ */
    _getArr(c, path) { return path.reduce((o, k) => (o == null ? o : o[k]), c); }
    _getBlock(c, bpath) { const a = this._getArr(c, bpath.slice(0, -1)); return a ? a[bpath[bpath.length - 1]] : null; }
    _mutContent(fn, rerender = true) {
      this._record();
      const c = JSON.parse(JSON.stringify(this._config.content || { padding: 16, gap: 12, blocks: [] }));
      if (!Array.isArray(c.blocks)) c.blocks = [];
      fn(c);
      this._config = { ...this._config, content: c };
      this._fire();
      if (rerender) this._renderBuilder(); else this._bKey = JSON.stringify(c);
    }
    _newBlock(type) {
      const e = this._config.entity;
      const T = (k) => tr(this._lang, 'blk', k);
      const map = {
        title: { entity: e }, image: { entity: e, image: '', height: 180 }, entity: { entity: e }, value: { entity: e }, button: { name: T('button'), icon: 'mdi:power', entity: e },
        buttons: { items: [{ type: 'button', icon: 'mdi:power', entity: e }] }, slider: { entity: e }, progress: { entity: e }, media: { entity: e },
        chips: { entities: e ? [e] : [] }, text: { text: T('text') }, row: { blocks: [] }, column: { blocks: [] }, divider: {}, spacer: { size: 12 },
        card: { card: { type: 'markdown', content: '…' } },
      };
      return JSON.parse(JSON.stringify({ type, ...(map[type] || {}) }));
    }
    _addBlock(path, type) {
      let idx = 0;
      this._mutContent((c) => { let a = this._getArr(c, path); if (!a) { const parent = this._getArr(c, path.slice(0, -1)); parent[path[path.length - 1]] = []; a = parent[path[path.length - 1]]; } a.push(this._newBlock(type)); idx = a.length - 1; }, false);
      this._bOpen.add([...path, idx].join('.'));
      this._renderBuilder();
    }
    _renderBuilder() {
      const box = this._builderBox;
      if (!box) return;
      const T = (g, k) => tr(this._lang, g, k);
      const content = this._config.content;
      this._bKey = JSON.stringify(content || null);
      box.textContent = '';
      const blocks = (content && content.blocks) || [];
      if (!blocks.length) box.appendChild(el('div', 'hint2', { text: T('ui', 'builderEmpty') }));
      /* быстрые макеты */
      const lay = el('div', 'fld'); lay.dataset.s = `${T('ui', 'layouts')} layouts`.toLowerCase();
      lay.appendChild(el('span', 'lbt', { text: T('ui', 'layouts') }));
      const le = new UIEntity(this, { label: T('ui', 'layoutEntity'), onChange: (v) => { this._layEnt = v; } });
      le.set(this._layEnt || this._config.entity || '');
      const lrow = el('div', 'pal');
      Object.entries(LAYOUTS).forEach(([k, L]) => {
        const b = el('button', 'palb', { type: 'button' });
        b.append(el('span', '', { text: L.icon }), document.createTextNode(T('ui', `lay_${k}`)));
        b.addEventListener('click', () => { const ent = this._layEnt || this._config.entity; this._mutContent((c) => { c.blocks = JSON.parse(JSON.stringify(L.make(ent, T))); if ('pad' in L) { c.padding = L.pad; c.gap = L.pad; } else if (c.padding === 0) { delete c.padding; delete c.gap; } }); });
        lrow.appendChild(b);
      });
      lay.append(le.el, lrow);
      box.appendChild(lay);
      /* палитра предметов */
      const pal = el('div', 'fld'); pal.dataset.s = `${T('ui', 'palette')} blocks`.toLowerCase();
      pal.appendChild(el('span', 'lbt', { text: T('ui', 'palette') }));
      const g = el('div', 'pal');
      BLOCK_TYPES.forEach((t) => {
        const b = el('button', 'palb', { type: 'button', title: T('blk', t) });
        b.append(el('span', '', { text: BLOCK_ICONS[t] }), document.createTextNode(T('blk', t)));
        b.addEventListener('click', () => this._addBlock(['blocks'], t));
        g.appendChild(b);
      });
      pal.appendChild(g);
      box.appendChild(pal);
      if (!blocks.length) return;
      const two = el('div', 'two');
      [['padding', 0, 32, 1], ['gap', 0, 28, 1]].forEach(([k, a, b, st]) => {
        const sl = new UISlider(this, { label: T('fld', k), min: a, max: b, step: st, unit: 'px', onChange: (v) => this._mutContent((c) => { if (v === null) delete c[k]; else c[k] = v; }, false) });
        sl.set(num(content[k], k === 'padding' ? 16 : 12));
        two.appendChild(sl.el);
      });
      box.appendChild(two);
      this._renderBlockList(box, ['blocks']);
      const clr = el('button', 'tb', { type: 'button', text: `✕ ${T('ui', 'clearBuilder')}` });
      clr.addEventListener('click', () => { this._record(); const c = { ...this._config }; delete c.content; this._config = c; this._fire(); this._renderBuilder(); });
      box.appendChild(clr);
    }
    _summary(b) {
      if (b.text) return String(b.text).slice(0, 40);
      if (b.name) return String(b.name);
      if (b.entity) return b.entity;
      if (b.items) return `× ${b.items.length}`;
      if (b.blocks) return `× ${b.blocks.length}`;
      if (b.entities) return `× ${b.entities.length}`;
      if (b.card && b.card.type) return b.card.type;
      return '';
    }
    _renderBlockList(box, path, kind) {
      const T = (g, k) => tr(this._lang, g, k);
      const arr = this._getArr(this._config.content || {}, path) || [];
      const list = el('div', 'blist');
      arr.forEach((b, i) => {
        const key = [...path, i].join('.'), open = this._bOpen.has(key);
        const item = el('div', `bitem${open ? ' open' : ''}`);
        const head = el('div', 'bhead');
        const grip = el('span', 'bdrag', { text: '⠿', title: T('ui', 'drag'), 'aria-hidden': 'true' });
        grip.addEventListener('pointerdown', (e) => this._dragStart(e, list, path, i));
        head.appendChild(grip);
        const nm = el('button', 'bname', { type: 'button', 'aria-expanded': String(open) });
        const type = kind || b.type;
        nm.append(el('span', 'bico', { text: BLOCK_ICONS[type] || '?' }), el('span', '', { text: T('blk', type) }), el('small', '', { text: this._summary(b) }));
        nm.addEventListener('click', () => { if (open) this._bOpen.delete(key); else this._bOpen.add(key); this._renderBuilder(); });
        const ctl = (ic, lab, fn, dis) => { const x = el('button', 'tbi sm', { type: 'button', title: T('ui', lab), 'aria-label': T('ui', lab), text: ic }); x.disabled = !!dis; x.addEventListener('click', fn); return x; };
        head.append(nm,
          ctl('↑', 'moveUp', () => this._mutContent((c) => { const a = this._getArr(c, path); [a[i - 1], a[i]] = [a[i], a[i - 1]]; }), i === 0),
          ctl('↓', 'moveDown', () => this._mutContent((c) => { const a = this._getArr(c, path); [a[i + 1], a[i]] = [a[i], a[i + 1]]; }), i === arr.length - 1),
          ctl('⧉', 'dup', () => this._mutContent((c) => { const a = this._getArr(c, path); a.splice(i + 1, 0, JSON.parse(JSON.stringify(a[i]))); })),
          ctl('✕', 'del', () => { this._bOpen.delete(key); this._mutContent((c) => { this._getArr(c, path).splice(i, 1); }); }));
        item.appendChild(head);
        if (open) { const body = el('div', 'bbody'); this._blockForm(body, b, [...path, i], type); item.appendChild(body); }
        list.appendChild(item);
      });
      box.appendChild(list);
    }
    /** Перетаскивание предмета пальцем или мышью за ручку ⠿ */
    _dragStart(e, list, path, from) {
      e.preventDefault();
      const items = [...list.children], startY = e.clientY;
      const rects = items.map((x) => x.getBoundingClientRect());
      const it = items[from];
      try { e.target.setPointerCapture(e.pointerId); } catch (err) { /* без захвата */ }
      it.classList.add('dragging');
      let to = from;
      const move = (ev) => {
        const y = ev.clientY;
        it.style.transform = `translateY(${y - startY}px)`;
        to = rects.filter((r, k) => k !== from && r.top + r.height / 2 < y).length;
        items.forEach((x, k) => x.classList.toggle('drop-before', k !== from && k === (to >= from ? to + 1 : to)));
        items.forEach((x, k) => x.classList.toggle('drop-after', k !== from && to === items.length - 1 && k === items.length - 1 && to >= from));
      };
      const up = () => {
        e.target.removeEventListener('pointermove', move);
        e.target.removeEventListener('pointerup', up);
        e.target.removeEventListener('pointercancel', up);
        items.forEach((x) => { x.classList.remove('drop-before', 'drop-after', 'dragging'); x.style.transform = ''; });
        if (to !== from) this._mutContent((c) => { const a = this._getArr(c, path); const [x] = a.splice(from, 1); a.splice(to, 0, x); });
      };
      e.target.addEventListener('pointermove', move);
      e.target.addEventListener('pointerup', up);
      e.target.addEventListener('pointercancel', up);
    }
    _condField(body, b, bpath) {
      const T = (g, k) => tr(this._lang, g, k);
      const c0 = (b.show_if && !Array.isArray(b.show_if) && typeof b.show_if === 'object') ? b.show_if : {};
      const set = (k, v) => this._mutContent((c) => {
        const blk = this._getBlock(c, bpath);
        const cond = { ...(blk.show_if && !Array.isArray(blk.show_if) ? blk.show_if : {}) };
        if (isNil(v)) delete cond[k]; else cond[k] = v;
        if (Object.keys(cond).length) blk.show_if = cond; else delete blk.show_if;
      }, false);
      const box = el('details', 'cond');
      if (Object.keys(c0).length) box.open = true;
      box.appendChild(el('summary', '', { text: `👁 ${T('ui', 'cond')}` }));
      const g = el('div', 'fields2');
      const en = new UIEntity(this, { label: T('fld', 'entity'), onChange: (v) => set('entity', v) }); en.set(c0.entity); g.appendChild(en.el);
      [['state', false], ['state_not', false]].forEach(([k]) => { const x = new UIInput(this, { label: T('fld', k), placeholder: 'on', onChange: (v) => set(k, v) }); x.set(c0[k]); g.appendChild(x.el); });
      const two = el('div', 'two');
      ['above', 'below'].forEach((k) => { const x = new UIInput(this, { label: T('fld', k), number: true, onChange: (v) => set(k, v) }); x.set(c0[k]); two.appendChild(x.el); });
      g.appendChild(two);
      const tm = new UIInput(this, { label: T('ui', 'condTime'), placeholder: '18:00-07:00', onChange: (v) => set('time', v) }); tm.set(c0.time); g.appendChild(tm.el);
      box.appendChild(g);
      body.appendChild(box);
    }
    _blockForm(body, b, bpath, type) {
      const T = (g, k) => tr(this._lang, g, k);
      const setF = (k, v, rerender = false) => this._mutContent((c) => {
        const blk = this._getBlock(c, bpath);
        if (!blk) return;
        if (isNil(v) || (Array.isArray(v) && !v.length) || (v && typeof v === 'object' && !Array.isArray(v) && !Object.keys(v).length)) delete blk[k]; else blk[k] = v;
      }, rerender);
      const wrap = (label, node) => { const f = el('div', 'fld'); f.appendChild(el('span', 'lbt', { text: label })); f.appendChild(node); return f; };
      for (const [k, kind, arg] of BLOCK_FIELDS[type] || []) {
        const label = T('fld', k);
        if (kind === 'text' || kind === 'number') {
          const x = new UIInput(this, { label, number: kind === 'number', onChange: (v) => setF(k, v) }); x.set(b[k]); body.appendChild(x.el);
        } else if (kind === 'textarea') {
          const ta = el('textarea', 'in ta', { 'aria-label': label }); ta.style.minHeight = '70px'; ta.style.whiteSpace = 'pre-wrap'; ta.value = b[k] || '';
          ta.addEventListener('change', () => setF(k, ta.value || null)); body.appendChild(wrap(label, ta));
        } else if (kind === 'entity') {
          const x = new UIEntity(this, { label, onChange: (v) => setF(k, v) }); x.set(b[k]); body.appendChild(x.el);
        } else if (kind === 'imgheight') {
          const mode = b[k] === 'auto' ? 'auto' : b[k] === 'fill' ? 'fill' : 'fixed';
          const ms = new UISelect(this, { label, options: ['fixed', 'auto', 'fill'].map((v) => ({ value: v, label: T('opt', `h_${v}`) })),
            onChange: (v) => setF(k, v === 'fixed' ? 180 : v, true) });
          ms.set(mode); body.appendChild(wrap(label, ms.el));
          if (mode === 'fixed') {
            const x = new UISlider(this, { label: '', min: 60, max: 480, step: 10, unit: 'px', onChange: (v) => setF(k, v) });
            x.set(num(b[k], 180)); body.appendChild(x.el);
          }
        } else if (kind === 'imageurl') {
          const wrapR = el('div', 'icrow');
          const x = new UIInput(this, { label, placeholder: '/local/antarikfox/photo.webp', onChange: (v) => setF(k, v) }); x.set(b[k]);
          const up = el('button', 'tbi', { type: 'button', text: '📷', title: T('ui', 'upload'), 'aria-label': T('ui', 'upload') });
          up.style.alignSelf = 'end';
          up.addEventListener('click', () => this._pickPhoto(this._photoBase(b), '', (url) => setF(k, url, true)));
          x.el.style.flex = '1'; x.el.style.minWidth = '0';
          wrapR.append(x.el, up); body.appendChild(wrapR);
          this._dropPhoto(wrapR, x.el, this._photoBase(b), '', (u) => setF(k, u, true));
        } else if (kind === 'icon') {
          const x = new UIIcon(this, { label, onChange: (v) => setF(k, normIcon(v)) }); x.set(b[k]); body.appendChild(x.el);
        } else if (kind === 'select') {
          const x = new UISelect(this, { label, options: arg.map((v) => ({ value: v, label: T('opt', v) })), onChange: (v) => setF(k, v) }); x.set(b[k] ?? arg[k === 'size' && type === 'value' ? 2 : k === 'size' ? 1 : 0]); body.appendChild(wrap(label, x.el));
        } else if (kind === 'bool') {
          const x = new UISwitch(this, { label, onChange: (v) => setF(k, arg ? (v ? null : false) : (v ? true : null)) }); x.set(arg ? b[k] !== false : !!b[k]); body.appendChild(x.el);
        } else if (kind === 'slider') {
          const [mn, mx, st, unit] = arg;
          const x = new UISlider(this, { label, min: mn, max: mx, step: st, unit, onChange: (v) => setF(k, v) }); x.set(num(b[k], k === 'height' ? 180 : k === 'size' ? 12 : 1)); body.appendChild(x.el);
        } else if (kind === 'color') {
          const x = new UIColor(this, { label, nullable: true, nullLabel: 'byDefault', onChange: (v) => setF(k, v) }); x.set(b[k], '#818cf8'); body.appendChild(wrap(label, x.el));
        } else if (kind === 'action') this._actionField(body, b, k, bpath, label);
        else if (kind === 'states') this._statesField(body, b, bpath, label);
        else if (kind === 'entities') {
          const box = el('div', 'fld'); box.appendChild(el('span', 'lbt', { text: label }));
          (b.entities || []).forEach((en, i) => {
            const r = el('div', 'erow');
            const x = new UIEntity(this, { label: `${label} ${i + 1}`, onChange: (v) => this._mutContent((c) => { const blk = this._getBlock(c, bpath); blk.entities[i] = v || ''; }, false) });
            x.set(typeof en === 'string' ? en : en && en.entity);
            const del = el('button', 'tbi sm', { type: 'button', text: '✕', 'aria-label': T('ui', 'del') });
            del.addEventListener('click', () => this._mutContent((c) => { this._getBlock(c, bpath).entities.splice(i, 1); }));
            r.append(x.el, del); box.appendChild(r);
          });
          const add = el('button', 'tb', { type: 'button', text: T('ui', 'addEntity') });
          add.addEventListener('click', () => this._mutContent((c) => { const blk = this._getBlock(c, bpath); (blk.entities = blk.entities || []).push(this._config.entity || ''); }));
          box.appendChild(add); body.appendChild(box);
        } else if (kind === 'items' || kind === 'nested') {
          const box = el('div', 'fld'); box.appendChild(el('span', 'lbt', { text: label }));
          this._renderBlockList(box, [...bpath, k], kind === 'items' ? 'button' : null);
          if (kind === 'items') {
            const add = el('button', 'tb', { type: 'button', text: T('ui', 'addItem') });
            add.addEventListener('click', () => this._addBlock([...bpath, 'items'], 'button'));
            box.appendChild(add);
          } else {
            const sel = new UISelect(this, { label: T('ui', 'addInto'), momentary: true, placeholder: `+ ${T('ui', 'addInto')}`, options: BLOCK_TYPES.filter((t) => t !== 'row' && t !== 'column').map((t) => ({ value: t, label: T('blk', t), prev: `<span class="ico">${BLOCK_ICONS[t]}</span>` })), onChange: (t) => this._addBlock([...bpath, 'blocks'], t) });
            box.appendChild(sel.el);
          }
          body.appendChild(box);
        } else if (kind === 'yaml') {
          const ta = el('textarea', 'in ta', { spellcheck: 'false', 'aria-label': label }); ta.value = b.card ? YAML.dump(b.card) : '';
          const err = el('div', 'err');
          ta.addEventListener('change', () => { try { const v = YAML.parse(ta.value); if (!v || typeof v !== 'object' || !v.type) throw new Error('type'); err.textContent = ''; setF('card', v); } catch (e) { err.textContent = T('ui', 'yamlError'); } });
          body.appendChild(wrap(label, ta)); body.appendChild(err);
        }
      }
      this._condField(body, b, bpath);
    }
    _actionField(body, b, k, bpath, label) {
      const T = (g, kk) => tr(this._lang, g, kk);
      const a = b[k] || {}, isHold = k === 'hold_action';
      const opts = (isHold ? ['none', 'toggle', 'more-info', 'navigate', 'url', 'perform-action'] : ['auto', 'toggle', 'more-info', 'navigate', 'url', 'perform-action', 'none']).map((v) => ({ value: v, label: T('act', v) }));
      const cur = a.action || (isHold ? 'none' : 'auto');
      const sel = new UISelect(this, { label, options: opts, onChange: (v) => this._mutContent((c) => { const blk = this._getBlock(c, bpath); if (v === 'auto' || (isHold && v === 'none')) delete blk[k]; else blk[k] = { action: v }; }) });
      sel.set(cur);
      const f = el('div', 'fld'); f.append(el('span', 'lbt', { text: label }), sel.el); body.appendChild(f);
      if (cur !== 'none' && cur !== 'auto') {
        const cf = new UISwitch(this, { label: T('ui', 'confirm'), onChange: (v) => this._mutContent((c) => { const blk = this._getBlock(c, bpath); const act = { ...(blk[k] || { action: cur }) }; if (v) act.confirmation = true; else delete act.confirmation; blk[k] = act; }, false) });
        cf.set(!!a.confirmation); body.appendChild(cf.el);
      }
      const extra = { navigate: ['navigation_path'], url: ['url_path'], 'perform-action': ['perform_action', 'data'] }[cur] || [];
      extra.forEach((p) => {
        const x = new UIInput(this, { label: T('fld', p), onChange: (v) => this._mutContent((c) => {
          const blk = this._getBlock(c, bpath), act = { ...(blk[k] || { action: cur }) };
          if (p === 'data') { try { act.data = v ? JSON.parse(v) : undefined; } catch (e) { return; } } else act[p] = v || undefined;
          blk[k] = JSON.parse(JSON.stringify(act));
        }, false) });
        x.set(p === 'data' ? (a.data ? JSON.stringify(a.data) : '') : a[p]);
        body.appendChild(x.el);
      });
    }
    /** Выбор файлов → сжатие → загрузка → пути прописываются в карточку */
    _pickFiles(multiple, cb) {
      const inp = document.createElement('input');
      inp.type = 'file'; inp.accept = 'image/*'; inp.multiple = !!multiple;
      inp.style.cssText = 'position:fixed;left:-9999px;opacity:0';
      this.shadowRoot.appendChild(inp);
      inp.addEventListener('change', () => { const fs = [...(inp.files || [])]; inp.remove(); if (fs.length) cb(fs); }, { once: true });
      inp.click();
    }
    async _uploadOne(file, base, state) {
      const T = (k) => tr(this._lang, 'ui', k);
      this._toast(T('uploading'));
      try {
        const r = await Uploader.upload(this._hass, file, base, state);
        this._toast(`✓ ${T(`up_${r.method}`)} · ${r.name} · ${Math.round(r.size / 1024)} ${T('kb')}`);
        return r.url;
      } catch (e) { this._toast(`⚠ ${T('upFail')}: ${e.message}`); return null; }
    }
    _pickPhoto(base, state, done) {
      this._pickFiles(false, async ([f]) => { const url = await this._uploadOne(f, base, state); if (url) done(url); });
    }
    /** Фото можно перетащить на строку или вставить из буфера (Ctrl+V) */
    _dropPhoto(zone, field, base, state, done) {
      zone.title = tr(this._lang, 'ui', 'dropHere');
      zone.addEventListener('dragover', (e) => { if (e.dataTransfer && [...e.dataTransfer.types].includes('Files')) { e.preventDefault(); zone.classList.add('drop'); } });
      zone.addEventListener('dragleave', () => zone.classList.remove('drop'));
      zone.addEventListener('drop', async (e) => {
        zone.classList.remove('drop');
        const f = e.dataTransfer && [...e.dataTransfer.files].find((x) => /^image\//.test(x.type));
        if (!f) return;
        e.preventDefault();
        const u = await this._uploadOne(f, base, state); if (u) done(u);
      });
      (field || zone).addEventListener('paste', async (e) => {
        const it = e.clipboardData && [...e.clipboardData.items].find((x) => x.kind === 'file' && /^image\//.test(x.type));
        if (!it) return;
        e.preventDefault();
        const u = await this._uploadOne(it.getAsFile(), base, state); if (u) done(u);
      });
    }
    _photoBase(b) { return (b && b.entity) || this._config.entity || (b && b.text) || 'card'; }
    _statesField(body, b, bpath, label) {
      const T = (g, kk) => tr(this._lang, g, kk);
      const box = el('div', 'fld'); box.appendChild(el('span', 'lbt', { text: label }));
      const map = b.state_images || {};
      const setMap = (fn, rerender) => this._mutContent((c) => { const blk = this._getBlock(c, bpath); const m = { ...(blk.state_images || {}) }; const out = fn(m); if (out && Object.keys(out).length) blk.state_images = out; else delete blk.state_images; }, rerender);
      Object.entries(map).forEach(([st, url]) => {
        const r = el('div', 'strow');
        const si = el('input', 'in', { type: 'text', 'aria-label': T('ui', 'state'), value: st });
        const ui = el('input', 'in', { type: 'text', 'aria-label': 'URL', placeholder: '/local/tv_on.png', value: url || '' });
        si.value = st; ui.value = url || '';
        si.addEventListener('change', () => setMap((m) => { const o = {}; Object.entries(m).forEach(([kk, vv]) => { o[kk === st ? si.value.trim() || st : kk] = vv; }); return o; }, true));
        ui.addEventListener('change', () => setMap((m) => { m[st] = ui.value.trim(); return m; }, false));
        const up = el('button', 'tbi sm', { type: 'button', text: '📷', title: T('ui', 'upload'), 'aria-label': T('ui', 'upload') });
        up.addEventListener('click', () => this._pickPhoto(this._photoBase(b), st, (url) => setMap((m) => { m[st] = url; return m; }, true)));
        const del = el('button', 'tbi sm', { type: 'button', text: '✕', 'aria-label': T('ui', 'del') });
        del.addEventListener('click', () => setMap((m) => { delete m[st]; return m; }, true));
        r.append(si, ui, up, del);
        this._dropPhoto(r, ui.el || ui, this._photoBase(b), st, (u) => setMap((m) => { m[st] = u; return m; }, true));
        if (url && /^(\/|https?:|data:image)/.test(url)) {
          const th = el('img', 'stthumb', { alt: '' }); th.src = url;
          const where = /^\/local\//.test(url) ? `☁ ${T('ui', 'whereWww')}${url.replace(/^\/local\//, '/config/www/').replace(/\?.*$/, '')}`
            : /^\/api\/image\//.test(url) ? `☁ ${T('ui', 'whereImage')}` : /^data:/.test(url) ? `⚠ ${T('ui', 'wherePreview')}` : '';
          const note = el('div', 'stwhere', { text: where });
          th.addEventListener('error', () => { if (/^\/local\//.test(url)) note.textContent = `⚠ ${T('ui', 'whereMissing')}${url.replace(/^\/local\//, '/config/www/').replace(/\?.*$/, '')}`; });
          r.append(th, note);
        }
        box.appendChild(r);
      });
      const row = el('div', 'rowb');
      const add = el('button', 'tb', { type: 'button', text: T('ui', 'addState') });
      add.addEventListener('click', () => setMap((m) => { let n = 'state'; let i = 1; while (m[n] !== undefined) n = `state${i++}`; m[n] = ''; return m; }, true));
      const oo = el('button', 'tb', { type: 'button', text: T('ui', 'onoff') });
      oo.addEventListener('click', () => setMap((m) => { if (m.on === undefined) m.on = ''; if (m.off === undefined) m.off = ''; return m; }, true));
      const pair = el('button', 'tb hero', { type: 'button', text: T('ui', 'uploadPair') });
      pair.addEventListener('click', () => {
        const base = this._photoBase(b);
        this._pickFiles(true, async (files) => {
          const isOff = (f) => /(^|[^a-z])(off|vykl)([^a-z]|$)|выкл|потух|погас|cold|dark/i.test(f.name);
          const isOn = (f) => /(^|[^a-z])(on|vkl)([^a-z]|$)|вкл|горит|fire|lit/i.test(f.name) && !isOff(f);
          let on = files.find(isOn), off = files.find(isOff);
          const rest = files.filter((f) => f !== on && f !== off);
          if (!on) on = rest.shift();
          if (!off) off = rest.shift();
          const res = {};
          if (on) res.on = await this._uploadOne(on, base, 'on');
          if (off) res.off = await this._uploadOne(off, base, 'off');
          setMap((m) => { if (res.on) m.on = res.on; if (res.off) m.off = res.off; return m; }, true);
        });
      });
      row.append(add, oo); box.append(row, pair);
      body.appendChild(box);
    }

    /* ── действия панели ── */
    _surprise() {
      this._record();
      const R = (a) => a[Math.floor(Math.random() * a.length)];
      const c = Object.fromEntries(Object.entries(this._config).filter(([k]) => BEHAVIOR_KEYS.includes(k)));
      if (Math.random() < 0.45) c.preset = R(Object.keys(PRESETS));
      else {
        const [a, b, d] = harmony(hslToRgb(rand(0, 360), rand(75, 100), rand(52, 64)), R(Object.keys(HARMONIES)));
        Object.assign(c, { glow_tl: a, glow_mid: b, glow_br: d });
      }
      c.glow_intensity = +rand(0.85, 1.6).toFixed(2);
      c.edge_mode = R(['static', 'static', 'rotate', 'pulse']);
      c.glare_mode = R(['static', 'sweep', 'follow']);
      const tex = R(TEXTURE_KEYS);
      if (tex !== 'none') { c.texture = tex; c.texture_opacity = +rand(0.08, 0.2).toFixed(2); if (Math.random() < 0.6) c.texture_lit = true; }
      const fx = FX_KEYS.filter((k) => !FX_IMPL[k].outer).sort(() => Math.random() - 0.5).slice(0, Math.floor(rand(0, 2.99)));
      if (fx.length) c.fx = fx;
      ['breathe', 'corners', 'chromatic', 'iridescent', 'reflection', 'tilt', 'scan', 'hue_cycle'].forEach((k) => { if (Math.random() < 0.25) c[k] = true; });
      c.opacity = +rand(0.18, 0.4).toFixed(2);
      c.blur = Math.round(rand(12, 28));
      this._config = c; this._sync(); this._fire();
      this._toast(`🎲 ${tr(this._lang, 'ui', 'surprise')}`);
    }
    _copyStyle() {
      const s = Object.fromEntries(Object.entries(this._config).filter(([k]) => !BEHAVIOR_KEYS.includes(k)));
      store.set('antarikfox-glass-style', s);
      this._toast(tr(this._lang, 'ui', 'copied'));
    }
    _pasteStyle() {
      const s = store.get('antarikfox-glass-style', null);
      if (!s || !Object.keys(s).length) { this._toast(tr(this._lang, 'ui', 'nothing')); return; }
      this._applyStyle(s);
      this._toast(tr(this._lang, 'ui', 'pasted'));
    }
    _resetAll() {
      this._record();
      this._config = Object.fromEntries(Object.entries(this._config).filter(([k]) => BEHAVIOR_KEYS.includes(k)));
      this._sync(); this._fire();
    }

    openImport() {
      const b = this.shadowRoot.querySelector('.tb[data-d=importCard]');
      if (b && this._drawer !== 'importCard') b.click();
      const ta = this.shadowRoot.querySelector('.drawer textarea');
      if (ta) ta.focus();
    }

    _search(q) {
      q = String(q || '').toLowerCase().trim();
      this.shadowRoot.querySelectorAll('.sec').forEach((sec) => {
        let any = false;
        sec.querySelectorAll('[data-s]').forEach((n) => { const m = !q || n.dataset.s.includes(q); n.style.display = m ? '' : 'none'; if (m) any = true; });
        sec.style.display = !q || any ? '' : 'none';
        const open = q ? any : this._openSecs.has(sec.dataset.id);
        sec.classList.toggle('open', open);
        sec.querySelector('.sh').setAttribute('aria-expanded', String(open));
      });
    }

    _renderDrawer(box, mode) {
      const T = (g, k) => tr(this._lang, g, k);
      box.textContent = '';
      if (mode === 'looks') {
        const g = el('div', 'looks');
        Object.entries(LOOKS).forEach(([k, L]) => {
          const cols = PRESETS[L.preset] || PRESETS.aurora;
          const b = el('button', 'look', { type: 'button' });
          b.style.background = `linear-gradient(135deg,${cols[0]},${cols[1]} 55%,${cols[2]})`;
          b.append(el('span', '', { text: L.icon }), document.createTextNode(T('look', k)));
          b.addEventListener('click', () => { this._applyStyle(L); this._toast(`${L.icon} ${T('ui', 'applied')}`); });
          g.appendChild(b);
        });
        box.appendChild(g);
      } else if (mode === 'myStyles') {
        const row = el('div', 'stl');
        const name = el('input', 'in', { type: 'text', placeholder: T('ui', 'styleName'), 'aria-label': T('ui', 'styleName') });
        const save = el('button', 'tb', { type: 'button', text: T('ui', 'save') });
        row.append(name, save);
        const list = el('div', 'fld');
        const render = () => {
          const all = store.get('antarikfox-glass-styles', {});
          list.textContent = '';
          if (!Object.keys(all).length) { list.appendChild(el('div', 'hint2', { text: T('ui', 'noStyles') })); return; }
          Object.entries(all).forEach(([n, st]) => {
            const r = el('div', 'stl'), cols = (PRESETS[st.preset] || [st.glow_tl, st.glow_mid, st.glow_br].map((x) => x || '#818cf8'));
            const sw = el('i', 'pv'); sw.style.background = `linear-gradient(135deg,${cols.join(',')})`;
            const ap = el('button', 'tb', { type: 'button', text: T('ui', 'apply') });
            const del = el('button', 'tbi', { type: 'button', text: '✕', title: T('ui', 'delete'), 'aria-label': T('ui', 'delete') });
            ap.addEventListener('click', () => { this._applyStyle(st); this._toast(T('ui', 'applied')); });
            del.addEventListener('click', () => { const a = store.get('antarikfox-glass-styles', {}); delete a[n]; store.set('antarikfox-glass-styles', a); render(); });
            r.append(sw, el('span', 'nm', { text: n }), ap, del);
            list.appendChild(r);
          });
        };
        save.addEventListener('click', () => {
          const n = name.value.trim() || `${T('ui', 'myStyles')} ${new Date().toLocaleString()}`;
          const a = store.get('antarikfox-glass-styles', {});
          a[n] = Object.fromEntries(Object.entries(this._config).filter(([k]) => !BEHAVIOR_KEYS.includes(k)));
          store.set('antarikfox-glass-styles', a); name.value = ''; render(); this._toast(T('ui', 'saved'));
        });
        render();
        box.append(row, list);
      } else if (mode === 'importCard') {
        const ta = el('textarea', 'in ta', { spellcheck: 'false', 'aria-label': T('ui', 'importCard') });
        ta.placeholder = T('ui', 'importHint'); ta.style.minHeight = '170px';
        const o = { strip: true, colors: true, effects: true, mode: 'wrap' };
        const ms = new UISelect(this, { label: T('ui', 'modeWrap'), options: [{ value: 'wrap', label: `🫙 ${T('ui', 'modeWrap')}` }, { value: 'rebuild', label: `🧱 ${T('ui', 'modeRebuild')}` }], onChange: (v) => { o.mode = v; } });
        ms.set('wrap');
        const tg = el('div', 'sw-grid');
        [['strip', 'optStrip'], ['colors', 'optColors'], ['effects', 'optEffects']].forEach(([k, lk]) => {
          const sw = new UISwitch(this, { label: T('ui', lk), onChange: (v) => { o[k] = v; } });
          sw.set(true); tg.appendChild(sw.el);
        });
        const go = el('button', 'tb hero', { type: 'button', text: `📥 ${T('ui', 'convert')}` });
        const out = el('div', 'fld', { role: 'status' });
        const cpy = el('button', 'tb', { type: 'button', text: `⧉ ${T('ui', 'copyResult')}` });
        cpy.addEventListener('click', async () => { const ok = await copyText(YAML.dump(this._config)); this._toast(ok ? T('ui', 'copiedYaml') : T('ui', 'badCode')); });
        go.addEventListener('click', () => {
          out.textContent = '';
          try {
            const { config, report } = convertCard(ta.value, o);
            this._record();
            this._config = { ...config, type: this._config.type || config.type };
            this._bOpen = new Set();
            if (config.content) this._openSecs.add('builder');
            this._sync(); this._fire();
            if (config.content) { const sec = this.shadowRoot.querySelector('.sec[data-id=builder]'); if (sec) { sec.classList.add('open'); sec.querySelector('.sh').setAttribute('aria-expanded', 'true'); } }
            report.forEach(([k, v]) => out.appendChild(el('div', 'hint2', { text: `✓ ${T('rep', k)}${v ? `: ${v}` : ''}` })));
            this._toast(T('ui', 'converted'));
          } catch (e) { out.appendChild(el('div', 'err', { text: T('ui', 'badCard') })); }
        });
        box.append(el('div', 'hint2', { text: T('ui', 'importAbout') }), ta, ms.el, tg, go, out, cpy);
      } else if (mode === 'exportCode') {
        const ta = el('textarea', 'in ta', { spellcheck: 'false', 'aria-label': T('ui', 'exportCode') });
        ta.style.minHeight = '90px'; ta.style.whiteSpace = 'pre-wrap'; ta.style.wordBreak = 'break-all';
        ta.value = b64e(Object.fromEntries(Object.entries(this._config).filter(([k]) => !BEHAVIOR_KEYS.includes(k))));
        const row = el('div', 'stl');
        const cp = el('button', 'tb', { type: 'button', text: T('ui', 'copyCode') });
        const ap = el('button', 'tb', { type: 'button', text: T('ui', 'importApply') });
        cp.addEventListener('click', async () => { if (await copyText(ta.value)) this._toast(T('ui', 'copied')); else { ta.focus(); ta.select(); } });
        ap.addEventListener('click', () => { try { const st = b64d(ta.value); if (!st || typeof st !== 'object') throw new Error('bad'); this._applyStyle(st); this._toast(T('ui', 'applied')); } catch (e) { this._toast(T('ui', 'badCode')); } });
        row.append(cp, ap);
        box.append(ta, row);
      }
    }

    /* ── построение интерфейса ── */
    _build() {
      const L = this._lang || (this._lang = detectLang(this._hass));
      const T = (g, k) => tr(L, g, k);
      const root = this.shadowRoot;
      root.innerHTML = `<style>${EDITOR_CSS}</style>`;
      this._ctrls = {}; this._open = null; this._secKeys = {};
      const wrap = el('div', 'ed');

      const bar = el('div', 'bar');
      const drawer = el('div', 'drawer');
      const openDrawer = (mode, btn) => {
        const same = this._drawer === mode;
        this._drawer = same ? null : mode;
        bar.querySelectorAll('.tb[data-d]').forEach((b) => b.setAttribute('aria-pressed', String(!same && b === btn)));
        drawer.classList.toggle('open', !same);
        if (!same) this._renderDrawer(drawer, mode);
      };
      [['surprise', '🎲', 'hero'], ['looks', '✨', 'd'], ['importCard', '📥', 'd'], ['myStyles', '⭐', 'd'], ['exportCode', '⇄', 'd']].forEach(([k, ic, kind]) => {
        const b = el('button', `tb${kind === 'hero' ? ' hero' : ''}`, { type: 'button' });
        b.append(el('span', '', { text: ic }), document.createTextNode(T('ui', k)));
        if (kind === 'd') { b.dataset.d = k; b.setAttribute('aria-pressed', String(this._drawer === k)); b.addEventListener('click', () => openDrawer(k, b)); }
        else b.addEventListener('click', () => this._surprise());
        bar.appendChild(b);
      });
      (this._extra || []).forEach((a) => {
        const b = el('button', `tb${a.hero ? ' hero2' : ''}`, { type: 'button', title: a.title || a.label });
        b.append(el('span', '', { text: a.icon || '' }), document.createTextNode(a.label));
        b.addEventListener('click', () => a.onClick());
        bar.appendChild(b);
      });
      const tools = el('div', 'tools');
      const ib = (ic, key, fn) => { const b = el('button', 'tbi', { type: 'button', title: T('ui', key), 'aria-label': T('ui', key), text: ic }); b.addEventListener('click', fn); tools.appendChild(b); return b; };
      this._ub = ib('↶', 'undo', () => this._hist(true));
      this._rb = ib('↷', 'redo', () => this._hist(false));
      ib('⧉', 'copyStyle', () => this._copyStyle());
      ib('⎘', 'pasteStyle', () => this._pasteStyle());
      ib('↺', 'resetAll', () => this._resetAll());
      const ov = langOverride();
      const seg = el('div', 'langseg', { role: 'group', title: T('ui', 'langHint'), 'aria-label': T('ui', 'lang') });
      [['', T('ui', 'langAuto')], ['ru', 'RU'], ['en', 'EN'], ['zh', '中文'], ['ja', '日本語']].forEach(([v, txt]) => {
        const b = el('button', '', { type: 'button', text: txt, 'aria-pressed': String((ov || '') === v) });
        b.addEventListener('click', () => {
          try { if (v) localStorage.setItem('afx-lang', v); else localStorage.removeItem('afx-lang'); } catch (e) { /* без хранилища */ }
          this._langForced = false; this._lang = detectLang(this._hass); this._build();
          window.dispatchEvent(new CustomEvent('afx-lang-changed', { detail: { lang: this._lang } }));
        });
        seg.appendChild(b);
      });
      ib('⊟', 'collapse', () => { this._openSecs.clear(); root.querySelectorAll('.sec').forEach((x) => { x.classList.remove('open'); x.querySelector('.sh').setAttribute('aria-expanded', 'false'); }); });
      tools.appendChild(seg);
      const search = el('input', 'in search', { type: 'search', placeholder: T('ui', 'findSetting'), 'aria-label': T('ui', 'findSetting') });
      search.addEventListener('input', () => this._search(search.value));
      wrap.append(bar, tools, search, drawer);
      if (this._drawer) { drawer.classList.add('open'); this._renderDrawer(drawer, this._drawer); }
      this._histBtns();

      const opt = (keys) => keys.map((v) => ({ value: v, label: T('opt', v) }));
      const presetOpts = [{ value: '', label: T('ui', 'none') }].concat(Object.keys(PRESETS).map((k) => ({
        value: k, label: T('preset', k), prev: `<i class="pv" style="background:linear-gradient(135deg,${PRESETS[k].join(',')})"></i>`,
      })));
      const texPrev = (k) => () => {
        const w = el('span', 'pvw');
        if (CANVAS_TEXTURES.includes(k)) { w.innerHTML = PLEXUS_PREVIEW; return w; }
        const t = TEXTURES[k], i = el('i', 'tx');
        if (t) {
          ['-webkit-mask-image', 'mask-image'].forEach((p) => i.style.setProperty(p, t.img));
          ['-webkit-mask-size', 'mask-size'].forEach((p) => i.style.setProperty(p, t.size(0.55)));
        } else i.style.opacity = '0';
        w.appendChild(i);
        return w;
      };
      const texOpts = ['none', ...CANVAS_TEXTURES, ...TEXTURE_KEYS.filter((k) => k !== 'none' && !CANVAS_TEXTURES.includes(k))]
        .map((k) => ({ value: k, label: T('texture', k), prev: texPrev(k), group: k === 'none' ? '' : CANVAS_TEXTURES.includes(k) ? `${T('ui', 'texLive')} · ${CANVAS_TEXTURES.length}` : `${T('ui', 'texStatic')} · ${TEXTURE_KEYS.length - 1 - CANVAS_TEXTURES.length}` }));
      const fxOpts = Object.entries(FX_GROUPS).flatMap(([g, keys]) => keys.map((k) => ({ value: k, label: T('fx', k), icon: FX_ICONS[k], prev: `<span class="ico">${FX_ICONS[k]}</span>`, group: T('fxgroup', g) })));
      const fxInner = fxOpts.filter((o) => !FX_IMPL[o.value].outer);
      const evOpts = EVENT_FX.map((k) => ({ value: k, label: T('ev', k), icon: EVENT_ICONS[k], prev: `<span class="ico">${EVENT_ICONS[k]}</span>` }));
      const fontOpts = [{ value: '', label: T('ui', 'fontTheme') }].concat(Object.keys(FONTS).map((f) => ({ value: f, label: f, prev: `<span class="fnt" style="font-family:'${f}',sans-serif">Аа</span>`, hint: LATIN_ONLY.has(f) ? T('ui', 'latin') : T('ui', 'cyr') })));

      const add = (box, key, kind, c, extra) => { this._ctrls[key] = { kind, c, ...(extra || {}) }; c.el.dataset.s = `${T('label', key)} ${key}`.toLowerCase(); box.appendChild(c.el); };
      const field = (label, node, key) => { const f = el('div', 'fld'); f.dataset.s = `${label} ${key || ''}`.toLowerCase(); f.appendChild(el('span', 'lbt', { text: label })); f.appendChild(node); return f; };

      const B = {
        select: (box, key, options, extra = {}) => {
          const c = new UISelect(this, { options, label: T('label', key), search: options.length > 8, onOpen: extra.onOpen, onChange: (v) => {
            this._set(key, v === '' ? null : v);
            if (key === 'preset') { ['glow_tl', 'glow_mid', 'glow_br'].forEach((k) => { delete this._config[k]; this._syncOne(k); }); this._fire(); }
          } });
          this._ctrls[key] = { kind: 'select', c, nullable: !!extra.nullable };
          box.appendChild(field(T('label', key), c.el, key));
        },
        multi: (box, key, options) => {
          const c = new UISelect(this, { options, multi: true, search: true, placeholder: T('ui', 'fxNone'), label: T('label', key), onChange: (v) => this._set(key, v) });
          this._ctrls[key] = { kind: 'multi', c };
          box.appendChild(field(T('label', key), c.el, key));
        },
        slider: (box, key, min, max, step, unit) => add(box, key, 'slider', new UISlider(this, { label: T('label', key), min, max, step, unit, onChange: (v) => this._set(key, v) })),
        color: (box, key, fallback, nullLabel) => {
          const c = new UIColor(this, { label: T('label', key), nullable: true, nullLabel, onChange: (v) => this._set(key, v) });
          this._ctrls[key] = { kind: 'color', c, fallback };
          box.appendChild(field(T('label', key), c.el, key));
        },
        toggles: (box, keys) => {
          const g = el('div', 'sw-grid');
          keys.forEach((k) => add(g, k, 'bool', new UISwitch(this, { label: T('label', k), onChange: (v) => this._setBool(k, v) })));
          box.appendChild(g);
        },
        input: (box, key, number) => add(box, key, 'input', new UIInput(this, { label: T('label', key), number, placeholder: EXTRA_DEFAULTS[key] ?? ({ engrave: 'ANTARIKFOX', alert_state: 'on', fx_schedule: '18:00-07:00', background_image: '/local/room.jpg' })[key] ?? '', onChange: (v) => this._set(key, v) })),
        two: (box, a, b) => { const g = el('div', 'two'); B.input(g, a, true); B.input(g, b, true); box.appendChild(g); },
        entity: (box, key) => add(box, key, 'entity', new UIEntity(this, { label: T('label', key), onChange: (v) => this._set(key, v) })),
      };

      const SECTIONS = [
        ['builder', (b) => { this._builderBox = b; this._renderBuilder(); }],
        ['layout', (b) => {
          b.appendChild(el('div', 'hint2', { text: T('ui', 'layoutHint') }));
          B.slider(b, 'grid_cols', 1, 12, 1);
          const ro = new UISelect(this, { label: T('label', 'grid_rows'), options: [{ value: 'auto', label: T('ui', 'auto') }].concat([1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => ({ value: String(n), label: String(n) }))),
            onChange: (v) => this._set('grid_rows', v === 'auto' ? 'auto' : Number(v)) });
          this._ctrls.grid_rows = { kind: 'gridrows', c: ro };
          b.appendChild(field(T('label', 'grid_rows'), ro.el, 'grid_rows'));
          const va = new UISelect(this, { label: T('label', 'valign'), options: ['top', 'center', 'bottom', 'between'].map((v) => ({ value: v, label: T('opt', `v_${v}`) })),
            onChange: (v) => this._set('valign', v === 'top' ? null : v) });
          this._ctrls.valign = { kind: 'valign', c: va };
          b.appendChild(field(T('label', 'valign'), va.el, 'valign'));
          const fw = el('button', 'tb', { type: 'button', text: `↔ ${T('ui', 'fullWidth')}` });
          fw.addEventListener('click', () => { this._set('grid_cols', 12); this._syncOne('grid_cols'); });
          b.appendChild(fw);
        }],
        ['glow', (b) => {
          B.select(b, 'preset', presetOpts, { nullable: true });
          ['glow_tl', 'glow_mid', 'glow_br'].forEach((k, i) => B.color(b, k, () => this._presetRgb(i)));
          const hs = new UISelect(this, { options: opt(Object.keys(HARMONIES)), momentary: true, placeholder: T('ui', 'apply'), label: T('label', 'harmony'), onChange: (kind) => {
            this._record();
            const base = parseColor(this._config.glow_mid) || parseColor(this._presetRgb(1));
            const [a, m, d] = harmony(base, kind);
            this._config = { ...this._config, glow_tl: a, glow_mid: m, glow_br: d };
            ['glow_tl', 'glow_mid', 'glow_br'].forEach((k) => this._syncOne(k));
            this._fire();
          } });
          b.appendChild(field(T('label', 'harmony'), hs.el));
          B.slider(b, 'glow_intensity', 0, 2, 0.05); B.slider(b, 'glow_spread', 0, 40, 1, 'px');
          B.slider(b, 'edge_width', 0, 4, 0.25, 'px'); B.slider(b, 'glow_angle', 0, 360, 5, '°');
          B.slider(b, 'inner_glow', 0, 1.5, 0.05);
          B.select(b, 'edge_mode', opt(['static', 'rotate', 'pulse']));
          B.slider(b, 'hue_shift', 0, 360, 5, '°');
          B.toggles(b, ['hue_cycle', 'light_follow']);
        }],
        ['glass', (b) => {
          B.slider(b, 'opacity', 0, 1, 0.01); B.slider(b, 'blur', 0, 40, 1, 'px');
          B.slider(b, 'saturate', 100, 250, 5, '%'); B.slider(b, 'radius', 0, 40, 1, 'px');
          B.color(b, 'tint', () => DEFAULTS.tint, 'byDefault');
          B.toggles(b, ['iridescent', 'reflection', 'radius_auto', 'depth']);
          b.appendChild(el('div', 'hint2', { text: T('ui', 'bareHint') }));
          B.toggles(b, ['bare', 'hide_edge', 'hide_glow', 'hide_bg']);
          const qrow = el('div', 'seg2');
          [['lightCard', { bg_color: '#ffffff', bg_opacity: 0.82, glow_intensity: 0.6, auto_contrast: true }], ['darkCard', { bg_color: '#0b1226', bg_opacity: 0.78 }]].forEach(([k, patch]) => {
            const btn = el('button', 'tb', { type: 'button', text: T('ui', k) });
            btn.addEventListener('click', () => { this._record(); this._config = { ...this._config, ...patch }; this._sync(); this._fire(); });
            qrow.appendChild(btn);
          });
          b.appendChild(qrow);
          B.color(b, 'bg_color', () => '#ffffff', 'byDefault');
          B.color(b, 'bg_color2', () => '#ffffff', 'byDefault');
          B.slider(b, 'bg_opacity', 0, 1, 0.01); B.slider(b, 'bg_angle', 0, 360, 5, '°');
          B.toggles(b, ['auto_contrast']);
        }],
        ['content', (b) => {
          B.select(b, 'font', fontOpts, { nullable: true, onOpen: () => FontLoader.previews() });
          B.slider(b, 'font_scale', 0.7, 1.6, 0.05); B.slider(b, 'content_scale', 0.7, 1.4, 0.05); B.slider(b, 'content_padding', 0, 24, 1, 'px');
          B.color(b, 'text_color', () => '#eaf2ff', 'byDefault');
          B.select(b, 'legibility', opt(['off', 'soft', 'strong']));
          B.input(b, 'background_image', false); B.slider(b, 'background_dim', 0, 0.9, 0.05); B.slider(b, 'background_blur', 0, 20, 1, 'px');
        }],
        ['glare', (b) => {
          B.slider(b, 'glare_intensity', 0, 1.5, 0.05); B.slider(b, 'glare_tint', 0, 1, 0.05); B.slider(b, 'glare_angle', 0, 360, 5, '°');
          B.select(b, 'glare_mode', opt(['static', 'sweep', 'follow', 'off']));
        }],
        ['texture', (b) => {
          B.select(b, 'texture', texOpts);
          B.toggles(b, ['texture_lit', 'texture_fade']);
          B.slider(b, 'texture_opacity', 0, 0.6, 0.01); B.slider(b, 'texture_scale', 0.5, 3, 0.05); B.slider(b, 'texture_speed', 0.1, 3, 0.05);
          B.select(b, 'texture_blend', opt(['overlay', 'soft-light', 'screen', 'normal', 'color-dodge']));
          B.color(b, 'texture_color', () => DEFAULTS.texture_color, 'byDefault');
        }],
        ['fx', (b) => {
          B.multi(b, 'fx', fxOpts);
          B.slider(b, 'fx_density', 0.2, 3, 0.05); B.slider(b, 'fx_speed', 0.2, 3, 0.05); B.slider(b, 'fx_opacity', 0, 1, 0.01);
          B.select(b, 'fx_colors', opt(['auto', 'natural', 'glow', 'white', 'warm', 'rainbow']));
          B.select(b, 'fx_when', opt(['always', 'active', 'inactive', 'alert']));
          B.select(b, 'fx_layer', opt(['back', 'front']));
          B.select(b, 'fx_quality', opt(['low', 'medium', 'high']));
          B.input(b, 'fx_schedule', false);
          B.toggles(b, ['tap_burst']);
        }],
        ['festive', (b) => {
          B.toggles(b, ['garland', 'snow_cap', 'icicles', 'seasonal']);
          B.slider(b, 'snow_depth', 0.4, 2.2, 0.05); B.slider(b, 'icicle_length', 0.3, 2.5, 0.05);
          B.select(b, 'garland_colors', opt(['classic', 'warm', 'cold', 'glow', 'rainbow']));
          B.select(b, 'garland_mode', opt(['auto', 'chase', 'twinkle', 'alternate', 'steady']));
          B.select(b, 'garland_edges', opt(['top', 'perimeter']));
        }],
        ['events', (b) => {
          ['ev_change', 'ev_on', 'ev_off', 'ev_tap', 'ev_alert'].forEach((k) => B.multi(b, k, evOpts));
        }],
        ['motion', (b) => {
          if (sysReduceMotion()) {
            const forced = motionForced(null), box2 = el('div', 'rmbox');
            box2.append(el('b', '', { text: `⚠ ${T('ui', 'rmTitle')}` }), el('span', '', { text: T('ui', 'rmText') }));
            const btn = el('button', 'tb hero', { type: 'button', text: T('ui', forced ? 'rmOff' : 'rmOn') });
            btn.addEventListener('click', () => { try { if (forced) localStorage.removeItem('afx-motion'); else localStorage.setItem('afx-motion', 'force'); } catch (e) { /* без хранилища */ } window.dispatchEvent(new CustomEvent('afx-motion-changed')); this._build(); });
            box2.appendChild(btn); b.appendChild(box2);
          }
          b.appendChild(el('div', 'hint2', { text: T('ui', 'motionHint') }));
          B.toggles(b, ['tilt', 'hover', 'tap_flash', 'breathe', 'scan', 'corners', 'chromatic', 'led', 'text_glow', 'accent', 'ignite', 'haptic', 'beat',
            'float', 'sway', 'jelly', 'parallax', 'spotlight', 'grain', 'neon', 'marching', 'state_pulse', 'glint']);
          B.slider(b, 'tilt_max', 2, 20, 1, '°'); B.slider(b, 'beat_bpm', 60, 180, 1);
          B.slider(b, 'animation_speed', 0.25, 3, 0.05);
          B.select(b, 'performance', opt(['auto', 'high', 'lite']));
          B.input(b, 'engrave', false); B.slider(b, 'engrave_opacity', 0, 0.6, 0.01);
          B.slider(b, 'idle_dim', 0, 600, 10, 's');
        }],
        ['entity', (b) => {
          B.entity(b, 'entity'); B.toggles(b, ['light_glow', 'dim_inactive']);
          B.slider(b, 'inactive_dim', 0, 1, 0.05); B.slider(b, 'night_dim', 0, 1, 0.05);
          B.entity(b, 'progress_entity'); B.two(b, 'progress_min', 'progress_max');
          B.entity(b, 'fx_entity'); B.two(b, 'fx_min', 'fx_max');
          B.entity(b, 'bpm_entity');
          B.entity(b, 'alert_entity'); B.input(b, 'alert_state', false); B.two(b, 'alert_above', 'alert_below');
          B.color(b, 'alert_color', () => '#ff2d55', 'byDefault');
          B.multi(b, 'alert_fx', fxInner);
        }],
        ['card', (b) => {
          const y = new UIYaml(this, { label: T('label', 'card'), onChange: (v) => {
            const c = { ...this._config };
            if (Array.isArray(v)) { c.cards = v; delete c.card; } else { c.card = v; delete c.cards; }
            this._config = c; this._fire();
          } });
          this._ctrls.card = { kind: 'yaml', c: y };
          b.appendChild(field(T('label', 'card'), y.el));
        }],
      ];

      for (const [id, fill] of SECTIONS) {
        if (id === 'card' && this.standalone) continue;
        const sec = el('section', `sec${this._openSecs.has(id) ? ' open' : ''}`);
        sec.dataset.id = id;
        const head = el('button', 'sh', { type: 'button', 'aria-expanded': String(this._openSecs.has(id)) });
        const badge = el('span', 'sbadge');
        head.append(el('i', 'gd'), el('span', '', { text: T('section', id) }), badge, el('i', 'chev'));
        head.addEventListener('click', () => {
          const o = sec.classList.toggle('open');
          head.setAttribute('aria-expanded', String(o));
          if (o) this._openSecs.add(id); else this._openSecs.delete(id);
        });
        const body = el('div', 'sb');
        const before = new Set(Object.keys(this._ctrls));
        fill(body);
        const keys = Object.keys(this._ctrls).filter((k) => !before.has(k) && k !== 'card');
        if (keys.length && id !== 'builder') {
          this._secKeys[id] = { keys, badge };
          const rs = el('button', 'tb rsec', { type: 'button', text: T('ui', 'resetSec') });
          rs.addEventListener('click', () => {
            this._record();
            const c = JSON.parse(JSON.stringify(this._config));
            keys.forEach((k) => { const n = NESTED[k]; if (n) { if (c[n[0]]) { delete c[n[0]][n[1]]; if (!Object.keys(c[n[0]]).length) delete c[n[0]]; } } else delete c[k]; });
            this._config = c; this._sync(); this._fire(); this._toast(T('ui', 'secReset'));
          });
          body.appendChild(rs);
        }
        sec.append(head, body);
        wrap.appendChild(sec);
      }
      const cr = el('a', 'afx-credit', { href: 'https://antarikfox.ru', target: '_blank', rel: 'noopener', title: 'antarikfox.ru' });
      cr.append(el('b', 'g', { text: 'Antarikfox Glass' }), el('span', '', { text: ` v${VERSION} · by ` }), el('b', 'g', { text: 'Antarikfox' }), el('span', 'u', { text: ' · antarikfox.ru' }));
      wrap.appendChild(cr);
      this._toastEl = el('div', 'toast', { role: 'status' });
      wrap.appendChild(this._toastEl);
      root.appendChild(wrap);
      this._built = true;
      this._sync();
      if (this._ctrls.card) this._ctrls.card.c.set(this._config.card ?? this._config.cards);
    }
  }
  /* ═════════════════════════ АВТОФИКС ОБЫЧНЫХ КАРТОЧЕК (без card-mod) ═════════════════════════ */
  /** Работает, только когда активна тема Antarikfox. Отключение: в теме afx-theme-autofix: "off" */
  const PLAIN_HOSTS = new Set(['hui-heading-card', 'mushroom-title-card', 'mushroom-chips-card', 'bubble-card']);
  /** Признаки «настоящей» карточки: если ничего из этого нет и она низкая — это заголовок или подпись */
  const CONTENT_SEL = 'ha-switch,ha-slider,ha-control-button,ha-control-slider,ha-control-select,ha-control-switch,ha-tile-icon,ha-tile-info,state-badge,ha-icon-button,mwc-button,ha-button,input,button,ha-entity-toggle,mushroom-shape-icon,mushroom-state-info,img,video,hui-image,ha-camera-stream,hui-card-features,ha-gauge,canvas,ha-state-icon,ha-icon,ha-svg-icon,ha-chart-base,hui-graph-base,ha-tile-container,ha-hls-player';
  const GlobalFix = {
    init() {
      if (typeof window === 'undefined' || window.__afxGlobalFix) return;
      window.__afxGlobalFix = true;
      this.ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver((list) => list.forEach((en) => this.fit(en.target))) : null;
      customElements.whenDefined('ha-card').then(() => {
        const C = customElements.get('ha-card');
        if (C && !C.prototype.__afxPatched) {
          C.prototype.__afxPatched = true;
          /* Lit вызывает firstUpdated динамически, поэтому обёртка работает и для уже зарегистрированного ha-card */
          const orig = C.prototype.firstUpdated;
          C.prototype.firstUpdated = function afxFirstUpdated(...args) {
            if (orig) orig.apply(this, args);
            GlobalFix.attach(this);
          };
        }
        this.scanSoon(0);
      });
      ['location-changed', 'popstate'].forEach((ev) => window.addEventListener(ev, () => this.scanSoon(400)));
      [1500, 4000].forEach((t) => setTimeout(() => this.scanSoon(0), t));
      try { new MutationObserver(() => this.scanSoon(300)).observe(document.documentElement, { attributes: true, attributeFilter: ['style'] }); } catch (e) { /* без наблюдения */ }
    },
    scanSoon(d) { clearTimeout(this._st); this._st = setTimeout(() => this.scan(document, 0), d); },
    scan(root, depth) {
      if (depth > 40 || !root) return;
      const els = root.querySelectorAll ? root.querySelectorAll('*') : [];
      for (const e of els) {
        if (e.localName === 'ha-card') this.attach(e);
        if (e.shadowRoot) this.scan(e.shadowRoot, depth + 1);
      }
    },
    active(card) {
      const cs = getComputedStyle(card);
      if (!cs.getPropertyValue('--afx-theme-tl').trim()) return false;
      return !/^["']?(off|false|0|no)["']?$/i.test(cs.getPropertyValue('--afx-theme-autofix').trim());
    },
    attach(card) {
      requestAnimationFrame(() => {
        try {
          if (!card.isConnected) return;
          const host = card.getRootNode() && card.getRootNode().host;
          if (host && host.parentElement && host.parentElement.localName === TAG) return;
          if (!this.active(card)) { this.restore(card); return; }
          if ((host && PLAIN_HOSTS.has(host.localName)) || card.classList.contains('type-heading')) { card.__afxHost = true; this.plain(card); return; }
          if (this.ro && !card.__afxObserved) { card.__afxObserved = true; this.ro.observe(card); }
          this.fit(card);
        } catch (e) { /* не мешаем HA */ }
      });
    },
    plain(card) {
      if (card.dataset.afx === 'plain') return;
      card.dataset.afx = 'plain';
      const st = card.style;
      ['background', 'box-shadow', 'border', 'backdrop-filter', '-webkit-backdrop-filter'].forEach((p) => st.setProperty(p, 'none', 'important'));
      st.setProperty('--afx-cm-off', '1');
      st.setProperty('text-shadow', 'var(--afx-theme-heading-glow, none)');
    },
    restore(card) {
      if (!card.dataset.afx) return;
      ['background', 'box-shadow', 'border', 'backdrop-filter', '-webkit-backdrop-filter', '--afx-cm-off', 'text-shadow', 'border-radius'].forEach((p) => card.style.removeProperty(p));
      delete card.dataset.afx;
      card.__afxHost = false;
    },
    headingLike(card) {
      const h = card.offsetHeight;
      if (!h || h > 84) return false;
      return !card.querySelector(CONTENT_SEL);
    },
    fit(card) {
      if (!card.isConnected || card.__afxHost) return;
      if (!this.active(card)) { this.restore(card); return; }
      if (this.headingLike(card)) { this.plain(card); return; }
      if (card.dataset.afx === 'plain') this.restore(card);
      const h = card.offsetHeight;
      if (!h) return;
      const r = parseFloat(getComputedStyle(card).getPropertyValue('--afx-theme-radius')) || 22;
      if (h < r * 3.2) { card.style.setProperty('border-radius', `${Math.max(8, Math.round(h * 0.32))}px`); card.dataset.afx = 'thin'; }
      else if (card.dataset.afx === 'thin') { card.style.removeProperty('border-radius'); delete card.dataset.afx; }
    },
  };

  /* ═════════════════════════ РЕГИСТРАЦИЯ ═════════════════════════ */
  if (!customElements.get(SHELL)) customElements.define(SHELL, AfxGlassShell);
  if (!customElements.get(TAG)) customElements.define(TAG, AntarikfoxGlassCard);
  if (!customElements.get(EDITOR)) customElements.define(EDITOR, AntarikfoxGlassCardEditor);

  window.customCards = window.customCards || [];
  if (!window.customCards.some((c) => c.type === TAG)) {
    window.customCards.push({
      type: TAG,
      name: 'Antarikfox Glass Card',
      description: ({ ru: 'Стекло с трёхцветным свечением, живыми текстурами, спецэффектами, конструктором и импортом старых карточек. by Antarikfox · antarikfox.ru',
        zh: '三色光晕玻璃卡片：动态纹理、特效、搭建器与旧卡片导入。by Antarikfox · antarikfox.ru',
        ja: '三色に光るガラスカード：ライブテクスチャ、エフェクト、ビルダー、古いカードの取り込み。by Antarikfox · antarikfox.ru' })[detectLang(null)]
        || 'Glass with tri-color glow, live textures, special effects, a builder and old-card import. by Antarikfox · antarikfox.ru',
      preview: true,
    });
  }
  FontLoader.watchTheme();
  GlobalFix.init();
  window.AntarikfoxGlass = { VERSION, DOMAIN_EMOJI, MDI_EMOJI, YAML, convertCard, GlobalFix, ui: { EDITOR_CSS, UISelect, UIEntity, UISwitch, UIInput, copyText, copyLegacy, el }, autoLayout, LAYOUTS, LOOKS, FONTS, FX_GROUPS, EVENT_FX, Scheduler, PRESETS, TEXTURES, CANVAS_TEXTURES, TEXTURE_KEYS, FX_KEYS, FX_ICONS, DEFAULTS, BEHAVIOR_KEYS, DEFAULT_TRUE, I18N, detectLang, tr, harmony };

  console.info(
    `%c ANTARIKFOX GLASS %c v${VERSION} %c by Antarikfox · https://antarikfox.ru `,
    'color:#fff;background:linear-gradient(90deg,#38bdf8,#818cf8,#c084fc);font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px',
    'color:#c084fc;background:#0b1226;padding:2px 6px',
    'color:#9fb4d8;background:#0b1226;border-radius:0 4px 4px 0;padding:2px 6px',
  );
})();
