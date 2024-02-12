import React from 'react';
import '../Styles/analytics.scss';
import { analytics } from '../Data/data';
import OnePhone from '../Images/onephone.png';

const Analytics = () => {
  return (
    <div className="app__analytics">
      <div className="analytics__container">
        <div className="left__analytics">
          <div className="left__text">
            <h1>Okay, Let's see the analytics</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              ratione vel fugit culpa natus temporibus quasi neque blanditiis
              consectetur sequi id, accusantium ut maiores! Tempora inventore
              magni consequatur suscipit iste.
            </p>
          </div>
          <div className="left__analytics__container">
            {analytics.map((analytic, index) => (
              <div className="analytic__container" key={index}>
                <div className="analytics__icon">{analytic.desc}</div>
                <p>{analytic.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="right_analytics">
          <img src={OnePhone} alt="one phone" draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
