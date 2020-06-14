(this["webpackJsonpturing-machine"]=this["webpackJsonpturing-machine"]||[]).push([[0],{18:function(e,t,a){e.exports={memoryTape:"styles_memoryTape__Xhwgb",tapeElement:"styles_tapeElement__27PSm",tapeElementStarting:"styles_tapeElementStarting__2qT8D",tapeElementCurrent:"styles_tapeElementCurrent__2uCJy"}},51:function(e,t,a){e.exports={dataloadWrapper:"styles_dataloadWrapper__1ggwd",uploadLabel:"styles_uploadLabel__1K10l"}},63:function(e,t,a){e.exports={hero:"styles_hero__2H9nv"}},77:function(e,t,a){e.exports=a(89)},82:function(e,t,a){},83:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),m=(a(82),a(11)),o=a(15),u=(a(83),a(124)),s=a(128),i=a(127),b=a(120),E=a(125),p=a(126),d=a(90);function v(e){var t=e.instructionsTable,a=e.alphabet;Object(o.a)(e,["instructionsTable","alphabet"]);return r.a.createElement("div",null,function(){var e=t.length,n=Array.from(Object.keys(Array(e).fill(0)));return r.a.createElement(b.a,{component:d.a},r.a.createElement(u.a,null,r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(i.a,null,"Alphabet"),n.map((function(e,t){return r.a.createElement(i.a,{key:t},"q",e)})))),r.a.createElement(s.a,null,a.map((function(e,a){return r.a.createElement(p.a,{key:a},r.a.createElement(i.a,null,e),t.map((function(t,a){var n=t.symbolActions.find((function(t){return t.current===e}));return n?r.a.createElement(i.a,{key:a},r.a.createElement("div",{className:""},"Current element: ",n.current),r.a.createElement("div",{className:""},"New element: ",n.new),r.a.createElement("div",{className:""},"Next state: ",n.next),r.a.createElement("div",{className:""},"Head movement: ",n.move)):r.a.createElement(i.a,{key:a},"-")})))})))))}())}var f=a(52),y=a(35),g=a(132),x=a(18),h=a.n(x),w=a(50),O=a.n(w),S=a(129),j=a(130),N=a(91),T=a(136),A=a(139);function C(e){var t=e.memoryTape,a=e.instructionsTable,l=e.setStateRegister,c=(Object(o.a)(e,["memoryTape","instructionsTable","setStateRegister"]),Object(n.useState)(0)),u=Object(m.a)(c,2),s=u[0],i=u[1],b=Object(n.useState)({state:!1,text:""}),E=Object(m.a)(b,2),p=E[0],d=E[1],v=Object(n.useState)([]),x=Object(m.a)(v,2),w=x[0],C=x[1],R=Object(n.useState)(0),k=Object(m.a)(R,2),X=k[0],_=k[1],L=Object(n.useState)(!1),F=Object(m.a)(L,2),I=F[0],P=F[1],M=Object(n.useState)(0),q=Object(m.a)(M,2),z=q[0],B=q[1];function W(){d({state:!1,text:""}),C(Object(y.a)(t)),i(0),B(0),l([]),P(!1)}return Object(n.useEffect)((function(){W(),C(Object(y.a)(t))}),[t]),r.a.createElement("div",null,r.a.createElement(S.a,{style:{marginBottom:20}},r.a.createElement(j.a,{style:{display:"flex"}},r.a.createElement("div",{style:{marginRight:8}},r.a.createElement(N.a,null,"Starting index"),r.a.createElement(T.a,{value:X,onChange:function(e){_(Number(e.target.value)),B(Number(e.target.value))}},Object.keys(Array(t.length).fill(0)).map((function(e,t){return r.a.createElement(A.a,{key:t,value:e},e)})))),r.a.createElement(N.a,{style:{marginRight:8}},"Current step ",r.a.createElement("br",null)," ",z),r.a.createElement(N.a,null,"Current state ",r.a.createElement("br",null),"STOP"===s?"STOP":"q".concat(a[s].stateNumber)))),r.a.createElement(S.a,{style:{marginBottom:20}},r.a.createElement(j.a,null,r.a.createElement("div",{className:h.a.memoryTape},t.map((function(e,t){return r.a.createElement("span",{className:O()(h.a.tapeElement,t===X&&h.a.tapeElementStarting,t===z&&h.a.tapeElementCurrent),key:t},e)}))),r.a.createElement("div",{className:h.a.memoryTape},w.map((function(e,t){return r.a.createElement("span",{className:O()(h.a.tapeElement,t===X&&h.a.tapeElementStarting,t===z&&h.a.tapeElementCurrent),key:t},e)}))))),r.a.createElement(S.a,null,r.a.createElement(j.a,null,r.a.createElement(g.a,{style:{marginRight:"8px"},disabled:"STOP"===s,variant:"contained",onClick:function(){!function(){var e=w[z],t=a[s].symbolActions.find((function(t){return t.current===e}));if("STOP"===(null===t||void 0===t?void 0:t.move))return P(!0),void d({state:!0,text:"Machine finished"});t&&(w[z]=t.new,i(t.next),"R"===t.move&&B((function(e){return e+1})),"L"===t.move&&B((function(e){return e-1})),C(w),l((function(e){return[].concat(Object(y.a)(e),[Object(f.a)({},t)])})))}()}},"Next Step"),r.a.createElement(g.a,{style:{marginRight:"8px"},variant:"contained",color:"primary",onClick:function(){W();for(var e=X,t=0,n=function(){var n=w[e],r=a[t].symbolActions.find((function(e){return e.current===n}));if("STOP"===(null===r||void 0===r?void 0:r.move))return P(!0),void d({state:!0,text:"Machine finished"});r?(w[e]=r.new,t=r.next,"R"===r.move&&(e+=1),"L"===r.move&&(e-=1),C(w),l((function(e){return[].concat(Object(y.a)(e),[Object(f.a)({},r)])}))):(d({state:!0,text:"Instruction error"}),P(!0))},r=0;r<=1e3&&e>=0&&e<w.length&&!I;)r<1e3?n():d({state:!0,text:"Steps limit achived"}),r+=1;d({state:!0,text:"Machine finished"})}},"Run"),r.a.createElement(g.a,{style:{marginRight:"8px"},variant:"contained",color:"secondary",onClick:W},"Reset"))),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(N.a,{variant:"h3",component:"h2",className:h.a.message},p.text)))}a(87);function R(e){var t=e.stateRegister;Object(o.a)(e,["stateRegister"]);return r.a.createElement(b.a,{component:d.a},r.a.createElement(u.a,null,r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(i.a,null,"Index"),r.a.createElement(i.a,null,"Current element"),r.a.createElement(i.a,null,"New element"),r.a.createElement(i.a,null,"Tape move"),r.a.createElement(i.a,null,"Next state"))),r.a.createElement(s.a,null,t.map((function(e,t){return r.a.createElement(p.a,{key:t},r.a.createElement(i.a,null,t+1),r.a.createElement(i.a,null,e.current),r.a.createElement(i.a,null,e.new),r.a.createElement(i.a,null,e.move),r.a.createElement(i.a,null,e.next))})))))}var k=a(4),X=a(51),_=a.n(X),L=a(140),F=Object(k.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:450,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(L.a);function I(e){var t=e.handleDataUpload,a=e.filename,n=e.removeFile;Object(o.a)(e,["handleDataUpload","filename","removeFile"]);return r.a.createElement("div",{className:_.a.dataloadWrapper},r.a.createElement(S.a,null,r.a.createElement(j.a,null,r.a.createElement("label",{htmlFor:"file",className:_.a.uploadLabel},r.a.createElement("div",null,"Select file")),r.a.createElement("input",{id:"file",onChange:t,type:"file",accept:".json,.txt"}))),a&&r.a.createElement(S.a,null,r.a.createElement(j.a,null,r.a.createElement(N.a,null,"Filename: ",a),r.a.createElement(g.a,{onClick:n},"Remove"))),r.a.createElement(F,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{m:!0,color:"inherit"},"Supported json or text format"),r.a.createElement(N.a,null,"memoryTape: Array[String]"),r.a.createElement(N.a,null,"alphabet: Array[String]"),r.a.createElement(N.a,null,"instructionsTable: Array[qState]"),r.a.createElement("br",null),r.a.createElement(N.a,null,"qState: Object = ","{"),r.a.createElement(N.a,null,"stateNumber: Number"),r.a.createElement(N.a,null,"symbolActions: Array[symbolAction]"),r.a.createElement(N.a,null,"}"),r.a.createElement("br",null),r.a.createElement(N.a,null,"symbolAction: Object = ","{"),r.a.createElement(N.a,null,"current: String"),r.a.createElement(N.a,null,"new: String"),r.a.createElement(N.a,null,"next: Number"),r.a.createElement(N.a,null,"move: String / exact STOP String"),r.a.createElement(N.a,null,"}"))},r.a.createElement(g.a,null,"Help")))}var P=a(63),M=a.n(P);function q(){return r.a.createElement("div",{className:M.a.hero},r.a.createElement(N.a,{variant:"h2",component:"h1"},"Turing Machine Simulator"))}var z=a(64),B=a(133),W=a(134),D=a(141),J=a(135),H=a(137),U=["-","1","0","1","1","0","-"],K=["1","0","-"],G=[{stateNumber:0,symbolActions:[{current:"0",new:"1",next:1,move:"R"},{current:"-",new:"-",next:0,move:"R"},{current:"1",new:"1",next:0,move:"R"}]},{stateNumber:1,symbolActions:[{current:"1",new:"0",next:0,move:"R"},{current:"0",new:"1",next:0,move:"R"},{current:"-",new:"-",next:1,move:"STOP"}]}],Q=["0","-","C","X"],V=["0","0","0","C","0","0","0","0","-","-","-","-","-","-","-","-"],Y=[{stateNumber:0,symbolActions:[{current:"0",new:"X",next:1,move:"R"},{current:"C",new:"C",next:5,move:"R"}]},{stateNumber:1,symbolActions:[{current:"0",new:"0",next:1,move:"R"},{current:"C",new:"C",next:2,move:"R"}]},{stateNumber:2,symbolActions:[{current:"X",new:"X",next:2,move:"R"},{current:"0",new:"X",next:3,move:"L"}]},{stateNumber:3,symbolActions:[{current:"X",new:"X",next:3,move:"L"},{current:"C",new:"C",next:4,move:"L"}]},{stateNumber:4,symbolActions:[{current:"0",new:"0",next:4,move:"L"},{current:"X",new:"X",next:0,move:"R"}]},{stateNumber:5,symbolActions:[{current:"X",new:"X",next:5,move:"R"},{current:"0",new:"0",next:6,move:"L"}]},{stateNumber:6,symbolActions:[{current:"X",new:"-",next:6,move:"STOP"}]}],Z=["0","C","X","-"],$=["0","0","C","0","0","0","-","-","-","-","-","-","-","-"],ee=[{stateNumber:0,symbolActions:[{current:"0",new:"X",next:1,move:"R"},{current:"C",new:"-",next:5,move:"STOP"}]},{stateNumber:1,symbolActions:[{current:"0",new:"0",next:1,move:"R"},{current:"C",new:"C",next:2,move:"R"}]},{stateNumber:2,symbolActions:[{current:"0",new:"0",next:2,move:"R"},{current:"-",new:"0",next:3,move:"L"}]},{stateNumber:3,symbolActions:[{current:"0",new:"0",next:3,move:"L"},{current:"C",new:"C",next:4,move:"L"}]},{stateNumber:4,symbolActions:[{current:"0",new:"0",next:4,move:"L"},{current:"X",new:"X",next:0,move:"R"}]},{stateNumber:5,symbolActions:[{current:"-",new:"-",next:5,move:"-"}]}],te=["0","C","X","-"],ae=["0","0","0","0","C","0","0","0","-","-","-","-","-"],ne=[{stateNumber:0,symbolActions:[{current:"0",new:"X",next:1,move:"R"},{current:"C",new:"-",next:5,move:"STOP"}]},{stateNumber:1,symbolActions:[{current:"0",new:"0",next:1,move:"R"},{current:"C",new:"C",next:2,move:"R"}]},{stateNumber:2,symbolActions:[{current:"0",new:"0",next:2,move:"R"},{current:"-",new:"0",next:3,move:"L"}]},{stateNumber:3,symbolActions:[{current:"0",new:"0",next:3,move:"L"},{current:"C",new:"C",next:4,move:"L"}]},{stateNumber:4,symbolActions:[{current:"0",new:"0",next:4,move:"L"},{current:"X",new:"X",next:0,move:"R"}]},{stateNumber:5,symbolActions:[{current:"-",new:"-",next:5,move:"-"}]}],re=Object(k.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:450,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(L.a);function le(e){var t=e.setInstructionsTable,a=e.setMemoryTape,l=e.setAlphabet,c=(Object(o.a)(e,["setInstructionsTable","setMemoryTape","setAlphabet"]),Object(n.useState)("numberSubstractor")),u=Object(m.a)(c,2),s=u[0],i=u[1];return Object(n.useEffect)((function(){t(Y),a(V),l(Q)}),[l,t,a]),r.a.createElement("div",null,r.a.createElement(T.a,{value:s,onChange:function(e){switch(i(e.target.value),e.target.value){case"simpleTest":t(G),a(U),l(K);break;case"numberSubstractor":t(Y),a(V),l(Q);break;case"numberAdder":t(ee),a($),l(Z);break;case"numberAdder2":t(ne),a(ae),l(te)}}},r.a.createElement(A.a,{value:"simpleTest"},"Simple test"),r.a.createElement(A.a,{value:"numberSubstractor"},"Number substractor"),r.a.createElement(A.a,{value:"numberAdder"},"Number adder"),r.a.createElement(A.a,{value:"numberAdder2"},"Number adder 2")),r.a.createElement(re,{title:function(){switch(s){case"simpleTest":return r.a.createElement(r.a.Fragment,null,"Simple test");case"numberSubstractor":return r.a.createElement(r.a.Fragment,null,"A number is represented in binary format in different finite automatas like 5 is represented as (101) but in case of subtraction Turing Machine unary format is followed . In unary format a number is represented by either all ones or all zeros. For example, 5 will be represented by a sequence of five ones 5 = 1 1 1 1 1 or 0 0 0 0 0.",r.a.createElement("br",null),"Lets use zeros for representation. For subtraction of numbers using a Turing Machine, both these numbers are given as input to the Turing machine separated by a \u201cc\u201d.");case"numberAdder":case"numberAdder2":return r.a.createElement(r.a.Fragment,null,"A number is represented in binary format in different finite automatas like 5 is represented as (101) but in case of addition using a turing machine unary format is followed. In unary format a number is represented by either all ones or all zeroes.",r.a.createElement("br",null),"For example, 5 will be represented by a sequence of five zeroes or five ones. 5 = 1 1 1 1 1 or 0 0 0 0 0. Lets use zeroes for representation. For adding 2 numbers using a Turing machine, both these numbers are given as input to the Turing machine separated by a \u201cc\u201d.")}}()},r.a.createElement(g.a,null,"Info")))}var ce=Object(z.a)({palette:{type:"dark"}});var me=function(){var e=Object(n.useState)("example"),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(m.a)(c,2),u=o[0],s=o[1],i=Object(n.useState)(null),b=Object(m.a)(i,2),E=b[0],p=b[1],d=Object(n.useState)(null),f=Object(m.a)(d,2),y=f[0],g=f[1],x=Object(n.useState)([]),h=Object(m.a)(x,2),w=h[0],O=h[1],S=Object(n.useState)(""),j=Object(m.a)(S,2),N=j[0],T=j[1];return r.a.createElement(B.a,{theme:ce},r.a.createElement(W.a,{container:!0,spacing:2,direction:"column",alignItems:"center"},r.a.createElement(q,null),r.a.createElement(D.a,{row:!0,value:a,onChange:function(e){l(e.target.value),s([]),p(null),g(null),T("")}},r.a.createElement(J.a,{value:"example",control:r.a.createElement(H.a,null),label:"Example machines"}),r.a.createElement(J.a,{value:"file",control:r.a.createElement(H.a,null),label:"Import from file (.json/.txt)"})),"example"===a&&r.a.createElement(le,{setInstructionsTable:s,setMemoryTape:p,setAlphabet:g}),"file"===a&&r.a.createElement(I,{handleDataUpload:function(e){e.persist();var t=new FileReader;t.readAsText(e.target.files[0]),t.onload=function(t){try{var a=JSON.parse(t.target.result),n=a.instructionsTable,r=a.memoryTape,l=a.alphabet;n&&r&&l?(T(e.target.files[0].name),s(n),p(r),g(l)):(document.getElementById("file").value=null,alert("wrong file format"))}catch(e){console.log(e),document.getElementById("file").value=null,alert("wrong file format")}}},filename:N,removeFile:function(){s([]),p(null),g(null),T("")}}),r.a.createElement(W.a,{style:{padding:20},item:!0,container:!0,spacing:2,direction:"column"},u&&y&&r.a.createElement(v,{instructionsTable:u,alphabet:y})),E&&r.a.createElement(W.a,{style:{padding:20},spacing:2,item:!0,container:!0,direction:"column"},r.a.createElement(C,{memoryTape:E,instructionsTable:u,setStateRegister:O})),w.length?r.a.createElement(W.a,{style:{padding:20},spacing:2,item:!0,container:!0,direction:"column"},r.a.createElement(R,{stateRegister:w})):""))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.b670a47e.chunk.js.map