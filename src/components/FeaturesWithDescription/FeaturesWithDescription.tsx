import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import { Description, FeaturesContent, FeaturesWithDescriptionWrapper, Title } from "./FeaturesWithDescription.styled";
import Container from "../Container/Container";

 const featureData = [
  {id: "feature_1", translationKey: "alignTextButton"},
  {id: "feature_2", translationKey: "bigCursorButton"},
  {id: "feature_3", translationKey: "brightnessControl"},
  {id: "feature_4", translationKey: "darkContrastButton"},
  {id: "feature_5", translationKey: "dyslexiaFontButton"},
  {id: "feature_7", translationKey: "fontWeightButton"},
  {id: "feature_8", translationKey: "highContrastButton"},
  {id: "feature_9", translationKey: "highSaturationButton"},
  {id: "feature_10", translationKey: "highlightLinksButton"},
  {id: "feature_11", translationKey: "highlightTitleButton"},
  {id: "feature_12", translationKey: "lightContrastButton"},
  {id: "feature_13", translationKey: "lineHeightButton"},
  {id: "feature_14", translationKey: "lowSaturationButton"},
  {id: "feature_15", translationKey: "textToSpeech"},
  {id: "feature_16", translationKey: "wordSpacingButton"},
  {id: "feature_17", translationKey: "bluelightfilter"},
  {id: "feature_18", translationKey: "fontsize"},
  {id: "feature_19", translationKey: "letterspacing"},
  {id: "feature_20", translationKey: "monochrome"},
  {id: "feature_21", translationKey: "readingguide"},
  {id: "feature_22", translationKey: "textcolor"},
  {id: "feature_23", translationKey: "visualimpairment"},
  {id: "feature_24", translationKey: "zoom"}
]

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
