(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{180:function(t,n,e){var content=e(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("1930a9a0",content,!0,{sourceMap:!1})},181:function(t,n,e){var content=e(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("20c104f8",content,!0,{sourceMap:!1})},182:function(t,n,e){var content=e(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("419d33c6",content,!0,{sourceMap:!1})},183:function(t,n,e){"use strict";var r=e(180);e.n(r).a},184:function(t,n,e){(n=e(44)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=n},185:function(t,n,e){"use strict";var r=e(181);e.n(r).a},186:function(t,n,e){(n=e(44)(!1)).push([t.i,".links{padding-top:15px}",""]),t.exports=n},188:function(t,n,e){"use strict";e.r(n);e(183);var r=e(38),component=Object(r.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("NuxtLink",{attrs:{to:"/"}},[n("b-icon",{staticClass:"h1",attrs:{icon:"brightness-high",scale:"3",variant:"info"}})],1)}),[],!1,null,null,null);n.default=component.exports},189:function(t,n,e){"use strict";e.r(n);e(185);var r=e(38),component=Object(r.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"links"},[n("NuxtLink",{staticClass:"button--green",attrs:{to:"/clusters"}},[this._v("Clusters")]),this._v(" "),n("a",{staticClass:"button--grey",attrs:{href:"https://github.com/zachdyer/nuxt-starborn",target:"_blank",rel:"noopener noreferrer"}},[this._v("GitHub")])],1)}),[],!1,null,null,null);n.default=component.exports},190:function(t,n,e){"use strict";var r=e(182);e.n(r).a},191:function(t,n,e){(n=e(44)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}.card-img-left{height:100px}',""]),t.exports=n},194:function(t,n,e){"use strict";e.r(n);function r(t,n,e,r){this.seed="?clusterX=".concat(n,"&clusterY=").concat(e,"&starID=").concat(t),Math.seedrandom(this.id),this.id=t,this.x=Math.range(0,r),this.y=Math.range(0,r);this.image=Math.pick(["https://cdn.mos.cms.futurecdn.net/Pkx5h33mQDLDbYrCPv62rC.jpg","https://www.rnz.co.nz/assets/news/219110/eight_col_beetle.jpg?1577494395","https://earthsky.org/upl/2020/02/Castor-by-Espenak.jpg","https://www.siliconrepublic.com/wp-content/uploads/2017/08/Star-close-up-718x523.jpg","https://i.pinimg.com/originals/bb/75/25/bb752540154c00faf633c200d188c102.jpg","https://www.factsjustforkids.com/images/red-giant-star.png"])}function o(t,n){this.x=t,this.y=n,this.size=100,this.stars=[],this.seed=t+n,Math.seedrandom("Cluster x:".concat(t,", y:").concat(n)),this.starCount=Math.range(2,5);for(var e=0;e<this.starCount;e++)this.stars.push(new r(e,this.x,this.y,this.size))}Math.range=function(t,n){return Math.floor(Math.random()*(n-t)+t)},Math.pick=function(t){return t[Math.range(0,t.length)]};var c={data:function(){return{x:null,y:null,stars:[],size:null,starCount:0}},created:function(){var t=new o(0,0);this.x=t.x,this.y=t.y,this.stars=t.stars,this.size=t.size,this.starCount=t.starCount},watch:{x:function(){if(this.x){var t=new o(this.x,this.y);this.starCount=t.starCount,this.stars=t.stars}},y:function(){if(this.y){var t=new o(this.x,this.y);this.starCount=t.starCount,this.stars=t.stars}}}},l=(e(190),e(38)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",[e("Logo"),t._v(" "),e("h1",{staticClass:"title"},[t._v("Clusters")]),t._v(" "),e("b-input-group",{staticClass:"mb-2 mr-sm-2",attrs:{prepend:"x"}},[e("b-input",{attrs:{id:"inline-form-input-username",placeholder:"Cluster Cooridant X"},model:{value:t.x,callback:function(n){t.x=n},expression:"x"}})],1),t._v(" "),e("b-input-group",{staticClass:"mb-2 mr-sm-2",attrs:{prepend:"y"}},[e("b-input",{attrs:{id:"inline-form-input-username",placeholder:"Cluster Cooridant Y"},model:{value:t.y,callback:function(n){t.y=n},expression:"y"}})],1),t._v(" "),e("p",[t._v("Star Count: "+t._s(t.starCount))]),t._v(" "),t._l(t.stars,(function(n,r){return e("b-card",{key:r,staticClass:"mb-3",attrs:{data:n,"img-src":n.image,"img-alt":"Card image","img-left":""}},[e("b-card-text",[t._v("Star ID: "+t._s(r)+" X: "+t._s(n.x)+" Y: "+t._s(n.y))])],1)})),t._v(" "),e("Nav")],2)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Logo:e(188).default,Nav:e(189).default})}}]);