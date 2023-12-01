import{d as h,a,o as m,h as D,w as e,e as r,b as t,i as s,c as u,j as B}from"./index-0822f89b.js";const F=s("p",{class:"md-p"}," 最简单的用法。",-1),v=h({__name:"basic.demo",setup(i){const l=o=>{console.log(o)};return(o,d)=>{const c=a("YInput"),n=a("YFormItem"),p=a("YButton"),_=a("YFlex"),E=a("YForm"),A=a("component-demo");return m(),D(A,{code:"%3Ctemplate%3E%0D%0A%20%20%3CYForm%20%40submit%3D%22onSubmit%22%3E%0D%0A%20%20%20%20%3CYFlex%20vertical%20%3Agap%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3CYFormItem%20required%3D%22%E8%B4%A6%E5%8F%B7%E4%B8%8D%E8%83%BD%E4%B8%BA%E7%A9%BA%22%20vertical%20label%3D%22%E8%B4%A6%E5%8F%B7%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CYInput%20allow-clear%20clear-trigger%3D%22always%22%20%3Abordered%3D%22false%22%20name%3D%22name%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2FYFormItem%3E%0D%0A%20%20%20%20%20%20%3CYFormItem%20required%3D%22%E5%AF%86%E7%A0%81%E4%B8%8D%E8%83%BD%E4%B8%BA%E7%A9%BA%22%20vertical%20label%3D%22%E5%AF%86%E7%A0%81%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CYInput%20type%3D%22password%22%20%3Abordered%3D%22false%22%20name%3D%22password%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2FYFormItem%3E%0D%0A%20%20%20%20%20%20%3CYButton%20%3Anative-type%3D%22'submit'%22%20%3Asize%3D%22'large'%22%20%3Atype%3D%22'primary'%22%20block%3E%E7%99%BB%E5%BD%95%3C%2FYButton%3E%0D%0A%20%20%20%20%3C%2FYFlex%3E%0D%0A%20%20%3C%2FYForm%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aconst%20onSubmit%20%3D%20(data%3A%20any)%20%3D%3E%20%7B%0D%0A%20%20console.log(data)%3B%0D%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{head:e(()=>[r(" 基础用法 ")]),content:e(()=>[F]),demo:e(()=>[t(E,{onSubmit:l},{default:e(()=>[t(_,{vertical:"",gap:12},{default:e(()=>[t(n,{required:"账号不能为空",vertical:"",label:"账号"},{default:e(()=>[t(c,{"allow-clear":"","clear-trigger":"always",bordered:!1,name:"name",placeholder:"请输入"})]),_:1}),t(n,{required:"密码不能为空",vertical:"",label:"密码"},{default:e(()=>[t(c,{type:"password",bordered:!1,name:"password",placeholder:"请输入"})]),_:1}),t(p,{"native-type":"submit",size:"large",type:"primary",block:""},{default:e(()=>[r("登录")]),_:1})]),_:1})]),_:1})]),_:1})}}}),b={class:"docs"},Y=s("h1",{class:"md-head md-head-1"},"输入框 Input",-1),C=s("h2",{class:"md-head md-head-2"},"代码演示",-1),f=B('<h2 class="md-head md-head-2">API</h2><h3 class="md-head md-head-3">Input Props</h3><table class="demo-table"><thead class="demo-table__head"><tr><div class="tr-div"><th><div class="cell-div">名称</div></th><th><div class="cell-div">类型</div></th><th><div class="cell-div">默认值</div></th><th><div class="cell-div">说明</div></th><th><div class="cell-div">版本</div></th></div></tr></thead></table>',3),g={__name:"input.page",setup(i){return(l,o)=>{const d=a("component-demos");return m(),u("div",b,[Y,C,t(d,{span:2},{default:e(()=>[t(v)]),_:1}),f])}}};export{g as default};
