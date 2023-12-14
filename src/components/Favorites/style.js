import styled from "styled-components";

const theme = {
  colors: {
    secondary: "#202b3b",
    white: "#FFFFFF",
  },
  text: {
    large: "2.5rem",
  },
};

export const FavoritesContainer = styled.div`
  .remove {
    display: flex;
    justify-content: end;
    button {
      cursor: pointer;
      border-radius: 1rem;
      padding: 0.3rem;
      background-color: transparent;
      color: ${theme.colors.white};
      border: none;
      margin: 0.3rem 0;
    }
    button:hover {
      background-color: ${theme.colors.secondary};
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
  .favorite-content {
    background-color: ${theme.colors.secondary};
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: ${theme.colors.white};
    font-size: 1.5rem;
  }
  .favorite-content:hover {
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);
  }
`;
