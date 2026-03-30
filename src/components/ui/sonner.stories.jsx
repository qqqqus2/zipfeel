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
