import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as u}from"./index-DRjF_FHU.js";import{u as ne,P as y,c as S,a as oe}from"./index-BtmGPRf8.js";import{R as de,I as ie,c as K}from"./index-CwwKksZm.js";import{P as le}from"./index-DQDayTBB.js";import{u as ce}from"./index-B4iTqdRC.js";import{u as ue}from"./index-BbsOjWWI.js";import{c as C}from"./utils-BQHNewu7.js";import"./index-BKlBQwGM.js";import"./index-Bms3GI6n.js";var A="Tabs",[me]=oe(A,[K]),B=K(),[be,P]=me(A),q=u.forwardRef((r,a)=>{const{__scopeTabs:s,value:t,onValueChange:l,defaultValue:m,orientation:d="horizontal",dir:b,activationMode:h="automatic",...x}=r,c=ce(b),[i,g]=ne({prop:t,onChange:l,defaultProp:m??"",caller:A});return e.jsx(be,{scope:s,baseId:ue(),value:i,onValueChange:g,orientation:d,dir:c,activationMode:h,children:e.jsx(y.div,{dir:c,"data-orientation":d,...x,ref:a})})});q.displayName=A;var z="TabsList",U=u.forwardRef((r,a)=>{const{__scopeTabs:s,loop:t=!0,...l}=r,m=P(z,s),d=B(s);return e.jsx(de,{asChild:!0,...d,orientation:m.orientation,dir:m.dir,loop:t,children:e.jsx(y.div,{role:"tablist","aria-orientation":m.orientation,...l,ref:a})})});U.displayName=z;var J="TabsTrigger",Q=u.forwardRef((r,a)=>{const{__scopeTabs:s,value:t,disabled:l=!1,...m}=r,d=P(J,s),b=B(s),h=Z(d.baseId,t),x=ee(d.baseId,t),c=t===d.value;return e.jsx(ie,{asChild:!0,...b,focusable:!l,active:c,children:e.jsx(y.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":x,"data-state":c?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:h,...m,ref:a,onMouseDown:S(r.onMouseDown,i=>{!l&&i.button===0&&i.ctrlKey===!1?d.onValueChange(t):i.preventDefault()}),onKeyDown:S(r.onKeyDown,i=>{[" ","Enter"].includes(i.key)&&d.onValueChange(t)}),onFocus:S(r.onFocus,()=>{const i=d.activationMode!=="manual";!c&&!l&&i&&d.onValueChange(t)})})})});Q.displayName=J;var X="TabsContent",Y=u.forwardRef((r,a)=>{const{__scopeTabs:s,value:t,forceMount:l,children:m,...d}=r,b=P(X,s),h=Z(b.baseId,t),x=ee(b.baseId,t),c=t===b.value,i=u.useRef(c);return u.useEffect(()=>{const g=requestAnimationFrame(()=>i.current=!1);return()=>cancelAnimationFrame(g)},[]),e.jsx(le,{present:l||c,children:({present:g})=>e.jsx(y.div,{"data-state":c?"active":"inactive","data-orientation":b.orientation,role:"tabpanel","aria-labelledby":h,hidden:!g,id:x,tabIndex:0,...d,ref:a,style:{...r.style,animationDuration:i.current?"0s":void 0},children:g&&m})})});Y.displayName=X;function Z(r,a){return`${r}-trigger-${a}`}function ee(r,a){return`${r}-content-${a}`}var re=q,ae=U,se=Q,te=Y;const p=u.forwardRef(({className:r,orientation:a,...s},t)=>e.jsx(re,{ref:t,className:C("group",a==="vertical"&&"flex flex-row gap-4",r),orientation:a,...s}));p.displayName=re.displayName;const v=u.forwardRef(({className:r,...a},s)=>e.jsx(ae,{ref:s,className:C("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground","group-data-[orientation=vertical]:h-auto group-data-[orientation=vertical]:w-48 group-data-[orientation=vertical]:flex-col group-data-[orientation=vertical]:items-stretch group-data-[orientation=vertical]:justify-start",r),...a}));v.displayName=ae.displayName;const n=u.forwardRef(({className:r,...a},s)=>e.jsx(se,{ref:s,className:C("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm","group-data-[orientation=vertical]:w-full group-data-[orientation=vertical]:justify-start",r),...a}));n.displayName=se.displayName;const o=u.forwardRef(({className:r,...a},s)=>e.jsx(te,{ref:s,className:C("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","group-data-[orientation=vertical]:mt-0 group-data-[orientation=vertical]:min-w-0 group-data-[orientation=vertical]:flex-1",r),...a}));o.displayName=te.displayName;p.__docgenInfo={description:"",methods:[]};v.__docgenInfo={description:"",methods:[]};n.__docgenInfo={description:"",methods:[]};o.__docgenInfo={description:"",methods:[]};const ye={title:"UI/Tabs",component:p,parameters:{layout:"centered"},tags:["autodocs"]},f={render:()=>e.jsxs(p,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(v,{children:[e.jsx(n,{value:"account",children:"Account"}),e.jsx(n,{value:"password",children:"Password"})]}),e.jsx(o,{value:"account",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Account Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Make changes to your account here. Click save when you're done."})]})}),e.jsx(o,{value:"password",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Password Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password here. After saving, you'll be logged out."})]})})]})},T={render:()=>e.jsxs(p,{defaultValue:"account",orientation:"vertical",children:[e.jsxs(v,{children:[e.jsx(n,{value:"account",children:"Account"}),e.jsx(n,{value:"password",children:"Password"})]}),e.jsx(o,{value:"account",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Account Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Make changes to your account here. Click save when you're done."})]})}),e.jsx(o,{value:"password",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Password Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password here. After saving, you'll be logged out."})]})})]})},N={render:()=>e.jsxs(p,{defaultValue:"overview",className:"w-[500px]",children:[e.jsxs(v,{className:"grid w-full grid-cols-3",children:[e.jsx(n,{value:"overview",children:"Overview"}),e.jsx(n,{value:"analytics",children:"Analytics"}),e.jsx(n,{value:"reports",children:"Reports"})]}),e.jsx(o,{value:"overview",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Overview"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"View your account overview and recent activity."})]})}),e.jsx(o,{value:"analytics",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Analytics"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"View detailed analytics about your account."})]})}),e.jsx(o,{value:"reports",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Reports"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Generate and view reports."})]})})]})},j={render:()=>e.jsxs(p,{defaultValue:"tab1",className:"w-[400px]",children:[e.jsxs(v,{children:[e.jsx(n,{value:"tab1",children:"Enabled"}),e.jsx(n,{value:"tab2",disabled:!0,children:"Disabled"}),e.jsx(n,{value:"tab3",children:"Enabled"})]}),e.jsx(o,{value:"tab1",children:e.jsx("div",{className:"p-4 border rounded-md",children:e.jsx("p",{className:"text-sm",children:"This tab is enabled."})})}),e.jsx(o,{value:"tab3",children:e.jsx("div",{className:"p-4 border rounded-md",children:e.jsx("p",{className:"text-sm",children:"This tab is also enabled."})})})]})},w={render:()=>e.jsxs(p,{defaultValue:"home",className:"w-[600px]",children:[e.jsxs(v,{className:"w-full",children:[e.jsx(n,{value:"home",className:"flex-1",children:"Home"}),e.jsx(n,{value:"profile",className:"flex-1",children:"Profile"}),e.jsx(n,{value:"settings",className:"flex-1",children:"Settings"}),e.jsx(n,{value:"help",className:"flex-1",children:"Help"})]}),e.jsx(o,{value:"home",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Home"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Welcome to your home page."})]})}),e.jsx(o,{value:"profile",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Profile"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Manage your profile information."})]})}),e.jsx(o,{value:"settings",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your preferences."})]})}),e.jsx(o,{value:"help",children:e.jsxs("div",{className:"p-4 border rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Help"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Get help and support."})]})})]})};var V,_,I;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(I=(_=f.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,E,M;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(E=T.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var L,k,D;N.parameters={...N.parameters,docs:{...(L=N.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(D=(k=N.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var F,G,H;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(H=(G=j.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var $,O,W;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(W=(O=w.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const Ce=["Default","VerticalTabs","ThreeTabs","Disabled","FullWidth"];export{f as Default,j as Disabled,w as FullWidth,N as ThreeTabs,T as VerticalTabs,Ce as __namedExportsOrder,ye as default};
