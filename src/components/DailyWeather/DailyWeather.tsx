import React, { useContext } from 'react';
import { days } from '../../api/api';
import { DailyContainer } from './style';
import { Weather } from './DailyWeather.types';
import { WeatherContext } from '../../store/weather';

const DailyWeather = () => {
  const {weather} = useContext(WeatherContext);
  const dailyweather = weather?.forecast.forecastday;

  return (
    <DailyContainer>
      <h3>7-DAY FORECAST</h3>
        {dailyweather?.map((day: any) => (
          <div className="singleDay" key={day.day}>
          <p>{day.date}</p>
          <div className="weatherType">
            <img src={day.day.condition.icon} alt="daily-weather-icon" />
            <p>{day.day.avgtemp_c}°</p>
          </div>
          <p>{`${day.day.maxtemp_c}°/${day.day.mintemp_c}°`}</p>
      </div>
        ))}
    </DailyContainer>
  )
}

export default DailyWeather
