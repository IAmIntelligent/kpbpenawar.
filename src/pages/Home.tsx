import { About, Contact, Hero } from "../paths";

export interface cardTextProps {
  category: string;
  description: string;
  headerPosition: string;
}

const Home: React.FC<cardTextProps> = () => {
  return (
    <div className="relative">
      <Hero
        animationImage="/img/kpbpenwar_banner_rotation.png"
        backgroundImage="/img/kpbpenwar_banner.jpg"
      />
{/* 
      <div className="flex flex-wrap gap-5 mt-10">
        {CardText?.map((card, index) => (
          <TextCard
            key={index}
            category={card.category}
            description={card.description}
            headerPosition={""}
          />
        ))}
      </div> */}

      <About />
      <Contact />
    </div>
  );
};

export default Home;
