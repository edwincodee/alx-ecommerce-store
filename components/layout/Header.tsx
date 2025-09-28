import { toggleCart } from "@/store/cartSlice";
import { RootState } from "@/store/store";
import Link from "next/link";
import {
  MdArrowDropUp,
  MdMenu,
  MdOutlinePerson,
  MdOutlineSearch,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../common/Filter";
import { useEffect, useState } from "react";
import { setProducts } from "@/store/productSlice";
import axios from "axios";
import { GetServerSideProps } from "next";
import { Products } from "@/interfaces";

interface HeaderProps {
  products: Products[];
}
const Header: React.FC = () => {
  const [searchProduct, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const categories: string[] = [
    "All",
    "Men's clothing",
    "Women's clothing",
    "Jewelery",
    "Electronics",
  ];

  const dispatch = useDispatch();
  const itemsTotal = useSelector((state: RootState) => state).cart
    .totalCartItem;

  // useEffect(() => {
  //   if (items.products.products.length > 0) {
  //     dispatch(setProducts(products));
  //     // console.log(products);
  //   }
  // }, [dispatch, products, items.products.products.length]);

  const links: string[] = ["Home", "Shop"];
  return (
    <div className="py-5 text-sm">
      <div className="flex md:flex-row flex-col justify-around items-center">
        <h2 className="font-semibold text-blue-700 text-2xl italic">
          <Link href={"/"}>EddyStore</Link>
        </h2>
        <Filter
          categories={categories}
          // category={category}
          // setCategory={setCategory}
          // searchProduct={searchProduct}
          // setSearch={setSearch}
        />

        {/* cart and sign in option */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-gray-300 p-1">
              <MdOutlinePerson size={20} />
            </div>

            <div>
              <span className="text-gray-500">Account</span>
              <button className="block">Sign in / Register</button>
            </div>
          </div>

          {/* cart */}
          <div
            className="relative cursor-pointer "
            onClick={() => dispatch(toggleCart())}
          >
            {/* <button> */}
            <MdOutlineShoppingCart size={20} />
            {/* </button> */}
            <div className="absolute -top-3 -right-2 bg-red-400 rounded-full px-1.5 py-0.5 text-white text-xs">
              {itemsTotal}
            </div>
          </div>
        </div>
      </div>

      {/* sub header */}
      <div className="border border-gray-200 my-5 py-4 flex justify-around">
        <ul className="flex gap-x-3">
          {links.map((link) => (
            <li key={link}>
              <Link href={"/"}>{link}</Link>
            </li>
          ))}
        </ul>
        <p>
          Best Selling{" "}
          <span className="text-white bg-red-400 rounded-full px-2 text-xs uppercase  ">
            Sale
          </span>
        </p>
      </div>
    </div>
  );
};
export default Header;

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const res = await axios.get("https://fakestoreapi.com/products");
//     const products = (await res.data) as Products[];
//     return {
//       props: {
//         products,
//       },
//     };
//   } catch (error: unknown) {
//     let message: string = "An unknown error occured";
//     if (axios.isAxiosError(error)) {
//       message = error.message;

//       console.error("Axios Fetch Error:", error.message);
//     } else if (error instanceof Error) {
//       message = error.message;
//       console.log(message);
//     }

//     return {
//       props: {
//         products: [],
//         error: "Unable to load products right now",
//       },
//     };
//   }
// };
