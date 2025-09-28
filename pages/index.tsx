import { GetServerSideProps } from "next";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setProducts } from "@/store/productSlice";
import { Products, ProductState } from "@/interfaces";
import Card from "@/components/common/Card";
import { setCategory, setCategoryProducts } from "@/store/filterSlice";

export default function Home({ products }: ProductState) {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.products);
  const { category, search, filteredItems } = useSelector(
    (state: RootState) => state.filtered
  );

  useEffect(() => {
    if (items.products.length > 0) {
      dispatch(setProducts(products));
      // console.log(products);
    }
  }, [dispatch, products, items.products.length]);

  // const filteredProducts = products.filter((product) => {
  //   const matchesSearch = product.title
  //     .toLowerCase()
  //     .includes(search.toLowerCase());

  //   const matchesCategory = category ? product.category === category : true;

  //   return matchesSearch && matchesCategory;
  // });
  const matchedCategory = products.filter((product) => {
    return product.category.toLowerCase() == category.toLowerCase();
  });
  const matchedSearch = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });
  // const filtercategory = products.map((product) => {
  //   return (
  //     product.category == category && dispatch(setCategoryProducts(product))
  //   );
  // });

  // if (matchedCategory) {
  //   return (
  //     <div className="grid md:grid-cols-3 gap-10 w-[90%] m-auto">
  //       {matchedCategory.map((product) => (
  //         <Card key={product.id} product={product} />
  //       ))}
  //     </div>
  //   );
  // }

  // if (matchedSearch) {
  //   return (
  //     <div className="grid md:grid-cols-3 gap-10 w-[90%] m-auto">
  //       {matchedSearch.map((product) => (
  //         <Card key={product.id} product={product} />
  //       ))}
  //     </div>
  //   );
  // }
  return (
    <div className="bg-gray-100">
      <h3 className="font-bold md:text-2xl text-lg my-5">
        Explore All Products
      </h3>

      <div className="grid md:grid-cols-3 gap-10 w-[90%] m-auto">
        {search == "" && category.toLowerCase() == "all"
          ? products.map((product) => (
              <Card key={product.id} product={product} />
            ))
          : category.toLowerCase() !== "all" && search == ""
          ? matchedCategory.map((product) => (
              <Card key={product.id} product={product} />
            ))
          : matchedSearch.map((product) => (
              <Card key={product.id} product={product} />
            ))}
      </div>

      {matchedSearch.length === 0 && (
        <p className="text-gray-500 mt-6">No products found.</p>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    const products = (await res.data) as Products[];
    return {
      props: {
        products,
      },
    };
  } catch (error: unknown) {
    let message: string = "An unknown error occured";
    if (axios.isAxiosError(error)) {
      message = error.message;

      console.error("Axios Fetch Error:", error.message);
    } else if (error instanceof Error) {
      message = error.message;
      console.log(message);
    }

    return {
      props: {
        products: [],
        error: "Unable to load products right now",
      },
    };

    // const products = allProducts.map((product: Products) => ({
    //   ...product,
    //   quantity: 1,
    //   itemPrice: product.price,
    // }));
  }
};
