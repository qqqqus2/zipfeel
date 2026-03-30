import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as i}from"./index-DRjF_FHU.js";import{u as re}from"./index-Bms3GI6n.js";import{P as F,u as pe,c as M,a as ue}from"./index-BtmGPRf8.js";import{u as fe}from"./index-Iz9Zo_Nw.js";import{u as be}from"./index-BK8PFAvS.js";import{P as he}from"./index-DQDayTBB.js";import{c as A}from"./utils-BQHNewu7.js";import{C as xe}from"./check-BRxH6xXv.js";import"./index-BKlBQwGM.js";import"./createLucideIcon-CfeEeys9.js";var P="Checkbox",[ke]=ue(P),[Ce,O]=ke(P);function ve(r){const{__scopeCheckbox:a,checked:s,children:m,defaultChecked:n,disabled:t,form:u,name:f,onCheckedChange:d,required:x,value:k="on",internal_do_not_use_render:l}=r,[p,g]=pe({prop:s,defaultProp:n??!1,onChange:d,caller:P}),[C,v]=i.useState(null),[N,o]=i.useState(null),c=i.useRef(!1),S=C?!!u||!!C.closest("form"):!0,w={checked:p,disabled:t,setChecked:g,control:C,setControl:v,name:f,form:u,value:k,hasConsumerStoppedPropagationRef:c,required:x,defaultChecked:h(n)?!1:n,isFormControl:S,bubbleInput:N,setBubbleInput:o};return e.jsx(Ce,{scope:a,...w,children:ge(l)?l(w):m})}var se="CheckboxTrigger",oe=i.forwardRef(({__scopeCheckbox:r,onKeyDown:a,onClick:s,...m},n)=>{const{control:t,value:u,disabled:f,checked:d,required:x,setControl:k,setChecked:l,hasConsumerStoppedPropagationRef:p,isFormControl:g,bubbleInput:C}=O(se,r),v=re(n,k),N=i.useRef(d);return i.useEffect(()=>{const o=t==null?void 0:t.form;if(o){const c=()=>l(N.current);return o.addEventListener("reset",c),()=>o.removeEventListener("reset",c)}},[t,l]),e.jsx(F.button,{type:"button",role:"checkbox","aria-checked":h(d)?"mixed":d,"aria-required":x,"data-state":de(d),"data-disabled":f?"":void 0,disabled:f,value:u,...m,ref:v,onKeyDown:M(a,o=>{o.key==="Enter"&&o.preventDefault()}),onClick:M(s,o=>{l(c=>h(c)?!0:!c),C&&g&&(p.current=o.isPropagationStopped(),p.current||o.stopPropagation())})})});oe.displayName=se;var D=i.forwardRef((r,a)=>{const{__scopeCheckbox:s,name:m,checked:n,defaultChecked:t,required:u,disabled:f,value:d,onCheckedChange:x,form:k,...l}=r;return e.jsx(ve,{__scopeCheckbox:s,checked:n,defaultChecked:t,disabled:f,required:u,onCheckedChange:x,name:m,form:k,value:d,internal_do_not_use_render:({isFormControl:p})=>e.jsxs(e.Fragment,{children:[e.jsx(oe,{...l,ref:a,__scopeCheckbox:s}),p&&e.jsx(ie,{__scopeCheckbox:s})]})})});D.displayName=P;var ae="CheckboxIndicator",ne=i.forwardRef((r,a)=>{const{__scopeCheckbox:s,forceMount:m,...n}=r,t=O(ae,s);return e.jsx(he,{present:m||h(t.checked)||t.checked===!0,children:e.jsx(F.span,{"data-state":de(t.checked),"data-disabled":t.disabled?"":void 0,...n,ref:a,style:{pointerEvents:"none",...r.style}})})});ne.displayName=ae;var ce="CheckboxBubbleInput",ie=i.forwardRef(({__scopeCheckbox:r,...a},s)=>{const{control:m,hasConsumerStoppedPropagationRef:n,checked:t,defaultChecked:u,required:f,disabled:d,name:x,value:k,form:l,bubbleInput:p,setBubbleInput:g}=O(ce,r),C=re(s,g),v=fe(t),N=be(m);i.useEffect(()=>{const c=p;if(!c)return;const S=window.HTMLInputElement.prototype,B=Object.getOwnPropertyDescriptor(S,"checked").set,le=!n.current;if(v!==t&&B){const me=new Event("click",{bubbles:le});c.indeterminate=h(t),B.call(c,h(t)?!1:t),c.dispatchEvent(me)}},[p,v,t,n]);const o=i.useRef(h(t)?!1:t);return e.jsx(F.input,{type:"checkbox","aria-hidden":!0,defaultChecked:u??o.current,required:f,disabled:d,name:x,value:k,form:l,...a,tabIndex:-1,ref:C,style:{...a.style,...N,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});ie.displayName=ce;function ge(r){return typeof r=="function"}function h(r){return r==="indeterminate"}function de(r){return h(r)?"indeterminate":r?"checked":"unchecked"}const b=i.forwardRef(({className:r,...a},s)=>e.jsx(D,{ref:s,className:A("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...a,children:e.jsx(ne,{className:A("flex items-center justify-center text-current"),children:e.jsx(xe,{className:"h-4 w-4"})})}));b.displayName=D.displayName;b.__docgenInfo={description:"",methods:[]};const Oe={title:"UI/Checkbox",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"비활성화 상태"}}},j={args:{}},y={args:{defaultChecked:!0}},_={args:{disabled:!0}},E={args:{disabled:!0,defaultChecked:!0}},R={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(b,{id:"terms"}),e.jsx("label",{htmlFor:"terms",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Accept terms and conditions"})]})},I={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(b,{id:"option1",defaultChecked:!0}),e.jsx("label",{htmlFor:"option1",className:"text-sm font-medium",children:"Option 1"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(b,{id:"option2"}),e.jsx("label",{htmlFor:"option2",className:"text-sm font-medium",children:"Option 2"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(b,{id:"option3"}),e.jsx("label",{htmlFor:"option3",className:"text-sm font-medium",children:"Option 3"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(b,{id:"option4",disabled:!0}),e.jsx("label",{htmlFor:"option4",className:"text-sm font-medium opacity-50",children:"Option 4 (Disabled)"})]})]})};var T,L,q;j.parameters={...j.parameters,docs:{...(T=j.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {}
}`,...(q=(L=j.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var H,U,z;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(z=(U=y.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var G,K,W;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(W=(K=_.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var X,$,J;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...(J=($=E.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Q,V,Y;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">\r
      <Checkbox id="terms" />\r
      <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">\r
        Accept terms and conditions\r
      </label>\r
    </div>
}`,...(Y=(V=R.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var Z,ee,te;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="option1" defaultChecked />\r
        <label htmlFor="option1" className="text-sm font-medium">\r
          Option 1\r
        </label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="option2" />\r
        <label htmlFor="option2" className="text-sm font-medium">\r
          Option 2\r
        </label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="option3" />\r
        <label htmlFor="option3" className="text-sm font-medium">\r
          Option 3\r
        </label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="option4" disabled />\r
        <label htmlFor="option4" className="text-sm font-medium opacity-50">\r
          Option 4 (Disabled)\r
        </label>\r
      </div>\r
    </div>
}`,...(te=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const De=["Default","Checked","Disabled","DisabledChecked","WithLabel","MultipleCheckboxes"];export{y as Checked,j as Default,_ as Disabled,E as DisabledChecked,I as MultipleCheckboxes,R as WithLabel,De as __namedExportsOrder,Oe as default};
