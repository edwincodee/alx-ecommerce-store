import Link from "next/link";
import {
  MdArrowDropUp,
  MdMenu,
  MdOutlinePerson,
  MdOutlineSearch,
  MdOutlineShoppingCart,
} from "react-icons/md";

const Header: React.FC = () => {
  const links: string[] = ["Home", "Shop"];
  return (
    <div className="py-5 text-sm">
      <div className="flex md:flex-row flex-col justify-around items-center">
        <h2 className="font-semibold text-blue-700 text-2xl italic">
          <Link href={"/"}>EddyStore</Link>
        </h2>

        <div className="my-5 md:my-0">
          <div className="flex gap-8">
            {/* catergory bar */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
              <MdMenu size={20} className="" />
              <span className="text-gray-500">Laptops and all</span>
              <button>
                <MdArrowDropUp />
              </button>
            </div>

            {/* search bar */}
            <div className="flex items-center">
              <input
                type="text"
                className="bg-gray-100 rounded-full py-2 px-4 w-60 placeholder:text-sm outline-none"
                placeholder="What are you shopping for?"
              />
              <button className="-ml-6">
                <MdOutlineSearch size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

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
          <div className="relative ">
            {/* <button> */}
            <MdOutlineShoppingCart size={20} />
            {/* </button> */}
            <div className="absolute -top-3 -right-2 bg-red-400 rounded-full px-1.5 py-0.5 text-white text-xs">
              1
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
