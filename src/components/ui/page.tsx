import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className="max-w-screen-md mx-auto pt-8 w-full min-h-full flex flex-col gap-5">
      {children}
    </div>
  );
};
