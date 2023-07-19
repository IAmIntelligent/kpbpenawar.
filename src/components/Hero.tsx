import { FC } from "react";

interface HeroPorps {
  animationImage: string;
  backgroundImage: string;
}

const Hero: FC<HeroPorps> = ({ backgroundImage, animationImage }) => {
  return (
    <div
      className="hero hero-bg h-[110vhv] md:h-[90vh] relative z-0 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* hero opacity */}
      <div className="absolute hero-overlay bg-gradient-to-t from-[#0F172B]/90 to-[#0F172B]/80  "></div>

      <div className="hero-content flex  flex-col mt-[90px] md:mt-[40px] md:flex-row w-full justify-start ">
        <div className="col-span-6 lg:col-span-6 text-center lg:text-left md:w-[500px] relative z-50 md:pl-[90px]">
          <h1 className="text-[30px] md:text-3xl font-[800] text-white animated slideInLeft font-nunito tracking-wide mb-[15px] md:leading-[50px]  " >
            Welcome to <br />
            Embunan Kristal Resources.
          </h1>
          <p className="text-white animated slideInLeft mb-4 pb-2">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <a
            href=""
            className="bg-[#FEA116] text-white font-semibold py-2 px-4 rounded-lg inline-block animated slideInLeft"
          >
            Read more
          </a>
        </div>

        <img
          className={`${
            animationImage === "none" ? "hidden" : ""
          } md:absolute z-30 right-10 bottom-10 md:bottom-0 animate-spin delay-[20s]`}
          src={animationImage}
          alt={animationImage}
        />
      </div>
    </div>
  );
};

export default Hero;
