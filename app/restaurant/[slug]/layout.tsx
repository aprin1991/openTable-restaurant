import React, { ReactNode } from "react";
import Header from "./components/Header";

const layout = ({
  children,
  params: { slug },
}: {
  children: ReactNode;
  params: { slug: string };
}) => {
  return (
    <>
      <Header name={slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11 text-black">
        {children}
      </div>
    </>
  );
};

export default layout;
