import { MainLayout } from "@/components/layout/MainLayout";

export default function WithShellLayout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
