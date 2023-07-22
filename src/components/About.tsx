import Scrollbars from "react-custom-scrollbars-2";
import { aboutParagraph } from "../assets/utlity";

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 flex">
        <div className="flex flex-col md:flex-row mx-auto text-center">
          {/* image s  w-full lg:w-[50%]*/}
          <div className="w-full lg:w-[50%] flex flex-wrap gap-4 ">
            <img
              className="w-full md:w-full object-contain"
              src="/img/About_design.jpg"
              alt=""
            />
          </div>

          <div className="w-full lg:w-[50%] mt-10 md:mt-0 shadow-2xl px-5 py-3 md:px-10 md:py-10">
            <h1 className="about-cursive text-[#FEA116] text-xl text-start">
              About
            </h1>
            <h4 className="text-[#FEA116] text-3xl font-bold my-5 md:mb-10">
              Welcome to Embunan kristal Resources.
            </h4>
            <div className="h-[50vh] overflow-y-scroll scroll-bar text-start">
              <Scrollbars style={{height:700}} >
                {aboutParagraph?.map(
                  (p, index) =>
                    index < aboutParagraph.length - 1 && (
                      <p key={index} className="text-gray-600 leading-[40px] ">
                        {p}
                      </p>
                    )
                )}
              </Scrollbars>
            </div>
            {/* <button className="btn bg-[#FEA116] hover:bg-[#FEA116]/80 text-gray-900/40 hover:text-white">
              ReadMore
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
