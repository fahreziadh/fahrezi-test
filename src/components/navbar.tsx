import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
  CircleUserIcon,
  GlobeIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCart,
  SlidersHorizontalIcon,
} from "lucide-react";
import NavbarCategory from "./navbar.category";
import NavbarLogo from "./navbar.logo";
const Navbar = () => {
  return (
    <div className="h-20 w-full c flex flex-row items-center z-10 sticky top-0 bg-background">
      <NavbarLogo />

      <div className="rounded-full h-12 w-[529px] grid grid-cols-2 bg-[#2B2828] text-[#B3B3B3] overflow-clip">
      <div className="cursor-pointer hover:bg-foreground/5 w-full h-full pl-[32px] flex flex-col justify-center">
          <p className="text-xs font-bold">Category</p>
          <input placeholder="Search here" className="bg-transparent text-foreground placeholder:text-[#B3B3B3] focus:outline-none"/>
        </div>
        <div className="flex flex-row items-center justify-between h-full relative">
          <div className="border-l border-[#515151] h-[36px] absolute left-0"></div>
          <NavbarCategory />
          <Button
            size={"icon"}
            variant={"default"}
            className="min-w-[40px] h-[40px] rounded-full z-20 absolute right-1"
          >
            <SearchIcon size={20} className="stroke-foreground" />
          </Button>
        </div>
      </div>

      <Button
        size={"icon"}
        variant={"outline"}
        className="min-w-[40px] h-[40px] rounded-full z-20 ml-2"
      >
        <SlidersHorizontalIcon
          size={20}
          strokeWidth={2}
          className="stroke-foreground"
        />
      </Button>
      <div className="grow justify-end flex flex-row gap-[24px] items-center">
        <p className="text-sm">List your creation</p>
        <Button variant={"ghost"} size={"icon"} className="min-w-[40px] h-[40px] rounded-full z-20 px-2">
          <GlobeIcon
            size={18}
            strokeWidth={2}
            className="stroke-foreground"
          />
          
        </Button>
        <Button variant={"outline"} className="h-[40px] rounded-full z-20 px-2">
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
  );
};

export default Navbar;
