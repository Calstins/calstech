import React, { useEffect } from 'react';
import '../Styles/control.scss';
import { controls } from '../Data/data';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Control = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },

    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={control}
      className="feature__ctrl"
    >
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
    </motion.div>
  );
};

export default Control;
