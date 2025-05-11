import { SignIn } from "@clerk/nextjs";
import React from "react";

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
