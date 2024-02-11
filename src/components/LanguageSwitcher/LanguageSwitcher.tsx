import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { LanguageSwitcherWrapper, Link, Flag } from "./LanguageSwitcher.styled";

const countries: Record<string, string> = {
  he: "il",
  en: "us",
};

interface LanguageSwitcherProps {

}

const LanguageSwitcher: FC<LanguageSwitcherProps> = () => {
  const { i18n } = useTranslation();
  const { language: currentLanguage } = i18n;
  const router = useRouter();
  const locales = router.locales ?? [currentLanguage];

  const renderLinks = () => {
    return locales.map((locale) => {
      return (
        <Link key={locale} href={router.asPath} locale={locale}>
          <Flag className={`fi fi-${countries[locale]} `} />
        </Link>
      );
    });
  };

  return <LanguageSwitcherWrapper>{renderLinks()}</LanguageSwitcherWrapper>;
};

export default LanguageSwitcher;
