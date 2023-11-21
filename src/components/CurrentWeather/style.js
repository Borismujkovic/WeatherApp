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

export const WeatherContainer = styled.div`
.currentWeather{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    .weatherInfo{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2{
            color: ${theme.colors.white};
            font-size: ${theme.text.large};
        }
        .temperature{
            font-size: ${theme.text.large};
            color: ${theme.colors.white};
            font-weight: 700;
        }
    }
}

.favoritesBtn{
    display: flex;
    align-items: center;
    background-color: ${theme.colors.secondary};;
    color: ${theme.colors.white};
    &:hover{
        background-color: ${theme.colors.secondary}; !important;
        color: ${theme.colors.white} !important;
        border: 1px solid ${theme.colors.white};
    }
}
`;
