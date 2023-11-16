import React from "react";
import { Button } from "antd";
import { AiOutlineStar } from "react-icons/ai";
import { WeatherContainer } from "./style";

const CurrentWeather = () => {
  return (
    <WeatherContainer>
      <div className="currentWeather">
        <div className="weatherInfo">
          <div className="currentCity">
            <h2>Madrid</h2>
            <span>Chance of rain: 0%</span>
          </div>
          <p className="temperature">31°</p>
        </div>
        <img
          src="https://freesvg.org/storage/img/thumb/1364063978.png"
          alt="sun"
        />
      </div>
      <Button type="text" className="favoritesBtn">
        <AiOutlineStar />
        Add to favorites
      </Button>
    </WeatherContainer>
  );
};

export default CurrentWeather;
