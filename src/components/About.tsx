

const About = () => {
  return (
    <section className=" py-16 h-[50vh]">
      <h1 className="about-cursive text-[#FEA116] text-xl">About</h1>
      <div className="container mx-auto px-4 flex">
        <div className="w-full md:w-[50%] flex flex-wrap">
          <img className="w-[210px] h-[210px]"
            src="https://themewagon.github.io/restoran/img/about-1.jpg"
            alt=""
          />
          <img className="w-[150px] h-[150px]"
            src="https://themewagon.github.io/restoran/img/about-2.jpg"
            alt=""
          />
          <img className="w-[210px] h-[210px]" src="https://themewagon.github.io/restoran/img/about-3.jpg" alt="" />
          <img className="w-[150px] h-[150px]" src="https://themewagon.github.io/restoran/img/about-4.jpg" alt="" />
        </div>
        <div className="w-full md:w-[50%] mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <h4 className="text-[#FEA116] text-3xl font-bold">Welcome to Restoran</h4>
          <p className="text-gray-600 mb-8">
            Welcome to Restoran Tempor erat elitr rebum at clita. Diam dolor
            diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et
            sit, sed stet lorem sit.
          </p>
          <p className="text-gray-600 mb-8">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">15</h3>
              <p className="text-gray-600">Years of EXPERIENCE</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">50</h3>
              <p className="text-gray-600">Popular MASTER CHEFS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
