import { FC, useContext, useEffect, useState } from "react";
import { FavoritesContainer } from "./style";
import { WeatherContext } from "../../store/weather";
import { useNavigate } from "react-router-dom";

const Favorites: FC = () => {
  const { favorite, updateWeather, deleteFavoriteCityHandler } =
    useContext(WeatherContext);
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState<string[]>(favorite || []);

  useEffect(() => {
    setFavorites(favorite || []);
  }, [favorite]);

  const handleFavoriteWeather = (city: string): void => {
    updateWeather(city);
    navigate("/");
  };

  const handleDeleteFavoriteCity = (city: string): void => {
    deleteFavoriteCityHandler(city);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favoriteCity) => favoriteCity !== city)
    );
  };

  return (
    <FavoritesContainer>
      <h1>Favorites Page</h1>
      {favorites?.map((city) => (
        <div key={city}>
          <div className="remove">
            <button onClick={() => handleDeleteFavoriteCity(city)}>X</button>
          </div>
          <div
            className="favorite-content"
            onClick={() => handleFavoriteWeather(city)}
          >
            <h2>{city}</h2>
            <p>31°</p>
          </div>
        </div>
      ))}
    </FavoritesContainer>
  );
};

export default Favorites;
