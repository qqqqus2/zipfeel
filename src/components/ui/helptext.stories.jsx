import React from "react";

import { HelpText } from "./helptext";
import { Icon } from "./icon";

const HELPTEXT_DOC_PROPS = ["variant", "children", "icon"];

const meta = {
  title: "UI/HelpText",
  component: HelpText,
  parameters: {
    layout: "centered",
    controls: { include: HELPTEXT_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props

- **variant** — \`default\`, \`primary\`, \`positive\`, \`negative\`, \`info\` 등 톤·아이콘 기본값.
- **children** — 본문 설명 텍스트.
- **icon** — 아이콘 노드 직접 전달 또는 \`null\`로 기본 아이콘 숨김.`,
      },
      controls: { include: HELPTEXT_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "positive", "negative", "info"],
      description: "색·아이콘 톤",
    },
    children: {
      control: "text",
      description: "본문 텍스트",
    },
    icon: {
      control: false,
      description:
        "아이콘을 직접 주입하거나(icon={<.../>}) 숨기려면 icon={null}을 사용하세요.",
    },
  },
};

export default meta;

export const Default = {
  args: {
    variant: "default",
    children: "도움말 텍스트입니다.",
  },
};

export const Positive = {
  args: {
    variant: "positive",
    children: "성공적으로 저장되었습니다.",
  },
};

export const Negative = {
  args: {
    variant: "negative",
    children: "필수 값을 입력해 주세요.",
  },
};

export const Info = {
  args: {
    variant: "info",
    children: "입력 예시를 참고해 주세요.",
  },
};

export const WithoutIcon = {
  name: "아이콘 없음",
  args: {
    variant: "default",
    icon: null,
    children: "아이콘을 숨긴 HelpText입니다.",
  },
};

export const CustomIcon = {
  name: "커스텀 아이콘",
  args: {
    variant: "negative",
    icon: <Icon name="tooltip" className="text-sub-1" />,
    children: "스프라이트 아이콘을 주입한 예시입니다.",
  },
};

export const WithLongText = {
  name: "긴 문장",
  render: () => (
    <div className="w-[min(100%,520px)] space-y-3">
      <HelpText variant="default">
        길이가 긴 문장도 함께 사용할 수 있습니다. 필요하다면 줄바꿈/정렬을
        고려해 컨테이너 폭을 조절해 주세요.
      </HelpText>
      <HelpText variant="negative">
        오류 메시지는 가능한 한 짧고 명확하게 작성하는 것이 좋습니다.
      </HelpText>
    </div>
  ),
};
