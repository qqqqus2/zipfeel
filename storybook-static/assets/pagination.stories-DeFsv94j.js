import{j as n}from"./jsx-runtime-DiklIkkE.js";import{r as N}from"./index-DRjF_FHU.js";import{c as r}from"./utils-BQHNewu7.js";import{b as k}from"./button-BPg3QrVw.js";import{c as P}from"./createLucideIcon-CfeEeys9.js";import"./index-DGwXhxKC.js";import"./index-Bms3GI6n.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],v=P("chevron-left",_);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],w=P("chevron-right",L);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],C=P("ellipsis",E),s=({className:e,...i})=>n.jsx("nav",{role:"navigation","aria-label":"pagination",className:r("mx-auto flex w-full justify-center",e),...i});s.displayName="Pagination";const d=N.forwardRef(({className:e,...i},o)=>n.jsx("ul",{ref:o,className:r("flex flex-row items-center gap-1",e),...i}));d.displayName="PaginationContent";const a=N.forwardRef(({className:e,...i},o)=>n.jsx("li",{ref:o,className:r("",e),...i}));a.displayName="PaginationItem";const t=({className:e,isActive:i,size:o="icon",...y})=>n.jsx("a",{"aria-current":i?"page":void 0,className:r(k({variant:i?"outline":"ghost",size:o}),e),...y});t.displayName="PaginationLink";const g=({className:e,...i})=>n.jsxs(t,{"aria-label":"Go to previous page",size:"default",className:r("gap-1 pl-2.5",e),...i,children:[n.jsx(v,{className:"h-4 w-4"}),n.jsx("span",{children:"Previous"})]});g.displayName="PaginationPrevious";const m=({className:e,...i})=>n.jsxs(t,{"aria-label":"Go to next page",size:"default",className:r("gap-1 pr-2.5",e),...i,children:[n.jsx("span",{children:"Next"}),n.jsx(w,{className:"h-4 w-4"})]});m.displayName="PaginationNext";const h=({className:e,...i})=>n.jsxs("span",{"aria-hidden":!0,className:r("flex h-9 w-9 items-center justify-center",e),...i,children:[n.jsx(C,{className:"h-4 w-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]});h.displayName="PaginationEllipsis";s.__docgenInfo={description:"",methods:[],displayName:"Pagination"};d.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};a.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};g.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};m.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};h.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};const S={title:"UI/Pagination",component:s,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>n.jsx(s,{children:n.jsxs(d,{children:[n.jsx(a,{children:n.jsx(g,{href:"#"})}),n.jsx(a,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(a,{children:n.jsx(t,{href:"#",isActive:!0,children:"2"})}),n.jsx(a,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(a,{children:n.jsx(m,{href:"#"})})]})})},l={render:()=>n.jsx(s,{children:n.jsxs(d,{children:[n.jsx(a,{children:n.jsx(g,{href:"#"})}),n.jsx(a,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(a,{children:n.jsx(t,{href:"#",isActive:!0,children:"2"})}),n.jsx(a,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(a,{children:n.jsx(h,{})}),n.jsx(a,{children:n.jsx(t,{href:"#",children:"8"})}),n.jsx(a,{children:n.jsx(m,{href:"#"})})]})})};var p,x,f;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var j,u,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(u=l.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};const V=["Default","WithEllipsis"];export{c as Default,l as WithEllipsis,V as __namedExportsOrder,S as default};
