import{r as s,R as e}from"./index-DRjF_FHU.js";import{b as G,P as I,c as le,a as de,u as Se}from"./index--M6JEWVJ.js";import{c as ke,u as De}from"./index-dhUvqgLm.js";import{u as me}from"./index-Bms3GI6n.js";import{P as Me}from"./index-od4dH0T8.js";import{u as pe}from"./index-DmmVIJtj.js";import{j as i}from"./jsx-runtime-DiklIkkE.js";import{c as K}from"./utils-BQHNewu7.js";import{I as $}from"./icon-BAFjukc-.js";import{B as R}from"./button-BDfZ15N9.js";import{P as Oe}from"./pencil-BUJrXowq.js";import{c as ze}from"./createLucideIcon-CfeEeys9.js";import"./index-BKlBQwGM.js";import"./index-oDCx3a8o.js";import"./index-D1SQP9Z-.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Be=ze("maximize-2",Ve);var k="Collapsible",[Le,ue]=de(k),[$e,F]=Le(k),ge=s.forwardRef((t,r)=>{const{__scopeCollapsible:n,open:o,defaultOpen:c,disabled:a,onOpenChange:l,...m}=t,[p,u]=G({prop:o,defaultProp:c??!1,onChange:l,caller:k});return i.jsx($e,{scope:n,disabled:a,contentId:pe(),open:p,onOpenToggle:s.useCallback(()=>u(g=>!g),[u]),children:i.jsx(I.div,{"data-state":q(p),"data-disabled":a?"":void 0,...m,ref:r})})});ge.displayName=k;var fe="CollapsibleTrigger",ve=s.forwardRef((t,r)=>{const{__scopeCollapsible:n,...o}=t,c=F(fe,n);return i.jsx(I.button,{type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":q(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled,...o,ref:r,onClick:le(t.onClick,c.onOpenToggle)})});ve.displayName=fe;var U="CollapsibleContent",xe=s.forwardRef((t,r)=>{const{forceMount:n,...o}=t,c=F(U,t.__scopeCollapsible);return i.jsx(Me,{present:n||c.open,children:({present:a})=>i.jsx(He,{...o,ref:r,present:a})})});xe.displayName=U;var He=s.forwardRef((t,r)=>{const{__scopeCollapsible:n,present:o,children:c,...a}=t,l=F(U,n),[m,p]=s.useState(o),u=s.useRef(null),g=me(r,u),f=s.useRef(0),y=f.current,C=s.useRef(0),_=C.current,N=l.open||m,h=s.useRef(N),E=s.useRef(void 0);return s.useEffect(()=>{const d=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(d)},[]),Se(()=>{const d=u.current;if(d){E.current=E.current||{transitionDuration:d.style.transitionDuration,animationName:d.style.animationName},d.style.transitionDuration="0s",d.style.animationName="none";const w=d.getBoundingClientRect();f.current=w.height,C.current=w.width,h.current||(d.style.transitionDuration=E.current.transitionDuration,d.style.animationName=E.current.animationName),p(o)}},[l.open,o]),i.jsx(I.div,{"data-state":q(l.open),"data-disabled":l.disabled?"":void 0,id:l.contentId,hidden:!N,...a,ref:g,style:{"--radix-collapsible-content-height":y?`${y}px`:void 0,"--radix-collapsible-content-width":_?`${_}px`:void 0,...t.style},children:N&&c})});function q(t){return t?"open":"closed"}var Ge=ge,Ke=ve,Fe=xe,v="Accordion",Ue=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Y,qe,Ye]=ke(v),[D]=de(v,[Ye,ue]),J=ue(),Ae=e.forwardRef((t,r)=>{const{type:n,...o}=t,c=o,a=o;return i.jsx(Y.Provider,{scope:t.__scopeAccordion,children:n==="multiple"?i.jsx(Xe,{...a,ref:r}):i.jsx(We,{...c,ref:r})})});Ae.displayName=v;var[be,Je]=D(v),[Ce,Qe]=D(v,{collapsible:!1}),We=e.forwardRef((t,r)=>{const{value:n,defaultValue:o,onValueChange:c=()=>{},collapsible:a=!1,...l}=t,[m,p]=G({prop:n,defaultProp:o??"",onChange:c,caller:v});return i.jsx(be,{scope:t.__scopeAccordion,value:e.useMemo(()=>m?[m]:[],[m]),onItemOpen:p,onItemClose:e.useCallback(()=>a&&p(""),[a,p]),children:i.jsx(Ce,{scope:t.__scopeAccordion,collapsible:a,children:i.jsx(Ne,{...l,ref:r})})})}),Xe=e.forwardRef((t,r)=>{const{value:n,defaultValue:o,onValueChange:c=()=>{},...a}=t,[l,m]=G({prop:n,defaultProp:o??[],onChange:c,caller:v}),p=e.useCallback(g=>m((f=[])=>[...f,g]),[m]),u=e.useCallback(g=>m((f=[])=>f.filter(y=>y!==g)),[m]);return i.jsx(be,{scope:t.__scopeAccordion,value:l,onItemOpen:p,onItemClose:u,children:i.jsx(Ce,{scope:t.__scopeAccordion,collapsible:!0,children:i.jsx(Ne,{...a,ref:r})})})}),[Ze,M]=D(v),Ne=e.forwardRef((t,r)=>{const{__scopeAccordion:n,disabled:o,dir:c,orientation:a="vertical",...l}=t,m=e.useRef(null),p=me(m,r),u=qe(n),f=De(c)==="ltr",y=le(t.onKeyDown,C=>{var W;if(!Ue.includes(C.key))return;const _=C.target,N=u().filter(L=>{var X;return!((X=L.ref.current)!=null&&X.disabled)}),h=N.findIndex(L=>L.ref.current===_),E=N.length;if(h===-1)return;C.preventDefault();let d=h;const w=0,z=E-1,V=()=>{d=h+1,d>z&&(d=w)},B=()=>{d=h-1,d<w&&(d=z)};switch(C.key){case"Home":d=w;break;case"End":d=z;break;case"ArrowRight":a==="horizontal"&&(f?V():B());break;case"ArrowDown":a==="vertical"&&V();break;case"ArrowLeft":a==="horizontal"&&(f?B():V());break;case"ArrowUp":a==="vertical"&&B();break}const Te=d%E;(W=N[Te].ref.current)==null||W.focus()});return i.jsx(Ze,{scope:n,disabled:o,direction:c,orientation:a,children:i.jsx(Y.Slot,{scope:n,children:i.jsx(I.div,{...l,"data-orientation":a,ref:p,onKeyDown:o?void 0:y})})})}),S="AccordionItem",[et,Q]=D(S),he=e.forwardRef((t,r)=>{const{__scopeAccordion:n,value:o,...c}=t,a=M(S,n),l=Je(S,n),m=J(n),p=pe(),u=o&&l.value.includes(o)||!1,g=a.disabled||t.disabled;return i.jsx(et,{scope:n,open:u,disabled:g,triggerId:p,children:i.jsx(Ge,{"data-orientation":a.orientation,"data-state":Re(u),...m,...c,ref:r,disabled:g,open:u,onOpenChange:f=>{f?l.onItemOpen(o):l.onItemClose(o)}})})});he.displayName=S;var Ee="AccordionHeader",ye=e.forwardRef((t,r)=>{const{__scopeAccordion:n,...o}=t,c=M(v,n),a=Q(Ee,n);return i.jsx(I.h3,{"data-orientation":c.orientation,"data-state":Re(a.open),"data-disabled":a.disabled?"":void 0,...o,ref:r})});ye.displayName=Ee;var H="AccordionTrigger",we=e.forwardRef((t,r)=>{const{__scopeAccordion:n,...o}=t,c=M(v,n),a=Q(H,n),l=Qe(H,n),m=J(n);return i.jsx(Y.ItemSlot,{scope:n,children:i.jsx(Ke,{"aria-disabled":a.open&&!l.collapsible||void 0,"data-orientation":c.orientation,id:a.triggerId,...m,...o,ref:r})})});we.displayName=H;var Ie="AccordionContent",_e=e.forwardRef((t,r)=>{const{__scopeAccordion:n,...o}=t,c=M(v,n),a=Q(Ie,n),l=J(n);return i.jsx(Fe,{role:"region","aria-labelledby":a.triggerId,"data-orientation":c.orientation,...l,...o,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...t.style}})});_e.displayName=Ie;function Re(t){return t?"open":"closed"}var tt=Ae,nt=he,ot=ye,Pe=we,je=_e;const O=tt,x=s.forwardRef(({className:t,...r},n)=>s.createElement(nt,{ref:n,className:K("border-b",t),...r}));x.displayName="AccordionItem";const A=s.forwardRef(({className:t,children:r,...n},o)=>s.createElement(ot,{className:"flex"},s.createElement(Pe,{ref:o,className:K("flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline","[&[data-state=open]_.accordion-icon-expand]:hidden [&[data-state=open]_.accordion-icon-collapse]:block","[&[data-state=closed]_.accordion-icon-expand]:block [&[data-state=closed]_.accordion-icon-collapse]:hidden",t),...n},r,s.createElement("span",{className:"ml-2 inline-flex shrink-0 items-center text-muted-foreground"},s.createElement($,{name:"expand_content",size:24,className:"accordion-icon-expand"}),s.createElement($,{name:"collapse_content",size:24,className:"accordion-icon-collapse hidden"})))));A.displayName=Pe.displayName;const b=s.forwardRef(({className:t,children:r,...n},o)=>s.createElement(je,{ref:o,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n},s.createElement("div",{className:K("pb-4 pt-0",t)},r)));b.displayName=je.displayName;x.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};A.__docgenInfo={description:"",methods:[]};b.__docgenInfo={description:"",methods:[]};const Z=["type","collapsible","defaultValue","value","onValueChange","disabled"],bt={title:"UI/Accordion",component:O,parameters:{layout:"padded",controls:{include:Z},docs:{description:{component:"### 주요 props (Accordion 루트)\n\n- **type** — `single`(한 번에 하나) / `multiple`.\n- **collapsible** — `single`일 때 열린 항목을 다시 닫을 수 있는지.\n- **defaultValue** — 비제어: 초기 열린 항목(`string` 또는 `string[]`).\n- **value** / **onValueChange** — 제어 모드.\n- **disabled** — 전체 비활성.\n\n항목은 `AccordionItem` + `AccordionTrigger` + `AccordionContent`로 구성합니다."},controls:{include:Z}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["single","multiple"],description:"단일/다중 열림"},collapsible:{control:"boolean",description:"single에서 닫기 허용"},defaultValue:{control:"text",description:"비제어 초기 value (single: 한 id)"},value:{control:"text",description:"제어 value"},onValueChange:{control:!1,description:"값 변경 콜백"},disabled:{control:"boolean",description:"루트 비활성"}}},P={render:()=>e.createElement(O,{type:"single",collapsible:!0,className:"mx-auto w-full max-w-md",defaultValue:"item-1"},e.createElement(x,{value:"item-1"},e.createElement(A,null,"첫 번째 섹션"),e.createElement(b,null,"접었다 펼 수 있는 본문입니다. 키보드로도 탐색할 수 있습니다.")),e.createElement(x,{value:"item-2"},e.createElement(A,null,"두 번째 섹션"),e.createElement(b,null,"추가 설명이나 폼을 넣을 수 있습니다.")),e.createElement(x,{value:"item-3"},e.createElement(A,null,"세 번째 섹션"),e.createElement(b,null,"목록·테이블 등도 이 안에 둘 수 있습니다.")))},j={name:"Multiple",render:()=>e.createElement(O,{type:"multiple",className:"mx-auto w-full max-w-md",defaultValue:["a"]},e.createElement(x,{value:"a"},e.createElement(A,null,"A"),e.createElement(b,null,"여러 패널을 동시에 열 수 있습니다.")),e.createElement(x,{value:"b"},e.createElement(A,null,"B"),e.createElement(b,null,"B 내용")))},T={name:"Design (PC/Mobile)",render:()=>e.createElement("div",{className:"mx-auto w-full max-w-3xl space-y-6"},e.createElement(O,{type:"single",collapsible:!0,defaultValue:"range-1",className:"w-full"},e.createElement(x,{value:"range-1"},e.createElement(A,{className:"hover:no-underline"},e.createElement("div",{className:"flex w-full min-w-0 items-start justify-between gap-3 pr-2"},e.createElement("div",{className:"min-w-0"},e.createElement("div",{className:"text-xs text-gray-5"},"1~15 · A-Line · #","{(A라인-최대50자)}"),e.createElement("div",{className:"mt-1 truncate text-base font-semibold text-gray-6"},"#","{(B라인-최대50자)}")),e.createElement("div",{className:"mt-1 flex shrink-0 items-center gap-1 text-gray-5"},e.createElement(R,{variant:"ghost",size:"iconSm",className:"h-8 w-8"},e.createElement($,{name:"diamond",size:20})),e.createElement(R,{variant:"ghost",size:"iconSm",className:"h-8 w-8"},e.createElement(Oe,{className:"size-5"})),e.createElement(R,{variant:"ghost",size:"iconSm",className:"h-8 w-8"},e.createElement(Be,{className:"size-5"}))))),e.createElement(b,{className:"pt-2"},e.createElement("div",{className:"rounded-md bg-gray-2/40 p-4"},e.createElement("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-2"},[{title:"일일일일일…",percent:"45.0%",strong:!1},{title:"주인공이 연쇄 실종 사건의 첫 단서를 발견",percent:"00.0%",strong:!0},{title:"기호가 과거실종 사건과 연결됨",percent:"00.0%",strong:!1},{title:"폐건물 조사 중 조직의 활동 흔적 발견",percent:"00.0%",strong:!1}].map((t,r)=>e.createElement("div",{key:r,className:["rounded-xl border border-gray-3 bg-gray-2/60 p-4 text-gray-6",t.strong?"border-point-2 shadow-[0_0_0_1px_rgb(var(--point-color-2))]":""].join(" ")},e.createElement("div",{className:"flex items-start justify-between gap-3"},e.createElement("div",{className:"text-xs text-gray-5"},"Eps. 00"),e.createElement("div",{className:"text-xs text-gray-5"},t.percent)),e.createElement("div",{className:"mt-2 line-clamp-3 text-sm font-medium leading-5"},t.title)))),e.createElement("div",{className:"mt-4"},e.createElement(R,{type:"button",variant:"outline",size:"sm",className:"rounded-full"},"+ Next Episode")))))),e.createElement("p",{className:"text-xs text-muted-foreground"},"뷰포트 폭을 줄이면 카드가 1열로 쌓이며(모바일 이미지), md 이상에서는 2열(PC 이미지)로 보입니다."))};var ee,te,ne;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="mx-auto w-full max-w-md" defaultValue="item-1">\r
      <AccordionItem value="item-1">\r
        <AccordionTrigger>첫 번째 섹션</AccordionTrigger>\r
        <AccordionContent>\r
          접었다 펼 수 있는 본문입니다. 키보드로도 탐색할 수 있습니다.\r
        </AccordionContent>\r
      </AccordionItem>\r
      <AccordionItem value="item-2">\r
        <AccordionTrigger>두 번째 섹션</AccordionTrigger>\r
        <AccordionContent>추가 설명이나 폼을 넣을 수 있습니다.</AccordionContent>\r
      </AccordionItem>\r
      <AccordionItem value="item-3">\r
        <AccordionTrigger>세 번째 섹션</AccordionTrigger>\r
        <AccordionContent>목록·테이블 등도 이 안에 둘 수 있습니다.</AccordionContent>\r
      </AccordionItem>\r
    </Accordion>
}`,...(ne=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,re,ae;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Multiple",
  render: () => <Accordion type="multiple" className="mx-auto w-full max-w-md" defaultValue={["a"]}>\r
      <AccordionItem value="a">\r
        <AccordionTrigger>A</AccordionTrigger>\r
        <AccordionContent>여러 패널을 동시에 열 수 있습니다.</AccordionContent>\r
      </AccordionItem>\r
      <AccordionItem value="b">\r
        <AccordionTrigger>B</AccordionTrigger>\r
        <AccordionContent>B 내용</AccordionContent>\r
      </AccordionItem>\r
    </Accordion>
}`,...(ae=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ce,ie,se;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "Design (PC/Mobile)",
  render: () => <div className="mx-auto w-full max-w-3xl space-y-6">\r
      <Accordion type="single" collapsible defaultValue="range-1" className="w-full">\r
        <AccordionItem value="range-1">\r
          <AccordionTrigger className="hover:no-underline">\r
            <div className="flex w-full min-w-0 items-start justify-between gap-3 pr-2">\r
              <div className="min-w-0">\r
                <div className="text-xs text-gray-5">1~15 · A-Line · #{\`{(A라인-최대50자)}\`}</div>\r
                <div className="mt-1 truncate text-base font-semibold text-gray-6">\r
                  #{\`{(B라인-최대50자)}\`}\r
                </div>\r
              </div>\r
\r
              <div className="mt-1 flex shrink-0 items-center gap-1 text-gray-5">\r
                <Button variant="ghost" size="iconSm" className="h-8 w-8">\r
                  <Icon name="diamond" size={20} />\r
                </Button>\r
                <Button variant="ghost" size="iconSm" className="h-8 w-8">\r
                  <Pencil className="size-5" />\r
                </Button>\r
                <Button variant="ghost" size="iconSm" className="h-8 w-8">\r
                  <Maximize2 className="size-5" />\r
                </Button>\r
              </div>\r
            </div>\r
          </AccordionTrigger>\r
\r
          <AccordionContent className="pt-2">\r
            <div className="rounded-md bg-gray-2/40 p-4">\r
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">\r
                {[{
                title: "일일일일일…",
                percent: "45.0%",
                strong: false
              }, {
                title: "주인공이 연쇄 실종 사건의 첫 단서를 발견",
                percent: "00.0%",
                strong: true
              }, {
                title: "기호가 과거실종 사건과 연결됨",
                percent: "00.0%",
                strong: false
              }, {
                title: "폐건물 조사 중 조직의 활동 흔적 발견",
                percent: "00.0%",
                strong: false
              }].map((it, idx) => <div key={idx} className={["rounded-xl border border-gray-3 bg-gray-2/60 p-4 text-gray-6", it.strong ? "border-point-2 shadow-[0_0_0_1px_rgb(var(--point-color-2))]" : ""].join(" ")}>\r
                    <div className="flex items-start justify-between gap-3">\r
                      <div className="text-xs text-gray-5">Eps. 00</div>\r
                      <div className="text-xs text-gray-5">{it.percent}</div>\r
                    </div>\r
                    <div className="mt-2 line-clamp-3 text-sm font-medium leading-5">\r
                      {it.title}\r
                    </div>\r
                  </div>)}\r
              </div>\r
\r
              <div className="mt-4">\r
                <Button type="button" variant="outline" size="sm" className="rounded-full">\r
                  + Next Episode\r
                </Button>\r
              </div>\r
            </div>\r
          </AccordionContent>\r
        </AccordionItem>\r
      </Accordion>\r
\r
      <p className="text-xs text-muted-foreground">\r
        뷰포트 폭을 줄이면 카드가 1열로 쌓이며(모바일 이미지), md 이상에서는 2열(PC 이미지)로 보입니다.\r
      </p>\r
    </div>
}`,...(se=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const Ct=["Default","Multiple","DesignSpec"];export{P as Default,T as DesignSpec,j as Multiple,Ct as __namedExportsOrder,bt as default};
