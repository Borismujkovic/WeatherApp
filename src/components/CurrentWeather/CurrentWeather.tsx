import { FC } from "react";
import { Button } from "antd";
import { AiOutlineStar } from "react-icons/ai";
import { WeatherContainer } from "./style";
import { useQuery } from "react-query";
import { getWeather } from "../../api/real-api";
import Loading from "../../utils/Loading";


const CurrentWeather: FC = () => {
  const { data, isLoading, error, isError } = useQuery("weather", () => getWeather('New York'));
  const weather = data?.data;
  

  if (isLoading)
    return <Loading />;
  if (isError)
    return (
      <>
        <h2>Something went wrong...</h2>
        <p>{error?.toString()}</p>
      </>
    );

  return (
    <WeatherContainer>
      <div className="currentWeather">
        <div className="weatherInfo">
          <div className="currentCity">
            <h2>{weather.location.name}</h2>
            <span>Feels like: {weather.current.feelslike}°</span>
          </div>
          <p className="temperature">{weather.current.temperature}°</p>
        </div>
        <img
          src={weather.current.weather_icons}
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
