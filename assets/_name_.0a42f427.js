import{C as h,r as d,n as _,d as b,m as x,b as y,D as C,E as f,o as u,c as i,h as e,g as v,t as r,e as s,F as w,y as g,q as S,A as V,v as B}from"./app.c68c75ab.js";const E=h("user",()=>{const t=d(""),a=d(new Set),m=_(()=>Array.from(a.value)),o=_(()=>m.value.filter(c=>c!==t.value));function n(c){t.value&&a.value.add(t.value),t.value=c}return{setNewName:n,otherNames:o,savedName:t}}),A={class:"text-4xl"},D={class:"text-sm opacity-50"},F={key:0,class:"text-sm mt-4"},$={class:"opacity-75"},I=b({props:{name:null},setup(t){const a=t,m=x(),o=E(),{t:n}=y();return C(()=>{o.setNewName(a.name)}),(c,p)=>{const N=f("carbon-pedestrian"),k=f("router-link");return u(),i("div",null,[e("p",A,[v(N,{class:"inline-block"})]),e("p",null,r(s(n)("intro.hi",{name:a.name})),1),e("p",D,[e("em",null,r(s(n)("intro.dynamic-route")),1)]),s(o).otherNames.length?(u(),i("p",F,[e("span",$,r(s(n)("intro.aka"))+":",1),e("ul",null,[(u(!0),i(w,null,g(s(o).otherNames,l=>(u(),i("li",{key:l},[v(k,{to:`/hi/${l}`,replace:""},{default:S(()=>[V(r(l),1)]),_:2},1032,["to"])]))),128))])])):B("",!0),e("div",null,[e("button",{class:"btn m-3 text-sm mt-6",onClick:p[0]||(p[0]=l=>s(m).back())},r(s(n)("button.back")),1)])])}}});export{I as default};
