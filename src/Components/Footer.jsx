const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="created-by ">
            <p className="footer-text">© Paula Cavender</p>
            <p className="footer-text">Designed and created by me</p>

            <p className="footer-text">
              Check out the code{" "}
              <span className="link inline">
                <a
                  href="https://github.com/paulajaynecavender/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
