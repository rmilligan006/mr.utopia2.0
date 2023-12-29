import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Contact from "./Contact";
import Head from "./Head";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="bg-white">
        <Nav />
        <Head />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
