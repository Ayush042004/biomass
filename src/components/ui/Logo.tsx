import React from 'react';
import logo from '../../assets/logo.svg';
import logo2 from '../../assets/NATURE BIOWORKS LOGO2.jpg';

interface LogoProps {
  size?: number;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 150 }) => {
  return <img src={logo2} alt="Nature Biomass Logo" width={size} height={size} />;
};

export default Logo;