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
    <div className="container py-10 px-10 shadow-xl border m-auto ">
      <h2 className="text-2xl font-bold mb-4">Vision and Mission</h2>
      <p className="mb-6">
        Our goal is to reduce the potential for civil unrest & anti-social
        behavior by camp residents as Sports, Welfare & Recreation activities
        allow people to channel any feelings of built-up frustration or
        aggression through healthy, constructive & rewarding activities. We aim
        to make each Clients resident’s employment duration an unforgettable
        life experience, where they have the opportunity to sample a
        once-in-a-lifetime experience of diverse cultural exposure to other
        nationalities and the customs, traditions and events they celebrate. We
        also aim to have every resident return to their countries a more
        educated and enlightened individual.
      </p>
    </div>

    <div className="px-10 py-10">
      <h1 className="about-cursive text-[#FEA116] text-center text-xl  md:text-3xl mb-5">
        Team members
      </h1>
      <div className="flex flex-wrap gap-4 text-center ">
        {directorsGallery?.map(
          ({ icon, image }, index) =>
            index === 2 && (
              <div className="group-hover " key={index}>
                <div className="">
                  <ImageCard
                    key={index}
                    fullName={"DR MOHAMMAD AMIR SHAN"}
                    position={"CEO"}
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
