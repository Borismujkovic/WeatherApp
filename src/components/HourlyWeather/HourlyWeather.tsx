import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../store/weather";
import Hours from "../Hours/Hours";
import { HourlyContainer } from "./style";
import type { Hour } from "../../types/types";

const HourlyWeather = () => {
  const { weather } = useContext(WeatherContext);
  const currentWeather = weather?.forecast.forecastday[0].hour;
  const currentTime = new Date().getHours();

  const getHourlyWeather = () => {
    const currentHour = weather?.current.last_updated
      ? new Date(weather?.current.last_updated).getHours()
      : null;

    const matchingForecasts = currentWeather?.filter((item: Hour) => {
      const forecastHour = new Date(item.time).getHours();
      return currentHour === forecastHour;
    });

    const index = currentWeather?.findIndex((item: Hour) => {
      return matchingForecasts?.some(
        (matchingItem) => matchingItem.time === item.time
      );
    });

    const result =
      index !== undefined ? currentWeather?.slice(index, index + 5) : [];

    return result;
  };

  const hourWeather = getHourlyWeather();

  useEffect(() => {
    getHourlyWeather();
  }, [currentTime]);

  return (
    <HourlyContainer>
      <h3>TODAY'S FORECAST</h3>
      <div className="singleHours">
        {hourWeather?.map((hour: Hour) => (
          <Hours hour={hour} key={hour.time} />
        ))}
      </div>
    </HourlyContainer>
  );
};

export default HourlyWeather;
