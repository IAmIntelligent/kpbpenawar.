import { Hero, ImageCard } from "../paths";
import { galleryItems, hero_images, jointVentures } from "../assets/utlity";

const JointVentures = () => {
  return (
    <div>
      <Hero
        animationImage="none"
        backgroundImage={hero_images.joint_ventures_hero}
      />
      <div className="flex flex-wrap gap-4 justify-center my-10">
        {jointVentures?.map(({  image, title }, index) => (
          <ImageCard 
            key={index}
            fullName={""}
            position={""}
            image={image}
            title={title}
            styles=" object-fill h-[150px]" group={""}          />
        ))}
      </div>
    </div>
  );
};

export default JointVentures;
