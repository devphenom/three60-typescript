import styled from "styled-components";
import { SidebarLayout } from "../../../components/Globals.styles";

export const StyledSidebar = styled(SidebarLayout)`
  a {
    text-decoration: none;
  }
  ul {
    padding: 0;
    li {
      list-style: none;
    }
  }
  height: 90%;
  width: 10%;
  position: fixed;
  z-index: 1;
  left: 0;
  overflow-x: hidden;

  #sidebar-links {
    width: 70%;
    margin: 40px auto;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 999px;
    padding: 30px 0;
    font-size: 0.8rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .nav-item {
      padding: 10px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-left: 3px solid aqua;

      .number {
        border-radius: 50%;
        width: 36px;
        height: 36px;
        padding: 8px;
        background: rgba(70, 115, 228, 0.06);
        text-align: center;
        margin: 3px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #sidebar-links {
      flex-direction: row;
      width: 100%;
      padding: 0 20px;
      overflow: scroll;
      margin: 0;

      .nav-item {
        flex-direction: row-reverse;
        border-left: none;
        border-bottom: 3px solid aqua;
        margin: 0 5px;
      }
    }
  }
`;
