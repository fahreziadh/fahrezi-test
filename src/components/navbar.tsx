"use client";

import React from "react";
import NavbarLogo from "./navbar.logo";
import NavbarSearch from "./navbar.search";
import NavbarFilter from "./navbar.filter";
import NavbarLang from "./navbar.lang";
import NavbarAccount from "./navbar.account";
import NavbarCart from "./navbar.cart";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
const Navbar = () => {
  return (
    <div className="border-b border-[#515151] bg-background  z-10 sticky top-0 ">
      <div className="h-20 w-full c flex flex-row items-center">
        <NavbarLogo />
        <NavbarSearch />
        <NavbarFilter />

        {/* Desktop Only */}
        <div className="grow justify-end hidden md:flex flex-row gap-[24px] items-center ml-[40px]">
          <p className="text-sm truncate">List your creation</p>
          <NavbarLang />
          <NavbarAccount />
          <NavbarCart />
        </div>

        {/* Mobile Only */}
        <MobileMenu />
      </div>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          variant={"outline"}
          className="min-w-[40px] h-[40px] rounded-full z-20 flex md:hidden ml-4"
        >
          <MenuIcon size={20} strokeWidth={2} className="stroke-foreground" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-row items-center justify-center" side={"top"}>
        <NavbarLang />
        <NavbarAccount />
        <NavbarCart />
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
