import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Service from "./Pages/service";
import Work from "./Pages/work";
import Gallery from "./Pages/gallery";

import Nav from "./Pages/Nav";
import Transition from "./Pages/Transition";

import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Transition />
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
