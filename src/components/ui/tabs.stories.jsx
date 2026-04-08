import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

const TABS_DOC_PROPS = [
  "defaultValue",
  "value",
  "onValueChange",
  "orientation",
  "variant",
  "accentColor",
  "dir",
];

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    // centered는 좁은 캔버스에서 탭·링이 가장자리에 붙어 잘린 것처럼 보이기 쉬움
    layout: "padded",
    controls: { include: TABS_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props (Tabs 루트)

- **defaultValue** — 비제어: 초기 활성 탭 \`value\`.
- **value** — 제어: 현재 활성 탭.
- **onValueChange** — 탭 전환 콜백.
- **orientation** — 가로/세로 탭 방향.
- **variant** / **accentColor** — 트리거·인디케이터 스타일 변형.
- **dir** — RTL 등 문서 방향.

목록·패널은 \`TabsList\`, \`TabsTrigger\`, \`TabsContent\`로 구성합니다.`,
      },
      controls: { include: TABS_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  render: () => (
    <div className="grid grid-cols-1 gap-4">
      <Tabs defaultValue="tab1" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="tab1">Enabled</TabsTrigger>
          <TabsTrigger value="tab2" disabled>
            Disabled
          </TabsTrigger>
          <TabsTrigger value="tab3">Enabled</TabsTrigger>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="help">Help</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4 border rounded-md">
            <p className="text-sm">This tab is enabled.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4 border rounded-md">
            <p className="text-sm">This tab is also enabled.</p>
          </div>
        </TabsContent>
      </Tabs>

      {/* 세로 */}
      {/* <Tabs defaultValue="account" orientation="vertical">
        <TabsList>
          <TabsTrigger value="tab1">Enabled</TabsTrigger>
          <TabsTrigger value="tab2" disabled>
            Disabled
          </TabsTrigger>
          <TabsTrigger value="tab3">Enabled</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4 border rounded-md">
            <p className="text-sm">This tab is enabled.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4 border rounded-md">
            <p className="text-sm">This tab is also enabled.</p>
          </div>
        </TabsContent>
      </Tabs> */}
    </div>
  ),
};

export const FullWidth = {
  render: () => (
    <Tabs defaultValue="home" className="w-[600px]">
      <TabsList className="w-full">
        <TabsTrigger value="home" className="flex-1">
          Home
        </TabsTrigger>
        <TabsTrigger value="profile" className="flex-1">
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex-1">
          Settings
        </TabsTrigger>
        <TabsTrigger value="help" className="flex-1">
          Help
        </TabsTrigger>
        <TabsTrigger value="home2" className="flex-1">
          Home
        </TabsTrigger>
        <TabsTrigger value="profile2" className="flex-1">
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings2" className="flex-1">
          Settings
        </TabsTrigger>
        <TabsTrigger value="help2" className="flex-1">
          Help
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Home</h3>
          <p className="text-sm text-muted-foreground">
            Welcome to your home page.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="profile">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Profile</h3>
          <p className="text-sm text-muted-foreground">
            Manage your profile information.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Settings</h3>
          <p className="text-sm text-muted-foreground">
            Configure your preferences.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="help">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Help</h3>
          <p className="text-sm text-muted-foreground">Get help and support.</p>
        </div>
      </TabsContent>
      <TabsContent value="home2">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Home</h3>
          <p className="text-sm text-muted-foreground">
            Welcome to your home page.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="profile2">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Profile</h3>
          <p className="text-sm text-muted-foreground">
            Manage your profile information.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings2">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Settings</h3>
          <p className="text-sm text-muted-foreground">
            Configure your preferences.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="help2">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Help</h3>
          <p className="text-sm text-muted-foreground">Get help and support.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const VariantsGallery = {
  name: "유형 갤러리 (5종 + 컬러)",
  render: () => (
    <div className="w-[min(100%,1100px)] space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-medium">Underline (기본) + Content</p>
        <Tabs
          defaultValue="one"
          variant="underline"
          accentColor="#A78BFA"
          className="w-full"
        >
          <TabsList className="w-full justify-start">
            <TabsTrigger value="one">Tab Name</TabsTrigger>
            <TabsTrigger value="two">Tab Name</TabsTrigger>
            <TabsTrigger value="three" disabled>
              Tab Name
            </TabsTrigger>
          </TabsList>
          <TabsContent value="one">
            <div className="rounded-md border p-4 text-sm text-muted-foreground">
              Content 영역 예시
            </div>
          </TabsContent>
          <TabsContent value="two">
            <div className="rounded-md border p-4 text-sm text-muted-foreground">
              Content 영역 예시
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium">Slash (page tab)</p>
        <Tabs
          defaultValue="a"
          variant="slash"
          accentColor="#4F378A"
          className="w-full"
        >
          <TabsList className="w-full justify-start">
            <TabsTrigger value="a">캐릭터 설정</TabsTrigger>
            <TabsTrigger value="b">캐릭터 비교</TabsTrigger>
            <TabsTrigger value="c">공통 설정 관리</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-8 md:grid-cols-1">
        <div className="space-y-3">
          <p className="text-sm font-medium">Solid (dark)</p>
          <Tabs
            defaultValue="t1"
            variant="solid"
            accentColor="#A78BFA"
            className="w-full"
          >
            <TabsList className="w-full justify-start">
              <TabsTrigger value="t1">Tab Name</TabsTrigger>
              <TabsTrigger value="t2">Tab Name</TabsTrigger>
              <TabsTrigger value="t3" disabled>
                Tab Name
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">Solid Rounded (dark pill)</p>
          <Tabs
            defaultValue="t1"
            variant="solidRounded"
            accentColor="#A78BFA"
            className="w-full"
          >
            <TabsList className="w-full justify-start gap-3">
              <TabsTrigger value="t1">Tab Name</TabsTrigger>
              <TabsTrigger value="t2">Tab Name</TabsTrigger>
              <TabsTrigger value="t3" disabled>
                Tab Name
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium">페이지별 컬러 예시</p>
        <div className="space-y-4">
          <Tabs
            defaultValue="a"
            variant="underline"
            accentColor="#22C55E"
            className="w-full"
          >
            <TabsList className="w-full justify-start">
              <TabsTrigger value="a">Green</TabsTrigger>
              <TabsTrigger value="b">Tab</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs
            defaultValue="a"
            variant="underline"
            accentColor="#EF4444"
            className="w-full"
          >
            <TabsList className="w-full justify-start">
              <TabsTrigger value="a">Red</TabsTrigger>
              <TabsTrigger value="b">Tab</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs
            defaultValue="a"
            variant="underline"
            accentColor="#3B82F6"
            className="w-full"
          >
            <TabsList className="w-full justify-start">
              <TabsTrigger value="a">Blue</TabsTrigger>
              <TabsTrigger value="b">Tab</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  ),
};
