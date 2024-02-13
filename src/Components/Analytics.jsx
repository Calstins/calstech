import React, { useEffect } from 'react';
import '../Styles/analytics.scss';
import { analytics } from '../Data/data';
import OnePhone from '../Images/onephone.png';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Analytics = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  const list = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const item1 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const item2 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <div className="app__analytics">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="analytics__container"
      >
        <motion.div variants={item1} className="left__analytics">
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
        </motion.div>
        <motion.div variants={item2} className="right_analytics">
          <img src={OnePhone} alt="one phone" draggable={false} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Analytics;
