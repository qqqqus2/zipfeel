import{R as e}from"./index-DRjF_FHU.js";import{S as s}from"./separator-DqqCJVXh.js";import"./index-BKlBQwGM.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./utils-BQHNewu7.js";const f={title:"UI/Separator",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},decorative:{control:"boolean"}}},t={args:{orientation:"horizontal",decorative:!0},render:a=>e.createElement("div",{className:"w-[280px] space-y-3"},e.createElement("p",{className:"text-sm text-muted-foreground"},"위쪽 영역"),e.createElement(s,{...a}),e.createElement("p",{className:"text-sm text-muted-foreground"},"아래쪽 영역"))},r={args:{orientation:"vertical",decorative:!0},render:a=>e.createElement("div",{className:"flex h-24 items-stretch gap-4"},e.createElement("span",{className:"text-sm"},"왼쪽"),e.createElement(s,{...a}),e.createElement("span",{className:"text-sm"},"오른쪽"))};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    decorative: true
  },
  render: args => <div className="w-[280px] space-y-3">\r
      <p className="text-sm text-muted-foreground">위쪽 영역</p>\r
      <Separator {...args} />\r
      <p className="text-sm text-muted-foreground">아래쪽 영역</p>\r
    </div>
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    decorative: true
  },
  render: args => <div className="flex h-24 items-stretch gap-4">\r
      <span className="text-sm">왼쪽</span>\r
      <Separator {...args} />\r
      <span className="text-sm">오른쪽</span>\r
    </div>
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const E=["Horizontal","Vertical"];export{t as Horizontal,r as Vertical,E as __namedExportsOrder,f as default};
