import{r as n,R as e}from"./index-DRjF_FHU.js";import{c as o}from"./utils-BQHNewu7.js";import{b as _}from"./button-CCn41eiX.js";import{c as d}from"./createLucideIcon-CfeEeys9.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-D1SQP9Z-.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],L=d("chevron-left",v);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],w=d("chevron-right",x);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],b=d("ellipsis",C),s=({className:i,...a})=>n.createElement("nav",{role:"navigation","aria-label":"pagination",className:o("mx-auto flex w-full justify-center",i),...a});s.displayName="Pagination";const g=n.forwardRef(({className:i,...a},l)=>n.createElement("ul",{ref:l,className:o("flex flex-row items-center gap-1",i),...a}));g.displayName="PaginationContent";const t=n.forwardRef(({className:i,...a},l)=>n.createElement("li",{ref:l,className:o("",i),...a}));t.displayName="PaginationItem";const r=({className:i,isActive:a,size:l="icon",...k})=>n.createElement("a",{"aria-current":a?"page":void 0,className:o(_({variant:a?"outline":"ghost",size:l}),i),...k});r.displayName="PaginationLink";const P=({className:i,...a})=>n.createElement(r,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 pl-2.5",i),...a},n.createElement(L,{className:"h-4 w-4"}),n.createElement("span",null,"Previous"));P.displayName="PaginationPrevious";const p=({className:i,...a})=>n.createElement(r,{"aria-label":"Go to next page",size:"default",className:o("gap-1 pr-2.5",i),...a},n.createElement("span",null,"Next"),n.createElement(w,{className:"h-4 w-4"}));p.displayName="PaginationNext";const f=({className:i,...a})=>n.createElement("span",{"aria-hidden":!0,className:o("flex h-9 w-9 items-center justify-center",i),...a},n.createElement(b,{className:"h-4 w-4"}),n.createElement("span",{className:"sr-only"},"More pages"));f.displayName="PaginationEllipsis";s.__docgenInfo={description:"",methods:[],displayName:"Pagination"};g.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};r.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};t.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};P.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};p.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};f.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};const V={title:"UI/Pagination",component:s,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>e.createElement(s,null,e.createElement(g,null,e.createElement(t,null,e.createElement(P,{href:"#"})),e.createElement(t,null,e.createElement(r,{href:"#"},"1")),e.createElement(t,null,e.createElement(r,{href:"#",isActive:!0},"2")),e.createElement(t,null,e.createElement(r,{href:"#"},"3")),e.createElement(t,null,e.createElement(p,{href:"#"}))))},m={render:()=>e.createElement(s,null,e.createElement(g,null,e.createElement(t,null,e.createElement(P,{href:"#"})),e.createElement(t,null,e.createElement(r,{href:"#"},"1")),e.createElement(t,null,e.createElement(r,{href:"#",isActive:!0},"2")),e.createElement(t,null,e.createElement(r,{href:"#"},"3")),e.createElement(t,null,e.createElement(f,null)),e.createElement(t,null,e.createElement(r,{href:"#"},"8")),e.createElement(t,null,e.createElement(p,{href:"#"}))))};var u,E,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
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
      </PaginationContent>\r
    </Pagination>
}`,...(h=(E=c.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var I,N,y;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Pagination>\r
      <PaginationContent>\r
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
      </PaginationContent>\r
    </Pagination>
}`,...(y=(N=m.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};const W=["Default","WithEllipsis"];export{c as Default,m as WithEllipsis,W as __namedExportsOrder,V as default};
