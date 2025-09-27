import { GetServerSideProps } from "next";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setProducts } from "@/store/productSlice";
import { ProductState } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function Home({ products }: ProductState) {
  const dispatch = useDispatch<AppDispatch>();
  const storedProducts = useSelector(
    (state: RootState) => state.products.products
  );

  useEffect(() => {
    if (storedProducts.length > 0) {
      dispatch(setProducts(products));
      console.log(products);
    }
  }, [dispatch, products, storedProducts.length]);

  return (
    <div className="bg-gray-100">
      <h3 className="font-bold md:text-2xl text-lg my-5">
        Explore All Products
      </h3>

      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product) => (
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
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");

  const products = await res.data;

  return {
    props: {
      products,
    },
  };
};
