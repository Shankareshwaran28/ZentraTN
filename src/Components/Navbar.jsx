import React from "react";
import { Search, Globe } from "lucide-react";
import logo from "../assets/ZentraTN2.png";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-10 py-4 text-white">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-2xl font-bold">
            Zentra<span className="text-yellow-400">TN</span>
          </h1>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="relative hover:text-yellow-400 transition-all duration-300">
            <span className="relative pb-1">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </a>
          <a href="#" className="relative hover:text-yellow-400 transition-all duration-300">
            <span className="relative pb-1">
              Districts
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </a>
          <a href="#" className="relative hover:text-yellow-400 transition-all duration-300">
            <span className="relative pb-1">
              Explore
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </a>
          <a href="#" className="relative hover:text-yellow-400 transition-all duration-300">
            <span className="relative pb-1">
              Culture
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </a>
          <a href="#" className="relative hover:text-yellow-400 transition-all duration-300">
            <span className="relative pb-1">
              Food
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </a>
          <a href="#" className="relative hover:text-yellow-400 transition-all duration-300">
            <span className="relative pb-1">
              Gallery
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </a>
          <a href="#" className="relative hover:text-yellow-400 transition-all duration-300">
            <span className="relative pb-1">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </a>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Search className="cursor-pointer" />
          <div className="flex items-center gap-1 cursor-pointer">
            <Globe size={18} />
            <span className="text-sm">EN</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;