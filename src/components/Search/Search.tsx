import { ChangeEvent, useEffect, useState } from 'react';
import Autocomplete from "react-autocomplete";
import { cities } from '../../api/api';
import { Link } from 'react-router-dom';
import { Container } from './style';
import { Cities } from '../../types/types';

const Search = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState(cities);

  const handleSelect = (selectedValue: string) => {
    setSearch(selectedValue);
  };

  useEffect(() => {
    const filteredCities = cities.filter((city: Cities) => city?.name?.toLowerCase().includes(search?.toLowerCase()))
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
        getItemValue={(item) => item.city}
        renderItem={(item, isHighlighted: boolean) => (
          <Link to={`/${item.id}`} key={item.id}>
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
          </Link>
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