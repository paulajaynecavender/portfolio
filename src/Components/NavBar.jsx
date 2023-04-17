const NavBar = ({ onClick, toggleMenu }) => {
  return (
    <nav className="nav">
      <ul className={toggleMenu ? "nav-items nav-active" : "nav-items"}>
        <li>
          <a href="#hero" onClick={onClick}>
            home
          </a>
        </li>
        <li>
          <a href="#skills " onClick={onClick}>
            skills
          </a>
        </li>
        <li>
          <a href="#work" onClick={onClick}>
            projects
          </a>
        </li>
      </ul>
      <div className="menu-toggler" onClick={onClick}>
        <img
          src={
            toggleMenu ? "./assets/icons/cross.svg" : "./assets/icons/menu.svg"
          }
          alt="menu icon"
        ></img>
      </div>
    </nav>
  );
};

export default NavBar;
