import styled from "styled-components";

const theme ={
  colors: {
      secondary: '#202b3b',
      white: '#FFFFFF'
    },
    text: {
      large: '2.5rem',
    }
}

export const HourlyContainer = styled.div`
  background-color: ${theme.colors.secondary};
  border-radius: 1rem;
  padding: 1rem;

  .singleHours {
    display: flex;

    .hourly {
      display: flex;
      padding: 1rem;
      border-left: 1px solid ${theme.colors.white};
      border-right: 1px solid ${theme.colors.white};

      img {
        height: 70px;
        width: 70px;
      }

      p {
        font-size: 1.7rem;
        color: ${theme.colors.white};
      }
    }
  }
`;
