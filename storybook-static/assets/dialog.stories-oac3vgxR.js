import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as n}from"./button-BPg3QrVw.js";import{r as l}from"./index-DRjF_FHU.js";import{R as B,T as k,P as I,C as N,a as F,b as C,D as b,O as T}from"./index-qKq4CP-D.js";import{c as r}from"./utils-BQHNewu7.js";import{c as H}from"./createLucideIcon-CfeEeys9.js";import"./index-DGwXhxKC.js";import"./index-Bms3GI6n.js";import"./index-BtmGPRf8.js";import"./index-BKlBQwGM.js";import"./index-BbsOjWWI.js";import"./index-Impn2mNx.js";import"./index-8q2UQYpY.js";import"./index-DQDayTBB.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],O=H("x",R),u=B,_=k,E=I,f=l.forwardRef(({className:o,...a},t)=>e.jsx(T,{ref:t,className:r("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",o),...a}));f.displayName=T.displayName;const d=l.forwardRef(({className:o,children:a,...t},w)=>e.jsxs(E,{children:[e.jsx(f,{}),e.jsxs(N,{ref:w,className:r("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",o),...t,children:[a,e.jsxs(F,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[e.jsx(O,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));d.displayName=N.displayName;const c=({className:o,...a})=>e.jsx("div",{className:r("flex flex-col space-y-1.5 text-center sm:text-left",o),...a});c.displayName="DialogHeader";const g=({className:o,...a})=>e.jsx("div",{className:r("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",o),...a});g.displayName="DialogFooter";const m=l.forwardRef(({className:o,...a},t)=>e.jsx(C,{ref:t,className:r("text-lg font-semibold leading-none tracking-tight",o),...a}));m.displayName=C.displayName;const p=l.forwardRef(({className:o,...a},t)=>e.jsx(b,{ref:t,className:r("text-sm text-muted-foreground",o),...a}));p.displayName=b.displayName;f.__docgenInfo={description:"",methods:[]};d.__docgenInfo={description:"",methods:[]};c.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};g.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};m.__docgenInfo={description:"",methods:[]};p.__docgenInfo={description:"",methods:[]};const V={title:"UI/Dialog",component:u,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(u,{children:[e.jsx(_,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Open dialog"})}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(m,{children:"Edit profile"}),e.jsx(p,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsx(g,{children:e.jsx(n,{type:"submit",children:"Save changes"})})]})]})},i={render:()=>e.jsxs(u,{children:[e.jsx(_,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Delete account"})}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(m,{children:"Are you sure?"}),e.jsx(p,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(g,{className:"gap-2 sm:gap-0",children:[e.jsx(n,{variant:"outline",children:"Cancel"}),e.jsx(n,{variant:"destructive",children:"Continue"})]})]})]})};var h,D,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Dialog>\r
      <DialogTrigger asChild>\r
        <Button variant="outline">Open dialog</Button>\r
      </DialogTrigger>\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>Edit profile</DialogTitle>\r
          <DialogDescription>\r
            Make changes to your profile here. Click save when you&apos;re done.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <DialogFooter>\r
          <Button type="submit">Save changes</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...(x=(D=s.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var y,j,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Dialog>\r
      <DialogTrigger asChild>\r
        <Button variant="outline">Delete account</Button>\r
      </DialogTrigger>\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>Are you sure?</DialogTitle>\r
          <DialogDescription>\r
            This action cannot be undone. This will permanently delete your\r
            account and remove your data from our servers.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <DialogFooter className="gap-2 sm:gap-0">\r
          <Button variant="outline">Cancel</Button>\r
          <Button variant="destructive">Continue</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const Y=["Default","WithActions"];export{s as Default,i as WithActions,Y as __namedExportsOrder,V as default};
