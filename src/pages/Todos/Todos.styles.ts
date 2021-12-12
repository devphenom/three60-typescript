import styled from "styled-components";
import Button from "../../components/Button/Button";
import { DashboardLayout } from "../../components/Globals.styles";

export const StyledTodos = styled(DashboardLayout)`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  @media screen and (min-width: 850px) {
    flex-direction: row;
    justify-content: start;
  }
`;

export const TodoButton = styled(Button)`
  width: 90%;
  font-size: 1rem;
  margin: 1rem;
  @media screen and (min-width: 850px) {
    display: none;
  }

  &.lg {
    width: 200px;
    display: none;
    @media screen and (min-width: 850px) {
      display: block;
      margin: 0;
    }
  }
`;

export const StyledTodoArea = styled.div`
  width: 90%;
  margin: auto;
  padding: 1rem 0;

  @media screen and (min-width: 850px) {
    flex-basis: 60%;
    margin-left: 10%;
    margin-top: 0;
  }
`;

export const SidebarLg = styled.div`
  @media screen and (min-width: 850px) {
    flex-basis: 10%;
    position: fixed;
    width: inherit;
  }
`;
