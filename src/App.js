// import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import { useState } from "react";
import "./CSS/styles.css";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const onClick = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="App">
      <Header onClick={onClick} toggleMenu={toggleMenu} />
      <div className={!toggleMenu ? "main-container" : "main-container blur"}>
        <Hero />
        <Skills />
        <Work />
        {/* <About /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
