import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { Button } from "./ui/button";

type Props = {};

const LandingPageNavBar = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <Menu className="w-8 h-8" />
        <Image alt="logo" src="/opal-logo2.png" width={32} height={32} />
        Opal
      </div>
      <div className="hidden gap-x-10 items-center lg:flex">
        <Link
          href="/"
          className="bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80"
        >
          Home
        </Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Home</Link>
      </div>
      <Link href="/auth/sign-in">
        <Button className="bg-white text-black flex gap-x-2">
          <User />
          Login
        </Button>
      </Link>
    </div>
  );
};

export default LandingPageNavBar;
