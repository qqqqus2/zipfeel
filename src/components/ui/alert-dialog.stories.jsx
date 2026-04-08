import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const ALERT_DIALOG_DOC_PROPS = ["open", "onOpenChange", "defaultOpen"];

const meta = {
  title: "UI/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
    controls: { include: ALERT_DIALOG_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props (AlertDialog 루트)

- **open** — 제어: 열림 여부.
- **defaultOpen** — 비제어: 초기 열림.
- **onOpenChange** — 열림 상태 변경 콜백.

일반 Dialog와 달리 확인·취소 등 의도적 조치를 요구하는 패턴에 맞춰 \`AlertDialogAction\` / \`AlertDialogCancel\` 등으로 닫힘을 구성합니다.`,
      },
      controls: { include: ALERT_DIALOG_DOC_PROPS },
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
  },
};

export default meta;

/** 기본 알림: 확인 outline 버튼 하나 (+ 닫기 X) */
export const Default = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open alert</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Something went wrong</AlertDialogTitle>
          <AlertDialogDescription>
            Please try again. If the problem continues, contact support.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction variant="outline">OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

/** 취소 outline · 확인 fill — 코너 `check_circle.svg` (기본) */
export const WithCancel = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Change language</Button>
      </AlertDialogTrigger>
      <AlertDialogContent cornerArtVariant="confirm">
        <AlertDialogHeader>
          <AlertDialogTitle>Change the language?</AlertDialogTitle>
          <AlertDialogDescription>
            The app will restart with the new language. You can change it again
            in settings.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

/** 확인 다이얼로그 + `contact_support.svg` 코너 */
export const WithCancelContactSupport = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Contact support</Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        cornerArtVariant="confirm"
        confirmCornerGraphic="contactSupport"
      >
        <AlertDialogHeader>
          <AlertDialogTitle>Need help?</AlertDialogTitle>
          <AlertDialogDescription>
            You can reach our support team from the app settings. Continue to
            open the help center?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Open</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

/** 취소: outline(point1) · 위험 액션: 빨간 outline */
export const DestructiveConfirm = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Delete account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete your account?</AlertDialogTitle>
          <AlertDialogDescription>
            This cannot be undone. All your data will be permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructiveOutline">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

/** 한글 단일 확인 (필수 입력 안내) */
export const RequiredFieldsKo = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">필수 입력 알림</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left font-bold text-foreground">
            필수 입력 값을
            <br />
            모두 입력해 주세요.
          </AlertDialogTitle>
          <AlertDialogDescription className="sr-only">
            필수 입력 항목을 모두 채운 뒤 다시 시도해 주세요.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction variant="outline">확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

function AlertDialogWithPasswordExample() {
  const [password, setPassword] = useState("");

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Confirm with password</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Enter your password</AlertDialogTitle>
          <AlertDialogDescription>
            This action requires verification. Type your password to continue.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogBody className="mt-4 grid gap-2">
          <Label htmlFor="alert-dialog-password">Password</Label>
          <Input
            id="alert-dialog-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </AlertDialogBody>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={!password.trim()}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export const WithPassword = {
  render: () => <AlertDialogWithPasswordExample />,
};

function AlertDialogWithSelectExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Choose reason</Button>
      </AlertDialogTrigger>
      <AlertDialogContent cornerArtVariant="confirm">
        <AlertDialogHeader>
          <AlertDialogTitle>Report this content</AlertDialogTitle>
          <AlertDialogDescription>
            Select a reason. We will review your report.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogBody className="mt-4 grid gap-2">
          <Label htmlFor="alert-dialog-reason">Reason</Label>
          <Select defaultValue="spam">
            <SelectTrigger id="alert-dialog-reason" className="w-full">
              <SelectValue placeholder="Select a reason" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="spam">Spam</SelectItem>
              <SelectItem value="abuse">Abuse</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </AlertDialogBody>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export const WithSelect = {
  render: () => <AlertDialogWithSelectExample />,
};

/** shadcn 기본 버튼 + 코너 SVG 없음 */
export const LegacyPlain = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Plain dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent showCornerArt={false}>
        <AlertDialogHeader>
          <AlertDialogTitle>Plain title</AlertDialogTitle>
          <AlertDialogDescription>
            <code>{'showCornerArt={false}'}</code> · 회색 버튼 variant.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="default">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="default">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
