const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-headline">
          <div className="hero-headline-container">
            <p>
              Hi! My name is <h2 className="underline">paula cavender</h2> and I
              am a <h2 className="underline">front-end developer</h2>
            </p>
          </div>
          <div className="hero-img-container">
            <img
              className="hero-img"
              src={"./assets/undraw_programmer_re_owql (1).svg"}
              alt="illustration of programmer"
            />
          </div>
        </div>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
          officiis nisi error vitae necessitatibus pariatur natus animi
          excepturi magnam voluptas ut enim aut expedita recusandae voluptates
          laudantium quia omnis at!
        </p>
      </div>
    </section>
  );
};

export default Hero;
