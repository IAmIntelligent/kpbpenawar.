import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white static top-[100px] right-0 left-0 ">
  <div className="container mx-auto py-8">
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/3 lg:w-1/4 mb-4">
        <h2 className="text-xl font-bold mb-2">OUR STORY</h2>
        <ul className="list-none">
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Sectors</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Directors</a></li>
          <li><a href="#">Joint Ventures</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/4 mb-4">
        <h2 className="text-xl font-bold mb-2">SERVICES</h2>
        <ul className="list-none">
          <li>Catering Services</li>
          <li>Laundry Service</li>
          <li>Event Management</li>
          <li>IT Support</li>
        </ul>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/4 mb-4">
        <h2 className="text-xl font-bold mb-2">ADDRESS</h2>
        <p>
          Lot 48, Jalan Jomis, Teluk Ramunia, Sungai Rengit, 81620 Pengerang, Johor, MALAYSIA
        </p>
        <p>+6011 1060 6649</p>
        <p>info@kpbpenawar.com</p>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer