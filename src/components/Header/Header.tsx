import React from "react";
import styles from "./Header.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to='/'>
      <h1>Floyd MayWeather App</h1>
      </NavLink>
      <NavLink to="/login">
      <Button type="text" className={styles.btn}>
        <AiOutlineUser />
        LogIn/Register
      </Button>
          </NavLink>
    </div>
  );
};

export default Header;
