import styled from "styled-components";
import { GeneralUIStyle } from "../../components/Globals.styles";

export const StyledHomepage = styled(GeneralUIStyle)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  @media screen and (min-width: 550px) {
  }
  @media screen and (min-width: 850px) {
    flex-direction: row;
    justify-content: start;
  }
`;
