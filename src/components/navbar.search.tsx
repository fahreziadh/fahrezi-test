"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronRightIcon, SearchIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { categoryStructure } from "@/lib/categories";
import { cn } from "@/lib/utils";

const NavbarSearch = ({className}:{className?:string}) => {
  const query = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState(
    query.get("keyword") || ""
  );
  const [searchCategory, setSearchCategory] = useState(
    query.get("category") || ""
  );
  const [searchSubCategory, setSearchSubCategory] = useState(
    query.get("subCategory") || ""
  );
  const router = useRouter();

  const onChangeSearch = () => {
    const searchParams = new URLSearchParams({
      keyword: searchKeyword,
      category: searchCategory === "All" ? "" : searchCategory,
      subCategory: searchSubCategory,
    });

    router.push(`/?${searchParams.toString()}`);
  };

  return (
    <div className={cn("rounded-full h-12 w-[529px] grid grid-cols-2 bg-[#2B2828] text-[#B3B3B3] overflow-clip relative", className)}>
      <Search value={searchKeyword} setValue={setSearchKeyword} />
      <Category
        category={searchCategory}
        subcategory={searchSubCategory}
        onChangeCategory={setSearchCategory}
        onChangeSubCategory={setSearchSubCategory}
      />
      <Button
        onClick={onChangeSearch}
        size={"icon"}
        variant={"default"}
        className="min-w-[40px] h-[40px] rounded-full z-20 absolute right-1 top-1/2 -translate-y-1/2"
      >
        <SearchIcon size={20} className="stroke-foreground" />
      </Button>
    </div>
  );
};

const Search = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) => {
  const [showSearch, setShowSearch] = useState(false);

  if (!showSearch) {
    return (
      <button
        onClick={() => setShowSearch(true)}
        className="cursor-pointer hover:bg-foreground/5 w-full h-full pl-[16px] lg:pl-[32px] flex flex-col justify-center"
      >
        <p className="text-xs font-bold">Keyword</p>
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.2, ease: "circOut" }}
          className="bg-transparent text-[#B3B3B3] focus:outline-none truncate w-2/3 text-start"
        >
          {value ? value : "Search here"}
        </motion.p>
      </button>
    );
  }

  return (
    <motion.input
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "circOut" }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => {
        setShowSearch(false);
      }}
      placeholder="Type here..."
      className="w-full h-full pl-[32px] text-foreground placeholder:text-[#B3B3B3] bg-transparent focus:outline-none"
      autoFocus
    />
  );
};

const Category = ({
  category = "All",
  subcategory,
  onChangeCategory,
  onChangeSubCategory,
}: {
  category: string;
  subcategory: string;

  onChangeCategory: (category: string) => void;
  onChangeSubCategory: (subcategory: string) => void;
}) => {
  const subCategoryList =
    categoryStructure[category as keyof typeof categoryStructure];
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-row items-center justify-between h-full relative">
      <div className="border-l border-[#515151] h-[36px] absolute left-0"></div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="cursor-pointer hover:bg-foreground/5 w-full h-full pl-[16px] lg:pl-[32px] flex flex-col justify-center">
            <p className="text-xs font-bold">Category</p>
            <p className="truncate w-2/3">
              {category ? category : "All"}{" "}
              {subcategory ? `> ${subcategory}` : null}
            </p>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[360px] sm:w-[444px] grid grid-cols-2 p-4 rounded-[32px]  min-h-[344px] " align="end">
          {/* Category */}
          <div className="flex flex-col h-max">
            {Object.keys(categoryStructure).map((e) => (
              <Button
                key={e}
                variant={category === e ? "secondary" : "ghost"}
                className="justify-between w-full text-base h-10"
                onClick={() => {
                  if (category === e) {
                    onChangeCategory("");
                    onChangeSubCategory("");
                    return;
                  }
                  onChangeCategory(e as keyof typeof categoryStructure);
                  onChangeSubCategory("");
                }}
              >
                <span>{e}</span>
                {categoryStructure[e as keyof typeof categoryStructure]
                  .length ? (
                  <ChevronRightIcon size={16} />
                ) : null}
              </Button>
            ))}
          </div>

          {/* Sub Category */}
          {subCategoryList?.length > 0 ? (
            <div className="h-full border-l border-[#515151] ml-[6px] pl-[6px]">
              {categoryStructure[
                category as keyof typeof categoryStructure
              ].map((e) => (
                <Button
                  key={e}
                  variant={subcategory === e ? "secondary" : "ghost"}
                  className="justify-between w-full  text-base h-10"
                  onClick={() => {
                    if (subcategory === e) {
                      onChangeSubCategory("");
                      return;
                    }
                    onChangeSubCategory(e);
                  }}
                >
                  <span>{e}</span>
                </Button>
              ))}
               <Button
                  variant={subcategory === "" ? "secondary" : "ghost"}
                  className="justify-between w-full h-10 text-base"
                  onClick={() => {
                    onChangeSubCategory("");
                  }}
                >
                  <span>{`All in ${category}`}</span>
                </Button>
            </div>
          ) : null}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavbarSearch;
