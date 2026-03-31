import{r,R as e}from"./index-DRjF_FHU.js";import{u as se,P as I,c as _,a as U}from"./index-BtmGPRf8.js";import{u as P}from"./index-Bms3GI6n.js";import{R as le,I as ie,c as K}from"./index-CwwKksZm.js";import{u as ce}from"./index-B4iTqdRC.js";import{u as de}from"./index-BK8PFAvS.js";import{u as me}from"./index-Iz9Zo_Nw.js";import{P as ue}from"./index-DQDayTBB.js";import{j as d}from"./jsx-runtime-DiklIkkE.js";import{c as z}from"./utils-BQHNewu7.js";import{c as pe}from"./createLucideIcon-CfeEeys9.js";import"./index-BKlBQwGM.js";import"./index-BbsOjWWI.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],xe=pe("circle",fe);var F="Radio",[ve,H]=U(F),[Re,be]=ve(F),W=r.forwardRef((o,n)=>{const{__scopeRadio:t,name:c,checked:a=!1,required:s,disabled:i,value:x="on",onCheck:u,form:v,...R}=o,[f,b]=r.useState(null),l=P(n,h=>b(h)),p=r.useRef(!1),E=f?v||!!f.closest("form"):!0;return d.jsxs(Re,{scope:t,checked:a,disabled:i,children:[d.jsx(I.button,{type:"button",role:"radio","aria-checked":a,"data-state":J(a),"data-disabled":i?"":void 0,disabled:i,value:x,...R,ref:l,onClick:_(o.onClick,h=>{a||u==null||u(),E&&(p.current=h.isPropagationStopped(),p.current||h.stopPropagation())})}),E&&d.jsx(Y,{control:f,bubbles:!p.current,name:c,value:x,checked:a,required:s,disabled:i,form:v,style:{transform:"translateX(-100%)"}})]})});W.displayName=F;var $="RadioIndicator",X=r.forwardRef((o,n)=>{const{__scopeRadio:t,forceMount:c,...a}=o,s=be($,t);return d.jsx(ue,{present:c||s.checked,children:d.jsx(I.span,{"data-state":J(s.checked),"data-disabled":s.disabled?"":void 0,...a,ref:n})})});X.displayName=$;var Ne="RadioBubbleInput",Y=r.forwardRef(({__scopeRadio:o,control:n,checked:t,bubbles:c=!0,...a},s)=>{const i=r.useRef(null),x=P(i,s),u=me(t),v=de(n);return r.useEffect(()=>{const R=i.current;if(!R)return;const f=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(f,"checked").set;if(u!==t&&l){const p=new Event("click",{bubbles:c});l.call(R,t),R.dispatchEvent(p)}},[u,t,c]),d.jsx(I.input,{type:"radio","aria-hidden":!0,defaultChecked:t,...a,tabIndex:-1,ref:x,style:{...a.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});Y.displayName=Ne;function J(o){return o?"checked":"unchecked"}var Ee=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],C="RadioGroup",[he]=U(C,[K,H]),Q=K(),Z=H(),[ye,ge]=he(C),ee=r.forwardRef((o,n)=>{const{__scopeRadioGroup:t,name:c,defaultValue:a,value:s,required:i=!1,disabled:x=!1,orientation:u,dir:v,loop:R=!0,onValueChange:f,...b}=o,l=Q(t),p=ce(v),[E,h]=se({prop:s,defaultProp:a??null,onChange:f,caller:C});return d.jsx(ye,{scope:t,name:c,required:i,disabled:x,value:E,onValueChange:h,children:d.jsx(le,{asChild:!0,...l,orientation:u,dir:p,loop:R,children:d.jsx(I.div,{role:"radiogroup","aria-required":i,"aria-orientation":u,"data-disabled":x?"":void 0,dir:p,...b,ref:n})})})});ee.displayName=C;var te="RadioGroupItem",ae=r.forwardRef((o,n)=>{const{__scopeRadioGroup:t,disabled:c,...a}=o,s=ge(te,t),i=s.disabled||c,x=Q(t),u=Z(t),v=r.useRef(null),R=P(n,v),f=s.value===a.value,b=r.useRef(!1);return r.useEffect(()=>{const l=E=>{Ee.includes(E.key)&&(b.current=!0)},p=()=>b.current=!1;return document.addEventListener("keydown",l),document.addEventListener("keyup",p),()=>{document.removeEventListener("keydown",l),document.removeEventListener("keyup",p)}},[]),d.jsx(ie,{asChild:!0,...x,focusable:!i,active:f,children:d.jsx(W,{disabled:i,required:s.required,checked:f,...u,...a,name:s.name,ref:R,onCheck:()=>s.onValueChange(a.value),onKeyDown:_(l=>{l.key==="Enter"&&l.preventDefault()}),onFocus:_(a.onFocus,()=>{var l;b.current&&((l=v.current)==null||l.click())})})})});ae.displayName=te;var we="RadioGroupIndicator",re=r.forwardRef((o,n)=>{const{__scopeRadioGroup:t,...c}=o,a=Z(t);return d.jsx(X,{...a,...c,ref:n})});re.displayName=we;var oe=ee,ne=ae,Ge=re;const N=r.forwardRef(({className:o,...n},t)=>r.createElement(oe,{className:z("grid gap-2",o),...n,ref:t}));N.displayName=oe.displayName;const m=r.forwardRef(({className:o,...n},t)=>r.createElement(ne,{ref:t,className:z("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",o),...n},r.createElement(Ge,{className:"flex items-center justify-center"},r.createElement(xe,{className:"h-2.5 w-2.5 fill-current text-current"}))));m.displayName=ne.displayName;N.__docgenInfo={description:"",methods:[]};m.__docgenInfo={description:"",methods:[]};const Me={title:"UI/RadioGroup",component:N,parameters:{layout:"centered"},tags:["autodocs"]},y={render:()=>e.createElement(N,{defaultValue:"option-one"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-one",id:"option-one"}),e.createElement("label",{htmlFor:"option-one",className:"text-sm font-medium"},"Option One")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-two",id:"option-two"}),e.createElement("label",{htmlFor:"option-two",className:"text-sm font-medium"},"Option Two")))},g={render:()=>e.createElement(N,{defaultValue:"comfortable"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"default",id:"r1"}),e.createElement("label",{htmlFor:"r1",className:"text-sm font-medium"},"Default",e.createElement("p",{className:"text-xs text-muted-foreground"},"The default spacing option"))),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"comfortable",id:"r2"}),e.createElement("label",{htmlFor:"r2",className:"text-sm font-medium"},"Comfortable",e.createElement("p",{className:"text-xs text-muted-foreground"},"More spacing between elements"))),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"compact",id:"r3"}),e.createElement("label",{htmlFor:"r3",className:"text-sm font-medium"},"Compact",e.createElement("p",{className:"text-xs text-muted-foreground"},"Less spacing, more content"))))},w={render:()=>e.createElement(N,{defaultValue:"option-one",disabled:!0},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-one",id:"d1"}),e.createElement("label",{htmlFor:"d1",className:"text-sm font-medium opacity-50"},"Option One (Disabled)")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-two",id:"d2"}),e.createElement("label",{htmlFor:"d2",className:"text-sm font-medium opacity-50"},"Option Two (Disabled)")))},G={render:()=>e.createElement(N,{defaultValue:"card",className:"flex gap-4"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"card",id:"h1"}),e.createElement("label",{htmlFor:"h1",className:"text-sm font-medium"},"Card")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"paypal",id:"h2"}),e.createElement("label",{htmlFor:"h2",className:"text-sm font-medium"},"PayPal")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"apple",id:"h3"}),e.createElement("label",{htmlFor:"h3",className:"text-sm font-medium"},"Apple Pay")))};var D,O,S;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-one">\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="option-one" id="option-one" />\r
        <label htmlFor="option-one" className="text-sm font-medium">\r
          Option One\r
        </label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="option-two" id="option-two" />\r
        <label htmlFor="option-two" className="text-sm font-medium">\r
          Option Two\r
        </label>\r
      </div>\r
    </RadioGroup>
}`,...(S=(O=y.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var k,A,j;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="comfortable">\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="default" id="r1" />\r
        <label htmlFor="r1" className="text-sm font-medium">\r
          Default\r
          <p className="text-xs text-muted-foreground">\r
            The default spacing option\r
          </p>\r
        </label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="comfortable" id="r2" />\r
        <label htmlFor="r2" className="text-sm font-medium">\r
          Comfortable\r
          <p className="text-xs text-muted-foreground">\r
            More spacing between elements\r
          </p>\r
        </label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="compact" id="r3" />\r
        <label htmlFor="r3" className="text-sm font-medium">\r
          Compact\r
          <p className="text-xs text-muted-foreground">\r
            Less spacing, more content\r
          </p>\r
        </label>\r
      </div>\r
    </RadioGroup>
}`,...(j=(A=g.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var V,L,M;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-one" disabled>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="option-one" id="d1" />\r
        <label htmlFor="d1" className="text-sm font-medium opacity-50">\r
          Option One (Disabled)\r
        </label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="option-two" id="d2" />\r
        <label htmlFor="d2" className="text-sm font-medium opacity-50">\r
          Option Two (Disabled)\r
        </label>\r
      </div>\r
    </RadioGroup>
}`,...(M=(L=w.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var T,q,B;G.parameters={...G.parameters,docs:{...(T=G.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="card" className="flex gap-4">\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="card" id="h1" />\r
        <label htmlFor="h1" className="text-sm font-medium">\r
          Card\r
        </label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="paypal" id="h2" />\r
        <label htmlFor="h2" className="text-sm font-medium">\r
          PayPal\r
        </label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="apple" id="h3" />\r
        <label htmlFor="h3" className="text-sm font-medium">\r
          Apple Pay\r
        </label>\r
      </div>\r
    </RadioGroup>
}`,...(B=(q=G.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const Te=["Default","WithDescription","Disabled","HorizontalLayout"];export{y as Default,w as Disabled,G as HorizontalLayout,g as WithDescription,Te as __namedExportsOrder,Me as default};
