import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as x}from"./button-BPg3QrVw.js";import{S as $,c as k}from"./index-DGwXhxKC.js";import{c as m}from"./utils-BQHNewu7.js";import{S as F}from"./separator-D8q_o477.js";import{c as q}from"./createLucideIcon-CfeEeys9.js";import"./index-DRjF_FHU.js";import"./index-Bms3GI6n.js";import"./index-BKlBQwGM.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],H=q("info",J);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],L=q("pencil",K);function W({className:r,...t}){return e.jsx("div",{role:"list","data-slot":"item-group",className:m("group/item-group flex flex-col",r),...t})}function h({className:r,...t}){return e.jsx(F,{"data-slot":"item-separator",orientation:"horizontal",className:m("my-0",r),...t})}const Q=k("group/item [a]:hover:bg-accent/50 focus-visible:border-ring focus-visible:ring-ring/50 [a]:transition-colors flex flex-wrap items-center rounded-md border border-transparent text-sm outline-none transition-colors duration-100 focus-visible:ring-[3px]",{variants:{variant:{default:"bg-transparent",outline:"border-border",muted:"bg-muted/50"},size:{default:"gap-4 p-4 ",sm:"gap-2.5 px-4 py-3"}},defaultVariants:{variant:"default",size:"default"}});function n({className:r,variant:t="default",size:l="default",asChild:E=!1,...R}){const U=E?$:"div";return e.jsx(U,{"data-slot":"item","data-variant":t,"data-size":l,className:m(Q({variant:t,size:l,className:r})),...R})}const X=k("flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none",{variants:{variant:{default:"bg-transparent",icon:"bg-muted size-8 rounded-sm border [&_svg:not([class*='size-'])]:size-4",image:"size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover"}},defaultVariants:{variant:"default"}});function O({className:r,variant:t="default",...l}){return e.jsx("div",{"data-slot":"item-media","data-variant":t,className:m(X({variant:t,className:r})),...l})}function i({className:r,...t}){return e.jsx("div",{"data-slot":"item-content",className:m("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",r),...t})}function s({className:r,...t}){return e.jsx("div",{"data-slot":"item-title",className:m("flex w-fit items-center gap-2 text-sm font-medium leading-snug",r),...t})}function a({className:r,...t}){return e.jsx("p",{"data-slot":"item-description",className:m("text-muted-foreground line-clamp-2 text-balance text-sm font-normal leading-normal","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",r),...t})}function f({className:r,...t}){return e.jsx("div",{"data-slot":"item-actions",className:m("flex items-center gap-2",r),...t})}function P({className:r,...t}){return e.jsx("div",{"data-slot":"item-header",className:m("flex basis-full items-center justify-between gap-2",r),...t})}n.__docgenInfo={description:"",methods:[],displayName:"Item",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};O.__docgenInfo={description:"",methods:[],displayName:"ItemMedia",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};i.__docgenInfo={description:"",methods:[],displayName:"ItemContent"};f.__docgenInfo={description:"",methods:[],displayName:"ItemActions"};W.__docgenInfo={description:"",methods:[],displayName:"ItemGroup"};h.__docgenInfo={description:"",methods:[],displayName:"ItemSeparator"};s.__docgenInfo={description:"",methods:[],displayName:"ItemTitle"};a.__docgenInfo={description:"",methods:[],displayName:"ItemDescription"};P.__docgenInfo={description:"",methods:[],displayName:"ItemHeader"};const me={title:"UI/Item",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline","muted"]},size:{control:"select",options:["default","sm"]}}},o={render:()=>e.jsx("div",{className:"w-full max-w-md",children:e.jsxs(n,{variant:"outline",children:[e.jsxs(i,{children:[e.jsx(s,{children:"컬럼명"}),e.jsx(a,{children:"설정 안함"})]}),e.jsx(f,{children:e.jsx(x,{variant:"ghost",size:"icon","aria-label":"편집",children:e.jsx(L,{className:"size-4"})})})]})})},d={render:()=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(n,{variant:"outline",children:e.jsxs(i,{children:[e.jsxs(P,{children:[e.jsxs(s,{className:"flex items-center gap-1",children:["컬럼명",e.jsx(x,{variant:"ghost",size:"icon",className:"size-6","aria-label":"설명",children:e.jsx(H,{className:"size-3.5"})})]}),e.jsx(f,{children:e.jsx(x,{variant:"ghost",size:"icon","aria-label":"편집",children:e.jsx(L,{className:"size-4"})})})]}),e.jsx(a,{children:"설정 안함"})]})})})},c={render:()=>e.jsx("div",{className:"w-full max-w-md",children:e.jsxs(n,{variant:"outline",children:[e.jsx(O,{variant:"icon",children:e.jsx(H,{className:"size-4"})}),e.jsxs(i,{children:[e.jsx(s,{children:"알림"}),e.jsx(a,{children:"새 메시지가 도착했습니다."})]}),e.jsx(f,{children:e.jsx(x,{size:"sm",variant:"secondary",children:"보기"})})]})})},u={render:()=>e.jsxs("div",{className:"flex w-full max-w-md flex-col gap-3",children:[e.jsx(n,{variant:"default",children:e.jsxs(i,{children:[e.jsx(s,{children:"default"}),e.jsx(a,{children:"배경 투명"})]})}),e.jsx(n,{variant:"outline",children:e.jsxs(i,{children:[e.jsx(s,{children:"outline"}),e.jsx(a,{children:"테두리"})]})}),e.jsx(n,{variant:"muted",children:e.jsxs(i,{children:[e.jsx(s,{children:"muted"}),e.jsx(a,{children:"연한 배경"})]})})]})},I={render:()=>e.jsx("div",{className:"w-full max-w-md",children:e.jsxs(W,{className:"rounded-md border",children:[e.jsx(n,{variant:"default",className:"rounded-none border-0",children:e.jsxs(i,{children:[e.jsx(s,{children:"첫 번째"}),e.jsx(a,{children:"설명 텍스트"})]})}),e.jsx(h,{}),e.jsx(n,{variant:"default",className:"rounded-none border-0",children:e.jsxs(i,{children:[e.jsx(s,{children:"두 번째"}),e.jsx(a,{children:"설명 텍스트"})]})}),e.jsx(h,{}),e.jsx(n,{variant:"default",className:"rounded-none border-0",children:e.jsxs(i,{children:[e.jsx(s,{children:"세 번째"}),e.jsx(a,{children:"설명 텍스트"})]})})]})})},p={render:()=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsxs("div",{className:"grid w-full grid-cols-3 gap-4 [grid-auto-flow:row_dense]",children:[e.jsx("div",{className:"min-w-0",children:e.jsx(n,{variant:"outline",className:"min-w-0",children:e.jsxs(i,{children:[e.jsx(s,{children:"01"}),e.jsx(a,{children:"설정 안함"})]})})}),e.jsx("div",{className:"min-w-0",children:e.jsx(n,{variant:"outline",className:"min-w-0",children:e.jsxs(i,{children:[e.jsx(s,{children:"02"}),e.jsx(a,{children:"설정 안함"})]})})}),e.jsx("div",{className:"min-w-0",children:e.jsx(n,{variant:"outline",className:"min-w-0",children:e.jsxs(i,{children:[e.jsx(s,{children:"03"}),e.jsx(a,{children:"설정 안함"})]})})}),e.jsx("div",{className:"min-w-0 col-span-2",children:e.jsx(n,{variant:"outline",className:"min-w-0 bg-muted/30",children:e.jsxs(i,{children:[e.jsx(s,{children:"04"}),e.jsx(a,{children:"col-span-2"})]})})}),e.jsx("div",{className:"min-w-0",children:e.jsx(n,{variant:"outline",className:"min-w-0",children:e.jsxs(i,{children:[e.jsx(s,{children:"05"}),e.jsx(a,{children:"설정 안함"})]})})}),e.jsx("div",{className:"min-w-0",children:e.jsx(n,{variant:"outline",className:"min-w-0",children:e.jsxs(i,{children:[e.jsx(s,{children:"06"}),e.jsx(a,{children:"설정 안함"})]})})}),e.jsx("div",{className:"min-w-0 col-span-2",children:e.jsx(n,{variant:"outline",className:"min-w-0 bg-muted/30",children:e.jsxs(i,{children:[e.jsx(s,{children:"07"}),e.jsx(a,{children:"col-span-2"})]})})})]})})};var v,j,N;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var g,w,b;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(w=d.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var C,D,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var z,_,y;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(B=(A=I.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var M,V,G;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-full max-w-4xl">\r
        <div className="grid w-full grid-cols-3 gap-4 [grid-auto-flow:row_dense]">\r
          <div className="min-w-0">\r
            <Item variant="outline" className="min-w-0">\r
              <ItemContent>\r
                <ItemTitle>01</ItemTitle>\r
                <ItemDescription>설정 안함</ItemDescription>\r
              </ItemContent>\r
            </Item>\r
          </div>\r
          <div className="min-w-0">\r
            <Item variant="outline" className="min-w-0">\r
              <ItemContent>\r
                <ItemTitle>02</ItemTitle>\r
                <ItemDescription>설정 안함</ItemDescription>\r
              </ItemContent>\r
            </Item>\r
          </div>\r
          <div className="min-w-0">\r
            <Item variant="outline" className="min-w-0">\r
              <ItemContent>\r
                <ItemTitle>03</ItemTitle>\r
                <ItemDescription>설정 안함</ItemDescription>\r
              </ItemContent>\r
            </Item>\r
          </div>\r
\r
          <div className="min-w-0 col-span-2">\r
            <Item variant="outline" className="min-w-0 bg-muted/30">\r
              <ItemContent>\r
                <ItemTitle>04</ItemTitle>\r
                <ItemDescription>col-span-2</ItemDescription>\r
              </ItemContent>\r
            </Item>\r
          </div>\r
          <div className="min-w-0">\r
            <Item variant="outline" className="min-w-0">\r
              <ItemContent>\r
                <ItemTitle>05</ItemTitle>\r
                <ItemDescription>설정 안함</ItemDescription>\r
              </ItemContent>\r
            </Item>\r
          </div>\r
          <div className="min-w-0">\r
            <Item variant="outline" className="min-w-0">\r
              <ItemContent>\r
                <ItemTitle>06</ItemTitle>\r
                <ItemDescription>설정 안함</ItemDescription>\r
              </ItemContent>\r
            </Item>\r
          </div>\r
          <div className="min-w-0 col-span-2">\r
            <Item variant="outline" className="min-w-0 bg-muted/30">\r
              <ItemContent>\r
                <ItemTitle>07</ItemTitle>\r
                <ItemDescription>col-span-2</ItemDescription>\r
              </ItemContent>\r
            </Item>\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const le=["Default","WithInfoAndActions","WithMedia","Variants","ItemGroupList","GridOfItems"];export{o as Default,p as GridOfItems,I as ItemGroupList,u as Variants,d as WithInfoAndActions,c as WithMedia,le as __namedExportsOrder,me as default};
