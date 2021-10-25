import styled from "styled-components";
import { DashboardLayout } from "../../components/Globals.styles";

export const StyledTodos = styled(DashboardLayout)``;

export const StyledTodoMain = styled(DashboardLayout)`
  display: flex;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
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
