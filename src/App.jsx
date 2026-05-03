import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CategoryBar from "./Components/CategoryBar";
import Districts from "./Pages/Districts";
import DistrictDetails from "./Pages/DistrictDetails";
import Explore from "./Pages/Explore";
import Culture from "./pages/Culture";
import Food from "./pages/Food";
import Gallery from "./pages/Gallery";
import DomeGallery from "./Components/DomeGallery";
import About from "./pages/About";


function App() {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <CategoryBar />
            <Districts />
            <Explore />
            <Culture />
            <Food />
            <Gallery />
            <DomeGallery />
            <About />
          </>
        } />
        <Route path="/district/:id" element={<DistrictDetails />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/food" element={<Food />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dome-gallery" element={<DomeGallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;