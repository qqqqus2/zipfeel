import React from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "./field";
import { Input } from "./input";
import { Icon } from "./icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const FIELD_DOC_PROPS = ["orientation", "invalid"];

const meta = {
  title: "UI/Field",
  component: Field,
  parameters: {
    // centered는 flex로 자식 폭이 min-content로 줄어들 수 있어
    // Field의 % 너비·줄바꿈이 깨짐 → 폼 스토리는 padded 권장
    layout: "padded",
    controls: { include: FIELD_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props (Field 루트)

- **orientation** — \`vertical\`, \`horizontal\`, \`responsive\` 레이아웃.
- **invalid** — 검증 오류 시각 상태(\`data-invalid\`).

라벨·설명·에러는 \`FieldLabel\`, \`FieldDescription\`, \`FieldError\`, \`FieldSet\` 등과 함께 씁니다.`,
      },
      controls: { include: FIELD_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal", "responsive"],
      description: "필드 그룹 방향",
    },
    invalid: {
      control: "boolean",
      description: "검증 오류 시각 상태(data-invalid)",
    },
  },
};

export default meta;

export const Default = {
  render: () => (
    <div className="mx-auto w-full min-w-0 max-w-[420px]">
      <Field>
        <FieldLabel htmlFor="field-email">이메일</FieldLabel>
        <FieldContent>
          <Input id="field-email" type="email" placeholder="name@example.com" />
          <FieldDescription>
            이메일은 외부에 공개되지 않습니다.
          </FieldDescription>
        </FieldContent>
      </Field>
    </div>
  ),
};

export const Horizontal = {
  render: () => (
    <div className="mx-auto w-full min-w-0 max-w-[480px]">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="field-name">이름</FieldLabel>
        <FieldContent>
          <Input id="field-name" placeholder="홍길동" />
        </FieldContent>
      </Field>
    </div>
  ),
};

export const RequiredLabel = {
  name: "필수 라벨(FieldLabel required)",
  render: () => (
    <div className="mx-auto w-full min-w-0 max-w-[420px]">
      <Field>
        <FieldLabel htmlFor="field-req" required>
          휴대폰 번호
        </FieldLabel>
        <FieldContent>
          <Input id="field-req" type="tel" placeholder="010-0000-0000" required />
        </FieldContent>
      </Field>
    </div>
  ),
};

export const Responsive = {
  name: "반응형(orientation=responsive)",
  render: () => (
    <div className="mx-auto w-full min-w-0 max-w-[480px]">
      <FieldGroup className="w-full min-w-0 max-w-md">
        <Field orientation="responsive">
          <FieldLabel htmlFor="field-responsive">닉네임</FieldLabel>
          <FieldContent>
            <Input id="field-responsive" placeholder="표시 이름" />
            <FieldDescription>
              좁은 화면에서는 세로, 넓으면 가로 배치됩니다.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  ),
};

export const WithError = {
  name: "오류(invalid + aria-invalid)",
  render: () => (
    <div className="mx-auto w-full min-w-0 max-w-[420px]">
      <Field invalid>
        <FieldLabel htmlFor="field-password">비밀번호</FieldLabel>
        <FieldContent>
          <Input
            id="field-password"
            type="password"
            aria-invalid
            aria-describedby="field-password-error"
          />
          <FieldError id="field-password-error">
            비밀번호는 8자 이상이어야 합니다.
          </FieldError>
        </FieldContent>
      </Field>
    </div>
  ),
};

export const RequiredAndInvalid = {
  name: "필수 + 검증 오류",
  render: () => (
    <div className="mx-auto w-full min-w-0 max-w-[420px]">
      <Field invalid>
        <FieldLabel htmlFor="field-code" required>
          인증 코드
        </FieldLabel>
        <FieldContent>
          <Input
            id="field-code"
            inputMode="numeric"
            placeholder="6자리"
            required
            aria-invalid
            aria-describedby="field-code-error"
          />
          <FieldError id="field-code-error">코드를 입력해 주세요.</FieldError>
        </FieldContent>
      </Field>
    </div>
  ),
};

export const FieldSetGroup = {
  render: () => (
    <div className="mx-auto w-full min-w-0 max-w-[480px]">
      <FieldSet>
        <FieldLegend>계정</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldTitle>사용자 이름</FieldTitle>
            <FieldContent>
              <Input placeholder="johndoe" />
              <FieldDescription>
                다른 사용자에게 보이는 이름입니다.
              </FieldDescription>
            </FieldContent>
          </Field>
          <FieldSeparator />
          <Field>
            <FieldLabel htmlFor="field-bio">소개</FieldLabel>
            <FieldContent>
              <Input id="field-bio" placeholder="간단히 소개해 주세요" />
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};

export const LabelWithTooltip = {
  name: "라벨 + 툴팁",
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={200}>
        <Story />
      </TooltipProvider>
    ),
  ],
  render: () => (
    <div className="mx-auto w-full min-w-0 max-w-[420px]">
      <Field>
        <FieldLabel htmlFor="field-tooltip" className="inline-flex items-center gap-1.5">
          <span>할인 코드</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="inline-flex rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="할인 코드 도움말"
                onPointerDown={(e) => e.preventDefault()}
              >
                <Icon name="tooltip" className="size-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-xs">
              프로모션에서 받은 코드를 입력하면 할인이 적용됩니다.
            </TooltipContent>
          </Tooltip>
        </FieldLabel>
        <FieldContent>
          <Input id="field-tooltip" placeholder="코드 입력" />
          <FieldDescription>선택 사항입니다.</FieldDescription>
        </FieldContent>
      </Field>
    </div>
  ),
};

export const FieldSeparatorWithLabel = {
  render: () => (
    <div className="mx-auto w-full min-w-0 max-w-[480px]">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="a">항목 A</FieldLabel>
          <FieldContent>
            <Input id="a" />
          </FieldContent>
        </Field>
        <FieldSeparator>또는</FieldSeparator>
        <Field>
          <FieldLabel htmlFor="b">항목 B</FieldLabel>
          <FieldContent>
            <Input id="b" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  ),
};
