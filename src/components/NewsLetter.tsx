
const NewsLetter = () => {
  return (
    <form  className="flex flex-col items-center">
  <label htmlFor="email" className="text-center mb-2">
    Subscribe to Newsletter
  </label>
  <input
    type="email"
    id="email"
    placeholder="Enter Your Email"
    value=""
    className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
  <button
    type="submit"
    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
  >
    Submit
  </button>
</form>

  )
}

export default NewsLetter