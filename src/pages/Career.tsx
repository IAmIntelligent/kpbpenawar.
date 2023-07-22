import { Hero } from "../paths";
import { SiKasasmart } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { BiEqualizer } from "react-icons/bi";

const Career = () => {
  const btnStyle = "text-[20px] flex flex-row-reverse items-center gap-2 ";
  const iconStyle = "text-[#FEA116] text-[20px]";
  const btnText = "text-[15px] md:text-[20px] hover:text-white font-semibold";
  return (
    <div>
      <Hero animationImage={"none"} backgroundImage={""} title={""} button={""} height="h-[40vh]" />

      <div className="overflow-x-auto  font-mono py-10 ">
        <h4 className="text-[#FEA116] text-[25px] md:text-4xl font-bold text-center py-3">
          Be a part of us
        </h4>
        <div className="flex justify-center gap-4 items-center">
          <button className={btnStyle}>
            <span className={btnText}>Smart </span>
            <span>
              <SiKasasmart className={iconStyle} />
            </span>
          </button>
          <button className={btnStyle}>
            <span className={btnText}>Skilled </span>
            <span>
              <GiSkills className={iconStyle} />
            </span>
          </button>
          <button className={btnStyle}>
            <span className={btnText}>Qualified </span>
            <span>
              <BiEqualizer className={iconStyle} />
            </span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center gap-5 px-3 py-3 md:px-10 md:py-10">
          <div className=" w-full md:w-[50%]">
            {[
              
              {title: " Chicken Poultry Farming",
                descr: "Projects Head",
                image:
                  "https://cdn.britannica.com/03/503-050-AEC26FB3/hens-egg-production-White-Leghorn-layer-house.jpg",
              },
              {title: "Cattle Cows & Goat Farming",
                descr: "Projects Head",
                image:
                  "https://gogetfunding.com/wp-content/uploads/2019/04/6084948/img/ap8-Le-Toan-THmilk-1.jpg",
              },
              {title: "Agriculture Vegetables & Fruits Farming",
                descr: "Operations Head",
                image:
                  "https://www.agriculture-strategies.eu/wp-content/uploads/2018/10/abundance-agriculture-bananas-264537.jpg",
              },
             
            ].map((item,index) => (
              <div key={index} className="flex  items-center gap-5">
                <img
                  src={item.image}
                  alt="cleainig"
                  className="w-[150px] h-[150px] object-contain"
                />
                <div>
                  <h3 className="text-[20px] font-bold">{item.title}</h3>
                  <hr />
                  <p className="font-sans italic">
                    {item.descr}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-full md:w-[50%]">
            {[
               {title: "Fish Ponds",
                descr: " Projects Head ",
                image:
                  "https://www.agrifarming.in/wp-content/uploads/2015/02/291.jpg",
              },
              {title: "Ice cream Parlour ",
                descr: "Projects Head",
                image:
                  "https://blog.petpooja.com/wp-content/uploads/2022/05/our-ladies.jpg",
              },
              {title: "Projects General Workers",
                descr: " Projects Head",
                image:
                  "https://cc.careersportal.ie/images/subsectors/11.jpg",
              },
            ].map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt="cleainig"
                    className="w-[150px] h-[150px] object-contain"
                  />
                  <div>
                    <h3 className="text-[20px] font-bold">{item.title}</h3>
                    <hr />
                    <p className="font-sans italic">
                    {item.descr}.{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* testiminals */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 px-10 py-10">
          {/* Testimonial Card 1 */}
          {[1, 2, 3].map((item) => (
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-white mb-4">
                <h3 className="text-xl font-semibold">{item}John Doe</h3>
                <p className="text-sm opacity-75">CEO, Company XYZ</p>
              </div>
              <p className="text-gray-300">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                vel justo at felis luctus commodo sit amet sit amet turpis. In
                nec lorem eget nisi iaculis elementum."
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
