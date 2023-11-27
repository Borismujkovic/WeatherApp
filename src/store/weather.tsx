import { PropsWithChildren, createContext, useState } from "react";
import { getCurrentWeather } from "../api/real-api";

type WeatherProps = {
  weather: any | null;
  updateWeather: (city: string) => void;
};

export const WeatherContext = createContext<WeatherProps>({
  weather: null,
  updateWeather: () => {},
});

const WeatherProvider = ({ children }: PropsWithChildren) => {
  const [weatherData, setWeatherData] = useState<any | null>(null);

  const updateWeather = async (city: string = "Belgrade") => {
    try {
      const updatedWeather = await getCurrentWeather(city);
      setWeatherData(updatedWeather?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WeatherContext.Provider value={{ weather: weatherData, updateWeather}}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
