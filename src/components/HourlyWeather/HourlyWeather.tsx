import React from 'react';
import styles from './HourlyWeather.module.css'
import { hours } from '../../api/api';
import {Row, Col} from 'antd';
import { HourlyContainer } from './style';



const HourlyWeather = () => {
  return (
    <HourlyContainer>
      <h3>TODAY'S FORECAST</h3>
      <div className='singleHours'>
      {hours.map(hour => (
        <div className='hourly' key={hour.time}>
        <Row>
        <Col lg={4} md={5}>
          <span>{hour.time}</span>
          <img src={hour.icon} alt="" />
          <p>{hour.weather}°</p>
        </Col>
      </Row>
        </div>
      ))}
      </div>
      </HourlyContainer>
  )
}

export default HourlyWeather
