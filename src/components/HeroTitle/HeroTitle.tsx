import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import {
  HeroTitleWrapper,
  Title,
  Content,
  ContentItem,
  ButtonsContainer,
} from "./HeroTitle.styled";
import Button from "../Button/Button.styled";

interface HeroTitleProps {
  isAcc: boolean;
  showPreview: () => void;
}

const HeroTitle: FC<HeroTitleProps> = ({ isAcc, showPreview }) => {
  const { t } = useTranslation("home");
  const titleArray = t("homeTitle").split(" ");
  const renderTitle = () => {
    return titleArray.map((str) => <span key={str}>{str}</span>);
  };

  return (
    <HeroTitleWrapper>
      <Title>{renderTitle()}</Title>

      <Content>
        <ContentItem>
          <h4>Free</h4>
          <p>No sign-ups or email required. IT IS FREE!!!</p>
        </ContentItem>
        <ContentItem>
          <h4>It Is Easy To Install</h4>
          <p>
            Start and use it in just a few seconds, either by a single line of
            code or by importing it as a React component.
          </p>
        </ContentItem>
        <ContentItem>
          <h4>25 Features</h4>
          <p>25 Features to Enhance the Accessibility of Your Website</p>
        </ContentItem>
        <ContentItem>
          <h4>37 languages</h4>
          <p>Choose from 37 of the Most Widely Spoken and Common Languages</p>
        </ContentItem>
      </Content>
      <ButtonsContainer>
        <Button onClick={showPreview}>See It In Action</Button>
        <Button
          onClick={() => {
            document
              .getElementById("installation")!
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get It Now
        </Button>
      </ButtonsContainer>
    </HeroTitleWrapper>
  );
};

export default HeroTitle;
