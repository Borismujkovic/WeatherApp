import React from "react";
import styles from './CurrentWeather.module.css';
import { Button } from "antd";
import { AiOutlineStar } from "react-icons/ai";

const CurrentWeather = () => {
  return (
    <div>
      <div className={styles.currentWeather}>
      <div className={styles.weatherInfo}>
        <div className={styles.currentCity}>
          <h2>Madrid</h2>
          <span>Chance of rain: 0%</span>
        </div>
        <p className={styles.temperature}>31°</p>
      </div>
      <img src="https://freesvg.org/storage/img/thumb/1364063978.png" alt="sun" />
      </div>
    <Button type="text" className={styles.favoritesBtn}>
    <AiOutlineStar />
        Add to favorites
      </Button>
    </div>
  );
};

export default CurrentWeather;
