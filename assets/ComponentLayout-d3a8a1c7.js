import{d as b,u as f,f as g,r as y,g as C,a as e,o as w,h,w as l,b as n}from"./index-df6b468e.js";const S=b({__name:"ComponentLayout",setup(v){const c=f(),p=g(),i=y(c.path),a=t=>{p.push(t.link)},m=(t,o)=>{console.log(t),console.log(o)},r=C([{text:"通用组件",items:[{text:"按钮 Button",link:"/component/button"},{text:"卡片 Card",link:"/component/card"},{text:"下拉菜单 Dropdown",link:"/component/dropdown"},{text:"滚动条 Scrollbar",link:"/component/scrollbar"},{text:"回到顶部 BackTop",link:"/component/backTop"},{text:"标签页 Tabs",link:"/component/tabs"},{text:"文本省略 Ellipsis",link:"/component/ellipsis"},{text:"文字提示 Tooltip",link:"/component/tooltip"}]},{text:"布局组件",items:[{text:"分割线 Divider",link:"/component/divider"},{text:"栅格 Grid",link:"/component/row"},{text:"间距 Space",link:"/component/space"},{text:"布局 Layout",link:"/component/layout"},{text:"弹性布局 Flex",link:"/component/flex"}]},{text:"数据录入组件",items:[{text:"复选框 Checkbox",link:"/component/checkbox"},{text:"表单 Form",link:"/component/form"},{text:"文本输入 Input",link:"/component/input"},{text:"开关 Switch",link:"/component/switch"},{text:"单选框 Radio",link:"/component/radio"},{text:"上传 Upload",link:"/component/upload"},{text:"颜色选择器 ColorPicker",link:"/component/colorPicker"},{text:"选择器 Select",link:"/component/select"},{text:"滑动输入条 Slider",link:"/component/slider"},{text:"日期选择框 datePicker",link:"/component/datePicker"},{text:"时间选择器 TimePicker",link:"/component/timePicker"}]},{text:"数据展示",items:[{text:"图像 Image",link:"/component/image"},{text:"数字动画 Number",link:"/component/number"},{text:"徽标数 Badge",link:"/component/badge"},{text:"分页 Pagination",link:"/component/pagination"}]},{text:"反馈组件",items:[{text:"抽屉 Drawer",link:"/component/drawer"},{text:"信息 Message",link:"/component/message"},{text:"模态框 Modal",link:"/component/modal"},{text:"气泡确认框 PopConfirm",link:"/component/popconfirm"}]}]);return(t,o)=>{const s=e("YMenu"),x=e("YSidebar"),d=e("RouterView"),k=e("YContent"),u=e("YLayout");return w(),h(u,{style:{flex:"1"}},{default:l(()=>[n(x,{collapsed:"",style:{"border-right":"1px solid var(--y-color-border-secondary)"}},{default:l(()=>[n(s,{modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=_=>i.value=_),"all-open":"",items:r,"key-field":"link","label-field":"text","children-field":"items",onSelect:a,onOpenChange:m},null,8,["modelValue","items"])]),_:1}),n(k,{style:{padding:"30px 20px 0 40px"}},{default:l(()=>[n(d)]),_:1})]),_:1})}}});export{S as default};
