(self.webpackChunkwulinks=self.webpackChunkwulinks||[]).push([[129,743,73],{743:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>u});var l=o(252);const a={class:"q-gutter-sm"};var r=o(520),s=o(73);const n=(0,l.aZ)({name:"BookSideBar",props:{docTree:{type:r.E_,default:new r.E_},basePath:{type:String,default:""}},compoent:{BookSideBarItem:s.default},setup:e=>({rootItem:(0,l.Fl)((()=>new s.ItemInfo(e.docTree.root,0,e.basePath)))})});n.render=function(e,t,o,r,s,n){const u=(0,l.up)("book-side-bar-item"),c=(0,l.up)("q-list");return(0,l.wg)(),(0,l.j4)("div",a,[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{item:e.rootItem},null,8,["item"])])),_:1})])};const u=n},73:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ItemInfo:()=>c,default:()=>d});var l=o(252),a=o(963),r=o(577);const s=(0,l.HX)("data-v-6a81bdce"),n=s(((e,t,o,n,u,c)=>{const i=(0,l.up)("q-icon"),d=(0,l.up)("router-link"),p=(0,l.up)("book-side-bar-item",!0),m=(0,l.up)("q-expansion-item"),f=(0,l.up)("q-item-section"),h=(0,l.up)("q-item"),b=(0,l.Q2)("ripple");return e.item.subs.length?((0,l.wg)(),(0,l.j4)(m,{key:0,"expand-icon-toggle":"","default-opened":"","content-inset-level":.2,icon:"arrow_downward"},{header:s((()=>["book"===e.item.type?((0,l.wg)(),(0,l.j4)(i,{key:0,name:"menu_book"})):(0,l.kq)("",!0),"blank"!==e.item.type?((0,l.wg)(),(0,l.j4)(d,{key:1,to:e.item.path,class:e.sideBarClass(e.item.type),onClick:t[1]||(t[1]=(0,a.iM)((t=>e.jump(e.item)),["prevent"]))},{default:s((()=>[(0,l.Uk)((0,r.zw)(e.item.title),1)])),_:1},8,["to","class"])):((0,l.wg)(),(0,l.j4)("span",{key:2,class:e.sideBarClass(e.item.type)},(0,r.zw)(e.item.title),3))])),default:s((()=>[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.item.subs,(t=>((0,l.wg)(),(0,l.j4)(p,{item:t,key:t.key,group:"header"!==t.type?e.item.key:void 0},null,8,["item","group"])))),128))])),_:1},8,["content-inset-level"])):(0,l.wy)(((0,l.wg)(),(0,l.j4)(h,{key:1,clickable:""},{default:s((()=>[(0,l.Wm)(f,null,{default:s((()=>[(0,l.Wm)(d,{to:e.item.path,onClick:t[2]||(t[2]=(0,a.iM)((t=>e.jump(e.item)),["prevent"]))},{default:s((()=>["book"===e.item.type?((0,l.wg)(),(0,l.j4)(i,{key:0,name:"menu_book"})):(0,l.kq)("",!0),(0,l.Wm)("span",{class:e.sideBarClass(e.item.type)},(0,r.zw)(e.item.title),3)])),_:1},8,["to"])])),_:1})])),_:1},512)),[[b]])}));var u=o(528);class c{transformDocTreeNodesToArray(e,t,o){if(!e)return[];const l=Object.keys(e),a=Array(l.length);for(let r of l){const l=e[r],s="header"===l.type,n=`${"/"!==o?o:""}/${s?"#":""}${r}`;a[l.sort]=new c(l,t,n,s?o:n,s)}return a}constructor(e,t,o,l,a){this.path=o,this.key=e.key,this.type=e.type,this.title=e.title,this.subs=this.transformDocTreeNodesToArray(e.subs,t+1,null!=l?l:o),this.level=t,this.isAnchor=null!=a&&a}}const i=(0,l.aZ)({name:"BookSideBarItem",props:{item:{type:c}},setup(){const e=(0,l.Fl)((()=>e=>"header"===e?"side-bar-item side-bar-header":"side-bar-item sied-bar-doc")),t=(0,l.f3)(u.Sw),o=(0,l.f3)(u.tz);return{sideBarClass:e,jump:e=>{if(e.isAnchor){const o=`${e.path}`.match(/.*(#.*)$/);o&&2==o.length&&t&&t(o[1])}else o&&o()}}}});i.render=n,i.__scopeId="data-v-6a81bdce";const d=i},129:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>b});var l=o(252);const a=(0,l.HX)("data-v-be335ccc");(0,l.dD)("data-v-be335ccc");const r=(0,l.Uk)("WULINKS"),s={style:{padding:"30px"}},n={class:"theme-wulinks-content"};(0,l.Cn)();const u=a(((e,t,o,u,c,i)=>{const d=(0,l.up)("q-btn"),p=(0,l.up)("router-link"),m=(0,l.up)("q-toolbar-title"),f=(0,l.up)("q-toolbar"),h=(0,l.up)("q-header"),b=(0,l.up)("book-side-bar"),y=(0,l.up)("q-scroll-area"),k=(0,l.up)("q-drawer"),g=(0,l.up)("content"),v=(0,l.up)("q-page-container"),w=(0,l.up)("q-layout"),S=(0,l.up)("ClientOnly");return(0,l.wg)(),(0,l.j4)(S,null,{default:a((()=>[(0,l.Wm)(w,{view:"hHh lpr fff"},{default:a((()=>[(0,l.Wm)(h,{reveal:"",elevated:""},{default:a((()=>[(0,l.Wm)(f,null,{default:a((()=>[(0,l.Wm)(d,{dense:"",flat:"",round:"",icon:"menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,l.Wm)(m,null,{default:a((()=>[(0,l.Wm)(p,{to:"/",style:{color:"#ffffff"}},{default:a((()=>[r])),_:1})])),_:1})])),_:1})])),_:1}),"book"===e.pageType?((0,l.wg)(),(0,l.j4)(k,{key:0,"show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=t=>e.leftDrawerOpen=t),side:"left",bordered:""},{default:a((()=>[(0,l.Wm)(y,{class:"scroll-area","thumb-style":e.thumbStyle,"bar-style":e.scollBarStyle},{default:a((()=>[(0,l.Wm)(b,{docTree:e.docTree,pageAnchors:e.anchorsRef,basePath:e.scopeBasePath},null,8,["docTree","pageAnchors","basePath"])])),_:1},8,["thumb-style","bar-style"])])),_:1},8,["modelValue"])):(0,l.kq)("",!0),(0,l.Wm)(v,null,{default:a((()=>[(0,l.Wm)(y,{ref:"docScrollRef",class:"scroll-area","thumb-style":e.thumbStyle,"bar-style":e.scollBarStyle,onScroll:e.onDocAreaScroll},{default:a((()=>[(0,l.Wm)("div",s,[(0,l.Wm)("div",n,[(0,l.Wm)(g)])])])),_:1},8,["thumb-style","bar-style","onScroll"])])),_:1})])),_:1})])),_:1})}));var c=o(262),i=o(621),d=o(528),p=o(743),m=o(119);function f(e,t){if(e){const o=decodeURIComponent(e.currentRoute.value.hash),l=decodeURIComponent(t||"");o!==l&&e.replace({hash:l,force:!0})}}const h=(0,l.aZ)({name:"Layout",components:{BookSideBar:p.default},setup(){const e=(0,c.iH)(!1),t=(0,i.Vi)(),o=(0,i.I2)(),a=(0,l.Fl)((()=>o.value.type||"special")),r=(0,l.f3)(d.EP),s=(0,l.Fl)((()=>o.value.scopePath||t.value.path)),n=(0,c.iH)(),u=(0,c.iH)(Array()),p=(0,m.tv)(),h=()=>{n.value&&(u.value=n.value.getScrollTarget().querySelectorAll(".header-anchor"))};return(0,l.YP)((()=>p.currentRoute.value.path),(()=>h())),(0,l.JJ)(d.Sw,(e=>{e&&setTimeout((()=>{const t=u.value;if(t&&t.length)for(let o=0;o<t.length;o++)decodeURIComponent(t[o].hash)===e&&t[o].scrollIntoView()}),100)})),(0,l.JJ)(d.tz,(()=>{n.value&&n.value.setScrollPosition("vertical",0)})),{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},thumbStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"7px",opacity:.5},scollBarStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"7px",opacity:.2},pageType:a,docTree:r,scopeBasePath:s,docScrollRef:n,anchorsRef:u,onDocAreaScroll:()=>{var e;const t=n.value;if(t){u.value.length||h();const o=u.value;if(1===t.getScrollPercentage().top)f(p,o[o.length-1].hash);else{const l=null!=(e=t.getScrollPosition().top)?e:0;for(let e=0;e<o.length-1;e++){const t=o[e],a=o[e+1];if(0===e&&l<t.offsetTop||l>=t.offsetTop&&l<a.offsetTop){f(p,t.hash);break}e==o.length-2&&f(p,a.hash)}}}}}}});h.render=u,h.__scopeId="data-v-be335ccc";const b=h}}]);