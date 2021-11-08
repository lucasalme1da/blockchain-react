(this["webpackJsonpblockchain-react"]=this["webpackJsonpblockchain-react"]||[]).push([[0],{41:function(n,e){},57:function(n,e,t){"use strict";t.r(e);var c,i,r,o,a,s,l,d,b,u,h,j,p,x,g,f,O,m,v,k,w,y,T,C,S,D,B,E=t(0),H=t.n(E),N=t(20),I=t.n(N),R=t(32),_=t(2),A=t(15),L=t(8),M=t.n(L),z=t(9),F=t(14),G=t(10),W=t(5),J=t(26),P=t.n(J),q=t(12),K=t.n(q),Q=t(27),U=t.n(Q),V=t(7),X=t(58),Y=t(3),Z=t(4),$=Z.b.div(c||(c=Object(Y.a)(["\n  width: 900px;\n  margin: 0 12px 6px 12px;\n\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n\n  border: 1px solid gray;\n  padding: 24px;\n  border-radius: 8px;\n\n  position: relative;\n"]))),nn=(Z.b.h3(i||(i=Object(Y.a)([""]))),Z.b.span(r||(r=Object(Y.a)([""]))),Z.b.span(o||(o=Object(Y.a)(["\n  font-size: 1.3em;\n  margin: 4px;\n"])))),en=Z.b.span(a||(a=Object(Y.a)(["\n  position: absolute;\n\n  font-size: 2em;\n\n  top: 32px;\n  right: 32px;\n"]))),tn=Z.b.b(s||(s=Object(Y.a)(["\n  color: blueviolet;\n"]))),cn=Z.b.input(l||(l=Object(Y.a)(["\n  width: 500px;\n  height: 30px;\n  padding: 6px;\n\n  color: #c0c0c0;\n  border: 1px solid #c0c0c0;\n  background-color: transparent;\n\n  outline: none;\n  border-radius: 4px;\n  font-size: 1em;\n\n  &:disabled {\n    opacity: 0.9;\n    border: none;\n  }\n"]))),rn=Z.b.button(d||(d=Object(Y.a)(["\n  width: fit-content;\n  position: absolute;\n  height: 30px;\n  padding: 24px;\n  margin: 24px;\n\n  bottom: 12px;\n  right: 12px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: #c0c0c0;\n  border: 1px solid #c0c0c0;\n  background-color: transparent;\n\n  outline: none;\n  cursor: pointer;\n  border-radius: 4px;\n  font-size: 1.5em;\n\n  &:hover {\n    color: black;\n    border: 1px solid #c0c0c0;\n    background-color: #c0c0c0;\n  }\n\n  &:active {\n    color: black;\n    border: 1px solid white;\n    background-color: white;\n  }\n"]))),on=t(1),an=function(n){var e=n.config,t=n.changeData,c=n.index,i=Object(E.useState)(e.data),r=Object(W.a)(i,2),o=r[0],a=r[1],s=Object(E.useState)(!1),l=Object(W.a)(s,2),d=l[0],b=l[1],u=function(){b(!d)};return Object(E.useEffect)((function(){var n=document.getElementById("blocks-container");n&&(n.scrollTop=(null===n||void 0===n?void 0:n.scrollHeight)||0)}),[e]),Object(on.jsxs)($,{children:[0!==c&&(d?Object(on.jsx)(rn,{onClick:function(){u(),t(e.index,o)},children:"Save"}):Object(on.jsx)(rn,{onClick:u,children:"Mess up with the data"})),Object(on.jsxs)(en,{children:["#",c+1]}),Object(on.jsxs)(nn,{children:[Object(on.jsx)(tn,{children:"Index: "}),Object(on.jsx)(cn,{value:e.index,disabled:!0})]}),Object(on.jsxs)(nn,{children:[Object(on.jsx)(tn,{children:"Timestamp: "}),Object(on.jsx)(cn,{value:e.timestamp,disabled:!0})]}),Object(on.jsxs)(nn,{children:[Object(on.jsx)(tn,{children:"Data: "}),Object(on.jsx)(cn,{value:o,disabled:!d,onChange:function(n){return a(n.target.value)}})]}),Object(on.jsxs)(nn,{children:[Object(on.jsx)(tn,{children:"Previous Hash: "}),Object(on.jsx)(cn,{value:e.previousHash||"none",disabled:!0})]}),Object(on.jsxs)(nn,{children:[Object(on.jsx)(tn,{children:"Hash: "}),Object(on.jsx)(cn,{value:e.hash,disabled:!0})]}),Object(on.jsxs)(nn,{children:[Object(on.jsx)(tn,{children:"Nonce: "}),Object(on.jsx)(cn,{value:e.nonce,disabled:!0})]})]})},sn=Z.b.div(b||(b=Object(Y.a)(["\n  width: 332px;\n  height: 100%;\n  margin: 0 12px;\n\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  overflow-y: auto;\n\n  border: 1px solid gray;\n  border-radius: 8px;\n\n  position: relative;\n\n  p:nth-child(2n) {\n    background-color: #29292990;\n  }\n"]))),ln=Z.b.h2(u||(u=Object(Y.a)(["\n  width: 100%;\n  text-align: center;\n  margin: 12px 0 12px 0;\n"]))),dn=(Z.b.span(h||(h=Object(Y.a)([""]))),Z.b.p(j||(j=Object(Y.a)(["\n  width: calc(100% - 48px);\n  font-size: 1.3em;\n  padding: 12px 24px;\n  margin: 8px 0;\n  white-space: pre-line;\n"])))),bn=Z.b.span(p||(p=Object(Y.a)(["\n  color: ",";\n"])),(function(n){switch(n.variant){default:return"white";case"failure":return"#c1121f";case"success":return"#70e000";case"idle":return"#ffd60a"}})),un=Z.b.b(x||(x=Object(Y.a)(["\n  color: blueviolet;\n"]))),hn=(Z.b.input(g||(g=Object(Y.a)(["\n  width: 500px;\n  height: 30px;\n  padding: 6px;\n\n  color: #c0c0c0;\n  border: 1px solid #c0c0c0;\n  background-color: transparent;\n\n  outline: none;\n  border-radius: 4px;\n  font-size: 1em;\n\n  &:disabled {\n    opacity: 0.9;\n    border: none;\n  }\n"]))),Z.b.button(f||(f=Object(Y.a)(["\n  width: fit-content;\n  position: absolute;\n  height: 30px;\n  padding: 24px;\n  margin: 24px;\n\n  top: 12px;\n  right: 12px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: #c0c0c0;\n  border: 1px solid #c0c0c0;\n  background-color: transparent;\n\n  outline: none;\n  cursor: pointer;\n  border-radius: 4px;\n  font-size: 1.5em;\n\n  &:hover {\n    color: black;\n    border: 1px solid #c0c0c0;\n    background-color: #c0c0c0;\n  }\n\n  &:active {\n    color: black;\n    border: 1px solid white;\n    background-color: white;\n  }\n"]))),function(n){var e=n.logs;return Object(E.useEffect)((function(){var n=document.getElementById("log-container");n&&(n.scrollTop=(null===n||void 0===n?void 0:n.scrollHeight)||0)}),[e]),Object(on.jsxs)(sn,{id:"log-container",children:[Object(on.jsx)(ln,{children:"Log"}),e.map((function(n){return Object(on.jsxs)(dn,{children:[Object(on.jsx)(un,{children:n.timestamp})," ",Object(on.jsx)("br",{}),Object(on.jsxs)(bn,{variant:n.variant,children:[" ",n.content," "]})]},Object(X.a)())}))]})}),jn=t(31),pn=Z.b.div(O||(O=Object(Y.a)(["\n  height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: center;\n  overflow: auto;\n"]))),xn=Z.b.div(m||(m=Object(Y.a)(["\n  width: 1000px;\n  height: calc(100vh - 150px);\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  overflow-y: auto;\n"]))),gn=Z.b.div(v||(v=Object(Y.a)(["\n  width: 336px;\n  height: calc(100vh - 150px);\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),fn=Z.b.div(k||(k=Object(Y.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n"]))),On=Z.b.button(w||(w=Object(Y.a)(["\n  width: fit-content;\n  height: 30px;\n  padding: 24px;\n  margin: 24px 24px 0 24px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: #c0c0c0;\n  border: 1px solid #c0c0c0;\n  background-color: transparent;\n\n  outline: none;\n  cursor: pointer;\n  border-radius: 4px;\n  font-size: 1.3em;\n\n  &:hover {\n    color: black;\n    border: 1px solid #c0c0c0;\n    background-color: #c0c0c0;\n  }\n\n  &:active {\n    color: black;\n    border: 1px solid white;\n    background-color: white;\n  }\n"]))),mn=Z.b.h1(y||(y=Object(Y.a)(["\n  width: 100%;\n  text-align: center;\n  margin: 24px 0 0 0;\n"]))),vn=Z.b.h4(T||(T=Object(Y.a)(["\n  width: 100%;\n  text-align: center;\n  margin: 24px 0 0 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin: -18px 0 0 0;\n\n  a {\n    color: white;\n    text-decoration: none;\n  }\n"]))),kn=(Z.b.span(C||(C=Object(Y.a)([""]))),Z.b.span(S||(S=Object(Y.a)(["\n  font-size: 1.5em;\n"])))),wn=Object(Z.b)(jn.a)(D||(D=Object(Y.a)(["\n  width: 24px;\n  height: 24px;\n  color: white;\n  margin: 0 12px;\n"]))),yn={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#393739",border:"1px solid gray",width:"400px",display:"flex",flexDirection:"column",alignItems:"center"},overlay:{backgroundColor:"#11111190"}},Tn={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#393739",border:"1px solid gray",width:"1000px",display:"flex",flexDirection:"column",alignItems:"center"},overlay:{backgroundColor:"#11111190"}},Cn=function(){var n,e=Object(E.useState)([]),t=Object(W.a)(e,2),c=t[0],i=t[1],r=Object(E.useState)({miningGenesisBlock:!1,mineNewBlock:!1,mineNewBlocks:!1,generatingChart:!1}),o=Object(W.a)(r,2),a=o[0],s=o[1],l=Object(E.useState)([{content:"Fresh start!",timestamp:V.DateTime.now().setLocale("pt-BR").toLocaleString(V.DateTime.DATETIME_SHORT_WITH_SECONDS),variant:"normal"}]),d=Object(W.a)(l,2),b=d[0],u=d[1],h=Object(E.useState)(1),j=Object(W.a)(h,2),p=j[0],x=j[1],g=Object(E.useState)(!1),f=Object(W.a)(g,2),O=f[0],m=f[1],v=function(n,e){var t={content:n,timestamp:V.DateTime.now().setLocale("pt-BR").toLocaleString(V.DateTime.DATETIME_SHORT_WITH_SECONDS),variant:e};u((function(n){return[].concat(Object(G.a)(n),[t])}))},k=function(n){var e=n.index,t=n.timestamp,c=n.data,i=n.previousHash,r=n.nonce;return P()(e+i+t+JSON.stringify(c)+r).toString()},w=function(){return c[c.length-1]},y=function(){var n=Object(F.a)(M.a.mark((function n(e,t){var c,i;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=Object(z.a)({},e),v("\u26cf\ufe0f Starting block mining...","idle"),i=V.DateTime.now().setLocale("pt-BR"),n.abrupt("return",new Promise((function(n,e){try{for(;(null===(r=c.hash)||void 0===r?void 0:r.substring(0,t))!==Array.from({length:t},(function(){return"0"})).join("");){var r;c.nonce=Object(X.a)(),c.hash=k(c)}var o=V.DateTime.now().setLocale("pt-BR").diff(i,["seconds","milliseconds"]).toObject();c.miningDuration=o,v("\ud83d\udd53 Finishing block mining \n after ".concat(o.seconds," seconds and ").concat(o.milliseconds," milliseconds..."),"success"),n(c)}catch(a){e(a)}})));case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),T=function(n){return s((function(e){return Object(z.a)(Object(z.a)({},e),{},Object(A.a)({},n,!a[n]))}))},C=function(){var n=Object(F.a)(M.a.mark((function n(e){var t;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v("\ud83c\udd95 Adding new block...","normal"),e.previousHash=(null===(t=w())||void 0===t?void 0:t.hash)||"",e.hash=k(e),n.next=5,y(e,p);case 5:e=n.sent,v("\u2705 New block added. Number of blocks: ".concat(c.length+1),"success"),i((function(n){return[].concat(Object(G.a)(n),[e])}));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),S=function(n,e){var t=Object(G.a)(c),r=c.find((function(e){return e.index===n}));r&&(t[t.indexOf(r)].data=e,i(t))},D=function(){return c.map((function(n){var e,t;return 1e3*((null===(e=n.miningDuration)||void 0===e?void 0:e.seconds)||0)+((null===(t=n.miningDuration)||void 0===t?void 0:t.milliseconds)||0)}))};return Object(E.useEffect)((function(){K.a.setAppElement("body")}),[]),Object(on.jsxs)(pn,{children:[Object(on.jsx)(mn,{children:"blockchain visualizer"}),Object(on.jsxs)(vn,{children:[Object(on.jsx)(wn,{}),Object(on.jsx)("a",{href:"https://www.github.com/lucasalme1da",children:"lucasalme1da"})," "]}),Object(on.jsx)(gn,{children:Object(on.jsx)(hn,{logs:b})}),Object(on.jsxs)(xn,{id:"blocks-container",children:[c.length?c.map((function(n,e){return Object(on.jsx)(an,{config:n,changeData:S,index:e},n.index)})):Object(on.jsx)(kn,{style:{height:"100%",display:"flex",alignItems:"center"},children:"Add a genesis block to start the blockchain."}),Object(on.jsxs)(fn,{children:[0===c.length?Object(on.jsx)(On,{onClick:function(){T("miningGenesisBlock")},children:"+ Add genesis block"}):Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)(On,{onClick:function(){T("miningNewBlock"),setTimeout((function(){var n=V.DateTime.now().setLocale("pt-BR").toLocaleString(V.DateTime.DATETIME_SHORT_WITH_SECONDS),e={data:"transaction: ".concat(Math.floor(14e3*Math.random()+100)),index:Object(X.a)(),nonce:Object(X.a)(),timestamp:n};C(Object(z.a)(Object(z.a)({},e),{},{hash:k(e)})).then((function(){return s((function(){return{miningNewBlock:!1}}))}))}),10)},children:"+ Add new block"}),Object(on.jsx)(On,{onClick:function(){T("miningNewBlocks"),setTimeout(Object(F.a)(M.a.mark((function n(){var e,t,c;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Array.from({length:100},(function(){return null})),t=e.reduce(function(){var n=Object(F.a)(M.a.mark((function n(e){var t,c,i,r,o;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e;case 2:return t=n.sent,c=V.DateTime.now().setLocale("pt-BR").toLocaleString(V.DateTime.DATETIME_SHORT_WITH_SECONDS),i={data:"transaction: ".concat(Math.floor(14e3*Math.random()+100)),index:Object(X.a)(),nonce:Object(X.a)(),timestamp:c},0===t.length?i.previousHash=null===(r=w())||void 0===r?void 0:r.hash:i.previousHash=null===(o=t[t.length-1])||void 0===o?void 0:o.hash,i.hash=k(i),n.t0=[],n.t1=Object(G.a)(t),n.next=11,y(i,p);case 11:return n.t2=n.sent,n.t3=[n.t2],n.abrupt("return",n.t0.concat.call(n.t0,n.t1,n.t3));case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[]),n.next=4,t;case 4:c=n.sent,s((function(){return{miningNewBlocks:!1}})),i((function(n){return[].concat(Object(G.a)(n),Object(G.a)(c))}));case 7:case"end":return n.stop()}}),n)}))),10)},children:"+ Add 100 blocks (very slow!!)"})]}),Object(on.jsx)(On,{onClick:function(){v("Checking the integrity of the chain...","normal"),c.every((function(n,e,t){if(e>0){var c=t[e-1];return n.hash!==k(n)||n.previousHash!==c.hash?(v("Block #".concat(e+1," check failed."),"failure"),!1):(v("Block #".concat(e+1," checked."),"idle"),!0)}return v("Block #".concat(e+1," checked."),"idle"),!0}))?v("\ud83d\udfe2 This blockchain is valid!","success"):v("\ud83d\udd34 This blockchain is invalid!","failure")},children:"Check validity"}),Object(on.jsx)(On,{onClick:function(){i([]),u([])},children:"Reset everything"}),Object(on.jsx)(On,{onClick:function(){return T("generatingChart")},children:"Generate chart"})]})]}),Object(on.jsxs)(K.a,{isOpen:a.miningGenesisBlock,style:yn,children:[Object(on.jsxs)(kn,{children:[Object(on.jsx)(tn,{children:"Choose the difficulty: "}),Object(on.jsx)(cn,{value:p,type:"number",max:"5",min:"1",style:{width:"50px"},onChange:function(n){return x(Number(n.target.value))}})]}),Object(on.jsxs)(fn,{style:{justifyContent:"center"},children:[Object(on.jsx)(On,{onClick:function(){return T("miningGenesisBlock")},children:"Cancel"}),Object(on.jsx)(On,{color:"primary",onClick:function(){m(!0),setTimeout((function(){var n=V.DateTime.now().setLocale("pt-BR").toLocaleString(V.DateTime.DATETIME_SHORT_WITH_SECONDS),e={index:Object(X.a)(),timestamp:n,data:"genesis",previousHash:"0",nonce:Object(X.a)()};C(Object(z.a)(Object(z.a)({},e),{},{hash:k(e)})),m(!1),T("miningGenesisBlock")}),10)},disabled:O,children:O?"Mining block...":"Confirm"})]})]}),Object(on.jsx)(K.a,{isOpen:a.miningNewBlock,style:yn,children:Object(on.jsx)(kn,{children:Object(on.jsx)(tn,{children:"Mining block... "})})}),Object(on.jsx)(K.a,{isOpen:a.miningNewBlocks,style:yn,children:Object(on.jsx)(kn,{children:Object(on.jsx)(tn,{children:"Mining blocks... "})})}),Object(on.jsxs)(K.a,{isOpen:a.generatingChart,style:Tn,children:[Object(on.jsx)(kn,{style:{margin:"20px"},children:Object(on.jsxs)(tn,{children:["Duration (ms) of the minings (with difficulty = ",p,")"]})}),Object(on.jsx)(U.a,{series:[{name:"Duration",data:D()}],options:{theme:{mode:"dark"},chart:{type:"area",height:350,stacked:!0},colors:["#8a2be2"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},fill:{type:"gradient",gradient:{opacityFrom:.6,opacityTo:.8}},tooltip:{y:{formatter:function(n){return"".concat(n," ms")}}},xaxis:{type:"category"}},width:950,height:400,type:"area"}),Object(on.jsx)(kn,{children:Object(on.jsxs)(tn,{style:{color:"white"},children:["Average (ms) of the mining durations:"," ",(n=D(),n.reduce((function(n,e){return n+e}),0)/n.length).toFixed(2)," ms"]})}),Object(on.jsx)(fn,{style:{justifyContent:"center"},children:Object(on.jsx)(On,{onClick:function(){return T("generatingChart")},children:"Close"})})]})]})},Sn=function(){return Object(on.jsx)(R.a,{children:Object(on.jsx)(_.c,{children:Object(on.jsx)(_.a,{path:"/",element:Object(on.jsx)(Cn,{})})})})},Dn=Object(Z.a)(B||(B=Object(Y.a)(["\n\n    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;700&display=swap');\n\n    body > #root > div {\n      height: 100vh;\n    }\n\n    body {\n\n    background: #101010;\n    color: lightgray;\n    font-family: 'Red Hat Display', sans-serif;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    font-size: 14px;\n    width: 100vw;\n    height: 100vh;\n\n    top: 0px !important;\n\n    /* ===== Scrollbar CSS ===== */\n  /* Firefox */\n  * {\n    scrollbar-width: none;\n    scrollbar-color: #393739 #292929;\n  }\n\n  /* Chrome, Edge, and Safari */\n  *::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  *::-webkit-scrollbar-track {\n    background: #292929;\n  }\n\n  *::-webkit-scrollbar-thumb {\n    background-color: #393739;\n    border-radius: 10px;\n    border: 3px groove #878787;\n  }\n  }\n\n  svg.apexcharts-svg { background: transparent !important; }\n\n\n"]))),Bn=function(){return Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)(Sn,{}),Object(on.jsx)(Dn,{})]})};I.a.render(Object(on.jsx)(H.a.StrictMode,{children:Object(on.jsx)(Bn,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.36b598e6.chunk.js.map