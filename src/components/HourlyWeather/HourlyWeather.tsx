import { useContext } from "react";
import { hours } from "../../api/api";
import { WeatherContext } from "../../store/weather";
import Hours from "../Hours/Hours";
import { HourlyContainer } from "./style";


const HourlyWeather = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <HourlyContainer>
      <h3>TODAY'S FORECAST</h3>
      <div className="singleHours">
      {hours.map((hour) => (
        <Hours hour={hour}/>
))}
      </div>
    </HourlyContainer>
  );
};

export default HourlyWeather;
