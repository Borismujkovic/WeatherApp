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

export const HourlyContainer = styled.div`
  background-color: ${theme.colors.secondary};
  border-radius: 1rem;
  padding: 1rem;

  .singleHours {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
