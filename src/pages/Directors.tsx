import { directorsGallery } from "../assets/utlity";
import { Hero, ImageCard } from "../paths";

const Directors = () => {
  return (
    <div>
      <Hero animationImage={"none"} backgroundImage={""} />
      <div className="flex flex-wrap gap-4">
        {directorsGallery?.map((director, index) => (
          <ImageCard
            key={index}
            fullName={""}
            position={""}
            image={director}
            styles={"w-[220px]  h-[220px] md:h-[300px] md:w-[300px] object-cover rounded-[1px]"}
            group = {"group"}
            title={""}
          />
        ))}
      </div>
    </div>
  );
};

export default Directors;
