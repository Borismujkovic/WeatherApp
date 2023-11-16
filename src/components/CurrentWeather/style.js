import styled from "styled-components";

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
            color: #FFFFFF;
            font-size: 2.5rem;
        }
        .temperature{
            font-size: 2.5rem;
            color: #FFFFFF;
            font-weight: 700;
        }
    }
}

.favoritesBtn{
    display: flex;
    align-items: center;
    background-color: #202b3b;
    color: #FFFFFF;
    &:hover{
        background-color: #202b3b !important;
        color: #FFFFFF !important;
        border: 1px solid #FFFFFF;
    }
}
`;
