import{r as n,R as e}from"./index-DRjF_FHU.js";import{I as k}from"./icon-BAFjukc-.js";import{c as l}from"./utils-BQHNewu7.js";import{b as K}from"./button-BDfZ15N9.js";import{c as Q}from"./createLucideIcon-CfeEeys9.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-D1SQP9Z-.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Y=Q("ellipsis",X),g=({className:a,...t})=>n.createElement("nav",{role:"navigation","aria-label":"pagination",className:l("mx-auto flex w-full justify-center",a),...t});g.displayName="Pagination";const h=n.forwardRef(({className:a,...t},o)=>n.createElement("ul",{ref:o,className:l("flex flex-row flex-wrap items-center justify-center gap-1 sm:gap-2",a),...t}));h.displayName="PaginationContent";const i=n.forwardRef(({className:a,...t},o)=>n.createElement("li",{ref:o,className:l("",a),...t}));i.displayName="PaginationItem";const c=({className:a,isActive:t,size:o="icon",...u})=>n.createElement("a",{"aria-current":t?"page":void 0,className:l(K({variant:"ghost",size:o}),"relative rounded-none border-0 bg-transparent pb-[3px] shadow-none","text-xs text-gray-6 sm:text-sm","[&_svg]:shrink-0 [&_svg]:text-current","hover:font-bold hover:bg-transparent hover:text-point-2","after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:content-[''] after:opacity-0 after:transition-[opacity,background-color]","active:text-point-1 active:after:bg-point-1 active:after:opacity-100","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-point-2/40","aria-disabled:pointer-events-none aria-disabled:bg-point-3 aria-disabled:text-point-3 aria-disabled:shadow-none",t&&"font-bold text-point-1 after:bg-point-1 after:opacity-100 hover:text-point-2",a),...u});c.displayName="PaginationLink";const y=({className:a,...t})=>n.createElement(c,{"aria-label":"Go to first page",size:"default",className:l("gap-1 pl-2.5",a),...t},n.createElement(k,{name:"keyboard_tab",size:20,className:"text-current","aria-hidden":!0}),n.createElement("span",null,"처음"));y.displayName="PaginationFirst";const I=({className:a,...t})=>n.createElement(c,{"aria-label":"Go to previous page",size:"default",className:l("gap-1 pl-2.5",a),...t},n.createElement(k,{name:"arrow_right_alt",size:20,className:"text-current","aria-hidden":!0}),n.createElement("span",{className:"hidden"},"이전"));I.displayName="PaginationPrevious";const N=({className:a,...t})=>n.createElement(c,{"aria-label":"Go to next page",size:"default",className:l("gap-1 pr-2.5",a),...t},n.createElement("span",{className:"hidden"},"다음"),n.createElement(k,{name:"arrow_right_alt",size:20,className:"-scale-x-100 text-current","aria-hidden":!0}));N.displayName="PaginationNext";const v=({className:a,...t})=>n.createElement(c,{"aria-label":"Go to last page",size:"default",className:l("gap-1 pr-2.5",a),...t},n.createElement("span",null,"끝"),n.createElement(k,{name:"keyboard_tab",size:20,className:"-scale-x-100 text-current","aria-hidden":!0}));v.displayName="PaginationLast";const L=({className:a,...t})=>n.createElement("span",{"aria-hidden":!0,className:l("flex h-9 w-9 items-center justify-center",a),...t},n.createElement(Y,{className:"h-4 w-4"}),n.createElement("span",{className:"sr-only"},"More pages"));L.displayName="PaginationEllipsis";function Z(a,t,o=2,u=10){if(t<1)return[];if(t<=u)return Array.from({length:t},(r,m)=>({type:"page",page:m+1}));const p=new Set;p.add(1),p.add(t);for(let r=a-o;r<=a+o;r++)r>=1&&r<=t&&p.add(r);const x=[...p].sort((r,m)=>r-m),f=[];let d=0;for(const r of x)d&&r-d>1&&f.push({type:"ellipsis",key:`gap-${d}-${r}`}),f.push({type:"page",page:r}),d=r;return f}function z({page:a,totalPages:t,getPageHref:o,delta:u=2,maxAllPages:p=10,showFirstLast:x=!0,className:f,contentClassName:d}){if(t<1)return null;const r=Z(a,t,u,p),m=a<=1,w=a<=1,C=a>=t,D=a>=t;return n.createElement(g,{className:f},n.createElement(h,{className:l("flex-wrap justify-center",d)},x?n.createElement(i,null,n.createElement(y,{href:o(1),className:l(m&&"pointer-events-none opacity-50"),"aria-disabled":m,onClick:s=>m&&s.preventDefault()})):null,n.createElement(i,null,n.createElement(I,{href:o(Math.max(1,a-1)),className:l(w&&"pointer-events-none opacity-50"),"aria-disabled":w,onClick:s=>w&&s.preventDefault()})),r.map(s=>s.type==="ellipsis"?n.createElement(i,{key:s.key},n.createElement(L,null)):n.createElement(i,{key:s.page},n.createElement(c,{href:o(s.page),isActive:s.page===a},s.page))),n.createElement(i,null,n.createElement(N,{href:o(Math.min(t,a+1)),className:l(C&&"pointer-events-none opacity-50"),"aria-disabled":C,onClick:s=>C&&s.preventDefault()})),x?n.createElement(i,null,n.createElement(v,{href:o(t),className:l(D&&"pointer-events-none opacity-50"),"aria-disabled":D,onClick:s=>D&&s.preventDefault()})):null))}g.__docgenInfo={description:"",methods:[],displayName:"Pagination"};h.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};c.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};i.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};y.__docgenInfo={description:"",methods:[],displayName:"PaginationFirst"};I.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};N.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};v.__docgenInfo={description:"",methods:[],displayName:"PaginationLast"};L.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};z.__docgenInfo={description:"",methods:[],displayName:"PaginationBar",props:{delta:{defaultValue:{value:"2",computed:!1},required:!1},maxAllPages:{defaultValue:{value:"10",computed:!1},required:!1},showFirstLast:{defaultValue:{value:"true",computed:!1},required:!1}}};const A=["className"],ce={title:"UI/Pagination",component:g,parameters:{layout:"centered",controls:{include:A},docs:{description:{component:"### 주요 props\n\n- **className** — `<nav>` 루트에 붙는 Tailwind·추가 클래스.\n\n페이지 링크·이전/다음 등은 `PaginationContent`, `PaginationItem`, `PaginationLink`, `PaginationPrevious` 등 하위 컴포넌트로 조합합니다."},controls:{include:A}}},tags:["autodocs"],argTypes:{className:{control:"text",description:"루트 nav에 붙는 Tailwind·추가 클래스"}}},b={render:()=>e.createElement(g,null,e.createElement(h,null,e.createElement(i,null,e.createElement(y,{href:"#"})),e.createElement(i,null,e.createElement(I,{href:"#"})),e.createElement(i,null,e.createElement(c,{href:"#"},"1")),e.createElement(i,null,e.createElement(c,{href:"#",isActive:!0},"2")),e.createElement(i,null,e.createElement(c,{href:"#"},"3")),e.createElement(i,null,e.createElement(N,{href:"#"})),e.createElement(i,null,e.createElement(v,{href:"#"}))))},_={render:()=>e.createElement(g,null,e.createElement(h,null,e.createElement(i,null,e.createElement(y,{href:"#"})),e.createElement(i,null,e.createElement(I,{href:"#"})),e.createElement(i,null,e.createElement(c,{href:"#"},"1")),e.createElement(i,null,e.createElement(c,{href:"#",isActive:!0},"2")),e.createElement(i,null,e.createElement(c,{href:"#"},"3")),e.createElement(i,null,e.createElement(L,null)),e.createElement(i,null,e.createElement(c,{href:"#"},"8")),e.createElement(i,null,e.createElement(N,{href:"#"})),e.createElement(i,null,e.createElement(v,{href:"#"}))))},P={render:()=>e.createElement(z,{page:5,totalPages:10,getPageHref:a=>`#page=${a}`})},E={render:()=>e.createElement(z,{page:6,totalPages:24,getPageHref:a=>`#page=${a}`})};var F,S,T;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationFirst href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">1</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#" isActive={true}>\r
            2\r
          </PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">3</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLast href="#" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>
}`,...(T=(S=b.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var $,j,B;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
        <PaginationItem>\r
          <PaginationFirst href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationPrevious href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">1</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#" isActive={true}>\r
            2\r
          </PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">3</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationEllipsis />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLink href="#">8</PaginationLink>\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationNext href="#" />\r
        </PaginationItem>\r
        <PaginationItem>\r
          <PaginationLast href="#" />\r
        </PaginationItem>\r
      </PaginationContent>\r
    </Pagination>
}`,...(B=(j=_.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var G,M,R,V,q;P.parameters={...P.parameters,docs:{...(G=P.parameters)==null?void 0:G.docs,source:{originalSource:"{\n  render: () => <PaginationBar page={5} totalPages={10} getPageHref={p => `#page=${p}`} />\n}",...(R=(M=P.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"총 페이지가 10 이하이면 숫자를 1~10까지 모두 나열해도 됨.\r\n(실서비스에서는 `totalPages`에 따라 map으로 렌더)",...(q=(V=P.parameters)==null?void 0:V.docs)==null?void 0:q.description}}};var O,W,U,H,J;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:"{\n  render: () => <PaginationBar page={6} totalPages={24} getPageHref={p => `#page=${p}`} />\n}",...(U=(W=E.parameters)==null?void 0:W.docs)==null?void 0:U.source},description:{story:'총 페이지가 10을 넘으면 숫자를 전부 안 보여 주고,\r\n앞·뒤 + 중간 일부 + …(ellipsis) + First/Previous/Next/Last 로 "창"을 옮기는 패턴이 일반적.\r\n앱에서는 아래 `PaginationBar` 한 줄로 동일한 UI를 쓰면 됨.',...(J=(H=E.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};const me=["Default","WithEllipsis","TenPages","ManyPagesWindowed"];export{b as Default,E as ManyPagesWindowed,P as TenPages,_ as WithEllipsis,me as __namedExportsOrder,ce as default};
