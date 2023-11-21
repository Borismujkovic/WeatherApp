import styled from "styled-components";

const theme ={
  colors: {
      secondary: '#202b3b',
      white: '#FFFFFF'
    },
    text: {
      large: '2.5rem',
      small: '1rem'
    }
}

export const DailyContainer = styled.div`
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.text.small};
  padding: ${theme.text.small};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .singleDay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.white};

    img {
      width: 50px;
      height: 50px;
    }

    .weatherType {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    p {
      font-size: ${theme.text.small};
      color: ${theme.colors.white};
      font-weight: 600;
    }
  }
`;
