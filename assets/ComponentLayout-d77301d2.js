import{d as h,u as y,f,r as b,g as v,a as e,o as g,h as w,w as l,b as n}from"./index-1235dcf3.js";const S=h({__name:"ComponentLayout",setup(C){const c=y(),s=f(),a=b(c.path),i=t=>{s.push(t.link)},r=(t,o)=>{console.log(t),console.log(o)},p=v([{text:"通用组件",items:[{text:"按钮 Button",link:"/component/button"},{text:"卡片 Card",link:"/component/card"},{text:"下拉菜单 Dropdown",link:"/component/dropdown"},{text:"滚动条 Scrollbar",link:"/component/scrollbar"}]},{text:"布局组件",items:[{text:"分割线 Divider",link:"/component/divider"},{text:"栅格 Grid",link:"/component/row"},{text:"间距 Space",link:"/component/space"},{text:"布局 Layout",link:"/component/layout"}]},{text:"数据录入组件",items:[{text:"复选框 Checkbox",link:"/component/checkbox"},{text:"表单 Form",link:"/component/form"},{text:"文本输入 Input",link:"/component/input"},{text:"开关 Switch",link:"/component/switch"}]},{text:"反馈组件",items:[{text:"抽屉 Drawer",link:"/component/drawer"},{text:"信息 Message",link:"/component/message"},{text:"模态框 Modal",link:"/component/modal"}]}]);return(t,o)=>{const m=e("YMenu"),d=e("YSidebar"),u=e("RouterView"),x=e("YContent"),_=e("YLayout");return g(),w(_,{"content-style":"height: calc(100vh - var(--y-header-height))","has-sidebar":""},{default:l(()=>[n(d,{collapsed:"",style:{"border-right":"1px solid var(--y-color-border-secondary)"}},{default:l(()=>[n(m,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=k=>a.value=k),"all-open":"",items:p,"key-field":"link","label-field":"text","children-field":"items",onSelect:i,onOpenChange:r},null,8,["modelValue","items"])]),_:1}),n(x,{style:{padding:"30px 20px 0 40px"}},{default:l(()=>[n(u)]),_:1})]),_:1})}}});export{S as default};
