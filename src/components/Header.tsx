import { FC, useState } from "react";
import { headersLinks } from "../assets/utlity";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export interface headerProps {
  headerPosition: string;
}

const Header: FC<headerProps> = ({ headerPosition }) => {
  const [highLightsLink, setHighLightsLink] = useState(false);
  return (
    <header className={headerPosition + " left-0 right-0 z-10"}>
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo"
              className="mr-3 h-6 sm:h-9"
              alt="logo"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-white bg-[#fea116] hover:bg-[#fea116]/80 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-4 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Get started
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <AiOutlineMenu />
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {headersLinks?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-[#fea116] lg:dark:hover:bg-transparent dark:border-gray-700 ${
                      highLightsLink && "text-white"
                    }`}
                    aria-current="page"
                    onClick={() => setHighLightsLink(true)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
