import React, { FC } from "react";
import Container from "../Container/Container";
import Carousel from "../Carousel/Carousel";
import HeroTitle from "../HeroTitle/HeroTitle";
import { HeroSectionWrapper, HeroContainer } from "./HeroSection.styled";

interface HeroSectionProps {
  isAcc: boolean;
  showPreview: () => void;
}

const HeroSection: FC<HeroSectionProps> = ({ isAcc, showPreview }) => (
  <HeroSectionWrapper>
    <Container>
      <HeroContainer>
        <HeroTitle isAcc={isAcc} showPreview={showPreview} />
        <Carousel />
      </HeroContainer>
    </Container>
  </HeroSectionWrapper>
);

export default HeroSection;
