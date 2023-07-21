import { Hero, TextCard } from "../paths";
import { hero_images, serviceTextCard } from "../assets/utlity";

const Service = () => {
  return (
    <div>
      <Hero
        backgroundImage={hero_images?.service_hero}
        animationImage="none"
        title={""}
        button={""}
        height="h-[40vh]"
      />
      <div className="flex flex-wrap gap-5 justify-center py-20">
        {serviceTextCard?.map(({ title, description , icon}, index) => (
          <div>
            {/* <GrServices className="text-3xl" /> */}
            <TextCard
              key={index}
              category={title}
              description={description}
              headerPosition={""}
              icon = {icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
