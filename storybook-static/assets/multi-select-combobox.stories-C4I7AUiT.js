import{r as e}from"./index-DRjF_FHU.js";import{c as p}from"./utils-BQHNewu7.js";import{B as O}from"./button-BDfZ15N9.js";import{C as B}from"./checkbox-D-8OsCS9.js";import{C as j,a as z,b as G,c as L,d as T,e as U}from"./command-DdvjUk9H.js";import{P as $,a as A,b as F}from"./popover-C0pxVMjQ.js";import{C as H}from"./chevron-down-CqCF4uWS.js";import{C as J}from"./check-BRxH6xXv.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-D1SQP9Z-.js";import"./index--M6JEWVJ.js";import"./index-BKlBQwGM.js";import"./index-Iz9Zo_Nw.js";import"./index-D1Rwxldo.js";import"./index-od4dH0T8.js";import"./x-BuCBQyXB.js";import"./createLucideIcon-CfeEeys9.js";import"./index-VeLskWc3.js";import"./index-BBUvKJIO.js";import"./index-BvuF3t5A.js";import"./index-Bgmx4rse.js";import"./index-BrPKIHdt.js";function s({label:t,options:l,value:r,onValueChange:d,placeholder:q="선택하세요",searchable:f=!1,searchPlaceholder:y="검색…",className:k,disabled:D,required:M=!1,invalid:P=!1,"aria-invalid":I}){const R=I===!0||P===!0?!0:void 0,[v,_]=e.useState(!1),i=r.length,b=e.useCallback(a=>{r.includes(a)?d(r.filter(n=>n!==a)):d([...r,a])},[d,r]);return e.createElement($,{open:v,onOpenChange:_,modal:!1},e.createElement(A,{asChild:!0},e.createElement(O,{variant:"outline",type:"button",role:"combobox","aria-expanded":v,"aria-required":M,"aria-invalid":R,disabled:D,className:p("h-11 w-full justify-between gap-3 rounded-md border border-input px-4",k)},e.createElement("span",{className:"flex min-w-0 flex-1 items-center gap-3 text-left"},e.createElement("span",{className:"shrink-0 text-sm font-medium text-foreground"},t),e.createElement("span",{className:p("min-w-0 flex-1 truncate text-sm",i===0?"text-muted-foreground":"text-foreground")},i===0?q:`${i}건 선택`)),e.createElement(H,{className:"size-4 shrink-0 opacity-60"}))),e.createElement(F,{align:"start",className:"w-[--radix-popover-trigger-width] p-0"},e.createElement(j,null,f?e.createElement(z,{placeholder:y}):null,e.createElement(G,null,f?e.createElement(L,null,"검색 결과가 없습니다."):null,e.createElement(T,null,l.map(a=>{const n=r.includes(a.value);return e.createElement(U,{key:a.value,value:a.value,disabled:a.disabled,onSelect:()=>b(a.value),className:"py-2"},e.createElement(B,{checked:n,onCheckedChange:()=>b(a.value),className:"mr-3","aria-label":n?"선택됨":"선택 안 됨"}),e.createElement("span",{className:"flex-1"},a.label),e.createElement(J,{className:p("ml-2 h-4 w-4",n?"opacity-100":"opacity-0")}))}))))))}s.__docgenInfo={description:"",methods:[],displayName:"MultiSelectCombobox",props:{placeholder:{defaultValue:{value:'"선택하세요"',computed:!1},required:!1},searchable:{defaultValue:{value:"false",computed:!1},required:!1},searchPlaceholder:{defaultValue:{value:'"검색…"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},invalid:{defaultValue:{value:"false",computed:!1},required:!1}}};const ge={title:"UI/MultiSelectCombobox",component:s,parameters:{layout:"centered"},tags:["autodocs"]},o=[{value:"default-1",label:"Default"},{value:"default-2",label:"Default"},{value:"default-3",label:"Default"},{value:"default-4",label:"Default"},{value:"default-5",label:"Default"}],u={args:{label:"항목명",options:o,value:[],onValueChange:()=>{},placeholder:"선택하세요"},render:()=>{const[t,l]=e.useState([]);return e.createElement("div",{className:"w-[340px]"},e.createElement(s,{label:"항목명",options:o,value:t,onValueChange:l,placeholder:"선택하세요"}))}},m={name:"필수(required)",render:()=>{const[t,l]=e.useState([]);return e.createElement("div",{className:"w-[340px]"},e.createElement(s,{label:"항목명",options:o,value:t,onValueChange:l,placeholder:"선택하세요",required:!0}))}},c={name:"Selected(Multi) 예시",args:{label:"항목명",options:o,value:["default-1","default-2"],onValueChange:()=>{},placeholder:"선택하세요"},render:()=>{const[t,l]=e.useState(["default-1","default-2"]);return e.createElement("div",{className:"w-[340px] space-y-3"},e.createElement(s,{label:"항목명",options:o,value:t,onValueChange:l,placeholder:"선택하세요"}),e.createElement("p",{className:"text-sm text-muted-foreground"},"현재: ",t.length,"건 선택"))}};var h,g,x;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(g=u.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,E,V;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "필수(required)",
  render: () => {
    const [value, setValue] = React.useState([]);
    return <div className="w-[340px]">\r
        <MultiSelectCombobox label="항목명" options={options} value={value} onValueChange={setValue} placeholder="선택하세요" required />\r
      </div>;
  }
}`,...(V=(E=m.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var N,S,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const xe=["Default","Required","Preselected"];export{u as Default,c as Preselected,m as Required,xe as __namedExportsOrder,ge as default};
