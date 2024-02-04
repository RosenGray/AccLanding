import React, { FC, useEffect, useRef, useState } from "react";
import { HeaderWrapper, BuyMeCoffee, NavWrapper } from "./Header.styled";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <NavWrapper />
    </HeaderWrapper>
  );
};

export default Header;
