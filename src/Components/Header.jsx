import NavBar from "./NavBar";

const Header = ({ onClick, toggleMenu }) => {
  return (
    <header>
      <div className="header">
        {/* <p className="header-text">front-end web developer</p> */}
        <div className="navbar-container">
          <NavBar onClick={onClick} toggleMenu={toggleMenu} />
        </div>
        <h1>Paula Cavender</h1>
      </div>
    </header>
  );
};

export default Header;
