import styled from "styled-components";

export const AuthWrapper = styled.section`
  background-color: white;
  padding: 1.5rem;

  h2,
  p {
    margin-top: 0.2rem;
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

  @media screen and (min-width: 550px) {
    padding: 1.5rem 5rem;
  }
  @media screen and (min-width: 850px) {
    flex-basis: 50%;
  }
`;
