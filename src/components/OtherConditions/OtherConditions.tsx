import React from "react";
import { conditions } from "../../api/api";
import {Row, Col} from 'antd';
import { Conditions } from "./style";

const OtherConditions = () => {
  return (
    <Conditions>
      <h3>AIR CONDITIONS</h3>
      <div>
        <Row>
        {conditions.map((condition) => (
        <Col lg={12} md={6} key={condition.title}>
          <div className='condition'>
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
      </Conditions>
  );
};

export default OtherConditions;
