import { conditions } from "../../api/api";
import { Row, Col } from "antd";
import { ConditionsStyle } from "./style";
import { Conditions } from "./OtherConditions.type";
import { useQuery } from "react-query";
import { getWeather } from "../../api/real-api";

import { MdOutlineVisibility } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { LuSunMedium } from "react-icons/lu";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import Loading from "../../utils/Loading";

const OtherConditions = () => {
  const { data, isLoading, error, isError } = useQuery("weather", () => getWeather('New York'));
  const weather = data?.data;
  

  if (isLoading)
    return <Loading />;
  if (isError)
    return (
      <>
        <h2>Something went wrong...</h2>
        <p>{error?.toString()}</p>
      </>
    );


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
                  <p>{weather.current.humidity}%</p>
                </div>
              </div>
              </Col>
              <Col lg={12} md={6}>
              <div className="condition">
              <FaThermometerThreeQuarters />
                <div>
                  <span>Pressure:</span>
                  <p>{weather.current.pressure} hPa</p>
                </div>
              </div>
              </Col>
              <Col lg={12} md={6}>
              <div className="condition">
              <MdOutlineVisibility />
                <div>
                  <span>Visibility:</span>
                  <p>{weather.current.visibility} km</p>
                </div>
              </div>
              </Col>
              <Col lg={12} md={6}>
              <div className="condition">
              <LuSunMedium />
                <div>
                  <span>UV:</span>
                  <p>{weather.current.uv_index}</p>
                </div>
              </div>
              </Col>
        </Row>
      </div>
    </ConditionsStyle>
  );
};

export default OtherConditions;
