import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as l}from"./index-DRjF_FHU.js";import{c as xe,a as fe}from"./index-BtmGPRf8.js";import{u as Y}from"./index-Bms3GI6n.js";import{R as je,T as ve,c as K,P as ye,W as Ce,C as Ne,b as we,D as _e,a as U,O as Se}from"./index-qKq4CP-D.js";import{c as n}from"./utils-BQHNewu7.js";import{b as J,B as f}from"./button-BPg3QrVw.js";import{I as Te}from"./input-jsi5Dy_U.js";import{L as Q}from"./label-Pe4rug27.js";import{S as be,a as Re,b as Ee,c as Pe,d as T}from"./select-CZRH6fW1.js";import"./index-BKlBQwGM.js";import"./index-BbsOjWWI.js";import"./index-Impn2mNx.js";import"./index-8q2UQYpY.js";import"./index-DQDayTBB.js";import"./index-DGwXhxKC.js";import"./index-B4iTqdRC.js";import"./index-FhqXlugo.js";import"./index-BK8PFAvS.js";import"./index-Iz9Zo_Nw.js";import"./index-B3EBHZRZ.js";import"./createLucideIcon-CfeEeys9.js";import"./check-BRxH6xXv.js";var Ie=Symbol("radix.slottable");function Oe(t){const r=({children:a})=>e.jsx(e.Fragment,{children:a});return r.displayName=`${t}.Slottable`,r.__radixId=Ie,r}var X="AlertDialog",[Fe]=fe(X,[K]),i=K(),Z=t=>{const{__scopeAlertDialog:r,...a}=t,o=i(r);return e.jsx(je,{...o,...a,modal:!0})};Z.displayName=X;var $e="AlertDialogTrigger",ee=l.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...o}=t,s=i(a);return e.jsx(ve,{...s,...o,ref:r})});ee.displayName=$e;var We="AlertDialogPortal",re=t=>{const{__scopeAlertDialog:r,...a}=t,o=i(r);return e.jsx(ye,{...o,...a})};re.displayName=We;var Be="AlertDialogOverlay",te=l.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...o}=t,s=i(a);return e.jsx(Se,{...s,...o,ref:r})});te.displayName=Be;var h="AlertDialogContent",[He,Me]=Fe(h),Le=Oe("AlertDialogContent"),ae=l.forwardRef((t,r)=>{const{__scopeAlertDialog:a,children:o,...s}=t,S=i(a),v=l.useRef(null),De=Y(r,v),R=l.useRef(null);return e.jsx(Ce,{contentName:h,titleName:oe,docsSlug:"alert-dialog",children:e.jsx(He,{scope:a,cancelRef:R,children:e.jsxs(Ne,{role:"alertdialog",...S,...s,ref:De,onOpenAutoFocus:xe(s.onOpenAutoFocus,x=>{var E;x.preventDefault(),(E=R.current)==null||E.focus({preventScroll:!0})}),onPointerDownOutside:x=>x.preventDefault(),onInteractOutside:x=>x.preventDefault(),children:[e.jsx(Le,{children:o}),e.jsx(ke,{contentRef:v})]})})})});ae.displayName=h;var oe="AlertDialogTitle",le=l.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...o}=t,s=i(a);return e.jsx(we,{...s,...o,ref:r})});le.displayName=oe;var se="AlertDialogDescription",ie=l.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...o}=t,s=i(a);return e.jsx(_e,{...s,...o,ref:r})});ie.displayName=se;var Ge="AlertDialogAction",ne=l.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...o}=t,s=i(a);return e.jsx(U,{...s,...o,ref:r})});ne.displayName=Ge;var ce="AlertDialogCancel",de=l.forwardRef((t,r)=>{const{__scopeAlertDialog:a,...o}=t,{cancelRef:s}=Me(ce,a),S=i(a),v=Y(r,s);return e.jsx(U,{...S,...o,ref:v})});de.displayName=ce;var ke=({contentRef:t})=>{const r=`\`${h}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${h}\` by passing a \`${se}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${h}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return l.useEffect(()=>{var o;document.getElementById((o=t.current)==null?void 0:o.getAttribute("aria-describedby"))||console.warn(r)},[r,t]),null},qe=Z,ze=ee,Ve=re,ge=te,pe=ae,me=ne,ue=de,he=le,Ae=ie;const A=qe,j=ze,Ye=Ve,b=l.forwardRef(({className:t,...r},a)=>e.jsx(ge,{className:n("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...r,ref:a}));b.displayName=ge.displayName;const c=l.forwardRef(({className:t,...r},a)=>e.jsxs(Ye,{children:[e.jsx(b,{}),e.jsx(pe,{ref:a,className:n("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...r})]}));c.displayName=pe.displayName;const d=({className:t,...r})=>e.jsx("div",{className:n("flex flex-col space-y-2 text-center sm:text-left",t),...r});d.displayName="AlertDialogHeader";const g=({className:t,...r})=>e.jsx("div",{className:n("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r});g.displayName="AlertDialogFooter";const p=l.forwardRef(({className:t,...r},a)=>e.jsx(he,{ref:a,className:n("text-lg font-semibold",t),...r}));p.displayName=he.displayName;const m=l.forwardRef(({className:t,...r},a)=>e.jsx(Ae,{ref:a,className:n("text-sm text-muted-foreground",t),...r}));m.displayName=Ae.displayName;const u=l.forwardRef(({className:t,...r},a)=>e.jsx(me,{ref:a,className:n(J(),t),...r}));u.displayName=me.displayName;const D=l.forwardRef(({className:t,...r},a)=>e.jsx(ue,{ref:a,className:n(J({variant:"outline"}),"mt-2 sm:mt-0",t),...r}));D.displayName=ue.displayName;b.__docgenInfo={description:"",methods:[]};c.__docgenInfo={description:"",methods:[]};d.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};g.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};p.__docgenInfo={description:"",methods:[]};m.__docgenInfo={description:"",methods:[]};u.__docgenInfo={description:"",methods:[]};D.__docgenInfo={description:"",methods:[]};const fr={title:"UI/AlertDialog",component:A,parameters:{layout:"centered"},tags:["autodocs"]},y={render:()=>e.jsxs(A,{children:[e.jsx(j,{asChild:!0,children:e.jsx(f,{variant:"outline",children:"Change language"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"Change the language?"}),e.jsx(m,{children:"The app will restart with the new language. You can change it again in settings."})]}),e.jsxs(g,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(u,{children:"OK"})]})]})]})},C={render:()=>e.jsxs(A,{children:[e.jsx(j,{asChild:!0,children:e.jsx(f,{variant:"outline",children:"Delete account"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"Delete your account?"}),e.jsx(m,{children:"This cannot be undone. All your data will be permanently removed."})]}),e.jsxs(g,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(u,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Delete"})]})]})]})},N={render:()=>e.jsxs(A,{children:[e.jsx(j,{asChild:!0,children:e.jsx(f,{variant:"outline",children:"Show alert"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"Fill in all required fields"}),e.jsx(m,{children:"Some information is missing. Please complete the form and try again."})]}),e.jsx(g,{children:e.jsx(u,{className:"sm:ml-auto",children:"Got it"})})]})]})};function Ke(){const[t,r]=l.useState("");return e.jsxs(A,{children:[e.jsx(j,{asChild:!0,children:e.jsx(f,{variant:"outline",children:"Confirm with password"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"Enter your password"}),e.jsx(m,{children:"This action requires verification. Type your password to continue."})]}),e.jsxs("div",{className:"grid gap-2 py-1",children:[e.jsx(Q,{htmlFor:"alert-dialog-password",children:"Password"}),e.jsx(Te,{id:"alert-dialog-password",type:"password",autoComplete:"current-password",value:t,onChange:a=>r(a.target.value)})]}),e.jsxs(g,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(u,{disabled:!t.trim(),children:"Confirm"})]})]})]})}const w={render:()=>e.jsx(Ke,{})};function Ue(){return e.jsxs(A,{children:[e.jsx(j,{asChild:!0,children:e.jsx(f,{variant:"outline",children:"Choose reason"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"Report this content"}),e.jsx(m,{children:"Select a reason. We will review your report."})]}),e.jsxs("div",{className:"grid gap-2 py-1",children:[e.jsx(Q,{htmlFor:"alert-dialog-reason",children:"Reason"}),e.jsxs(be,{defaultValue:"spam",children:[e.jsx(Re,{id:"alert-dialog-reason",className:"w-full",children:e.jsx(Ee,{placeholder:"Select a reason"})}),e.jsxs(Pe,{children:[e.jsx(T,{value:"spam",children:"Spam"}),e.jsx(T,{value:"abuse",children:"Abuse"}),e.jsx(T,{value:"other",children:"Other"})]})]})]}),e.jsxs(g,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(u,{children:"Submit"})]})]})]})}const _={render:()=>e.jsx(Ue,{})};var P,I,O;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">Change language</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Change the language?</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            The app will restart with the new language. You can change it again\r
            in settings.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>Cancel</AlertDialogCancel>\r
          <AlertDialogAction>OK</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...(O=(I=y.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var F,$,W;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">Delete account</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Delete your account?</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            This cannot be undone. All your data will be permanently removed.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>Cancel</AlertDialogCancel>\r
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">\r
            Delete\r
          </AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...(W=($=C.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var B,H,M;N.parameters={...N.parameters,docs:{...(B=N.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">Show alert</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Fill in all required fields</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            Some information is missing. Please complete the form and try again.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogAction className="sm:ml-auto">Got it</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...(M=(H=N.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var L,G,k;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <AlertDialogWithPasswordExample />
}`,...(k=(G=w.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var q,z,V;_.parameters={..._.parameters,docs:{...(q=_.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <AlertDialogWithSelectExample />
}`,...(V=(z=_.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};const jr=["ConfirmDefault","DestructiveConfirm","AcknowledgeOnly","WithPassword","WithSelect"];export{N as AcknowledgeOnly,y as ConfirmDefault,C as DestructiveConfirm,w as WithPassword,_ as WithSelect,jr as __namedExportsOrder,fr as default};
