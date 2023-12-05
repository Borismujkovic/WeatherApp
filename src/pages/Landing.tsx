import Search from "../components/Search/Search";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import HourlyWeather from "../components/HourlyWeather/HourlyWeather";
import OtherConditions from "../components/OtherConditions/OtherConditions";

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
