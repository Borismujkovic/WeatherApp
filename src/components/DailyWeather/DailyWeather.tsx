import React, { useContext } from "react";
import { DailyContainer } from "./style";
import { Weather } from "./DailyWeather.types";
import { WeatherContext } from "../../store/weather";
import { ForecastDay } from "../../types/types";

const DailyWeather = () => {
  const { weather } = useContext(WeatherContext);
  const dailyweather = weather?.forecast.forecastday;
  return (
    <DailyContainer>
      <h3>7-DAY FORECAST</h3>
      {dailyweather?.map((day: ForecastDay) => (
        <div className="singleDay" key={day.date_epoch}>
          <p>{day.date}</p>
          <div className="weatherType">
            <img src={day.day.condition.icon} alt="daily-weather-icon" />
            <p>{day.day.avgtemp_c}°</p>
          </div>
          <p>{`${day.day.maxtemp_c}°/${day.day.mintemp_c}°`}</p>
        </div>
      ))}
    </DailyContainer>
  );
};

export default DailyWeather;
