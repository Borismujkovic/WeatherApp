import { Button } from "antd";
import { AiOutlineStar } from "react-icons/ai";
import { WeatherContainer } from "./style";
import { useQuery } from "react-query";
import { getWeather } from "../../api/real-api";
import loader from "../../assets/infinite-spinner.svg";


const CurrentWeather = () => {
  const { data, isLoading, error, isError } = useQuery("weather", () => getWeather('New York'));
  

  if (isLoading)
    return <img src={loader} alt="Loading..." width={50} height={50} />;
  if (isError)
    return (
      <>
        <h2>Something went wrong...</h2>
        <p>{error?.toString()}</p>
      </>
    );

    const weather = data?.data;

  console.log(data?.data);

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
