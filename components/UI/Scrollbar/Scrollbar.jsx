import React, { useState, useEffect } from 'react';

// import { scrollBar, slider } from './Scrollbar.module.css';

const Scrollbar = ({ containerRef, scrollComponent }) => {
  const [scrollAmountY, setScrollAmountY] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  console.log(containerRef);

  let minHeight = 0;
  let maxHeight = containerRef?.current?.scrollHeight;

  //handle window resize events
  //capture the starting window height and the window height if it ever changes.
  useEffect(() => {
    const handleWindowResize = () => {
      setInnerHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  //handle wheelDeltaY
  useEffect(() => {
    const handleScroll = (e) => {
      if (e !== undefined) {
        const scrollChange = e.wheelDeltaY;

        setScrollAmountY((curScrollAmountY) => {
          const newScrollHeight = curScrollAmountY - scrollChange;
          if (newScrollHeight < minHeight) {
            return minHeight;
          }
          if (newScrollHeight > maxHeight) {
            return maxHeight;
          }
          return newScrollHeight;
        });
      }
    };
    window.addEventListener('wheel', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  let scrollBarOffsetY = 50;
  let scrollBarHeight = innerHeight - scrollBarOffsetY;

  let sliderScrollPercentage = scrollAmountY / maxHeight;
  // console.log(`sliderScrollPercentage: ${sliderScrollPercentage * 100}%`);

  let sliderHeight = (scrollBarHeight / maxHeight) * scrollBarHeight;

  let sliderPosY = sliderScrollPercentage * (scrollBarHeight - sliderHeight);

  let scrollBar = {
    zIndex: `1000`,
    display: `inline-block`,
    position: `absolute`,
    top: `50px`,
    right: `0px`,
    height: `${scrollBarHeight}px`,
    width: `10px`,
    backgroundColor: `magenta`,
  };

  let slider = {
    zIndex: `1000`,
    display: `inline-block`,
    position: `absolute`,
    top: `${sliderPosY}px`,
    right: `0px`,
    height: `${sliderHeight}px`,
    width: `10px`,
    backgroundColor: `lime`,
  };

  scrollComponent(sliderScrollPercentage);

  return (
    <div style={scrollBar}>
      <div style={slider} />
    </div>
  );
};

export default Scrollbar;
