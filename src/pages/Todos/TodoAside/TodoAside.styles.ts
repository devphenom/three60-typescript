import styled from "styled-components";

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
