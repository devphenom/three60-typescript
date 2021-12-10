import styled from "styled-components";
import Button from "../../components/Button/Button";
import { DashboardLayout } from "../../components/Globals.styles";

export const StyledTodos = styled(DashboardLayout)`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  @media screen and (min-width: 850px) {
    flex-direction: row;
    width: 100%;
    /* justify-content: space-; */
  }
`;

export const TodoButton = styled(Button)`
  width: 90%;
  font-size: 1rem;
  @media screen and (min-width: 850px) {
    display: none;
  }
`;

export const StyledTodoArea = styled.div`
  width: 90%;
  margin: auto;
  padding: 1rem 0;

  @media screen and (max-width: 768px) {
    /* flex-direction: column;
    width: 100%;
    padding: 25px;
    margin: 0; */
    flex-basis: 70%;
  }
`;
