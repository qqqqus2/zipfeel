import{I as e}from"./input-BjRrX8n3.js";import"./index-DRjF_FHU.js";import"./utils-BQHNewu7.js";const d=["type","placeholder","disabled","required","readOnly"],k={title:"UI/Input",component:e,parameters:{layout:"centered",controls:{include:d},docs:{description:{component:"### 주요 props\n\n- **type** — `text`, `email`, `password`, `number`, `tel`, `url` 등 네이티브 input 타입.\n- **placeholder** — 입력 힌트 문구.\n- **disabled** — 포커스·입력 불가.\n- **required** — 폼 제출 시 브라우저·접근성 힌트용 필수 여부.\n- **readOnly** — 값은 보이지만 수정 불가.\n\n접두·접미 라벨 등 확장 props는 `input.jsx`·스토리 예시를 참고하세요."},controls:{include:d}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url"],description:"input type"},placeholder:{control:"text",description:"placeholder"},disabled:{control:"boolean",description:"비활성"},required:{control:"boolean",description:"필수 입력(폼 검증 힌트)"},readOnly:{control:"boolean",description:"읽기 전용"}}},r={args:{placeholder:"Enter text..."}},a={args:{type:"email",placeholder:"email@example.com"}},t={args:{type:"password",placeholder:"Enter password"}},l={args:{placeholder:"Disabled input",disabled:!0}},s={args:{defaultValue:"Hello World"}},o={render:()=>React.createElement("div",{className:"flex flex-col gap-4 w-80"},React.createElement(e,{type:"text",placeholder:"Text input"}),React.createElement(e,{type:"email",placeholder:"email@example.com"}),React.createElement(e,{type:"password",placeholder:"Password"}),React.createElement(e,{type:"number",placeholder:"Number"}),React.createElement(e,{type:"tel",placeholder:"Phone number"}),React.createElement(e,{type:"url",placeholder:"https://example.com"}),React.createElement(e,{placeholder:"Disabled",disabled:!0}))},c={name:"접두 텍스트(prefixLabel)",render:()=>React.createElement("div",{className:"w-80"},React.createElement(e,{prefixLabel:"항목명",placeholder:"입력하세요"}))},n={name:"접미 텍스트(suffixLabel)",render:()=>React.createElement("div",{className:"w-80"},React.createElement(e,{suffixLabel:"항목명",placeholder:"입력하세요"}))},p={name:"접두·접미 텍스트",render:()=>React.createElement("div",{className:"w-80"},React.createElement(e,{prefixLabel:"항목명",suffixLabel:"항목명",placeholder:"입력하세요"}))};var i,m,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text..."
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,x,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "email@example.com"
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,y,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter password"
  }
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var E,w,L;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled input",
    disabled: true
  }
}`,...(L=(w=l.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var I,R,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello World"
  }
}`,...(S=(R=s.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var P,v,N;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">\r
      <Input type="text" placeholder="Text input" />\r
      <Input type="email" placeholder="email@example.com" />\r
      <Input type="password" placeholder="Password" />\r
      <Input type="number" placeholder="Number" />\r
      <Input type="tel" placeholder="Phone number" />\r
      <Input type="url" placeholder="https://example.com" />\r
      <Input placeholder="Disabled" disabled />\r
    </div>
}`,...(N=(v=o.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var W,D,O;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "접두 텍스트(prefixLabel)",
  render: () => <div className="w-80">\r
      <Input prefixLabel="항목명" placeholder="입력하세요" />\r
    </div>
}`,...(O=(D=c.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var T,A,V;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "접미 텍스트(suffixLabel)",
  render: () => <div className="w-80">\r
      <Input suffixLabel="항목명" placeholder="입력하세요" />\r
    </div>
}`,...(V=(A=n.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var _,q,H;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "접두·접미 텍스트",
  render: () => <div className="w-80">\r
      <Input prefixLabel="항목명" suffixLabel="항목명" placeholder="입력하세요" />\r
    </div>
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const z=["Default","Email","Password","Disabled","WithValue","AllTypes","WithPrefixLabel","WithSuffixLabel","WithPrefixAndSuffix"];export{o as AllTypes,r as Default,l as Disabled,a as Email,t as Password,p as WithPrefixAndSuffix,c as WithPrefixLabel,n as WithSuffixLabel,s as WithValue,z as __namedExportsOrder,k as default};
