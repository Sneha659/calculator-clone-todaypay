import React from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

const Confetti = () => {
  return (
    <ConfettiExplosion
      force={0.6}
      duration={1500}
      particleCount={200}
      width={1600}
      colors={['#ff0', '#ff6', '#f66', '#ff0', '#ff6', '#f66']}
    />
  );
};

export default Confetti;
