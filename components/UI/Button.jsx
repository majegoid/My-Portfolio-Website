import React from 'react';

export const Button = ({ children, onClick }) => {
  return (
    <div className='button' onClick={onClick}>
      {children}
    </div>
  );
};
