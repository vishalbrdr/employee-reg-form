import { Toaster } from "react-hot-toast";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-theme="nord"
      className="bg-base-300 min-h-dvh flex flex-col items-center text-center p-3"
    >
      <Toaster />
      {children}
    </div>
  );
}

export default Layout;
