import { FC } from "react";
import { About, Hero, ImageGalleries, Testimonials } from "../paths";


interface aboutProps {
  animationImage: string;
  backgroundImage: string;
}

const AboutPage: FC<aboutProps> = () => {
  return (
    <div>
      <Hero
        backgroundImage="https://themewagon.github.io/restoran/img/bg-hero.jpg"
        animationImage="none"
      />
      <About />
      <ImageGalleries/>
      <Testimonials/>
    </div>
  );
};

export default AboutPage;
