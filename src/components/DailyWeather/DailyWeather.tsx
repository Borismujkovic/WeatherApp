import React from 'react';
import styles from './DailyWeather.module.css';
import { days } from '../../api/api';

const DailyWeather = () => {
  return (
    <div className={styles.daily}>
      <h3>7-DAY FORECAST</h3>
        {days.map(day => (
          <div className={styles.singleDay} key={day.day}>
          <p>{day.day}</p>
          <div className={styles.weatherType}>
            <img src={day.icon} alt="" />
            <p>{day.weather}</p>
          </div>
          <p>{`${day.maxTemperature}/${day.minTemperature}`}</p>
      </div>
        ))}
    </div>
  )
}

export default DailyWeather
