import styled from "styled-components";

export const StyledTodos = styled.div`
  margin-top: 80px;
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
