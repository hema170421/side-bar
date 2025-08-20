import React from "react";
import { X, Home, User, Settings, LogOut } from "lucide-react";

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
     
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">DashBoard</h2>
        <button onClick={toggleSidebar}>
          <X size={24} />
        </button>
      </div>

     
      <nav className="mt-6">
        <ul className="space-y-4 px-6">
          <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Home size={20} /> Home
          </li>
          <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <User size={20} /> Profile
          </li>
          <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Settings size={20} /> Settings
          </li>
          <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <LogOut size={20} /> Logout
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
