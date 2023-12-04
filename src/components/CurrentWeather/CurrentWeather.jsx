import { FC, useEffect } from "react";
import { Button } from "antd";
import { AiOutlineStar } from "react-icons/ai";
import { WeatherContainer } from "./style";
import Loading from "../../utils/Loading";
import { useContext } from "react";
import { WeatherContext } from "../../store/weather";

const CurrentWeather = () => {
  const { weather, favoriteCityHandler, favorite } = useContext(WeatherContext);
  useEffect(() => {
    console.log(favorite);
  }, [favorite]);
  
  if (!weather) {
    return <Loading />;
  }
  
  

  return (
    <WeatherContainer>
      <div className="currentWeather">
        <div className="weatherInfo">
          <div className="currentCity">
            <h2>{weather.location.name}</h2>
            <span>Feels like: {weather.current.feelslike_c}°</span>
          </div>
          <p className="temperature">{weather.current.temp_c}°</p>
        </div>
        <img src={weather.current.condition.icon} alt="sun" />
      </div>
      <Button
        type="text"
        className="favoritesBtn"
        onClick={() => favoriteCityHandler(weather.location.name)}
      >
        <AiOutlineStar />
        Add to favorites
      </Button>
    </WeatherContainer>
  );
};

export default CurrentWeather;
