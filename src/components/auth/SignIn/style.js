import styled from "styled-components";

const theme = {
  colors: {
    primary: "#0b131e",
    secondary: "#202b3b",
    white: "#FFFFFF",
  },
};

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .loginContent {
    background-color: ${theme.colors.secondary};
    padding: 2rem;
    border-radius: 1rem;
    width: 35%;
    box-shadow: 0 0.5rem 2rem 0 ${theme.colors.secondary};

    h1 {
      text-align: center;
    }

    .input {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      margin: 0.3rem;

      input {
        background-color: ${theme.colors.primary};
        border: none;
        border-radius: 1rem;
        font-size: 1.2rem;
        padding: 0.5rem;
        color: ${theme.colors.white};
      }
    }

    .loginBtn {
      text-align: center;

      .submit {
        font-size: 1rem;
        height: 32px;
        padding: 0.3rem 1rem;
        border-radius: 0.4rem;
        background-color: transparent;
        border: 1px solid ${theme.colors.white};
        color: ${theme.colors.white};
        cursor: pointer;
        margin: 1rem auto;
        &:hover {
          background-color: ${theme.colors.primary};
        }
      }
    }

    .account {
      text-align: center;
      a {
        color: ${theme.colors.white};
        font-weight: 700;
        cursor: pointer;
        display: block;
      }
      .submit {
        font-size: 1rem;
        height: 32px;
        padding: 0.3rem 1rem;
        border-radius: 0.4rem;
        background-color: transparent;
        border: 1px solid ${theme.colors.white};
        color: ${theme.colors.white};
        cursor: pointer;
        margin: 0.5rem 0;
        &:hover {
          background-color: ${theme.colors.primary};
        }
      }
    }
  }
`;
