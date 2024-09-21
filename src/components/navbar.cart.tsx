import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const NavbarCart = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
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
      </PopoverTrigger>
      <PopoverContent  align="end" className=" bg-[#2B2828]">
        <p>Carts is empty</p>
      </PopoverContent>
    </Popover>
  );
};

export default NavbarCart;
