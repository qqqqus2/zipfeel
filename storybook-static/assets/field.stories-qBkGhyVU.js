import{r as O,R as e}from"./index-DRjF_FHU.js";import{c as U}from"./index-DGwXhxKC.js";import{c as r}from"./utils-BQHNewu7.js";import{L as j}from"./label-eTDArUNC.js";import{S as q}from"./separator-C-vl3V_v.js";import{I as d}from"./input-D3tGSS6G.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-BKlBQwGM.js";function z({className:a,...t}){return React.createElement("fieldset",{"data-slot":"field-set",className:r("flex flex-col gap-6","has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",a),...t})}function W({className:a,variant:t="legend",...l}){return React.createElement("legend",{"data-slot":"field-legend","data-variant":t,className:r("mb-3 font-medium","data-[variant=legend]:text-base","data-[variant=label]:text-sm",a),...l})}function F({className:a,...t}){return React.createElement("div",{"data-slot":"field-group",className:r("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",a),...t})}const H=U("group/field data-[invalid=true]:text-destructive flex w-full gap-3",{variants:{orientation:{vertical:["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],horizontal:["flex-row items-center","[&>[data-slot=field-label]]:flex-auto","has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px has-[>[data-slot=field-content]]:items-start"],responsive:["@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto flex-col [&>*]:w-full [&>.sr-only]:w-auto","@md/field-group:[&>[data-slot=field-label]]:flex-auto","@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"]}},defaultVariants:{orientation:"vertical"}});function n({className:a,orientation:t="vertical",...l}){return React.createElement("div",{role:"group","data-slot":"field","data-orientation":t,className:r(H({orientation:t}),a),...l})}function i({className:a,...t}){return React.createElement("div",{"data-slot":"field-content",className:r("group/field-content flex flex-1 flex-col gap-1.5 leading-snug",a),...t})}function o({className:a,...t}){return React.createElement(j,{"data-slot":"field-label",className:r("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50","has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>[data-slot=field]]:p-4","has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",a),...t})}function A({className:a,...t}){return React.createElement("div",{"data-slot":"field-label",className:r("flex w-fit items-center gap-2 text-sm font-medium leading-snug group-data-[disabled=true]/field:opacity-50",a),...t})}function g({className:a,...t}){return React.createElement("p",{"data-slot":"field-description",className:r("text-muted-foreground text-sm font-normal leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance","nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",a),...t})}function h({children:a,className:t,...l}){return React.createElement("div",{"data-slot":"field-separator","data-content":!!a,className:r("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",t),...l},React.createElement(q,{className:"absolute inset-0 top-1/2"}),a&&React.createElement("span",{className:"bg-background text-muted-foreground relative mx-auto block w-fit px-2","data-slot":"field-separator-content"},a))}function B({className:a,children:t,errors:l,...P}){const E=O.useMemo(()=>{var b;return t||(l?(l==null?void 0:l.length)===1&&((b=l[0])!=null&&b.message)?l[0].message:React.createElement("ul",{className:"ml-4 flex list-disc flex-col gap-1"},l.map((s,V)=>(s==null?void 0:s.message)&&React.createElement("li",{key:V},s.message))):null)},[t,l]);return E?React.createElement("div",{role:"alert","data-slot":"field-error",className:r("text-destructive text-sm font-normal",a),...P},E):null}n.__docgenInfo={description:"",methods:[],displayName:"Field",props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};o.__docgenInfo={description:"",methods:[],displayName:"FieldLabel"};g.__docgenInfo={description:"",methods:[],displayName:"FieldDescription"};B.__docgenInfo={description:"",methods:[],displayName:"FieldError"};F.__docgenInfo={description:"",methods:[],displayName:"FieldGroup"};W.__docgenInfo={description:"",methods:[],displayName:"FieldLegend",props:{variant:{defaultValue:{value:'"legend"',computed:!1},required:!1}}};h.__docgenInfo={description:"",methods:[],displayName:"FieldSeparator"};z.__docgenInfo={description:"",methods:[],displayName:"FieldSet"};i.__docgenInfo={description:"",methods:[],displayName:"FieldContent"};A.__docgenInfo={description:"",methods:[],displayName:"FieldTitle"};const te={title:"UI/Field",component:n,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>e.createElement("div",{className:"w-[min(100%,420px)]"},e.createElement(n,null,e.createElement(o,{htmlFor:"field-email"},"Email"),e.createElement(i,null,e.createElement(d,{id:"field-email",type:"email",placeholder:"name@example.com"}),e.createElement(g,null,"We'll never share your email with anyone else."))))},m={render:()=>e.createElement("div",{className:"w-[min(100%,480px)]"},e.createElement(n,{orientation:"horizontal"},e.createElement(o,{htmlFor:"field-name"},"Name"),e.createElement(i,null,e.createElement(d,{id:"field-name",placeholder:"Jane Doe"}))))},p={render:()=>e.createElement("div",{className:"w-[min(100%,420px)]"},e.createElement(n,{"data-invalid":!0},e.createElement(o,{htmlFor:"field-password"},"Password"),e.createElement(i,null,e.createElement(d,{id:"field-password",type:"password","aria-invalid":!0}),e.createElement(B,null,"Password must be at least 8 characters."))))},u={render:()=>e.createElement("div",{className:"w-[min(100%,480px)]"},e.createElement(z,null,e.createElement(W,null,"Account"),e.createElement(F,null,e.createElement(n,null,e.createElement(A,null,"Username"),e.createElement(i,null,e.createElement(d,{placeholder:"johndoe"}),e.createElement(g,null,"This is your public display name."))),e.createElement(h,null),e.createElement(n,null,e.createElement(o,{htmlFor:"field-bio"},"Bio"),e.createElement(i,null,e.createElement(d,{id:"field-bio",placeholder:"Tell us about yourself"}))))))},f={render:()=>e.createElement("div",{className:"w-[min(100%,480px)]"},e.createElement(F,null,e.createElement(n,null,e.createElement(o,{htmlFor:"a"},"Field A"),e.createElement(i,null,e.createElement(d,{id:"a"}))),e.createElement(h,null,"Or"),e.createElement(n,null,e.createElement(o,{htmlFor:"b"},"Field B"),e.createElement(i,null,e.createElement(d,{id:"b"})))))};var x,v,w;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="w-[min(100%,420px)]">\r
      <Field>\r
        <FieldLabel htmlFor="field-email">Email</FieldLabel>\r
        <FieldContent>\r
          <Input id="field-email" type="email" placeholder="name@example.com" />\r
          <FieldDescription>\r
            We&apos;ll never share your email with anyone else.\r
          </FieldDescription>\r
        </FieldContent>\r
      </Field>\r
    </div>
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,N,L;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="w-[min(100%,480px)]">\r
      <Field orientation="horizontal">\r
        <FieldLabel htmlFor="field-name">Name</FieldLabel>\r
        <FieldContent>\r
          <Input id="field-name" placeholder="Jane Doe" />\r
        </FieldContent>\r
      </Field>\r
    </div>
}`,...(L=(N=m.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var _,I,S;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="w-[min(100%,420px)]">\r
      <Field data-invalid={true}>\r
        <FieldLabel htmlFor="field-password">Password</FieldLabel>\r
        <FieldContent>\r
          <Input id="field-password" type="password" aria-invalid />\r
          <FieldError>Password must be at least 8 characters.</FieldError>\r
        </FieldContent>\r
      </Field>\r
    </div>
}`,...(S=(I=p.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var C,R,k;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="w-[min(100%,480px)]">\r
      <FieldSet>\r
        <FieldLegend>Account</FieldLegend>\r
        <FieldGroup>\r
          <Field>\r
            <FieldTitle>Username</FieldTitle>\r
            <FieldContent>\r
              <Input placeholder="johndoe" />\r
              <FieldDescription>\r
                This is your public display name.\r
              </FieldDescription>\r
            </FieldContent>\r
          </Field>\r
          <FieldSeparator />\r
          <Field>\r
            <FieldLabel htmlFor="field-bio">Bio</FieldLabel>\r
            <FieldContent>\r
              <Input id="field-bio" placeholder="Tell us about yourself" />\r
            </FieldContent>\r
          </Field>\r
        </FieldGroup>\r
      </FieldSet>\r
    </div>
}`,...(k=(R=u.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var D,G,T;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="w-[min(100%,480px)]">\r
      <FieldGroup>\r
        <Field>\r
          <FieldLabel htmlFor="a">Field A</FieldLabel>\r
          <FieldContent>\r
            <Input id="a" />\r
          </FieldContent>\r
        </Field>\r
        <FieldSeparator>Or</FieldSeparator>\r
        <Field>\r
          <FieldLabel htmlFor="b">Field B</FieldLabel>\r
          <FieldContent>\r
            <Input id="b" />\r
          </FieldContent>\r
        </Field>\r
      </FieldGroup>\r
    </div>
}`,...(T=(G=f.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};const ae=["Default","Horizontal","WithError","FieldSetGroup","FieldSeparatorWithLabel"];export{c as Default,f as FieldSeparatorWithLabel,u as FieldSetGroup,m as Horizontal,p as WithError,ae as __namedExportsOrder,te as default};
