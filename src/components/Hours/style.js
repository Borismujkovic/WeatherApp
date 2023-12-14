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

export const SingleHour = styled.div`
  .hourly {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-left: 1px solid ${theme.colors.white};
    border-right: 1px solid ${theme.colors.white};
    span {
      font-size: 1.2rem;
      color: ${theme.colors.white};
    }
    img {
      height: 70px;
      width: 70px;
    }
    p {
      font-size: 1.7rem;
      color: ${theme.colors.white};
    }
  }
`;
