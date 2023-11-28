import { PropsWithChildren, createContext, useState } from "react";
import { getCurrentWeather } from "../api/service";
import { Weather } from "../types/types";

type WeatherProps = {
  weather: Weather | null;
  updateWeather: (city: string) => void;
};

export const WeatherContext = createContext<WeatherProps>({
  weather: null,
  updateWeather: () => {},
});

const WeatherProvider = ({ children }: PropsWithChildren) => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

  const updateWeather = async (city: string) => {
    try {
      const updatedWeather = await getCurrentWeather(city);
      setWeatherData(updatedWeather);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <WeatherContext.Provider value={{ weather: weatherData, updateWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
