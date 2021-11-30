import styled from "styled-components";

interface ButtonProps {
  bgColor?: string;
  sm: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  display: block;
  width: 100%;
  margin: 1rem auto;
  background: ${({ bgColor }) => bgColor || "#2468eb"};
  border: 1px solid white;
  border-radius: 4px;
  color: ${({ bgColor }) => (bgColor ? "#2468eb" : "#fff")};
  height: 3rem;
  cursor: pointer;

  /* border-radius: 4px; */

  //   :last-child {
  //     background-color: #2468eb12;
  //     color: #2468eb;
  //   }

  /* padding: 10px 20px; */
  /* height: 46px; */
  /* color: white;
  cursor: pointer;
  background: ${({ bgColor }) => bgColor || "#28ba63"};
  border-radius: 5px;
  border: 1px solid #28ba63;
  display: ${({ sm }) => (sm ? "none" : "inline-block")}; */

  /* @media screen and (max-width: 768px) {
    display: none;
    display: ${({ sm }) => (sm ? "block" : "none")};
    position: ${({ sm }) => (sm ? "fixed" : "none")};
    margin: 10px auto;
    z-index: 1;
    left: 0;
    overflow-x: hidden;
    width: 80%;
  } */
`;

// button {
//   display: block;
//   width: 100%;
//   background-color: #2468eb;
//   border: 1px solid white;
//   border-radius: 4px;
//   color: white;
//   height: 3rem;
//   cursor: pointer;
//   /* border-radius: 4px; */

//   :last-child {
//     background-color: #2468eb12;
//     color: #2468eb;
//   }
// }
