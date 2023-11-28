import Search from "../components/Search/Search";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import HourlyWeather from "../components/HourlyWeather/HourlyWeather";
import OtherConditions from "../components/OtherConditions/OtherConditions";
import { useEffect, useState } from "react";
import { getCurrentWeather } from "../api/service";

const Landing = () => {
  return (
    <div className="landing">
      <Search/>
      <CurrentWeather/>
      <HourlyWeather />
      <OtherConditions />
    </div>
  );
};

export default Landing;
