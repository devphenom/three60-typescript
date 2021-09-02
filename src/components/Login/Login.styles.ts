import styled from "styled-components";

export const LoginWrapper = styled.section`
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media screen and (max-width: 435px) {
    width: 100%;
    padding: 40px 0;
  }

  div {
    width: 65%;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
      width: 80%;
    }

    #logo {
      display: flex;
      align-items: center;

      span {
        font-weight: bold;
        font-size: 24px;
        color: #2468eb;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      * {
        margin: 5px 0;
      }
      input {
        width: 100%;
        padding: 10px;
        display: inline-block;
        height: 40px;
        background-color: #2468eb12;
        border: 1px solid white;
        border-radius: 4px;
      }
      button {
        display: block;
        width: 100%;
        background-color: #2468eb;
        border: 1px solid white;
        border-radius: 4px;
        color: white;
        height: 40px;
        margin-top: 15px;
        cursor: pointer;
        /* border-radius: 4px; */

        :last-child {
          background-color: #2468eb12;
          color: #2468eb;
        }
      }
    }

    .account-alt {
      cursor: pointer;
      color: #2468eb;
      text-decoration: underline;
    }
    p {
      font-size: 0.8rem;
      margin-top: 10px;

      :last-child {
        color: #979ba9;
      }
    }
  }
`;
