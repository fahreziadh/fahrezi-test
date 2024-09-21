"use client";
import { useSearchParams } from "next/navigation";
import { products } from "./products";
import CardProduct from "@/components/card-product";
export default function Home() {
  const query = useSearchParams();

  const keyword = query.get("keyword") || "";
  const category = query.get("category") || "";
  const subCategory = query.get("subCategory") || "";

  const filteredProducts = products.filter((product) => {
    return (
      product.productName.toLowerCase().includes(keyword.toLowerCase()) &&
      product.category.toLowerCase().includes(category.toLowerCase()) &&
      product.subcategory.toLowerCase().includes(subCategory.toLowerCase())
    );
  });

  return (
    <div className="pt-[16px] pb-[32px] c min-h-screen">
      <h1 className="text-[32px] font-bold pb-[24px]">
        {!category && !subCategory ? " New arrival in avatars" : null}
        {category ? category : null}
        {subCategory ? ` > ${subCategory}` : null}
      </h1>
      {keyword ? <p className="mb-2 opacity-50">{`Search results for "${keyword}"`}</p> : null}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 sm:gap-x-[24px] sm:gap-y-[32px] gap-x-[8px] gap-y-[24px] w-full">
        {filteredProducts.map((p) => (
          <CardProduct product={p} key={p.slug} />
        ))}
      </div>
      {filteredProducts.length === 0 ? <p className="">No products found</p> : null}
    </div>
  );
}
