import styled from "styled-components";
// import { SidebarLayout } from "../../../components/Globals.styles";

export const StyledSidebar = styled.ul`
  a {
    text-decoration: none;
  }
  /* ul { */
  padding: 0;
  li {
    list-style: none;
  }
  /* } */
  /* height: 90%; */
  /* width: 10%;
  position: fixed;
  z-index: 1;
  left: 0;
  overflow-x: hidden; */

  /* #sidebar-links {
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

      
    }
  } */

  /* width: 100%; */
  display: flex;
  height: 60px;
  align-items: center;
  background-color: white;
  border-radius: 999px;
  font-size: 0.8rem;
  justify-content: space-between;
  /* padding: 0 1rem; */
  overflow: scroll;
  margin: 0;

  .nav-item {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid aqua;
    margin: 0 5px;
    min-width: 120px;

    .number {
      border-radius: 50%;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: rgba(70, 115, 228, 0.06);
      text-align: center;
      margin: 8px;
    }
  }

  @media screen and (min-width: 850px) {
  }

  /* height: auto; */
  /* @media screen and (max-width: 768px) {

    #sidebar-links {
      flex-direction: row;
      width: 100%;

    }
  } */
`;
