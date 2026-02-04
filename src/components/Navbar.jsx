import React, { useState } from "react";
import logoIcon from '../assets/image/icon_01.png';
import Resume from '../assets/pdf/imran.pdf';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div>
      <header>
        <img src={logoIcon} className="logo" alt="Logo" />
        <button className="menu-btn" onClick={openSidebar}>
          ☰
        </button>

        <nav id="sidebar" className={isSidebarOpen ? "active" : ""}>
          <button className="close-btn" onClick={closeSidebar}>
            ✖
          </button>
          <a href="#home" style={{ "--i": 1 }} onClick={closeSidebar}>Home</a>
          <a href="#about" style={{ "--i": 2 }} onClick={closeSidebar}>About</a>
          <a href="#skills" style={{ "--i": 3 }} onClick={closeSidebar}>Skills</a>
          <a href="#projects" style={{ "--i": 4 }} onClick={closeSidebar}>Projects</a>
          <a href="#contact" style={{ "--i": 5 }} onClick={closeSidebar}>Contact</a>
          <a href={Resume} target="_blank" style={{ "--i": 6 }} onClick={closeSidebar}>Resume</a>
        </nav>
      </header>

      {isSidebarOpen && <div className="overlay active" onClick={closeSidebar}></div>}
    </div>
  );
};

export default Navbar;
