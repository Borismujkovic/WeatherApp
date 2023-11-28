import { useState } from "react";
import { Hour } from "../../types/types";

const Hours = ({ hour }: { hour: Hour }) => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  return (
    <div className="hourly">
      <span>{currentHour}h</span>
      <img src={hour.condition.icon} alt="hourly-weather-icon" />
      <p>{hour.temp_c}°</p>
    </div>
  );
};

export default Hours;
