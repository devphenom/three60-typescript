import { screen } from "@testing-library/react";
import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  display: flex;
  line-height: 1.8rem;

  @media screen and (max-width: 435px) {
    /* min-height: 100vh; */
    flex-direction: column-reverse;
  }
  #hero-container {
    width: 50%;
    background-color: #2468eb;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 120px;

    /* @media screen and (max-width: 768px) {
      width: 30%;
    } */
    @media screen and (max-width: 435px) {
      width: 100%;
      padding: 40px;
    }
    #hero-row {
      display: flex;
      flex-flow: wrap column;
      color: white;

      #col-2 {
        display: flex;
        margin: 40px 0;
        flex-flow: nowrap row;
        justify-content: space-between;

        @media screen and (max-width: 325px) {
          flex-flow: wrap column;
          align-items: center;
        }

        div {
          background-color: white;
          margin: 5px;
          height: 130px;
          width: 130px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          color: #2468eb;

          @media screen and (max-width: 768px) {
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
          }
        }
      }
    }
  }
`;
