import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<header className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link href="/">
            <span className="font-bold text-xl tracking-tight">LimaSmart</span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
     <div className="text-xl lg:flex-grow text-right">
            <Link href="/">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white px-10 mr-4">
                Home
              </span>
            </Link>
            <Link href="/listProduct">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white px-10 mr-4">
                List Product
              </span>
            </Link>
            <Link href="/realProfile">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white px-10 mr-4">
                Profile
              </span>
            </Link>
            <Link href="/marketplace">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white px-10 mr-4">
                Market
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
