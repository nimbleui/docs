import{d as m,g as A,a,o as C,h as Y,w as e,e as l,b as t,n as o,i as h,c as p,j as b}from"./index-1235dcf3.js";const E=h("p",{class:"md-p"}," 典型的页面布局。",-1),S=m({__name:"basic.demo",setup(_){const c=A({lineHeight:"64px",backgroundColor:"var(--y-color-primary-5)",color:"#fff",textAlign:"center"}),d=A({textAlign:"center",minHeight:"120px",lineHeight:"120px",color:" #fff",backgroundColor:"var(--y-color-primary)"}),r=A({backgroundColor:"var(--y-color-primary-5)",color:"#fff",textAlign:"center"}),D=A({backgroundColor:"var(--y-color-primary-4)",color:"#fff",textAlign:"center",lineHeight:"120px"});return(B,k)=>{const n=a("YHeader"),i=a("YContent"),y=a("YFooter"),s=a("YLayout"),v=a("YSidebar"),f=a("YSpace"),u=a("component-demo");return C(),Y(u,{code:"%3Ctemplate%3E%0D%0A%20%20%3CYSpace%20vertical%20style%3D%22width%3A%20100%25%22%20%3Asize%3D%22%5B20%2C%200%5D%22%3E%0D%0A%20%20%20%20%3CYLayout%3E%0D%0A%20%20%20%20%20%20%3CYHeader%20%3Astyle%3D%22headerStyle%22%3Eheader%3C%2FYHeader%3E%0D%0A%20%20%20%20%20%20%3CYContent%20%3Astyle%3D%22contentStyle%22%3Econtent%3C%2FYContent%3E%0D%0A%20%20%20%20%20%20%3CYFooter%20%3Astyle%3D%22footerStyle%22%3Efooter%3C%2FYFooter%3E%0D%0A%20%20%20%20%3C%2FYLayout%3E%0D%0A%0D%0A%20%20%20%20%3CYLayout%3E%0D%0A%20%20%20%20%20%20%3CYHeader%20%3Astyle%3D%22headerStyle%22%3Eheader%3C%2FYHeader%3E%0D%0A%20%20%20%20%20%20%3CYLayout%20has-sidebar%20%3Astyle%3D%22contentStyle%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CYSidebar%20%3Astyle%3D%22sidebarStyle%22%3Esidebar%3C%2FYSidebar%3E%0D%0A%20%20%20%20%20%20%20%20%3CYContent%20%3Astyle%3D%22contentStyle%22%3Econtent%3C%2FYContent%3E%0D%0A%20%20%20%20%20%20%3C%2FYLayout%3E%0D%0A%20%20%20%20%20%20%3CYFooter%20%3Astyle%3D%22footerStyle%22%3Efooter%3C%2FYFooter%3E%0D%0A%20%20%20%20%3C%2FYLayout%3E%0D%0A%0D%0A%20%20%20%20%3CYLayout%3E%0D%0A%20%20%20%20%20%20%3CYHeader%20%3Astyle%3D%22headerStyle%22%3Eheader%3C%2FYHeader%3E%0D%0A%20%20%20%20%20%20%3CYLayout%20has-sidebar%20%3Astyle%3D%22contentStyle%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CYContent%20%3Astyle%3D%22contentStyle%22%3Econtent%3C%2FYContent%3E%0D%0A%20%20%20%20%20%20%20%20%3CYSidebar%20%3Astyle%3D%22sidebarStyle%22%3Esidebar%3C%2FYSidebar%3E%0D%0A%20%20%20%20%20%20%3C%2FYLayout%3E%0D%0A%20%20%20%20%20%20%3CYFooter%20%3Astyle%3D%22footerStyle%22%3Efooter%3C%2FYFooter%3E%0D%0A%20%20%20%20%3C%2FYLayout%3E%0D%0A%0D%0A%20%20%20%20%3CYLayout%20has-sidebar%3E%0D%0A%20%20%20%20%20%20%3CYSidebar%20%3Astyle%3D%22sidebarStyle%22%3Esidebar%3C%2FYSidebar%3E%0D%0A%20%20%20%20%20%20%3CYLayout%3E%0D%0A%20%20%20%20%20%20%20%20%3CYHeader%20%3Astyle%3D%22headerStyle%22%3Eheader%3C%2FYHeader%3E%0D%0A%20%20%20%20%20%20%20%20%3CYContent%20%3Astyle%3D%22contentStyle%22%3Econtent%3C%2FYContent%3E%0D%0A%20%20%20%20%20%20%20%20%3CYFooter%20%3Astyle%3D%22footerStyle%22%3Efooter%3C%2FYFooter%3E%0D%0A%20%20%20%20%20%20%3C%2FYLayout%3E%0D%0A%20%20%20%20%3C%2FYLayout%3E%0D%0A%20%20%3C%2FYSpace%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20reactive%20%7D%20from%20%22vue%22%3B%0D%0A%0D%0Aconst%20headerStyle%20%3D%20reactive(%7B%0D%0A%20%20lineHeight%3A%20%2264px%22%2C%0D%0A%20%20backgroundColor%3A%20%22var(--y-color-primary-5)%22%2C%0D%0A%20%20color%3A%20%22%23fff%22%2C%0D%0A%20%20textAlign%3A%20%22center%22%2C%0D%0A%7D)%3B%0D%0A%0D%0Aconst%20contentStyle%20%3D%20reactive(%7B%0D%0A%20%20textAlign%3A%20%22center%22%2C%0D%0A%20%20minHeight%3A%20%22120px%22%2C%0D%0A%20%20lineHeight%3A%20%22120px%22%2C%0D%0A%20%20color%3A%20%22%20%23fff%22%2C%0D%0A%20%20backgroundColor%3A%20%22var(--y-color-primary)%22%2C%0D%0A%7D)%3B%0D%0A%0D%0Aconst%20footerStyle%20%3D%20reactive(%7B%0D%0A%20%20backgroundColor%3A%20%22var(--y-color-primary-5)%22%2C%0D%0A%20%20color%3A%20%22%23fff%22%2C%0D%0A%20%20textAlign%3A%20%22center%22%2C%0D%0A%7D)%3B%0D%0A%0D%0Aconst%20sidebarStyle%20%3D%20reactive(%7B%0D%0A%20%20backgroundColor%3A%20%22var(--y-color-primary-4)%22%2C%0D%0A%20%20color%3A%20%22%23fff%22%2C%0D%0A%20%20textAlign%3A%20%22center%22%2C%0D%0A%20%20lineHeight%3A%20%22120px%22%2C%0D%0A%7D)%3B%0A%3C%2Fscript%3E%0A"},{head:e(()=>[l(" 基础用法 ")]),content:e(()=>[E]),demo:e(()=>[t(f,{vertical:"",style:{width:"100%"},size:[20,0]},{default:e(()=>[t(s,null,{default:e(()=>[t(n,{style:o(c)},{default:e(()=>[l("header")]),_:1},8,["style"]),t(i,{style:o(d)},{default:e(()=>[l("content")]),_:1},8,["style"]),t(y,{style:o(r)},{default:e(()=>[l("footer")]),_:1},8,["style"])]),_:1}),t(s,null,{default:e(()=>[t(n,{style:o(c)},{default:e(()=>[l("header")]),_:1},8,["style"]),t(s,{"has-sidebar":"",style:o(d)},{default:e(()=>[t(v,{style:o(D)},{default:e(()=>[l("sidebar")]),_:1},8,["style"]),t(i,{style:o(d)},{default:e(()=>[l("content")]),_:1},8,["style"])]),_:1},8,["style"]),t(y,{style:o(r)},{default:e(()=>[l("footer")]),_:1},8,["style"])]),_:1}),t(s,null,{default:e(()=>[t(n,{style:o(c)},{default:e(()=>[l("header")]),_:1},8,["style"]),t(s,{"has-sidebar":"",style:o(d)},{default:e(()=>[t(i,{style:o(d)},{default:e(()=>[l("content")]),_:1},8,["style"]),t(v,{style:o(D)},{default:e(()=>[l("sidebar")]),_:1},8,["style"])]),_:1},8,["style"]),t(y,{style:o(r)},{default:e(()=>[l("footer")]),_:1},8,["style"])]),_:1}),t(s,{"has-sidebar":""},{default:e(()=>[t(v,{style:o(D)},{default:e(()=>[l("sidebar")]),_:1},8,["style"]),t(s,null,{default:e(()=>[t(n,{style:o(c)},{default:e(()=>[l("header")]),_:1},8,["style"]),t(i,{style:o(d)},{default:e(()=>[l("content")]),_:1},8,["style"]),t(y,{style:o(r)},{default:e(()=>[l("footer")]),_:1},8,["style"])]),_:1})]),_:1})]),_:1})]),_:1})}}}),F={class:"docs"},g=h("h1",{class:"md-head md-head-1"},"布局 Layout",-1),x=h("p",{class:"md-p"},"协助进行页面级整体布局。",-1),L=h("h2",{class:"md-head md-head-2"},"代码演示",-1),H=b('<h2 class="md-head md-head-2">API</h2><h3 class="md-head md-head-3">Layout Props</h3><table class="demo-table"><thead class="demo-table__head"><tr><div class="tr-div"><th><div class="cell-div">名称</div></th><th><div class="cell-div">类型</div></th><th><div class="cell-div">默认值</div></th><th><div class="cell-div">说明</div></th><th><div class="cell-div">版本</div></th></div></tr></thead></table><h3 class="md-head md-head-3">Layout Events</h3><table class="demo-table"><thead class="demo-table__head"><tr><div class="tr-div"><th><div class="cell-div">事件名</div></th><th><div class="cell-div">说明</div></th><th><div class="cell-div">类型</div></th></div></tr></thead><tbody class="demo-table__body"><tr><div class="tr-div"><td><div class="cell-div">click</div></td><td><div class="cell-div">点击按钮事件</div></td><td><div class="cell-div"><code>(e: Event) =&gt; void</code></div></td></div></tr></tbody></table><h3 class="md-head md-head-3">Layout Slots</h3><table class="demo-table"><thead class="demo-table__head"><tr><div class="tr-div"><th><div class="cell-div">名称</div></th><th><div class="cell-div">参数</div></th><th><div class="cell-div">说明</div></th></div></tr></thead><tbody class="demo-table__body"><tr><div class="tr-div"><td><div class="cell-div">default</div></td><td><div class="cell-div">-</div></td><td><div class="cell-div">按钮的内容</div></td></div></tr></tbody></table>',7),N={__name:"layout.page",setup(_){return(c,d)=>{const r=a("component-demos");return C(),p("div",F,[g,x,L,t(r,{span:1},{default:e(()=>[t(S)]),_:1}),H])}}};export{N as default};
