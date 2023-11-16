import styled from "styled-components";

export const HourlyContainer = styled.div`
  background-color: #202b3b;
  border-radius: 1rem;
  padding: 1rem;

  .singleHours {
    display: flex;

    .hourly {
      display: flex;
      padding: 1rem;
      border-left: 1px solid #FFFFFF;
      border-right: 1px solid #FFFFFF;

      img {
        height: 70px;
        width: 70px;
      }

      p {
        font-size: 1.7rem;
        color: #FFFFFF;
      }
    }
  }
`;
