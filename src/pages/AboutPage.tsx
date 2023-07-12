import { FC } from "react";
import {
  About,
  Hero,
  ImageGalleries,
  NewsLetter,
  Testimonials,
  TextCard,
} from "../paths";
import {
  generalPrecautions,
  hero_images,
  teamEffort,
  Values,
} from "../assets/utlity";

interface aboutProps {
  animationImage: string;
  backgroundImage: string;
}

const AboutPage: FC<aboutProps> = () => {
  return (
    <div>
      <Hero backgroundImage={hero_images?.about_hero} animationImage="none" />
      <About />
      <ImageGalleries fullName={""} position={""} image={""} />
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-4">Mission</h2>
        <p className="mb-6">
          To provide superior and comprehensive FM services resulting in a
          better working or living environment for our clients.
        </p>

        <h2 className="text-2xl font-bold mb-4">Vision</h2>
        <p className="mb-6">
          To be recognised as an innovator in the support services sector and a
          leader in quality, value, and customer satisfaction. To provide an
          environment enriched with trust, cooperation, and mutual respect while
          delivering services to our clients, ensuring professionalism,
          exceeding customers’ expectations, achieving market leadership, and
          operational excellence in every service.
        </p>
      </div>
      <div className="flex flex-wrap">
        {Values?.map((value, index) => (
          <TextCard
            key={index}
            category={value.title}
            description={value.desc}
            headerPosition={""}
          />
        ))}
      </div>
      <Testimonials />

      <div className="bg-1d232a py-8">
        <div className="container mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h2 className="font-bold text-white shadow-slate-300 underline">
              GENERAL PRECAUTIONS
            </h2>
            {generalPrecautions.map((precaution, index) => (
              <li
                key={index}
                className="bg-fe8526 text-white p-4 rounded-md shadow-md"
              >
                {precaution.name}
              </li>
            ))}
          </ul>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <h2 className="font-bold text-white shadow-slate-300 underline">
              SAFETY IS A TEAM EFFORT
            </h2>
            {teamEffort.map((guideline, index) => (
              <li
                key={index}
                className="bg-a6adba text-1d232a p-4 rounded-md shadow-md"
              >
                {guideline.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default AboutPage;
