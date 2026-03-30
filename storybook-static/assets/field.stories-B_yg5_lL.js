import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as P}from"./index-DRjF_FHU.js";import{c as V}from"./index-DGwXhxKC.js";import{c as i}from"./utils-BQHNewu7.js";import{L as O}from"./label-Pe4rug27.js";import{S as U}from"./separator-D8q_o477.js";import{I as n}from"./input-jsi5Dy_U.js";import"./index-Bms3GI6n.js";import"./index-BKlBQwGM.js";function z({className:l,...a}){return e.jsx("fieldset",{"data-slot":"field-set",className:i("flex flex-col gap-6","has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",l),...a})}function A({className:l,variant:a="legend",...r}){return e.jsx("legend",{"data-slot":"field-legend","data-variant":a,className:i("mb-3 font-medium","data-[variant=legend]:text-base","data-[variant=label]:text-sm",l),...r})}function x({className:l,...a}){return e.jsx("div",{"data-slot":"field-group",className:i("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",l),...a})}const H=V("group/field data-[invalid=true]:text-destructive flex w-full gap-3",{variants:{orientation:{vertical:["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],horizontal:["flex-row items-center","[&>[data-slot=field-label]]:flex-auto","has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px has-[>[data-slot=field-content]]:items-start"],responsive:["@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto flex-col [&>*]:w-full [&>.sr-only]:w-auto","@md/field-group:[&>[data-slot=field-label]]:flex-auto","@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"]}},defaultVariants:{orientation:"vertical"}});function t({className:l,orientation:a="vertical",...r}){return e.jsx("div",{role:"group","data-slot":"field","data-orientation":a,className:i(H({orientation:a}),l),...r})}function d({className:l,...a}){return e.jsx("div",{"data-slot":"field-content",className:i("group/field-content flex flex-1 flex-col gap-1.5 leading-snug",l),...a})}function s({className:l,...a}){return e.jsx(O,{"data-slot":"field-label",className:i("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50","has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>[data-slot=field]]:p-4","has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",l),...a})}function W({className:l,...a}){return e.jsx("div",{"data-slot":"field-label",className:i("flex w-fit items-center gap-2 text-sm font-medium leading-snug group-data-[disabled=true]/field:opacity-50",l),...a})}function h({className:l,...a}){return e.jsx("p",{"data-slot":"field-description",className:i("text-muted-foreground text-sm font-normal leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance","nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",l),...a})}function F({children:l,className:a,...r}){return e.jsxs("div",{"data-slot":"field-separator","data-content":!!l,className:i("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",a),...r,children:[e.jsx(U,{className:"absolute inset-0 top-1/2"}),l&&e.jsx("span",{className:"bg-background text-muted-foreground relative mx-auto block w-fit px-2","data-slot":"field-separator-content",children:l})]})}function q({className:l,children:a,errors:r,...R}){const g=P.useMemo(()=>{var j;return a||(r?(r==null?void 0:r.length)===1&&((j=r[0])!=null&&j.message)?r[0].message:e.jsx("ul",{className:"ml-4 flex list-disc flex-col gap-1",children:r.map((o,B)=>(o==null?void 0:o.message)&&e.jsx("li",{children:o.message},B))}):null)},[a,r]);return g?e.jsx("div",{role:"alert","data-slot":"field-error",className:i("text-destructive text-sm font-normal",l),...R,children:g}):null}t.__docgenInfo={description:"",methods:[],displayName:"Field",props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};s.__docgenInfo={description:"",methods:[],displayName:"FieldLabel"};h.__docgenInfo={description:"",methods:[],displayName:"FieldDescription"};q.__docgenInfo={description:"",methods:[],displayName:"FieldError",props:{errors:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"{ message?: string } | undefined",elements:[{name:"signature",type:"object",raw:"{ message?: string }",signature:{properties:[{key:"message",value:{name:"string",required:!1}}]}},{name:"undefined"}]}],raw:"Array<{ message?: string } | undefined>"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"FieldGroup"};A.__docgenInfo={description:"",methods:[],displayName:"FieldLegend",props:{variant:{required:!1,tsType:{name:"union",raw:'"legend" | "label"',elements:[{name:"literal",value:'"legend"'},{name:"literal",value:'"label"'}]},description:"",defaultValue:{value:'"legend"',computed:!1}}}};F.__docgenInfo={description:"",methods:[],displayName:"FieldSeparator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};z.__docgenInfo={description:"",methods:[],displayName:"FieldSet"};d.__docgenInfo={description:"",methods:[],displayName:"FieldContent"};W.__docgenInfo={description:"",methods:[],displayName:"FieldTitle"};const ae={title:"UI/Field",component:t,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>e.jsx("div",{className:"w-[min(100%,420px)]",children:e.jsxs(t,{children:[e.jsx(s,{htmlFor:"field-email",children:"Email"}),e.jsxs(d,{children:[e.jsx(n,{id:"field-email",type:"email",placeholder:"name@example.com"}),e.jsx(h,{children:"We'll never share your email with anyone else."})]})]})})},m={render:()=>e.jsx("div",{className:"w-[min(100%,480px)]",children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(s,{htmlFor:"field-name",children:"Name"}),e.jsx(d,{children:e.jsx(n,{id:"field-name",placeholder:"Jane Doe"})})]})})},p={render:()=>e.jsx("div",{className:"w-[min(100%,420px)]",children:e.jsxs(t,{"data-invalid":!0,children:[e.jsx(s,{htmlFor:"field-password",children:"Password"}),e.jsxs(d,{children:[e.jsx(n,{id:"field-password",type:"password","aria-invalid":!0}),e.jsx(q,{children:"Password must be at least 8 characters."})]})]})})},u={render:()=>e.jsx("div",{className:"w-[min(100%,480px)]",children:e.jsxs(z,{children:[e.jsx(A,{children:"Account"}),e.jsxs(x,{children:[e.jsxs(t,{children:[e.jsx(W,{children:"Username"}),e.jsxs(d,{children:[e.jsx(n,{placeholder:"johndoe"}),e.jsx(h,{children:"This is your public display name."})]})]}),e.jsx(F,{}),e.jsxs(t,{children:[e.jsx(s,{htmlFor:"field-bio",children:"Bio"}),e.jsx(d,{children:e.jsx(n,{id:"field-bio",placeholder:"Tell us about yourself"})})]})]})]})})},f={render:()=>e.jsx("div",{className:"w-[min(100%,480px)]",children:e.jsxs(x,{children:[e.jsxs(t,{children:[e.jsx(s,{htmlFor:"a",children:"Field A"}),e.jsx(d,{children:e.jsx(n,{id:"a"})})]}),e.jsx(F,{children:"Or"}),e.jsxs(t,{children:[e.jsx(s,{htmlFor:"b",children:"Field B"}),e.jsx(d,{children:e.jsx(n,{id:"b"})})]})]})})};var b,v,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,N,L;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(I=p.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var C,k,E;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(k=u.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var T,D,G;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(G=(D=f.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const le=["Default","Horizontal","WithError","FieldSetGroup","FieldSeparatorWithLabel"];export{c as Default,f as FieldSeparatorWithLabel,u as FieldSetGroup,m as Horizontal,p as WithError,le as __namedExportsOrder,ae as default};
