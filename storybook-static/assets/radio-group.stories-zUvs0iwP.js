import{r,R as e}from"./index-DRjF_FHU.js";import{b as se,P as I,c as F,a as q}from"./index--M6JEWVJ.js";import{u as D}from"./index-Bms3GI6n.js";import{R as ie,I as le,c as K}from"./index-DmFnIlY5.js";import{u as ce}from"./index-dhUvqgLm.js";import{u as de}from"./index-D1Rwxldo.js";import{u as me}from"./index-Iz9Zo_Nw.js";import{P as pe}from"./index-od4dH0T8.js";import{j as d}from"./jsx-runtime-DiklIkkE.js";import{c as C}from"./utils-BQHNewu7.js";import{X as ue}from"./x-BuCBQyXB.js";import{C as fe}from"./check-BRxH6xXv.js";import"./index-BKlBQwGM.js";import"./index-BBUvKJIO.js";import"./createLucideIcon-CfeEeys9.js";var P="Radio",[xe,H]=q(P),[ve,be]=xe(P),W=r.forwardRef((o,n)=>{const{__scopeRadio:t,name:c,checked:a=!1,required:s,disabled:l,value:x="on",onCheck:p,form:v,...b}=o,[f,R]=r.useState(null),i=D(n,E=>R(E)),u=r.useRef(!1),N=f?v||!!f.closest("form"):!0;return d.jsxs(ve,{scope:t,checked:a,disabled:l,children:[d.jsx(I.button,{type:"button",role:"radio","aria-checked":a,"data-state":J(a),"data-disabled":l?"":void 0,disabled:l,value:x,...b,ref:i,onClick:F(o.onClick,E=>{a||p==null||p(),N&&(u.current=E.isPropagationStopped(),u.current||E.stopPropagation())})}),N&&d.jsx(Y,{control:f,bubbles:!u.current,name:c,value:x,checked:a,required:s,disabled:l,form:v,style:{transform:"translateX(-100%)"}})]})});W.displayName=P;var X="RadioIndicator",$=r.forwardRef((o,n)=>{const{__scopeRadio:t,forceMount:c,...a}=o,s=be(X,t);return d.jsx(pe,{present:c||s.checked,children:d.jsx(I.span,{"data-state":J(s.checked),"data-disabled":s.disabled?"":void 0,...a,ref:n})})});$.displayName=X;var Re="RadioBubbleInput",Y=r.forwardRef(({__scopeRadio:o,control:n,checked:t,bubbles:c=!0,...a},s)=>{const l=r.useRef(null),x=D(l,s),p=me(t),v=de(n);return r.useEffect(()=>{const b=l.current;if(!b)return;const f=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(f,"checked").set;if(p!==t&&i){const u=new Event("click",{bubbles:c});i.call(b,t),b.dispatchEvent(u)}},[p,t,c]),d.jsx(I.input,{type:"radio","aria-hidden":!0,defaultChecked:t,...a,tabIndex:-1,ref:x,style:{...a.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});Y.displayName=Re;function J(o){return o?"checked":"unchecked"}var he=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],_="RadioGroup",[Ne]=q(_,[K,H]),Q=K(),Z=H(),[Ee,ge]=Ne(_),ee=r.forwardRef((o,n)=>{const{__scopeRadioGroup:t,name:c,defaultValue:a,value:s,required:l=!1,disabled:x=!1,orientation:p,dir:v,loop:b=!0,onValueChange:f,...R}=o,i=Q(t),u=ce(v),[N,E]=se({prop:s,defaultProp:a??null,onChange:f,caller:_});return d.jsx(Ee,{scope:t,name:c,required:l,disabled:x,value:N,onValueChange:E,children:d.jsx(ie,{asChild:!0,...i,orientation:p,dir:u,loop:b,children:d.jsx(I.div,{role:"radiogroup","aria-required":l,"aria-orientation":p,"data-disabled":x?"":void 0,dir:u,...R,ref:n})})})});ee.displayName=_;var te="RadioGroupItem",re=r.forwardRef((o,n)=>{const{__scopeRadioGroup:t,disabled:c,...a}=o,s=ge(te,t),l=s.disabled||c,x=Q(t),p=Z(t),v=r.useRef(null),b=D(n,v),f=s.value===a.value,R=r.useRef(!1);return r.useEffect(()=>{const i=N=>{he.includes(N.key)&&(R.current=!0)},u=()=>R.current=!1;return document.addEventListener("keydown",i),document.addEventListener("keyup",u),()=>{document.removeEventListener("keydown",i),document.removeEventListener("keyup",u)}},[]),d.jsx(le,{asChild:!0,...x,focusable:!l,active:f,children:d.jsx(W,{disabled:l,required:s.required,checked:f,...p,...a,name:s.name,ref:b,onCheck:()=>s.onValueChange(a.value),onKeyDown:F(i=>{i.key==="Enter"&&i.preventDefault()}),onFocus:F(a.onFocus,()=>{var i;R.current&&((i=v.current)==null||i.click())})})})});re.displayName=te;var ye="RadioGroupIndicator",ae=r.forwardRef((o,n)=>{const{__scopeRadioGroup:t,...c}=o,a=Z(t);return d.jsx($,{...a,...c,ref:n})});ae.displayName=ye;var oe=ee,ne=re,we=ae;const h=r.forwardRef(({className:o,...n},t)=>r.createElement(oe,{className:C("grid gap-2",o),...n,ref:t}));h.displayName=oe.displayName;const m=r.forwardRef(({className:o,...n},t)=>r.createElement(ne,{ref:t,className:C("group relative inline-flex size-11 shrink-0 items-center justify-center rounded-full border-0 bg-transparent p-0 ring-offset-background","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","aria-invalid:ring-destructive/40 aria-invalid:[&>span]:border-destructive",o),...n},r.createElement("span",{className:C("relative flex size-6 shrink-0 items-center justify-center rounded-full border border-[#4D4637]","group-hover:border-[color:var(--color-point-2)] group-hover:border-[4px] group-hover:shadow-[-2px_-2px_4px_0_rgba(151,71,255,0.2),2px_2px_6px_0_rgba(151,71,255,0.4)]","group-disabled:cursor-not-allowed group-disabled:opacity-50 group-disabled:border-[#DFE0DF]","group-data-[state=checked]:border-point-1 group-data-[state=checked]:bg-point-1 group-data-[state=checked]:text-primary-foreground")},r.createElement("span",{className:"pointer-events-none absolute inset-0 hidden items-center justify-center group-disabled:flex"},r.createElement(ue,{className:"h-4 w-4 text-[#DFE0DF] group-data-[state=checked]:hidden"})),r.createElement(we,{className:"flex items-center justify-center "},r.createElement(fe,{className:"h-4 w-4 group-data-[state=checked]:group-disabled:text-[#DFE0DF]"})))));m.displayName=ne.displayName;h.__docgenInfo={description:"",methods:[]};m.__docgenInfo={description:"",methods:[]};const Te={title:"UI/RadioGroup",component:h,parameters:{layout:"centered"},tags:["autodocs"]},g={render:()=>e.createElement(h,{defaultValue:"option-one"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-one",id:"option-one"}),e.createElement("label",{htmlFor:"option-one",className:"text-sm font-medium"},"Option One")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-two",id:"option-two"}),e.createElement("label",{htmlFor:"option-two",className:"text-sm font-medium"},"Option Two")))},y={render:()=>e.createElement(h,{defaultValue:"comfortable"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"default",id:"r1"}),e.createElement("label",{htmlFor:"r1",className:"text-sm font-medium"},"Default",e.createElement("p",{className:"text-xs text-muted-foreground"},"The default spacing option"))),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"comfortable",id:"r2"}),e.createElement("label",{htmlFor:"r2",className:"text-sm font-medium"},"Comfortable",e.createElement("p",{className:"text-xs text-muted-foreground"},"More spacing between elements"))),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"compact",id:"r3"}),e.createElement("label",{htmlFor:"r3",className:"text-sm font-medium"},"Compact",e.createElement("p",{className:"text-xs text-muted-foreground"},"Less spacing, more content"))))},w={render:()=>e.createElement(h,{defaultValue:"option-one",disabled:!0},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-one",id:"d1"}),e.createElement("label",{htmlFor:"d1",className:"text-sm font-medium opacity-50"},"Option One (Disabled)")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-two",id:"d2"}),e.createElement("label",{htmlFor:"d2",className:"text-sm font-medium opacity-50"},"Option Two (Disabled)")))},G={render:()=>e.createElement(h,{defaultValue:"card",className:"flex gap-4"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"card",id:"h1"}),e.createElement("label",{htmlFor:"h1",className:"text-sm font-medium"},"Card")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"paypal",id:"h2"}),e.createElement("label",{htmlFor:"h2",className:"text-sm font-medium"},"PayPal")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"apple",id:"h3"}),e.createElement("label",{htmlFor:"h3",className:"text-sm font-medium"},"Apple Pay")))};var k,O,S;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(O=g.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var j,A,V;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(V=(A=y.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var L,M,T;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(M=w.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var z,B,U;G.parameters={...G.parameters,docs:{...(z=G.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(U=(B=G.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};const ze=["Default","WithDescription","Disabled","HorizontalLayout"];export{g as Default,w as Disabled,G as HorizontalLayout,y as WithDescription,ze as __namedExportsOrder,Te as default};
