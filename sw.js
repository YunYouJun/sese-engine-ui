if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const t=s=>l(s,n),u={module:{uri:n},exports:a,require:t};e[n]=Promise.all(i.map((s=>u[s]||t(s)))).then((s=>(r(...s),a)))}}define(["./workbox-f51ab5e4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"about.html",revision:"8fa60ac62b3b1f411b080782a46f6e43"},{url:"assets/_...all_.212b5751.js",revision:null},{url:"assets/_name_.08a10dbd.css",revision:null},{url:"assets/_name_.0a42f427.js",revision:null},{url:"assets/404.cfa02d52.css",revision:null},{url:"assets/404.d2d1a121.js",revision:null},{url:"assets/about.07206cf0.js",revision:null},{url:"assets/about.2a1f8813.css",revision:null},{url:"assets/app.c28f1827.css",revision:null},{url:"assets/app.c68c75ab.js",revision:null},{url:"assets/home.a7f1992b.css",revision:null},{url:"assets/home.d9fed203.js",revision:null},{url:"assets/page.6a965596.css",revision:null},{url:"assets/page.bf380680.js",revision:null},{url:"assets/README.24108339.js",revision:null},{url:"assets/README.3ccbfb48.css",revision:null},{url:"assets/search.86f57c4e.css",revision:null},{url:"assets/search.8ac1c5e6.js",revision:null},{url:"assets/settings.0f1f256d.css",revision:null},{url:"assets/settings.7c68a886.js",revision:null},{url:"assets/virtual_pwa-register.80a10119.js",revision:null},{url:"index.html",revision:"b4885f7999434cb14147837d984605d4"},{url:"readme.html",revision:"8e0c9d7daec2d9ba9ebf653372790a23"},{url:"search.html",revision:"2df0afb1ff36338ae8526ad6e31aa398"},{url:"settings.html",revision:"718caa37cac3e80cebcee5cec058b46c"},{url:"favicon.svg",revision:"1af3fc491fe24b97148b1615e27cd5c3"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"manifest.webmanifest",revision:"4f4512cd7a2ef4de8d912a3510bff8cd"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
