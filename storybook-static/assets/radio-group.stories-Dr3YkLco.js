import{r as a,R as e}from"./index-DRjF_FHU.js";import{u as se,P as I,c as F,a as q}from"./index-BtmGPRf8.js";import{u as C}from"./index-Bms3GI6n.js";import{R as le,I as ie,c as K}from"./index-CwwKksZm.js";import{u as ce}from"./index-B4iTqdRC.js";import{u as de}from"./index-BK8PFAvS.js";import{u as me}from"./index-Iz9Zo_Nw.js";import{P as pe}from"./index-DQDayTBB.js";import{j as d}from"./jsx-runtime-DiklIkkE.js";import{c as z}from"./utils-BQHNewu7.js";import{X as ue}from"./x-BuCBQyXB.js";import{C as fe}from"./check-BRxH6xXv.js";import"./index-BKlBQwGM.js";import"./index-BbsOjWWI.js";import"./createLucideIcon-CfeEeys9.js";var D="Radio",[xe,H]=q(D),[ve,be]=xe(D),W=a.forwardRef((o,n)=>{const{__scopeRadio:t,name:c,checked:r=!1,required:s,disabled:i,value:x="on",onCheck:p,form:v,...b}=o,[f,R]=a.useState(null),l=C(n,E=>R(E)),u=a.useRef(!1),N=f?v||!!f.closest("form"):!0;return d.jsxs(ve,{scope:t,checked:r,disabled:i,children:[d.jsx(I.button,{type:"button",role:"radio","aria-checked":r,"data-state":J(r),"data-disabled":i?"":void 0,disabled:i,value:x,...b,ref:l,onClick:F(o.onClick,E=>{r||p==null||p(),N&&(u.current=E.isPropagationStopped(),u.current||E.stopPropagation())})}),N&&d.jsx(Y,{control:f,bubbles:!u.current,name:c,value:x,checked:r,required:s,disabled:i,form:v,style:{transform:"translateX(-100%)"}})]})});W.displayName=D;var X="RadioIndicator",$=a.forwardRef((o,n)=>{const{__scopeRadio:t,forceMount:c,...r}=o,s=be(X,t);return d.jsx(pe,{present:c||s.checked,children:d.jsx(I.span,{"data-state":J(s.checked),"data-disabled":s.disabled?"":void 0,...r,ref:n})})});$.displayName=X;var Re="RadioBubbleInput",Y=a.forwardRef(({__scopeRadio:o,control:n,checked:t,bubbles:c=!0,...r},s)=>{const i=a.useRef(null),x=C(i,s),p=me(t),v=de(n);return a.useEffect(()=>{const b=i.current;if(!b)return;const f=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(f,"checked").set;if(p!==t&&l){const u=new Event("click",{bubbles:c});l.call(b,t),b.dispatchEvent(u)}},[p,t,c]),d.jsx(I.input,{type:"radio","aria-hidden":!0,defaultChecked:t,...r,tabIndex:-1,ref:x,style:{...r.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});Y.displayName=Re;function J(o){return o?"checked":"unchecked"}var he=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],_="RadioGroup",[Ne]=q(_,[K,H]),Q=K(),Z=H(),[Ee,ge]=Ne(_),ee=a.forwardRef((o,n)=>{const{__scopeRadioGroup:t,name:c,defaultValue:r,value:s,required:i=!1,disabled:x=!1,orientation:p,dir:v,loop:b=!0,onValueChange:f,...R}=o,l=Q(t),u=ce(v),[N,E]=se({prop:s,defaultProp:r??null,onChange:f,caller:_});return d.jsx(Ee,{scope:t,name:c,required:i,disabled:x,value:N,onValueChange:E,children:d.jsx(le,{asChild:!0,...l,orientation:p,dir:u,loop:b,children:d.jsx(I.div,{role:"radiogroup","aria-required":i,"aria-orientation":p,"data-disabled":x?"":void 0,dir:u,...R,ref:n})})})});ee.displayName=_;var te="RadioGroupItem",ae=a.forwardRef((o,n)=>{const{__scopeRadioGroup:t,disabled:c,...r}=o,s=ge(te,t),i=s.disabled||c,x=Q(t),p=Z(t),v=a.useRef(null),b=C(n,v),f=s.value===r.value,R=a.useRef(!1);return a.useEffect(()=>{const l=N=>{he.includes(N.key)&&(R.current=!0)},u=()=>R.current=!1;return document.addEventListener("keydown",l),document.addEventListener("keyup",u),()=>{document.removeEventListener("keydown",l),document.removeEventListener("keyup",u)}},[]),d.jsx(ie,{asChild:!0,...x,focusable:!i,active:f,children:d.jsx(W,{disabled:i,required:s.required,checked:f,...p,...r,name:s.name,ref:b,onCheck:()=>s.onValueChange(r.value),onKeyDown:F(l=>{l.key==="Enter"&&l.preventDefault()}),onFocus:F(r.onFocus,()=>{var l;R.current&&((l=v.current)==null||l.click())})})})});ae.displayName=te;var ye="RadioGroupIndicator",re=a.forwardRef((o,n)=>{const{__scopeRadioGroup:t,...c}=o,r=Z(t);return d.jsx($,{...r,...c,ref:n})});re.displayName=ye;var oe=ee,ne=ae,we=re;const h=a.forwardRef(({className:o,...n},t)=>a.createElement(oe,{className:z("grid gap-2",o),...n,ref:t}));h.displayName=oe.displayName;const m=a.forwardRef(({className:o,...n},t)=>a.createElement(ne,{ref:t,className:z("group relative h-[24px] w-[24px] shrink-0 rounded-full border border-[#4D4637] ring-offset-background","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","hover:border-[color:var(--color-point-2)] hover:border-[4px] hover:shadow-[-2px_-2px_4px_0_rgba(151,71,255,0.2),2px_2px_6px_0_rgba(151,71,255,0.4)]","disabled:cursor-not-allowed disabled:opacity-50 disabled:border-[#DFE0DF]","data-[state=checked]:border-point-1 data-[state=checked]:bg-point-1 data-[state=checked]:text-primary-foreground",o),...n},a.createElement("span",{className:"pointer-events-none absolute inset-0 hidden items-center justify-center group-disabled:flex"},a.createElement(ue,{className:"h-4 w-4 text-[#DFE0DF] group-data-[state=checked]:hidden"})),a.createElement(we,{className:"flex items-center justify-center "},a.createElement(fe,{className:"h-4 w-4 group-data-[state=checked]:group-disabled:text-[#DFE0DF]"}))));m.displayName=ne.displayName;h.__docgenInfo={description:"",methods:[]};m.__docgenInfo={description:"",methods:[]};const Te={title:"UI/RadioGroup",component:h,parameters:{layout:"centered"},tags:["autodocs"]},g={render:()=>e.createElement(h,{defaultValue:"option-one"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-one",id:"option-one"}),e.createElement("label",{htmlFor:"option-one",className:"text-sm font-medium"},"Option One")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-two",id:"option-two"}),e.createElement("label",{htmlFor:"option-two",className:"text-sm font-medium"},"Option Two")))},y={render:()=>e.createElement(h,{defaultValue:"comfortable"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"default",id:"r1"}),e.createElement("label",{htmlFor:"r1",className:"text-sm font-medium"},"Default",e.createElement("p",{className:"text-xs text-muted-foreground"},"The default spacing option"))),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"comfortable",id:"r2"}),e.createElement("label",{htmlFor:"r2",className:"text-sm font-medium"},"Comfortable",e.createElement("p",{className:"text-xs text-muted-foreground"},"More spacing between elements"))),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"compact",id:"r3"}),e.createElement("label",{htmlFor:"r3",className:"text-sm font-medium"},"Compact",e.createElement("p",{className:"text-xs text-muted-foreground"},"Less spacing, more content"))))},w={render:()=>e.createElement(h,{defaultValue:"option-one",disabled:!0},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-one",id:"d1"}),e.createElement("label",{htmlFor:"d1",className:"text-sm font-medium opacity-50"},"Option One (Disabled)")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-two",id:"d2"}),e.createElement("label",{htmlFor:"d2",className:"text-sm font-medium opacity-50"},"Option Two (Disabled)")))},G={render:()=>e.createElement(h,{defaultValue:"card",className:"flex gap-4"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"card",id:"h1"}),e.createElement("label",{htmlFor:"h1",className:"text-sm font-medium"},"Card")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"paypal",id:"h2"}),e.createElement("label",{htmlFor:"h2",className:"text-sm font-medium"},"PayPal")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"apple",id:"h3"}),e.createElement("label",{htmlFor:"h3",className:"text-sm font-medium"},"Apple Pay")))};var P,k,O;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(k=g.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var S,A,j;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(A=y.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var V,L,M;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(L=w.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var T,B,U;G.parameters={...G.parameters,docs:{...(T=G.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(U=(B=G.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};const Be=["Default","WithDescription","Disabled","HorizontalLayout"];export{g as Default,w as Disabled,G as HorizontalLayout,y as WithDescription,Be as __namedExportsOrder,Te as default};
