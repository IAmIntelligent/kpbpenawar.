import { Link, NavLink } from "react-router-dom";
import { headersLinks } from "../assets/utlity";

const Footer = () => {
  return (
    <footer className="px-5 md:px-20 bg-gray-900 text-white static top-[100px] right-0 left-0 ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-[180px] mb-4">
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
            <address>
              Unit 6, Level 2 Fastspace Jalan Kampung Lalang, Educity Hub,
              Educity@lskandar 79250 Iskandar Puteri Johor Darul Takzim
              <Link to="tel:+6 011 5506 6649"> +6 011 5506 6649</Link> <br />
              <Link to="#"> www.ekr.asia</Link> <br />
              <Link to="#">dramir@ekr.asia</Link>
              <br />
              <Link to="#">info@ekr.asia</Link>
              <br />
            </address>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4">
            <h1 className="about-cursive text-[#FEA116] text-xl">Services</h1>
            <ul className="list-none">
              <Link to={"/What_We_Do"}>
                <li>Operation and Maintenance</li>
              </Link>
              <Link to={"/What_We_Do"}>
                {" "}
                <li>Labour Management</li>
              </Link>
              <Link to={"/What_We_Do"}>
                <li>Labour Accommodation</li>
              </Link>
              <Link to={"/What_We_Do"}>
                {" "}
                <li>Camp Management</li>
              </Link>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4">
            <h1 className="about-cursive text-[#FEA116] text-xl">Services</h1>
            <ul className="list-none">
              <Link to={"/What_We_Do"}>
                <li>Food and Beverages Catering</li>
              </Link>
              <Link to={"/What_We_Do"}>
                <li>Laundry Services</li>
              </Link>
              <Link to={"/What_We_Do"}>
                <li>House Keeping</li>
              </Link>
              <Link to={"/What_We_Do"}>
                <li>Transportation</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-span-6 text-center md:text-left mb-3 md:mb-0">
          ©{" "}
          <a className="border-b" href="#">
            Ekr.asia
          </a>
          , All Rights Reserved. Designed By{" "}
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
