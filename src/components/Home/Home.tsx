import React, { FC, ReactNode } from "react";
import { HomeWrapper } from "./Home.styled";
import Head from "next/head";

interface HomeProps {
  children: ReactNode;
}

const Home: FC<HomeProps> = ({ children }) => (
  <HomeWrapper>
    <>{children}</>
  </HomeWrapper>
);

export default Home;
