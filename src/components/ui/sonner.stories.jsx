import * as React from "react";
import { ThemeProvider } from "next-themes";
import { toast } from "sonner";
import { Button } from "./button";
import { Toaster } from "./sonner";

const meta = {
  title: "UI/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
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
