// import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import "./CSS/styles.css";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
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
