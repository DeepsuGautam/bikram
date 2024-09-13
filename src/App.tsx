import React from "react";
import Nav from "./navigation/Nav";
import Home from "./comps/Home";
import Services from "./comps/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skills from "./comps/Skills";
import Contact from "./comps/Contact";
import Footer from "./comps/Footer";

const App = () => {
  return (
    <main className="w-full min-h-screen bg-slate-950">
      <Nav />
      <Home />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
