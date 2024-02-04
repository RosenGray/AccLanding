import React, { FC } from "react";
import { QuoteStripeWrapper } from "./QuoteStripe.styled";
import { useTranslation } from "next-i18next";

interface QuoteStripeProps {}

const QuoteStripe: FC<QuoteStripeProps> = () => {
  const { t } = useTranslation('home');
  return (
    <QuoteStripeWrapper id="vladi">
      <h3>&quot; {t("quote")} &quot;</h3>
    </QuoteStripeWrapper>
  );
};

export default QuoteStripe;
