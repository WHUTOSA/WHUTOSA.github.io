(self.webpackChunkwulinks=self.webpackChunkwulinks||[]).push([[417],{417:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>d});var t=s(252),l=s(828),o=s(687);class p{constructor(){this.listeners=[]}add(e){this.listeners.push(e)}notify(e,a){this.listeners.filter((e=>!a||e.key!==a)).forEach((a=>a.callback(e)))}}class n{constructor(){this.group=new p}static bind(e){return(new n).add(e)}add(e){e.forEach((e=>{this.group.add({key:(0,o.PX)(8,!0),callback:a=>{e.component&&e.component.props&&(e.component.props.modelValue=a)}}),e.props||(e.props={}),e.props["onUpdate:modelValue"]=e=>this.group.notify(e)}))}}const r=(0,t.aZ)({name:"CodeGroup",setup:(e,{slots:a})=>()=>{var e;const s=((null==(e=a.default)?void 0:e.call(a))||[]).map((e=>(null===e.props&&(e.props={}),e.props.key=(0,o.PX)(8,!0),e))),p=s.length?`${s[0].props.key||""}`:"",r=(0,t.h)(l.QTabs,{modelValue:p,class:"bg-primary text-weight-bolder text-white",align:"justify",dense:!0,narrowIndicator:!0},{default:()=>s.map((e=>(0,t.h)(l.QTab,{name:e.props.key,label:`${e.props.title}`||"Untitled"})))}),d=(0,t.h)(l.QTabPanels,{modelValue:p,class:"code-group-panels",animated:!0},{default:()=>s.map((e=>(0,t.h)(l.QTabPanel,{name:e.props.key,class:"code-group-panel"},{default:()=>[e]})))});return n.bind([r,d]),(0,t.h)(l.QCard,{},{default:()=>[r,d]})}});r.__scopeId="data-v-f276a70e";const d=r}}]);