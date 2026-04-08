import{r as a,R as l}from"./index-DRjF_FHU.js";import{c as j}from"./utils-BQHNewu7.js";import{c as m}from"./createLucideIcon-CfeEeys9.js";import{I as u}from"./info-B03a6rtT.js";import{I as B}from"./icon-BAFjukc-.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],X=m("circle-alert",U);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],G=m("circle-check-big",F);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],K=m("lightbulb",J),v={default:{Icon:u,className:"text-gray-6"},primary:{Icon:u,className:"text-point-2"},positive:{Icon:G,className:"text-point-2"},negative:{Icon:X,className:"text-sub-1"},info:{Icon:K,className:"text-sub-8"}},e=a.forwardRef(({variant:O="default",icon:p,children:P,className:$,...q},z)=>{const d=v[O]||v.default,V=d.Icon;return a.createElement("div",{ref:z,className:j("flex items-center gap-2 text-sm",d.className,$),...q},p===null?null:p||a.createElement(V,{className:"h-4 w-4 shrink-0"}),a.createElement("span",{className:"min-w-0"},P))});e.displayName="HelpText";e.__docgenInfo={description:"",methods:[],displayName:"HelpText",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const g=["variant","children","icon"],te={title:"UI/HelpText",component:e,parameters:{layout:"centered",controls:{include:g},docs:{description:{component:"### 주요 props\n\n- **variant** — `default`, `primary`, `positive`, `negative`, `info` 등 톤·아이콘 기본값.\n- **children** — 본문 설명 텍스트.\n- **icon** — 아이콘 노드 직접 전달 또는 `null`로 기본 아이콘 숨김."},controls:{include:g}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","positive","negative","info"],description:"색·아이콘 톤"},children:{control:"text",description:"본문 텍스트"},icon:{control:!1,description:"아이콘을 직접 주입하거나(icon={<.../>}) 숨기려면 icon={null}을 사용하세요."}}},t={args:{variant:"default",children:"도움말 텍스트입니다."}},n={args:{variant:"positive",children:"성공적으로 저장되었습니다."}},r={args:{variant:"negative",children:"필수 값을 입력해 주세요."}},s={args:{variant:"info",children:"입력 예시를 참고해 주세요."}},c={name:"아이콘 없음",args:{variant:"default",icon:null,children:"아이콘을 숨긴 HelpText입니다."}},o={name:"커스텀 아이콘",args:{variant:"negative",icon:l.createElement(B,{name:"tooltip",className:"text-sub-1"}),children:"스프라이트 아이콘을 주입한 예시입니다."}},i={name:"긴 문장",render:()=>l.createElement("div",{className:"w-[min(100%,520px)] space-y-3"},l.createElement(e,{variant:"default"},"길이가 긴 문장도 함께 사용할 수 있습니다. 필요하다면 줄바꿈/정렬을 고려해 컨테이너 폭을 조절해 주세요."),l.createElement(e,{variant:"negative"},"오류 메시지는 가능한 한 짧고 명확하게 작성하는 것이 좋습니다."))};var f,h,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "default",
    children: "도움말 텍스트입니다."
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,I,N;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    children: "성공적으로 저장되었습니다."
  }
}`,...(N=(I=n.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var T,k,_;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "negative",
    children: "필수 값을 입력해 주세요."
  }
}`,...(_=(k=r.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var E,H,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "입력 예시를 참고해 주세요."
  }
}`,...(b=(H=s.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var S,w,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "아이콘 없음",
  args: {
    variant: "default",
    icon: null,
    children: "아이콘을 숨긴 HelpText입니다."
  }
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var L,M,R;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "커스텀 아이콘",
  args: {
    variant: "negative",
    icon: <Icon name="tooltip" className="text-sub-1" />,
    children: "스프라이트 아이콘을 주입한 예시입니다."
  }
}`,...(R=(M=o.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var W,A,D;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "긴 문장",
  render: () => <div className="w-[min(100%,520px)] space-y-3">\r
      <HelpText variant="default">\r
        길이가 긴 문장도 함께 사용할 수 있습니다. 필요하다면 줄바꿈/정렬을\r
        고려해 컨테이너 폭을 조절해 주세요.\r
      </HelpText>\r
      <HelpText variant="negative">\r
        오류 메시지는 가능한 한 짧고 명확하게 작성하는 것이 좋습니다.\r
      </HelpText>\r
    </div>
}`,...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const ne=["Default","Positive","Negative","Info","WithoutIcon","CustomIcon","WithLongText"];export{o as CustomIcon,t as Default,s as Info,r as Negative,n as Positive,i as WithLongText,c as WithoutIcon,ne as __namedExportsOrder,te as default};
