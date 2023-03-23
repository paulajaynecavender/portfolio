const Footer = () => {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <h3 className="title contact-title">Contact Me</h3>

        <div className="contact-container ">
          <div className="contact-box">
            <a
              href="mailto:paula.cavender@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={"./assets/icons/email3.svg"} alt="email"></img>
              <p className="white-text">paula.cavender@gmail.com</p>
            </a>
            <a
              href="https://github.com/paulajaynecavender"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={"./assets/icons/github3.svg"} alt="github"></img>
              <p className="white-text">paulajaynecavender</p>
            </a>
            <a
              href="https://www.linkedin.com/in/paulacavender/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={"./assets/icons/linkedin3.svg"} alt="linkedin"></img>
              <p className="white-text">paulacavender</p>
            </a>
          </div>
          <div className="created-by ">
            <p className="white-text">Designed and created by me</p>
            <a
              href="https://github.com/paulajaynecavender/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="link white-text">check out the code here</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
