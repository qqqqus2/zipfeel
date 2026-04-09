import{R as e}from"./index-DRjF_FHU.js";import{S as a,a as l,b as r,c as n,d as t,e as s,f as d}from"./select-sjxvdKkR.js";import"./index-BKlBQwGM.js";import"./index--M6JEWVJ.js";import"./jsx-runtime-DiklIkkE.js";import"./index-Bms3GI6n.js";import"./index-dhUvqgLm.js";import"./index-CCoC3Sqw.js";import"./index-BrKBBPft.js";import"./index-D3luWQOW.js";import"./index-DmmVIJtj.js";import"./index-Bv5-5eGk.js";import"./index-D1Rwxldo.js";import"./index-Iz9Zo_Nw.js";import"./index-BKFqAqpN.js";import"./utils-BQHNewu7.js";import"./chevron-down-CqCF4uWS.js";import"./createLucideIcon-CfeEeys9.js";import"./check-BRxH6xXv.js";import"./chevron-up-C7cuxkgF.js";const v=["value","defaultValue","onValueChange","disabled","required","name","open","onOpenChange","defaultOpen"],le={title:"UI/Select",component:a,parameters:{layout:"centered",controls:{include:v},docs:{description:{component:"### 주요 props (Select 루트)\n\n- **value** — 제어: 선택된 항목 `value`.\n- **defaultValue** — 비제어: 초기 값.\n- **onValueChange** — 값 변경 콜백.\n- **disabled** / **required** — 비활성·필수.\n- **name** — 폼 `name`.\n- **open** / **defaultOpen** / **onOpenChange** — 드롭다운 열림 제어.\n\n트리거·목록은 `SelectTrigger`, `SelectContent`, `SelectItem` 등으로 구성합니다."},controls:{include:v}}},tags:["autodocs"],argTypes:{value:{control:"text",description:"제어: 선택 value"},defaultValue:{control:"text",description:"비제어: 초기 value"},onValueChange:{control:!1,description:"값 변경 콜백"},disabled:{control:"boolean",description:"비활성"},required:{control:"boolean",description:"필수"},name:{control:"text",description:"폼 name"},open:{control:"boolean",description:"제어: 드롭다운 열림"},defaultOpen:{control:"boolean",description:"비제어: 초기 열림"},onOpenChange:{control:!1,description:"열림 변경 콜백"}}},c={render:()=>e.createElement(a,null,e.createElement(l,{className:"w-[180px]"},e.createElement(r,{placeholder:"Select a fruit"})),e.createElement(n,null,e.createElement(t,{value:"apple"},"Apple"),e.createElement(t,{value:"banana"},"Banana"),e.createElement(t,{value:"orange"},"Orange"),e.createElement(t,{value:"grape"},"Grape"),e.createElement(t,{value:"mango"},"Mango")))},m={name:"필수(required)",render:()=>e.createElement(a,{required:!0,name:"fruit"},e.createElement(l,{className:"w-[180px]","aria-label":"과일 선택"},e.createElement(r,{placeholder:"과일을 선택하세요"})),e.createElement(n,null,e.createElement(t,{value:"apple"},"Apple"),e.createElement(t,{value:"banana"},"Banana"),e.createElement(t,{value:"orange"},"Orange")))},o={render:()=>e.createElement(a,null,e.createElement(l,{className:"w-[200px]"},e.createElement(r,{placeholder:"Select timezone"})),e.createElement(n,null,e.createElement(s,null,e.createElement(d,null,"North America"),e.createElement(t,{value:"est"},"Eastern Standard Time (EST)"),e.createElement(t,{value:"cst"},"Central Standard Time (CST)"),e.createElement(t,{value:"mst"},"Mountain Standard Time (MST)"),e.createElement(t,{value:"pst"},"Pacific Standard Time (PST)")),e.createElement(s,null,e.createElement(d,null,"Europe & Africa"),e.createElement(t,{value:"gmt"},"Greenwich Mean Time (GMT)"),e.createElement(t,{value:"cet"},"Central European Time (CET)"),e.createElement(t,{value:"eet"},"Eastern European Time (EET)")),e.createElement(s,null,e.createElement(d,null,"Asia"),e.createElement(t,{value:"jst"},"Japan Standard Time (JST)"),e.createElement(t,{value:"kst"},"Korea Standard Time (KST)"),e.createElement(t,{value:"ist"},"India Standard Time (IST)"))))},u={render:()=>e.createElement(a,{disabled:!0},e.createElement(l,{className:"w-[180px]"},e.createElement(r,{placeholder:"Select a fruit"})),e.createElement(n,null,e.createElement(t,{value:"apple"},"Apple"),e.createElement(t,{value:"banana"},"Banana")))},S={render:()=>e.createElement(a,{defaultValue:"banana"},e.createElement(l,{className:"w-[180px]"},e.createElement(r,{placeholder:"Select a fruit"})),e.createElement(n,null,e.createElement(t,{value:"apple"},"Apple"),e.createElement(t,{value:"banana"},"Banana"),e.createElement(t,{value:"orange"},"Orange")))},i={render:()=>e.createElement(a,null,e.createElement(l,{className:"w-[200px]"},e.createElement(r,{placeholder:"Select a country"})),e.createElement(n,null,e.createElement(t,{value:"us"},"United States"),e.createElement(t,{value:"uk"},"United Kingdom"),e.createElement(t,{value:"ca"},"Canada"),e.createElement(t,{value:"au"},"Australia"),e.createElement(t,{value:"de"},"Germany"),e.createElement(t,{value:"fr"},"France"),e.createElement(t,{value:"es"},"Spain"),e.createElement(t,{value:"it"},"Italy"),e.createElement(t,{value:"jp"},"Japan"),e.createElement(t,{value:"kr"},"South Korea"),e.createElement(t,{value:"cn"},"China"),e.createElement(t,{value:"in"},"India"),e.createElement(t,{value:"br"},"Brazil"),e.createElement(t,{value:"mx"},"Mexico"),e.createElement(t,{value:"ar"},"Argentina")))},p={render:()=>e.createElement("div",{className:"w-[300px] space-y-4"},e.createElement("div",null,e.createElement("label",{className:"text-sm font-medium mb-2 block"},"Favorite Language"),e.createElement(a,{defaultValue:"typescript"},e.createElement(l,null,e.createElement(r,null)),e.createElement(n,null,e.createElement(t,{value:"javascript"},"JavaScript"),e.createElement(t,{value:"typescript"},"TypeScript"),e.createElement(t,{value:"python"},"Python"),e.createElement(t,{value:"java"},"Java"),e.createElement(t,{value:"go"},"Go")))),e.createElement("div",null,e.createElement("label",{className:"text-sm font-medium mb-2 block"},"Experience Level"),e.createElement(a,null,e.createElement(l,null,e.createElement(r,{placeholder:"Select level"})),e.createElement(n,null,e.createElement(t,{value:"beginner"},"Beginner"),e.createElement(t,{value:"intermediate"},"Intermediate"),e.createElement(t,{value:"advanced"},"Advanced"),e.createElement(t,{value:"expert"},"Expert")))))};var E,I,g;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Select>\r
      <SelectTrigger className="w-[180px]">\r
        <SelectValue placeholder="Select a fruit" />\r
      </SelectTrigger>\r
      <SelectContent>\r
        <SelectItem value="apple">Apple</SelectItem>\r
        <SelectItem value="banana">Banana</SelectItem>\r
        <SelectItem value="orange">Orange</SelectItem>\r
        <SelectItem value="grape">Grape</SelectItem>\r
        <SelectItem value="mango">Mango</SelectItem>\r
      </SelectContent>\r
    </Select>
}`,...(g=(I=c.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var T,b,f;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "필수(required)",
  render: () => <Select required name="fruit">\r
      <SelectTrigger className="w-[180px]" aria-label="과일 선택">\r
        <SelectValue placeholder="과일을 선택하세요" />\r
      </SelectTrigger>\r
      <SelectContent>\r
        <SelectItem value="apple">Apple</SelectItem>\r
        <SelectItem value="banana">Banana</SelectItem>\r
        <SelectItem value="orange">Orange</SelectItem>\r
      </SelectContent>\r
    </Select>
}`,...(f=(b=m.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,h,x;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Select>\r
      <SelectTrigger className="w-[200px]">\r
        <SelectValue placeholder="Select timezone" />\r
      </SelectTrigger>\r
      <SelectContent>\r
        <SelectGroup>\r
          <SelectLabel>North America</SelectLabel>\r
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>\r
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>\r
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>\r
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>\r
        </SelectGroup>\r
        <SelectGroup>\r
          <SelectLabel>Europe & Africa</SelectLabel>\r
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>\r
          <SelectItem value="cet">Central European Time (CET)</SelectItem>\r
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>\r
        </SelectGroup>\r
        <SelectGroup>\r
          <SelectLabel>Asia</SelectLabel>\r
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>\r
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>\r
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>\r
        </SelectGroup>\r
      </SelectContent>\r
    </Select>
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var V,y,A;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Select disabled>\r
      <SelectTrigger className="w-[180px]">\r
        <SelectValue placeholder="Select a fruit" />\r
      </SelectTrigger>\r
      <SelectContent>\r
        <SelectItem value="apple">Apple</SelectItem>\r
        <SelectItem value="banana">Banana</SelectItem>\r
      </SelectContent>\r
    </Select>
}`,...(A=(y=u.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var N,G,w;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Select defaultValue="banana">\r
      <SelectTrigger className="w-[180px]">\r
        <SelectValue placeholder="Select a fruit" />\r
      </SelectTrigger>\r
      <SelectContent>\r
        <SelectItem value="apple">Apple</SelectItem>\r
        <SelectItem value="banana">Banana</SelectItem>\r
        <SelectItem value="orange">Orange</SelectItem>\r
      </SelectContent>\r
    </Select>
}`,...(w=(G=S.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var L,O,B;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Select>\r
      <SelectTrigger className="w-[200px]">\r
        <SelectValue placeholder="Select a country" />\r
      </SelectTrigger>\r
      <SelectContent>\r
        <SelectItem value="us">United States</SelectItem>\r
        <SelectItem value="uk">United Kingdom</SelectItem>\r
        <SelectItem value="ca">Canada</SelectItem>\r
        <SelectItem value="au">Australia</SelectItem>\r
        <SelectItem value="de">Germany</SelectItem>\r
        <SelectItem value="fr">France</SelectItem>\r
        <SelectItem value="es">Spain</SelectItem>\r
        <SelectItem value="it">Italy</SelectItem>\r
        <SelectItem value="jp">Japan</SelectItem>\r
        <SelectItem value="kr">South Korea</SelectItem>\r
        <SelectItem value="cn">China</SelectItem>\r
        <SelectItem value="in">India</SelectItem>\r
        <SelectItem value="br">Brazil</SelectItem>\r
        <SelectItem value="mx">Mexico</SelectItem>\r
        <SelectItem value="ar">Argentina</SelectItem>\r
      </SelectContent>\r
    </Select>
}`,...(B=(O=i.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var M,k,J;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-4">\r
      <div>\r
        <label className="text-sm font-medium mb-2 block">Favorite Language</label>\r
        <Select defaultValue="typescript">\r
          <SelectTrigger>\r
            <SelectValue />\r
          </SelectTrigger>\r
          <SelectContent>\r
            <SelectItem value="javascript">JavaScript</SelectItem>\r
            <SelectItem value="typescript">TypeScript</SelectItem>\r
            <SelectItem value="python">Python</SelectItem>\r
            <SelectItem value="java">Java</SelectItem>\r
            <SelectItem value="go">Go</SelectItem>\r
          </SelectContent>\r
        </Select>\r
      </div>\r
      <div>\r
        <label className="text-sm font-medium mb-2 block">Experience Level</label>\r
        <Select>\r
          <SelectTrigger>\r
            <SelectValue placeholder="Select level" />\r
          </SelectTrigger>\r
          <SelectContent>\r
            <SelectItem value="beginner">Beginner</SelectItem>\r
            <SelectItem value="intermediate">Intermediate</SelectItem>\r
            <SelectItem value="advanced">Advanced</SelectItem>\r
            <SelectItem value="expert">Expert</SelectItem>\r
          </SelectContent>\r
        </Select>\r
      </div>\r
    </div>
}`,...(J=(k=p.parameters)==null?void 0:k.docs)==null?void 0:J.source}}};const re=["Default","Required","WithGroups","Disabled","WithDefaultValue","LongList","FormExample"];export{c as Default,u as Disabled,p as FormExample,i as LongList,m as Required,S as WithDefaultValue,o as WithGroups,re as __namedExportsOrder,le as default};
