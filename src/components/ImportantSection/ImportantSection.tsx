import React, { FC } from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Container from "../Container/Container";
import { ImportantSectionWrapper, Content } from "./ImportantSection.styled";

interface ImportantSectionProps {}

const ImportantSection: FC<ImportantSectionProps> = () => (
  <ImportantSectionWrapper>
    <Container>
      <Content>
         <h2>חשוב לקרוא!</h2>
        <p>
        <ErrorOutlineIcon fontSize="large" />
        <span>
        accessibilik הינו תוסף חינמי, אשר פותח במטרה לעזור לאתרים ולתמוך בקוד
          פתוח. התוסף מספק חלק מדרישות הנגישות ולא את כולן. הוא אינו מתיימר
          לעמוד בשום תקן בתחום הנגישות.
        </span>
        </p>
        <p>
        <ErrorOutlineIcon fontSize="large" />
         <span>
        התוסף מעוגן רישיון MIT, שזה הוא בעצם רישיון לתוכנות קוד פתוח.
         </span> </p>
        <p>
        <ErrorOutlineIcon fontSize="large" />
         <span>
         יש בתוסף המון פיצ׳רים מגניבים ואני אעשה כל מאמץ כדי להמשיך ולעדכן אותו
          :)
         </span>
        </p>
      </Content>
    </Container>
  </ImportantSectionWrapper>
);

export default ImportantSection;
