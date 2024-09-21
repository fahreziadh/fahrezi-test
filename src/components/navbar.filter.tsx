"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { SlidersHorizontalIcon, XIcon } from "lucide-react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { Platforms } from "@/lib/platforms";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const NavbarFilter = ({className}:{className?:string}) => {
  const [priceRange, setPriceRange] = React.useState([0, 100]);
  const [platform, setPlatform] = React.useState<string[]>([]);

  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const query = useSearchParams();

  const onClearFilter = () => {
    setPriceRange([0, 100]);
    setPlatform([]);

    const searchParams = new URLSearchParams({
      keyword: query.get("keyword") || "",
      category: query.get("category") || "",
      subCategory: query.get("subCategory") || "",
    });

    router.push(`/?${searchParams.toString()}`);

    setIsOpen(false);
  };

  const onApplyFilter = () => {
    const searchParams = new URLSearchParams({
      keyword: query.get("keyword") || "",
      category: query.get("category") || "",
      subCategory: query.get("subCategory") || "",
      platform: platform.join(","),
      priceRange: priceRange.join(","),
    });

    router.push(`/?${searchParams.toString()}`);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          size={"icon"}
          variant={"outline"}
          className={cn("min-w-[40px] h-[40px] rounded-full z-20 ml-2", className)}
        >
          <SlidersHorizontalIcon
            size={20}
            strokeWidth={2}
            className="stroke-foreground"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-full md:w-[560px] p-0 bg-[#2B2828]"
        align="end"
        sideOffset={38}
      >
        <div className="relative p-[20px]">
          <Button
            onClick={() => setIsOpen(false)}
            variant={"ghost"}
            size={"icon"}
            className="absolute left-[20px] top-1/2 -translate-y-1/2"
          >
            <XIcon size={20} strokeWidth={2} className="stroke-foreground" />
          </Button>
          <p className="w-full text-center">Filter</p>
        </div>
        <div className="border-b border-[#515151]"></div>
        <div className="p-[24px]">
          <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />
          <div className="border-b border-[#515151] my-[32px]"></div>
          <PlatformFilter platform={platform} setPlatform={setPlatform} />
        </div>
        <div className="border-b border-[#515151]"></div>
        <div className="flex flex-row items-center justify-between p-[24px]">
          <button onClick={onClearFilter} type="button">
            Clear all
          </button>
          <Button
            onClick={onApplyFilter}
            variant={"default"}
            className="bg-foreground text-background rounded-md px-8"
          >
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

function PriceRange({
  priceRange,
  setPriceRange,
}: {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
}) {
  const handlePriceChange = (newValues: number[]) => {
    setPriceRange(newValues);
  };

  const formatPrice = (price: number) => {
    return `$ ${price.toFixed(2)}`;
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-[24px]">Price range</h2>
      <SliderPrimitive.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={priceRange}
        onValueChange={handlePriceChange}
        min={0}
        max={100}
        step={1}
      >
        <SliderPrimitive.Track className="bg-[#515151] relative grow rounded-full h-[2px]">
          <SliderPrimitive.Range className="absolute bg-red-500 rounded-full h-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block w-5 h-5 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" />
        <SliderPrimitive.Thumb className="block w-5 h-5 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" />
      </SliderPrimitive.Root>
      <div className="flex justify-between mt-[24px]">
        <div className="flex flex-col items-center">
          <label
            htmlFor="min-price"
            className="block text-xs text-gray-400 mb-1"
          >
            Minimum
          </label>
          <input
            id="min-price"
            type="text"
            className="w-[96px] h-[48px] border rounded-full border-[#515151] text-center bg-transparent"
            value={formatPrice(priceRange[0])}
            readOnly
          />
        </div>
        <div>
          <label
            htmlFor="max-price"
            className="block text-xs text-gray-400 mb-1"
          >
            Maximum
          </label>
          <input
            id="max-price"
            type="text"
            className="w-[96px] h-[48px] border rounded-full border-[#515151] text-center bg-transparent"
            value={formatPrice(priceRange[1])}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

function PlatformFilter({
  platform,
  setPlatform,
}: {
  platform: string[];
  setPlatform: (value: string[]) => void;
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-[24px]">Platform</h2>
      <div className="mt-[24px] grid grid-cols-3 max-w-[392px] gap-4">
        {Platforms.map((item) => (
          <button
            onClick={() => {
              if (platform.includes(item.id)) {
                setPlatform(platform.filter((e) => e !== item.id));
                return;
              }
              setPlatform([...platform, item.id]);
            }}
            key={item.id}
            className={cn(
              "border rounded-[8px] border-[#515151]  flex flex-col items-start justify-end p-[12px]",
              platform?.includes(item.id)
                ? "border-foreground"
                : "bg-transparent text-[#B3B3B3]"
            )}
          >
            {item.image ? (
              <Image src={item.image} width={40} height={40} alt={item.name} />
            ) : null}
            <p className="text-[10px]">{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavbarFilter;
