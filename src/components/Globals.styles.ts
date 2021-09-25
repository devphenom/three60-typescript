import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineIcon from "react-lineicons";
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

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: ${(props) => props.color || "#2468EB "};

  @media screen and (max-width: 768px) {
    margin-right: 5px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  &span {
    font-weight: bold;
    font-size: 24px;
    color: #2468eb;
  }
`;
