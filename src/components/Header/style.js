import styled from "styled-components";

const theme = {
  colors: {
    primary: "#0b131e",
    secondary: "#202b3b",
    white: "#FFFFFF",
  },
};

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.secondary};
  padding: 1rem 1.5rem;
  align-items: center;
  a {
    color: ${theme.colors.white};
    text-decoration: none;
  }
  .btn {
    color: ${theme.colors.white};
    &:hover {
      color: ${theme.colors.white} !important;
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
  }
`;
