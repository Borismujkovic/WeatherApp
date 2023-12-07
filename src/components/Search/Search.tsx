import React, { useState, useEffect, useContext } from "react";
import { Container } from "./style";
import { WeatherContext } from "../../store/weather";
import { getUserLocation } from "../../api/service";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [userLocation, setUserlocation] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { updateWeather } = useContext(WeatherContext);

  const handleChange = (newAddress: any) => {
    setSearch(newAddress);
  };

  const handleSelection = (selected: any) => {
    geocodeByAddress(selected)
      .then((results) => getLatLng(results[0]))
      .then(async (latLng) => {
        const currentLocation = await getUserLocation({
          latitude: latLng.lat,
          longitude: latLng.lng,
        });
        setSelectedCity(currentLocation?.properties?.city);
        setSearch("");
      })
      .catch((error) => console.error("Error", error));
  };

  const handleUserLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const currentLocation = await getUserLocation({
          latitude,
          longitude,
        });
        setUserlocation(currentLocation?.properties?.city);
      },
      (err) => {
        setError(`Error getting location: ${err.message}`);
      }
    );
  };

  useEffect(() => {
    if (selectedCity || userLocation) {
      updateWeather(selectedCity || userLocation);
    }
  }, [userLocation, selectedCity]);

  useEffect(() => {
    handleUserLocation();
  }, []);

  return (
    <Container>
      <div>
        <PlacesAutocomplete
          value={search}
          onChange={handleChange}
          onSelect={handleSelection}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Enter your address",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? {
                        backgroundColor: "#c9c9c9",
                        cursor: "pointer",
                        border: "1px solid black",
                        padding: "0.2rem",
                        fontSize: "1rem",
                        color: "black",
                      }
                    : {
                        backgroundColor: "#fafafa",
                        cursor: "pointer",
                        border: "1px solid black",
                        padding: "0.2rem",
                        fontSize: "1rem",
                        color: "black",
                      };

                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        style,
                      })}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
      <div onClick={handleUserLocation}>
        <img
          src="https://freesvg.org/storage/img/thumb/ts-map-pin.png"
          alt="User location"
          width={30}
        />
      </div>
    </Container>
  );
};

export default Search;
