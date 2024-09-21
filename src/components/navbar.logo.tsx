import Image from "next/image";
import {Link} from "@/components/progress-bar.link";
import React from "react";

const NavbarLogo = () => {
  return (
    <Link href={"/"} className="mr-[100px]">
      <Image
        src={"/logo.png"}
        width={170}
        height={32}
        alt="Test Logo"
      />
    </Link>
  );
};

export default NavbarLogo;
