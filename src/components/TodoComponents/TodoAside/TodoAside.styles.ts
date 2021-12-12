import styled from "styled-components";

export const StyledPreview = styled.aside`
  display: none;

  @media screen and (min-width: 850px) {
    display: flex;
    align-items: center;
    flex-basis: 30%;
    margin-left: 1.5rem;
    background-color: white;
    text-align: center;
    padding: 1rem;
    max-height: 100%;
    overflow-y: scroll;
  }
`;
