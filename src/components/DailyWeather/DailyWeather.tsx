import React from 'react';
import { days } from '../../api/api';
import { DailyContainer } from './style';

const DailyWeather = () => {
  return (
    <DailyContainer>
      <h3>7-DAY FORECAST</h3>
        {days.map(day => (
          <div className='singleDay' key={day.day}>
          <p>{day.day}</p>
          <div className='weatherType'>
            <img src={day.icon} alt="" />
            <p>{day.weather}</p>
          </div>
          <p>{`${day.maxTemperature}/${day.minTemperature}`}</p>
      </div>
        ))}
    </DailyContainer>
  )
}

export default DailyWeather
