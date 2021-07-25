var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;import{r as l,c as i,w as u,o as d,a as c,p,b as f,F as v,d as b,e as m,t as O,f as y,g as h,v as g,h as w}from"./vendor.9d8e9b95.js";const S=l([]),R=i((()=>{var e;return null==(e=S.value)?void 0:e[S.value.length-1]})),P=i((()=>S.value.slice().reverse())),j={name:"QRCodeScanner",props:{qrbox:{type:Number,default:250},fps:{type:Number,default:10}},setup(e){const d=l(),c=l(),p=e=>{var r;r=e,R.value!==r&&S.value.push(r)},f=i((()=>{return l=((e,r)=>{for(var t in r||(r={}))a.call(r,t)&&s(e,t,r[t]);if(n)for(var t of n(r))o.call(r,t)&&s(e,t,r[t]);return e})({},e),r(l,t({experimentalFeatures:{useBarCodeDetectorIfSupported:!0}}));var l}));return u((()=>{var e;const r=d.value;r&&(null==(e=c.value)||e.clear(),S.value=[],c.value=new Html5QrcodeScanner(r.id,f.value),c.value.render(p))})),{scannerElRef:d}}},k={id:"qr-code-scanner",ref:"scannerElRef"};j.render=function(e,r,t,n,a,o){return d(),c("div",k,null,512)};const A=navigator.userAgent,E={Android:()=>/Android/i.test(A),iPadOS13plus:()=>/Macintosh/i.test(A)&&navigator.maxTouchPoints>1,iOS:()=>/iPhone|iPad|iPod/i.test(A)||E.iPadOS13plus(),Opera:()=>/Opera Mini/i.test(A),Windows:()=>/IEMobile/i.test(A),any:()=>E.Android()||E.iOS()||E.Opera()||E.Windows()},T={mobile:E,url:e=>{try{return Boolean(new URL(e))}catch{return!1}}};const U={name:"ResultTable",setup:()=>({results:P,isUrl:T.url,getHref:e=>{const r=new URL(e);if(/^sms/i.test(r.protocol)){if(T.mobile.iOS())return r.protocol="sms:",r.href;if(T.mobile.Android())return r.protocol="SMSTO:",r.href}return String(r)}})},C=m("data-v-63b19d91");p("data-v-63b19d91");const I={key:1};f();const M=C(((e,r,t,n,a,o)=>(d(),c("ul",null,[(d(!0),c(v,null,b(n.results,((e,r)=>(d(),c("li",{key:r},[n.isUrl(e)?(d(),c("a",{key:0,href:n.getHref(e),target:"_blank",rel:"noopener noreferrer"},O(e),9,["href"])):(d(),c("span",I,O(e),1))])))),128))]))));U.render=M,U.__scopeId="data-v-63b19d91";const Q={components:{QRCodeScanner:j,ResultTable:U},setup:()=>({results:P})};Q.render=function(e,r,t,n,a,o){const s=h("QRCodeScanner"),l=h("ResultTable");return d(),c(v,null,[y(s),y(l)],64)};!function(e={}){const{immediate:r=!1,onNeedRefresh:t,onOfflineReady:n}=e;let a;"serviceWorker"in navigator&&(a=new g("/shamemaru/sw.js",{scope:"/shamemaru/"}),a.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==n||n()})),a.register({immediate:r}).then((e=>e)))}({onOfflineReady(){}}),w(Q).mount("#app");
