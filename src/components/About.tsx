const About = () => {
  return (
    <section className=" py-16 ">
      <h1 className="about-cursive text-[#FEA116] text-xl">About Kbp penaewar sdn bhd</h1>
      <div className="container mx-auto px-4 flex">
        <div className="w-full  mx-auto text-center">
          {/* image s */}
          <div className="w-full  flex flex-wrap">
            <img
              className="w-[210px] h-[210px]"
              src="https://themewagon.github.io/restoran/img/about-1.jpg"
              alt=""
            />
            <img
              className="w-[150px] h-[150px]"
              src="https://themewagon.github.io/restoran/img/about-2.jpg"
              alt=""
            />
            <img
              className="w-[210px] h-[210px]"
              src="https://themewagon.github.io/restoran/img/about-3.jpg"
              alt=""
            />
            <img
              className="w-[150px] h-[150px]"
              src="https://themewagon.github.io/restoran/img/about-4.jpg"
              alt=""
            />
          </div>

          <div>
         
            <h4 className="text-[#FEA116] text-3xl font-bold">
              Welcome to KPB Penawar Sdn Bhd Malaysia.
            </h4>
            <p className="text-gray-600 mb-8">
              We’re the people behind the operations & maintenances,
              hospitality, food and support services that power your day, make
              you smile and put a spring in your step. That’s just one of the
              reason why we’re here for hospitality, catering and business
              support service provider. KPB PENAWAR SDN BHD is purely 100%
              malaysian bumiputera company incorporated in 2017. We one of most
              preferred support services in provide (O&M) Operations and
              Maintenance services of workers accommodation facilities located
              Pengerang,Johor,Malaysia. And also surrounding area by Petronas
              Integrated Complex (PIC), Pengerang Industrial Park (PIP),
              Pengerang Echo Industrial Park (PEIP). We offer a broad range of
              services for industrial and commercial establishments as well as
              workers camp, hostel, residential complexes and individual homes
              throughout Johor.
            </p>
            <p className="text-gray-600 ">
              {" "}
              We take the time to understand each of our client's needs on an
              individual basis, in order to ensure they receive from us the best
              possible services for their premises. All projects undertaken by
              us are handled by experienced, skilled and well-trained staff
              using the latest equipment and quality materials to ensure that
              the tasks are completed to the highest standards and on time.
            </p>
            <p className="text-gray-600 ">
              Clients in both public and private sectors continue to recognise
              outsourcing as a route not only to reducing costs but also to
              accessing expertise. We have enormous experience and our clients
              know that by working with us they are benefiting from a track
              record of delivery, trusted relationships and quality service. Put
              simply, we hit the ground running and make a real difference from
              day one.
            </p>
            <p className="text-gray-600 ">
              Today, clients increasingly want that ‘difference’ to be applied
              to more and more individual services. Many clients initially
              appoint us to provide a single service. Then, when we have proved
              our value, they frequently move towards bundling a number of
              services together – and there’s a clear trend towards bundled and
              integrated FM, where we deliver a suite of services, often across
              multiple sites. We see opportunities for great service and
              consistent growth in all contracts – whether we are providing one
              service or several.
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
      </div>
    </section>
  );
};

export default About;
