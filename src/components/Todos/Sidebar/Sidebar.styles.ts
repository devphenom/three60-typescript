import styled from "styled-components";

export const StyledSidebar = styled.div`
  a {
    text-decoration: none;
  }
  ul {
    padding: 0;
    li {
      list-style: none;
    }
  }

  height: 90vh;
  width: 15%;
  background-color: #e5e5e5;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;

  nav {
    width: 80px;
    /* height: 500px; */
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 999px;
    padding: 30px 0;
    font-size: 0.8rem;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      li {
        padding: 10px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-left: 3px solid aqua;
        .number {
          width: 25px;
          height: 25px;
          margin: 10px;
          font-size: 1.5rem;
          border-radius: 50px;
          text-align: center;
          background: rgba(70, 115, 228, 0.06);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    nav {
      width: 100%;
      /* border-radius: 0; */
      padding: 0;
      overflow: scroll;

      ul {
        flex-direction: row;
        li {
          flex-direction: row-reverse;
          border-left: none;
          border-bottom: 3px solid aqua;
        }
      }
    }
  }
`;
