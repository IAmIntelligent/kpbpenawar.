import { CardText } from "../assets/utlity";
import { Hero, ImageCard } from "../paths";
import { hero_images, services } from "../assets/utlity";

const Service = () => {
  return (
    <div>
      <Hero backgroundImage={hero_images?.service_hero} animationImage="none" />
      <div className="flex flex-wrap gap-5 mt-10">
        {CardText?.map((card, index) => (
          <div
            key={index}
            className="card rounded-none w-[300px] h-[300px] text-primary-content hover:bg-[#fea116]"
          >
            <div className="card-body">
              <h2 className="card-title">{card.category}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex  flex-wrap gap-3">
        {services?.map(({ image, text }, index) => (
          <ImageCard
            key={index}
            fullName={""}
            position={""}
            image={image}
            styles={"h-[300px] w-[300px] object-cover rounded-[1px]"}
            title={text} group={""}          />
        ))}
      </div>
    </div>
  );
};

export default Service;
