import { About, Contact, Hero, TextCard } from "../paths";
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

      <div className="flex flex-wrap gap-5 mt-10">
        {CardText?.map((card, index) => (
          <TextCard
            key={index}
            category={card.category}
            description={card.description}
            headerPosition={""}
          />
        ))}
      </div>

      <About />
      <Contact />
    </div>
  );
};

export default Home;
