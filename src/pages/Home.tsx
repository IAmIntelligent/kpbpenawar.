import { directorsGallery } from "../assets/utlity";
import { About, Hero, ImageCard } from "../paths";

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
      <About />

      <div className="px-10">
        <h1 className="about-cursive text-[#FEA116] text-center text-xl mb-5">
          Team members
        </h1>
        <div className="flex flex-wrap gap-4 text-center ">
          {directorsGallery?.map((director, index) => (
            <div className="group-hover " key={index}>
              <div className="">
                <ImageCard
                  key={index}
                  fullName={"Full Name"}
                  position={"Designation"}
                  image={director}
                  styles={
                    "w-[320px] h-[320px] md:h-[380px] md:w-[380px] object-cover rounded-full  transition-all delay-150 duration-300  group-hover:scale-125"
                  }
                  group={"group"}
                  title={""}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
