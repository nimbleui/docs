import{d as h,r as u,a as i,o as D,h as B,w as d,e as c,b as e,i as r,c as f,j as C}from"./index-1235dcf3.js";const b=r("p",{class:"md-p"}," 基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。",-1),E=h({__name:"basic.demo",setup(_){const l=u(!1),v=()=>{l.value=!0};return(o,a)=>{const t=i("YButton"),s=i("YDrawer"),p=i("component-demo");return D(),B(p,{code:"%3Ctemplate%3E%0D%0A%20%20%3CYButton%20type%3D%22primary%22%20%40click%3D%22onOpen%22%3Eopen%3C%2FYButton%3E%0D%0A%20%20%3CYDrawer%20v-model%3D%22show%22%3E%3C%2FYDrawer%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0D%0Aconst%20show%20%3D%20ref(false)%3B%0D%0A%0D%0Aconst%20onOpen%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20show.value%20%3D%20true%3B%0D%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{head:d(()=>[c(" 基础用法 ")]),content:d(()=>[b]),demo:d(()=>[e(t,{type:"primary",onClick:v},{default:d(()=>[c("open")]),_:1}),e(s,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=m=>l.value=m)},null,8,["modelValue"])]),_:1})}}}),Y=r("p",{class:"md-p"}," 自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭。",-1),w=h({__name:"position.demo",setup(_){const l=u(!1),v=u("right"),o=a=>{l.value=!0,v.value=a};return(a,t)=>{const s=i("YButton"),p=i("YButtonGroup"),m=i("YDrawer"),A=i("component-demo");return D(),B(A,{code:"%3Ctemplate%3E%0D%0A%20%20%3CYButtonGroup%20type%3D%22primary%22%3E%0D%0A%20%20%20%20%3CYButton%20%40click%3D%22onOpen('top')%22%3Etop%3C%2FYButton%3E%0D%0A%20%20%20%20%3CYButton%20%40click%3D%22onOpen('right')%22%3Eright%3C%2FYButton%3E%0D%0A%20%20%20%20%3CYButton%20%40click%3D%22onOpen('bottom')%22%3Ebottom%3C%2FYButton%3E%0D%0A%20%20%20%20%3CYButton%20%40click%3D%22onOpen('left')%22%3Eleft%3C%2FYButton%3E%0D%0A%20%20%3C%2FYButtonGroup%3E%0D%0A%20%20%3CYDrawer%20v-model%3D%22show%22%20%3Adirection%3D%22direction%22%3E%3C%2FYDrawer%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0D%0Aimport%20%7B%20DrawerDirection%20%7D%20from%20%22%40nimble-ui%2Fvue%22%3B%0D%0Aconst%20show%20%3D%20ref(false)%3B%0D%0Aconst%20direction%20%3D%20ref%3CDrawerDirection%3E(%22right%22)%3B%0D%0A%0D%0Aconst%20onOpen%20%3D%20(type%3A%20DrawerDirection)%20%3D%3E%20%7B%0D%0A%20%20show.value%20%3D%20true%3B%0D%0A%20%20direction.value%20%3D%20type%3B%0D%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{head:d(()=>[c(" 自定义位置 ")]),content:d(()=>[Y]),demo:d(()=>[e(p,{type:"primary"},{default:d(()=>[e(s,{onClick:t[0]||(t[0]=n=>o("top"))},{default:d(()=>[c("top")]),_:1}),e(s,{onClick:t[1]||(t[1]=n=>o("right"))},{default:d(()=>[c("right")]),_:1}),e(s,{onClick:t[2]||(t[2]=n=>o("bottom"))},{default:d(()=>[c("bottom")]),_:1}),e(s,{onClick:t[3]||(t[3]=n=>o("left"))},{default:d(()=>[c("left")]),_:1})]),_:1}),e(m,{modelValue:l.value,"onUpdate:modelValue":t[4]||(t[4]=n=>l.value=n),direction:v.value},null,8,["modelValue","direction"])]),_:1})}}}),y={class:"docs"},k=r("h1",{class:"md-head md-head-1"},"抽屉 Drawer",-1),F=r("p",{class:"md-p"},"屏幕边缘滑出的浮层面板。",-1),g=r("h2",{class:"md-head md-head-2"},"代码演示",-1),O=C('<h2 class="md-head md-head-2">API</h2><h3 class="md-head md-head-3">Drawer Props</h3><table class="demo-table"><thead class="demo-table__head"><tr><div class="tr-div"><th><div class="cell-div">名称</div></th><th><div class="cell-div">类型</div></th><th><div class="cell-div">默认值</div></th><th><div class="cell-div">说明</div></th><th><div class="cell-div">版本</div></th></div></tr></thead><tbody class="demo-table__body"><tr><div class="tr-div"><td><div class="cell-div">attr-type</div></td><td><div class="cell-div"><code>&#39;button&#39;</code> | <code>&#39;submit&#39;</code>| <code>&#39;reset&#39;</code> | <code>&#39;button&#39;</code></div></td><td><div class="cell-div">按钮的 DOM 的 <code>type</code> 属性</div></td><td><div class="cell-div"></div></td><td><div class="cell-div"></div></td></div></tr><tr><div class="tr-div"><td><div class="cell-div">block</div></td><td><div class="cell-div"><code>boolean</code></div></td><td><div class="cell-div"><code>false</code></div></td><td><div class="cell-div">按钮是否显示为块级</div></td><td><div class="cell-div"></div></td></div></tr><tr><div class="tr-div"><td><div class="cell-div">bordered</div></td><td><div class="cell-div"><code>boolean</code></div></td><td><div class="cell-div"><code>true</code></div></td><td><div class="cell-div">按钮是否显示 border</div></td><td><div class="cell-div"></div></td></div></tr><tr><div class="tr-div"><td><div class="cell-div">circle</div></td><td><div class="cell-div"><code>boolean</code></div></td><td><div class="cell-div"><code>false</code></div></td><td><div class="cell-div">按钮是否为圆形</div></td><td><div class="cell-div"></div></td></div></tr><tr><div class="tr-div"><td><div class="cell-div">dashed</div></td><td><div class="cell-div"><code>boolean</code></div></td><td><div class="cell-div"><code>false</code></div></td><td><div class="cell-div">按钮边框是否为虚线</div></td><td><div class="cell-div"></div></td></div></tr><tr><div class="tr-div"><td><div class="cell-div">disabled</div></td><td><div class="cell-div"><code>boolean</code></div></td><td><div class="cell-div"><code>false</code></div></td><td><div class="cell-div">按钮是否禁用</div></td><td><div class="cell-div"></div></td></div></tr><tr><div class="tr-div"><td><div class="cell-div">keyboard</div></td><td><div class="cell-div"><code>boolean</code></div></td><td><div class="cell-div"><code>true</code></div></td><td><div class="cell-div">是否支持键盘操作</div></td><td><div class="cell-div"></div></td></div></tr><tr><div class="tr-div"><td><div class="cell-div">loading</div></td><td><div class="cell-div"><code>boolean</code></div></td><td><div class="cell-div"><code>false</code></div></td><td><div class="cell-div">按钮是否显示加载状态</div></td><td><div class="cell-div"></div></td></div></tr><tr><div class="tr-div"><td><div class="cell-div">round</div></td><td><div class="cell-div"><code>boolean</code></div></td><td><div class="cell-div"><code>false</code></div></td><td><div class="cell-div">按钮是否显示圆角</div></td><td><div class="cell-div"></div></td></div></tr><tr><div class="tr-div"><td><div class="cell-div">size</div></td><td><div class="cell-div"><code>&#39;tiny&#39;</code> | <code>&#39;small&#39;</code> | <code>&#39;medium&#39;</code> | <code>&#39;large&#39;</code> | <code>&#39;medium&#39;</code></div></td><td><div class="cell-div">按钮的尺寸</div></td><td><div class="cell-div"></div></td><td><div class="cell-div"></div></td></div></tr></tbody></table>',3),$={__name:"drawer.page",setup(_){return(l,v)=>{const o=i("component-demos");return D(),f("div",y,[k,F,g,e(o,{span:2},{default:d(()=>[e(E),e(w)]),_:1}),O])}}};export{$ as default};
