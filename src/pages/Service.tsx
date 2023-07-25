import {  Hero, TextCard } from "../paths";
import { hero_images, serviceTextCard } from "../assets/utlity";

const Service = () => {
  return (
    <div>
      <Hero
        backgroundImage={hero_images?.service_hero}
        animationImage="none"
        title={""}
        button={""}
        height="h-[40vh]"
      />
      <div className="flex flex-wrap gap-5 justify-center py-20">
        {serviceTextCard?.map(({ title, description, icon }, index) => (
          <div>
            {/* <GrServices className="text-3xl" /> */}
            <TextCard
              key={index}
              category={title}
              description={description}
              headerPosition={""}
              icon={icon}
            />
          </div>
        ))}
      </div>

      <div className=" p-4 lg:py-20 lg:px-20">
        <h1 className="about-cursive text-[#FEA116] text-xl text-center">
          Service
        </h1>
        <h4 className="text-[#FEA116] text-3xl font-bold my-5 md:mb-10 text-center">
          Labour Contract Supplier Service
        </h4>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <img
              src=".\img\services\indesutrial-labour.jpg"
              alt="service_image"
              className="w-full "
            />
          </div>
          <div className=" w-full mt-4 lg:mt-0 lg:pl-[20px] lg:w-1/2 overflow-y-scroll scroll-bar text-start">
            {/* <Scrollbars style={{ height: 700 }}> */}
              <p className="text-gray-600 leading-[40px] ">
                EKR services is one of the leading names in the industry known
                for offering exceptional quality Labour contract services at an
                affordable rate. We are having one of the highly experienced
                team of labours. Our team is capable and well-trained to offer
                this service within promised frame of time. Our supplied labour
                are well known for their services. Our team is formed of highly
                trained labor that all are having unique ability physically &
                mentally. Our labors are good decision maker, and very sincere
                towards the service their offer to the clients. We provide all
                type of labour work in our labour contract services. ekr.asia
              </p>
            {/* </Scrollbars> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
