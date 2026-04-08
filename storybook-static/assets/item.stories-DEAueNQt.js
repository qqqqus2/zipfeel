import{r as e}from"./index-DRjF_FHU.js";import{B as f}from"./button-BDfZ15N9.js";import{S as F}from"./index-oDCx3a8o.js";import{c as q}from"./index-D1SQP9Z-.js";import{c as i}from"./utils-BQHNewu7.js";import{S as J}from"./separator-DqqCJVXh.js";import{P as H}from"./pencil-BUJrXowq.js";import{I as P}from"./info-B03a6rtT.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-BKlBQwGM.js";import"./createLucideIcon-CfeEeys9.js";function W({className:n,...t}){return e.createElement("div",{role:"list","data-slot":"item-group",className:i("group/item-group flex flex-col",n),...t})}function v({className:n,...t}){return e.createElement(J,{"data-slot":"item-separator",orientation:"horizontal",className:i("my-0",n),...t})}const K=q("group/item [a]:hover:bg-accent/50 focus-visible:border-ring focus-visible:ring-ring/50 [a]:transition-colors flex flex-wrap items-center rounded-md border border-transparent text-sm outline-none transition-colors duration-100 focus-visible:ring-[3px]",{variants:{variant:{default:"bg-transparent",outline:"border-border",muted:"bg-muted/50"},size:{default:"gap-4 p-4 ",sm:"gap-2.5 px-4 py-3"}},defaultVariants:{variant:"default",size:"default"}});function r({className:n,variant:t="default",size:s="default",asChild:L=!1,...k}){const U=L?F:"div";return e.createElement(U,{"data-slot":"item","data-variant":t,"data-size":s,className:i(K({variant:t,size:s,className:n})),...k})}const Q=q("flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none",{variants:{variant:{default:"bg-transparent",icon:"bg-muted size-8 rounded-sm border [&_svg:not([class*='size-'])]:size-4",image:"size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover"}},defaultVariants:{variant:"default"}});function j({className:n,variant:t="default",...s}){return e.createElement("div",{"data-slot":"item-media","data-variant":t,className:i(Q({variant:t,className:n})),...s})}function a({className:n,...t}){return e.createElement("div",{"data-slot":"item-content",className:i("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",n),...t})}function l({className:n,...t}){return e.createElement("div",{"data-slot":"item-title",className:i("flex w-fit items-center gap-2 text-sm font-medium leading-snug",n),...t})}function m({className:n,...t}){return e.createElement("p",{"data-slot":"item-description",className:i("text-muted-foreground line-clamp-2 text-balance text-sm font-normal leading-normal","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",n),...t})}function E({className:n,...t}){return e.createElement("div",{"data-slot":"item-actions",className:i("flex items-center gap-2",n),...t})}function O({className:n,...t}){return e.createElement("div",{"data-slot":"item-header",className:i("flex basis-full items-center justify-between gap-2",n),...t})}r.__docgenInfo={description:"",methods:[],displayName:"Item",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1},asChild:{defaultValue:{value:"false",computed:!1},required:!1}}};j.__docgenInfo={description:"",methods:[],displayName:"ItemMedia",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};a.__docgenInfo={description:"",methods:[],displayName:"ItemContent"};E.__docgenInfo={description:"",methods:[],displayName:"ItemActions"};W.__docgenInfo={description:"",methods:[],displayName:"ItemGroup"};v.__docgenInfo={description:"",methods:[],displayName:"ItemSeparator"};l.__docgenInfo={description:"",methods:[],displayName:"ItemTitle"};m.__docgenInfo={description:"",methods:[],displayName:"ItemDescription"};O.__docgenInfo={description:"",methods:[],displayName:"ItemHeader"};const ie={title:"UI/Item",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline","muted"]},size:{control:"select",options:["default","sm"]}}},o={render:()=>e.createElement("div",{className:"w-full max-w-md"},e.createElement(r,{variant:"outline"},e.createElement(a,null,e.createElement(l,null,"컬럼명"),e.createElement(m,null,"설정 안함")),e.createElement(E,null,e.createElement(f,{variant:"ghost",size:"icon","aria-label":"편집"},e.createElement(H,{className:"size-4"})))))},c={render:()=>e.createElement("div",{className:"w-full max-w-md"},e.createElement(r,{variant:"outline"},e.createElement(a,null,e.createElement(O,null,e.createElement(l,{className:"flex items-center gap-1"},"컬럼명",e.createElement(f,{variant:"ghost",size:"icon",className:"size-6","aria-label":"설명"},e.createElement(P,{className:"size-3.5"}))),e.createElement(E,null,e.createElement(f,{variant:"ghost",size:"icon","aria-label":"편집"},e.createElement(H,{className:"size-4"})))),e.createElement(m,null,"설정 안함"))))},d={render:()=>e.createElement("div",{className:"w-full max-w-md"},e.createElement(r,{variant:"outline"},e.createElement(j,{variant:"icon"},e.createElement(P,{className:"size-4"})),e.createElement(a,null,e.createElement(l,null,"알림"),e.createElement(m,null,"새 메시지가 도착했습니다.")),e.createElement(E,null,e.createElement(f,{size:"sm",variant:"secondary"},"보기"))))},u={render:()=>e.createElement("div",{className:"flex w-full max-w-md flex-col gap-3"},e.createElement(r,{variant:"default"},e.createElement(a,null,e.createElement(l,null,"default"),e.createElement(m,null,"배경 투명"))),e.createElement(r,{variant:"outline"},e.createElement(a,null,e.createElement(l,null,"outline"),e.createElement(m,null,"테두리"))),e.createElement(r,{variant:"muted"},e.createElement(a,null,e.createElement(l,null,"muted"),e.createElement(m,null,"연한 배경"))))},I={render:()=>e.createElement("div",{className:"w-full max-w-md"},e.createElement(W,{className:"rounded-md border"},e.createElement(r,{variant:"default",className:"rounded-none border-0"},e.createElement(a,null,e.createElement(l,null,"첫 번째"),e.createElement(m,null,"설명 텍스트"))),e.createElement(v,null),e.createElement(r,{variant:"default",className:"rounded-none border-0"},e.createElement(a,null,e.createElement(l,null,"두 번째"),e.createElement(m,null,"설명 텍스트"))),e.createElement(v,null),e.createElement(r,{variant:"default",className:"rounded-none border-0"},e.createElement(a,null,e.createElement(l,null,"세 번째"),e.createElement(m,null,"설명 텍스트")))))},p={render:()=>e.createElement("div",{className:"w-full max-w-4xl"},e.createElement("div",{className:"grid w-full grid-cols-3 gap-4"},e.createElement(r,{variant:"outline",className:""},e.createElement(a,null,e.createElement(l,null,"01"),e.createElement(m,null,"설정 안함"))),e.createElement(r,{variant:"outline",className:""},e.createElement(a,null,e.createElement(l,null,"02"),e.createElement(m,null,"설정 안함"))),e.createElement(r,{variant:"outline",className:""},e.createElement(a,null,e.createElement(l,null,"02"),e.createElement(m,null,"설정 안함"))),e.createElement(r,{variant:"outline",className:"col-span-2"},e.createElement(a,null,e.createElement(l,null,"03"),e.createElement(m,null,"설정 안함"))),e.createElement(r,{variant:"outline",className:""},e.createElement(a,null,e.createElement(l,null,"02"),e.createElement(m,null,"설정 안함"))),e.createElement(r,{variant:"outline",className:"col-span-3"},e.createElement(a,null,e.createElement(l,null,"04"),e.createElement(m,null,"col-span-2")))))};var g,N,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(N=o.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var C,D,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var b,w,h;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(w=d.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var z,_,y;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(y=(_=u.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var S,A,B;I.parameters={...I.parameters,docs:{...(S=I.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(B=(A=I.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var V,G,M;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(G=p.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const se=["Default","WithInfoAndActions","WithMedia","Variants","ItemGroupList","GridOfItems"];export{o as Default,p as GridOfItems,I as ItemGroupList,u as Variants,c as WithInfoAndActions,d as WithMedia,se as __namedExportsOrder,ie as default};
