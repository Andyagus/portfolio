import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggle = () => {
    setNavActive(!navActive);
  };

  return (
    <div className=" fixed top-0 left-0 w-full h-20 z-10 w-full flex items-center justify-between bg-white p-4 shadow-md ">
      <div className="lg:ml-36 ml-4">
        <span className="block text-xl font-bold text-gray-900">Andy Agus</span>
        <span className="block text-sm font-medium text-gray-500">
          Augmented Reality Designer
        </span>
      </div>

      <div className="hidden lg:flex mr-32">
        <a href="/" className="text-black px-4 ">
          Projects
        </a>
        <a href="/about" className="text-black px-4 ">
          About
        </a>
      </div>

      <div
        onClick={toggle}
        className={
          "lg:hidden text-gray-800 text-3xl mr-12 active:duration-100 z-20 cursor-pointer"
        }
      >
        {navActive ? <FaTimes /> : <FaBars />}
      </div>

      <div
        className={
          navActive
            ? "absolute top-0 left-0 w-full h-screen bg-gray-200 duration-500 justify-center items-center "
            : "hidden"
        }
      >
        <div className="flex flex-col items-start p-10 mt-20">
          <a href="/" className="py-6  text-3xl">
            Projects
          </a>
          <a href="/about" className="py-6  text-3xl">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

// @ts-ignore
export default NavBar;
