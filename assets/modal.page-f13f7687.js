import{d as u,r as D,a as s,o as m,h as A,w as e,e as l,i as o,b as n,c as C}from"./index-b0cbdcd0.js";const B=o("p",{class:"md-p"}," 创建第一个对话框",-1),f={class:"demo-margin"},v=o("div",{style:{width:"500px",height:"200px"}},null,-1),E=u({__name:"basic.demo",setup(_){const t=D(!1),a=()=>{t.value=!0};return(d,c)=>{const p=s("YButton"),i=s("YModal"),r=s("component-demo");return m(),A(r,{code:"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class%3D%22demo-margin%22%3E%0D%0A%20%20%20%20%3CYButton%20%40click%3D%22open%22%3EOpen%20Modal%3C%2FYButton%3E%0D%0A%20%20%20%20%3CYModal%20v-model%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20500px%3B%20height%3A%20200px%22%3E%3C%2Fdiv%3E%0D%0A%20%20%20%20%3C%2FYModal%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0D%0A%0D%0Aconst%20show%20%3D%20ref(false)%3B%0D%0Aconst%20open%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20show.value%20%3D%20true%3B%0D%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{head:e(()=>[l(" 基础用法 ")]),content:e(()=>[B]),demo:e(()=>[o("div",f,[n(p,{onClick:a},{default:e(()=>[l("Open Modal")]),_:1}),n(i,{modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=h=>t.value=h)},{default:e(()=>[v]),_:1},8,["modelValue"])])]),_:1})}}}),x={class:"docs"},w=o("h1",{class:"md-head md-head-1"},"对话框 Modal",-1),Y=o("p",{class:"md-p"},"常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。支持组件调用和函数调用两种方式。",-1),M=o("h2",{class:"md-head md-head-2"},"代码演示",-1),F={__name:"modal.page",setup(_){return(t,a)=>{const d=s("component-demos");return m(),C("div",x,[w,Y,M,n(d,{span:2},{default:e(()=>[n(E)]),_:1})])}}};export{F as default};
