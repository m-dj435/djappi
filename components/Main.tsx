import { ReactNode } from "react";
interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="flex-grow max-w-7xl mx-auto  gap-6 p-4  bg-gray-300">
      {children}
    </main>
  );
};
