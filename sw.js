if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return d;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.77e1cbff.js",revision:"27856ad8559d028c5796e390ce096123"},{url:"assets/index.f27084d1.css",revision:"16df2387b64cba9d90901ef653cd6801"},{url:"assets/vendor.951faf20.js",revision:"d588e690222ea4d8a6ee3ed371b90928"},{url:"assets/vendor.d5cbfd15.css",revision:"a76db87e4fcc833357eab6e615f832e8"},{url:"index.html",revision:"9ccecdf4a094a3b5cb29969bd57b95b5"},{url:"vendors/html5-qrcode.min.js",revision:"b83f553f660e4ad4300cb00cbf06b0b4"},{url:"icons/128.png",revision:"a16ea1ddfe199eca9589119cf9324280"},{url:"manifest.webmanifest",revision:"92f55c6ed3d060cf6400bcd7b570e3e3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
