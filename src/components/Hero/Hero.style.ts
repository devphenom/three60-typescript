import styled from "styled-components";

export const StyledHero = styled.section`
  background-color: #2468eb;
  display: flex;
  flex-flow: wrap column;
  /* align-items: center; */
  justify-content: center;
  padding: 2rem;
  /* padding: 50px 120px; */
  color: white;

  /* @media screen and (max-width: 435px) {
    width: 100%;
    padding: 40px;
  } */
  #col-2 {
    flex-basis: 100%;
    display: flex;
    margin: 2rem 0;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;

    /* @media screen and (max-width: 325px) {
        flex-flow: wrap column;
        align-items: center;
      } */

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

      /* @media screen and (max-width: 768px) {
          width: 100px;
          height: 100px;
          font-size: 0.8rem;
        }

        @media screen and (max-width: 435px) {
          width: 120px;
          height: 120px;
          font-size: initial;
        }
        @media screen and (max-width: 325px) {
          width: 250px;
          height: 100px;
          font-size: 1.8rem;
        } */
    }
  }
  .hero-text {
    text-align: justify;
    text-justify: inter-word;
  }
`;
