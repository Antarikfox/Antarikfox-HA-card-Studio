// Dependency-free tests for the supported photo upload route and safe failure behavior.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('dist/antarikfox-glass-card.js','utf8');
const html=fs.readFileSync('dist/antarikfox-studio.html','utf8');
const start=source.indexOf('  const Uploader = {'),end=source.indexOf('  /* ═════════════════════════ UI-КИТ',start);
assert.ok(start>=0&&end>start);
let requests=[],downloads=[],closed=0;
const U=vm.runInNewContext(source.slice(start,end)+'\nUploader;',{
 Blob,File,FormData,Headers,URL,setTimeout,clearTimeout,
 slugify:s=>String(s||'card').replace(/[^a-z0-9_-]+/gi,'-'),
 createImageBitmap:async()=>({width:2400,height:1200,close(){closed++;}}),
 document:{createElement:t=>{assert.equal(t,'canvas');return {width:0,height:0,getContext:()=>({drawImage(){}}),toBlob(cb,type){cb(new Blob(['encoded-image'],{type}));}};}},
 FileReader:class{readAsDataURL(b){b.arrayBuffer().then(buf=>{this.result=`data:${b.type};base64,${Buffer.from(buf).toString('base64')}`;this.onload();});}},
 fetch:async(path,init)=>{requests.push({path,init});return {ok:true,json:async()=>({id:'0123456789abcdef0123456789abcdef'})};}
});
U.download=(blob,name)=>downloads.push({blob,name});
const file=(type='image/png')=>new File(['test-image'],'image',{type});
(async()=>{
 for(const marker of ['viaFileEditor','core_configurator','ingress_session','supervisor/api','api/newfolder','/config/www/antarikfox/','/local/antarikfox/']){
  assert.ok(!source.includes(marker),marker);assert.ok(!html.includes(marker),marker);
 }
 assert.equal(U.viaFileEditor,undefined);
 for(const type of ['image/png','image/jpeg','image/webp']){
  const result=await U.optimize(file(type));assert.equal(result.blob.type,type==='image/jpeg'?'image/jpeg':'image/png');
 }
 assert.equal(closed,3);
 const gif=file('image/gif');assert.equal((await U.optimize(gif)).blob,gif);
 await assert.rejects(U.optimize(file('text/plain')),/not-image/);
 const optimized=U.optimize.bind(U);U.optimize=async f=>({blob:f,ext:'png'});
 const id='0123456789abcdef0123456789abcdef';
 const good={fetchWithAuth:async(path,init)=>{requests.push({path,init});return {ok:true,json:async()=>({id})};}};
 requests=[];const r=await U.upload(good,file(),'sensor.example','on');
 assert.equal(r.url,`/api/image/serve/${id}/original`);assert.equal(requests.length,1);assert.equal(requests[0].path,'/api/image/upload');
 assert.equal(requests[0].init.method,'POST');assert.deepEqual([...requests[0].init.body.keys()],['file']);
 requests=[];await U.upload({__token:'unit-test-token'},file(),'test');assert.equal(requests[0].init.headers.get('Authorization'),'Bearer unit-test-token');
 assert.throws(()=>U.fetchAuth({},'/api/image/upload'),/image-auth-required/);
 for(const status of [401,403,404,500]){
  downloads=[];let count=0;const r=await U.upload({fetchWithAuth:async()=>{count++;return {ok:false,status};}},file(),'test');
  assert.equal(r.url,null);assert.equal(r.method,'download');assert.equal(downloads.length,1);assert.equal(count,1);
 }
 for(const f of [async()=>{throw new Error('offline');},async()=>({ok:true,json:async()=>({})})]){
  downloads=[];assert.equal((await U.upload({fetchWithAuth:f},file(),'test')).url,null);assert.equal(downloads.length,1);
 }
 let calls=0;const preview=await U.upload({__connected:false,fetchWithAuth:()=>{calls++;}},file(),'test');assert.equal(calls,0);assert.equal(preview.method,'preview');assert.ok(preview.url.startsWith('data:'));
 const remote=await U.upload({...good,hassUrl:p=>'https://ha.example'+p},file(),'test');assert.equal(remote.url,`https://ha.example/api/image/serve/${id}/original`);
 await assert.rejects(U.viaImageApi({},file('image/webp'),'x.webp'),/format-not-supported/);
 await assert.rejects(U.viaImageApi({},new Blob([new Uint8Array(10*1024*1024+1)],{type:'image/png'}),'x.png'),/too-large/);
 U.optimize=optimized;
 console.log('Image API routing, MIME conversion, auth, offline mode and failure behavior: OK');
})().catch(e=>{console.error(e);process.exitCode=1;});
