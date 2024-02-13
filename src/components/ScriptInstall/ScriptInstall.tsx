import React, { FC } from "react";
import {
  ScriptInstallWrapper,
  Content,
  ContentItem,
} from "./ScriptInstall.styled";
import CodeBlock from "../CodeBlock/CodeBlock";
import { Red } from "../ReactInstall/ReactInstall.styled";
import { useRouter } from "next/router";

interface ScriptInstallProps {}

const ScriptInstall: FC<ScriptInstallProps> = () => {
  const router = useRouter();
  const isEnglish = router.locale === "en";
  const renderContent = () => {
    if (isEnglish)
      return (
        <>
          <ContentItem>
            <h4>Copy the script</h4>
            <p>
              Copy the <Red>{"<script>"}</Red> tag below - you can just click on
              the copy icon
            </p>
          </ContentItem>
          <ContentItem>
            <h4>Past the script</h4>
            <p>
              Paste the <Red>{"<script>"}</Red> tag right before the closing{" "}
              <Red>{" </body>"}</Red> tag of you website.
            </p>
          </ContentItem>
          <ContentItem>
            <h4>Enjoy the ride</h4>
            <p>
              The widget will automatically appear at the bottom left of your
              website.
            </p>
          </ContentItem>
        </>
      );
    return (
      <>
        <ContentItem>
          <h4>העתק את ה script</h4>
          <p>
            העתק את תגית ה <Red>{"<script>"}</Red> - אתה יכול להקליק פשוט על
            התיבה וזה יועתק לבד :)
          </p>
        </ContentItem>
        <ContentItem>
          <h4>הדבק את ה script</h4>
          <p>
            הדבק את תגית ה<Red>{"<script>"}</Red> ממש לפני סגירת תגית ה{" "}
            <Red>{"</body>"}</Red> אצלך באתר
          </p>
        </ContentItem>
        <ContentItem>
          <h4>זהו, תהנה :)</h4>
          <p>אתה תראה את התפריט הנגישות החדש שלך, בצד ימין למטה</p>
        </ContentItem>
      </>
    );
  };
  return (
    <ScriptInstallWrapper>
      <CodeBlock>
        {
          '<script defer src="https://acc-landing.vercel.app/accessibilik.min.js"></script>'
        }
      </CodeBlock>
      <Content>{renderContent()}</Content>
    </ScriptInstallWrapper>
  );
};

export default ScriptInstall;
