import React, { FC } from 'react';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { LogoWrapper } from './Logo.styled';

interface LogoProps {}

const Logo: FC<LogoProps> = () => (
 <LogoWrapper>
   <AccessibleIcon/>
 </LogoWrapper>
);

export default Logo;
