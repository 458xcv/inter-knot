if(!self.define){let e,n={};const r=(r,i)=>(r=new URL(r+".js",i).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let o={};const u=e=>r(e,l),t={module:{uri:l},exports:o,require:u};n[l]=Promise.all(i.map((e=>t[e]||u(e)))).then((e=>(s(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"339223cc8ff524b5dcf81418e3d2eb53"},{url:"_nuxt/builds/meta/cdb9c621-864d-4f82-ac93-010064a20288.json",revision:null},{url:"_nuxt/C8WcqCmW.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/default-cover.oB27RXoN.svg",revision:null},{url:"_nuxt/entry.iOyUyBe2.css",revision:null},{url:"_nuxt/error-404.CJkeVOTF.css",revision:null},{url:"_nuxt/error-500.D9UKVWqT.css",revision:null},{url:"_nuxt/myRSjCrV.js",revision:null},{url:"_nuxt/profile-photo.CcXd1nkm.svg",revision:null},{url:"_nuxt/yxjYc-Y2.js",revision:null},{url:"_payload.json",revision:"a21c16f70c6a2eee3743011f0afd6bdc"},{url:"200",revision:"83c20618b8bcd0e7ceb3736b11c6d2e5"},{url:"404",revision:"83c20618b8bcd0e7ceb3736b11c6d2e5"},{url:"icon.svg",revision:"94bb710433a55d3c5b24d62b98feb9ec"},{url:"/inter-knot/",revision:"8b20375825f38a6ffb3127b88c5d931a"},{url:"pwa-999.png",revision:"307547c347d7a616cb88ce7a79ed965f"},{url:"manifest.webmanifest",revision:"30097da547b9d8b5752fffb752b93111"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/inter-knot/")))}));
