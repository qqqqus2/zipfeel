import{r as o,R as e}from"./index-DRjF_FHU.js";import{b as ie,P as L,c as A,a as de}from"./index--M6JEWVJ.js";import{R as ue,I as ce,c as k}from"./index-CxaawJHm.js";import{P as me}from"./index-od4dH0T8.js";import{u as be}from"./index-dhUvqgLm.js";import{u as ge}from"./index-DmmVIJtj.js";import{j as x}from"./jsx-runtime-DiklIkkE.js";import{c as m}from"./utils-BQHNewu7.js";import"./index-BKlBQwGM.js";import"./index-Bms3GI6n.js";import"./index-BrKBBPft.js";var P="Tabs",[pe]=de(P,[k]),D=k(),[ve,V]=pe(P),W=o.forwardRef((t,r)=>{const{__scopeTabs:a,value:l,onValueChange:n,defaultValue:i,orientation:d="horizontal",dir:u,activationMode:p="automatic",...b}=t,c=be(u),[g,v]=ie({prop:l,onChange:n,defaultProp:i??"",caller:P});return x.jsx(ve,{scope:a,baseId:ge(),value:g,onValueChange:v,orientation:d,dir:c,activationMode:p,children:x.jsx(L.div,{dir:c,"data-orientation":d,...b,ref:r})})});W.displayName=P;var O="TabsList",q=o.forwardRef((t,r)=>{const{__scopeTabs:a,loop:l=!0,...n}=t,i=V(O,a),d=D(a);return x.jsx(ue,{asChild:!0,...d,orientation:i.orientation,dir:i.dir,loop:l,children:x.jsx(L.div,{role:"tablist","aria-orientation":i.orientation,...n,ref:r})})});q.displayName=O;var U="TabsTrigger",K=o.forwardRef((t,r)=>{const{__scopeTabs:a,value:l,disabled:n=!1,...i}=t,d=V(U,a),u=D(a),p=X(d.baseId,l),b=Y(d.baseId,l),c=l===d.value;return x.jsx(ce,{asChild:!0,...u,focusable:!n,active:c,children:x.jsx(L.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":b,"data-state":c?"active":"inactive","data-disabled":n?"":void 0,disabled:n,id:p,...i,ref:r,onMouseDown:A(t.onMouseDown,g=>{!n&&g.button===0&&g.ctrlKey===!1?d.onValueChange(l):g.preventDefault()}),onKeyDown:A(t.onKeyDown,g=>{[" ","Enter"].includes(g.key)&&d.onValueChange(l)}),onFocus:A(t.onFocus,()=>{const g=d.activationMode!=="manual";!c&&!n&&g&&d.onValueChange(l)})})})});K.displayName=U;var J="TabsContent",Q=o.forwardRef((t,r)=>{const{__scopeTabs:a,value:l,forceMount:n,children:i,...d}=t,u=V(J,a),p=X(u.baseId,l),b=Y(u.baseId,l),c=l===u.value,g=o.useRef(c);return o.useEffect(()=>{const v=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(v)},[]),x.jsx(me,{present:n||c,children:({present:v})=>x.jsx(L.div,{"data-state":c?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":p,hidden:!v,id:b,tabIndex:0,...d,ref:r,style:{...t.style,animationDuration:g.current?"0s":void 0},children:v&&i})})});Q.displayName=J;function X(t,r){return`${t}-trigger-${r}`}function Y(t,r){return`${t}-content-${r}`}var Z=W,ee=q,ae=K,te=Q;const re=o.createContext({variant:"underline",orientation:"horizontal"});function fe(...t){return r=>{t.forEach(a=>{typeof a=="function"?a(r):a&&"current"in a&&(a.current=r)})}}const Te=new Set(["underline","slash"]);function Ne(t,r){o.useLayoutEffect(()=>{if(!r)return;const a=t.current;if(!a)return;const l=()=>{a.style.removeProperty("--tab-ind-left"),a.style.removeProperty("--tab-ind-top"),a.style.removeProperty("--tab-ind-width"),a.style.removeProperty("--tab-ind-height"),a.style.removeProperty("--tab-ind-line-top"),a.style.removeProperty("--tab-ind-line-inset-left"),a.style.removeProperty("--tab-ind-line-inset-width")},n=()=>{const u=a.querySelector('[role="tab"][data-state="active"]');if(!u){l();return}const p=a.getBoundingClientRect(),b=u.getBoundingClientRect(),c=a.scrollLeft,g=a.scrollTop,v=b.left-p.left+c,h=b.top-p.top+g,E=b.width,y=b.height;a.style.setProperty("--tab-ind-left",`${v}px`),a.style.setProperty("--tab-ind-top",`${h}px`),a.style.setProperty("--tab-ind-width",`${E}px`),a.style.setProperty("--tab-ind-height",`${y}px`),a.style.setProperty("--tab-ind-line-top",`${h+y-4}px`);const w=12;a.style.setProperty("--tab-ind-line-inset-left",`${v+w}px`),a.style.setProperty("--tab-ind-line-inset-width",`${Math.max(0,E-w*2)}px`)};n();const i=new MutationObserver(n);i.observe(a,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["data-state"]});const d=new ResizeObserver(n);return d.observe(a),window.addEventListener("resize",n),()=>{i.disconnect(),d.disconnect(),window.removeEventListener("resize",n)}},[r,t])}function he(t,r){o.useLayoutEffect(()=>{if(!r)return;const a=t.current;if(!a)return;let l=0,n=0,i=!1;const d=()=>{const b=a.querySelector('[role="tab"][data-state="active"]');if(!b||!a.contains(b))return;const c=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=!i||c;i=!0;const v=g?"auto":"smooth",h=a.scrollWidth-a.clientWidth;if(h<=0)return;const E=a.getBoundingClientRect(),y=b.getBoundingClientRect(),w=y.left+y.width/2,ne=E.left+E.width/2,se=w-ne,oe=a.scrollLeft+se,le=Math.min(h,Math.max(0,oe));a.scrollTo({left:le,behavior:v})},u=()=>{cancelAnimationFrame(l),cancelAnimationFrame(n),l=requestAnimationFrame(()=>{n=requestAnimationFrame(d)})};u();const p=new MutationObserver(u);return p.observe(a,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["data-state"]}),()=>{cancelAnimationFrame(l),cancelAnimationFrame(n),p.disconnect()}},[r,t])}function xe(t,r){const[a,l]=o.useState({left:!1,right:!1}),n=o.useCallback(()=>{const i=t.current;if(!i||!r){l({left:!1,right:!1});return}const{scrollLeft:d,scrollWidth:u,clientWidth:p}=i,b=u-p,c=1;if(b<=c){l({left:!1,right:!1});return}l({left:d>c,right:d<b-c})},[r,t]);return o.useLayoutEffect(()=>{if(!r)return;const i=t.current;if(!i)return;n(),i.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n);const d=new ResizeObserver(n);d.observe(i);const u=new MutationObserver(n);return u.observe(i,{subtree:!0,childList:!0}),()=>{i.removeEventListener("scroll",n),window.removeEventListener("resize",n),d.disconnect(),u.disconnect()}},[r,t,n]),a}function Ee(){return o.createElement("div",{"aria-hidden":!0,className:m("pointer-events-none absolute z-0 h-[3px] rounded-full bg-[color:var(--tabs-accent)]","-bottom-px left-[var(--tab-ind-left,0px)] w-[var(--tab-ind-width,0px)]","transition-[left,width] duration-200 ease-out motion-reduce:transition-none")})}function ye(){return o.createElement("div",{"aria-hidden":!0,className:m("pointer-events-none absolute z-0 bg-[color:var(--tabs-accent)]","left-[var(--tab-ind-left,0px)] top-[var(--tab-ind-top,0px)] h-[var(--tab-ind-height,0px)] w-[var(--tab-ind-width,0px)]","transition-[left,top,width,height] duration-200 ease-out motion-reduce:transition-none"),style:{clipPath:"polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)"}})}function we({variant:t}){return t==="underline"?o.createElement(Ee,null):t==="slash"?o.createElement(ye,null):null}const Ce=m("contents","group-data-[variant=solidRounded]/tabs:relative group-data-[variant=solidRounded]/tabs:inline-flex","group-data-[variant=solidRounded]/tabs:after:absolute group-data-[variant=solidRounded]/tabs:after:inset-0","group-data-[variant=solidRounded]/tabs:after:translate-y-1 group-data-[variant=solidRounded]/tabs:after:bg-sub-3","group-data-[variant=solidRounded]/tabs:after:rounded-l-full"),Re=m("group-data-[orientation=horizontal]/tabs:overflow-x-auto","group-data-[orientation=horizontal]/tabs:overflow-y-hidden","group-data-[orientation=horizontal]/tabs:[scrollbar-width:none]","group-data-[orientation=horizontal]/tabs:[-ms-overflow-style:none]","group-data-[orientation=horizontal]/tabs:[&::-webkit-scrollbar]:hidden"),Se=m("relative inline-flex items-center justify-start text-muted-foreground","max-w-full min-w-0",Re,"group-data-[orientation=vertical]/tabs:h-auto group-data-[orientation=vertical]/tabs:w-48 group-data-[orientation=vertical]/tabs:flex-col group-data-[orientation=vertical]/tabs:items-stretch group-data-[orientation=vertical]/tabs:justify-start"),Le=m("group-data-[variant=underline]/tabs:h-10 group-data-[variant=underline]/tabs:gap-8 group-data-[variant=underline]/tabs:border-b group-data-[variant=underline]/tabs:border-border group-data-[variant=underline]/tabs:bg-transparent","group-data-[variant=underline]/tabs:px-3"),Pe=m("group-data-[variant=solid]/tabs:gap-0 group-data-[variant=solid]/tabs:rounded-none","group-data-[variant=solid]/tabs:bg-transparent group-data-[variant=solid]/tabs:p-0"),Ae=m("group-data-[variant=solidRounded]/tabs:z-10 group-data-[variant=solidRounded]/tabs:h-12 group-data-[variant=solidRounded]/tabs:gap-0","group-data-[variant=solidRounded]/tabs:overflow-hidden group-data-[variant=solidRounded]/tabs:rounded-l-full","group-data-[variant=solidRounded]/tabs:border-b group-data-[variant=solidRounded]/tabs:border-sub-3","group-data-[variant=solidRounded]/tabs:bg-tabs-surface"),Ve=m("group-data-[variant=slash]/tabs:isolate group-data-[variant=slash]/tabs:h-10 group-data-[variant=slash]/tabs:gap-6 group-data-[variant=slash]/tabs:bg-transparent group-data-[variant=slash]/tabs:py-0 group-data-[variant=slash]/tabs:px-2"),Fe=m("relative z-10 inline-flex items-center justify-center whitespace-nowrap text-sm font-normal ring-offset-background transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none","group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start"),Ie=m("group-data-[variant=underline]/tabs:disabled:text-gray-7","group-data-[variant=underline]/tabs:h-10 group-data-[variant=underline]/tabs:px-2 group-data-[variant=underline]/tabs:text-gray-6","group-data-[variant=underline]/tabs:data-[state=active]:text-black group-data-[variant=underline]/tabs:data-[state=active]:font-bold","group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:absolute group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:left-0 group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:right-0","group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:-bottom-[1px] group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:h-[3px]","group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:rounded-full group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:opacity-0","group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:transition-opacity","group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:after:bg-[color:var(--tabs-accent)]","group-data-[orientation=vertical]/tabs:group-data-[variant=underline]/tabs:data-[state=active]:after:opacity-100"),je=m("group-data-[variant=solid]/tabs:h-12 group-data-[variant=solid]/tabs:min-w-32 group-data-[variant=solid]/tabs:shrink-0 sm:group-data-[variant=solid]/tabs:min-w-[180px] group-data-[variant=solid]/tabs:rounded-none","group-data-[variant=solid]/tabs:bg-tabs-surface group-data-[variant=solid]/tabs:text-tabs-label-muted","group-data-[variant=solid]/tabs:data-[state=active]:text-white","group-data-[variant=solid]/tabs:border-b-4 group-data-[variant=solid]/tabs:border-b-transparent","group-data-[variant=solid]/tabs:data-[state=active]:border-b-[color:var(--tabs-accent)]"),Me=m("group-data-[variant=solidRounded]/tabs:disabled:text-gray-5","group-data-[variant=solidRounded]/tabs:h-12 group-data-[variant=solidRounded]/tabs:px-6","group-data-[variant=solidRounded]/tabs:bg-tabs-surface group-data-[variant=solidRounded]/tabs:text-tabs-label-muted","group-data-[variant=solidRounded]/tabs:data-[state=active]:text-white group-data-[variant=solidRounded]/tabs:data-[state=active]:font-semibold","group-data-[variant=solidRounded]/tabs:after:pointer-events-none group-data-[variant=solidRounded]/tabs:after:absolute group-data-[variant=solidRounded]/tabs:after:bottom-[-2px]","group-data-[variant=solidRounded]/tabs:after:left-3 group-data-[variant=solidRounded]/tabs:after:right-3 group-data-[variant=solidRounded]/tabs:after:h-1","group-data-[variant=solidRounded]/tabs:after:rounded-sm group-data-[variant=solidRounded]/tabs:after:bg-[color:var(--tabs-accent)]","group-data-[variant=solidRounded]/tabs:after:opacity-0 group-data-[variant=solidRounded]/tabs:after:transition-opacity","group-data-[variant=solidRounded]/tabs:data-[state=active]:after:opacity-100"),_e=m("group-data-[variant=slash]/tabs:h-10 group-data-[variant=slash]/tabs:px-6 group-data-[variant=slash]/tabs:font-semibold","group-data-[variant=slash]/tabs:bg-transparent group-data-[variant=slash]/tabs:text-muted-foreground","group-data-[variant=slash]/tabs:data-[state=active]:text-white","group-data-[variant=slash]/tabs:transition-colors group-data-[variant=slash]/tabs:duration-200"),T=o.forwardRef(({className:t,orientation:r="horizontal",variant:a="underline",accentColor:l,...n},i)=>o.createElement(re.Provider,{value:{variant:a,orientation:r}},o.createElement(Z,{ref:i,"data-variant":a,"data-orientation":r,style:l?{"--tabs-accent":l}:{"--tabs-accent":"rgb(var(--point-color-2))"},className:m("group/tabs",r==="vertical"?"flex flex-row gap-4":"min-w-0 max-w-full",t),orientation:r,...n})));T.displayName=Z.displayName;const N=o.forwardRef(({className:t,children:r,...a},l)=>{const{variant:n,orientation:i}=o.useContext(re),d=o.useRef(null),u=o.useMemo(()=>fe(l,d),[l]),p=i!=="vertical"&&Te.has(n);Ne(d,p),he(d,i==="horizontal");const b=i==="horizontal",{left:c,right:g}=xe(d,b),v=m("pointer-events-none absolute inset-y-0 z-20 w-10 from-background to-transparent transition-opacity duration-200 motion-reduce:transition-none"),h=o.createElement("div",{className:Ce},o.createElement(ee,{ref:u,className:m(Se,Le,Pe,Ae,p&&"isolate",Ve,t),...a},p?o.createElement(we,{variant:n}):null,r));return b?o.createElement("div",{className:"relative w-full min-w-0"},h,o.createElement("div",{"aria-hidden":!0,className:m(v,"left-0 bg-gradient-to-r",c?"opacity-100":"opacity-0")}),o.createElement("div",{"aria-hidden":!0,className:m(v,"right-0 bg-gradient-to-l",g?"opacity-100":"opacity-0")})):h});N.displayName=ee.displayName;const s=o.forwardRef(({className:t,...r},a)=>o.createElement(ae,{ref:a,className:m(Fe,Ie,je,Me,_e,t),...r}));s.displayName=ae.displayName;const f=o.forwardRef(({className:t,...r},a)=>o.createElement(te,{ref:a,className:m("mt-2 min-w-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","group-data-[orientation=vertical]/tabs:mt-0 group-data-[orientation=vertical]/tabs:flex-1",t),...r}));f.displayName=te.displayName;T.__docgenInfo={description:"Tabs variants\n\n- 슬라이딩 인디케이터: **underline**, **slash** 만 (가로 탭).\n- solid / solidRounded: 트리거 자체 스타일(보더·::after).\n- 세로 탭: 슬라이딩 끔 → 트리거 `::after` 등으로 표시.\n\n강조색은 `--tabs-accent` (또는 `accentColor` prop).",methods:[],props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},variant:{defaultValue:{value:'"underline"',computed:!1},required:!1}}};N.__docgenInfo={description:"",methods:[]};s.__docgenInfo={description:"",methods:[]};f.__docgenInfo={description:"",methods:[]};const F=["defaultValue","value","onValueChange","orientation","variant","accentColor","dir"],Ke={title:"UI/Tabs",component:T,parameters:{layout:"padded",controls:{include:F},docs:{description:{component:`### 주요 props (Tabs 루트)

- **defaultValue** — 비제어: 초기 활성 탭 \`value\`.
- **value** — 제어: 현재 활성 탭.
- **onValueChange** — 탭 전환 콜백.
- **orientation** — 가로/세로 탭 방향.
- **variant** / **accentColor** — 트리거·인디케이터 스타일 변형.
- **dir** — RTL 등 문서 방향.

목록·패널은 \`TabsList\`, \`TabsTrigger\`, \`TabsContent\`로 구성합니다.`},controls:{include:F}}},tags:["autodocs"]},C={render:()=>e.createElement("div",{className:"grid grid-cols-1 gap-4"},e.createElement(T,{defaultValue:"tab1",className:"w-[400px]"},e.createElement(N,null,e.createElement(s,{value:"tab1"},"Enabled"),e.createElement(s,{value:"tab2",disabled:!0},"Disabled"),e.createElement(s,{value:"tab3"},"Enabled"),e.createElement(s,{value:"home"},"Home"),e.createElement(s,{value:"profile"},"Profile"),e.createElement(s,{value:"settings"},"Settings"),e.createElement(s,{value:"help"},"Help")),e.createElement(f,{value:"tab1"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("p",{className:"text-sm"},"This tab is enabled."))),e.createElement(f,{value:"tab3"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("p",{className:"text-sm"},"This tab is also enabled.")))))},R={render:()=>e.createElement(T,{defaultValue:"home",className:"w-[600px]"},e.createElement(N,{className:"w-full"},e.createElement(s,{value:"home",className:"flex-1"},"Home"),e.createElement(s,{value:"profile",className:"flex-1"},"Profile"),e.createElement(s,{value:"settings",className:"flex-1"},"Settings"),e.createElement(s,{value:"help",className:"flex-1"},"Help"),e.createElement(s,{value:"home2",className:"flex-1"},"Home"),e.createElement(s,{value:"profile2",className:"flex-1"},"Profile"),e.createElement(s,{value:"settings2",className:"flex-1"},"Settings"),e.createElement(s,{value:"help2",className:"flex-1"},"Help")),e.createElement(f,{value:"home"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Home"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Welcome to your home page."))),e.createElement(f,{value:"profile"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Profile"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Manage your profile information."))),e.createElement(f,{value:"settings"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Settings"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Configure your preferences."))),e.createElement(f,{value:"help"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Help"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Get help and support."))),e.createElement(f,{value:"home2"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Home"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Welcome to your home page."))),e.createElement(f,{value:"profile2"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Profile"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Manage your profile information."))),e.createElement(f,{value:"settings2"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Settings"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Configure your preferences."))),e.createElement(f,{value:"help2"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Help"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Get help and support."))))},S={name:"유형 갤러리 (5종 + 컬러)",render:()=>e.createElement("div",{className:"w-[min(100%,1100px)] space-y-10"},e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"Underline (기본) + Content"),e.createElement(T,{defaultValue:"one",variant:"underline",accentColor:"#A78BFA",className:"w-full"},e.createElement(N,{className:"w-full justify-start"},e.createElement(s,{value:"one"},"Tab Name"),e.createElement(s,{value:"two"},"Tab Name"),e.createElement(s,{value:"three",disabled:!0},"Tab Name")),e.createElement(f,{value:"one"},e.createElement("div",{className:"rounded-md border p-4 text-sm text-muted-foreground"},"Content 영역 예시")),e.createElement(f,{value:"two"},e.createElement("div",{className:"rounded-md border p-4 text-sm text-muted-foreground"},"Content 영역 예시")))),e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"Slash (page tab)"),e.createElement(T,{defaultValue:"a",variant:"slash",accentColor:"#4F378A",className:"w-full"},e.createElement(N,{className:"w-full justify-start"},e.createElement(s,{value:"a"},"캐릭터 설정"),e.createElement(s,{value:"b"},"캐릭터 비교"),e.createElement(s,{value:"c"},"공통 설정 관리")))),e.createElement("div",{className:"grid gap-8 md:grid-cols-1"},e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"Solid (dark)"),e.createElement(T,{defaultValue:"t1",variant:"solid",accentColor:"#A78BFA",className:"w-full"},e.createElement(N,{className:"w-full justify-start"},e.createElement(s,{value:"t1"},"Tab Name"),e.createElement(s,{value:"t2"},"Tab Name"),e.createElement(s,{value:"t3",disabled:!0},"Tab Name")))),e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"Solid Rounded (dark pill)"),e.createElement(T,{defaultValue:"t1",variant:"solidRounded",accentColor:"#A78BFA",className:"w-full"},e.createElement(N,{className:"w-full justify-start gap-3"},e.createElement(s,{value:"t1"},"Tab Name"),e.createElement(s,{value:"t2"},"Tab Name"),e.createElement(s,{value:"t3",disabled:!0},"Tab Name"))))),e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"페이지별 컬러 예시"),e.createElement("div",{className:"space-y-4"},e.createElement(T,{defaultValue:"a",variant:"underline",accentColor:"#22C55E",className:"w-full"},e.createElement(N,{className:"w-full justify-start"},e.createElement(s,{value:"a"},"Green"),e.createElement(s,{value:"b"},"Tab"))),e.createElement(T,{defaultValue:"a",variant:"underline",accentColor:"#EF4444",className:"w-full"},e.createElement(N,{className:"w-full justify-start"},e.createElement(s,{value:"a"},"Red"),e.createElement(s,{value:"b"},"Tab"))),e.createElement(T,{defaultValue:"a",variant:"underline",accentColor:"#3B82F6",className:"w-full"},e.createElement(N,{className:"w-full justify-start"},e.createElement(s,{value:"a"},"Blue"),e.createElement(s,{value:"b"},"Tab"))))))};var I,j,M;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 gap-4">\r
      <Tabs defaultValue="tab1" className="w-[400px]">\r
        <TabsList>\r
          <TabsTrigger value="tab1">Enabled</TabsTrigger>\r
          <TabsTrigger value="tab2" disabled>\r
            Disabled\r
          </TabsTrigger>\r
          <TabsTrigger value="tab3">Enabled</TabsTrigger>\r
          <TabsTrigger value="home">Home</TabsTrigger>\r
          <TabsTrigger value="profile">Profile</TabsTrigger>\r
          <TabsTrigger value="settings">Settings</TabsTrigger>\r
          <TabsTrigger value="help">Help</TabsTrigger>\r
        </TabsList>\r
        <TabsContent value="tab1">\r
          <div className="p-4 border rounded-md">\r
            <p className="text-sm">This tab is enabled.</p>\r
          </div>\r
        </TabsContent>\r
        <TabsContent value="tab3">\r
          <div className="p-4 border rounded-md">\r
            <p className="text-sm">This tab is also enabled.</p>\r
          </div>\r
        </TabsContent>\r
      </Tabs>\r
\r
      {/* 세로 */}\r
      {/* <Tabs defaultValue="account" orientation="vertical">\r
        <TabsList>\r
          <TabsTrigger value="tab1">Enabled</TabsTrigger>\r
          <TabsTrigger value="tab2" disabled>\r
            Disabled\r
          </TabsTrigger>\r
          <TabsTrigger value="tab3">Enabled</TabsTrigger>\r
        </TabsList>\r
        <TabsContent value="tab1">\r
          <div className="p-4 border rounded-md">\r
            <p className="text-sm">This tab is enabled.</p>\r
          </div>\r
        </TabsContent>\r
        <TabsContent value="tab3">\r
          <div className="p-4 border rounded-md">\r
            <p className="text-sm">This tab is also enabled.</p>\r
          </div>\r
        </TabsContent>\r
       </Tabs> */}\r
    </div>
}`,...(M=(j=C.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var _,z,H;R.parameters={...R.parameters,docs:{...(_=R.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="home" className="w-[600px]">\r
      <TabsList className="w-full">\r
        <TabsTrigger value="home" className="flex-1">\r
          Home\r
        </TabsTrigger>\r
        <TabsTrigger value="profile" className="flex-1">\r
          Profile\r
        </TabsTrigger>\r
        <TabsTrigger value="settings" className="flex-1">\r
          Settings\r
        </TabsTrigger>\r
        <TabsTrigger value="help" className="flex-1">\r
          Help\r
        </TabsTrigger>\r
        <TabsTrigger value="home2" className="flex-1">\r
          Home\r
        </TabsTrigger>\r
        <TabsTrigger value="profile2" className="flex-1">\r
          Profile\r
        </TabsTrigger>\r
        <TabsTrigger value="settings2" className="flex-1">\r
          Settings\r
        </TabsTrigger>\r
        <TabsTrigger value="help2" className="flex-1">\r
          Help\r
        </TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="home">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Home</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Welcome to your home page.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="profile">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Profile</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Manage your profile information.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="settings">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Settings</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Configure your preferences.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="help">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Help</h3>\r
          <p className="text-sm text-muted-foreground">Get help and support.</p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="home2">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Home</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Welcome to your home page.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="profile2">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Profile</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Manage your profile information.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="settings2">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Settings</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Configure your preferences.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="help2">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Help</h3>\r
          <p className="text-sm text-muted-foreground">Get help and support.</p>\r
        </div>\r
      </TabsContent>\r
    </Tabs>
}`,...(H=(z=R.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var B,G,$;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "유형 갤러리 (5종 + 컬러)",
  render: () => <div className="w-[min(100%,1100px)] space-y-10">\r
      <div className="space-y-3">\r
        <p className="text-sm font-medium">Underline (기본) + Content</p>\r
        <Tabs defaultValue="one" variant="underline" accentColor="#A78BFA" className="w-full">\r
          <TabsList className="w-full justify-start">\r
            <TabsTrigger value="one">Tab Name</TabsTrigger>\r
            <TabsTrigger value="two">Tab Name</TabsTrigger>\r
            <TabsTrigger value="three" disabled>\r
              Tab Name\r
            </TabsTrigger>\r
          </TabsList>\r
          <TabsContent value="one">\r
            <div className="rounded-md border p-4 text-sm text-muted-foreground">\r
              Content 영역 예시\r
            </div>\r
          </TabsContent>\r
          <TabsContent value="two">\r
            <div className="rounded-md border p-4 text-sm text-muted-foreground">\r
              Content 영역 예시\r
            </div>\r
          </TabsContent>\r
        </Tabs>\r
      </div>\r
\r
      <div className="space-y-3">\r
        <p className="text-sm font-medium">Slash (page tab)</p>\r
        <Tabs defaultValue="a" variant="slash" accentColor="#4F378A" className="w-full">\r
          <TabsList className="w-full justify-start">\r
            <TabsTrigger value="a">캐릭터 설정</TabsTrigger>\r
            <TabsTrigger value="b">캐릭터 비교</TabsTrigger>\r
            <TabsTrigger value="c">공통 설정 관리</TabsTrigger>\r
          </TabsList>\r
        </Tabs>\r
      </div>\r
\r
      <div className="grid gap-8 md:grid-cols-1">\r
        <div className="space-y-3">\r
          <p className="text-sm font-medium">Solid (dark)</p>\r
          <Tabs defaultValue="t1" variant="solid" accentColor="#A78BFA" className="w-full">\r
            <TabsList className="w-full justify-start">\r
              <TabsTrigger value="t1">Tab Name</TabsTrigger>\r
              <TabsTrigger value="t2">Tab Name</TabsTrigger>\r
              <TabsTrigger value="t3" disabled>\r
                Tab Name\r
              </TabsTrigger>\r
            </TabsList>\r
          </Tabs>\r
        </div>\r
\r
        <div className="space-y-3">\r
          <p className="text-sm font-medium">Solid Rounded (dark pill)</p>\r
          <Tabs defaultValue="t1" variant="solidRounded" accentColor="#A78BFA" className="w-full">\r
            <TabsList className="w-full justify-start gap-3">\r
              <TabsTrigger value="t1">Tab Name</TabsTrigger>\r
              <TabsTrigger value="t2">Tab Name</TabsTrigger>\r
              <TabsTrigger value="t3" disabled>\r
                Tab Name\r
              </TabsTrigger>\r
            </TabsList>\r
          </Tabs>\r
        </div>\r
      </div>\r
\r
      <div className="space-y-3">\r
        <p className="text-sm font-medium">페이지별 컬러 예시</p>\r
        <div className="space-y-4">\r
          <Tabs defaultValue="a" variant="underline" accentColor="#22C55E" className="w-full">\r
            <TabsList className="w-full justify-start">\r
              <TabsTrigger value="a">Green</TabsTrigger>\r
              <TabsTrigger value="b">Tab</TabsTrigger>\r
            </TabsList>\r
          </Tabs>\r
          <Tabs defaultValue="a" variant="underline" accentColor="#EF4444" className="w-full">\r
            <TabsList className="w-full justify-start">\r
              <TabsTrigger value="a">Red</TabsTrigger>\r
              <TabsTrigger value="b">Tab</TabsTrigger>\r
            </TabsList>\r
          </Tabs>\r
          <Tabs defaultValue="a" variant="underline" accentColor="#3B82F6" className="w-full">\r
            <TabsList className="w-full justify-start">\r
              <TabsTrigger value="a">Blue</TabsTrigger>\r
              <TabsTrigger value="b">Tab</TabsTrigger>\r
            </TabsList>\r
          </Tabs>\r
        </div>\r
      </div>\r
    </div>
}`,...($=(G=S.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};const Je=["Default","FullWidth","VariantsGallery"];export{C as Default,R as FullWidth,S as VariantsGallery,Je as __namedExportsOrder,Ke as default};
