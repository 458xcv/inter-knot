if(!self.define){let e,n={};const r=(r,i)=>(r=new URL(r+".js",i).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let o={};const u=e=>r(e,l),t={module:{uri:l},exports:o,require:u};n[l]=Promise.all(i.map((e=>t[e]||u(e)))).then((e=>(s(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/BhIJfvxc.js",revision:null},{url:"_nuxt/builds/latest.json",revision:"cfc31554ba148914ccd066264dd8f415"},{url:"_nuxt/builds/meta/e4e36415-293c-472f-a41e-9dbd0db828a9.json",revision:null},{url:"_nuxt/CNVLQE3n.js",revision:null},{url:"_nuxt/D_phUijb.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/default-cover.oB27RXoN.svg",revision:null},{url:"_nuxt/entry.BV3R21BS.css",revision:null},{url:"_nuxt/error-404.CJkeVOTF.css",revision:null},{url:"_nuxt/error-500.D9UKVWqT.css",revision:null},{url:"_nuxt/profile-photo.CcXd1nkm.svg",revision:null},{url:"_payload.json",revision:"c05874137e74608e7588a2353c945f31"},{url:"200",revision:"93d79a02d186ee211395918b2562fab1"},{url:"404",revision:"93d79a02d186ee211395918b2562fab1"},{url:"icon.svg",revision:"94bb710433a55d3c5b24d62b98feb9ec"},{url:"/inter-knot/",revision:"52d20ad6bcb4b28f9d017798ef90d9e8"},{url:"pwa-999.png",revision:"307547c347d7a616cb88ce7a79ed965f"},{url:"manifest.webmanifest",revision:"30097da547b9d8b5752fffb752b93111"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/inter-knot/")))}));
