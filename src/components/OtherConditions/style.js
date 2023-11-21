import styled from "styled-components";

const theme = {
  colors: {
    secondary: "#202b3b",
    white: "#FFFFFF",
  },
};

export const ConditionsStyle = styled.div`
  background-color: ${theme.colors.secondary};
  border-radius: 1rem;
  padding: 1rem;
  img {
    width: 50px;
    height: 50px;
  }
  .condition {
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem;
    span {
      font-size: 1.3em;
    }
    svg {
      width: 8%;
      height: 8%;
    }
    p {
      font-size: 1.5rem;
      color: ${theme.colors.white};
    }
  }
`;
