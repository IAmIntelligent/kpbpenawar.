import { aboutParagraph } from "../assets/utlity";

const About = () => {
  return (
    <section className=" py-16   ">
      <div className="container mx-auto px-4 flex">
        <div className=" flex flex-col md:flex-row mx-auto text-center">
          {/* image s  w-full lg:w-[50%]*/}
          <div className=" w-full lg:w-[50%] flex flex-wrap gap-4 ">
            {/* <div className="w-inherit"> */}
              <img
                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-contain"
                src="https://themewagon.github.io/restoran/img/about-1.jpg"
                alt=""
              />
              <img
                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-contain"
                src="https://themewagon.github.io/restoran/img/about-1.jpg"
                alt=""
              />
              <img
                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-contain"
                src="https://themewagon.github.io/restoran/img/about-1.jpg"
                alt=""
              />
              <img
                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-contain"
                src="https://themewagon.github.io/restoran/img/about-1.jpg"
                alt=""
              />
            {/* </div> */}
          </div>

          <div className="w-full lg:w-[50%]">
            <h1 className="about-cursive text-[#FEA116] text-xl">About</h1>
            <h4 className="text-[#FEA116] text-3xl font-bold">
              Welcome to Embunan kristal Resources.
            </h4>
            <div className="h-[50vh] overflow-y-scroll scroll-bar ">
            {aboutParagraph?.map(
              (p, index) => index < aboutParagraph.length-1 && <p key={index} className="text-gray-600  ">{p}</p>
            )}
            </div>
            <button className="btn bg-[#FEA116] hover:bg-[#FEA116]/80 text-gray-900/40 hover:text-white">
              ReadMore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
