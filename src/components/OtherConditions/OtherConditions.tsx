import { Row, Col } from "antd";
import { ConditionsStyle } from "./style";

import { MdOutlineVisibility } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { LuSunMedium } from "react-icons/lu";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import { useContext } from "react";
import { WeatherContext } from "../../store/weather";

const OtherConditions = () => {
  const { weather } = useContext(WeatherContext);
  const currentWeather = weather?.current;

  return (
    <ConditionsStyle>
      <h3>AIR CONDITIONS</h3>
      <div>
        <Row>
          <Col lg={12} md={6}>
            <div className="condition">
              <WiHumidity />
              <div>
                <span>Humidity:</span>
                <p>{currentWeather?.humidity}%</p>
              </div>
            </div>
          </Col>
          <Col lg={12} md={6}>
            <div className="condition">
              <FaThermometerThreeQuarters />
              <div>
                <span>Pressure:</span>
                <p>{currentWeather?.pressure_mb} hPa</p>
              </div>
            </div>
          </Col>
          <Col lg={12} md={6}>
            <div className="condition">
              <MdOutlineVisibility />
              <div>
                <span>Visibility:</span>
                <p>{currentWeather?.vis_km} km</p>
              </div>
            </div>
          </Col>
          <Col lg={12} md={6}>
            <div className="condition">
              <LuSunMedium />
              <div>
                <span>UV:</span>
                <p>{currentWeather?.uv}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </ConditionsStyle>
  );
};

export default OtherConditions;
