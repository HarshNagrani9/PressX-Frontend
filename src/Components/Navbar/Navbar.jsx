import { useState } from 'react';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [activeItem, setActiveItem] = useState('home');

  // Function to handle clicks on navbar items
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    console.log("Active item:", itemName);
    console.log("Updated state:", activeItem);
  };
  return (
    <nav className="bg-white border-gray-200 shadow-md font-sans lg:px-24 md:px-0 sm:px-0">
      <div className="max-w-screen-xl flex wrap md:flex  items-center justify-between p-2">
        <a href="/" className="px-2 flex items-center space-x-2 rtl:space-x-reverse">
          <img src={logo} className="h-24" alt="PressX Logo" />
        </a>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        {/* <div className={`w-full md:flex md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="text-xl flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
          <li className={`${activeItem === 'home' ? 'text-blue-500' : ''} cursor-pointer`} onClick={() => handleItemClick('home')}>
              <a href="/" className=" block py-2 px-1 text-[#191916] bg-blue-700 rounded md:bg-transparent md:text-[#191916] md:p-0" aria-current="page">Home</a>
            </li>
            <li className={`${activeItem === 'about' ? 'text-blue-500' : ''} cursor-pointer`} onClick={() => handleItemClick('about')}>
              <a href="/about" className="block py-2 px-1 rounded hover:text-[#191916] md:border-0 md:hover:text-[#191916] md:p-0 ">About</a>
            </li>
            <li className={`${activeItem === 'ourTeam' ? 'text-blue-500' : ''} cursor-pointer`} onClick={() => handleItemClick('ourTeam')}>
              <a href="/ourTeam" className="block py-2 px-1 text-[#9DB2BF] rounded hover:text-[#191916] md:border-0 md:hover:text-[#191916] md:p-0 text-[#9DB2BF]">Our Team</a>
            </li>
            <li className={`${activeItem === 'howItWorks' ? 'text-blue-500' : ''} cursor-pointer`} onClick={() => handleItemClick('howItWorks')}>
              <a href="/howItWorks" className="block py-2 px-1 text-[#9DB2BF] rounded hover:text-[#191916] md:border-0 md:hover:text-[#191916] md:p-0 text-[#9DB2BF]">How it works</a>
            </li>
            <li className={`${activeItem === 'contactUs' ? 'text-blue-500' : ''} cursor-pointer`} onClick={() => handleItemClick('contactUs')}>
              <a href="/contactUs" className="block py-2 px-1 text-[#9DB2BF] rounded hover:text-[#191916] md:border-0 md:hover:text-[#191916] md:p-0 text-[#9DB2BF]">Contact Us</a>
            </li> */}





            <div className={`w-full md:flex md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="text-xl flex flex-col md:flex-row md:space-x-8 md:pl-36 rtl:space-x-reverse ">
          <li className={`${activeItem === 'home' ? 'text-blue-500' : 'text-[#191916]'} cursor-pointer`} onClick={() => handleItemClick('home')}>
              <a href="/" className=" block py-2 px-1  rounded md:bg-transparent  md:p-0" aria-current="page">Home</a>
            </li>
            <li className={`${activeItem === 'about' ? 'text-blue-500' : 'text-[#191916]'} cursor-pointer`} onClick={() => handleItemClick('about')}>
              <a href="/about" className="block py-2 px-1 rounded  md:border-0  md:p-0 ">About</a>
            </li>
            <li className={`${activeItem === 'Services' ? 'text-blue-500' : ''} cursor-pointer`} onClick={() => handleItemClick('ourTeam')}>
              <a href="/Services" className="block py-2 px-1  rounded hover:text-[#191916] md:border-0 md:hover:text-[#191916] md:p-0  ">Services</a>
            </li>
            <li className={`${activeItem === 'howItWorks' ? 'text-blue-500' : ''} cursor-pointer`} onClick={() => handleItemClick('howItWorks')}>
              <a href="/howItWorks" className="block py-2 px-1 rounded hover:text-[#191916] md:border-0 md:hover:text-[#191916] md:p-0 ">How it works</a>
            </li>
            <li className={`${activeItem === 'contactUs' ? 'text-blue-500' : ''} cursor-pointer`} onClick={() => handleItemClick('contactUs')}>
              <a href="/Contact" className="block py-2 px-1 rounded hover:text-[#191916] md:border-0 md:hover:text-[#191916] md:p-0 ">Contact Us</a>
            </li>
            <li>
              <button type="button" className="focus:outline-none text-white bg-[#007e8f]-700 font-medium rounded-lg text-l px-4 py-2 me-2 mb-2 bg-[#007e8f]">
                <a href="/Login
                ">Login / Sign Up </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
