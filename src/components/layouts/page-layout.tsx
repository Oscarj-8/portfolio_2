import { ReactNode } from "react";

const PageLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex text-white flex-col items-center justify-center py-10 px-2">
      <div className="flex w-full max-w-4xl mx-auto flex-col items-start justify-center p-2">
       {children}
      </div>{" "}
    </div>
  );
};

export default PageLayout;
