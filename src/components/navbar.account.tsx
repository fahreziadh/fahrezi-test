import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { MenuIcon, CircleUserIcon } from "lucide-react";
import { Button } from "./ui/button";

const NavbarAccount = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
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
      </PopoverTrigger>
      <PopoverContent
        className=" bg-[#2B2828] w-[220px] p-2 py-[10px]"
        align="end"
      >
        <Button
          variant={"ghost"}
          className="w-full justify-start gap-2 h-[37px] rounded-[6px] px-[6px] text-xs"
        >
          Sign in
        </Button>
        <Button
          variant={"ghost"}
          className="w-full justify-start gap-2 h-[37px] rounded-[6px] px-[6px] text-xs"
        >
          Sign up
        </Button>
        <div className="border-b border-[#515151] w-full my-[8px]" />
        <Button
          variant={"ghost"}
          className="w-full justify-start gap-2 h-[37px] rounded-[6px] px-[6px] text-xs"
        >
          List your item
        </Button>
        <Button
          variant={"ghost"}
          className="w-full justify-start gap-2 h-[37px] rounded-[6px] px-[6px] text-xs"
        >
          Message to Yuta (The founder)
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default NavbarAccount;
