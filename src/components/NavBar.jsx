import React from "react";
import { Menu } from "lucide-react";

const NavBar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">

      <button onClick={toggleSidebar} className="block">
        <Menu size={28} />
      </button>

      <div className="text-2xl font-bold italic mr-150">BEACHES...</div>

      <ul className="hidden md:flex space-x-8 text-lg">
        <li className="cursor-pointer hover:text-amber-800">Home</li>
        <li className="cursor-pointer hover:text-amber-800">About</li>
        <li className="cursor-pointer hover:text-amber-800">Services</li>
        <li className="cursor-pointer hover:text-amber-800">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
