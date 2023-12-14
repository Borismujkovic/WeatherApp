import { useState } from "react";
import { Hour } from "../../types/types";
import { SingleHour } from "./style";

const Hours = ({ hour }: { hour: Hour }) => {
  const currentHour = new Date(hour.time).getHours();

  return (
    <SingleHour>
      <div className="hourly">
        <span>{currentHour}h</span>
        <img src={hour.condition.icon} alt="hourly-weather-icon" />
        <p>{hour.temp_c}°</p>
      </div>
    </SingleHour>
  );
};

export default Hours;
