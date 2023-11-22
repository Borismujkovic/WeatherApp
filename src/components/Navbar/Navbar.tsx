import { FC } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Navbar } from "./style";

const NavBar: FC = () => {
  return (
    <Navbar>
      <img src="https://freesvg.org/storage/img/thumb/sivvus_weather_symbols_2.png" alt="weatherIcon" />
      <ul>
        <li>
          <NavLink to="/">
            <TiWeatherCloudy />
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink to="/map">
            <CiLocationOn />
            Map
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites">
            <AiOutlineStar />
            Favorites
          </NavLink>
        </li>
      </ul>
      </Navbar>
  );
};

export default NavBar;
