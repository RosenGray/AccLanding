import React, { FC, useRef } from "react";
import { scrollToInstallationSectoion } from "@/utils";
import { useTranslation } from "next-i18next";
import {
  HeaderWrapper,
  NavWrapper,
  NavItems,
  NavItem,
  NavLink,
  NavButton,
  NavOverlay,
} from "./Header.styled";
import Logo from "../Logo/Logo";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useRouter } from "next/router";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { t } = useTranslation("home");
  const refNavButton = useRef<HTMLLabelElement | null>(null);
  const { pathname } = useRouter();

  return (
    <HeaderWrapper>
      <Logo />
      <h3 style={{ color: "white" }}>Accessibilik</h3>
      <LanguageSwitcher />
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <NavButton ref={refNavButton} htmlFor="navi-toggle">
        <span>&nbsp;</span>
      </NavButton>
      {/* <NavOverlay /> */}
      <NavWrapper>
        <NavItems>
          <NavItem>
            <NavLink href="/features">{t("nav.features")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contactUs">{t("nav.contact")}</NavLink>
          </NavItem>
          {pathname !== "/contactUs" && (
            <NavItem style={{ backgroundColor: "white", color: "#08334b" }}>
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  scrollToInstallationSectoion();
                  refNavButton.current?.click();
                }}
                style={{ color: "inherit" }}
                href="#"
              >
                {t("nav.getFreeWidget")}
              </NavLink>
            </NavItem>
          )}
        </NavItems>
      </NavWrapper>
      <span className="line"></span>
    </HeaderWrapper>
  );
};

export default Header;
