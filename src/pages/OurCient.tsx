import { Hero, ImageCard } from "../paths";
import {  hero_images, jointVentures } from "../assets/utlity";

const OurClient = () => {
  return (
    <div>
      <Hero
        animationImage="none"
        backgroundImage={hero_images.joint_ventures_hero} title={""} button={""} height="h-[40vh]"     />
      <div className=" flex flex-wrap gap-4 justify-center my-10 ">
        {jointVentures?.map(({  image, title }, index) => (
          <ImageCard 
            key={index}
            fullName={""}
            position={""}
            image={image}
            title={title}
            styles=" object-fill h-[300px] w-[300px] object-cover" group={"px-4 w-full lg:w-[450px] shadow-3xl"} icon={[]} download={false}          />
        ))}
      </div>
    </div>
  );
};

export default OurClient;
