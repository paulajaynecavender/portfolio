const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="created-by ">
            <p className="white-text">Designed and created by me</p>
            <a
              href="https://github.com/paulajaynecavender/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="white-text">
                Check out the code <span className="link">here</span>
              </p>
            </a>
          </div>
          <p className="white-text">© Paula Cavender</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
