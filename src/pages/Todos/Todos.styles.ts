import styled from "styled-components";
import Button from "../../components/Button/Button";
import { DashboardLayout } from "../../components/Globals.styles";

export const StyledTodos = styled(DashboardLayout)`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  /* @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  } */
`;

export const TodoButton = styled(Button)`
  width: 95%;
  font-size: 1rem;
  /* margin: 1rem; */
`;

export const StyledTodoArea = styled.div`
  padding-top: 30px;
  width: 88%;
  margin-left: 12%;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    width: 100%;
    padding: 25px;
    margin: 0;
  }
`;
