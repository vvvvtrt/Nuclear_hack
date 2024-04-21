import React from 'react';

const ScalablePoint = ({ x, y, size, handleClick }) => {
  return (
    <circle
      cx={x}
      cy={y}
      r={size}
      fill="blue"
      onClick={handleClick}
    />
  );
};

export default ScalablePoint;
