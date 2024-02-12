import React from 'react';
import FeatureImg from '../Images/feature.png';
import { features } from '../Data/data';
import { TiTick } from 'react-icons/ti';
import '../Styles/feature.scss';
import Control from './Control';

const Feature = () => {
  return (
    <div className="app__feature">
      <div className="feature__container">
        <div className="left__feature">
          <img src={FeatureImg} alt="features" draggable={false} />
        </div>
        <div className="right__feature">
          <div className="right__text">
            <h1>Feature to help your team</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              ipsam quam possimus nihil quod totam perferendis fugit porro sint
              eius.
            </p>
          </div>
          <div className="feature__content">
            {features.map((feature, index) => (
              <div className="feature" key={index}>
                <TiTick />
                <div className="feature__text">
                  <p>{feature}</p>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet eum qui rem!
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Control />
    </div>
  );
};

export default Feature;
