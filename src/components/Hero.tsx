import { FC } from "react";

interface HeroPorps {
  animationImage: string;
  backgroundImage: string;
}

const Hero: FC<HeroPorps> = ({ backgroundImage, animationImage }) => {
  return (
    <div
      className="hero h-[90vh] relative z-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* hero opacity */}
      <div className="absolute hero-overlay bg-gradient-to-t from-slate-800 to-slate-500/10  "></div>

      <div className="hero-content text-center text-white">
        {/* <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Enjoy Our Delicious Meal</h1>
          <p className="mb-5">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <button className="btn btn-primary">Book a table</button>
        </div> */}

        <img
          className={`${
            animationImage === "none" ? "hidden" : ""
          } animate-spin delay-[20s] w-[300px] md:w-[700px] `}
          src={animationImage}
          alt={animationImage}
        />
      </div>
    </div>
  );
};

export default Hero;
