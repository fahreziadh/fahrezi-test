"use client";
import React from "react";
import { notFound } from "next/navigation";
import { ShoppingCartIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const product = products.find((product) => product.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Mock user reviews
  const userReviews = [
    { id: 1, username: "John Doe", rating: 5, comment: "Great product! Highly recommended." },
    { id: 2, username: "Jane Smith", rating: 4, comment: "Good quality, but a bit pricey." },
    { id: 3, username: "Mike Johnson", rating: 5, comment: "Exceeded my expectations. Will buy again!" },
  ];

  return (
    <div className="py-4 sm:py-24 c min-h-screen">
      <div className="lg:grid lg:grid-cols-2">
        {/* Product image */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="aspect-square rounded-lg overflow-hidden flex flex-col items-center justify-center bg-[#443E3E]">
            <div className="p-2 md:text-2xl">
              <p>{product.category}</p>
              <p>{`>${product.subcategory}`}</p>
            </div>
          </div>
        </div>

        {/* Product details */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            {product.productName}
          </h1>
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-foreground">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Rating */}
          <div className="mt-3">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={`${
                      product.rating > rating ? "fill-foreground" : ""
                    } h-5 w-5 flex-shrink-0`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{product.rating} out of 5 stars</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium text-foreground">Description</h3>
            <div className="mt-4 prose text-foreground/50">
              <p>
                This is a placeholder description for {product.productName}. In
                a real application, you would have a detailed description of the
                product here.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <h3 className="font-medium text-foreground">Creator:</h3>
              <p className="ml-2 text-foreground/50">{product.creatorName}</p>
            </div>
            <div className="mt-2 flex items-center">
              <h3 className="font-medium text-foreground">Category:</h3>
              <p className="ml-2 text-foreground/50">
                {product.category} - {product.subcategory}
              </p>
            </div>
          </div>

          <div className="mt-10 flex sm:flex-col1">
            <Button size={"lg"}>
              <ShoppingCartIcon size={16} className="mr-2" />
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      {/* User Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-foreground mb-4">User Reviews</h2>
        <div className="space-y-4">
          {userReviews.map((review) => (
            <div key={review.id} className="border-b border-foreground/10 pb-4">
              <div className="flex items-center mb-2">
                <p className="font-medium text-foreground">{review.username}</p>
                <div className="flex items-center ml-2">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={`${
                        review.rating > rating ? "fill-foreground" : ""
                      } h-4 w-4 flex-shrink-0`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <p className="text-foreground/70">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
