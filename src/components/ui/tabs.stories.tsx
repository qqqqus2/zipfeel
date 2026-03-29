import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Password Settings</h3>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Overview</h3>
          <p className="text-sm text-muted-foreground">
            View your account overview and recent activity.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Analytics</h3>
          <p className="text-sm text-muted-foreground">
            View detailed analytics about your account.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Reports</h3>
          <p className="text-sm text-muted-foreground">
            Generate and view reports.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
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
    </Tabs>
  ),
};

export const FullWidth: Story = {
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
      </TabsList>
      <TabsContent value="home">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Home</h3>
          <p className="text-sm text-muted-foreground">Welcome to your home page.</p>
        </div>
      </TabsContent>
      <TabsContent value="profile">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Profile</h3>
          <p className="text-sm text-muted-foreground">Manage your profile information.</p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Settings</h3>
          <p className="text-sm text-muted-foreground">Configure your preferences.</p>
        </div>
      </TabsContent>
      <TabsContent value="help">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Help</h3>
          <p className="text-sm text-muted-foreground">Get help and support.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
