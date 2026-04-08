import React from "react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const DIALOG_DOC_PROPS = ["open", "onOpenChange", "defaultOpen", "modal"];

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    controls: { include: DIALOG_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props (Dialog 루트)

- **open** — 제어 모드에서 열림 여부.
- **defaultOpen** — 비제어 모드 초기 열림.
- **onOpenChange** — 열림 상태 변경 시 콜백.
- **modal** — \`true\`면 포커스 트랩·배경 스크롤 차단 등 모달 동작.

본문·트리거는 \`DialogTrigger\`, \`DialogContent\`, \`DialogHeader\` 등 조합으로 구성합니다.`,
      },
      controls: { include: DIALOG_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean", description: "제어: 열림 여부" },
    defaultOpen: { control: "boolean", description: "비제어: 초기 열림" },
    onOpenChange: {
      control: false,
      description: "열림 상태 변경 시 콜백",
    },
    modal: {
      control: "boolean",
      description: "true면 모달(포커스 트랩·외부 스크롤 차단)",
    },
  },
};

export default meta;

export const Default = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithActions = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
