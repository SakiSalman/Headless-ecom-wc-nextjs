"use client";
import { AppContext } from "@/context/cartContext/AppContext";
import { addToCart } from "@/utlis/Cart/add-to-cart";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

type Props = {
  product: any;
};

const ProductCard = ({ product }: Props) => {
  const [cart, setCart]: any = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);
  return (
    <div className="shadow-sm border rounded-md">
      <Image
        width={350}
        height={350}
        src={product?.images?.[0].src}
        alt=""
        className="object-cover mx-auto"
      />
      <div className="p-3">
        <Link href={`/product/${product?.slug}`}>
          <h4 className="py-3 text-xl font-medium">{product?.name}</h4>
        </Link>
        <div
          className="text-green-500"
          dangerouslySetInnerHTML={{ __html: product?.price_html }}
        />
        <div className="flex justify-between items-center py-2">
          {product.type == "simple" && (
            <button
              onClick={() => addToCart(product?.id, 1, setCart, setLoading)}
              className="py-3 px-4 rounded-md border hover:bg-lime-400 transition-colors duration-700"
            >
              {isLoading ? "Adding..." : "Add To Cart"}
            </button>
          )}
          <button className="py-3 px-4 rounded-md border hover:bg-lime-400 transition-colors duration-700">
            View Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
