import React, { FC, useState } from "react";
import {
  InstallationWrapper,
  Title,
  Content,
  Tab,
} from "./Installation.styled";
import Container from "../Container/Container";
import ReactInstall from "../ReactInstall/ReactInstall";
import ScriptInstall from "../ScriptInstall/ScriptInstall";

interface InstallationProps {}

const Installation: FC<InstallationProps> = () => {
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
        <Title>Installation</Title>
        <Content>
          <Tab onClick={() => setIsScript(true)} $active={isScript}>
          Embedding Script
          </Tab>
          <Tab onClick={() => setIsScript(false)} $active={!isScript}>
            React Component
          </Tab>
          {renderContent()}
        </Content>
      </Container>
    </InstallationWrapper>
  );
};

export default Installation;
