import{d as B,r as D,a as n,o as _,h as A,w as t,e as r,b as o,i as m,c as C,j as b}from"./index-b0cbdcd0.js";const E=m("p",{class:"md-p"}," 基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。",-1),Y=B({__name:"basic.demo",setup(h){const d=D(!1),s=()=>{d.value=!0};return(c,l)=>{const e=n("YButton"),a=n("YDrawer"),i=n("component-demo");return _(),A(i,{code:"%3Ctemplate%3E%0D%0A%20%20%3CYButton%20type%3D%22primary%22%20%40click%3D%22onOpen%22%3Eopen%3C%2FYButton%3E%0D%0A%20%20%3CYDrawer%20v-model%3D%22show%22%3E%3C%2FYDrawer%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0D%0Aconst%20show%20%3D%20ref(false)%3B%0D%0A%0D%0Aconst%20onOpen%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20show.value%20%3D%20true%3B%0D%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{head:t(()=>[r(" 基础用法 ")]),content:t(()=>[E]),demo:t(()=>[o(e,{type:"primary",onClick:s},{default:t(()=>[r("open")]),_:1}),o(a,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=u=>d.value=u)},null,8,["modelValue"])]),_:1})}}}),w=m("p",{class:"md-p"}," 自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭。",-1),v=B({__name:"position.demo",setup(h){const d=D(!1),s=D("right"),c=l=>{d.value=!0,s.value=l};return(l,e)=>{const a=n("YButton"),i=n("YButtonGroup"),u=n("YDrawer"),f=n("component-demo");return _(),A(f,{code:"%3Ctemplate%3E%0D%0A%20%20%3CYButtonGroup%20type%3D%22primary%22%3E%0D%0A%20%20%20%20%3CYButton%20%40click%3D%22onOpen('top')%22%3Etop%3C%2FYButton%3E%0D%0A%20%20%20%20%3CYButton%20%40click%3D%22onOpen('right')%22%3Eright%3C%2FYButton%3E%0D%0A%20%20%20%20%3CYButton%20%40click%3D%22onOpen('bottom')%22%3Ebottom%3C%2FYButton%3E%0D%0A%20%20%20%20%3CYButton%20%40click%3D%22onOpen('left')%22%3Eleft%3C%2FYButton%3E%0D%0A%20%20%3C%2FYButtonGroup%3E%0D%0A%20%20%3CYDrawer%20v-model%3D%22show%22%20%3Adirection%3D%22direction%22%3E%3C%2FYDrawer%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0D%0Aimport%20%7B%20DrawerDirection%20%7D%20from%20%22%40nimble-ui%2Fvue%22%3B%0D%0Aconst%20show%20%3D%20ref(false)%3B%0D%0Aconst%20direction%20%3D%20ref%3CDrawerDirection%3E(%22right%22)%3B%0D%0A%0D%0Aconst%20onOpen%20%3D%20(type%3A%20DrawerDirection)%20%3D%3E%20%7B%0D%0A%20%20show.value%20%3D%20true%3B%0D%0A%20%20direction.value%20%3D%20type%3B%0D%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{head:t(()=>[r(" 自定义位置 ")]),content:t(()=>[w]),demo:t(()=>[o(i,{type:"primary"},{default:t(()=>[o(a,{onClick:e[0]||(e[0]=p=>c("top"))},{default:t(()=>[r("top")]),_:1}),o(a,{onClick:e[1]||(e[1]=p=>c("right"))},{default:t(()=>[r("right")]),_:1}),o(a,{onClick:e[2]||(e[2]=p=>c("bottom"))},{default:t(()=>[r("bottom")]),_:1}),o(a,{onClick:e[3]||(e[3]=p=>c("left"))},{default:t(()=>[r("left")]),_:1})]),_:1}),o(u,{modelValue:d.value,"onUpdate:modelValue":e[4]||(e[4]=p=>d.value=p),direction:s.value},null,8,["modelValue","direction"])]),_:1})}}}),y={class:"docs"},k=m("h1",{class:"md-head md-head-1"},"抽屉 Drawer",-1),F=m("p",{class:"md-p"},"屏幕边缘滑出的浮层面板。",-1),g=m("h2",{class:"md-head md-head-2"},"代码演示",-1),O=b('<h2 class="md-head md-head-2">API</h2><h3 class="md-head md-head-3">Drawer Props</h3><table class="demo-table"><thead class="demo-table__head"><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th><th>版本</th></tr></thead><tbody class="demo-table__body"><tr><td>attr-type</td><td><code>&#39;button&#39;</code> | <code>&#39;submit&#39;</code>| <code>&#39;reset&#39;</code> | <code>&#39;button&#39;</code></td><td>按钮的 DOM 的 <code>type</code> 属性</td><td></td><td></td></tr><tr><td>block</td><td><code>boolean</code></td><td><code>false</code></td><td>按钮是否显示为块级</td><td></td></tr><tr><td>bordered</td><td><code>boolean</code></td><td><code>true</code></td><td>按钮是否显示 border</td><td></td></tr><tr><td>circle</td><td><code>boolean</code></td><td><code>false</code></td><td>按钮是否为圆形</td><td></td></tr><tr><td>dashed</td><td><code>boolean</code></td><td><code>false</code></td><td>按钮边框是否为虚线</td><td></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>按钮是否禁用</td><td></td></tr><tr><td>keyboard</td><td><code>boolean</code></td><td><code>true</code></td><td>是否支持键盘操作</td><td></td></tr><tr><td>loading</td><td><code>boolean</code></td><td><code>false</code></td><td>按钮是否显示加载状态</td><td></td></tr><tr><td>round</td><td><code>boolean</code></td><td><code>false</code></td><td>按钮是否显示圆角</td><td></td></tr><tr><td>size</td><td><code>&#39;tiny&#39;</code> | <code>&#39;small&#39;</code> | <code>&#39;medium&#39;</code> | <code>&#39;large&#39;</code> | <code>&#39;medium&#39;</code></td><td>按钮的尺寸</td><td></td><td></td></tr></tbody></table>',3),$={__name:"drawer.page",setup(h){return(d,s)=>{const c=n("component-demos");return _(),C("div",y,[k,F,g,o(c,{span:2},{default:t(()=>[o(Y),o(v)]),_:1}),O])}}};export{$ as default};
