import NavBar from "./NavBar";

const Header = ({ onClick, toggleMenu }) => {
  return (
    <header>
      <div className="header">
        <h1>PAULA JAYNE CAVENDER</h1>
        <p className="header-text">front-end web developer</p>
        <div className="navbar-container">
          <NavBar onClick={onClick} toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
