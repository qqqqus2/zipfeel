import{r as a,R as e}from"./index-DRjF_FHU.js";import{b as ie,P as I,c as C,a as K}from"./index--M6JEWVJ.js";import{u as D}from"./index-Bms3GI6n.js";import{R as le,I as ce,c as H}from"./index-DmFnIlY5.js";import{u as de}from"./index-dhUvqgLm.js";import{u as me}from"./index-D1Rwxldo.js";import{u as ue}from"./index-Iz9Zo_Nw.js";import{P as pe}from"./index-od4dH0T8.js";import{j as d}from"./jsx-runtime-DiklIkkE.js";import{c as F}from"./utils-BQHNewu7.js";import{X as fe}from"./x-BuCBQyXB.js";import{C as ve}from"./check-BRxH6xXv.js";import"./index-BKlBQwGM.js";import"./index-BBUvKJIO.js";import"./createLucideIcon-CfeEeys9.js";var P="Radio",[xe,W]=K(P),[be,Re]=xe(P),X=a.forwardRef((o,n)=>{const{__scopeRadio:t,name:c,checked:r=!1,required:s,disabled:l,value:v="on",onCheck:u,form:x,...b}=o,[f,R]=a.useState(null),i=D(n,E=>R(E)),p=a.useRef(!1),N=f?x||!!f.closest("form"):!0;return d.jsxs(be,{scope:t,checked:r,disabled:l,children:[d.jsx(I.button,{type:"button",role:"radio","aria-checked":r,"data-state":Q(r),"data-disabled":l?"":void 0,disabled:l,value:v,...b,ref:i,onClick:C(o.onClick,E=>{r||u==null||u(),N&&(p.current=E.isPropagationStopped(),p.current||E.stopPropagation())})}),N&&d.jsx(J,{control:f,bubbles:!p.current,name:c,value:v,checked:r,required:s,disabled:l,form:x,style:{transform:"translateX(-100%)"}})]})});X.displayName=P;var $="RadioIndicator",Y=a.forwardRef((o,n)=>{const{__scopeRadio:t,forceMount:c,...r}=o,s=Re($,t);return d.jsx(pe,{present:c||s.checked,children:d.jsx(I.span,{"data-state":Q(s.checked),"data-disabled":s.disabled?"":void 0,...r,ref:n})})});Y.displayName=$;var he="RadioBubbleInput",J=a.forwardRef(({__scopeRadio:o,control:n,checked:t,bubbles:c=!0,...r},s)=>{const l=a.useRef(null),v=D(l,s),u=ue(t),x=me(n);return a.useEffect(()=>{const b=l.current;if(!b)return;const f=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(f,"checked").set;if(u!==t&&i){const p=new Event("click",{bubbles:c});i.call(b,t),b.dispatchEvent(p)}},[u,t,c]),d.jsx(I.input,{type:"radio","aria-hidden":!0,defaultChecked:t,...r,tabIndex:-1,ref:v,style:{...r.style,...x,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});J.displayName=he;function Q(o){return o?"checked":"unchecked"}var Ne=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],_="RadioGroup",[Ee]=K(_,[H,W]),Z=H(),ee=W(),[ge,ye]=Ee(_),te=a.forwardRef((o,n)=>{const{__scopeRadioGroup:t,name:c,defaultValue:r,value:s,required:l=!1,disabled:v=!1,orientation:u,dir:x,loop:b=!0,onValueChange:f,...R}=o,i=Z(t),p=de(x),[N,E]=ie({prop:s,defaultProp:r??null,onChange:f,caller:_});return d.jsx(ge,{scope:t,name:c,required:l,disabled:v,value:N,onValueChange:E,children:d.jsx(le,{asChild:!0,...i,orientation:u,dir:p,loop:b,children:d.jsx(I.div,{role:"radiogroup","aria-required":l,"aria-orientation":u,"data-disabled":v?"":void 0,dir:p,...R,ref:n})})})});te.displayName=_;var ae="RadioGroupItem",re=a.forwardRef((o,n)=>{const{__scopeRadioGroup:t,disabled:c,...r}=o,s=ye(ae,t),l=s.disabled||c,v=Z(t),u=ee(t),x=a.useRef(null),b=D(n,x),f=s.value===r.value,R=a.useRef(!1);return a.useEffect(()=>{const i=N=>{Ne.includes(N.key)&&(R.current=!0)},p=()=>R.current=!1;return document.addEventListener("keydown",i),document.addEventListener("keyup",p),()=>{document.removeEventListener("keydown",i),document.removeEventListener("keyup",p)}},[]),d.jsx(ce,{asChild:!0,...v,focusable:!l,active:f,children:d.jsx(X,{disabled:l,required:s.required,checked:f,...u,...r,name:s.name,ref:b,onCheck:()=>s.onValueChange(r.value),onKeyDown:C(i=>{i.key==="Enter"&&i.preventDefault()}),onFocus:C(r.onFocus,()=>{var i;R.current&&((i=x.current)==null||i.click())})})})});re.displayName=ae;var Ge="RadioGroupIndicator",oe=a.forwardRef((o,n)=>{const{__scopeRadioGroup:t,...c}=o,r=ee(t);return d.jsx(Y,{...r,...c,ref:n})});oe.displayName=Ge;var ne=te,se=re,we=oe;const h=a.forwardRef(({className:o,...n},t)=>a.createElement(ne,{className:F("grid gap-2",o),...n,ref:t}));h.displayName=ne.displayName;const m=a.forwardRef(({className:o,...n},t)=>a.createElement(se,{ref:t,className:F("group relative inline-flex size-11 shrink-0 items-center justify-center rounded-full border-0 bg-transparent p-0 ring-offset-background","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","aria-invalid:ring-destructive/40 aria-invalid:[&>span]:border-destructive",o),...n},a.createElement("span",{className:F("relative flex size-6 shrink-0 items-center justify-center rounded-full border border-[#4D4637]","group-hover:border-[color:var(--color-point-2)] group-hover:border-[4px] group-hover:shadow-[-2px_-2px_4px_0_rgba(151,71,255,0.2),2px_2px_6px_0_rgba(151,71,255,0.4)]","group-disabled:cursor-not-allowed group-disabled:opacity-50 group-disabled:border-[#DFE0DF]","group-data-[state=checked]:border-point-1 group-data-[state=checked]:bg-point-1 group-data-[state=checked]:text-primary-foreground")},a.createElement("span",{className:"pointer-events-none absolute inset-0 hidden items-center justify-center group-disabled:flex"},a.createElement(fe,{className:"h-4 w-4 text-[#DFE0DF] group-data-[state=checked]:hidden"})),a.createElement(we,{className:"flex items-center justify-center "},a.createElement(ve,{className:"h-4 w-4 group-data-[state=checked]:group-disabled:text-[#DFE0DF]"})))));m.displayName=se.displayName;h.__docgenInfo={description:"",methods:[]};m.__docgenInfo={description:"",methods:[]};const k=["value","defaultValue","onValueChange","disabled","name","orientation","required"],qe={title:"UI/RadioGroup",component:h,parameters:{layout:"centered",controls:{include:k},docs:{description:{component:`### 주요 props (RadioGroup)

- **value** — 제어: 선택된 항목의 \`value\`.
- **defaultValue** — 비제어: 초기 선택.
- **onValueChange** — 선택 변경 콜백.
- **disabled** — 그룹 전체 비활성.
- **name** — 폼 제출 시 필드 이름.
- **orientation** — \`vertical\` / \`horizontal\` 배치.
- **required** — 필수 선택 힌트.

개별 라디오는 \`RadioGroupItem value="..."\`로 둡니다.`},controls:{include:k}}},tags:["autodocs"],argTypes:{value:{control:"text",description:"제어: 선택된 value"},defaultValue:{control:"text",description:"비제어: 초기 value"},onValueChange:{control:!1,description:"선택 변경 콜백"},disabled:{control:"boolean",description:"그룹 전체 비활성"},name:{control:"text",description:"폼 필드 name"},orientation:{control:"select",options:["vertical","horizontal"],description:"항목 배치 방향"},required:{control:"boolean",description:"필수 선택"}}},g={render:()=>e.createElement(h,{defaultValue:"option-one"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-one",id:"option-one"}),e.createElement("label",{htmlFor:"option-one",className:"text-sm font-medium"},"Option One")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-two",id:"option-two"}),e.createElement("label",{htmlFor:"option-two",className:"text-sm font-medium"},"Option Two")))},y={render:()=>e.createElement(h,{defaultValue:"comfortable"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"default",id:"r1"}),e.createElement("label",{htmlFor:"r1",className:"text-sm font-medium"},"Default",e.createElement("p",{className:"text-xs text-muted-foreground"},"The default spacing option"))),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"comfortable",id:"r2"}),e.createElement("label",{htmlFor:"r2",className:"text-sm font-medium"},"Comfortable",e.createElement("p",{className:"text-xs text-muted-foreground"},"More spacing between elements"))),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"compact",id:"r3"}),e.createElement("label",{htmlFor:"r3",className:"text-sm font-medium"},"Compact",e.createElement("p",{className:"text-xs text-muted-foreground"},"Less spacing, more content"))))},G={render:()=>e.createElement(h,{defaultValue:"option-one",disabled:!0},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-one",id:"d1"}),e.createElement("label",{htmlFor:"d1",className:"text-sm font-medium opacity-50"},"Option One (Disabled)")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"option-two",id:"d2"}),e.createElement("label",{htmlFor:"d2",className:"text-sm font-medium opacity-50"},"Option Two (Disabled)")))},w={render:()=>e.createElement(h,{defaultValue:"card",className:"flex gap-4"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"card",id:"h1"}),e.createElement("label",{htmlFor:"h1",className:"text-sm font-medium"},"Card")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"paypal",id:"h2"}),e.createElement("label",{htmlFor:"h2",className:"text-sm font-medium"},"PayPal")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(m,{value:"apple",id:"h3"}),e.createElement("label",{htmlFor:"h3",className:"text-sm font-medium"},"Apple Pay")))};var O,S,j;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(S=g.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var A,V,T;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(V=y.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var L,M,q;G.parameters={...G.parameters,docs:{...(L=G.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(q=(M=G.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var z,U,B;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(B=(U=w.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};const ze=["Default","WithDescription","Disabled","HorizontalLayout"];export{g as Default,G as Disabled,w as HorizontalLayout,y as WithDescription,ze as __namedExportsOrder,qe as default};
