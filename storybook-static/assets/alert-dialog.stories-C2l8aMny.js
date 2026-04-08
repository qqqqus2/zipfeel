import{r as l,R as e}from"./index-DRjF_FHU.js";import{c as Me,a as Ke}from"./index--M6JEWVJ.js";import{u as ye}from"./index-Bms3GI6n.js";import{R as Ye,T as Ge,c as xe,P as Xe,W as Ue,C as Je,a as Ne,b as Qe,D as Ze,O as et}from"./index-VeLskWc3.js";import{j as s}from"./jsx-runtime-DiklIkkE.js";import{c}from"./utils-BQHNewu7.js";import{b as y,B as h}from"./button-BDfZ15N9.js";import{X as tt}from"./x-BuCBQyXB.js";import{I as rt}from"./input-BjRrX8n3.js";import{L as be}from"./label-D8BzrfBB.js";import{S as at,a as lt,b as ot,c as nt,d as B}from"./select-DWSXqQwO.js";import"./index-BKlBQwGM.js";import"./index-BBUvKJIO.js";import"./index-BvuF3t5A.js";import"./index-Bgmx4rse.js";import"./index-od4dH0T8.js";import"./index-oDCx3a8o.js";import"./index-D1SQP9Z-.js";import"./createLucideIcon-CfeEeys9.js";import"./index-dhUvqgLm.js";import"./index-BrPKIHdt.js";import"./index-D1Rwxldo.js";import"./index-Iz9Zo_Nw.js";import"./index-BKFqAqpN.js";import"./chevron-down-CqCF4uWS.js";import"./check-BRxH6xXv.js";var it=Symbol("radix.slottable");function st(r){const t=({children:a})=>s.jsx(s.Fragment,{children:a});return t.displayName=`${r}.Slottable`,t.__radixId=it,t}var Se="AlertDialog",[ct]=Ke(Se,[xe]),f=xe(),_e=r=>{const{__scopeAlertDialog:t,...a}=r,o=f(t);return s.jsx(Ye,{...o,...a,modal:!0})};_e.displayName=Se;var ut="AlertDialogTrigger",Te=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...o}=r,n=f(a);return s.jsx(Ge,{...n,...o,ref:t})});Te.displayName=ut;var dt="AlertDialogPortal",Pe=r=>{const{__scopeAlertDialog:t,...a}=r,o=f(t);return s.jsx(Xe,{...o,...a})};Pe.displayName=dt;var mt="AlertDialogOverlay",Re=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...o}=r,n=f(a);return s.jsx(et,{...n,...o,ref:t})});Re.displayName=mt;var x="AlertDialogContent",[pt,gt]=ct(x),At=st("AlertDialogContent"),Oe=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,children:o,...n}=r,C=f(a),w=l.useRef(null),F=ye(t,w),R=l.useRef(null);return s.jsx(Ue,{contentName:x,titleName:je,docsSlug:"alert-dialog",children:s.jsx(pt,{scope:a,cancelRef:R,children:s.jsxs(Je,{role:"alertdialog",...C,...n,ref:F,onOpenAutoFocus:Me(n.onOpenAutoFocus,i=>{var k;i.preventDefault(),(k=R.current)==null||k.focus({preventScroll:!0})}),onPointerDownOutside:i=>i.preventDefault(),onInteractOutside:i=>i.preventDefault(),children:[s.jsx(At,{children:o}),s.jsx(Dt,{contentRef:w})]})})})});Oe.displayName=x;var je="AlertDialogTitle",Ie=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...o}=r,n=f(a);return s.jsx(Qe,{...n,...o,ref:t})});Ie.displayName=je;var Fe="AlertDialogDescription",Be=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...o}=r,n=f(a);return s.jsx(Ze,{...n,...o,ref:t})});Be.displayName=Fe;var ft="AlertDialogAction",He=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...o}=r,n=f(a);return s.jsx(Ne,{...n,...o,ref:t})});He.displayName=ft;var Ve="AlertDialogCancel",We=l.forwardRef((r,t)=>{const{__scopeAlertDialog:a,...o}=r,{cancelRef:n}=gt(Ve,a),C=f(a),w=ye(t,n);return s.jsx(Ne,{...C,...o,ref:w})});We.displayName=Ve;var Dt=({contentRef:r})=>{const t=`\`${x}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${x}\` by passing a \`${Fe}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${x}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return l.useEffect(()=>{var o;document.getElementById((o=r.current)==null?void 0:o.getAttribute("aria-describedby"))||console.warn(t)},[t,r]),null},ht=_e,Et=Te,vt=Pe,ke=Re,$e=Oe,ze=He,H=We,Le=Ie,qe=Be;const V=l.createContext({showCornerArt:!1}),Ct={warning:{iconSrc:"/icon/warning.svg",width:102,height:104,sizeClass:"w-[120px] h-[120px]",wrapperClass:"bottom-0 right-0 flex items-end justify-end",imgClass:"h-full w-full object-contain object-bottom object-right select-none"},confirmCheck:{iconSrc:"/icon/check_circle.svg",width:102,height:98,sizeClass:"w-[120px] h-auto",wrapperClass:"bottom-0 right-0 flex items-end justify-end",imgClass:"h-full w-full object-contain object-bottom object-right select-none"},confirmSupport:{iconSrc:"/icon/contact_support.svg",width:99,height:127,sizeClass:"w-[132px] h-[132px]",wrapperClass:"top-[40px] right-[-6px] flex items-end justify-end",imgClass:"h-full w-full object-contain object-bottom object-right select-none"}};function wt(r,t){return r==="confirm"?t==="contactSupport"?"confirmSupport":"confirmCheck":"warning"}const D=ht,E=Et,yt=vt,W=l.forwardRef(({className:r,...t},a)=>l.createElement(ke,{className:c("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...t,ref:a}));W.displayName=ke.displayName;const u=l.forwardRef(({className:r,children:t,showCloseButton:a=!0,showCornerArt:o=!0,cornerArtVariant:n="warning",confirmCornerGraphic:C="checkCircle",...w},F)=>{const R=wt(n,C),i=o?Ct[R]:null;return l.createElement(yt,null,l.createElement(W,null),l.createElement($e,{ref:F,className:c("relative fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xs translate-x-[-50%] translate-y-[-50%] gap-4 bg-background p-[20px] pt-10 shadow-lg duration-200","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95","data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2","data-[state=open]:slide-in-from-top-[48%] ",i&&"overflow-hidden",!a&&"pt-[20px]",r),...w},a?l.createElement(H,{asChild:!0},l.createElement("button",{type:"button",className:c("absolute right-[10px] top-[10px] z-20 flex justify-center items-center w-[24px] h-[24px] text-foreground ring-offset-background transition-opacity","hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"),"aria-label":"닫기"},l.createElement(tt,{className:"size-[24px]",strokeWidth:2}))):null,i!=null&&i.iconSrc?l.createElement("div",{className:c("pointer-events-none absolute z-0",i.sizeClass??"w-[120px] h-[120px]",i.wrapperClass),"aria-hidden":!0},l.createElement("img",{src:i.iconSrc,alt:"",className:i.imgClass,width:i.width,height:i.height,decoding:"async"})):null,l.createElement(V.Provider,{value:{showCornerArt:!!i}},l.createElement("div",{className:"relative z-10 contents"},t))))});u.displayName=$e.displayName;const d=({className:r,...t})=>{const{showCornerArt:a}=l.useContext(V);return l.createElement("div",{className:c("flex flex-col gap-4 space-y-2 text-center sm:text-left",a&&"sm:pr-[4rem]",r),...t})};d.displayName="AlertDialogHeader";const I=({className:r,...t})=>{const{showCornerArt:a}=l.useContext(V);return l.createElement("div",{className:c(a&&"sm:pr-[4rem]",r),...t})};I.displayName="AlertDialogBody";const m=({className:r,...t})=>l.createElement("div",{className:c("flex w-full flex-col-reverse z-10 gap-[10px] sm:flex-row sm:items-stretch sm:justify-start sm:gap-[10px]",r),...t});m.displayName="AlertDialogFooter";const p=l.forwardRef(({className:r,...t},a)=>l.createElement(Le,{ref:a,className:c("text-lg font-semibold",r),...t}));p.displayName=Le.displayName;const g=l.forwardRef(({className:r,...t},a)=>l.createElement(qe,{ref:a,className:c("text-sm text-muted-foreground sm:pr-[4rem]",r),...t}));g.displayName=qe.displayName;const A=l.forwardRef(({className:r,variant:t="fill",...a},o)=>{const n=t==="fill"||t==="default",C=t==="outline"||t==="destructiveOutline";return l.createElement(ze,{ref:o,className:c(t==="fill"&&y({variant:"point1"}),t==="outline"&&c(y({variant:"oulinePoint1"}),"shadow-sm"),t==="destructiveOutline"&&c(y({variant:"outline"}),"shadow-sm border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive"),t==="default"&&y(),"w-full min-w-0 justify-center",n&&"sm:flex-1",C&&"sm:w-auto sm:shrink-0 sm:flex-none",r),...a})});A.displayName=ze.displayName;const v=l.forwardRef(({className:r,variant:t="outline",...a},o)=>l.createElement(H,{ref:o,className:c(t==="outline"&&y({variant:"oulinePoint1"}),t==="default"&&c(y({variant:"outline"}),"mt-2 sm:mt-0 "),t==="outline"&&"m-0 shadow-sm","w-full min-w-0 justify-center sm:w-auto sm:shrink-0 sm:flex-none",r),...a}));v.displayName=H.displayName;W.__docgenInfo={description:"",methods:[]};u.__docgenInfo={description:"",methods:[],props:{showCloseButton:{defaultValue:{value:"true",computed:!1},required:!1},showCornerArt:{defaultValue:{value:"true",computed:!1},required:!1},cornerArtVariant:{defaultValue:{value:'"warning"',computed:!1},required:!1},confirmCornerGraphic:{defaultValue:{value:'"checkCircle"',computed:!1},required:!1}}};d.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};I.__docgenInfo={description:"헤더와 푸터 사이 입력·설명 등 — 코너와 겹칠 때 `AlertDialogHeader`와 동일 우측 패딩",methods:[],displayName:"AlertDialogBody"};m.__docgenInfo={description:"기본 알림은 `AlertDialogAction` outline 하나만 두는 패턴이 일반적입니다.",methods:[],displayName:"AlertDialogFooter"};p.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[]};A.__docgenInfo={description:"fill: point1 · outline: oulinePoint1 · destructiveOutline: 빨간 테두리(위험 확인) · default: shadcn 기본",methods:[],props:{variant:{defaultValue:{value:'"fill"',computed:!1},required:!1}}};v.__docgenInfo={description:"outline: oulinePoint1(기본) · default: shadcn 회색 outline",methods:[],props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1}}};const Qt={title:"UI/AlertDialog",component:D,parameters:{layout:"centered"},tags:["autodocs"]},N={render:()=>e.createElement(D,null,e.createElement(E,{asChild:!0},e.createElement(h,{variant:"outline"},"Open alert")),e.createElement(u,null,e.createElement(d,null,e.createElement(p,null,"Something went wrong"),e.createElement(g,null,"Please try again. If the problem continues, contact support.")),e.createElement(m,null,e.createElement(A,{variant:"outline"},"OK"))))},b={render:()=>e.createElement(D,null,e.createElement(E,{asChild:!0},e.createElement(h,{variant:"outline"},"Change language")),e.createElement(u,{cornerArtVariant:"confirm"},e.createElement(d,null,e.createElement(p,null,"Change the language?"),e.createElement(g,null,"The app will restart with the new language. You can change it again in settings.")),e.createElement(m,null,e.createElement(v,null,"Cancel"),e.createElement(A,null,"OK"))))},S={render:()=>e.createElement(D,null,e.createElement(E,{asChild:!0},e.createElement(h,{variant:"outline"},"Contact support")),e.createElement(u,{cornerArtVariant:"confirm",confirmCornerGraphic:"contactSupport"},e.createElement(d,null,e.createElement(p,null,"Need help?"),e.createElement(g,null,"You can reach our support team from the app settings. Continue to open the help center?")),e.createElement(m,null,e.createElement(v,null,"Cancel"),e.createElement(A,null,"Open"))))},_={render:()=>e.createElement(D,null,e.createElement(E,{asChild:!0},e.createElement(h,{variant:"outline"},"Delete account")),e.createElement(u,null,e.createElement(d,null,e.createElement(p,null,"Delete your account?"),e.createElement(g,null,"This cannot be undone. All your data will be permanently removed.")),e.createElement(m,null,e.createElement(v,null,"Cancel"),e.createElement(A,{variant:"destructiveOutline"},"Delete"))))},T={render:()=>e.createElement(D,null,e.createElement(E,{asChild:!0},e.createElement(h,{variant:"outline"},"필수 입력 알림")),e.createElement(u,null,e.createElement(d,null,e.createElement(p,{className:"text-left font-bold text-foreground"},"필수 입력 값을",e.createElement("br",null),"모두 입력해 주세요."),e.createElement(g,{className:"sr-only"},"필수 입력 항목을 모두 채운 뒤 다시 시도해 주세요.")),e.createElement(m,null,e.createElement(A,{variant:"outline"},"확인"))))};function xt(){const[r,t]=l.useState("");return e.createElement(D,null,e.createElement(E,{asChild:!0},e.createElement(h,{variant:"outline"},"Confirm with password")),e.createElement(u,null,e.createElement(d,null,e.createElement(p,null,"Enter your password"),e.createElement(g,null,"This action requires verification. Type your password to continue.")),e.createElement(I,{className:"mt-4 grid gap-2"},e.createElement(be,{htmlFor:"alert-dialog-password"},"Password"),e.createElement(rt,{id:"alert-dialog-password",type:"password",autoComplete:"current-password",value:r,onChange:a=>t(a.target.value)})),e.createElement(m,null,e.createElement(v,null,"Cancel"),e.createElement(A,{disabled:!r.trim()},"Confirm"))))}const O={render:()=>e.createElement(xt,null)};function Nt(){return e.createElement(D,null,e.createElement(E,{asChild:!0},e.createElement(h,{variant:"outline"},"Choose reason")),e.createElement(u,{cornerArtVariant:"confirm"},e.createElement(d,null,e.createElement(p,null,"Report this content"),e.createElement(g,null,"Select a reason. We will review your report.")),e.createElement(I,{className:"mt-4 grid gap-2"},e.createElement(be,{htmlFor:"alert-dialog-reason"},"Reason"),e.createElement(at,{defaultValue:"spam"},e.createElement(lt,{id:"alert-dialog-reason",className:"w-full"},e.createElement(ot,{placeholder:"Select a reason"})),e.createElement(nt,null,e.createElement(B,{value:"spam"},"Spam"),e.createElement(B,{value:"abuse"},"Abuse"),e.createElement(B,{value:"other"},"Other")))),e.createElement(m,null,e.createElement(v,null,"Cancel"),e.createElement(A,null,"Submit"))))}const j={render:()=>e.createElement(Nt,null)},P={render:()=>e.createElement(D,null,e.createElement(E,{asChild:!0},e.createElement(h,{variant:"outline"},"Plain dialog")),e.createElement(u,{showCornerArt:!1},e.createElement(d,null,e.createElement(p,null,"Plain title"),e.createElement(g,null,e.createElement("code",null,"showCornerArt={false}")," · 회색 버튼 variant.")),e.createElement(m,null,e.createElement(v,{variant:"default"},"Cancel"),e.createElement(A,{variant:"default"},"Continue"))))};var $,z,L,q,M;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">Open alert</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Something went wrong</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            Please try again. If the problem continues, contact support.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogAction variant="outline">OK</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...(L=(z=N.parameters)==null?void 0:z.docs)==null?void 0:L.source},description:{story:"기본 알림: 확인 outline 버튼 하나 (+ 닫기 X)",...(M=(q=N.parameters)==null?void 0:q.docs)==null?void 0:M.description}}};var K,Y,G,X,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">Change language</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent cornerArtVariant="confirm">\r
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
}`,...(G=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:G.source},description:{story:"취소 outline · 확인 fill — 코너 `check_circle.svg` (기본)",...(U=(X=b.parameters)==null?void 0:X.docs)==null?void 0:U.description}}};var J,Q,Z,ee,te;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">Contact support</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent cornerArtVariant="confirm" confirmCornerGraphic="contactSupport">\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Need help?</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            You can reach our support team from the app settings. Continue to\r
            open the help center?\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>Cancel</AlertDialogCancel>\r
          <AlertDialogAction>Open</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...(Z=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:Z.source},description:{story:"확인 다이얼로그 + `contact_support.svg` 코너",...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var re,ae,le,oe,ne;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
          <AlertDialogAction variant="destructiveOutline">\r
            Delete\r
          </AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...(le=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:le.source},description:{story:"취소: outline(point1) · 위험 액션: 빨간 outline",...(ne=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var ie,se,ce,ue,de;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">필수 입력 알림</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle className="text-left font-bold text-foreground">\r
            필수 입력 값을\r
            <br />\r
            모두 입력해 주세요.\r
          </AlertDialogTitle>\r
          <AlertDialogDescription className="sr-only">\r
            필수 입력 항목을 모두 채운 뒤 다시 시도해 주세요.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogAction variant="outline">확인</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...(ce=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ce.source},description:{story:"한글 단일 확인 (필수 입력 안내)",...(de=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:de.description}}};var me,pe,ge;O.parameters={...O.parameters,docs:{...(me=O.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <AlertDialogWithPasswordExample />
}`,...(ge=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var Ae,fe,De;j.parameters={...j.parameters,docs:{...(Ae=j.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <AlertDialogWithSelectExample />
}`,...(De=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:De.source}}};var he,Ee,ve,Ce,we;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">Plain dialog</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent showCornerArt={false}>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Plain title</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            <code>{'showCornerArt={false}'}</code> · 회색 버튼 variant.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel variant="default">Cancel</AlertDialogCancel>\r
          <AlertDialogAction variant="default">Continue</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...(ve=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source},description:{story:"shadcn 기본 버튼 + 코너 SVG 없음",...(we=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:we.description}}};const Zt=["Default","WithCancel","WithCancelContactSupport","DestructiveConfirm","RequiredFieldsKo","WithPassword","WithSelect","LegacyPlain"];export{N as Default,_ as DestructiveConfirm,P as LegacyPlain,T as RequiredFieldsKo,b as WithCancel,S as WithCancelContactSupport,O as WithPassword,j as WithSelect,Zt as __namedExportsOrder,Qt as default};
