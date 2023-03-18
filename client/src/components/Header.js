import logo from "../Images/cat_logo3D.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="px-2 sm:px-4 py-2.5 bg-[#144272] sticky w-full z-20 top-0 left-0 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="h-24 mr-3 sm:h-14"
              alt="KittyCatClub Logo"
            />
            <h1
              className="text-3xl font-bold text-yellow-600"
              style={{ fontFamily: "Rampart One" }}
            >
              Kitty Cat Club
            </h1>
          </Link>
          <div className="flex md:order-2">
            <Link to="/createEditCat">
              <button
                type="button"
                className="text-white text-xl bg-yellow-700  hover:bg-yellow-700 focus:ring-3 focus:outline-none focus:ring-yellow-600 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:focus:ring-yellow-600"
              >
                Add a cat
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-3 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-44 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4  text-amber-700 text-lg rounded md:hover:text-blue-500 md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/wwc"
                  className="block py-2 pl-3 pr-4 text-amber-700 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
                >
                  Worldwide Cats
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-amber-700 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 md:dark:hover:text-gray dark:text-gray-550 dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-amber-700 text-lg  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 md:dark:hover:text-gray dark:text-gray-550 dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
