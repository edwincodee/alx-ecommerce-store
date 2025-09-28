import { setCategory, setSearch } from "@/store/filterSlice";
import { AppDispatch, RootState } from "@/store/store";
import React, { ChangeEvent } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

interface FilterProps {
  categories: string[];
}
const Filter: React.FC<FilterProps> = ({ categories }) => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="my-5 md:my-0 flex flex-col md:flex-row gap-x-6">
      <select
        value={state.filtered.category}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          {
            dispatch(setCategory(e.target.value));
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
