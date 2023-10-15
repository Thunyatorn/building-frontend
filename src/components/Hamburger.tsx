import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import Image from "next/image";
import Dropdowns1 from "./Dropdowns1";
import Dropdowns2 from "./Dropdowns2";
import Dropdowns3 from "./Dropdowns3";
import Dropdowns4 from "./Dropdowns4";
import Dropdowns5 from "./Dropdowns5";
import Dropdowns6 from "./Dropdowns6";
import Dropdowns7 from "./Dropdowns7";

const HamburgerMenu = () => (
  <Menu
    customBurgerIcon={<HamburgerIcon />}
    width={"auto"}
    className="left-0 top-12"
  >
    <Links />
  </Menu>
);

const HamburgerIcon = () => (
  <div className="p-1/2">
    <svg
      className="h-8 w-8 text-gray-500"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
);

export const Links = () => (
  <>
    <div className="relative inset-0 flex gap-x-4">
      <Image
        className="relative p-4"
        src="/homepage-component/logo.png"
        width={30}
        height={30}
        alt=""
      />
      <Link
        href="/"
        className="relative w-auto rounded-md p-2 px-3 py-2 text-center font-semibold shadow-sm ring-1 ring-inset ring-black hover:bg-gray-900"
      >
        หน้าแรก
      </Link>
      <Dropdowns1 />
      <Dropdowns2 />
      <Dropdowns3 />
      <Dropdowns4 />
      <Link
        href="/"
        className="relative w-auto rounded-md p-2 px-3 py-2 text-center font-semibold shadow-sm ring-1 ring-inset ring-black hover:bg-gray-900"
      >
        VOTE
      </Link>
      <Dropdowns5 />
      <Dropdowns6 />
      <Dropdowns7 />
    </div>
  </>
);

export default HamburgerMenu;
