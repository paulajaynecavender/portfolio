const Contact = () => {
  return (
    <section className="contact  section" id="contact">
      <div className="container">
        <h3 className="title contact-title">Contact Me</h3>
        <div className="contact-btn-container">
          <div className="contact-button link">
            <a
              href="mailto:paula.cavender@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={"./assets/icons/email3.svg"} alt="email"></img>
              <p>paula.cavender@gmail.com </p>
            </a>
          </div>
          <div className="contact-button link">
            <a
              href="https://www.linkedin.com/in/paulacavender/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={"./assets/icons/linkedin3.svg"} alt="linkedin"></img>
              <p>linkedin.com/in/paulacavender </p>
            </a>
          </div>
          <div className="contact-button link">
            <a
              href="https://github.com/paulajaynecavender"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={"./assets/icons/github3.svg"} alt="github"></img>
              <p>github.com/paulajaynecavender</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
