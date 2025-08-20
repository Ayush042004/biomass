import React from 'react';
import logo from '../../assets/nbw.png';

interface LogoProps {
  size?: number;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ size}) => {
  return <img src={logo} alt="Nature Biomass Logo" width= {size} height= {size} />;
};

export default Logo;