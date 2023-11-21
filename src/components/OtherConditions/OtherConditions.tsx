import { conditions } from "../../api/api";
import { Row, Col } from "antd";
import { ConditionsStyle } from "./style";
import { Conditions } from "./OtherConditions.type";
import { useQuery } from "react-query";
import { getWeather } from "../../api/real-api";
import loader from "../../assets/infinite-spinner.svg";

const OtherConditions = () => {
  const { data, isLoading, error, isError } = useQuery("weather", () => getWeather('New York'));
  

  if (isLoading)
    return <img src={loader} alt="Loading..." width={50} height={50} />;
  if (isError)
    return (
      <>
        <h2>Something went wrong...</h2>
        <p>{error?.toString()}</p>
      </>
    );

    const weather = data?.data;

  return (
    <ConditionsStyle>
      <h3>AIR CONDITIONS</h3>
      <div>
        <Row>
          <Col lg={12} md={6}>
          <div className="condition">
                <img src={loader} alt="conditions-icon" />
                <div>
                  <span>Humidity:</span>
                  <p>{weather.current.humidity}°</p>
                </div>
              </div>
              </Col>
              <Col lg={12} md={6}>
              <div className="condition">
                <img src={loader} alt="conditions-icon" />
                <div>
                  <span>Pressure:</span>
                  <p>{weather.current.pressure}°</p>
                </div>
              </div>
              </Col>
              <Col lg={12} md={6}>
              <div className="condition">
                <img src={loader} alt="conditions-icon" />
                <div>
                  <span>Visibility:</span>
                  <p>{weather.current.visibility}°</p>
                </div>
              </div>
              </Col>
              <Col lg={12} md={6}>
              <div className="condition">
                <img src={loader} alt="conditions-icon" />
                <div>
                  <span>UV:</span>
                  <p>{weather.current.uv_index}°</p>
                </div>
              </div>
              </Col>
        </Row>
      </div>
    </ConditionsStyle>
  );
};

export default OtherConditions;
