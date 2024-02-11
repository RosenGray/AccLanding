import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import { Description, FeaturesContent, FeaturesWithDescriptionWrapper, Title } from "./FeaturesWithDescription.styled";
import { featureData } from "@/pages/features/data";
import Container from "../Container/Container";

interface FeaturesWithDescriptionProps {}

const FeaturesWithDescription: FC<FeaturesWithDescriptionProps> = () => {
  const { t } = useTranslation('home');
  const renderFeaturesWithDesc = () => {
    return featureData.map((fd) => {
      const { id, translationKey } = fd;

      return (
        <div key={id}>
          <Title>{t(`features.${translationKey}`)}</Title>
          <Description>{t(`features.blog.${translationKey}`)}</Description>
        </div>
      );
    });
  };

  return (
    <FeaturesWithDescriptionWrapper>
      <Container>
         <FeaturesContent>
         {renderFeaturesWithDesc()}
         </FeaturesContent>
      </Container>
    </FeaturesWithDescriptionWrapper>
  );
};

export default FeaturesWithDescription;
