/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import styles from "./Navbar.module.css";
import { TiWeatherCloudy } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Navbar } from "./style";

const NavBar = () => {
  return (
    <Navbar>
      <img src="https://freesvg.org/storage/img/thumb/sivvus_weather_symbols_2.png" alt="" />
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
