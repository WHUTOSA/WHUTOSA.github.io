import{f as e,M as t,g as o,r as a,o as r,c as s,a as m,w as i}from"./app.639479b5.js";import n,{ItemInfo as d}from"./BookSideBarItem.f3c68502.js";var p=e({name:"BookSideBar",props:{docTree:{type:t,default:new t},basePath:{type:String,default:""}},compoent:{BookSideBarItem:n},setup:e=>({rootItem:o((()=>new d(e.docTree.root,0,e.basePath)))})});const l={class:"q-gutter-sm"};p.render=function(e,t,o,n,d,p){const u=a("book-side-bar-item"),c=a("q-list");return r(),s("div",l,[m(c,null,{default:i((()=>[m(u,{item:e.rootItem},null,8,["item"])])),_:1})])};export{p as default};
