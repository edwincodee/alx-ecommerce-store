// import { GetServerSideProps } from "next";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setProducts } from "@/store/productSlice";
import { Products, ProductState } from "@/interfaces";
import Card from "@/components/common/Card";
import { GetServerSideProps } from "next";

interface HomeProps {
  products: Products[];
}

export default function Home({ products }: ProductState) {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.products);
  const { category, search } = useSelector(
    (state: RootState) => state.filtered
  );
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  // call api
  //       const res = await axios.get("/api/products");
  //       dispatch(setProducts(res.data));
  //     } catch (err) {
  //       console.error("Failed to fetch products:", err);
  //     }
  //   };
  //   fetchProducts();
  // }, [dispatch]);

  useEffect(() => {
    if (items.products.length > 0) {
      dispatch(setProducts(products));
      // console.log(products);
    }
  }, [dispatch, products, items.products.length]);

  const matchedCategory = products.filter((product) => {
    return product.category.toLowerCase() == category.toLowerCase();
  });
  const matchedSearch = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="bg-gray-100">
      <h3 className="font-bold md:text-2xl text-lg my-5">
        Explore All Products
      </h3>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 w-[90%] m-auto">
        {search == "" && category.toLowerCase() == "all"
          ? products.map((product) => (
              // display all product
              <Card key={product.id} product={product} />
            ))
          : category.toLowerCase() !== "all" && search == ""
          ? // display if catergory citeria are met
            matchedCategory.map((product) => (
              <Card key={product.id} product={product} />
            ))
          : matchedSearch.map((product) => (
              // display if search criteria are met
              <Card key={product.id} product={product} />
            ))}
      </div>
      {/* display if not searvh product in products */}
      {matchedSearch.length === 0 && (
        <p className="text-gray-500 mt-6">No products found.</p>
      )}
    </div>
  );
}

// fetch product with axios using server side
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = (await res.json()) as Products[];
    return {
      props: {
        products,
      },
    };
  } catch (error: unknown) {
    const message: string = "An unknown error occured";
    console.log(message, error);
    // if (axios.isAxiosError(error)) {
    //   message = error.message;

    //   console.error("Axios Fetch Error:", error.message);
    // } else if (error instanceof Error) {
    //   message = error.message;
    //   console.log(message);
    // }

    return {
      props: {
        products: [],
        error: "Unable to load products right now",
      },
    };
  }
};
