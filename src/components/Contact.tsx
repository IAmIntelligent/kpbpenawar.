
const Contact: React.FC = () => {
  return (
    <section className="mt-20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
         <p className="about-cursive ">Food Menu</p>
          <h2 className="text-3xl font-semibold text-center mb-8">Most Popular Items</h2>
          <form className="grid grid-cols-0 flex-col md:grid-cols-2 gap-6" action="#">
            <div>
              <label className="block mb-2 font-bold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-semibold" htmlFor="subject">
                Suject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div className="col-span-2 text-center">
              <button className="px-6 py-3 bg-[#FEA116] text-white rounded hover:bg-[#FEA116]/80 transition duration-200">
                Book A Table Online
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
