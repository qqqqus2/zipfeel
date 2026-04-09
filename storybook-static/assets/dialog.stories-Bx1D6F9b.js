import{r as t,R as e}from"./index-DRjF_FHU.js";import{B as l}from"./button-BDfZ15N9.js";import{R as B,T as R,P as k,C as x,a as H,b as T,D as b,O as _}from"./index-LyVLzyoq.js";import{c as r}from"./utils-BQHNewu7.js";import{X as I}from"./x-BuCBQyXB.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-D1SQP9Z-.js";import"./index--M6JEWVJ.js";import"./index-BKlBQwGM.js";import"./index-DmmVIJtj.js";import"./index-CCoC3Sqw.js";import"./index-BrKBBPft.js";import"./index-D3luWQOW.js";import"./index-od4dH0T8.js";import"./createLucideIcon-CfeEeys9.js";const u=B,O=R,F=k,f=t.forwardRef(({className:a,...o},n)=>t.createElement(_,{ref:n,className:r("fixed inset-0 z-50 bg-black/60  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...o}));f.displayName=_.displayName;const c=t.forwardRef(({className:a,children:o,...n},w)=>t.createElement(F,null,t.createElement(f,null),t.createElement(x,{ref:w,className:r("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...n},o,t.createElement(H,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},t.createElement(I,{className:"h-4 w-4"}),t.createElement("span",{className:"sr-only"},"Close")))));c.displayName=x.displayName;const d=({className:a,...o})=>t.createElement("div",{className:r("flex flex-col space-y-1.5 text-center sm:text-left",a),...o});d.displayName="DialogHeader";const m=({className:a,...o})=>t.createElement("div",{className:r("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...o});m.displayName="DialogFooter";const p=t.forwardRef(({className:a,...o},n)=>t.createElement(T,{ref:n,className:r("text-lg font-semibold leading-none tracking-tight",a),...o}));p.displayName=T.displayName;const g=t.forwardRef(({className:a,...o},n)=>t.createElement(b,{ref:n,className:r("text-sm text-muted-foreground",a),...o}));g.displayName=b.displayName;f.__docgenInfo={description:"",methods:[]};c.__docgenInfo={description:"",methods:[]};d.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};m.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};p.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[]};const D=["open","onOpenChange","defaultOpen","modal"],Z={title:"UI/Dialog",component:u,parameters:{layout:"centered",controls:{include:D},docs:{description:{component:"### 주요 props (Dialog 루트)\n\n- **open** — 제어 모드에서 열림 여부.\n- **defaultOpen** — 비제어 모드 초기 열림.\n- **onOpenChange** — 열림 상태 변경 시 콜백.\n- **modal** — `true`면 포커스 트랩·배경 스크롤 차단 등 모달 동작.\n\n본문·트리거는 `DialogTrigger`, `DialogContent`, `DialogHeader` 등 조합으로 구성합니다."},controls:{include:D}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"제어: 열림 여부"},defaultOpen:{control:"boolean",description:"비제어: 초기 열림"},onOpenChange:{control:!1,description:"열림 상태 변경 시 콜백"},modal:{control:"boolean",description:"true면 모달(포커스 트랩·외부 스크롤 차단)"}}},i={render:()=>e.createElement(u,null,e.createElement(O,{asChild:!0},e.createElement(l,{variant:"outline"},"Open dialog")),e.createElement(c,null,e.createElement(d,null,e.createElement(p,null,"Edit profile"),e.createElement(g,null,"Make changes to your profile here. Click save when you're done.")),e.createElement(m,null,e.createElement(l,{type:"submit"},"Save changes"))))},s={render:()=>e.createElement(u,null,e.createElement(O,{asChild:!0},e.createElement(l,{variant:"outline"},"Delete account")),e.createElement(c,null,e.createElement(d,null,e.createElement(p,null,"Are you sure?"),e.createElement(g,null,"This action cannot be undone. This will permanently delete your account and remove your data from our servers.")),e.createElement(m,{className:"gap-2 sm:gap-0"},e.createElement(l,{variant:"outline"},"Cancel"),e.createElement(l,{variant:"destructive"},"Continue"))))};var y,E,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(E=i.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var v,C,N;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(N=(C=s.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const $=["Default","WithActions"];export{i as Default,s as WithActions,$ as __namedExportsOrder,Z as default};
