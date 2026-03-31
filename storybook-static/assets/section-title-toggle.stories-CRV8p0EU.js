import{r as e,R as S}from"./index-DRjF_FHU.js";import{C as j}from"./checkbox-B8Cpbqml.js";import{c as I}from"./utils-BQHNewu7.js";import"./index-Bms3GI6n.js";import"./index-BtmGPRf8.js";import"./jsx-runtime-DiklIkkE.js";import"./index-BKlBQwGM.js";import"./index-Iz9Zo_Nw.js";import"./index-BK8PFAvS.js";import"./index-DQDayTBB.js";import"./check-BRxH6xXv.js";import"./createLucideIcon-CfeEeys9.js";function V({expanded:r}){return e.createElement("span",{className:"relative flex w-[20px] h-[10px] items-center justify-center"},e.createElement("span",{className:"absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-foreground"}),e.createElement("span",{className:["absolute left-0 top-1/2 -translate-y-1/2 w-[10px] h-[10px] border-2 z-1 rotate-45 bg-white transition-transform duration-150 ease-out",r?"translate-x-[10px]":"translate-x-0"].join(" ")}))}function x({title:r,requiredLabel:l="설정 필수",expanded:n,defaultExpanded:q=!1,onExpandedChange:t,requiredChecked:d,defaultRequiredChecked:o=!1,onRequiredCheckedChange:s,disabled:b,className:L}){const g=d!==void 0,[A,B]=e.useState(o),i=g?d:A,c=n!==void 0,[U,E]=e.useState(q),u=i?c?n:U:!1,_=()=>{if(!i)return;const a=!u;t==null||t(a),c||E(a)},$=a=>{s==null||s(a),g||B(a),a?(t==null||t(!0),c||E(!0)):(t==null||t(!1),c||E(!1))};return e.createElement("div",{className:I("flex w-full items-center justify-between gap-4 py-2",L)},e.createElement("button",{type:"button",onClick:_,disabled:b||!i,className:"flex min-w-0 flex-1 items-center gap-3 text-left disabled:opacity-50","aria-expanded":u,"aria-label":`${r} ${u?"접기":"펼치기"}`},e.createElement("span",{className:"shrink-0"},e.createElement(V,{expanded:u})),e.createElement("span",{className:"truncate text-sm font-semibold text-foreground"},r)),e.createElement("div",{className:"flex shrink-0 items-center gap-3"},e.createElement("span",{className:"text-sm font-medium text-muted-foreground"},l),e.createElement(j,{checked:i,defaultChecked:o,onCheckedChange:a=>$(a===!0),disabled:b,"aria-label":`${r} ${l}`})))}x.__docgenInfo={description:"",methods:[],displayName:"SectionTitleToggle",props:{requiredLabel:{defaultValue:{value:'"설정 필수"',computed:!1},required:!1},defaultExpanded:{defaultValue:{value:"false",computed:!1},required:!1},defaultRequiredChecked:{defaultValue:{value:"false",computed:!1},required:!1}}};const X={title:"UI/SectionTitleToggle",component:x,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{title:{control:"text"},requiredLabel:{control:"text"},disabled:{control:"boolean"}}},m={args:{title:"Section명",requiredLabel:"설정 필수",defaultExpanded:!1,defaultRequiredChecked:!1}},p={args:{title:"Section명",requiredLabel:"설정 필수",defaultExpanded:!0,defaultRequiredChecked:!0}},f={name:"리스트 예시",render:()=>{const[r,l]=e.useState(!0),[n,q]=e.useState(!0),[t,d]=e.useState(!0),[o,s]=e.useState(!1);return S.createElement("div",{className:"w-full max-w-2xl space-y-1"},S.createElement(x,{title:"Section명",expanded:r,onExpandedChange:l,requiredChecked:n,onRequiredCheckedChange:q}),S.createElement(x,{title:"Section명",expanded:t,onExpandedChange:d,requiredChecked:o,onRequiredCheckedChange:s}))}};var R,k,y;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: "Section명",
    requiredLabel: "설정 필수",
    defaultExpanded: false,
    defaultRequiredChecked: false
  }
}`,...(y=(k=m.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var N,T,h;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: "Section명",
    requiredLabel: "설정 필수",
    defaultExpanded: true,
    defaultRequiredChecked: true
  }
}`,...(h=(T=p.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var v,w,C;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "리스트 예시",
  render: () => {
    const [aExpanded, setAExpanded] = useState(true);
    const [aRequired, setARequired] = useState(true);
    const [bExpanded, setBExpanded] = useState(true);
    const [bRequired, setBRequired] = useState(false);
    return <div className="w-full max-w-2xl space-y-1">\r
        <SectionTitleToggle title="Section명" expanded={aExpanded} onExpandedChange={setAExpanded} requiredChecked={aRequired} onRequiredCheckedChange={setARequired} />\r
        <SectionTitleToggle title="Section명" expanded={bExpanded} onExpandedChange={setBExpanded} requiredChecked={bRequired} onRequiredCheckedChange={setBRequired} />\r
      </div>;
  }
}`,...(C=(w=f.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const Y=["Default","Checked","ListExample"];export{p as Checked,m as Default,f as ListExample,Y as __namedExportsOrder,X as default};
