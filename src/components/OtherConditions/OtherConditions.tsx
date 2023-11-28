import { Row, Col } from "antd";
import { ConditionsStyle } from "./style";

import { MdOutlineVisibility } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { LuSunMedium } from "react-icons/lu";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import Loading from "../../utils/Loading";
import { useContext } from "react";
import { WeatherContext } from "../../store/weather";

const OtherConditions = () => {
  const {weather} = useContext(WeatherContext);

  if (!weather) {
    return <Loading />;
  }

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
                  <p>{weather?.current.humidity}%</p>
                </div>
              </div>
              </Col>
              <Col lg={12} md={6}>
              <div className="condition">
              <FaThermometerThreeQuarters />
                <div>
                  <span>Pressure:</span>
                  <p>{weather?.current.pressure_mb} hPa</p>
                </div>
              </div>
              </Col>
              <Col lg={12} md={6}>
              <div className="condition">
              <MdOutlineVisibility />
                <div>
                  <span>Visibility:</span>
                  <p>{weather?.current.vis_km} km</p>
                </div>
              </div>
              </Col>
              <Col lg={12} md={6}>
              <div className="condition">
              <LuSunMedium />
                <div>
                  <span>UV:</span>
                  <p>{weather?.current.uv}</p>
                </div>
              </div>
              </Col>
        </Row>
      </div>
    </ConditionsStyle>
  );
};

export default OtherConditions;
