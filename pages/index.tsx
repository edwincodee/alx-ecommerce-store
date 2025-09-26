import { GetServerSideProps } from "next";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const storedProducts = useSelector(
    (state: RootState) => state.products.products
  );

  return (
    <div>
      <h3 className="font-bold md:text-2xl text-lg my-5">
        Explore All Products
      </h3>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");

  return {
    props: {
      // products,
    },
  };
};
