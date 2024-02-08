import React from 'react';
import '../Styles/home.scss';
import { TiTick } from 'react-icons/ti';

const Home = () => {
  return (
    <div className="app__home">
      <div className="home__text">
        <h1>
          Make Your Business <br /> More Powerful
        </h1>
      </div>
      <div className="ticks__container">
        <p>
          <span>
            <TiTick />
          </span>
          Lifetime Support
        </p>
        <p>
          <span>
            <TiTick />
          </span>
          No NCC Register
        </p>
      </div>
      <div className="input__container">
        <input type="text" name="" id="" placeholder="Input your email" />
        <button>Try for free</button>
      </div>
    </div>
  );
};

export default Home;
