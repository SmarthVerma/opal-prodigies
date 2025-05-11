import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = (props: Props) => {
  return (
    <div className=" h-screen flex justify-center items-center ">
      {props.children}
    </div>
  );
};

export default AuthLayout;
