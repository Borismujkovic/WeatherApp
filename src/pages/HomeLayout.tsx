import React from "react";
import Header from "../components/Header/Header";
import { Row, Col } from "antd";
import NavBar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import DailyWeather from "../components/DailyWeather/DailyWeather";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <div className="homeLayout">
        <Row>
          <Col lg={3} md={4} sm={5} xs={24}>
            <NavBar />
          </Col>
          <Col lg={13} md={12} sm={6} xs={24} offset={1}>
            <Outlet />
          </Col>
          <Col lg={6} md={6} sm={3} xs={24} offset={1}>
            <DailyWeather />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeLayout;
