// footer section
import Link from "next/link";
import {
  MdOutlineCopyright,
  MdOutlineEmail,
  MdOutlineFacebook,
  MdOutlineMyLocation,
  MdOutlinePhone,
} from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-400 mt-12">
      <div className="flex sm:justify-around py-10 flex-col sm:flex-row justify-center pl-10 sm:pl-0">
        <div>
          <h3 className="font-bold text-lg">Help & Support</h3>

          <ul className="flex flex-col gap-5 tracking-wide text-sm pt-5">
            <li>
              <MdOutlineMyLocation className="text-blue-500" size={15} />
              <p>674 Shinning Star street, Maitama, Abuja, Nigeria</p>
            </li>
            <li>
              <MdOutlinePhone className="text-blue-500" size={15} />
              <p>+2340000000000, +234111111111</p>
            </li>
            <li>
              <MdOutlineEmail className="text-blue-500" size={15} />
              supportt@eddystore.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg py-">Account</h3>

          <ul className="flex flex-col gap-5 pt-5">
            <li>
              <Link href={"/"}>Login / Register</Link>
            </li>
            <li>
              <Link href={"/"}>Cart</Link>
            </li>
            <li>
              <Link href={"/"}>Shop</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">Quick Link</h3>

          <ul className="flex flex-col gap-5  pt-5">
            <li>
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/"}>Refund Policy</Link>
            </li>
            <li>
              <Link href={"/"}>Term of Use</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-around items-center bg-gray-950 py-1 text-gray-200">
        <div>
          <MdOutlineCopyright className="inline" />
          <span className="px-1">2025. All rights reserved by EddyStore</span>
        </div>

        <div className="flex items-center text-blue-500 gap-x-1">
          <p className="italic ">Follow us</p>
          <Link href="https://facebook.com">
            <MdOutlineFacebook />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
