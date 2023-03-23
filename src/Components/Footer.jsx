const Footer = () => {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        {/* <h3 className="title contact-title">Contact Me</h3> */}

        <div className="contact-container ">
          <div className="contact-box">
            <a
              href="mailto:paula.cavender@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={"./assets/icons/email3.svg"} alt="email"></img>
            </a>
            <a
              href="https://github.com/paulajaynecavender"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={"./assets/icons/github3.svg"} alt="github"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/paulacavender/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={"./assets/icons/linkedin3.svg"} alt="linkedin"></img>
            </a>
          </div>
          <div className="created-by ">
            <p className="white-text">Designed and created by me</p>
            <a
              href="https://github.com/paulajaynecavender/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="white-text">
                check out the code <span className="link">here</span>
              </p>
            </a>
          </div>
        </div>
        <p className="white-text">© Paula Cavender</p>
      </div>
    </footer>
  );
};

export default Footer;
