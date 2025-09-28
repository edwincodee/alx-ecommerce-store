import { Products } from "@/interfaces";
import {
  setCategory,
  setCategoryProducts,
  setSearch,
} from "@/store/filterSlice";
import { filter } from "@/store/productSlice";
import { AppDispatch, RootState } from "@/store/store";
import Image from "next/image";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
} from "react";
import { MdArrowDropUp, MdMenu, MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

interface FilterProps {
  // searchProduct: string;
  // setSearch: Dispatch<SetStateAction<string>>;
  // category: string;
  // setCategory: Dispatch<SetStateAction<string>>;
  categories: string[];
}
const Filter: React.FC<FilterProps> = ({
  // searchProduct,
  // setCategory,
  // category,
  // setSearch,
  categories,
}) => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="my-5 md:my-0 flex flex-col md:flex-row gap-x-6">
      <select
        value={state.filtered.category}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          {
            dispatch(setCategory(e.target.value));
            // state.products.products?.map(
            //   (product) =>
            //     product.category.toLowerCase() ==
            //       state.filtered.category.toLowerCase() &&
            //     dispatch(setCategoryProducts(product))
            // );

            // dispatch(filter());
          }
        }}
        className=" px-4 py-2 outline-none border-none bg-gray-100 w-36 p rounded-full mb-5 md:mb-0"
      >
        {categories.map((category) => (
          <option key={category} value={category} className="text-gray-500">
            {category}
          </option>
        ))}
      </select>

      {/* search bar */}
      <div className="flex items-center">
        <input
          value={state.filtered.search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setSearch(e.target.value));
            // dispatch(filter());
          }}
          type="text"
          className="bg-gray-100 rounded-full py-2 px-4 w-72 placeholder:text-sm outline-none"
          placeholder="What are you shopping for?"
        />
        <button className="-ml-6">
          <MdOutlineSearch size={20} className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//   {filteredProducts.map((product: Products) => (
//     <div key={product.id} className="border p-4 rounded shadow">
//       <div className="relative w-full h-40">
//         <Image
//           src={product.image}
//           alt={product.title}
//           fill
//           className="object-contain rounded"
//         />
//       </div>
//       <h2 className="font-bold mt-2">{product.title}</h2>
//       <p className="text-gray-600">${product.price}</p>
//     </div>
//   ))}
// </div>

//     {filteredProducts.length === 0 && (
//       <p className="text-gray-500 mt-6">No products found.</p>
//     )}
//   </div>
// );
