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
        title="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
        diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
        lorem sit clita duo justo magna dolore erat amet"
        button="Read more"
        height = "h-[110vhv] md:h-[90vh]"
      />
      <div className="md:px-20">
        <About />
      </div>

      <div className=" px-5 lg:px-20">
        <h1 className="about-cursive text-[#FEA116] text-center text-xl lg:text-3xl mb-5">
          Team members
        </h1>
        <div className="flex flex-wrap gap-4 justify-center ">
          {directorsGallery?.map((director, index) => {
            if(index === 2)
            return (
              <div className="group-hover " key={index}>
                <div className="">
                  <ImageCard
                    key={index}
                    fullName={"Full Name"}
                    position={"Designation"}
                    image={director.image}
                    styles={"w-[320px] h-[320px] md:h-[340px] md:w-[340px] object-cover rounded-full  transition-all delay-150 duration-300  group-hover:scale-125"}
                    group={"group"}
                    title={""} icon={[]} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
