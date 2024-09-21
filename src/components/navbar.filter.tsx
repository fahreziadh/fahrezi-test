import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { SlidersHorizontalIcon } from "lucide-react";

const NavbarFilter = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
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
      </PopoverTrigger>
      <PopoverContent></PopoverContent>
    </Popover>
  );
};

export default NavbarFilter;
