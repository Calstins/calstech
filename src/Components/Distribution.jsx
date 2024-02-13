import React, { useEffect } from 'react';
import '../Styles/distribution.scss';
import { BsApple } from 'react-icons/bs';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import TwoPhones from '../Images/twophones.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Distribution = () => {
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
    <div className="app__distribution">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="distribution__container"
      >
        <motion.div variants={item1} className="left__distribution">
          <div className="distribution__text">
            <h1>D'task also works on your phone</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              adipisci debitis quam harum distinctio id accusamus nihil.
            </p>
          </div>
          <div className="distribution__buttons">
            <button>
              <BsApple />
              Download App
            </button>
            <button>
              <IoLogoGooglePlaystore />
              Download App
            </button>
          </div>
        </motion.div>
        <motion.div variants={item2} className="right__distribution">
          <img src={TwoPhones} alt="mobil view" draggable={false} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Distribution;
