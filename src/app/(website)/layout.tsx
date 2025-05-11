import React from "react";
import LandingPageNavBar from "@/components/LandingPageNavBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-full py-10 px-10 xl:px-10 ">
      <LandingPageNavBar />

      {children}
    </div>
  );
};

export default Layout;
