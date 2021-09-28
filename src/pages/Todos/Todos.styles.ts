import styled from "styled-components";

export const StyledTodos = styled.div`
  background-color: #e5e5e5;
  display: flex;
`;

export const StyledTodoMain = styled.section`
  width: 80%;
  display: flex;
  padding-top: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledTodoArea = styled.div`
  width: 75%;
  /* padding-top: 30px; */

  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    width: 100%;
    padding: 25px;
  }
`;

export const StyledPreview = styled.aside`
  background-color: white;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
