import{r as c,R as e}from"./index-DRjF_FHU.js";import{u as ge,P as V,c as S,a as ve}from"./index-BtmGPRf8.js";import{R as Te,I as pe,c as Z}from"./index-CwwKksZm.js";import{P as fe}from"./index-DQDayTBB.js";import{u as Ne}from"./index-B4iTqdRC.js";import{u as Ee}from"./index-BbsOjWWI.js";import{j as T}from"./jsx-runtime-DiklIkkE.js";import{c as L}from"./utils-BQHNewu7.js";import"./index-BKlBQwGM.js";import"./index-Bms3GI6n.js";var R="Tabs",[xe]=ve(R,[Z]),ee=Z(),[we,j]=xe(R),ae=c.forwardRef((t,n)=>{const{__scopeTabs:o,value:i,onValueChange:m,defaultValue:b,orientation:d="horizontal",dir:v,activationMode:f="automatic",...N}=t,g=Ne(v),[u,p]=ge({prop:i,onChange:m,defaultProp:b??"",caller:R});return T.jsx(we,{scope:o,baseId:Ee(),value:u,onValueChange:p,orientation:d,dir:g,activationMode:f,children:T.jsx(V.div,{dir:g,"data-orientation":d,...N,ref:n})})});ae.displayName=R;var te="TabsList",re=c.forwardRef((t,n)=>{const{__scopeTabs:o,loop:i=!0,...m}=t,b=j(te,o),d=ee(o);return T.jsx(Te,{asChild:!0,...d,orientation:b.orientation,dir:b.dir,loop:i,children:T.jsx(V.div,{role:"tablist","aria-orientation":b.orientation,...m,ref:n})})});re.displayName=te;var se="TabsTrigger",ne=c.forwardRef((t,n)=>{const{__scopeTabs:o,value:i,disabled:m=!1,...b}=t,d=j(se,o),v=ee(o),f=ie(d.baseId,i),N=de(d.baseId,i),g=i===d.value;return T.jsx(pe,{asChild:!0,...v,focusable:!m,active:g,children:T.jsx(V.button,{type:"button",role:"tab","aria-selected":g,"aria-controls":N,"data-state":g?"active":"inactive","data-disabled":m?"":void 0,disabled:m,id:f,...b,ref:n,onMouseDown:S(t.onMouseDown,u=>{!m&&u.button===0&&u.ctrlKey===!1?d.onValueChange(i):u.preventDefault()}),onKeyDown:S(t.onKeyDown,u=>{[" ","Enter"].includes(u.key)&&d.onValueChange(i)}),onFocus:S(t.onFocus,()=>{const u=d.activationMode!=="manual";!g&&!m&&u&&d.onValueChange(i)})})})});ne.displayName=se;var le="TabsContent",oe=c.forwardRef((t,n)=>{const{__scopeTabs:o,value:i,forceMount:m,children:b,...d}=t,v=j(le,o),f=ie(v.baseId,i),N=de(v.baseId,i),g=i===v.value,u=c.useRef(g);return c.useEffect(()=>{const p=requestAnimationFrame(()=>u.current=!1);return()=>cancelAnimationFrame(p)},[]),T.jsx(fe,{present:m||g,children:({present:p})=>T.jsx(V.div,{"data-state":g?"active":"inactive","data-orientation":v.orientation,role:"tabpanel","aria-labelledby":f,hidden:!p,id:N,tabIndex:0,...d,ref:n,style:{...t.style,animationDuration:u.current?"0s":void 0},children:p&&b})})});oe.displayName=le;function ie(t,n){return`${t}-trigger-${n}`}function de(t,n){return`${t}-content-${n}`}var ce=ae,me=re,ue=ne,be=oe;const r=c.forwardRef(({className:t,orientation:n,variant:o="underline",accentColor:i,...m},b)=>c.createElement(ce,{ref:b,"data-variant":o,"data-orientation":n,style:i?{"--tabs-accent":i}:{"--tabs-accent":"rgb(var(--point-color-2))"},className:L("group/tabs",n==="vertical"&&"flex flex-row gap-4",t),orientation:n,...m}));r.displayName=ce.displayName;const s=c.forwardRef(({className:t,...n},o)=>c.createElement(me,{ref:o,className:L("inline-flex items-center justify-center text-muted-foreground","group-data-[orientation=vertical]/tabs:h-auto group-data-[orientation=vertical]/tabs:w-48 group-data-[orientation=vertical]/tabs:flex-col group-data-[orientation=vertical]/tabs:items-stretch group-data-[orientation=vertical]/tabs:justify-start","group-data-[variant=underline]/tabs:h-10 group-data-[variant=underline]/tabs:gap-8 group-data-[variant=underline]/tabs:border-b group-data-[variant=underline]/tabs:border-border group-data-[variant=underline]/tabs:bg-transparent group-data-[variant=underline]/tabs:px-1","group-data-[variant=solid]/tabs:gap-0 group-data-[variant=solid]/tabs:rounded-none group-data-[variant=solid]/tabs:bg-transparent group-data-[variant=solid]/tabs:p-0","group-data-[variant=solidRounded]/tabs:gap-0 group-data-[variant=solidRounded]/tabs:rounded-none group-data-[variant=solidRounded]/tabs:bg-transparent group-data-[variant=solidRounded]/tabs:p-0","group-data-[variant=slant]/tabs:h-10 group-data-[variant=slant]/tabs:gap-6 group-data-[variant=slant]/tabs:bg-transparent group-data-[variant=slant]/tabs:p-0",t),...n}));s.displayName=me.displayName;const a=c.forwardRef(({className:t,...n},o)=>c.createElement(ue,{ref:o,className:L("relative inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50","group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start","group-data-[variant=underline]/tabs:h-10 group-data-[variant=underline]/tabs:px-2 group-data-[variant=underline]/tabs:text-foreground/80 data-[state=active]:text-foreground","group-data-[variant=underline]/tabs:after:absolute group-data-[variant=underline]/tabs:after:left-0 group-data-[variant=underline]/tabs:after:right-0 group-data-[variant=underline]/tabs:after:-bottom-[1px] group-data-[variant=underline]/tabs:after:h-[3px] group-data-[variant=underline]/tabs:after:rounded-full group-data-[variant=underline]/tabs:after:opacity-0 group-data-[variant=underline]/tabs:after:transition-opacity","group-data-[variant=underline]/tabs:after:bg-[color:var(--tabs-accent)] data-[state=active]:after:opacity-100","group-data-[variant=solid]/tabs:h-12 group-data-[variant=solid]/tabs:min-w-[180px] group-data-[variant=solid]/tabs:rounded-none group-data-[variant=solid]/tabs:bg-neutral-800 group-data-[variant=solid]/tabs:text-white/70 data-[state=active]:text-white","group-data-[variant=solid]/tabs:border-b-4 group-data-[variant=solid]/tabs:border-b-[color:var(--tabs-accent)]","group-data-[variant=solidRounded]/tabs:h-12 group-data-[variant=solidRounded]/tabs:min-w-[220px] group-data-[variant=solidRounded]/tabs:rounded-full group-data-[variant=solidRounded]/tabs:bg-neutral-800 group-data-[variant=solidRounded]/tabs:text-white/70 data-[state=active]:text-white","group-data-[variant=solidRounded]/tabs:shadow-[inset_0_-4px_0_0_var(--tabs-accent)]","group-data-[variant=slant]/tabs:h-10 group-data-[variant=slant]/tabs:px-6 group-data-[variant=slant]/tabs:font-semibold group-data-[variant=slant]/tabs:text-foreground/80 data-[state=active]:text-white","group-data-[variant=slant]/tabs:data-[state=active]:bg-[color:var(--tabs-accent)] group-data-[variant=slant]/tabs:data-[state=active]:[clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)]",t),...n}));a.displayName=ue.displayName;const l=c.forwardRef(({className:t,...n},o)=>c.createElement(be,{ref:o,className:L("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","group-data-[orientation=vertical]/tabs:mt-0 group-data-[orientation=vertical]/tabs:min-w-0 group-data-[orientation=vertical]/tabs:flex-1",t),...n}));l.displayName=be.displayName;r.__docgenInfo={description:`Tabs variants\r
- underline: 밑줄형 (이미지 1/2열 느낌)\r
- solid: 다크 솔리드형 (이미지 3열 느낌)\r
- solidRounded: 다크 라운드형 (이미지 4열 느낌)\r
- slant: 사선 탭(상단 예시 느낌, active만)\r
\r
theme는 \`--tabs-accent\` CSS 변수로 전달됩니다.`,methods:[],props:{variant:{defaultValue:{value:'"underline"',computed:!1},required:!1}}};s.__docgenInfo={description:"",methods:[]};a.__docgenInfo={description:"",methods:[]};l.__docgenInfo={description:"",methods:[]};const _e={title:"UI/Tabs",component:r,parameters:{layout:"centered"},tags:["autodocs"]},E={render:()=>e.createElement(r,{defaultValue:"account",className:"w-[400px]"},e.createElement(s,null,e.createElement(a,{value:"account"},"Account"),e.createElement(a,{value:"password"},"Password")),e.createElement(l,{value:"account"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Account Settings"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Make changes to your account here. Click save when you're done."))),e.createElement(l,{value:"password"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Password Settings"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Change your password here. After saving, you'll be logged out."))))},x={render:()=>e.createElement(r,{defaultValue:"account",orientation:"vertical"},e.createElement(s,null,e.createElement(a,{value:"account"},"Account"),e.createElement(a,{value:"password"},"Password")),e.createElement(l,{value:"account"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Account Settings"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Make changes to your account here. Click save when you're done."))),e.createElement(l,{value:"password"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Password Settings"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Change your password here. After saving, you'll be logged out."))))},w={render:()=>e.createElement(r,{defaultValue:"overview",className:"w-[500px]"},e.createElement(s,{className:"grid w-full grid-cols-3"},e.createElement(a,{value:"overview"},"Overview"),e.createElement(a,{value:"analytics"},"Analytics"),e.createElement(a,{value:"reports"},"Reports")),e.createElement(l,{value:"overview"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Overview"),e.createElement("p",{className:"text-sm text-muted-foreground"},"View your account overview and recent activity."))),e.createElement(l,{value:"analytics"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Analytics"),e.createElement("p",{className:"text-sm text-muted-foreground"},"View detailed analytics about your account."))),e.createElement(l,{value:"reports"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Reports"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Generate and view reports."))))},y={render:()=>e.createElement(r,{defaultValue:"tab1",className:"w-[400px]"},e.createElement(s,null,e.createElement(a,{value:"tab1"},"Enabled"),e.createElement(a,{value:"tab2",disabled:!0},"Disabled"),e.createElement(a,{value:"tab3"},"Enabled")),e.createElement(l,{value:"tab1"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("p",{className:"text-sm"},"This tab is enabled."))),e.createElement(l,{value:"tab3"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("p",{className:"text-sm"},"This tab is also enabled."))))},h={render:()=>e.createElement(r,{defaultValue:"home",className:"w-[600px]"},e.createElement(s,{className:"w-full"},e.createElement(a,{value:"home",className:"flex-1"},"Home"),e.createElement(a,{value:"profile",className:"flex-1"},"Profile"),e.createElement(a,{value:"settings",className:"flex-1"},"Settings"),e.createElement(a,{value:"help",className:"flex-1"},"Help")),e.createElement(l,{value:"home"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Home"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Welcome to your home page."))),e.createElement(l,{value:"profile"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Profile"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Manage your profile information."))),e.createElement(l,{value:"settings"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Settings"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Configure your preferences."))),e.createElement(l,{value:"help"},e.createElement("div",{className:"p-4 border rounded-md"},e.createElement("h3",{className:"font-semibold mb-2"},"Help"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Get help and support."))))},C={name:"디자인 유형들",render:()=>e.createElement("div",{className:"w-[min(100%,980px)] space-y-8"},e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"Slant (상단 예시 느낌)"),e.createElement(r,{defaultValue:"a",variant:"slant",className:"w-full"},e.createElement(s,{className:"w-full justify-start"},e.createElement(a,{value:"a"},"캐릭터 설정"),e.createElement(a,{value:"b"},"캐릭터 비교"),e.createElement(a,{value:"c"},"공통 설정 관리")))),e.createElement("div",{className:"grid grid-cols-2 gap-8 lg:grid-cols-4"},e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"Underline"),e.createElement(r,{defaultValue:"t1",variant:"underline",accentColor:"#A78BFA"},e.createElement(s,{className:"w-full justify-start"},e.createElement(a,{value:"t1"},"Tab Name"))),e.createElement(r,{defaultValue:"t1",variant:"underline",accentColor:"#A78BFA"},e.createElement(s,{className:"w-full justify-start"},e.createElement(a,{value:"t1"},"Tab Name"),e.createElement(a,{value:"t2",disabled:!0},"Tab Name")))),e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"Underline (3 tabs)"),e.createElement(r,{defaultValue:"t1",variant:"underline",accentColor:"#A78BFA"},e.createElement(s,{className:"w-full justify-start"},e.createElement(a,{value:"t1"},"Tab Name"),e.createElement(a,{value:"t2"},"Tab Name"),e.createElement(a,{value:"t3",disabled:!0},"Tab Name")))),e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"Solid"),e.createElement(r,{defaultValue:"t1",variant:"solid",accentColor:"#A78BFA"},e.createElement(s,null,e.createElement(a,{value:"t1"},"Tab Name"))),e.createElement(r,{defaultValue:"t1",variant:"solid",accentColor:"#A78BFA"},e.createElement(s,{className:"flex flex-col"},e.createElement(a,{value:"t1"},"Tab Name"),e.createElement(a,{value:"t2"},"Tab Name"),e.createElement(a,{value:"t3",disabled:!0},"Tab Name")))),e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"Solid Rounded"),e.createElement(r,{defaultValue:"t1",variant:"solidRounded",accentColor:"#A78BFA"},e.createElement(s,{className:"flex flex-col gap-2"},e.createElement(a,{value:"t1"},"Tab Name"),e.createElement(a,{value:"t2"},"Tab Name"),e.createElement(a,{value:"t3",disabled:!0},"Tab Name"))))),e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"페이지별 컬러 (accentColor 교체)"),e.createElement(r,{defaultValue:"a",variant:"underline",accentColor:"#22C55E"},e.createElement(s,{className:"w-full justify-start"},e.createElement(a,{value:"a"},"Green"),e.createElement(a,{value:"b"},"Tab")),e.createElement(l,{value:"a"}),e.createElement(l,{value:"b"}))))},A={name:"유형 갤러리 (5종 + 컬러)",render:()=>e.createElement("div",{className:"w-[min(100%,1100px)] space-y-10"},e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"Underline (기본) + Content"),e.createElement(r,{defaultValue:"one",variant:"underline",accentColor:"#A78BFA",className:"w-full"},e.createElement(s,{className:"w-full justify-start"},e.createElement(a,{value:"one"},"Tab Name"),e.createElement(a,{value:"two"},"Tab Name"),e.createElement(a,{value:"three",disabled:!0},"Tab Name")),e.createElement(l,{value:"one"},e.createElement("div",{className:"rounded-md border p-4 text-sm text-muted-foreground"},"Content 영역 예시")),e.createElement(l,{value:"two"},e.createElement("div",{className:"rounded-md border p-4 text-sm text-muted-foreground"},"Content 영역 예시")))),e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"Slant (상단 메뉴 느낌)"),e.createElement(r,{defaultValue:"a",variant:"slant",accentColor:"#4F378A",className:"w-full"},e.createElement(s,{className:"w-full justify-start"},e.createElement(a,{value:"a"},"캐릭터 설정"),e.createElement(a,{value:"b"},"캐릭터 비교"),e.createElement(a,{value:"c"},"공통 설정 관리")))),e.createElement("div",{className:"grid gap-8 md:grid-cols-2"},e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"Solid (dark)"),e.createElement(r,{defaultValue:"t1",variant:"solid",accentColor:"#A78BFA",className:"w-full"},e.createElement(s,{className:"w-full justify-start"},e.createElement(a,{value:"t1"},"Tab Name"),e.createElement(a,{value:"t2"},"Tab Name"),e.createElement(a,{value:"t3",disabled:!0},"Tab Name")))),e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"Solid Rounded (dark pill)"),e.createElement(r,{defaultValue:"t1",variant:"solidRounded",accentColor:"#A78BFA",className:"w-full"},e.createElement(s,{className:"w-full justify-start gap-3"},e.createElement(a,{value:"t1"},"Tab Name"),e.createElement(a,{value:"t2"},"Tab Name"),e.createElement(a,{value:"t3",disabled:!0},"Tab Name"))))),e.createElement("div",{className:"space-y-3"},e.createElement("p",{className:"text-sm font-medium"},"페이지별 컬러 예시"),e.createElement("div",{className:"space-y-4"},e.createElement(r,{defaultValue:"a",variant:"underline",accentColor:"#22C55E",className:"w-full"},e.createElement(s,{className:"w-full justify-start"},e.createElement(a,{value:"a"},"Green"),e.createElement(a,{value:"b"},"Tab"))),e.createElement(r,{defaultValue:"a",variant:"underline",accentColor:"#EF4444",className:"w-full"},e.createElement(s,{className:"w-full justify-start"},e.createElement(a,{value:"a"},"Red"),e.createElement(a,{value:"b"},"Tab"))),e.createElement(r,{defaultValue:"a",variant:"underline",accentColor:"#3B82F6",className:"w-full"},e.createElement(s,{className:"w-full justify-start"},e.createElement(a,{value:"a"},"Blue"),e.createElement(a,{value:"b"},"Tab"))))))};var F,_,B;E.parameters={...E.parameters,docs:{...(F=E.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">\r
      <TabsList>\r
        <TabsTrigger value="account">Account</TabsTrigger>\r
        <TabsTrigger value="password">Password</TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="account">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Account Settings</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Make changes to your account here. Click save when you're done.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="password">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Password Settings</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Change your password here. After saving, you'll be logged out.\r
          </p>\r
        </div>\r
      </TabsContent>\r
    </Tabs>
}`,...(B=(_=E.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var P,I,k;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" orientation="vertical">\r
      <TabsList>\r
        <TabsTrigger value="account">Account</TabsTrigger>\r
        <TabsTrigger value="password">Password</TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="account">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Account Settings</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Make changes to your account here. Click save when you're done.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="password">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Password Settings</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Change your password here. After saving, you'll be logged out.\r
          </p>\r
        </div>\r
      </TabsContent>\r
    </Tabs>
}`,...(k=(I=x.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var G,M,D;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" className="w-[500px]">\r
      <TabsList className="grid w-full grid-cols-3">\r
        <TabsTrigger value="overview">Overview</TabsTrigger>\r
        <TabsTrigger value="analytics">Analytics</TabsTrigger>\r
        <TabsTrigger value="reports">Reports</TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="overview">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Overview</h3>\r
          <p className="text-sm text-muted-foreground">\r
            View your account overview and recent activity.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="analytics">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Analytics</h3>\r
          <p className="text-sm text-muted-foreground">\r
            View detailed analytics about your account.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="reports">\r
        <div className="p-4 border rounded-md">\r
          <h3 className="font-semibold mb-2">Reports</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Generate and view reports.\r
          </p>\r
        </div>\r
      </TabsContent>\r
    </Tabs>
}`,...(D=(M=w.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var H,$,U;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-[400px]">\r
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
    </Tabs>
}`,...(U=($=y.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var O,W,K;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    </Tabs>
}`,...(K=(W=h.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var q,z,J;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "디자인 유형들",
  render: () => <div className="w-[min(100%,980px)] space-y-8">\r
      <div className="space-y-3">\r
        <p className="text-sm font-medium">Slant (상단 예시 느낌)</p>\r
        <Tabs defaultValue="a" variant="slant" className="w-full">\r
          <TabsList className="w-full justify-start">\r
            <TabsTrigger value="a">캐릭터 설정</TabsTrigger>\r
            <TabsTrigger value="b">캐릭터 비교</TabsTrigger>\r
            <TabsTrigger value="c">공통 설정 관리</TabsTrigger>\r
          </TabsList>\r
        </Tabs>\r
      </div>\r
\r
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">\r
        <div className="space-y-3">\r
          <p className="text-sm font-medium">Underline</p>\r
          <Tabs defaultValue="t1" variant="underline" accentColor="#A78BFA">\r
            <TabsList className="w-full justify-start">\r
              <TabsTrigger value="t1">Tab Name</TabsTrigger>\r
            </TabsList>\r
          </Tabs>\r
          <Tabs defaultValue="t1" variant="underline" accentColor="#A78BFA">\r
            <TabsList className="w-full justify-start">\r
              <TabsTrigger value="t1">Tab Name</TabsTrigger>\r
              <TabsTrigger value="t2" disabled>\r
                Tab Name\r
              </TabsTrigger>\r
            </TabsList>\r
          </Tabs>\r
        </div>\r
\r
        <div className="space-y-3">\r
          <p className="text-sm font-medium">Underline (3 tabs)</p>\r
          <Tabs defaultValue="t1" variant="underline" accentColor="#A78BFA">\r
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
          <p className="text-sm font-medium">Solid</p>\r
          <Tabs defaultValue="t1" variant="solid" accentColor="#A78BFA">\r
            <TabsList>\r
              <TabsTrigger value="t1">Tab Name</TabsTrigger>\r
            </TabsList>\r
          </Tabs>\r
          <Tabs defaultValue="t1" variant="solid" accentColor="#A78BFA">\r
            <TabsList className="flex flex-col">\r
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
          <p className="text-sm font-medium">Solid Rounded</p>\r
          <Tabs defaultValue="t1" variant="solidRounded" accentColor="#A78BFA">\r
            <TabsList className="flex flex-col gap-2">\r
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
        <p className="text-sm font-medium">페이지별 컬러 (accentColor 교체)</p>\r
        <Tabs defaultValue="a" variant="underline" accentColor="#22C55E">\r
          <TabsList className="w-full justify-start">\r
            <TabsTrigger value="a">Green</TabsTrigger>\r
            <TabsTrigger value="b">Tab</TabsTrigger>\r
          </TabsList>\r
          <TabsContent value="a" />\r
          <TabsContent value="b" />\r
        </Tabs>\r
      </div>\r
    </div>
}`,...(J=(z=C.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,X,Y;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
        <p className="text-sm font-medium">Slant (상단 메뉴 느낌)</p>\r
        <Tabs defaultValue="a" variant="slant" accentColor="#4F378A" className="w-full">\r
          <TabsList className="w-full justify-start">\r
            <TabsTrigger value="a">캐릭터 설정</TabsTrigger>\r
            <TabsTrigger value="b">캐릭터 비교</TabsTrigger>\r
            <TabsTrigger value="c">공통 설정 관리</TabsTrigger>\r
          </TabsList>\r
        </Tabs>\r
      </div>\r
\r
      <div className="grid gap-8 md:grid-cols-2">\r
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
}`,...(Y=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Be=["Default","VerticalTabs","ThreeTabs","Disabled","FullWidth","VariantsLikeDesign","VariantsGallery"];export{E as Default,y as Disabled,h as FullWidth,w as ThreeTabs,A as VariantsGallery,C as VariantsLikeDesign,x as VerticalTabs,Be as __namedExportsOrder,_e as default};
