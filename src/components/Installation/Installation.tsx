import React, { FC, useState } from "react";
import { useTranslation } from "next-i18next";
import Container from "../Container/Container";
import ReactInstall from "../ReactInstall/ReactInstall";
import ScriptInstall from "../ScriptInstall/ScriptInstall";
import {
  InstallationWrapper,
  Title,
  Content,
  Tab,
} from "./Installation.styled";
interface InstallationProps {}

const Installation: FC<InstallationProps> = () => {
  const { t } = useTranslation('home');
  const [isScript, setIsScript] = useState(true);
  const toggleTabHandler = () => {
    setIsScript((p) => !p);
  };
  const renderContent = () => {
    if (isScript) return <ScriptInstall />;
    return <ReactInstall />;
  };
  return (
    <InstallationWrapper id="installation">
      <Container>
        <Title>{t("installation.title")}</Title>
        <Content>
          <Tab onClick={() => setIsScript(true)} $active={isScript}>
            {t("installation.embed")}
          </Tab>
          <Tab onClick={() => setIsScript(false)} $active={!isScript}>
            {t("installation.react")}
          </Tab>
          {renderContent()}
        </Content>
      </Container>
    </InstallationWrapper>
  );
};

export default Installation;
