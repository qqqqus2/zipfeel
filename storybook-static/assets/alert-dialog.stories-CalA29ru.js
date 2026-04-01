import{r as l,R as e}from"./index-DRjF_FHU.js";import{c as ve,a as he}from"./index-BtmGPRf8.js";import{u as K}from"./index-Bms3GI6n.js";import{R as ye,T as Ce,c as U,P as Ne,W as we,C as xe,b as _e,D as Se,a as J,O as Te}from"./index-qKq4CP-D.js";import{j as n}from"./jsx-runtime-DiklIkkE.js";import{c}from"./utils-BQHNewu7.js";import{b as Q,B as h}from"./button-CCn41eiX.js";import{I as be}from"./input-D3tGSS6G.js";import{L as X}from"./label-D8BzrfBB.js";import{S as Re,a as Pe,b as Ie,c as Oe,d as b}from"./select-sXqodPH_.js";import"./index-BKlBQwGM.js";import"./index-BbsOjWWI.js";import"./index-Impn2mNx.js";import"./index-8q2UQYpY.js";import"./index-DQDayTBB.js";import"./index-oDCx3a8o.js";import"./index-D1SQP9Z-.js";import"./index-B4iTqdRC.js";import"./index-FhqXlugo.js";import"./index-BK8PFAvS.js";import"./index-Iz9Zo_Nw.js";import"./index-B3EBHZRZ.js";import"./chevron-down-CqCF4uWS.js";import"./createLucideIcon-CfeEeys9.js";import"./check-BRxH6xXv.js";var Fe=Symbol("radix.slottable");function je(r){const t=({children:a})=>n.jsx(n.Fragment,{children:a});return t.displayName=`${r}.Slottable`,t.__radixId=Fe,t}var Z="AlertDialog",[$e]=he(Z,[U]),s=U(),ee=r=>{const{__scopeAlertDialog:t,...a}=r,o=s(t);return n.jsx(ye,{...o,...a,modal:!0})};ee.displayName=Z;var We="AlertDialogTrigger",te=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...o}=r,i=s(a);return n.jsx(Ce,{...i,...o,ref:t})});te.displayName=We;var Be="AlertDialogPortal",re=r=>{const{__scopeAlertDialog:t,...a}=r,o=s(t);return n.jsx(Ne,{...o,...a})};re.displayName=Be;var He="AlertDialogOverlay",ae=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...o}=r,i=s(a);return n.jsx(Te,{...i,...o,ref:t})});ae.displayName=He;var D="AlertDialogContent",[Me,Le]=$e(D),Ge=je("AlertDialogContent"),le=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,children:o,...i}=r,T=s(a),C=l.useRef(null),Ee=K(t,C),P=l.useRef(null);return n.jsx(we,{contentName:D,titleName:oe,docsSlug:"alert-dialog",children:n.jsx(Me,{scope:a,cancelRef:P,children:n.jsxs(xe,{role:"alertdialog",...T,...i,ref:Ee,onOpenAutoFocus:ve(i.onOpenAutoFocus,v=>{var I;v.preventDefault(),(I=P.current)==null||I.focus({preventScroll:!0})}),onPointerDownOutside:v=>v.preventDefault(),onInteractOutside:v=>v.preventDefault(),children:[n.jsx(Ge,{children:o}),n.jsx(qe,{contentRef:C})]})})})});le.displayName=D;var oe="AlertDialogTitle",ne=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...o}=r,i=s(a);return n.jsx(_e,{...i,...o,ref:t})});ne.displayName=oe;var ie="AlertDialogDescription",se=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...o}=r,i=s(a);return n.jsx(Se,{...i,...o,ref:t})});se.displayName=ie;var ke="AlertDialogAction",ce=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...o}=r,i=s(a);return n.jsx(J,{...i,...o,ref:t})});ce.displayName=ke;var de="AlertDialogCancel",me=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...o}=r,{cancelRef:i}=Le(de,a),T=s(a),C=K(t,i);return n.jsx(J,{...T,...o,ref:C})});me.displayName=de;var qe=({contentRef:r})=>{const t=`\`${D}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${D}\` by passing a \`${ie}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${D}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return l.useEffect(()=>{var o;document.getElementById((o=r.current)==null?void 0:o.getAttribute("aria-describedby"))||console.warn(t)},[t,r]),null},ze=ee,Ve=te,Ye=re,ge=ae,ue=le,pe=ce,Ae=me,De=ne,fe=se;const f=ze,y=Ve,Ke=Ye,R=l.forwardRef(({className:r,...t},a)=>l.createElement(ge,{className:c("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...t,ref:a}));R.displayName=ge.displayName;const d=l.forwardRef(({className:r,...t},a)=>l.createElement(Ke,null,l.createElement(R,null),l.createElement(ue,{ref:a,className:c("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...t})));d.displayName=ue.displayName;const m=({className:r,...t})=>l.createElement("div",{className:c("flex flex-col space-y-2 text-center sm:text-left",r),...t});m.displayName="AlertDialogHeader";const g=({className:r,...t})=>l.createElement("div",{className:c("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",r),...t});g.displayName="AlertDialogFooter";const u=l.forwardRef(({className:r,...t},a)=>l.createElement(De,{ref:a,className:c("text-lg font-semibold",r),...t}));u.displayName=De.displayName;const p=l.forwardRef(({className:r,...t},a)=>l.createElement(fe,{ref:a,className:c("text-sm text-muted-foreground",r),...t}));p.displayName=fe.displayName;const A=l.forwardRef(({className:r,...t},a)=>l.createElement(pe,{ref:a,className:c(Q(),r),...t}));A.displayName=pe.displayName;const E=l.forwardRef(({className:r,...t},a)=>l.createElement(Ae,{ref:a,className:c(Q({variant:"outline"}),"mt-2 sm:mt-0",r),...t}));E.displayName=Ae.displayName;R.__docgenInfo={description:"",methods:[]};d.__docgenInfo={description:"",methods:[]};m.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};g.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};u.__docgenInfo={description:"",methods:[]};p.__docgenInfo={description:"",methods:[]};A.__docgenInfo={description:"",methods:[]};E.__docgenInfo={description:"",methods:[]};const Ct={title:"UI/AlertDialog",component:f,parameters:{layout:"centered"},tags:["autodocs"]},N={render:()=>e.createElement(f,null,e.createElement(y,{asChild:!0},e.createElement(h,{variant:"outline"},"Change language")),e.createElement(d,null,e.createElement(m,null,e.createElement(u,null,"Change the language?"),e.createElement(p,null,"The app will restart with the new language. You can change it again in settings.")),e.createElement(g,null,e.createElement(E,null,"Cancel"),e.createElement(A,null,"OK"))))},w={render:()=>e.createElement(f,null,e.createElement(y,{asChild:!0},e.createElement(h,{variant:"outline"},"Delete account")),e.createElement(d,null,e.createElement(m,null,e.createElement(u,null,"Delete your account?"),e.createElement(p,null,"This cannot be undone. All your data will be permanently removed.")),e.createElement(g,null,e.createElement(E,null,"Cancel"),e.createElement(A,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90"},"Delete"))))},x={render:()=>e.createElement(f,null,e.createElement(y,{asChild:!0},e.createElement(h,{variant:"outline"},"Show alert")),e.createElement(d,null,e.createElement(m,null,e.createElement(u,null,"Fill in all required fields"),e.createElement(p,null,"Some information is missing. Please complete the form and try again.")),e.createElement(g,null,e.createElement(A,{className:"sm:ml-auto"},"Got it"))))};function Ue(){const[r,t]=l.useState("");return e.createElement(f,null,e.createElement(y,{asChild:!0},e.createElement(h,{variant:"outline"},"Confirm with password")),e.createElement(d,null,e.createElement(m,null,e.createElement(u,null,"Enter your password"),e.createElement(p,null,"This action requires verification. Type your password to continue.")),e.createElement("div",{className:"grid gap-2 py-1"},e.createElement(X,{htmlFor:"alert-dialog-password"},"Password"),e.createElement(be,{id:"alert-dialog-password",type:"password",autoComplete:"current-password",value:r,onChange:a=>t(a.target.value)})),e.createElement(g,null,e.createElement(E,null,"Cancel"),e.createElement(A,{disabled:!r.trim()},"Confirm"))))}const _={render:()=>e.createElement(Ue,null)};function Je(){return e.createElement(f,null,e.createElement(y,{asChild:!0},e.createElement(h,{variant:"outline"},"Choose reason")),e.createElement(d,null,e.createElement(m,null,e.createElement(u,null,"Report this content"),e.createElement(p,null,"Select a reason. We will review your report.")),e.createElement("div",{className:"grid gap-2 py-1"},e.createElement(X,{htmlFor:"alert-dialog-reason"},"Reason"),e.createElement(Re,{defaultValue:"spam"},e.createElement(Pe,{id:"alert-dialog-reason",className:"w-full"},e.createElement(Ie,{placeholder:"Select a reason"})),e.createElement(Oe,null,e.createElement(b,{value:"spam"},"Spam"),e.createElement(b,{value:"abuse"},"Abuse"),e.createElement(b,{value:"other"},"Other")))),e.createElement(g,null,e.createElement(E,null,"Cancel"),e.createElement(A,null,"Submit"))))}const S={render:()=>e.createElement(Je,null)};var O,F,j;N.parameters={...N.parameters,docs:{...(O=N.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(F=N.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var $,W,B;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(B=(W=w.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var H,M,L;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(M=x.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var G,k,q;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <AlertDialogWithPasswordExample />
}`,...(q=(k=_.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,V,Y;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <AlertDialogWithSelectExample />
}`,...(Y=(V=S.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};const Nt=["ConfirmDefault","DestructiveConfirm","AcknowledgeOnly","WithPassword","WithSelect"];export{x as AcknowledgeOnly,N as ConfirmDefault,w as DestructiveConfirm,_ as WithPassword,S as WithSelect,Nt as __namedExportsOrder,Ct as default};
