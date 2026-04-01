import{r as a,R as e}from"./index-DRjF_FHU.js";import{c as J}from"./index-D1SQP9Z-.js";import{c as i}from"./utils-BQHNewu7.js";import{L as K}from"./label-D8BzrfBB.js";import{S as P}from"./separator-DqqCJVXh.js";import{I as o}from"./input-D3tGSS6G.js";import"./index-BKlBQwGM.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";function A({className:l,...t}){return a.createElement("fieldset",{"data-slot":"field-set",className:i("flex flex-col gap-6","has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",l),...t})}function B({className:l,variant:t="legend",...r}){return a.createElement("legend",{"data-slot":"field-legend","data-variant":t,className:i("mb-3 font-medium","data-[variant=legend]:text-base","data-[variant=label]:text-sm",l),...r})}function E({className:l,...t}){return a.createElement("div",{"data-slot":"field-group",className:i("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",l),...t})}const Q=J("group/field data-[invalid=true]:text-destructive flex w-full gap-3",{variants:{orientation:{vertical:["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],horizontal:["flex-row items-center","[&>[data-slot=field-label]]:flex-auto","has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px has-[>[data-slot=field-content]]:items-start"],responsive:["@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto flex-col [&>*]:w-full [&>.sr-only]:w-auto","@md/field-group:[&>[data-slot=field-label]]:flex-auto","@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"]}},defaultVariants:{orientation:"vertical"}});function n({className:l,orientation:t="vertical",...r}){return a.createElement("div",{role:"group","data-slot":"field","data-orientation":t,className:i(Q({orientation:t}),l),...r})}function d({className:l,...t}){return a.createElement("div",{"data-slot":"field-content",className:i("group/field-content flex flex-1 flex-col gap-1.5 leading-snug",l),...t})}function s({className:l,...t}){return a.createElement(K,{"data-slot":"field-label",className:i("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50","has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>[data-slot=field]]:p-4","has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",l),...t})}function H({className:l,...t}){return a.createElement("div",{"data-slot":"field-label",className:i("flex w-fit items-center gap-2 text-sm font-medium leading-snug group-data-[disabled=true]/field:opacity-50",l),...t})}function h({className:l,...t}){return a.createElement("p",{"data-slot":"field-description",className:i("text-muted-foreground text-sm font-normal leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance","nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",l),...t})}function v({children:l,className:t,...r}){return a.createElement("div",{"data-slot":"field-separator","data-content":!!l,className:i("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",t),...r},a.createElement(P,{className:"absolute inset-0 top-1/2"}),l&&a.createElement("span",{className:"bg-background text-muted-foreground relative mx-auto block w-fit px-2","data-slot":"field-separator-content"},l))}function M({className:l,children:t,errors:r,...O}){const x=a.useMemo(()=>{var b;return t||(r?(r==null?void 0:r.length)===1&&((b=r[0])!=null&&b.message)?r[0].message:a.createElement("ul",{className:"ml-4 flex list-disc flex-col gap-1"},r.map((m,U)=>(m==null?void 0:m.message)&&a.createElement("li",{key:U},m.message))):null)},[t,r]);return x?a.createElement("div",{role:"alert","data-slot":"field-error",className:i("text-destructive text-sm font-normal",l),...O},x):null}n.__docgenInfo={description:"",methods:[],displayName:"Field",props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};s.__docgenInfo={description:"",methods:[],displayName:"FieldLabel"};h.__docgenInfo={description:"",methods:[],displayName:"FieldDescription"};M.__docgenInfo={description:"",methods:[],displayName:"FieldError"};E.__docgenInfo={description:"",methods:[],displayName:"FieldGroup"};B.__docgenInfo={description:"",methods:[],displayName:"FieldLegend",props:{variant:{defaultValue:{value:'"legend"',computed:!1},required:!1}}};v.__docgenInfo={description:"",methods:[],displayName:"FieldSeparator"};A.__docgenInfo={description:"",methods:[],displayName:"FieldSet"};d.__docgenInfo={description:"",methods:[],displayName:"FieldContent"};H.__docgenInfo={description:"",methods:[],displayName:"FieldTitle"};const ie={title:"UI/Field",component:n,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>e.createElement("div",{className:"w-[min(100%,420px)]"},e.createElement(n,null,e.createElement(s,{htmlFor:"field-email"},"이메일"),e.createElement(d,null,e.createElement(o,{id:"field-email",type:"email",placeholder:"name@example.com"}),e.createElement(h,null,"이메일은 외부에 공개되지 않습니다."))))},p={render:()=>e.createElement("div",{className:"w-[min(100%,480px)]"},e.createElement(n,{orientation:"horizontal"},e.createElement(s,{htmlFor:"field-name"},"이름"),e.createElement(d,null,e.createElement(o,{id:"field-name",placeholder:"홍길동"}))))},u={name:"반응형(orientation=responsive)",render:()=>e.createElement("div",{className:"w-[min(100%,480px)]"},e.createElement(E,{className:"max-w-md"},e.createElement(n,{orientation:"responsive"},e.createElement(s,{htmlFor:"field-responsive"},"닉네임"),e.createElement(d,null,e.createElement(o,{id:"field-responsive",placeholder:"표시 이름"}),e.createElement(h,null,"좁은 화면에서는 세로, 넓으면 가로 배치됩니다.")))))},f={render:()=>e.createElement("div",{className:"w-[min(100%,420px)]"},e.createElement(n,{"data-invalid":!0},e.createElement(s,{htmlFor:"field-password"},"비밀번호"),e.createElement(d,null,e.createElement(o,{id:"field-password",type:"password","aria-invalid":!0}),e.createElement(M,null,"비밀번호는 8자 이상이어야 합니다."))))},F={render:()=>e.createElement("div",{className:"w-[min(100%,480px)]"},e.createElement(A,null,e.createElement(B,null,"계정"),e.createElement(E,null,e.createElement(n,null,e.createElement(H,null,"사용자 이름"),e.createElement(d,null,e.createElement(o,{placeholder:"johndoe"}),e.createElement(h,null,"다른 사용자에게 보이는 이름입니다."))),e.createElement(v,null),e.createElement(n,null,e.createElement(s,{htmlFor:"field-bio"},"소개"),e.createElement(d,null,e.createElement(o,{id:"field-bio",placeholder:"간단히 소개해 주세요"}))))))},g={render:()=>e.createElement("div",{className:"w-[min(100%,480px)]"},e.createElement(E,null,e.createElement(n,null,e.createElement(s,{htmlFor:"a"},"항목 A"),e.createElement(d,null,e.createElement(o,{id:"a"}))),e.createElement(v,null,"또는"),e.createElement(n,null,e.createElement(s,{htmlFor:"b"},"항목 B"),e.createElement(d,null,e.createElement(o,{id:"b"})))))};var N,w,y;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="w-[min(100%,420px)]">\r
      <Field>\r
        <FieldLabel htmlFor="field-email">이메일</FieldLabel>\r
        <FieldContent>\r
          <Input id="field-email" type="email" placeholder="name@example.com" />\r
          <FieldDescription>\r
            이메일은 외부에 공개되지 않습니다.\r
          </FieldDescription>\r
        </FieldContent>\r
      </Field>\r
    </div>
}`,...(y=(w=c.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var L,_,I;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="w-[min(100%,480px)]">\r
      <Field orientation="horizontal">\r
        <FieldLabel htmlFor="field-name">이름</FieldLabel>\r
        <FieldContent>\r
          <Input id="field-name" placeholder="홍길동" />\r
        </FieldContent>\r
      </Field>\r
    </div>
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var S,C,k;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "반응형(orientation=responsive)",
  render: () => <div className="w-[min(100%,480px)]">\r
      <FieldGroup className="max-w-md">\r
        <Field orientation="responsive">\r
          <FieldLabel htmlFor="field-responsive">닉네임</FieldLabel>\r
          <FieldContent>\r
            <Input id="field-responsive" placeholder="표시 이름" />\r
            <FieldDescription>좁은 화면에서는 세로, 넓으면 가로 배치됩니다.</FieldDescription>\r
          </FieldContent>\r
        </Field>\r
      </FieldGroup>\r
    </div>
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var D,G,z;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="w-[min(100%,420px)]">\r
      <Field data-invalid={true}>\r
        <FieldLabel htmlFor="field-password">비밀번호</FieldLabel>\r
        <FieldContent>\r
          <Input id="field-password" type="password" aria-invalid />\r
          <FieldError>비밀번호는 8자 이상이어야 합니다.</FieldError>\r
        </FieldContent>\r
      </Field>\r
    </div>
}`,...(z=(G=f.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var R,T,V;F.parameters={...F.parameters,docs:{...(R=F.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="w-[min(100%,480px)]">\r
      <FieldSet>\r
        <FieldLegend>계정</FieldLegend>\r
        <FieldGroup>\r
          <Field>\r
            <FieldTitle>사용자 이름</FieldTitle>\r
            <FieldContent>\r
              <Input placeholder="johndoe" />\r
              <FieldDescription>다른 사용자에게 보이는 이름입니다.</FieldDescription>\r
            </FieldContent>\r
          </Field>\r
          <FieldSeparator />\r
          <Field>\r
            <FieldLabel htmlFor="field-bio">소개</FieldLabel>\r
            <FieldContent>\r
              <Input id="field-bio" placeholder="간단히 소개해 주세요" />\r
            </FieldContent>\r
          </Field>\r
        </FieldGroup>\r
      </FieldSet>\r
    </div>
}`,...(V=(T=F.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var W,j,q;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="w-[min(100%,480px)]">\r
      <FieldGroup>\r
        <Field>\r
          <FieldLabel htmlFor="a">항목 A</FieldLabel>\r
          <FieldContent>\r
            <Input id="a" />\r
          </FieldContent>\r
        </Field>\r
        <FieldSeparator>또는</FieldSeparator>\r
        <Field>\r
          <FieldLabel htmlFor="b">항목 B</FieldLabel>\r
          <FieldContent>\r
            <Input id="b" />\r
          </FieldContent>\r
        </Field>\r
      </FieldGroup>\r
    </div>
}`,...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const de=["Default","Horizontal","Responsive","WithError","FieldSetGroup","FieldSeparatorWithLabel"];export{c as Default,g as FieldSeparatorWithLabel,F as FieldSetGroup,p as Horizontal,u as Responsive,f as WithError,de as __namedExportsOrder,ie as default};
