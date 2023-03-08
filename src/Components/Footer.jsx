const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer">
        <h3 className="title contact-title">contact me</h3>
        <div className="contact-box">
          <a
            href="mailto:paula.cavender@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"./assets/icons/email2.svg"} alt="email"></img>
            <p>paula.cavender@gmail.com</p>
          </a>
          <a
            href="https://github.com/paulajaynecavender"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"./assets/icons/github2.svg"} alt="github"></img>
            <p>paulajaynecavender</p>
          </a>
          <a
            href="https://www.linkedin.com/in/paulacavender/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"./assets/icons/linkedin2.svg"} alt="linkedin"></img>
            <p>paulacavender</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
