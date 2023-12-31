import { FC, useState, useEffect, MouseEvent } from "react";
import { headersLinks } from "../assets/utlity";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";

export interface headerProps {
  headerPosition: string;
  toggleMenu: string;
  activeIndex: number;
}

const Header: FC<headerProps> = ({ headerPosition }) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const { pathname } = useLocation();

  const handleButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveIndex(0);
    setToggleMenu(!toggleMenu);
  };
  console.log(window.pageXOffset)
  // screen not display same position but  top of the page after clicked any links in header
  useEffect(() => {
    window.scrollTo(0, 0);
    setToggleMenu(true);
  }, [pathname]);

  return (
    <header
      className={
        headerPosition + " left-0 right-0 z-20 bg-[#0F172B] "
      }
    >
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <img
              src="/img/logo.jpg"
              className="mr-3 h-[60px] object-cover rounded-md"
              alt="logo"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={(e: MouseEvent<HTMLButtonElement>) => handleButton(e)}
            >
              <span className="sr-onzly">Open main menu</span>
              <AiOutlineMenu />
            </button>
          </div>
          <div
            className={`justify-between h-0 lg:h-auto items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2`}
          >
            <ul className={` ${toggleMenu ? "scale-y-0 " : "absolute scale-y-100 "
              } lg:scale-y-100  w-full transition-transform transform origin-top lg:w-auto lg:flex flex-col mt-4 bg-gray-700 lg:bg-transparent font-medium lg:flex-row lg:space-x-8 lg:mt-0 rounded-md `}>
              {headersLinks?.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.link}
                    aria-readonly
                    className={`block py-2 pr-4 pl-3  border-b border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-[#fea116] lg:dark:hover:bg-transparent dark:border-gray-700   rounded-md 
                    ${activeIndex === index
                        ? "dark:text-[#fea116] focus:dark:text-[#fea116]"
                        : ""
                      }
                     `}
                    aria-current="page"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link to={`/What_We_Do`}> <button className="btn hidden lg:block ml-3 bg-[#FEA116] text-black hover:text-white">Service</button></Link>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;
