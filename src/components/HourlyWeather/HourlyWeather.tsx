import { useContext } from "react";
import { WeatherContext } from "../../store/weather";
import Hours from "../Hours/Hours";
import { HourlyContainer } from "./style";
import { Hour } from "../../types/types";

const HourlyWeather = () => {
  const { weather } = useContext(WeatherContext);
  const currentWeather = weather?.forecast.forecastday[0].hour.slice(19);

  return (
    <HourlyContainer>
      <h3>TODAY'S FORECAST</h3>
      <div className="singleHours">
        {currentWeather?.map((hour: Hour) => (
          <Hours hour={hour} key={hour.time} />
        ))}
      </div>
    </HourlyContainer>
  );
};

export default HourlyWeather;
