import{d as v,g as B,a as o,o as i,h,w as a,e as D,b as e,i as n,c as b,j as F}from"./index-b51e9479.js";const f=n("p",{class:"md-p"}," 最简单的用法。",-1),C=v({__name:"basic.demo",setup(p){const l=B({aa:22}),c=s=>{console.log(s)};return(s,r)=>{const d=o("YInput"),m=o("YFormItem"),A=o("YButton"),u=o("YFlex"),E=o("YForm"),_=o("component-demo");return i(),h(_,{code:"%3Ctemplate%3E%0D%0A%20%20%3CYForm%20%40submit%3D%22onSubmit%22%3E%0D%0A%20%20%20%20%3CYFlex%20vertical%20%3Agap%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3CYFormItem%20required%3D%22%E8%B4%A6%E5%8F%B7%E4%B8%8D%E8%83%BD%E4%B8%BA%E7%A9%BA%22%20vertical%20label%3D%22%E8%B4%A6%E5%8F%B7%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CYInput%0D%0A%20%20%20%20%20%20%20%20%20%20v-model%3D%22value.aa%22%0D%0A%20%20%20%20%20%20%20%20%20%20allow-clear%0D%0A%20%20%20%20%20%20%20%20%20%20clear-trigger%3D%22always%22%0D%0A%20%20%20%20%20%20%20%20%20%20%3Abordered%3D%22false%22%0D%0A%20%20%20%20%20%20%20%20%20%20name%3D%22name%22%0D%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%0D%0A%20%20%20%20%20%20%20%20%20%20%3Aformatter%3D%22(value)%20%3D%3E%20%60%24%7BNumber(value)%20%2F%20100%7D%60%22%0D%0A%20%20%20%20%20%20%20%20%20%20%3Aparser%3D%22(value)%20%3D%3E%20%60%24%7BNumber(value)%20*%20100%7D%60%22%0D%0A%20%20%20%20%20%20%20%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2FYFormItem%3E%0D%0A%20%20%20%20%20%20%3CYFormItem%20required%3D%22%E5%AF%86%E7%A0%81%E4%B8%8D%E8%83%BD%E4%B8%BA%E7%A9%BA%22%20vertical%20label%3D%22%E5%AF%86%E7%A0%81%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CYInput%20v-model%3D%22value.bb%22%20type%3D%22password%22%20%3Abordered%3D%22false%22%20name%3D%22password%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2FYFormItem%3E%0D%0A%20%20%20%20%20%20%3CYInput%20prefix%3D%22%E5%89%8D%E7%BC%80%22%20suffix%3D%22%E5%90%8E%E7%BC%80%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3CYButton%20%3Anative-type%3D%22'submit'%22%20%3Asize%3D%22'large'%22%20%3Atype%3D%22'primary'%22%20block%3E%E7%99%BB%E5%BD%95%3C%2FYButton%3E%0D%0A%20%20%20%20%3C%2FYFlex%3E%0D%0A%20%20%3C%2FYForm%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20reactive%20%7D%20from%20%22vue%22%3B%0D%0A%0D%0Aconst%20value%20%3D%20reactive%3Cany%3E(%7B%0D%0A%20%20aa%3A%2022%2C%0D%0A%7D)%3B%0D%0Aconst%20onSubmit%20%3D%20(data%3A%20any)%20%3D%3E%20%7B%0D%0A%20%20console.log(data)%3B%0D%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{head:a(()=>[D(" 基础用法 ")]),content:a(()=>[f]),demo:a(()=>[e(E,{onSubmit:c},{default:a(()=>[e(u,{vertical:"",gap:12},{default:a(()=>[e(m,{required:"账号不能为空",vertical:"",label:"账号"},{default:a(()=>[e(d,{modelValue:l.aa,"onUpdate:modelValue":r[0]||(r[0]=t=>l.aa=t),"allow-clear":"","clear-trigger":"always",bordered:!1,name:"name",placeholder:"请输入",formatter:t=>`${Number(t)/100}`,parser:t=>`${Number(t)*100}`},null,8,["modelValue","formatter","parser"])]),_:1}),e(m,{required:"密码不能为空",vertical:"",label:"密码"},{default:a(()=>[e(d,{modelValue:l.bb,"onUpdate:modelValue":r[1]||(r[1]=t=>l.bb=t),type:"password",bordered:!1,name:"password",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(d,{prefix:"前缀",suffix:"后缀"}),e(A,{"native-type":"submit",size:"large",type:"primary",block:""},{default:a(()=>[D("登录")]),_:1})]),_:1})]),_:1})]),_:1})}}}),Y={class:"docs"},I=n("h1",{class:"md-head md-head-1"},"输入框 Input",-1),g=n("h2",{class:"md-head md-head-2"},"代码演示",-1),x=F('<h2 class="md-head md-head-2">API</h2><h3 class="md-head md-head-3">Input Props</h3><table class="demo-table"><thead class="demo-table__head"><tr><div class="tr-div"><th><div class="cell-div">名称</div></th><th><div class="cell-div">类型</div></th><th><div class="cell-div">默认值</div></th><th><div class="cell-div">说明</div></th><th><div class="cell-div">版本</div></th></div></tr></thead></table>',3),w={__name:"input.page",setup(p){return(l,c)=>{const s=o("component-demos");return i(),b("div",Y,[I,g,e(s,{span:2},{default:a(()=>[e(C)]),_:1}),x])}}};export{w as default};
