import{R as e}from"./index-DRjF_FHU.js";import{S as o}from"./separator-DqqCJVXh.js";import"./index-BKlBQwGM.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./utils-BQHNewu7.js";const n=["orientation","decorative"],f={title:"UI/Separator",component:o,parameters:{layout:"centered",controls:{include:n},docs:{description:{component:"### 주요 props\n\n- **orientation** — `horizontal`(가로 구분선) / `vertical`(세로 구분선).\n- **decorative** — `true`면 스크린 리더에서 순수 장식으로 처리."},controls:{include:n}}},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"가로선 또는 세로선"},decorative:{control:"boolean",description:"true면 접근성 트리에서 순수 장식"}}},r={args:{orientation:"horizontal",decorative:!0},render:t=>e.createElement("div",{className:"w-[280px] space-y-3"},e.createElement("p",{className:"text-sm text-muted-foreground"},"위쪽 영역"),e.createElement(o,{orientation:t.orientation,decorative:t.decorative}),e.createElement("p",{className:"text-sm text-muted-foreground"},"아래쪽 영역"))},a={args:{orientation:"vertical",decorative:!0},render:t=>e.createElement("div",{className:"flex h-24 items-stretch gap-4"},e.createElement("span",{className:"text-sm"},"왼쪽"),e.createElement(o,{orientation:t.orientation,decorative:t.decorative}),e.createElement("span",{className:"text-sm"},"오른쪽"))};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    decorative: true
  },
  render: args => <div className="w-[280px] space-y-3">\r
      <p className="text-sm text-muted-foreground">위쪽 영역</p>\r
      <Separator orientation={args.orientation} decorative={args.decorative} />\r
      <p className="text-sm text-muted-foreground">아래쪽 영역</p>\r
    </div>
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    decorative: true
  },
  render: args => <div className="flex h-24 items-stretch gap-4">\r
      <span className="text-sm">왼쪽</span>\r
      <Separator orientation={args.orientation} decorative={args.decorative} />\r
      <span className="text-sm">오른쪽</span>\r
    </div>
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const S=["Horizontal","Vertical"];export{r as Horizontal,a as Vertical,S as __namedExportsOrder,f as default};
