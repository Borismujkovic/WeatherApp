import styled from "styled-components";

const theme = {
  colors: {
    secondary: "#202b3b",
    white: "#FFFFFF",
  },
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 1rem;
    background-color: ${theme.colors.secondary};
    border: none;
    color: ${theme.colors.white};
    letter-spacing: 1px;
    font-weight: 700;
  }

  img {
    cursor: pointer;
    padding: 0.1rem;
  }
  img:hover {
    background-color: ${theme.colors.secondary};
    border-radius: 50%;
  }
`;
