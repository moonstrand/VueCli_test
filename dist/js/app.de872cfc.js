(function(e){function t(t){for(var o,n,c=t[0],s=t[1],i=t[2],u=0,b=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&b.push(r[n][0]),r[n]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(b.length)b.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],o=!0,n=1;n<a.length;n++){var s=a[n];0!==r[s]&&(o=!1)}o&&(l.splice(t--,1),e=c(c.s=a[0]))}return e}var o={},r={app:0},l=[];function n(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1d64b878"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,o){a=r[e]=[t,o]}));t.push(a[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=n(e);var i=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,a[1](i)}r[e]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(a,o,function(t){return e[t]}.bind(null,o));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dist/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=i;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("7a23"),r=a("7bb1"),l=a("3aa8"),n=a("cbdf"),c=a("9457");const s={id:"nav"},i=Object(o["g"])("Home"),u=Object(o["g"])(" | "),d=Object(o["g"])("About");function b(e,t,a,r,l,n){const c=Object(o["C"])("router-link"),b=Object(o["C"])("router-view");return Object(o["v"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",s,[Object(o["h"])(c,{to:"/"},{default:Object(o["L"])(()=>[i]),_:1}),u,Object(o["h"])(c,{to:"/about"},{default:Object(o["L"])(()=>[d]),_:1})]),Object(o["e"])("h2",null,Object(o["F"])(l.name),1),Object(o["h"])(b)],64)}var p={data(){return{name:"小明的家"}}},v=(a("e618"),a("6b0d")),m=a.n(v);const h=m()(p,[["render",b]]);var j=h,f=a("6c02"),O=a("cf05"),g=a.n(O);const k={class:"home"},y=Object(o["e"])("img",{alt:"Vue logo",src:g.a},null,-1),_={class:"mb-3"},w=Object(o["e"])("label",{for:"email",class:"form-label"},"Email",-1),V=Object(o["e"])("span",{class:"invalid-feedback"},null,-1),x={class:"mb-3"},C=Object(o["e"])("label",{for:"name",class:"form-label"},"姓名",-1),P={class:"invalid-feedback"},F={class:"mb-3"},S=Object(o["e"])("label",{for:"phone",class:"form-label"},"電話",-1),E={class:"invalid-feedback"},L={class:"mb-3"},T=Object(o["e"])("label",{for:"region",class:"form-label"},"地區",-1),q=Object(o["e"])("option",{value:""},"請選擇地區",-1),H=Object(o["e"])("option",{value:"台北市"},"台北市",-1),M=Object(o["e"])("option",{value:"新北市"},"新北市",-1),W=Object(o["e"])("option",{value:"桃園市"},"桃園市",-1),U=Object(o["e"])("option",{value:"新竹市"},"新竹市",-1),A=Object(o["e"])("option",{value:"台中市"},"台中市",-1),I=Object(o["e"])("option",{value:"高雄市"},"高雄市",-1),z={class:"invalid-feedback"},J={class:"mb-3"},D=Object(o["e"])("label",{for:"address",class:"form-label"},"地址",-1),N={class:"invalid-feedback"},Y=Object(o["e"])("button",{class:"btn btn-primary",type:"submit"},"Submit",-1);function $(e,t,a,r,l,n){const c=Object(o["C"])("HelloWorld"),s=Object(o["C"])("field"),i=Object(o["C"])("error-message"),u=Object(o["C"])("Form");return Object(o["v"])(),Object(o["d"])("div",k,[y,Object(o["h"])(c,{msg:"Welcome to Your Vue.js App"}),Object(o["h"])(u,{onSubmit:n.onSubmit},{default:Object(o["L"])(({errors:e})=>[Object(o["e"])("div",_,[w,Object(o["h"])(s,{id:"email",name:"email",type:"email",class:Object(o["p"])(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.user.email,"onUpdate:modelValue":t[0]||(t[0]=e=>l.user.email=e)},null,8,["class","modelValue"]),Object(o["h"])(i,{name:"email",class:"invalid-feedback"}),V]),Object(o["e"])("div",x,[C,Object(o["h"])(s,{id:"name",name:"姓名",type:"text",class:Object(o["p"])(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.user.name,"onUpdate:modelValue":t[1]||(t[1]=e=>l.user.name=e)},null,8,["class","modelValue"]),Object(o["h"])(i,{name:"name",class:"invalid-feedback"}),Object(o["e"])("span",P,Object(o["F"])(e.姓名),1)]),Object(o["e"])("div",F,[S,Object(o["h"])(s,{id:"phone",name:"電話",type:"text",class:Object(o["p"])(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:n.isPhone,modelValue:l.user.phone,"onUpdate:modelValue":t[2]||(t[2]=e=>l.user.phone=e)},null,8,["class","rules","modelValue"]),Object(o["h"])(i,{name:"phone",class:"invalid-feedback"}),Object(o["e"])("span",E,Object(o["F"])(e.電話),1)]),Object(o["e"])("div",L,[T,Object(o["h"])(s,{id:"region",name:"地區",class:Object(o["p"])(["form-control",{"is-invalid":e["地區"]}]),placeholder:"請輸入地區",rules:"required",modelValue:l.user.region,"onUpdate:modelValue":t[3]||(t[3]=e=>l.user.region=e),as:"select"},{default:Object(o["L"])(()=>[q,H,M,W,U,A,I]),_:2},1032,["class","modelValue"]),Object(o["h"])(i,{name:"region",class:"invalid-feedback"}),Object(o["e"])("span",z,Object(o["F"])(e.地區),1)]),Object(o["e"])("div",J,[D,Object(o["h"])(s,{id:"address",name:"地址",type:"text",class:Object(o["p"])(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:l.user.address,"onUpdate:modelValue":t[4]||(t[4]=e=>l.user.address=e)},null,8,["class","modelValue"]),Object(o["h"])(i,{name:"address",class:"invalid-feedback"}),Object(o["e"])("span",N,Object(o["F"])(e.地址),1)]),Y]),_:1},8,["onSubmit"])])}const B={class:"hello"},G=Object(o["f"])('<p data-v-5141a303> For a guide and recipes on how to configure / customize this project,<br data-v-5141a303> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-cli documentation</a>. </p><h3 data-v-5141a303>Installed CLI Plugins</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5141a303>babel</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5141a303>router</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5141a303>eslint</a></li></ul><h3 data-v-5141a303>Essential Links</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Core Docs</a></li><li data-v-5141a303><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Forum</a></li><li data-v-5141a303><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Community Chat</a></li><li data-v-5141a303><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5141a303>Twitter</a></li><li data-v-5141a303><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>News</a></li></ul><h3 data-v-5141a303>Ecosystem</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-router</a></li><li data-v-5141a303><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vuex</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5141a303>vue-devtools</a></li><li data-v-5141a303><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-loader</a></li><li data-v-5141a303><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5141a303>awesome-vue</a></li></ul>',7);function K(e,t,a,r,l,n){return Object(o["v"])(),Object(o["d"])("div",B,[Object(o["e"])("h1",null,Object(o["F"])(a.msg),1),G])}var Q={name:"HelloWorld",props:{msg:String}};a("65e4");const R=m()(Q,[["render",K],["__scopeId","data-v-5141a303"]]);var X=R,Z={name:"Home",data(){return{user:{email:"",name:"",address:"",phone:""}}},methods:{onSubmit(){console.log(this.user)},isPhone(e){const t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"}},created(){console.log(this)},components:{HelloWorld:X}};const ee=m()(Z,[["render",$]]);var te=ee;const ae=[{path:"/",name:"Home",component:te},{path:"/about",name:"About",component:()=>a.e("about").then(a.bind(null,"f820"))}],oe=Object(f["a"])({history:Object(f["b"])(),routes:ae});var re=oe;Object(r["e"])("required",l["c"]),Object(r["e"])("email",l["a"]),Object(r["e"])("min",l["b"]),Object(r["d"])({generateMessage:Object(n["a"])({zh_TW:c}),validateOnInput:!0}),Object(n["b"])("zh_TW");const le=Object(o["c"])(j).use(re);le.component("Form",r["c"]),le.component("Field",r["b"]),le.component("ErrorMessage",r["a"]),le.mount("#app")},"5e10":function(e,t,a){},6288:function(e,t,a){},"65e4":function(e,t,a){"use strict";a("5e10")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},e618:function(e,t,a){"use strict";a("6288")}});
//# sourceMappingURL=app.de872cfc.js.map