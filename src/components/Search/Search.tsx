import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import Autocomplete from "react-autocomplete";
import { cities } from '../../api/api';
import { Container } from './style';

const Search: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [city, setCity] = useState<string[]>(cities);

  const handleSelect = (selectedValue: string) => {
    setSearch(selectedValue);
  };

  useEffect(() => {
    const filteredCities = cities.filter((city: string) => city?.toLowerCase().includes(search?.toLowerCase()))
    setCity(filteredCities);
  }, [search]);

  return (
    <Container>
      <Autocomplete
        inputProps={{
          placeholder: "Search",
        }}
        value={search}
        items={
          search ? city : []
        }
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
        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
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
  )
}

export default Search;