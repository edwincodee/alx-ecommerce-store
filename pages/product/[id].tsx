import { Products } from "@/interfaces";
import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { MdOutlineAdd, MdOutlineHorizontalRule } from "react-icons/md";
import { useState } from "react";

interface ProductPageProps {
  product: Products;
}

const Product: React.FC<ProductPageProps> = ({ product }) => {
  const [toggleInfo, setToggleInfo] = useState<boolean | (() => boolean)>(true);
  return (
    <div className=" p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
        <div className="relative w-full h-80  bg-gray-200 rounded-lg">
          <Image
            src={product?.image}
            alt={product?.title}
            fill
            className="object-contain rounded py-5"
          />
        </div>

        <div>
          <h1 className="text-3xl font-semibold mb-2">{product?.title}</h1>
          <div className="flex items-center gap-3 my-5">
            <Rating
              value={product.rating.rate}
              name="read-only"
              readOnly
              precision={0.1}
            />
            <p className="text-sm text-blue-600">
              {product.rating.count} customers reviewed
            </p>
          </div>
          <p className="text-xl font-semibold text-gray-600 mb-9">
            Price: ${product?.price}
          </p>

          <div className=" border-t border-gray-200 flex items-center justify-around py-9">
            <div className="flex items-center gap-2 px-4 py-2 font-semibold rounded-full border border-gray-200">
              <button className="font-bold border-r pr-2 border-gray-300">
                <MdOutlineHorizontalRule />
              </button>
              <span>1</span>{" "}
              <button className="font-bold border-l pl-2 border-gray-300">
                <MdOutlineAdd />
              </button>
            </div>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-blue-700 cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="font-semibold text-xl flex gap-10 bg-gray-200 p-5">
          <h3
            className={`cursor-pointer ${
              toggleInfo && "text-blue-600 underline"
            }`}
            onClick={() => setToggleInfo(true)}
          >
            Description
          </h3>
          <h3
            className={`cursor-pointer ${
              !toggleInfo && "text-blue-600 underline"
            }`}
            onClick={() => setToggleInfo(false)}
          >
            Additional Information
          </h3>
        </div>
        {toggleInfo ? (
          <>
            <h3 className="my-10 font-semibold text-xl">Specification</h3>
            <p className="text-gray-500 mb-4 text-lg">{product?.description}</p>
          </>
        ) : (
          <p className="text-gray-900 mt-10 text-lg">
            No additional Information!
          </p>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const product = (await res.data) as Products;

  return {
    props: {
      product,
    },
  };
};

export default Product;
