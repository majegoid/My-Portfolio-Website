import React, { useEffect, useState } from 'react';
import { DesktopTopNav } from './DesktopTopNav';
import { MobileTopNav } from './MobileTopNav';

export const TopNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleMobileWidth = () => {
      setIsMobileWidth(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleMobileWidth);
    handleMobileWidth();
    setIsLoading(false);
    return () => {
      window.removeEventListener('resize', handleMobileWidth);
    };
  }, []);

  const toggleMobileNavOpen = () => {
    setIsMobileNavOpen((curState) => !curState);
  };

  const topNavigation = isMobileWidth ? (
    <MobileTopNav
      isMobileNavOpen={isMobileNavOpen}
      toggleMobileNavOpen={toggleMobileNavOpen}
    />
  ) : (
    <DesktopTopNav/>
  );

  return topNavigation;
};
