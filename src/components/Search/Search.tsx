import { ChangeEvent, useContext, useEffect, useState } from "react";
import Autocomplete from "react-autocomplete";
import { cities } from "../../api/api";
import { Container } from "./style";
import { Cities } from "../../types/types";
import { WeatherContext } from "../../store/weather";
import { getUserLocation } from "../../api/service";

const Search = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState(cities);
  const [selectedCity, setSelectedCity] = useState("Belgrade");
  const [userLocation, setUserlocation] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { updateWeather } = useContext(WeatherContext);

  const handleSelect = (selectedValue: string) => {
    setSelectedCity(selectedValue);
  };

  useEffect(() => {
    const filteredCities = cities.filter((city: Cities) =>
      city.toLowerCase().includes(search?.toLowerCase())
    );
    setCity(filteredCities);
  }, [search]);

  useEffect(() => {
    updateWeather(selectedCity);
  }, [selectedCity]);


  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const currentLocation = await getUserLocation(latitude, longitude);
        setUserlocation(currentLocation?.properties?.city);
      },
      (err) => {
        setError(`Error getting location: ${err.message}`);
      }
    );
  }, []);

  useEffect(() => {
    updateWeather(userLocation);
  }, [userLocation]);

  return (
    <Container>
      <Autocomplete
        inputProps={{
          placeholder: "Search",
        }}
        value={search}
        items={search ? city : cities}
        getItemValue={(item: string) => item}
        renderItem={(item: string, isHighlighted: boolean) => (
          <div
            key={item}
            style={{
              background: isHighlighted ? "lightgray" : "white",
              padding: "10px",
              fontWeight: "700",
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
              borderBottom: "1px solid #282c34",
            }}
          >
            {item || []}
          </div>
        )}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearch(event.target.value)
        }
        onSelect={handleSelect}
        menuStyle={{
          position: "fixed",
          backgroundColor: "black",
          zIndex: 9999,
          maxHeight: "200px",
          overflow: "auto",
        }}
      />
    </Container>
  );
};

export default Search;
