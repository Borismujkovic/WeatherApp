import { PropsWithChildren, createContext, useState } from "react";
import { getCurrentWeather } from "../api/service";
import { Weather } from "../types/types";

type WeatherProps = {
  weather: Weather | null;
  updateWeather: (city: string) => void;
  favorite: string[];
  favoriteCityHandler: (city: string) => void;
  deleteFavoriteCityHandler: (city: string) => void;
};

export const WeatherContext = createContext<WeatherProps>({
  weather: null,
  updateWeather: () => {},
  favorite: [],
  favoriteCityHandler: () => {},
  deleteFavoriteCityHandler: () => {},
});

const WeatherProvider = ({ children }: PropsWithChildren) => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [favoriteCity, setFavoriteCity] = useState<string[]>([]);

  const updateWeather = async (city: string) => {
    try {
      const updatedWeather = await getCurrentWeather(city);
      setWeatherData(updatedWeather);
    } catch (error) {
      console.log(error);
    }
  };

  const favoriteCityHandler = (city: string) => {
    if(!favoriteCity.includes(city)) {
      setFavoriteCity(prevCities => [...prevCities, city]);
    } else {
      setFavoriteCity(favoriteCity.filter(cities => cities !== city));
    }
  }

  const deleteFavoriteCityHandler = (city: string) => {
    const cityToRemove = favoriteCity.indexOf(city);
    favoriteCity.splice(cityToRemove, 1);
  }


  return (
    <WeatherContext.Provider value={{ weather: weatherData, updateWeather, favorite: favoriteCity, favoriteCityHandler, deleteFavoriteCityHandler }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
