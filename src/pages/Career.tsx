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
      <Hero animationImage={"none"} backgroundImage={""} />

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
          <div className="">
            {[
              {
                title: "Cleaning staff ",
                image:
                  "https://img.etimg.com/thumb/width-1200,height-900,imgsize-706737,resizemode-75,msid-76771463/jobs/unlock-2-0-demand-for-office-boys-housekeeping-staff-on-the-rise.jpg",
              },
              {
                title: "Driver",
                image:
                  "https://images.indianexpress.com/2017/12/party-driver.jpg",
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {[
              {
                title: "House Booking",
                image:
                  "https://cdn.siasat.com/wp-content/uploads/2020/09/download-3.jpg",
              },
              {
                title: "Cook",
                image:
                  "https://media.npr.org/assets/img/2023/05/05/gettyimages-1359616274_wide-af5b01ff21bd41d7420f1066212bbfa11537cb36-s1100-c50.jpg",
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
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
