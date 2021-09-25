import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavWrapper, StyledBurger, StyledNavMenu } from "./Navbar.styles";
import { Logo, Icon } from "../Globals.styles";
import LogoImg from "./three60.png";
import LineIcon from "react-lineicons";
import { FC } from "react";
import { faHourglass, faStickyNote } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface BurgerProps {
  open: boolean;
  toggleOpen: any;
}

export const NavMenu = ({ open }) => (
  <StyledNavMenu open={open}>
    <li className="nav-item">
      <Icon icon={faHourglass} />
      <Link to="/">Todos</Link>{" "}
    </li>
    <li className="nav-item">
      <Icon icon={faStickyNote} />
      <Link to="/">Notes</Link>{" "}
    </li>
    <li className="nav-item">
      <Icon icon={faLink} />
      <Link to="/">Links</Link>{" "}
    </li>
    <li className="nav-item">
      <LineIcon name="search-alt" />
      <input type="text" />
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
    console.log("toggled");
  };
  return (
    <NavWrapper>
      <nav>
        <Link to="/">
          <Logo>
            <img src={LogoImg} alt="logo" />
            <span>three60</span>
          </Logo>
        </Link>
        <NavMenu open={open} />
        <Hamburger open={open} toggleOpen={toggle} />
      </nav>
    </NavWrapper>
  );
};

export default Navbar;
