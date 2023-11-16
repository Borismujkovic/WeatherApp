import React from "react";
import styles from "./OtherConditions.module.css";
import { conditions } from "../../api/api";
import {Row, Col} from 'antd';

const OtherConditions = () => {
  return (
    <div className={styles.conditions}>
      <h3>AIR CONDITIONS</h3>
      <div className={styles.singleCondition}>
        <Row>
        {conditions.map((condition) => (
        <Col lg={12} md={6} key={condition.title}>
          <div className={styles.condition}>
            <img src={condition.icon} alt="" />
            <div>
              <span>{condition.title}</span>
              <p>{condition.weather}°</p>
            </div>
          </div>
        </Col>
        ))}
        </Row>
      </div>
    </div>
  );
};

export default OtherConditions;
