if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>n(e,o),l={module:{uri:o},exports:c,require:t};s[o]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(i(...e),c)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"20142nhu"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.8b8f2bb5.css",revision:null},{url:"css/chunk-vendors.ef6041bb.css",revision:null},{url:"index.html",revision:"038ae5c2fbac99ecdc2e8d83517c661f"},{url:"js/app.645f4645.js",revision:null},{url:"js/chunk-vendors.4437a452.js",revision:null},{url:"manifest.json",revision:"5f01bbd49ed0f65ca89ade9cc107ba0c"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
