import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="h-screen flex flex-col">

      <NavBar toggleSidebar={toggleSidebar} />

      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
     
      <main
        className="flex-1 bg-cover bg-center flex items-center justify-center text-white text-3xl font-bold"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        <div className="text-amber-900 bg-opacity-50 p-10 rounded-lg">
          Sunshine state of mind.....
        </div>
      </main>
    </div>
  );
}

export default App;
