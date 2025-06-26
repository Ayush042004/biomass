import React from 'react';
import logo from '../../assets/logo.svg';

interface LogoProps {
  size?: number;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40 }) => {
  return <img src={logo} alt="Nature Biomass Logo" width={size} height={size} />;
};

export default Logo;