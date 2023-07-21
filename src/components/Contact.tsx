
const Contact: React.FC = () => {
  return (
    <section className="py-10 ">
      <div className="container mx-auto px-4 py-6 border-2  shadow-2xl bg-gray-600">
        <div className="max-w-3xl mx-auto  mb-8">
        
          <h2 className="text-3xl font-semibold text-center mb-4">Contact Us</h2>
          <form className="grid grid-cols-0 flex-col md:grid-cols-2 gap-6" action="#">
            <div>
              <label className="block mb-2 font-bold text-white" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-white w-full p-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-white" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-white w-full p-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-semibold text-white" htmlFor="subject">
                Suject
              </label>
              <input
                type="text"
                id="subject"
                className="bg-white w-full p-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 font-semibold text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="bg-white w-full p-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div className="col-span-2 text-center">
              <button className="px-6 py-3 bg-[#FEA116] text-white rounded hover:bg-[#FEA116]/80 transition duration-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
