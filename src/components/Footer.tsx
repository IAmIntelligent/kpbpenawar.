import { Link, NavLink } from "react-router-dom";
import { headersLinks } from "../assets/utlity";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white static top-[100px] right-0 left-0 ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4">
            <h1 className="about-cursive text-[#FEA116] text-xl">Our Story</h1>
            <ul className="">
              {headersLinks?.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.link}
                    aria-readonly
                    className={`
                    
                     `}
                    aria-current="page"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4">
            <h1 className="about-cursive text-[#FEA116] text-xl">Address</h1>
            <p>
              Lot 48, Jalan Jomis, Teluk Ramunia, Sungai Rengit, 81620
              Pengerang, Johor, MALAYSIA
            </p>
            <p>+6011 1060 6649</p>
            <p>info@kpbpenawar.com</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4">
            <h1 className="about-cursive text-[#FEA116] text-xl">Services</h1>
            <ul className="list-none">
              <li>Catering Services</li>
              <li>Laundry Service</li>
              <li>Event Management</li>
              <li>IT Support</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4">
            <h1 className="about-cursive text-[#FEA116] text-xl">Services</h1>
            <ul className="list-none">
              <li>Catering Services</li>
              <li>Laundry Service</li>
              <li>Event Management</li>
              <li>IT Support</li>
            </ul>
          </div>
        </div>
        <div className="col-span-6 text-center md:text-left mb-3 md:mb-0">
          ©{" "}
          <a className="border-b" href="#">
            Ekr.asia
          </a>
          , All Right Reserved. Designed By{" "}
          <a className="border-b" href="https://htmlcodex.com">
            Empire tech
          </a>
          <br />
          <b />
          Distributed By{" "}
          <Link to="" className="border-b" target="_blank">
            Ekr.asia @2023
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
