// single product card
import { Products } from "@/interfaces";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { addToCart } from "@/store/cartSlice";
import { useState } from "react";

interface PropsProduct {
  product: Products;
}
const Card: React.FC<PropsProduct> = ({ product }) => {
  const [itemPrice, setItemPrice] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div
      key={product.id}
      className="py-5 shadow bg-gray-50 rounded-lg col-span-1"
    >
      {/* link to product detail */}
      <div className="relative flex flex-col items-center justify-center h-34">
        <Link href={`/product/${product.id}`}>
          <Image
            src={`${product.image}`}
            alt={`${product.title} image`}
            width={70}
            height={50}
            className="object-cover"
          />
        </Link>
      </div>

      {/* product info */}
      <div className="text-lg font-semibold px-2 gap-x-10">
        <h5 className="h-20">{product.title.slice(0, 25)} ...</h5>
        <div className="flex justify-between items-center">
          <p className="text-blue-500">${product.price}</p>
          <button
            className="text-sm bg-blue-400 px-2 py-1 rounded-full text-white cursor-pointer hover:bg-blue-700"
            onClick={() =>
              dispatch(
                addToCart({
                  ...product,
                  quantity: 1,
                  itemPrice:
                    product.price === itemPrice
                      ? product.price * 2
                      : product.price,
                })
              )
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
