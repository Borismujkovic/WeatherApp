import { Button } from "antd";
import { AiOutlineStar } from "react-icons/ai";
import { WeatherContainer } from "./style";
import { useQuery } from "react-query";
import { getCurrentWeather } from "../../api/real-api";
import Loading from "../../utils/Loading";
import { useContext } from "react";
import { WeatherContext } from "../../store/weather";


const CurrentWeather = () => {
  // const { data, isLoading, error, isError } = useQuery("weather", () => getCurrentWeather('New York'));
  // const { data, isLoading, error, isError } = useQuery("weather", () => getFutureWeather('New York'));
  // const weather = data?.data;
  // console.log(weather);

  // const context = useContext(WeatherContainer);

  const {weather, isLoading, error, isError} = useContext(WeatherContext);
  if (!weather) {
    return <div>Loading...</div>;
  }

  console.log(weather?.data);

  

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
            <h2>{weather.data.location.name}</h2>
            <span>Feels like: {weather.data.current.feelslike_c}°</span>
          </div>
          <p className="temperature">{weather.data.current.temp_c}°</p>
        </div>
        <img
          src={weather.data.current.condition.icon}
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
