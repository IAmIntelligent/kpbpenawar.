import { Hero, TextCard } from "../paths";
import { hero_images, serviceTextCard } from "../assets/utlity";
import { GrServices } from "react-icons/gr";

const Service = () => {
  return (
    <div >
      <Hero backgroundImage={hero_images?.service_hero} animationImage="none" />
      <div className="flex flex-wrap gap-5 justify-center py-20">
        {serviceTextCard?.map(({ title, description }, index) => (
          <div>
            <GrServices className="text-3xl"/>
            <TextCard
              key={index}
              category={title}
              description={description}
              headerPosition={""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
