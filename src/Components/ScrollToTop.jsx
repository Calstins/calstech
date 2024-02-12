import React, { useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';

const ScrollToTop = () => {
  const [isActive, setIsActive] = useState(false);

  function showArrow() {
    if (window.scrollY > 300) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  window.addEventListener('scroll', showArrow);
  return (
    <div
      className={
        isActive
          ? 'app__scroll__to__top'
          : 'app__scroll__to__top  active__arrow'
      }
    >
      <a href="#home">
        <BsArrowUp />
      </a>
    </div>
  );
};

export default ScrollToTop;
