import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Container from "../Container/Container";
import alignTextButton from "@/assets/images/features/AlignTextButton.png";
import bigCursorButton from "@/assets/images/features/BigCursorButton.png";
import brightnessControl from "@/assets/images/features/BrightnessControl.webp";
import darkContrastButton from "@/assets/images/features/DarkContrastButton.webp";
import dyslexiaFontButton from "@/assets/images/features/DyslexiaFontButton.png";
import fontWeightButton from "@/assets/images/features/FontWeightButton.png";
import highContrastButton from "@/assets/images/features/HighContrastButton.png";
import highSaturationButton from "@/assets/images/features/HighSaturationButton.png";
import highlightLinksButton from "@/assets/images/features/HighlightLinksButton.png";
import highlightTitleButton from "@/assets/images/features/HighlightTitleButton.png";
import lightContrastButton from "@/assets/images/features/LightContrastButton.png";
import lineHeightButton from "@/assets/images/features/LineHeightButton.png";
import lowSaturationButton from "@/assets/images/features/LowSaturationButton.png";
import textToSpeech from "@/assets/images/features/TextToSpeech.png";
import wordSpacingButton from "@/assets/images/features/WordSpacingButton.png";
import bluelightfilter from "@/assets/images/features/bluelightfilter.webp";
import fontsize from "@/assets/images/features/fontsize.png";
import letterspacing from "@/assets/images/features/letterspacing.webp";
import monochrome from "@/assets/images/features/monochrome.png";
import readingguide from "@/assets/images/features/readingguide.png";
import textcolor from "@/assets/images/features/textcolor.png";
import visualimpairment from "@/assets/images/features/visualimpairment.webp";
import zoom from "@/assets/images/features/zoom.png";
import {
  FeaturesSectionWrapper,
  FeaturesList,
  FeaturesItem,
  ImageContainer,
} from "./FeaturesSection.styled";
const features = [
  {
    title: "Align Text Button",
    image: alignTextButton,
    tKey: "features.alignTextButton",
  },
  {
    title: "Big Cursor Button",
    image: bigCursorButton,
    tKey: "features.bigCursorButton",
  },
  {
    title: "Brightness Control",
    image: brightnessControl,
    tKey: "features.brightnessControl",
  },
  {
    title: "Dark Contrast Button",
    image: darkContrastButton,
    tKey: "features.darkContrastButton",
  },
  {
    title: "Dyslexia Font Button",
    image: dyslexiaFontButton,
    tKey: "features.dyslexiaFontButton",
  },
  {
    title: "Font Weight Button",
    image: fontWeightButton,
    tKey: "features.fontWeightButton",
  },
  {
    title: "High Contrast Button",
    image: highContrastButton,
    tKey: "features.highContrastButton",
  },
  {
    title: "High Saturation Button",
    image: highSaturationButton,
    tKey: "features.highSaturationButton",
  },
  {
    title: "Highlight Links Button",
    image: highlightLinksButton,
    tKey: "features.highlightLinksButton",
  },
  {
    title: "Highlight Title Button",
    image: highlightTitleButton,
    tKey: "features.highlightTitleButton",
  },
  {
    title: "Light Contrast Button",
    image: lightContrastButton,
    tKey: "features.lightContrastButton",
  },
  {
    title: "Line Height Button",
    image: lineHeightButton,
    tKey: "features.lineHeightButton",
  },
  {
    title: "Low Saturation Button",
    image: lowSaturationButton,
    tKey: "features.lowSaturationButton",
  },
  {
    title: "Text To Speech",
    image: textToSpeech,
    tKey: "features.textToSpeech",
  },
  {
    title: "Word Spacing Button",
    image: wordSpacingButton,
    tKey: "features.wordSpacingButton",
  },
  {
    title: "Bluelight Filter",
    image: bluelightfilter,
    tKey: "features.bluelightfilter",
  },
  { title: "Adjust Font Size", image: fontsize, tKey: "features.fontsize" },
  {
    title: "Letter Spacing",
    image: letterspacing,
    tKey: "features.letterspacing",
  },
  { title: "Monochrome", image: monochrome, tKey: "features.monochrome" },
  {
    title: "Reading Guide",
    image: readingguide,
    tKey: "features.readingguide",
  },
  { title: "Text Color", image: textcolor, tKey: "features.textcolor" },
  {
    title: "Visual Impairment",
    image: visualimpairment,
    tKey: "features.visualimpairment",
  },
  { title: "Zoom", image: zoom, tKey: "features.zoom" },
];

interface FeaturesSectionProps {}

const FeaturesSection: FC<FeaturesSectionProps> = () => {
  const { t } = useTranslation("home");
  const renderFeatures = () => {
    return features.map((feature) => {
      const { title, image, tKey } = feature;
      return (
        <FeaturesItem key={title}>
          <ImageContainer>
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              src={image.src}
              alt={t(tKey)}
            />
          </ImageContainer>
          <h4>{t(tKey)}</h4>
        </FeaturesItem>
      );
    });
  };

  return (
    <FeaturesSectionWrapper>
      <Container>
        <FeaturesList>{renderFeatures()}</FeaturesList>
      </Container>
    </FeaturesSectionWrapper>
  );
};

export default FeaturesSection;
