import{r as l,R as a}from"./index-DRjF_FHU.js";import{u as Y,P as w,c as R,a as Z}from"./index-BtmGPRf8.js";import{R as aa,I as ea,c as B}from"./index-CwwKksZm.js";import{P as ta}from"./index-DQDayTBB.js";import{u as ra}from"./index-B4iTqdRC.js";import{u as sa}from"./index-BbsOjWWI.js";import{j as p}from"./jsx-runtime-DiklIkkE.js";import{c as E}from"./utils-BQHNewu7.js";import"./index-BKlBQwGM.js";import"./index-Bms3GI6n.js";var C="Tabs",[na]=Z(C,[B]),D=B(),[la,V]=na(C),G=l.forwardRef((t,r)=>{const{__scopeTabs:s,value:n,onValueChange:i,defaultValue:c,orientation:o="horizontal",dir:v,activationMode:f="automatic",...N}=t,m=ra(v),[d,T]=Y({prop:n,onChange:i,defaultProp:c??"",caller:C});return p.jsx(la,{scope:s,baseId:sa(),value:d,onValueChange:T,orientation:o,dir:m,activationMode:f,children:p.jsx(w.div,{dir:m,"data-orientation":o,...N,ref:r})})});G.displayName=C;var M="TabsList",H=l.forwardRef((t,r)=>{const{__scopeTabs:s,loop:n=!0,...i}=t,c=V(M,s),o=D(s);return p.jsx(aa,{asChild:!0,...o,orientation:c.orientation,dir:c.dir,loop:n,children:p.jsx(w.div,{role:"tablist","aria-orientation":c.orientation,...i,ref:r})})});H.displayName=M;var $="TabsTrigger",W=l.forwardRef((t,r)=>{const{__scopeTabs:s,value:n,disabled:i=!1,...c}=t,o=V($,s),v=D(s),f=q(o.baseId,n),N=z(o.baseId,n),m=n===o.value;return p.jsx(ea,{asChild:!0,...v,focusable:!i,active:m,children:p.jsx(w.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":N,"data-state":m?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:f,...c,ref:r,onMouseDown:R(t.onMouseDown,d=>{!i&&d.button===0&&d.ctrlKey===!1?o.onValueChange(n):d.preventDefault()}),onKeyDown:R(t.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&o.onValueChange(n)}),onFocus:R(t.onFocus,()=>{const d=o.activationMode!=="manual";!m&&!i&&d&&o.onValueChange(n)})})})});W.displayName=$;var K="TabsContent",U=l.forwardRef((t,r)=>{const{__scopeTabs:s,value:n,forceMount:i,children:c,...o}=t,v=V(K,s),f=q(v.baseId,n),N=z(v.baseId,n),m=n===v.value,d=l.useRef(m);return l.useEffect(()=>{const T=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(T)},[]),p.jsx(ta,{present:i||m,children:({present:T})=>p.jsx(w.div,{"data-state":m?"active":"inactive","data-orientation":v.orientation,role:"tabpanel","aria-labelledby":f,hidden:!T,id:N,tabIndex:0,...o,ref:r,style:{...t.style,animationDuration:d.current?"0s":void 0},children:T&&c})})});U.displayName=K;function q(t,r){return`${t}-trigger-${r}`}function z(t,r){return`${t}-content-${r}`}var O=G,J=H,Q=W,X=U;const u=l.forwardRef(({className:t,orientation:r,variant:s="underline",accentColor:n,...i},c)=>l.createElement(O,{ref:c,"data-variant":s,"data-orientation":r,style:n?{"--tabs-accent":n}:{"--tabs-accent":"rgb(var(--point-color-2))"},className:E("group/tabs",r==="vertical"&&"flex flex-row gap-4",t),orientation:r,...i}));u.displayName=O.displayName;const b=l.forwardRef(({className:t,...r},s)=>l.createElement("div",{className:E("contents","group-data-[variant=solidRounded]/tabs:relative group-data-[variant=solidRounded]/tabs:inline-flex ","group-data-[variant=solidRounded]/tabs:after:absolute group-data-[variant=solidRounded]/tabs:after:inset-0 ","group-data-[variant=solidRounded]/tabs:after:translate-y-1 group-data-[variant=solidRounded]/tabs:after:bg-sub-3","group-data-[variant=solidRounded]/tabs:after:rounded-l-full")},l.createElement(J,{ref:s,className:E("relative inline-flex items-center justify-center text-muted-foreground","group-data-[orientation=vertical]/tabs:h-auto group-data-[orientation=vertical]/tabs:w-48 group-data-[orientation=vertical]/tabs:flex-col group-data-[orientation=vertical]/tabs:items-stretch group-data-[orientation=vertical]/tabs:justify-start","group-data-[variant=underline]/tabs:h-10 group-data-[variant=underline]/tabs:gap-8 group-data-[variant=underline]/tabs:border-b group-data-[variant=underline]/tabs:border-border group-data-[variant=underline]/tabs:bg-transparent group-data-[variant=underline]/tabs:px-1","group-data-[variant=solid]/tabs:gap-0 group-data-[variant=solid]/tabs:rounded-none","group-data-[variant=solid]/tabs:bg-transparent group-data-[variant=solid]/tabs:p-0","group-data-[variant=solidRounded]/tabs:z-10 group-data-[variant=solidRounded]/tabs:h-12 group-data-[variant=solidRounded]/tabs:gap-0","group-data-[variant=solidRounded]/tabs:overflow-hidden group-data-[variant=solidRounded]/tabs:rounded-l-full","group-data-[variant=solidRounded]/tabs:bg-black/80","group-data-[variant=slash]/tabs:h-10 group-data-[variant=slash]/tabs:gap-6 group-data-[variant=slash]/tabs:bg-transparent group-data-[variant=slash]/tabs:p-0",t),...r})));b.displayName=J.displayName;const e=l.forwardRef(({className:t,...r},s)=>l.createElement(Q,{ref:s,className:E("relative inline-flex items-center justify-center whitespace-nowrap text-sm font-normal ring-offset-background transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none","group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start","group-data-[variant=underline]/tabs:disabled:text-gray-7","group-data-[variant=underline]/tabs:h-10 group-data-[variant=underline]/tabs:px-2 group-data-[variant=underline]/tabs:text-gray-6","group-data-[variant=underline]/tabs:data-[state=active]:text-black group-data-[variant=underline]/tabs:data-[state=active]:font-bold","group-data-[variant=underline]/tabs:after:absolute group-data-[variant=underline]/tabs:after:left-0 group-data-[variant=underline]/tabs:after:right-0","group-data-[variant=underline]/tabs:after:-bottom-[1px] group-data-[variant=underline]/tabs:after:h-[3px]","group-data-[variant=underline]/tabs:after:rounded-full group-data-[variant=underline]/tabs:after:opacity-0 group-data-[variant=underline]/tabs:after:transition-opacity","group-data-[variant=underline]/tabs:after:bg-[color:var(--tabs-accent)] data-[state=active]:after:opacity-100","group-data-[variant=solid]/tabs:h-12 group-data-[variant=solid]/tabs:min-w-[180px] group-data-[variant=solid]/tabs:rounded-none","group-data-[variant=solid]/tabs:bg-neutral-800 group-data-[variant=solid]/tabs:text-white/70","group-data-[variant=solid]/tabs:data-[state=active]:text-white","group-data-[variant=solid]/tabs:border-b-4 group-data-[variant=solid]/tabs:border-b-[color:var(--tabs-accent)]","group-data-[variant=solidRounded]/tabs:disabled:text-black","group-data-[variant=solidRounded]/tabs:h-12 group-data-[variant=solidRounded]/tabs:px-6","group-data-[variant=solidRounded]/tabs:bg-black/80 group-data-[variant=solidRounded]/tabs:text-white/70 group-data-[variant=solidRounded]/tabs:text-gray-3","group-data-[variant=solidRounded]/tabs:data-[state=active]:text-white","group-data-[variant=slash]/tabs:h-10 group-data-[variant=slash]/tabs:px-6 group-data-[variant=slash]/tabs:font-semibold","group-data-[variant=slash]/tabs:text-foreground/80","group-data-[variant=slash]/tabs:data-[state=active]:text-white","group-data-[variant=slash]/tabs:data-[state=active]:bg-[color:var(--tabs-accent)]","group-data-[variant=slash]/tabs:data-[state=active]:[clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)]",t),...r}));e.displayName=Q.displayName;const g=l.forwardRef(({className:t,...r},s)=>l.createElement(X,{ref:s,className:E("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","group-data-[orientation=vertical]/tabs:mt-0 group-data-[orientation=vertical]/tabs:min-w-0 group-data-[orientation=vertical]/tabs:flex-1",t),...r}));g.displayName=X.displayName;u.__docgenInfo={description:`Tabs variants\r
- underline: 밑줄형\r
- solid: 다크 솔리드형\r
- solidRounded: 다크 라운드형\r
- slash: 사선 탭\r
\r
theme는 \`--tabs-accent\` CSS 변수로 전달됩니다.`,methods:[],props:{variant:{defaultValue:{value:'"underline"',computed:!1},required:!1}}};b.__docgenInfo={description:"",methods:[]};e.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[]};const Ta={title:"UI/Tabs",component:u,parameters:{layout:"centered"},tags:["autodocs"]},x={render:()=>a.createElement("div",{className:"grid grid-cols-1 gap-4"},a.createElement(u,{defaultValue:"tab1",className:"w-[400px]"},a.createElement(b,null,a.createElement(e,{value:"tab1"},"Enabled"),a.createElement(e,{value:"tab2",disabled:!0},"Disabled"),a.createElement(e,{value:"tab3"},"Enabled")),a.createElement(g,{value:"tab1"},a.createElement("div",{className:"p-4 border rounded-md"},a.createElement("p",{className:"text-sm"},"This tab is enabled."))),a.createElement(g,{value:"tab3"},a.createElement("div",{className:"p-4 border rounded-md"},a.createElement("p",{className:"text-sm"},"This tab is also enabled.")))))},h={render:()=>a.createElement(u,{defaultValue:"home",className:"w-[600px]"},a.createElement(b,{className:"w-full"},a.createElement(e,{value:"home",className:"flex-1"},"Home"),a.createElement(e,{value:"profile",className:"flex-1"},"Profile"),a.createElement(e,{value:"settings",className:"flex-1"},"Settings"),a.createElement(e,{value:"help",className:"flex-1"},"Help")),a.createElement(g,{value:"home"},a.createElement("div",{className:"p-4 border rounded-md"},a.createElement("h3",{className:"font-semibold mb-2"},"Home"),a.createElement("p",{className:"text-sm text-muted-foreground"},"Welcome to your home page."))),a.createElement(g,{value:"profile"},a.createElement("div",{className:"p-4 border rounded-md"},a.createElement("h3",{className:"font-semibold mb-2"},"Profile"),a.createElement("p",{className:"text-sm text-muted-foreground"},"Manage your profile information."))),a.createElement(g,{value:"settings"},a.createElement("div",{className:"p-4 border rounded-md"},a.createElement("h3",{className:"font-semibold mb-2"},"Settings"),a.createElement("p",{className:"text-sm text-muted-foreground"},"Configure your preferences."))),a.createElement(g,{value:"help"},a.createElement("div",{className:"p-4 border rounded-md"},a.createElement("h3",{className:"font-semibold mb-2"},"Help"),a.createElement("p",{className:"text-sm text-muted-foreground"},"Get help and support."))))},y={name:"유형 갤러리 (5종 + 컬러)",render:()=>a.createElement("div",{className:"w-[min(100%,1100px)] space-y-10"},a.createElement("div",{className:"space-y-3"},a.createElement("p",{className:"text-sm font-medium"},"Underline (기본) + Content"),a.createElement(u,{defaultValue:"one",variant:"underline",accentColor:"#A78BFA",className:"w-full"},a.createElement(b,{className:"w-full justify-start"},a.createElement(e,{value:"one"},"Tab Name"),a.createElement(e,{value:"two"},"Tab Name"),a.createElement(e,{value:"three",disabled:!0},"Tab Name")),a.createElement(g,{value:"one"},a.createElement("div",{className:"rounded-md border p-4 text-sm text-muted-foreground"},"Content 영역 예시")),a.createElement(g,{value:"two"},a.createElement("div",{className:"rounded-md border p-4 text-sm text-muted-foreground"},"Content 영역 예시")))),a.createElement("div",{className:"space-y-3"},a.createElement("p",{className:"text-sm font-medium"},"Slash (page tab)"),a.createElement(u,{defaultValue:"a",variant:"slash",accentColor:"#4F378A",className:"w-full"},a.createElement(b,{className:"w-full justify-start"},a.createElement(e,{value:"a"},"캐릭터 설정"),a.createElement(e,{value:"b"},"캐릭터 비교"),a.createElement(e,{value:"c"},"공통 설정 관리")))),a.createElement("div",{className:"grid gap-8 md:grid-cols-1"},a.createElement("div",{className:"space-y-3"},a.createElement("p",{className:"text-sm font-medium"},"Solid (dark)"),a.createElement(u,{defaultValue:"t1",variant:"solid",accentColor:"#A78BFA",className:"w-full"},a.createElement(b,{className:"w-full justify-start"},a.createElement(e,{value:"t1"},"Tab Name"),a.createElement(e,{value:"t2"},"Tab Name"),a.createElement(e,{value:"t3",disabled:!0},"Tab Name")))),a.createElement("div",{className:"space-y-3"},a.createElement("p",{className:"text-sm font-medium"},"Solid Rounded (dark pill)"),a.createElement(u,{defaultValue:"t1",variant:"solidRounded",accentColor:"#A78BFA",className:"w-full"},a.createElement(b,{className:"w-full justify-start gap-3"},a.createElement(e,{value:"t1"},"Tab Name"),a.createElement(e,{value:"t2"},"Tab Name"),a.createElement(e,{value:"t3",disabled:!0},"Tab Name"))))),a.createElement("div",{className:"space-y-3"},a.createElement("p",{className:"text-sm font-medium"},"페이지별 컬러 예시"),a.createElement("div",{className:"space-y-4"},a.createElement(u,{defaultValue:"a",variant:"underline",accentColor:"#22C55E",className:"w-full"},a.createElement(b,{className:"w-full justify-start"},a.createElement(e,{value:"a"},"Green"),a.createElement(e,{value:"b"},"Tab"))),a.createElement(u,{defaultValue:"a",variant:"underline",accentColor:"#EF4444",className:"w-full"},a.createElement(b,{className:"w-full justify-start"},a.createElement(e,{value:"a"},"Red"),a.createElement(e,{value:"b"},"Tab"))),a.createElement(u,{defaultValue:"a",variant:"underline",accentColor:"#3B82F6",className:"w-full"},a.createElement(b,{className:"w-full justify-start"},a.createElement(e,{value:"a"},"Blue"),a.createElement(e,{value:"b"},"Tab"))))))};var j,_,A;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 gap-4">\r
      <Tabs defaultValue="tab1" className="w-[400px]">\r
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
}`,...(A=(_=x.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var L,S,F;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(S=h.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var I,P,k;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(k=(P=y.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const fa=["Default","FullWidth","VariantsGallery"];export{x as Default,h as FullWidth,y as VariantsGallery,fa as __namedExportsOrder,Ta as default};
