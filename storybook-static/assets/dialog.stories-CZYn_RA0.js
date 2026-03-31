import{r as t,R as e}from"./index-DRjF_FHU.js";import{B as l}from"./button-CoOQMYwO.js";import{R as B,T as k,P as I,C as x,a as R,b as C,D as b,O as T}from"./index-qKq4CP-D.js";import{c as r}from"./utils-BQHNewu7.js";import{c as F}from"./createLucideIcon-CfeEeys9.js";import"./index-DGwXhxKC.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-BtmGPRf8.js";import"./index-BKlBQwGM.js";import"./index-BbsOjWWI.js";import"./index-Impn2mNx.js";import"./index-8q2UQYpY.js";import"./index-DQDayTBB.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],O=F("x",H),p=B,_=k,z=I,f=t.forwardRef(({className:a,...o},n)=>t.createElement(T,{ref:n,className:r("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...o}));f.displayName=T.displayName;const c=t.forwardRef(({className:a,children:o,...n},w)=>t.createElement(z,null,t.createElement(f,null),t.createElement(x,{ref:w,className:r("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...n},o,t.createElement(R,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},t.createElement(O,{className:"h-4 w-4"}),t.createElement("span",{className:"sr-only"},"Close")))));c.displayName=x.displayName;const d=({className:a,...o})=>t.createElement("div",{className:r("flex flex-col space-y-1.5 text-center sm:text-left",a),...o});d.displayName="DialogHeader";const m=({className:a,...o})=>t.createElement("div",{className:r("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...o});m.displayName="DialogFooter";const g=t.forwardRef(({className:a,...o},n)=>t.createElement(C,{ref:n,className:r("text-lg font-semibold leading-none tracking-tight",a),...o}));g.displayName=C.displayName;const u=t.forwardRef(({className:a,...o},n)=>t.createElement(b,{ref:n,className:r("text-sm text-muted-foreground",a),...o}));u.displayName=b.displayName;f.__docgenInfo={description:"",methods:[]};c.__docgenInfo={description:"",methods:[]};d.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};m.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};g.__docgenInfo={description:"",methods:[]};u.__docgenInfo={description:"",methods:[]};const V={title:"UI/Dialog",component:p,parameters:{layout:"centered"},tags:["autodocs"]},i={render:()=>e.createElement(p,null,e.createElement(_,{asChild:!0},e.createElement(l,{variant:"outline"},"Open dialog")),e.createElement(c,null,e.createElement(d,null,e.createElement(g,null,"Edit profile"),e.createElement(u,null,"Make changes to your profile here. Click save when you're done.")),e.createElement(m,null,e.createElement(l,{type:"submit"},"Save changes"))))},s={render:()=>e.createElement(p,null,e.createElement(_,{asChild:!0},e.createElement(l,{variant:"outline"},"Delete account")),e.createElement(c,null,e.createElement(d,null,e.createElement(g,null,"Are you sure?"),e.createElement(u,null,"This action cannot be undone. This will permanently delete your account and remove your data from our servers.")),e.createElement(m,{className:"gap-2 sm:gap-0"},e.createElement(l,{variant:"outline"},"Cancel"),e.createElement(l,{variant:"destructive"},"Continue"))))};var D,y,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var h,v,N;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(N=(v=s.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const Y=["Default","WithActions"];export{i as Default,s as WithActions,Y as __namedExportsOrder,V as default};
