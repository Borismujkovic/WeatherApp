import React from 'react';
import styles from './HourlyWeather.module.css'
import { hours } from '../../api/api';
import {Row, Col} from 'antd';



const HourlyWeather = () => {
  return (
    <div className={styles.hourlyWeather}>
      <h3>TODAY'S FORECAST</h3>
      <div className={styles.singleHours}>
      {hours.map(hour => (
        <div className={styles.hourly}>
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
      
    </div>
  )
}

export default HourlyWeather
