import { FC, useState } from "react";
import { Hero, ImageCard } from "../paths";
import { hero_images, filterdGallery } from "../assets/utlity";

interface galleryProps {
  category: string;
}
interface filteredArrayProps {
  image: string;
   category: string; 
}

const Gallery: FC<galleryProps> = () => {

  // No dublication
  const filterdCalergory = new Set(
    filterdGallery?.map(({ category }) => category)
  );
  const catogories = ["All", ...filterdCalergory];

const [filteredItems,setFiltedItems] = useState<filteredArrayProps[]>(filterdGallery)
const [activeCategory,setActiveCategory] = useState("")
  const filterFunction = (clickedCatogry:string) => {
    const filterdArray = filterdGallery?.filter(
      ({ category }) => (category === clickedCatogry) || (clickedCatogry === "All" && category)
    );
    setFiltedItems(filterdArray)
    setActiveCategory(clickedCatogry)
  };

  return (
    <div>
      {" "}
      <Hero
        animationImage="none"
        backgroundImage={hero_images?.gallery_hero}
        title={""}
        button={""}
        height={""}
      />
      <div className="flex gap-3 flex-wrap justify-center mt-3 md:mt-10  p-3 md:py-10 md:px-10 ">
        <p className="flex gap-2 flex-wrap justify-center shadow-md py-3 md:py-5 md:mb-5">
          {catogories?.map((category, index) => (
            <button
              className={`px-1 md:px-4 py-1 md:py-2 text-[15px] md:text-[18px] capitalize rounded-md text-black bg-[#8da14e] hover:bg-[#8da14e]/50  ${category===activeCategory && `bg-[#657815] border-b-4 border-[#2e281f]` }`}
              key={index}
              onClick={() => filterFunction(category)}
            >
              {category}
            </button>
          ))}
        </p>
        {/*  */}
       
       <div className="flex flex-wrap  justify-center gap-3 transition-transform ease-out duration-300">
       {filteredItems?.map(({ image }) => (
          <ImageCard
            fullName={""}
            position={""}
            image={image}
            group={"transition-transform transform hover:scale-95 hover:z-10 rouded-none"}
            styles={
              "w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover rounded-md transition-opacity duration-300 hover:opacity-80"
            }
            title={""}
            icon={[]}
          />
        ))}
       </div>
      </div>
    </div>
  );
};

export default Gallery;
