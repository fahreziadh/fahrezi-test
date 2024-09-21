import { products } from "./products";
import CardProduct from "@/components/card-product";

export default function Home() {
  return (
    <div className="pt-[16px] pb-[32px] c">
      <h1 className="text-[32px] font-bold pb-[24px]">
        New arrival in avatars
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 sm:gap-x-[24px] sm:gap-y-[32px] gap-x-[8px] gap-y-[24px] w-full">
        {products.map((p) => (
          <CardProduct product={p} key={p.slug} />
        ))}
      </div>
    </div>
  );
}
