import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavWrapper, StyledBurger, StyledNavMenu } from "./Navbar.styles";
import { Logo } from "../Globals.styles";
import LogoImg from "./three60.png";
import { Joystick, NoteIcon, LinkIcon, SearchIcon } from "../Icons";
interface BurgerProps {
  open: boolean;
  toggleOpen?: any;
}

export const NavMenu = (props: BurgerProps) => (
  <StyledNavMenu open={props.open}>
    <li className="nav-item" onClick={props.toggleOpen}>
      <NavLink
        to="/dashboard/todos"
        activeClassName="active"
        className="nav-link"
      >
        <Joystick className="icon" />
        Todos
      </NavLink>{" "}
    </li>
    <li className="nav-item" onClick={props.toggleOpen}>
      <NavLink
        to="/dashboard/notes"
        activeClassName="active"
        className="nav-link"
      >
        <NoteIcon className="icon" />
        Notes
      </NavLink>{" "}
    </li>
    <li className="nav-item" onClick={props.toggleOpen}>
      <NavLink
        to="/dashboard/links"
        activeClassName="active"
        className="nav-link"
      >
        <LinkIcon className="icon" />
        Links
      </NavLink>{" "}
    </li>
    <li className="nav-item">
      <SearchIcon /> <input type="text" />
    </li>
  </StyledNavMenu>
);

export const Hamburger: FC<BurgerProps> = ({ open, toggleOpen }) => (
  <StyledBurger open={open} onClick={toggleOpen}>
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </StyledBurger>
);

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <NavWrapper>
      <nav>
        <NavLink to="/">
          <Logo>
            <img src={LogoImg} alt="logo" />
            <span>three60</span>
          </Logo>
        </NavLink>
        <NavMenu open={open} toggleOpen={toggle} />
        <Hamburger open={open} toggleOpen={toggle} />
      </nav>
    </NavWrapper>
  );
};

export default Navbar;
