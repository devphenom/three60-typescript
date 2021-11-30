import styled from "styled-components";

export const AuthWrapper = styled.section`
  background-color: white;

  padding: 1.5rem;

  /* @media screen and (max-width: 435px) {
    width: 100%;
    padding: 40px 0;
  } */

  /* div { */
  /* margin-bottom: 10px;
    
    @media screen and (max-width: 768px) {
      width: 80%;
    } */

  h2,
  p {
    margin-top: 0.2rem;

    /* :last-child {
      color: #979ba9;
    } */
  }

  form {
    margin-top: 1.5rem;
    input {
      width: 100%;
      padding: 1rem;
      display: inline-block;
      height: 3rem;
      background-color: #2468eb12;
      border: 1px solid white;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
  }

  .account-alt {
    cursor: pointer;
    color: #2468eb;
    text-decoration: underline;
  }

  /* } */
`;
