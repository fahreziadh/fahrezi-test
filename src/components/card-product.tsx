import { products } from '@/lib/products'
import React from 'react'
import { Link } from './progress-bar.link'
import { StarIcon } from 'lucide-react'

const CardProduct = ({product}:{product: typeof products[0]}) => {
  return (
    <Link
    href={`/product?p=${product.slug}`}
    className="hover:bg-foreground/5 p-2 -m-2 rounded-[12px] transition-colors border border-transparent hover:border-foreground/5"
  >
    <div className="w-full aspect-square bg-[#443E3E] rounded-[12px] flex items-center justify-center">
      <div className='p-2'>
        <p>{product.category}</p>
        <p>{`>${product.subcategory}`}</p>
      </div>
    </div>
    <div className="text-sm mt-2">
      <h1>{product.productName}</h1>
      <p className="opacity-70">{product.creatorName}</p>
      <div className="flex flex-row items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            size={14}
            className="fill-foreground stroke-foreground"
          />
        ))}
        <span className="ml-1 text-sm">{product.rating.toPrecision(2)}</span>
      </div>
      <p className="font-bold">
        {Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
      </p>
    </div>
  </Link>
  )
}

export default CardProduct