import React from 'react';
import '../Styles/distribution.scss';
import { BsApple } from 'react-icons/bs';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import TwoPhones from '../Images/twophones.png';

const Distribution = () => {
  return (
    <div className="app__distribution">
      <div className="distribution__container">
        <div className="left__distribution">
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
        </div>
        <div className="right__distribution">
          <img src={TwoPhones} alt="mobil view" draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default Distribution;
