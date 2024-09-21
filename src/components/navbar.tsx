import React from "react";
import { Button } from "./ui/button";
import {
  CircleUserIcon,
  GlobeIcon,
  MenuIcon,
  ShoppingCart,
} from "lucide-react";
import NavbarLogo from "./navbar.logo";
import NavbarSearch from "./navbar.search";
import NavbarFilter from "./navbar.filter";
const Navbar = () => {
  return (
    <div className="border-b border-[#515151] bg-background  z-10 sticky top-0 ">
      <div className="h-20 w-full c flex flex-row items-center">
        <NavbarLogo />
        <NavbarSearch />
        <NavbarFilter />

        <div className="grow justify-end flex flex-row gap-[24px] items-center">
          <p className="text-sm">List your creation</p>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="min-w-[40px] h-[40px] rounded-full z-20 px-2"
          >
            <GlobeIcon
              size={18}
              strokeWidth={2}
              className="stroke-foreground"
            />
          </Button>
          <Button
            variant={"outline"}
            className="h-[40px] rounded-full z-20 px-2"
          >
            <MenuIcon
              size={18}
              strokeWidth={2}
              className="stroke-foreground mr-[10px] "
            />
            <CircleUserIcon
              size={24}
              strokeWidth={2}
              className="stroke-foreground"
            />
          </Button>

          <Button
            size={"icon"}
            variant={"outline"}
            className="min-w-[40px] h-[40px] rounded-full z-20"
          >
            <ShoppingCart
              size={20}
              strokeWidth={2}
              className="stroke-foreground"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
