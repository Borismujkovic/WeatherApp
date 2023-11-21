import { hours } from "../../api/api";
import { HourlyContainer } from "./style";
import { Weather } from "./HourlyWeather.type";

const HourlyWeather = () => {
  const currentHour = new Date().getHours();

  return (
    <HourlyContainer>
      <h3>TODAY'S FORECAST</h3>
      <div className="singleHours">
        {hours.map((hour: Weather) => (
          <div className="hourly" key={hour.time}>
            {/* SEPARATE COMPONENT */}
                <span>{currentHour}h</span>
                <img src={hour.icon} alt="hourly-weather-icon" />
                <p>{hour.weather}°</p>
          </div>
        ))}
      </div>
    </HourlyContainer>
  );
};

export default HourlyWeather;
