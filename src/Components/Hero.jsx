const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-headline-container">
          <div className="hero-name hero-text">
            Hi! My name is <h2>Paula Jayne Cavender</h2>
          </div>
          <div className="hero-description hero-text">
            I am a
            <span className="text-highlight"> front-end web developer </span>
            who enjoys seeing my creations come to life on the screen
          </div>
          <div className="hero-contact">
            <div className="button">
              <a
                href="mailto:paula.cavender@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={"./assets/icons/email3.svg"} alt="email"></img>
                <p className="contact-text">email me </p>
              </a>
            </div>
            <div className="button">
              <a
                href="https://www.linkedin.com/in/paulacavender/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={"./assets/icons/linkedin3.svg"} alt="linkedin"></img>
                <p className="contact-text">linkedin </p>
              </a>
            </div>

            <div className="button">
              <a
                href="https://github.com/paulajaynecavender"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={"./assets/icons/github3.svg"} alt="github"></img>
                <p className="contact-text">github </p>
              </a>
            </div>
          </div>
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
