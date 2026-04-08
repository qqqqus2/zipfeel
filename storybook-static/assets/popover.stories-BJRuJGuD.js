import{r as e}from"./index-DRjF_FHU.js";import{B as t}from"./button-BDfZ15N9.js";import{I as F}from"./input-BjRrX8n3.js";import{L as j}from"./label-D8BzrfBB.js";import{P as r,a as m,b as p}from"./popover-C0pxVMjQ.js";import"./index-oDCx3a8o.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-BKlBQwGM.js";import"./index--M6JEWVJ.js";import"./index-BvuF3t5A.js";import"./index-BBUvKJIO.js";import"./index-Bgmx4rse.js";import"./index-BrPKIHdt.js";import"./index-D1Rwxldo.js";import"./index-od4dH0T8.js";import"./x-BuCBQyXB.js";import"./createLucideIcon-CfeEeys9.js";const ae={title:"UI/Popover",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(t,{type:"button",variant:"outline"},"열기")),e.createElement(p,{variant:"bubble"},e.createElement("div",{className:"grid gap-[10px]"},e.createElement("h4",{className:"font-bold text-[16px] text-black leading-[20px] "},"Popovers Title"),e.createElement("p",{className:"text-sm text-black"},"Popovers도 Max Width = 330까지 상하만 적용될 수 있으며 Text Link도 삽입 가능"),e.createElement("div",{className:"flex justify-center items-center w-full h-[100px] bg-gray-200 text-black"},"Image Area"),e.createElement("p",{className:"text-sm text-black"},"Image도 삽입할 수 있습니다. hover(pc) / click(mob)으로 활성화됩니다."))))},n={render:()=>e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(t,{type:"button",variant:"outline"},"align=start")),e.createElement(p,{variant:"bubble",align:"start",className:"w-80"},e.createElement("p",{className:"text-sm text-black/90 pr-[40px]"},e.createElement("code",{className:"rounded bg-black/10 px-1"},'align="start"')," ","로 트리거 왼쪽(또는 방향에 따라 시작점)에 맞출 수 있습니다.")))},o={render:()=>e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(t,{type:"button",variant:"outline"},"닫기 없음")),e.createElement(p,{variant:"bubble",showCloseButton:!1},e.createElement("p",{className:"text-sm text-white/90 "},e.createElement("code",{className:"rounded bg-white/10 px-1"},"showCloseButton={false}"))))},s={render:()=>e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(t,{type:"button",variant:"outline"},"패널 열기")),e.createElement(p,{variant:"panel",className:"w-80"},e.createElement("div",{className:"grid gap-2"},e.createElement("h4",{className:"font-medium leading-none"},"일반 패널"),e.createElement("p",{className:"text-sm text-muted-foreground"},"기본값은"," ",e.createElement("code",{className:"text-foreground"},'variant="panel"'),"입니다. 콤보박스·검색 드롭다운과 같은 스타일입니다."))))},l={render:()=>e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(t,{type:"button",variant:"point1"},"빠른 입력")),e.createElement(p,{variant:"panel",className:"w-80"},e.createElement("div",{className:"grid gap-3"},e.createElement("div",{className:"space-y-2"},e.createElement("h4",{className:"font-medium leading-none"},"메모"),e.createElement("p",{className:"text-sm text-muted-foreground"},"저장 전 임시 입력에 쓸 수 있습니다.")),e.createElement("div",{className:"grid gap-2"},e.createElement(j,{htmlFor:"popover-memo"},"내용"),e.createElement(F,{id:"popover-memo",placeholder:"입력…"})),e.createElement(t,{type:"button",size:"sm",className:"w-full"},"확인"))))};var c,i,d,u,v;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Popover>\r
      <PopoverTrigger asChild>\r
        <Button type="button" variant="outline">\r
          열기\r
        </Button>\r
      </PopoverTrigger>\r
      <PopoverContent variant="bubble">\r
        <div className="grid gap-[10px]">\r
          <h4 className="font-bold text-[16px] text-black leading-[20px] ">\r
            Popovers Title\r
          </h4>\r
          <p className="text-sm text-black">\r
            Popovers도 Max Width = 330까지 상하만 적용될 수 있으며 Text Link도\r
            삽입 가능\r
          </p>\r
          <div className="flex justify-center items-center w-full h-[100px] bg-gray-200 text-black">\r
            Image Area\r
          </div>\r
          <p className="text-sm text-black">\r
            Image도 삽입할 수 있습니다. hover(pc) / click(mob)으로 활성화됩니다.\r
          </p>\r
        </div>\r
      </PopoverContent>\r
    </Popover>
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source},description:{story:'말풍선(`variant="bubble"`): Tooltip과 비슷한 look + 닫기 버튼, 클릭으로 열림',...(v=(u=a.parameters)==null?void 0:u.docs)==null?void 0:v.description}}};var g,b,x,N,E;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Popover>\r
      <PopoverTrigger asChild>\r
        <Button type="button" variant="outline">\r
          align=start\r
        </Button>\r
      </PopoverTrigger>\r
      <PopoverContent variant="bubble" align="start" className="w-80">\r
        <p className="text-sm text-black/90 pr-[40px]">\r
          <code className="rounded bg-black/10 px-1">\r
            align=&quot;start&quot;\r
          </code>{" "}\r
          로 트리거 왼쪽(또는 방향에 따라 시작점)에 맞출 수 있습니다.\r
        </p>\r
      </PopoverContent>\r
    </Popover>
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:"콘텐츠 정렬 — 트리거 기준 start",...(E=(N=n.parameters)==null?void 0:N.docs)==null?void 0:E.description}}};var h,P,f,C,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Popover>\r
      <PopoverTrigger asChild>\r
        <Button type="button" variant="outline">\r
          닫기 없음\r
        </Button>\r
      </PopoverTrigger>\r
      <PopoverContent variant="bubble" showCloseButton={false}>\r
        <p className="text-sm text-white/90 ">\r
          <code className="rounded bg-white/10 px-1">\r
            showCloseButton=&#123;false&#125;\r
          </code>\r
        </p>\r
      </PopoverContent>\r
    </Popover>
}`,...(f=(P=o.parameters)==null?void 0:P.docs)==null?void 0:f.source},description:{story:"말풍선에서 닫기 버튼 숨김",...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.description}}};var B,w,k,T,I;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Popover>\r
      <PopoverTrigger asChild>\r
        <Button type="button" variant="outline">\r
          패널 열기\r
        </Button>\r
      </PopoverTrigger>\r
      <PopoverContent variant="panel" className="w-80">\r
        <div className="grid gap-2">\r
          <h4 className="font-medium leading-none">일반 패널</h4>\r
          <p className="text-sm text-muted-foreground">\r
            기본값은{" "}\r
            <code className="text-foreground">variant=&quot;panel&quot;</code>\r
            입니다. 콤보박스·검색 드롭다운과 같은 스타일입니다.\r
          </p>\r
        </div>\r
      </PopoverContent>\r
    </Popover>
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:'콤보박스 등과 동일한 흰 패널(`variant="panel"`, 닫기 없음 기본)',...(I=(T=s.parameters)==null?void 0:T.docs)==null?void 0:I.description}}};var S,L,W,q,A;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Popover>\r
      <PopoverTrigger asChild>\r
        <Button type="button" variant="point1">\r
          빠른 입력\r
        </Button>\r
      </PopoverTrigger>\r
      <PopoverContent variant="panel" className="w-80">\r
        <div className="grid gap-3">\r
          <div className="space-y-2">\r
            <h4 className="font-medium leading-none">메모</h4>\r
            <p className="text-sm text-muted-foreground">\r
              저장 전 임시 입력에 쓸 수 있습니다.\r
            </p>\r
          </div>\r
          <div className="grid gap-2">\r
            <Label htmlFor="popover-memo">내용</Label>\r
            <Input id="popover-memo" placeholder="입력…" />\r
          </div>\r
          <Button type="button" size="sm" className="w-full">\r
            확인\r
          </Button>\r
        </div>\r
      </PopoverContent>\r
    </Popover>
}`,...(W=(L=l.parameters)==null?void 0:L.docs)==null?void 0:W.source},description:{story:"짧은 폼 예시",...(A=(q=l.parameters)==null?void 0:q.docs)==null?void 0:A.description}}};const ne=["Default","AlignStart","BubbleWithoutClose","Panel","WithForm"];export{n as AlignStart,o as BubbleWithoutClose,a as Default,s as Panel,l as WithForm,ne as __namedExportsOrder,ae as default};
