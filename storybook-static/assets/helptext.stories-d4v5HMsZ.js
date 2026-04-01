import{r as a,R as l}from"./index-DRjF_FHU.js";import{c as j}from"./utils-BQHNewu7.js";import{c as p}from"./createLucideIcon-CfeEeys9.js";import{I as B}from"./info-B03a6rtT.js";import{I as O}from"./icon-BAFjukc-.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],F=p("circle-alert",U);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],J=p("circle-check-big",G);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],P=p("lightbulb",K),u={default:{Icon:B,className:"text-gray-6"},positive:{Icon:J,className:"text-point-2"},negative:{Icon:F,className:"text-sub-1"},info:{Icon:P,className:"text-sub-8"}},e=a.forwardRef(({variant:R="default",icon:m,children:$,className:q,...z},D)=>{const d=u[R]||u.default,V=d.Icon;return a.createElement("div",{ref:D,className:j("flex items-center gap-2 text-sm",d.className,q),...z},m===null?null:m||a.createElement(V,{className:"h-4 w-4 shrink-0"}),a.createElement("span",{className:"min-w-0"},$))});e.displayName="HelpText";e.__docgenInfo={description:"",methods:[],displayName:"HelpText",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const ae={title:"UI/HelpText",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","positive","negative","info"]},children:{control:"text"},icon:{control:!1,description:"아이콘을 직접 주입하거나(icon={<.../>}) 숨기려면 icon={null}을 사용하세요."}}},t={args:{variant:"default",children:"도움말 텍스트입니다."}},r={args:{variant:"positive",children:"성공적으로 저장되었습니다."}},n={args:{variant:"negative",children:"필수 값을 입력해 주세요."}},s={args:{variant:"info",children:"입력 예시를 참고해 주세요."}},c={name:"아이콘 없음",args:{variant:"default",icon:null,children:"아이콘을 숨긴 HelpText입니다."}},o={name:"커스텀 아이콘",args:{variant:"negative",icon:l.createElement(O,{name:"tooltip",className:"text-sub-1"}),children:"스프라이트 아이콘을 주입한 예시입니다."}},i={name:"긴 문장",render:()=>l.createElement("div",{className:"w-[min(100%,520px)] space-y-3"},l.createElement(e,{variant:"default"},"길이가 긴 문장도 함께 사용할 수 있습니다. 필요하다면 줄바꿈/정렬을 고려해 컨테이너 폭을 조절해 주세요."),l.createElement(e,{variant:"negative"},"오류 메시지는 가능한 한 짧고 명확하게 작성하는 것이 좋습니다."))};var g,v,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "default",
    children: "도움말 텍스트입니다."
  }
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,x,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    children: "성공적으로 저장되었습니다."
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var I,N,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "negative",
    children: "필수 값을 입력해 주세요."
  }
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var k,b,H;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "info",
    children: "입력 예시를 참고해 주세요."
  }
}`,...(H=(b=s.parameters)==null?void 0:b.docs)==null?void 0:H.source}}};var _,E,S;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "아이콘 없음",
  args: {
    variant: "default",
    icon: null,
    children: "아이콘을 숨긴 HelpText입니다."
  }
}`,...(S=(E=c.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var w,C,L;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "커스텀 아이콘",
  args: {
    variant: "negative",
    icon: <Icon name="tooltip" className="text-sub-1" />,
    children: "스프라이트 아이콘을 주입한 예시입니다."
  }
}`,...(L=(C=o.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var M,W,A;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(W=i.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const te=["Default","Positive","Negative","Info","WithoutIcon","CustomIcon","WithLongText"];export{o as CustomIcon,t as Default,s as Info,n as Negative,r as Positive,i as WithLongText,c as WithoutIcon,te as __namedExportsOrder,ae as default};
