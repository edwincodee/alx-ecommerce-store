import { Products } from "@/interfaces";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { addToCart } from "@/store/cartSlice";

interface PropsProduct {
  product: Products;
}
const Card: React.FC<PropsProduct> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div
      key={product.id}
      className="py-5 shadow bg-gray-50 rounded-lg flex flex-col justify-center items-center"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative w-2/3 ">
          <Image
            src={`${product.image}`}
            alt={`${product.title} image`}
            width={1500}
            height={200}
            className="object-contain"
          />
        </div>
      </Link>
      <div className="text-lg font-semibold mt-5 px-2">
        <h5>{product.title.slice(0, 25)} ...</h5>
        <div className="flex justify-between mt-3">
          <p className="text-blue-500">${product.price}</p>
          <button
            className="text-sm bg-blue-400 px-2 py-1 rounded-full text-white cursor-pointer"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
