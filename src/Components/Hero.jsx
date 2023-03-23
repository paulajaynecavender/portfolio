const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-headline-container">
          <p className="hero-name">
            Hi! My name is <h2>Paula Cavender</h2>
          </p>
          <p className="hero-description">
            I am a<span className="text-highlight"> front-end developer </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
            officiis nisi error vitae necessitatibus pariatur natus animi
            excepturi magnam voluptas ut enim aut expedita recusandae voluptates
            laudantium quia omnis at!
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
