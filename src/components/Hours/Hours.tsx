import { useState } from "react";

const Hours = ({hour}: {hour: any}) => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  
  return (
        <div className="hourly">
          <span>{currentHour}h</span>
          <img src={hour.icon} alt="hourly-weather-icon" />
          <p>{hour.weather}°</p>
        </div>
  );
};

export default Hours;
