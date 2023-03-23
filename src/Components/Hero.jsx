const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-headline-container">
          <p className="hero-name hero-text">
            Hi! My name is <h2>Paula Jayne Cavender</h2>
          </p>
          <p className="hero-description hero-text">
            I am a
            <span className="text-highlight"> front-end web developer </span>
            specialising in <span className="text-highlight">React.js</span> and
            enjoy seeing my creations come to life on the screen
          </p>
        </div>

        <div className="hero-img-container">
          <img
            className="hero-img"
            src={"./assets/7464b2.svg"}
            alt="illustration of programmer"
          />
        </div>
      </div>
      <img
        className="arrow"
        src={"./assets/icons/arrow.svg"}
        alt="down arrow"
        height="25px"
      ></img>
    </section>
  );
};

export default Hero;
