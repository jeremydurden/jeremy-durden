import List from "../nav-list item/List";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const toggler = () => {
    document.body.classList.toggle("nav-open");
  };

  const removeClass = () => {
    console.log("click");
    document.body.classList.remove("nav-open");
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <button
        onClick={toggler}
        className="nav-toggle"
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <List removeClass={removeClass} url="#home" text="Home" />
          <List
            removeClass={removeClass}
            url="#services"
            text="What I'm Doing"
          />
          <List removeClass={removeClass} url="#about" text="About Me" />
          <List removeClass={removeClass} url="#work" text="My Work" />
        </ul>
      </nav>
    </header>
  );
};
export default Header;
