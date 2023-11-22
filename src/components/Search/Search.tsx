import { ChangeEvent, useEffect, useMemo, useState } from "react";
import Autocomplete from "react-autocomplete";
import { cities } from "../../api/api";
import { Container } from "./style";
import { Cities } from "../../types/types";
import { getCurrentWeather } from "../../api/real-api";

const Search = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState(cities);
  const [selectedCity, setSelectedCity] = useState('')

  const handleSelect = (selectedValue: string) => {
    setSelectedCity(selectedValue);
  };

  useEffect(() => {
    const filteredCities = cities.filter((city: Cities) =>
      city.toLowerCase().includes(search?.toLowerCase())
    );
    setCity(filteredCities);
    // console.log(filteredCities);
  }, [search]);

useEffect(() => {
  console.log(selectedCity);
  getCurrentWeather(selectedCity)
}, [selectedCity])

  return (
    <Container>
      <Autocomplete
        inputProps={{
          placeholder: "Search",
        }}
        value={search}
        items={search ? city : cities}
        getItemValue={(item) => item}
        renderItem={(item, isHighlighted: boolean) => (
            <div
              key={item.id}
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
              {item.city || []}
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
