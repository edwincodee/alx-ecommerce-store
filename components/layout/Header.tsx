// Header content
import { toggleCart } from "@/store/cartSlice";
import { RootState } from "@/store/store";
import Link from "next/link";
import { MdOutlinePerson, MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../common/Filter";

const Header: React.FC = () => {
  // product category list
  const categories: string[] = [
    "All",
    "Men's clothing",
    "Women's clothing",
    "Jewelery",
    "Electronics",
  ];

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const links: string[] = ["Home", "Shop"];
  return (
    <div className="py-5 text-sm">
      <div className="flex md:flex-row flex-col justify-around items-center">
        <h2 className="font-semibold text-blue-700 text-2xl italic">
          <Link href={"/"}>EddyStore</Link>
        </h2>
        {/* filter component (select and input) */}
        <Filter categories={categories} />

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
            <MdOutlineShoppingCart size={20} />
            <div className="absolute -top-3 -right-2 bg-red-400 rounded-full px-1.5 py-0.5 text-white text-xs">
              {cart.cartProucts
                .reduce((acc, item) => item.quantity, 0)
                .toFixed()}
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
