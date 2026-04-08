import * as React from "react";
import { ThemeProvider } from "next-themes";
import { toast } from "sonner";
import { Button } from "./button";
import { Toaster } from "./sonner";

const SONNER_DOC_PROPS = [
  "position",
  "richColors",
  "expand",
  "visibleToasts",
  "closeButton",
  "duration",
  "className",
];

const meta = {
  title: "UI/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
    controls: { include: SONNER_DOC_PROPS },
    docs: {
      description: {
        component: `### 주요 props (Toaster)

- **position** — 토스트가 뜨는 화면 모서리.
- **richColors** — 성공·에러 등 시맨틱 색 강조.
- **expand** — 호버 시 스택 확장 여부.
- **visibleToasts** — 동시에 보이는 개수 상한.
- **closeButton** — 닫기 버튼 표시.
- **duration** — 자동 사라짐 시간(ms), \`Infinity\`면 유지.
- **className** — 토스트 컨테이너에 추가 클래스.

개별 알림은 \`toast()\` API로 띄웁니다.`,
      },
      controls: { include: SONNER_DOC_PROPS },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        <div className="flex flex-col items-center gap-4">
          <Story />
        </div>
        <Toaster />
      </ThemeProvider>
    ),
  ],
};

export default meta;

// function AutoShowToast({ variant = "default" }) {
//   React.useEffect(() => {
//     if (variant === "success") {
//       toast.success("저장되었습니다.", { duration: Infinity, closeButton: true });
//       return;
//     }
//     if (variant === "error") {
//       toast.error("문제가 발생했습니다.", { duration: Infinity, closeButton: true });
//       return;
//     }

//     toast("기본 토스트", {
//       description: "스토리 로드시 자동으로 뜨는 테스트 토스트입니다.",
//       duration: Infinity,
//       closeButton: true,
//     });
//   }, [variant]);

//   return (
//     <div className="text-sm text-muted-foreground">
//       이 스토리는 로드 시 토스트가 자동으로 뜹니다. (닫기 버튼으로 종료)
//     </div>
//   );
// }

// /** 테스트용: 클릭 없이 항상 표시 (duration: Infinity) */
// export const AutoShow = {
//   render: () => <AutoShowToast variant="default" />,
// };

export const Default = {
  render: () => (
    <Button
      type="button"
      onClick={() => {
        toast("기본 토스트", {
          closeButton: true,
        });
      }}
      // onClick={() => {
      //   toast("기본 토스트", {
      //     duration: 4000, 시간 조절
      //   });
      // }}
    >
      Show toast
    </Button>
  ),
};

export const Success = {
  render: () => (
    <Button
      type="button"
      variant="secondary"
      onClick={() => toast.success("저장되었습니다.")}
    >
      Success
    </Button>
  ),
};

export const ErrorToast = {
  render: () => (
    <Button
      type="button"
      variant="destructive"
      onClick={() => toast.error("문제가 발생했습니다.")}
    >
      Error
    </Button>
  ),
};

export const WithDescription = {
  render: () => (
    <Button
      type="button"
      variant="outline"
      onClick={() =>
        toast("제목", {
          description: "부가 설명은 description 옵션으로 넣을 수 있습니다.",
        })
      }
    >
      Title + description
    </Button>
  ),
};
