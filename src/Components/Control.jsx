import React from 'react';
import '../Styles/control.scss';
import { controls } from '../Data/data';

const Control = () => {
  return (
    <div className="feature__ctrl">
      <div className="ctrl__container">
        <div className="ctrl__text">
          <h1>Control in one place</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            aperiam culpa ducimus error, velit saepe excepturi distinctio. Quas
            quo omnis pariatur voluptatibus praesentium iure debitis!
          </p>
          <button>Start 14 days trial</button>
        </div>
        <div className="ctrl__content">
          {controls.map((control, index) => (
            <div className="ctrl" key={index}>
              <div className="ctrl__icon">
                <control.icon />
              </div>
              <div className="ctrl__text__content">
                <p>{control.name}</p>
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, aspernatur.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Control;
