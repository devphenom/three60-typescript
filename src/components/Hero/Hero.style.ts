import styled from "styled-components";

export const StyledHero = styled.section`
  background-color: #2468eb;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  padding: 2rem;
  color: white;
  min-height: 100vh;

  #col-2 {
    flex-basis: 100%;
    display: flex;
    margin: 2rem 0;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;

    .hero-card {
      flex-basis: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 150px;
      font-size: 24px;
      border-radius: 0.5rem;
      background-color: white;
      color: #2468eb;
      text-transform: uppercase;
    }
  }
  .hero-text {
    text-align: justify;
    text-justify: inter-word;
  }

  @media screen and (min-width: 550px) {
    padding: 1.5rem 5rem;
  }
  @media screen and (min-width: 850px) {
    flex-basis: 50%;

    #col-2 {
      flex-direction: row;

      .hero-card {
        padding: 1rem;
      }
    }
  }
`;
