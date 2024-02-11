import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import { FooterWrapper, NavItems, NavItem, NavLink } from "./Footer.styled";

interface FooterProps {}
console.log(1)

const Footer: FC<FooterProps> = () => {
  const { t } = useTranslation("home");
  return (
    <FooterWrapper>
      <NavItems>
        <NavItem>
          <NavLink href="/features">{t("nav.features")}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contactUs">{t("nav.contact")}</NavLink>
        </NavItem>
      </NavItems>
    </FooterWrapper>
  );
};

export default Footer;
