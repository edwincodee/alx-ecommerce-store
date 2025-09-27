import { GetServerSideProps } from "next";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setProducts } from "@/store/productSlice";
import { Products, ProductState } from "@/interfaces";
import Card from "@/components/common/Card";

export default function Home({ products }: ProductState) {
  const dispatch = useDispatch<AppDispatch>();
  const storedProducts = useSelector(
    (state: RootState) => state.products.products
  );

  useEffect(() => {
    if (storedProducts.length > 0) {
      dispatch(setProducts(products));
      // console.log(products);
    }
  }, [dispatch, products, storedProducts.length]);

  return (
    <div className="bg-gray-100">
      <h3 className="font-bold md:text-2xl text-lg my-5">
        Explore All Products
      </h3>

      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");

  const products = (await res.data) as Products[];

  // const products = allProducts.map((product: Products) => ({
  //   ...product,
  //   quantity: 1,
  //   itemPrice: product.price,
  // }));

  return {
    props: {
      products,
    },
  };
};
