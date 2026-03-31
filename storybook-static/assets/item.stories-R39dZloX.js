import{B as f}from"./button-CoOQMYwO.js";import{r as m}from"./index-DRjF_FHU.js";import{S as $,c as G}from"./index-DGwXhxKC.js";import{c}from"./utils-BQHNewu7.js";import{S as F}from"./separator-C-vl3V_v.js";import{c as k}from"./createLucideIcon-CfeEeys9.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-BKlBQwGM.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],q=k("info",J);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],H=k("pencil",K);function L({className:t,...e}){return m.createElement("div",{role:"list","data-slot":"item-group",className:c("group/item-group flex flex-col",t),...e})}function v({className:t,...e}){return m.createElement(F,{"data-slot":"item-separator",orientation:"horizontal",className:c("my-0",t),...e})}const Q=G("group/item [a]:hover:bg-accent/50 focus-visible:border-ring focus-visible:ring-ring/50 [a]:transition-colors flex flex-wrap items-center rounded-md border border-transparent text-sm outline-none transition-colors duration-100 focus-visible:ring-[3px]",{variants:{variant:{default:"bg-transparent",outline:"border-border",muted:"bg-muted/50"},size:{default:"gap-4 p-4 ",sm:"gap-2.5 px-4 py-3"}},defaultVariants:{variant:"default",size:"default"}});function n({className:t,variant:e="default",size:i="default",asChild:O=!1,...P}){const U=O?$:"div";return m.createElement(U,{"data-slot":"item","data-variant":e,"data-size":i,className:c(Q({variant:e,size:i,className:t})),...P})}const X=G("flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none",{variants:{variant:{default:"bg-transparent",icon:"bg-muted size-8 rounded-sm border [&_svg:not([class*='size-'])]:size-4",image:"size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover"}},defaultVariants:{variant:"default"}});function W({className:t,variant:e="default",...i}){return m.createElement("div",{"data-slot":"item-media","data-variant":e,className:c(X({variant:e,className:t})),...i})}function a({className:t,...e}){return m.createElement("div",{"data-slot":"item-content",className:c("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",t),...e})}function r({className:t,...e}){return m.createElement("div",{"data-slot":"item-title",className:c("flex w-fit items-center gap-2 text-sm font-medium leading-snug",t),...e})}function l({className:t,...e}){return m.createElement("p",{"data-slot":"item-description",className:c("text-muted-foreground line-clamp-2 text-balance text-sm font-normal leading-normal","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",t),...e})}function E({className:t,...e}){return m.createElement("div",{"data-slot":"item-actions",className:c("flex items-center gap-2",t),...e})}function j({className:t,...e}){return m.createElement("div",{"data-slot":"item-header",className:c("flex basis-full items-center justify-between gap-2",t),...e})}n.__docgenInfo={description:"",methods:[],displayName:"Item",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1},asChild:{defaultValue:{value:"false",computed:!1},required:!1}}};W.__docgenInfo={description:"",methods:[],displayName:"ItemMedia",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};a.__docgenInfo={description:"",methods:[],displayName:"ItemContent"};E.__docgenInfo={description:"",methods:[],displayName:"ItemActions"};L.__docgenInfo={description:"",methods:[],displayName:"ItemGroup"};v.__docgenInfo={description:"",methods:[],displayName:"ItemSeparator"};r.__docgenInfo={description:"",methods:[],displayName:"ItemTitle"};l.__docgenInfo={description:"",methods:[],displayName:"ItemDescription"};j.__docgenInfo={description:"",methods:[],displayName:"ItemHeader"};const ce={title:"UI/Item",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline","muted"]},size:{control:"select",options:["default","sm"]}}},s={render:()=>React.createElement("div",{className:"w-full max-w-md"},React.createElement(n,{variant:"outline"},React.createElement(a,null,React.createElement(r,null,"컬럼명"),React.createElement(l,null,"설정 안함")),React.createElement(E,null,React.createElement(f,{variant:"ghost",size:"icon","aria-label":"편집"},React.createElement(H,{className:"size-4"})))))},o={render:()=>React.createElement("div",{className:"w-full max-w-md"},React.createElement(n,{variant:"outline"},React.createElement(a,null,React.createElement(j,null,React.createElement(r,{className:"flex items-center gap-1"},"컬럼명",React.createElement(f,{variant:"ghost",size:"icon",className:"size-6","aria-label":"설명"},React.createElement(q,{className:"size-3.5"}))),React.createElement(E,null,React.createElement(f,{variant:"ghost",size:"icon","aria-label":"편집"},React.createElement(H,{className:"size-4"})))),React.createElement(l,null,"설정 안함"))))},d={render:()=>React.createElement("div",{className:"w-full max-w-md"},React.createElement(n,{variant:"outline"},React.createElement(W,{variant:"icon"},React.createElement(q,{className:"size-4"})),React.createElement(a,null,React.createElement(r,null,"알림"),React.createElement(l,null,"새 메시지가 도착했습니다.")),React.createElement(E,null,React.createElement(f,{size:"sm",variant:"secondary"},"보기"))))},u={render:()=>React.createElement("div",{className:"flex w-full max-w-md flex-col gap-3"},React.createElement(n,{variant:"default"},React.createElement(a,null,React.createElement(r,null,"default"),React.createElement(l,null,"배경 투명"))),React.createElement(n,{variant:"outline"},React.createElement(a,null,React.createElement(r,null,"outline"),React.createElement(l,null,"테두리"))),React.createElement(n,{variant:"muted"},React.createElement(a,null,React.createElement(r,null,"muted"),React.createElement(l,null,"연한 배경"))))},I={render:()=>React.createElement("div",{className:"w-full max-w-md"},React.createElement(L,{className:"rounded-md border"},React.createElement(n,{variant:"default",className:"rounded-none border-0"},React.createElement(a,null,React.createElement(r,null,"첫 번째"),React.createElement(l,null,"설명 텍스트"))),React.createElement(v,null),React.createElement(n,{variant:"default",className:"rounded-none border-0"},React.createElement(a,null,React.createElement(r,null,"두 번째"),React.createElement(l,null,"설명 텍스트"))),React.createElement(v,null),React.createElement(n,{variant:"default",className:"rounded-none border-0"},React.createElement(a,null,React.createElement(r,null,"세 번째"),React.createElement(l,null,"설명 텍스트")))))},p={render:()=>React.createElement("div",{className:"w-full max-w-4xl"},React.createElement("div",{className:"grid w-full grid-cols-3 gap-4"},React.createElement(n,{variant:"outline",className:""},React.createElement(a,null,React.createElement(r,null,"01"),React.createElement(l,null,"설정 안함"))),React.createElement(n,{variant:"outline",className:""},React.createElement(a,null,React.createElement(r,null,"02"),React.createElement(l,null,"설정 안함"))),React.createElement(n,{variant:"outline",className:""},React.createElement(a,null,React.createElement(r,null,"02"),React.createElement(l,null,"설정 안함"))),React.createElement(n,{variant:"outline",className:"col-span-2"},React.createElement(a,null,React.createElement(r,null,"03"),React.createElement(l,null,"설정 안함"))),React.createElement(n,{variant:"outline",className:""},React.createElement(a,null,React.createElement(r,null,"02"),React.createElement(l,null,"설정 안함"))),React.createElement(n,{variant:"outline",className:"col-span-3"},React.createElement(a,null,React.createElement(r,null,"04"),React.createElement(l,null,"col-span-2")))))};var R,N,g;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md">\r
      <Item variant="outline">\r
        <ItemContent>\r
          <ItemTitle>컬럼명</ItemTitle>\r
          <ItemDescription>설정 안함</ItemDescription>\r
        </ItemContent>\r
        <ItemActions>\r
          <Button variant="ghost" size="icon" aria-label="편집">\r
            <Pencil className="size-4" />\r
          </Button>\r
        </ItemActions>\r
      </Item>\r
    </div>
}`,...(g=(N=s.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};var x,C,D;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md">\r
      <Item variant="outline">\r
        <ItemContent>\r
          <ItemHeader>\r
            <ItemTitle className="flex items-center gap-1">\r
              컬럼명\r
              <Button variant="ghost" size="icon" className="size-6" aria-label="설명">\r
                <Info className="size-3.5" />\r
              </Button>\r
            </ItemTitle>\r
            <ItemActions>\r
              <Button variant="ghost" size="icon" aria-label="편집">\r
                <Pencil className="size-4" />\r
              </Button>\r
            </ItemActions>\r
          </ItemHeader>\r
          <ItemDescription>설정 안함</ItemDescription>\r
        </ItemContent>\r
      </Item>\r
    </div>
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var b,h,T;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md">\r
      <Item variant="outline">\r
        <ItemMedia variant="icon">\r
          <Info className="size-4" />\r
        </ItemMedia>\r
        <ItemContent>\r
          <ItemTitle>알림</ItemTitle>\r
          <ItemDescription>새 메시지가 도착했습니다.</ItemDescription>\r
        </ItemContent>\r
        <ItemActions>\r
          <Button size="sm" variant="secondary">\r
            보기\r
          </Button>\r
        </ItemActions>\r
      </Item>\r
    </div>
}`,...(T=(h=d.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var w,z,_;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-md flex-col gap-3">\r
      <Item variant="default">\r
        <ItemContent>\r
          <ItemTitle>default</ItemTitle>\r
          <ItemDescription>배경 투명</ItemDescription>\r
        </ItemContent>\r
      </Item>\r
      <Item variant="outline">\r
        <ItemContent>\r
          <ItemTitle>outline</ItemTitle>\r
          <ItemDescription>테두리</ItemDescription>\r
        </ItemContent>\r
      </Item>\r
      <Item variant="muted">\r
        <ItemContent>\r
          <ItemTitle>muted</ItemTitle>\r
          <ItemDescription>연한 배경</ItemDescription>\r
        </ItemContent>\r
      </Item>\r
    </div>
}`,...(_=(z=u.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var y,S,A;I.parameters={...I.parameters,docs:{...(y=I.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md">\r
      <ItemGroup className="rounded-md border">\r
        <Item variant="default" className="rounded-none border-0">\r
          <ItemContent>\r
            <ItemTitle>첫 번째</ItemTitle>\r
            <ItemDescription>설명 텍스트</ItemDescription>\r
          </ItemContent>\r
        </Item>\r
        <ItemSeparator />\r
        <Item variant="default" className="rounded-none border-0">\r
          <ItemContent>\r
            <ItemTitle>두 번째</ItemTitle>\r
            <ItemDescription>설명 텍스트</ItemDescription>\r
          </ItemContent>\r
        </Item>\r
        <ItemSeparator />\r
        <Item variant="default" className="rounded-none border-0">\r
          <ItemContent>\r
            <ItemTitle>세 번째</ItemTitle>\r
            <ItemDescription>설명 텍스트</ItemDescription>\r
          </ItemContent>\r
        </Item>\r
      </ItemGroup>\r
    </div>
}`,...(A=(S=I.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var B,M,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-full max-w-4xl">\r
        <div className="grid w-full grid-cols-3 gap-4">\r
          <Item variant="outline" className="">\r
            <ItemContent>\r
              <ItemTitle>01</ItemTitle>\r
              <ItemDescription>설정 안함</ItemDescription>\r
            </ItemContent>\r
          </Item>\r
          <Item variant="outline" className="">\r
            <ItemContent>\r
              <ItemTitle>02</ItemTitle>\r
              <ItemDescription>설정 안함</ItemDescription>\r
            </ItemContent>\r
          </Item>\r
          <Item variant="outline" className="">\r
            <ItemContent>\r
              <ItemTitle>02</ItemTitle>\r
              <ItemDescription>설정 안함</ItemDescription>\r
            </ItemContent>\r
          </Item>\r
          <Item variant="outline" className="col-span-2">\r
            <ItemContent>\r
              <ItemTitle>03</ItemTitle>\r
              <ItemDescription>설정 안함</ItemDescription>\r
            </ItemContent>\r
          </Item>\r
          <Item variant="outline" className="">\r
            <ItemContent>\r
              <ItemTitle>02</ItemTitle>\r
              <ItemDescription>설정 안함</ItemDescription>\r
            </ItemContent>\r
          </Item>\r
\r
          <Item variant="outline" className="col-span-3">\r
            <ItemContent>\r
              <ItemTitle>04</ItemTitle>\r
              <ItemDescription>col-span-2</ItemDescription>\r
            </ItemContent>\r
          </Item>\r
        </div>\r
      </div>;
  }
}`,...(V=(M=p.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const ie=["Default","WithInfoAndActions","WithMedia","Variants","ItemGroupList","GridOfItems"];export{s as Default,p as GridOfItems,I as ItemGroupList,u as Variants,o as WithInfoAndActions,d as WithMedia,ie as __namedExportsOrder,ce as default};
