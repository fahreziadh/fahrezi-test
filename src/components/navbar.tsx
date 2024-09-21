import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-20 w-full container flex flex-row items-center">
      <Image
        src={"/logo.png"}
        width={170}
        height={32}
        alt="Test Logo"
        className="mr-[100px]"
      />
      <div className="rounded-full h-12 w-[529px] grid grid-cols-2 bg-[#2B2828] text-[#B3B3B3]">
        <div className="pl-[32px]"></div>
        <div className=" flex flex-row items-center justify-between h-full relative">
          <div>
            <div className="border-l border-[#515151] h-[36px] mr-[32px]"></div>
            
          </div>
          <Button size={"icon"} variant={"default"} className="w-[40px] h-[40px] rounded-full mr-1">
            <SearchIcon size={24} className="stroke-foreground"/>
          </Button>
        </div>
      </div>
    </div>
  );
};


export default Navbar;
