import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const H1 = styled.h1`
  font-weight: lighter;
  font-size: 48px;
  font-style: normal;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-weight: lighter;
    font-size: 48px;
    font-style: normal;
    line-height: 1.2;
  }

  @media screen and (max-width: 435px) {
    font-weight: lighter;
    font-size: 48px;
    font-style: normal;
    line-height: 1.2;
  }
`;

// export const Icon = styled(FontAwesomeIcon)`
//   margin-right: 10px;
//   color: ${(props) => props.color || "#2468EB"};
//   font-weight: lighter;

//   @media screen and (max-width: 768px) {
//     margin-right: 5px;
//   }
// `;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  &span {
    font-weight: bold;
    font-size: 24px;
    color: #2468eb;
  }
`;

export const DashboardLayout = styled.div`
  background-color: #e5e5e5;
`;

export const SidebarLayout = styled.div`
  height: 100%;
  width: 15%;
  background-color: #e5e5e5;
`;

export const GeneralUIStyle = styled.div`
  line-height: 1.8rem;
  width: 100%;
  min-height: 100vh;
`;
