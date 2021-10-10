import styled from "styled-components";

interface BurgerProps {
  open: boolean;
  onClick: () => void;
}

interface NavMenuProps {
  open: boolean;
}

export const NavWrapper = styled.header`
  border-bottom: 1px solid #e2e8f0;
  margin: 0;
  padding: 0 20px;
  box-sizing: border-box;
  /* font-size: 62.5%; */

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 1rem 1.5rem; */
  }
`;

export const StyledNavMenu = styled.ul<NavMenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  /* .navlinks a {
  } */
  .nav-item {
    margin-left: 5rem;
    cursor: pointer;
    .nav-link {
      font-weight: 400;
      padding-bottom: 20px;
      color: #777777;
      &:hover {
        color: #482ff7;
      }
      &.active {
        border-bottom: 3px solid #482ff7;
      }
    }
    &:last-child {
      margin-left: auto;
      width: 476px;
      background: #f6f7fb;
      border-radius: 999px;
      padding-left: 20px;

      input {
        background: #f6f7fb;
        outline: none;
        margin-left: 10px;
        height: 45px;
        border: 1px solid #f6f7fb;
        -webkit-appearance: none;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10px 0;
    position: fixed;
    z-index: 999;
    top: 5rem;
    display: block;
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    left: ${({ open }) => (open ? "0" : "-100%")};

    .nav-item {
      margin: 1.2rem 0;
      padding: 10px 0;
      &:hover {
        background-color: rgba(70, 115, 228, 0.08);
      }

      &:last-child {
        margin: auto;
        padding: 0;
        width: 90%;
      }
    }
  }
`;

export const StyledBurger = styled.div<BurgerProps>`
  display: none;

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
  }
  @media only screen and (max-width: 768px) {
    display: block;
    cursor: pointer;

    .bar:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    .bar:nth-child(1) {
      transform: ${({ open }) =>
        open ? "translateY(8px) rotate(45deg)" : "initial"};
    }

    .bar:nth-child(3) {
      transform: ${({ open }) =>
        open ? "translateY(-8px) rotate(-45deg)" : "initial"};

      /* transform: translateY(-8px) rotate(-45deg); */
    }
  }
`;
