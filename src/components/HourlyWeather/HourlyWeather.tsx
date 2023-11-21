import { hours } from "../../api/api";
import { Row, Col } from "antd";
import { HourlyContainer } from "./style";
import { Weather } from "./HourlyWeather.type";

const HourlyWeather = () => {
  const currentHour = new Date().getHours();

  console.log(new Date().getHours());
  return (
    <HourlyContainer>
      <h3>TODAY'S FORECAST</h3>
      <div className="singleHours">
        {hours.map((hour: Weather) => (
          <div className="hourly" key={hour.time}>
            <Row>
              <Col lg={4} md={5}>
                <span>{currentHour}h</span>
                <img src={hour.icon} alt="hourly-weather-icon" />
                <p>{hour.weather}°</p>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </HourlyContainer>
  );
};

export default HourlyWeather;
