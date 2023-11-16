import styled from "styled-components";

export const DailyContainer = styled.div`
  background-color: #202b3b;
  border-radius: 1rem;
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .singleDay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ffffff;

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
      font-size: 1rem;
      color: #ffffff;
      font-weight: 600;
    }
  }
`;
