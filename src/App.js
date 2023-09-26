// import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import { useState } from "react";
import "./CSS/styles.css";
import FantasyFootball from "./Components/FantasyFootball";
import Contact from "./Components/Contact";
import { useRef } from "react";
import { useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const component = useRef();

  useLayoutEffect(() => {
    // groups all animations to revert later
    let ctx = gsap.context((self) => {
      const sections = self.selector(".section");
      sections.forEach((section) => {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            toggleActions: "play none none reset",
            start: "-40% end",
            markers: true,
          },
          y: -142,
          duration: 3,
          visibility: 1,
          opacity: 1,
        });
      });
    }, component);
    // reverts all animations back to start
    return () => ctx.revert();
  }, []);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [modal, setModal] = useState(false);

  const onClick = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="App" ref={component}>
      <Header onClick={onClick} toggleMenu={toggleMenu} />
      <div className={!toggleMenu ? "main-container" : "main-container blur"}>
        <Hero />
        <Skills />
        <Work setModal={setModal} />
        <FantasyFootball modal={modal} setModal={setModal} />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
