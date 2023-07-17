import { Hero, ImageCard } from "../paths";
import {  hero_images, serviceTextCard, services } from "../assets/utlity";

const Service = () => {
  return (
    <div>
      <Hero backgroundImage={hero_images?.service_hero} animationImage="none" />
      <div className="flex flex-wrap gap-5 mt-10">
        {/* 1, Operation and Maintenance, 2,Labour Management, 3,Labour Accomodation, 4,Camp Management, 5,Food and Bewerage Catering, 6, Launtry, 7,House keeping, 8,Transportation---> with images */}
        {serviceTextCard?.map((card, index) => (
          <div
            key={index}
            className="card rounded-none w-[300px] h-[300px] text-primary-content hover:bg-[#fea116]"
          >
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <img src={card.image} alt={card.image} />
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
            styles={"w-[220px] md:h-[300px] w-[220px] md:w-[300px] object-cover rounded-[1px]"}
            title={text} group={""}          />
        ))}
      </div>
    </div>
  );
};

export default Service;
