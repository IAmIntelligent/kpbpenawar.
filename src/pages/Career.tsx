import { Hero } from "../paths";
import { SiKasasmart } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { BiEqualizer } from "react-icons/bi";

const Career = () => {

  const btnStyle = "text-[20px] flex flex-row-reverse items-center gap-2 ";
const iconStyle = "text-[#FEA116] text-[20px]"
const btnText = "text-[20px] font-semibold"
  return (
    <div>
      <Hero animationImage={"none"} backgroundImage={""} />

      <div className="overflow-x-auto  font-mono py-10 ">
        <h4 className="text-[#FEA116] text-4xl font-bold text-center py-3">
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
        <div className="flex flex-col md:flex-row justify-start items-center gap-5 px-10 py-10">

         <div className="">
         {[1, 2 ].map((item) => (
            <div className="flex  items-center gap-5">
              <img
                src="https://img2.exportersindia.com/product_images/bc-full/2018/9/5908404/office-housekeeping-services-1538023442-4341242.jpg"
                alt="cleainig"
                className="w-[150px] h-[150px] object-contain"
              />
              <div>
                <h3 className="text-[20px] font-bold">{item}Cleainig Staff</h3>
                <hr />
                <p className="font-sans italic" >Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
          ))}
         </div>
         <div>
         {[1, 2, ].map((item) => (
            <div className="flex items-center gap-5">
              <img
                src="https://img2.exportersindia.com/product_images/bc-full/2018/9/5908404/office-housekeeping-services-1538023442-4341242.jpg"
                alt="cleainig"
                className="w-[150px] h-[150px] object-contain"
              />
              <div>
                <h3 className="text-[20px] font-bold">{item}Cleainig Staff</h3>
                <hr />
                <p className="font-sans italic" >Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
          ))}
         </div>

        </div>


{/* testiminals */}
<div className="grid grid-cols-1 gap-8 md:grid-cols-3 px-10 py-10">
  {/* Testimonial Card 1 */}
  {[1,2,3].map((item)=><div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <div className="text-white mb-4">
      <h3 className="text-xl font-semibold">{item}John Doe</h3>
      <p className="text-sm opacity-75">CEO, Company XYZ</p>
    </div>
    <p className="text-gray-300">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo at felis luctus commodo sit amet sit amet turpis. In nec lorem eget nisi iaculis elementum."
    </p>
  </div>)}

 
</div>

      </div>
    </div>
  );
};

export default Career;
