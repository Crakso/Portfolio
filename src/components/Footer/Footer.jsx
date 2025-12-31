import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'



function Footer() {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7xw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-purple-500'>
          Akki Bisht
        </h2>
        {/* Navigation Links*/}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact Me", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>
        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "" },
            { icon: <FaTwitter />, link: "" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/neeraj-bisht8126/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/neeraj_bisht_27?igsh=MjRhNWVkMXJ4amM3" },
            

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Neeraj Bisht. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer