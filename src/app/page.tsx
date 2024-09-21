import { Link } from "@/components/progress-bar.link";
import { StarIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-[16px] pb-[32px] c">
      <h1 className="text-[32px] font-bold pb-[24px]">
        New arrival in avatars
      </h1>
      <div className="grid grid-cols-5 gap-x-[24px] gap-y-[32px]">
        {Array.from({ length: 15 }).map((_, i) => (
          <Link href={`/product/${i}`} key={i} className="hover:bg-foreground/5 p-2 -m-2 rounded-[12px] transition-colors border border-transparent hover:border-foreground/5">
            <div className="w-full aspect-square bg-[#443E3E] rounded-[12px] flex items-center justify-center">
              <div>
                <p>Avatars</p>
                <p>{`>Human-like`}</p>
              </div>
            </div>
            <div className="text-sm mt-2">
              <h1>Product name</h1>
              <p className="opacity-70">Creator name</p>
              <div className="flex flex-row items-center">
                <StarIcon
                  size={14}
                  className="fill-foreground stroke-foreground"
                />
                <StarIcon
                  size={14}
                  className="fill-foreground stroke-foreground"
                />
                <StarIcon
                  size={14}
                  className="fill-foreground stroke-foreground"
                />
                <StarIcon
                  size={14}
                  className="fill-foreground stroke-foreground"
                />
                <StarIcon
                  size={14}
                  className="fill-foreground stroke-foreground"
                />
                <span className="ml-1 text-sm">5.0</span>
              </div>
              <p className="font-bold">$ 10.50</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
