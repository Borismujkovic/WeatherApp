import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .loginContent {
    background-color: #202b3b;
    padding: 2rem;
    border-radius: 1rem;
    width: 35%;
    box-shadow: 0 0.5rem 2rem 0 #202b3b;

    .input {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      margin: 0.3rem;

      input {
        background-color: #0b131e;
        border: none;
        border-radius: 1rem;
        font-size: 1.2rem;
        padding: 0.5rem;
        color: #FFFFFF;
      }
    }

    .loginBtn {
      text-align: center;

      .submit {
        font-size: 14px;
        height: 32px;
        padding: 4px 15px;
        border-radius: 6px;
        background-color: transparent;
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
        cursor: pointer;
        margin: 1rem auto;
        &:hover {
          background-color: #0b131e;
        }
      }
    }

    .account {
      text-align: center;
      a {
        color: #FFFFFF;
        font-weight: 700;
        cursor: pointer;
      }
      .submit {
        font-size: 14px;
        height: 32px;
        padding: 4px 15px;
        border-radius: 6px;
        background-color: transparent;
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
        cursor: pointer;
        margin: 1rem auto;
        &:hover {
          background-color: #0b131e;
        }
      }
    }
  }

  .submit {
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
    background-color: transparent;
    border: 1px solid #FFFFFF-color;
    color: #FFFFFF;
    cursor: pointer;
    margin: 1rem auto;
  }

  .account {
    text-align: center;
  }

  .account a {
    color: #FFFFFF-color;
    font-weight: 700;
    cursor: pointer;
  }
`;
