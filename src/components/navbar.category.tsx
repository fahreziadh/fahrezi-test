import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const NavbarCategory = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="cursor-pointer hover:bg-foreground/5 w-full h-full pl-[32px] flex flex-col justify-center">
          <p className="text-xs font-bold">Category</p>
          <p className="">All</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[444px] h-[444px]" align="end"></PopoverContent>
    </Popover>
  );
};

export default NavbarCategory;
