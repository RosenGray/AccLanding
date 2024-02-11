import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Container from "../Container/Container";
import { ImportantSectionWrapper, Content } from "./ImportantSection.styled";

interface ImportantSectionProps {}

const ImportantSection: FC<ImportantSectionProps> = () => {
  const { t } = useTranslation("home");
  return (
    <ImportantSectionWrapper>
      <Container>
        <Content>
          <h2>{t("important.title")}!</h2>
          <p>
            <ErrorOutlineIcon fontSize="large" />
            <span>{t("important.item1")}</span>
          </p>
          <p>
            <ErrorOutlineIcon fontSize="large" />
            <span>{t("important.item2")}</span>{" "}
          </p>
          <p>
            <ErrorOutlineIcon fontSize="large" />
            <span>{t("important.item3")}</span>
          </p>
        </Content>
      </Container>
    </ImportantSectionWrapper>
  );
};

export default ImportantSection;
