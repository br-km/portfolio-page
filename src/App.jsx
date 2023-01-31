import React, { useState, useEffect } from "react";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Qualification from "./components/Qualification/Qualification";
import Loading from "./components/Loading/Loading";

const App = () => {
  return (
    <>
      <Loading />
      <Header />
      <Nav />
      <About />
      <Qualification />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
