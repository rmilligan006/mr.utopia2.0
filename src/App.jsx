import "./App.css";
import Nav from "./Nav";
import Contact from "./Contact";
import Head from "./Head";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";
import { inject } from "@vercel/analytics";

function App() {
  /*inject();*/
  return (
    <>
      <div className="bg-white">
        <Nav />
        <Head />
        <About />
        <Services />
        {/*<Contact /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
