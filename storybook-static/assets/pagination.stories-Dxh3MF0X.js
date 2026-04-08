import{r as a,R as e}from"./index-DRjF_FHU.js";import{I as k}from"./icon-BAFjukc-.js";import{c as l}from"./utils-BQHNewu7.js";import{b as J}from"./button-BDfZ15N9.js";import{c as K}from"./createLucideIcon-CfeEeys9.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-D1SQP9Z-.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],X=K("ellipsis",Q),g=({className:n,...t})=>a.createElement("nav",{role:"navigation","aria-label":"pagination",className:l("mx-auto flex w-full justify-center",n),...t});g.displayName="Pagination";const h=a.forwardRef(({className:n,...t},o)=>a.createElement("ul",{ref:o,className:l("flex flex-row flex-wrap items-center justify-center gap-1 sm:gap-2",n),...t}));h.displayName="PaginationContent";const i=a.forwardRef(({className:n,...t},o)=>a.createElement("li",{ref:o,className:l("",n),...t}));i.displayName="PaginationItem";const c=({className:n,isActive:t,size:o="icon",...u})=>a.createElement("a",{"aria-current":t?"page":void 0,className:l(J({variant:"ghost",size:o}),"relative rounded-none border-0 bg-transparent pb-[3px] shadow-none","text-xs text-gray-6 sm:text-sm","[&_svg]:shrink-0 [&_svg]:text-current","hover:font-bold hover:bg-transparent hover:text-point-2","after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:content-[''] after:opacity-0 after:transition-[opacity,background-color]","active:text-point-1 active:after:bg-point-1 active:after:opacity-100","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-point-2/40","aria-disabled:pointer-events-none aria-disabled:bg-point-3 aria-disabled:text-point-3 aria-disabled:shadow-none",t&&"font-bold text-point-1 after:bg-point-1 after:opacity-100 hover:text-point-2",n),...u});c.displayName="PaginationLink";const y=({className:n,...t})=>a.createElement(c,{"aria-label":"Go to first page",size:"default",className:l("gap-1 pl-2.5",n),...t},a.createElement(k,{name:"keyboard_tab",size:20,className:"text-current","aria-hidden":!0}),a.createElement("span",null,"처음"));y.displayName="PaginationFirst";const I=({className:n,...t})=>a.createElement(c,{"aria-label":"Go to previous page",size:"default",className:l("gap-1 pl-2.5",n),...t},a.createElement(k,{name:"arrow_right_alt",size:20,className:"text-current","aria-hidden":!0}),a.createElement("span",{className:"hidden"},"이전"));I.displayName="PaginationPrevious";const N=({className:n,...t})=>a.createElement(c,{"aria-label":"Go to next page",size:"default",className:l("gap-1 pr-2.5",n),...t},a.createElement("span",{className:"hidden"},"다음"),a.createElement(k,{name:"arrow_right_alt",size:20,className:"-scale-x-100 text-current","aria-hidden":!0}));N.displayName="PaginationNext";const v=({className:n,...t})=>a.createElement(c,{"aria-label":"Go to last page",size:"default",className:l("gap-1 pr-2.5",n),...t},a.createElement("span",null,"끝"),a.createElement(k,{name:"keyboard_tab",size:20,className:"-scale-x-100 text-current","aria-hidden":!0}));v.displayName="PaginationLast";const L=({className:n,...t})=>a.createElement("span",{"aria-hidden":!0,className:l("flex h-9 w-9 items-center justify-center",n),...t},a.createElement(X,{className:"h-4 w-4"}),a.createElement("span",{className:"sr-only"},"More pages"));L.displayName="PaginationEllipsis";function Y(n,t,o=2,u=10){if(t<1)return[];if(t<=u)return Array.from({length:t},(r,m)=>({type:"page",page:m+1}));const p=new Set;p.add(1),p.add(t);for(let r=n-o;r<=n+o;r++)r>=1&&r<=t&&p.add(r);const x=[...p].sort((r,m)=>r-m),f=[];let d=0;for(const r of x)d&&r-d>1&&f.push({type:"ellipsis",key:`gap-${d}-${r}`}),f.push({type:"page",page:r}),d=r;return f}function D({page:n,totalPages:t,getPageHref:o,delta:u=2,maxAllPages:p=10,showFirstLast:x=!0,className:f,contentClassName:d}){if(t<1)return null;const r=Y(n,t,u,p),m=n<=1,w=n<=1,C=n>=t,z=n>=t;return a.createElement(g,{className:f},a.createElement(h,{className:l("flex-wrap justify-center",d)},x?a.createElement(i,null,a.createElement(y,{href:o(1),className:l(m&&"pointer-events-none opacity-50"),"aria-disabled":m,onClick:s=>m&&s.preventDefault()})):null,a.createElement(i,null,a.createElement(I,{href:o(Math.max(1,n-1)),className:l(w&&"pointer-events-none opacity-50"),"aria-disabled":w,onClick:s=>w&&s.preventDefault()})),r.map(s=>s.type==="ellipsis"?a.createElement(i,{key:s.key},a.createElement(L,null)):a.createElement(i,{key:s.page},a.createElement(c,{href:o(s.page),isActive:s.page===n},s.page))),a.createElement(i,null,a.createElement(N,{href:o(Math.min(t,n+1)),className:l(C&&"pointer-events-none opacity-50"),"aria-disabled":C,onClick:s=>C&&s.preventDefault()})),x?a.createElement(i,null,a.createElement(v,{href:o(t),className:l(z&&"pointer-events-none opacity-50"),"aria-disabled":z,onClick:s=>z&&s.preventDefault()})):null))}g.__docgenInfo={description:"",methods:[],displayName:"Pagination"};h.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};c.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};i.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};y.__docgenInfo={description:"",methods:[],displayName:"PaginationFirst"};I.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};N.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};v.__docgenInfo={description:"",methods:[],displayName:"PaginationLast"};L.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};D.__docgenInfo={description:"",methods:[],displayName:"PaginationBar",props:{delta:{defaultValue:{value:"2",computed:!1},required:!1},maxAllPages:{defaultValue:{value:"10",computed:!1},required:!1},showFirstLast:{defaultValue:{value:"true",computed:!1},required:!1}}};const le={title:"UI/Pagination",component:g,parameters:{layout:"centered"},tags:["autodocs"]},b={render:()=>e.createElement(g,null,e.createElement(h,null,e.createElement(i,null,e.createElement(y,{href:"#"})),e.createElement(i,null,e.createElement(I,{href:"#"})),e.createElement(i,null,e.createElement(c,{href:"#"},"1")),e.createElement(i,null,e.createElement(c,{href:"#",isActive:!0},"2")),e.createElement(i,null,e.createElement(c,{href:"#"},"3")),e.createElement(i,null,e.createElement(N,{href:"#"})),e.createElement(i,null,e.createElement(v,{href:"#"}))))},_={render:()=>e.createElement(g,null,e.createElement(h,null,e.createElement(i,null,e.createElement(y,{href:"#"})),e.createElement(i,null,e.createElement(I,{href:"#"})),e.createElement(i,null,e.createElement(c,{href:"#"},"1")),e.createElement(i,null,e.createElement(c,{href:"#",isActive:!0},"2")),e.createElement(i,null,e.createElement(c,{href:"#"},"3")),e.createElement(i,null,e.createElement(L,null)),e.createElement(i,null,e.createElement(c,{href:"#"},"8")),e.createElement(i,null,e.createElement(N,{href:"#"})),e.createElement(i,null,e.createElement(v,{href:"#"}))))},P={render:()=>e.createElement(D,{page:5,totalPages:10,getPageHref:n=>`#page=${n}`})},E={render:()=>e.createElement(D,{page:6,totalPages:24,getPageHref:n=>`#page=${n}`})};var A,F,$;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
          <PaginationLink href="#" isActive>\r
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
}`,...($=(F=b.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var j,B,M;_.parameters={..._.parameters,docs:{...(j=_.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
          <PaginationLink href="#" isActive>\r
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
}`,...(M=(B=_.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var S,V,q,G,R;P.parameters={...P.parameters,docs:{...(S=P.parameters)==null?void 0:S.docs,source:{originalSource:"{\n  render: () => <PaginationBar page={5} totalPages={10} getPageHref={p => `#page=${p}`} />\n}",...(q=(V=P.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:"총 페이지가 10 이하이면 숫자를 1~10까지 모두 나열해도 됨.\r\n(실서비스에서는 `totalPages`에 따라 map으로 렌더)",...(R=(G=P.parameters)==null?void 0:G.docs)==null?void 0:R.description}}};var W,T,U,O,H;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:"{\n  render: () => <PaginationBar page={6} totalPages={24} getPageHref={p => `#page=${p}`} />\n}",...(U=(T=E.parameters)==null?void 0:T.docs)==null?void 0:U.source},description:{story:'총 페이지가 10을 넘으면 숫자를 전부 안 보여 주고,\r\n앞·뒤 + 중간 일부 + …(ellipsis) + First/Previous/Next/Last 로 "창"을 옮기는 패턴이 일반적.\r\n앱에서는 아래 `PaginationBar` 한 줄로 동일한 UI를 쓰면 됨.',...(H=(O=E.parameters)==null?void 0:O.docs)==null?void 0:H.description}}};const ce=["Default","WithEllipsis","TenPages","ManyPagesWindowed"];export{b as Default,E as ManyPagesWindowed,P as TenPages,_ as WithEllipsis,ce as __namedExportsOrder,le as default};
