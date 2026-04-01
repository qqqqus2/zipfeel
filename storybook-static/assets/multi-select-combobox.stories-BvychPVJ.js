import{r as e}from"./index-DRjF_FHU.js";import{c as p}from"./utils-BQHNewu7.js";import{B as k}from"./button-CCn41eiX.js";import{C as D}from"./checkbox-iXivKESU.js";import{P as M,a as P,b as I,C as _,c as q,d as O,e as B,f as R,g as j}from"./popover-BbnK4DuY.js";import{C as z}from"./chevron-down-CqCF4uWS.js";import{C as G}from"./check-BRxH6xXv.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-D1SQP9Z-.js";import"./index-BtmGPRf8.js";import"./index-BKlBQwGM.js";import"./index-Iz9Zo_Nw.js";import"./index-BK8PFAvS.js";import"./index-DQDayTBB.js";import"./x-BuCBQyXB.js";import"./createLucideIcon-CfeEeys9.js";import"./index-qKq4CP-D.js";import"./index-BbsOjWWI.js";import"./index-Impn2mNx.js";import"./index-8q2UQYpY.js";import"./index-FhqXlugo.js";function u({label:t,options:r,value:l,onValueChange:c,placeholder:N="선택하세요",searchable:i=!1,searchPlaceholder:S="검색…",className:V,disabled:w}){const[f,y]=e.useState(!1),d=l.length,b=e.useCallback(a=>{l.includes(a)?c(l.filter(n=>n!==a)):c([...l,a])},[c,l]);return e.createElement(M,{open:f,onOpenChange:y,modal:!1},e.createElement(P,{asChild:!0},e.createElement(k,{variant:"outline",type:"button",role:"combobox","aria-expanded":f,disabled:w,className:p("h-11 w-full justify-between gap-3 rounded-md border border-input px-4",V)},e.createElement("span",{className:"flex min-w-0 flex-1 items-center gap-3 text-left"},e.createElement("span",{className:"shrink-0 text-sm font-medium text-foreground"},t),e.createElement("span",{className:p("min-w-0 flex-1 truncate text-sm",d===0?"text-muted-foreground":"text-foreground")},d===0?N:`${d}건 선택`)),e.createElement(z,{className:"size-4 shrink-0 opacity-60"}))),e.createElement(I,{align:"start",className:"w-[--radix-popover-trigger-width] p-0"},e.createElement(_,null,i?e.createElement(q,{placeholder:S}):null,e.createElement(O,null,i?e.createElement(B,null,"검색 결과가 없습니다."):null,e.createElement(R,null,r.map(a=>{const n=l.includes(a.value);return e.createElement(j,{key:a.value,value:a.value,disabled:a.disabled,onSelect:()=>b(a.value),className:"py-2"},e.createElement(D,{checked:n,onCheckedChange:()=>b(a.value),className:"mr-3","aria-label":n?"선택됨":"선택 안 됨"}),e.createElement("span",{className:"flex-1"},a.label),e.createElement(G,{className:p("ml-2 h-4 w-4",n?"opacity-100":"opacity-0")}))}))))))}u.__docgenInfo={description:"",methods:[],displayName:"MultiSelectCombobox",props:{placeholder:{defaultValue:{value:'"선택하세요"',computed:!1},required:!1},searchable:{defaultValue:{value:"false",computed:!1},required:!1},searchPlaceholder:{defaultValue:{value:'"검색…"',computed:!1},required:!1}}};const ue={title:"UI/MultiSelectCombobox",component:u,parameters:{layout:"centered"},tags:["autodocs"]},m=[{value:"default-1",label:"Default"},{value:"default-2",label:"Default"},{value:"default-3",label:"Default"},{value:"default-4",label:"Default"},{value:"default-5",label:"Default"}],o={args:{label:"항목명",options:m,value:[],onValueChange:()=>{},placeholder:"선택하세요"},render:()=>{const[t,r]=e.useState([]);return e.createElement("div",{className:"w-[340px]"},e.createElement(u,{label:"항목명",options:m,value:t,onValueChange:r,placeholder:"선택하세요"}))}},s={name:"Selected(Multi) 예시",args:{label:"항목명",options:m,value:["default-1","default-2"],onValueChange:()=>{},placeholder:"선택하세요"},render:()=>{const[t,r]=e.useState(["default-1","default-2"]);return e.createElement("div",{className:"w-[340px] space-y-3"},e.createElement(u,{label:"항목명",options:m,value:t,onValueChange:r,placeholder:"선택하세요"}),e.createElement("p",{className:"text-sm text-muted-foreground"},"현재: ",t.length,"건 선택"))}};var h,g,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "항목명",
    options,
    value: [],
    onValueChange: () => {},
    placeholder: "선택하세요"
  },
  render: () => {
    const [value, setValue] = React.useState([]);
    return <div className="w-[340px]">\r
        <MultiSelectCombobox label="항목명" options={options} value={value} onValueChange={setValue} placeholder="선택하세요" />\r
      </div>;
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,C,E;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Selected(Multi) 예시",
  args: {
    label: "항목명",
    options,
    value: ["default-1", "default-2"],
    onValueChange: () => {},
    placeholder: "선택하세요"
  },
  render: () => {
    const [value, setValue] = React.useState(["default-1", "default-2"]);
    return <div className="w-[340px] space-y-3">\r
        <MultiSelectCombobox label="항목명" options={options} value={value} onValueChange={setValue} placeholder="선택하세요" />\r
        <p className="text-sm text-muted-foreground">\r
          현재: {value.length}건 선택\r
        </p>\r
      </div>;
  }
}`,...(E=(C=s.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const ce=["Default","Preselected"];export{o as Default,s as Preselected,ce as __namedExportsOrder,ue as default};
