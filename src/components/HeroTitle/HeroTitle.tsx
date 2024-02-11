import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import Button from "../Button/Button.styled";
import { scrollToInstallationSectoion } from "@/utils";
import {
  HeroTitleWrapper,
  Title,
  Content,
  ContentItem,
  ButtonsContainer,
} from "./HeroTitle.styled";

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
          <h4>{t('hero.item1.title')}</h4>
          <p>{t('hero.item1.description')}!</p>
        </ContentItem>
        <ContentItem>
        <h4>{t('hero.item2.title')}</h4>
          <p>{t('hero.item2.description')}!</p>
        </ContentItem>
        <ContentItem>
        <h4>{t('hero.item3.title')}</h4>
          <p>{t('hero.item3.description')}!</p>
        </ContentItem>
        <ContentItem>
        <h4>{t('hero.item4.title')}</h4>
          <p>{t('hero.item4.description')}!</p>
        </ContentItem>
      </Content>
      <ButtonsContainer>
        <Button onClick={showPreview}>{t('hero.button1')}</Button>
        <Button onClick={scrollToInstallationSectoion}>{t('hero.button2')}</Button>
      </ButtonsContainer>
    </HeroTitleWrapper>
  );
};

export default HeroTitle;
