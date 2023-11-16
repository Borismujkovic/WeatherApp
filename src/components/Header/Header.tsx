import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <h1>Floyd MayWeather App</h1>
      </NavLink>
      <NavLink to="/login">
        <Button type="text" className='btn'>
          <AiOutlineUser />
          LogIn/Register
        </Button>
      </NavLink>
    </HeaderContainer>
  );
};

export default Header;
