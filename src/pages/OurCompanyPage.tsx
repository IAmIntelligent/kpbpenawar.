import { FC } from "react";
import { About, Hero, ImageCard, NewsLetter } from "../paths";
import { directorsGallery, hero_images } from "../assets/utlity";

interface aboutProps {
  animationImage: string;
  backgroundImage: string;
}

const OurCompanyPage: FC<aboutProps> = () => (
  <div className="">
    <Hero
      backgroundImage={hero_images?.about_hero}
      animationImage="none"
      height="h-[40vh]"
      title={""}
      button={""}
    />
    <About />
    {/* <ImageGalleries fullName={""} position={""} image={""} /> */}
    <div className="container py-10 px-10 shadow-xl m-auto ">
      <h2 className="text-2xl font-bold mb-4">Mission</h2>
      <p className="mb-6">
        To provide superior and comprehensive FM services resulting in a better
        working or living environment for our clients.
      </p>

      <h2 className="text-2xl font-bold mb-4">Vision</h2>
      <p className="mb-6">
        To be recognised as an innovator in the support services sector and a
        leader in quality, value, and customer satisfaction. To provide an
        environment enriched with trust, cooperation, and mutual respect while
        delivering services to our clients, ensuring professionalism, exceeding
        customers’ expectations, achieving market leadership, and operational
        excellence in every service.
      </p>
    </div>

    <div className="px-10 py-10">
      <h1 className="about-cursive text-[#FEA116] text-center text-xl  md:text-3xl mb-5">
        Team members
      </h1>
      <div className="flex flex-wrap gap-4 text-center ">
        {directorsGallery?.map(
          ({icon,image}, index) =>
            index === 2 && (
              <div className="group-hover " key={index}>
                <div className="">
                  <ImageCard
                    key={index}
                    fullName={"Full Name"}
                    position={"Designation"}
                    image={image}
                    styles={
                      "w-[320px] h-[320px] md:h-[380px] md:w-[380px] object-cover rounded-full  transition-all delay-150 duration-300  group-hover:scale-125"
                    }
                    group={"group"}
                    title={""}
                    icon={icon}
                  />
                </div>
              </div>
            )
        )}
      </div>
    </div>

    <NewsLetter email={""} />
  </div>
);

export default OurCompanyPage;
