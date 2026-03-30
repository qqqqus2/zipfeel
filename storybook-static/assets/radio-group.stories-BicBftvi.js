import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as i}from"./index-DRjF_FHU.js";import{u as se,P as G,c as C,a as B}from"./index-BtmGPRf8.js";import{u as _}from"./index-Bms3GI6n.js";import{R as ne,I as ie,c as U}from"./index-CwwKksZm.js";import{u as le}from"./index-B4iTqdRC.js";import{u as de}from"./index-BK8PFAvS.js";import{u as ce}from"./index-Iz9Zo_Nw.js";import{P as me}from"./index-DQDayTBB.js";import{c as K}from"./utils-BQHNewu7.js";import{c as ue}from"./createLucideIcon-CfeEeys9.js";import"./index-BKlBQwGM.js";import"./index-BbsOjWWI.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],fe=ue("circle",pe);var P="Radio",[xe,z]=B(P),[ve,he]=xe(P),H=i.forwardRef((a,t)=>{const{__scopeRadio:r,name:d,checked:o=!1,required:s,disabled:l,value:f="on",onCheck:m,form:x,...v}=a,[p,h]=i.useState(null),n=_(t,N=>h(N)),u=i.useRef(!1),b=p?x||!!p.closest("form"):!0;return e.jsxs(ve,{scope:r,checked:o,disabled:l,children:[e.jsx(G.button,{type:"button",role:"radio","aria-checked":o,"data-state":Y(o),"data-disabled":l?"":void 0,disabled:l,value:f,...v,ref:n,onClick:C(a.onClick,N=>{o||m==null||m(),b&&(u.current=N.isPropagationStopped(),u.current||N.stopPropagation())})}),b&&e.jsx(X,{control:p,bubbles:!u.current,name:d,value:f,checked:o,required:s,disabled:l,form:x,style:{transform:"translateX(-100%)"}})]})});H.displayName=P;var W="RadioIndicator",$=i.forwardRef((a,t)=>{const{__scopeRadio:r,forceMount:d,...o}=a,s=he(W,r);return e.jsx(me,{present:d||s.checked,children:e.jsx(G.span,{"data-state":Y(s.checked),"data-disabled":s.disabled?"":void 0,...o,ref:t})})});$.displayName=W;var Re="RadioBubbleInput",X=i.forwardRef(({__scopeRadio:a,control:t,checked:r,bubbles:d=!0,...o},s)=>{const l=i.useRef(null),f=_(l,s),m=ce(r),x=de(t);return i.useEffect(()=>{const v=l.current;if(!v)return;const p=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(p,"checked").set;if(m!==r&&n){const u=new Event("click",{bubbles:d});n.call(v,r),v.dispatchEvent(u)}},[m,r,d]),e.jsx(G.input,{type:"radio","aria-hidden":!0,defaultChecked:r,...o,tabIndex:-1,ref:f,style:{...o.style,...x,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});X.displayName=Re;function Y(a){return a?"checked":"unchecked"}var be=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],I="RadioGroup",[Ne]=B(I,[U,z]),J=U(),Q=z(),[je,ye]=Ne(I),Z=i.forwardRef((a,t)=>{const{__scopeRadioGroup:r,name:d,defaultValue:o,value:s,required:l=!1,disabled:f=!1,orientation:m,dir:x,loop:v=!0,onValueChange:p,...h}=a,n=J(r),u=le(x),[b,N]=se({prop:s,defaultProp:o??null,onChange:p,caller:I});return e.jsx(je,{scope:r,name:d,required:l,disabled:f,value:b,onValueChange:N,children:e.jsx(ne,{asChild:!0,...n,orientation:m,dir:u,loop:v,children:e.jsx(G.div,{role:"radiogroup","aria-required":l,"aria-orientation":m,"data-disabled":f?"":void 0,dir:u,...h,ref:t})})})});Z.displayName=I;var ee="RadioGroupItem",re=i.forwardRef((a,t)=>{const{__scopeRadioGroup:r,disabled:d,...o}=a,s=ye(ee,r),l=s.disabled||d,f=J(r),m=Q(r),x=i.useRef(null),v=_(t,x),p=s.value===o.value,h=i.useRef(!1);return i.useEffect(()=>{const n=b=>{be.includes(b.key)&&(h.current=!0)},u=()=>h.current=!1;return document.addEventListener("keydown",n),document.addEventListener("keyup",u),()=>{document.removeEventListener("keydown",n),document.removeEventListener("keyup",u)}},[]),e.jsx(ie,{asChild:!0,...f,focusable:!l,active:p,children:e.jsx(H,{disabled:l,required:s.required,checked:p,...m,...o,name:s.name,ref:v,onCheck:()=>s.onValueChange(o.value),onKeyDown:C(n=>{n.key==="Enter"&&n.preventDefault()}),onFocus:C(o.onFocus,()=>{var n;h.current&&((n=x.current)==null||n.click())})})})});re.displayName=ee;var ge="RadioGroupIndicator",oe=i.forwardRef((a,t)=>{const{__scopeRadioGroup:r,...d}=a,o=Q(r);return e.jsx($,{...o,...d,ref:t})});oe.displayName=ge;var ae=Z,te=re,we=oe;const R=i.forwardRef(({className:a,...t},r)=>e.jsx(ae,{className:K("grid gap-2",a),...t,ref:r}));R.displayName=ae.displayName;const c=i.forwardRef(({className:a,...t},r)=>e.jsx(te,{ref:r,className:K("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),...t,children:e.jsx(we,{className:"flex items-center justify-center",children:e.jsx(fe,{className:"h-2.5 w-2.5 fill-current text-current"})})}));c.displayName=te.displayName;R.__docgenInfo={description:"",methods:[]};c.__docgenInfo={description:"",methods:[]};const Le={title:"UI/RadioGroup",component:R,parameters:{layout:"centered"},tags:["autodocs"]},j={render:()=>e.jsxs(R,{defaultValue:"option-one",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"option-one",id:"option-one"}),e.jsx("label",{htmlFor:"option-one",className:"text-sm font-medium",children:"Option One"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"option-two",id:"option-two"}),e.jsx("label",{htmlFor:"option-two",className:"text-sm font-medium",children:"Option Two"})]})]})},y={render:()=>e.jsxs(R,{defaultValue:"comfortable",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"default",id:"r1"}),e.jsxs("label",{htmlFor:"r1",className:"text-sm font-medium",children:["Default",e.jsx("p",{className:"text-xs text-muted-foreground",children:"The default spacing option"})]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"comfortable",id:"r2"}),e.jsxs("label",{htmlFor:"r2",className:"text-sm font-medium",children:["Comfortable",e.jsx("p",{className:"text-xs text-muted-foreground",children:"More spacing between elements"})]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"compact",id:"r3"}),e.jsxs("label",{htmlFor:"r3",className:"text-sm font-medium",children:["Compact",e.jsx("p",{className:"text-xs text-muted-foreground",children:"Less spacing, more content"})]})]})]})},g={render:()=>e.jsxs(R,{defaultValue:"option-one",disabled:!0,children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"option-one",id:"d1"}),e.jsx("label",{htmlFor:"d1",className:"text-sm font-medium opacity-50",children:"Option One (Disabled)"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"option-two",id:"d2"}),e.jsx("label",{htmlFor:"d2",className:"text-sm font-medium opacity-50",children:"Option Two (Disabled)"})]})]})},w={render:()=>e.jsxs(R,{defaultValue:"card",className:"flex gap-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"card",id:"h1"}),e.jsx("label",{htmlFor:"h1",className:"text-sm font-medium",children:"Card"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"paypal",id:"h2"}),e.jsx("label",{htmlFor:"h2",className:"text-sm font-medium",children:"PayPal"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{value:"apple",id:"h3"}),e.jsx("label",{htmlFor:"h3",className:"text-sm font-medium",children:"Apple Pay"})]})]})};var F,E,D;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(E=j.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var O,S,k;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(k=(S=y.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var A,V,L;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(V=g.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var M,T,q;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(T=w.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const Me=["Default","WithDescription","Disabled","HorizontalLayout"];export{j as Default,g as Disabled,w as HorizontalLayout,y as WithDescription,Me as __namedExportsOrder,Le as default};
