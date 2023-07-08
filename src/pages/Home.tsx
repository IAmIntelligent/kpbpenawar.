import React from "react";
import { About, Contact,  Hero } from "../paths";
import { CardText } from "../assets/utlity";

export interface cardTextProps {
  category: string;
  description: string;
  headerPosition: string;
}

const Home: React.FC<cardTextProps> = () => {
  return (
    <div className="relative">
      <Hero
        animationImage="https://themewagon.github.io/restoran/img/hero.png"
        backgroundImage="https://themewagon.github.io/restoran/img/bg-hero.jpg"
      />
      {/* {CardText.map((card, index) => (
        <TextCard key={index} card={card} />
      ))} */}
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

      <About />
      <Contact />
    </div>
  );
};

export default Home;
