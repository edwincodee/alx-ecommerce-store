import { Products } from "@/interfaces";
import Link from "next/link";
import Image from "next/image";

interface PropsProduct {
  product: Products;
}
const Card: React.FC<PropsProduct> = ({ product }) => {
  return (
    <div
      key={product.id}
      className="py-5 shadow bg-gray-50 rounded-lg flex flex-col justify-center items-center"
    >
      <Link href={`product/${product.id}`}>
        <Image
          src={`${product.image}`}
          alt={`${product.title} image`}
          width={120}
          height={100}
        />
      </Link>
      <div className="text-lg font-semibold mt-5">
        <h5>{product.title.slice(0, 25)} ...</h5>
        <div className="flex justify-between mt-3">
          <p className="text-blue-500">${product.price}</p>
          <button className="text-sm bg-blue-400 px-2 py-1 rounded-full text-white cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
