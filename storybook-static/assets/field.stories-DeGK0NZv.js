import{r as a,R as e}from"./index-DRjF_FHU.js";import{c as ae}from"./index-D1SQP9Z-.js";import{c as s}from"./utils-BQHNewu7.js";import{L as ne}from"./label-D8BzrfBB.js";import{S as ie}from"./separator-DqqCJVXh.js";import{I as d}from"./input-BjRrX8n3.js";import{I as de}from"./icon-BAFjukc-.js";import{T as oe,a as se,b as me,c as ce}from"./tooltip-0C1DVLUr.js";import"./index-BKlBQwGM.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index--M6JEWVJ.js";import"./index-BvuF3t5A.js";import"./index-BBUvKJIO.js";import"./index-BrPKIHdt.js";import"./index-D1Rwxldo.js";import"./index-od4dH0T8.js";import"./index-BKFqAqpN.js";function te({className:t,...l}){return a.createElement("fieldset",{"data-slot":"field-set",className:s("flex flex-col gap-6","has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",t),...l})}function le({className:t,variant:l="legend",...r}){return a.createElement("legend",{"data-slot":"field-legend","data-variant":l,className:s("mb-3 font-medium","data-[variant=legend]:text-base","data-[variant=label]:text-sm",t),...r})}function y({className:t,...l}){return a.createElement("div",{"data-slot":"field-group",className:s("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",t),...l})}const ue=ae("group/field data-[invalid=true]:text-destructive flex w-full min-w-0 gap-3",{variants:{orientation:{vertical:["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],horizontal:["flex-row items-center","[&>[data-slot=field-label]]:flex-auto","has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px has-[>[data-slot=field-content]]:items-start"],responsive:["@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto flex-col [&>*]:w-full [&>.sr-only]:w-auto","@md/field-group:[&>[data-slot=field-label]]:flex-auto","@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"]}},defaultVariants:{orientation:"vertical"}});function n({className:t,orientation:l="vertical",invalid:r,...m}){const{"data-invalid":u,className:f,...c}=m,L=r===!0||r!==!1&&(u===!0||u==="");return a.createElement("div",{role:"group","data-slot":"field","data-orientation":l,"data-invalid":L?"true":void 0,className:s(ue({orientation:l}),t,f),...c})}function i({className:t,...l}){return a.createElement("div",{"data-slot":"field-content",className:s("group/field-content flex flex-1 flex-col gap-1.5 leading-snug",t),...l})}function o({className:t,required:l,children:r,...m}){return a.createElement(ne,{"data-slot":"field-label","data-required":l?"":void 0,className:s("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 group-data-[invalid=true]/field:text-destructive","has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>[data-slot=field]]:p-4","has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",t),...m},r,l?a.createElement("span",{className:"text-destructive","aria-hidden":"true"},"*"):null)}function re({className:t,required:l,children:r,...m}){return a.createElement("div",{"data-slot":"field-label","data-required":l?"":void 0,className:s("flex w-fit items-center gap-2 text-sm font-medium leading-snug group-data-[disabled=true]/field:opacity-50 group-data-[invalid=true]/field:text-destructive",t),...m},r,l?a.createElement("span",{className:"text-destructive","aria-hidden":"true"},"*"):null)}function p({className:t,...l}){return a.createElement("p",{"data-slot":"field-description",className:s("text-muted-foreground text-sm font-normal leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance","nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",t),...l})}function I({children:t,className:l,...r}){return a.createElement("div",{"data-slot":"field-separator","data-content":!!t,className:s("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",l),...r},a.createElement(ie,{className:"absolute inset-0 top-1/2"}),t&&a.createElement("span",{className:"bg-background text-muted-foreground relative mx-auto block w-fit px-2","data-slot":"field-separator-content"},t))}function C({className:t,children:l,errors:r,...m}){const u=a.useMemo(()=>{var f;return l||(r?(r==null?void 0:r.length)===1&&((f=r[0])!=null&&f.message)?r[0].message:a.createElement("ul",{className:"ml-4 flex list-disc flex-col gap-1"},r.map((c,L)=>(c==null?void 0:c.message)&&a.createElement("li",{key:L},c.message))):null)},[l,r]);return u?a.createElement("div",{role:"alert","data-slot":"field-error",className:s("text-destructive text-sm font-normal",t),...m},u):null}n.__docgenInfo={description:"",methods:[],displayName:"Field",props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};o.__docgenInfo={description:"",methods:[],displayName:"FieldLabel"};p.__docgenInfo={description:"",methods:[],displayName:"FieldDescription"};C.__docgenInfo={description:"",methods:[],displayName:"FieldError"};y.__docgenInfo={description:"",methods:[],displayName:"FieldGroup"};le.__docgenInfo={description:"",methods:[],displayName:"FieldLegend",props:{variant:{defaultValue:{value:'"legend"',computed:!1},required:!1}}};I.__docgenInfo={description:"",methods:[],displayName:"FieldSeparator"};te.__docgenInfo={description:"",methods:[],displayName:"FieldSet"};i.__docgenInfo={description:"",methods:[],displayName:"FieldContent"};re.__docgenInfo={description:"",methods:[],displayName:"FieldTitle"};const De={title:"UI/Field",component:n,parameters:{layout:"padded"},tags:["autodocs"]},F={render:()=>e.createElement("div",{className:"mx-auto w-full min-w-0 max-w-[420px]"},e.createElement(n,null,e.createElement(o,{htmlFor:"field-email"},"이메일"),e.createElement(i,null,e.createElement(d,{id:"field-email",type:"email",placeholder:"name@example.com"}),e.createElement(p,null,"이메일은 외부에 공개되지 않습니다."))))},x={render:()=>e.createElement("div",{className:"mx-auto w-full min-w-0 max-w-[480px]"},e.createElement(n,{orientation:"horizontal"},e.createElement(o,{htmlFor:"field-name"},"이름"),e.createElement(i,null,e.createElement(d,{id:"field-name",placeholder:"홍길동"}))))},v={name:"필수 라벨(FieldLabel required)",render:()=>e.createElement("div",{className:"mx-auto w-full min-w-0 max-w-[420px]"},e.createElement(n,null,e.createElement(o,{htmlFor:"field-req",required:!0},"휴대폰 번호"),e.createElement(i,null,e.createElement(d,{id:"field-req",type:"tel",placeholder:"010-0000-0000",required:!0}))))},g={name:"반응형(orientation=responsive)",render:()=>e.createElement("div",{className:"mx-auto w-full min-w-0 max-w-[480px]"},e.createElement(y,{className:"w-full min-w-0 max-w-md"},e.createElement(n,{orientation:"responsive"},e.createElement(o,{htmlFor:"field-responsive"},"닉네임"),e.createElement(i,null,e.createElement(d,{id:"field-responsive",placeholder:"표시 이름"}),e.createElement(p,null,"좁은 화면에서는 세로, 넓으면 가로 배치됩니다.")))))},E={name:"오류(invalid + aria-invalid)",render:()=>e.createElement("div",{className:"mx-auto w-full min-w-0 max-w-[420px]"},e.createElement(n,{invalid:!0},e.createElement(o,{htmlFor:"field-password"},"비밀번호"),e.createElement(i,null,e.createElement(d,{id:"field-password",type:"password","aria-invalid":!0,"aria-describedby":"field-password-error"}),e.createElement(C,{id:"field-password-error"},"비밀번호는 8자 이상이어야 합니다."))))},w={name:"필수 + 검증 오류",render:()=>e.createElement("div",{className:"mx-auto w-full min-w-0 max-w-[420px]"},e.createElement(n,{invalid:!0},e.createElement(o,{htmlFor:"field-code",required:!0},"인증 코드"),e.createElement(i,null,e.createElement(d,{id:"field-code",inputMode:"numeric",placeholder:"6자리",required:!0,"aria-invalid":!0,"aria-describedby":"field-code-error"}),e.createElement(C,{id:"field-code-error"},"코드를 입력해 주세요."))))},b={render:()=>e.createElement("div",{className:"mx-auto w-full min-w-0 max-w-[480px]"},e.createElement(te,null,e.createElement(le,null,"계정"),e.createElement(y,null,e.createElement(n,null,e.createElement(re,null,"사용자 이름"),e.createElement(i,null,e.createElement(d,{placeholder:"johndoe"}),e.createElement(p,null,"다른 사용자에게 보이는 이름입니다."))),e.createElement(I,null),e.createElement(n,null,e.createElement(o,{htmlFor:"field-bio"},"소개"),e.createElement(i,null,e.createElement(d,{id:"field-bio",placeholder:"간단히 소개해 주세요"}))))))},h={name:"라벨 + 툴팁",decorators:[t=>e.createElement(ce,{delayDuration:200},e.createElement(t,null))],render:()=>e.createElement("div",{className:"mx-auto w-full min-w-0 max-w-[420px]"},e.createElement(n,null,e.createElement(o,{htmlFor:"field-tooltip",className:"inline-flex items-center gap-1.5"},e.createElement("span",null,"할인 코드"),e.createElement(oe,null,e.createElement(se,{asChild:!0},e.createElement("button",{type:"button",className:"inline-flex rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring","aria-label":"할인 코드 도움말",onPointerDown:t=>t.preventDefault()},e.createElement(de,{name:"tooltip",className:"size-4"}))),e.createElement(me,{side:"top",className:"max-w-xs"},"프로모션에서 받은 코드를 입력하면 할인이 적용됩니다."))),e.createElement(i,null,e.createElement(d,{id:"field-tooltip",placeholder:"코드 입력"}),e.createElement(p,null,"선택 사항입니다."))))},N={render:()=>e.createElement("div",{className:"mx-auto w-full min-w-0 max-w-[480px]"},e.createElement(y,null,e.createElement(n,null,e.createElement(o,{htmlFor:"a"},"항목 A"),e.createElement(i,null,e.createElement(d,{id:"a"}))),e.createElement(I,null,"또는"),e.createElement(n,null,e.createElement(o,{htmlFor:"b"},"항목 B"),e.createElement(i,null,e.createElement(d,{id:"b"})))))};var S,T,_;F.parameters={...F.parameters,docs:{...(S=F.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="mx-auto w-full min-w-0 max-w-[420px]">\r
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
}`,...(_=(T=F.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var q,D,k;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="mx-auto w-full min-w-0 max-w-[480px]">\r
      <Field orientation="horizontal">\r
        <FieldLabel htmlFor="field-name">이름</FieldLabel>\r
        <FieldContent>\r
          <Input id="field-name" placeholder="홍길동" />\r
        </FieldContent>\r
      </Field>\r
    </div>
}`,...(k=(D=x.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var G,z,R;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "필수 라벨(FieldLabel required)",
  render: () => <div className="mx-auto w-full min-w-0 max-w-[420px]">\r
      <Field>\r
        <FieldLabel htmlFor="field-req" required>\r
          휴대폰 번호\r
        </FieldLabel>\r
        <FieldContent>\r
          <Input id="field-req" type="tel" placeholder="010-0000-0000" required />\r
        </FieldContent>\r
      </Field>\r
    </div>
}`,...(R=(z=v.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var P,W,A;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "반응형(orientation=responsive)",
  render: () => <div className="mx-auto w-full min-w-0 max-w-[480px]">\r
      <FieldGroup className="w-full min-w-0 max-w-md">\r
        <Field orientation="responsive">\r
          <FieldLabel htmlFor="field-responsive">닉네임</FieldLabel>\r
          <FieldContent>\r
            <Input id="field-responsive" placeholder="표시 이름" />\r
            <FieldDescription>\r
              좁은 화면에서는 세로, 넓으면 가로 배치됩니다.\r
            </FieldDescription>\r
          </FieldContent>\r
        </Field>\r
      </FieldGroup>\r
    </div>
}`,...(A=(W=g.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var V,M,j;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "오류(invalid + aria-invalid)",
  render: () => <div className="mx-auto w-full min-w-0 max-w-[420px]">\r
      <Field invalid>\r
        <FieldLabel htmlFor="field-password">비밀번호</FieldLabel>\r
        <FieldContent>\r
          <Input id="field-password" type="password" aria-invalid aria-describedby="field-password-error" />\r
          <FieldError id="field-password-error">\r
            비밀번호는 8자 이상이어야 합니다.\r
          </FieldError>\r
        </FieldContent>\r
      </Field>\r
    </div>
}`,...(j=(M=E.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var B,H,O;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "필수 + 검증 오류",
  render: () => <div className="mx-auto w-full min-w-0 max-w-[420px]">\r
      <Field invalid>\r
        <FieldLabel htmlFor="field-code" required>\r
          인증 코드\r
        </FieldLabel>\r
        <FieldContent>\r
          <Input id="field-code" inputMode="numeric" placeholder="6자리" required aria-invalid aria-describedby="field-code-error" />\r
          <FieldError id="field-code-error">코드를 입력해 주세요.</FieldError>\r
        </FieldContent>\r
      </Field>\r
    </div>
}`,...(O=(H=w.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var U,J,K;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="mx-auto w-full min-w-0 max-w-[480px]">\r
      <FieldSet>\r
        <FieldLegend>계정</FieldLegend>\r
        <FieldGroup>\r
          <Field>\r
            <FieldTitle>사용자 이름</FieldTitle>\r
            <FieldContent>\r
              <Input placeholder="johndoe" />\r
              <FieldDescription>\r
                다른 사용자에게 보이는 이름입니다.\r
              </FieldDescription>\r
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
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "라벨 + 툴팁",
  decorators: [Story => <TooltipProvider delayDuration={200}>\r
        <Story />\r
      </TooltipProvider>],
  render: () => <div className="mx-auto w-full min-w-0 max-w-[420px]">\r
      <Field>\r
        <FieldLabel htmlFor="field-tooltip" className="inline-flex items-center gap-1.5">\r
          <span>할인 코드</span>\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <button type="button" className="inline-flex rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="할인 코드 도움말" onPointerDown={e => e.preventDefault()}>\r
                <Icon name="tooltip" className="size-4" />\r
              </button>\r
            </TooltipTrigger>\r
            <TooltipContent side="top" className="max-w-xs">\r
              프로모션에서 받은 코드를 입력하면 할인이 적용됩니다.\r
            </TooltipContent>\r
          </Tooltip>\r
        </FieldLabel>\r
        <FieldContent>\r
          <Input id="field-tooltip" placeholder="코드 입력" />\r
          <FieldDescription>선택 사항입니다.</FieldDescription>\r
        </FieldContent>\r
      </Field>\r
    </div>
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="mx-auto w-full min-w-0 max-w-[480px]">\r
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
}`,...(ee=($=N.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const ke=["Default","Horizontal","RequiredLabel","Responsive","WithError","RequiredAndInvalid","FieldSetGroup","LabelWithTooltip","FieldSeparatorWithLabel"];export{F as Default,N as FieldSeparatorWithLabel,b as FieldSetGroup,x as Horizontal,h as LabelWithTooltip,w as RequiredAndInvalid,v as RequiredLabel,g as Responsive,E as WithError,ke as __namedExportsOrder,De as default};
