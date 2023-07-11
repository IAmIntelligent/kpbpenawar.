import { Hero, ImageGalleries } from "../paths";
import { hero_images } from "../assets/utlity";

const Gallery = () => (
  <div>
    {" "}
    <Hero animationImage="none" backgroundImage={hero_images?.gallery_hero} />
    <ImageGalleries fullName={""} position={""} image={""} />
    
  </div>
);

export default Gallery;
