import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";

const NavbarLang = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="min-w-[40px] h-[40px] rounded-full z-20 px-2"
        >
          <GlobeIcon size={18} strokeWidth={2} className="stroke-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[203px] p-[6px] bg-[#2B2828]" align="end">
        <Button
          variant={"secondary"}
          className="w-full justify-start gap-2 h-[28px] rounded-[6px] px-[6px] text-xs"
        >
          <Image src="/en.png" alt="en" width={20} height={20} />
          <span>English</span>
        </Button>
        <Button
          variant={"ghost"}
          className="w-full justify-start gap-2 h-[28px] rounded-[6px] px-[6px] text-xs"
        >
          <Image src="/jp.png" alt="en" width={20} height={20} />
          <span>Japanese</span>
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default NavbarLang;
