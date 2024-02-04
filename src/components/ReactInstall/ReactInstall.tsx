import React, { FC } from "react";
import CodeBlock from "../CodeBlock/CodeBlock";
import {
  ReactInstallWrapper,
  Orange,
  Red,
  Blue,
  Green,
  White,
} from "./ReactInstall.styled";

interface ReactInstallProps {}

const ReactInstall: FC<ReactInstallProps> = () => (
  <ReactInstallWrapper>
    <CodeBlock>npm install accessibility-react-widget</CodeBlock>
    <p style={{fontSize:20,fontWeight:'bold',marginBottom:30,color:"#232e8b"}}>OR</p>
    <CodeBlock>yarn add accessibility-react-widget</CodeBlock>
    <CodeBlock>
        <Red>import</Red> <Orange>Accessibilik</Orange> <Red>from</Red>
        <Blue>&apos;accessibility-react-widget&apos;;</Blue>
        <br />
        <br />
        <Red> export default function</Red> <Orange>App</Orange>() {"{"}
      <pre style={{ lineHeight: '0.5'}}>       <Red>return</Red> (</pre> 
      <pre>          {"<"}<Green>{'div'}</Green> <Blue>{'className="App"'}</Blue>{">"}</pre>
      <pre style={{ lineHeight: '0.5'}}>            {"<"}<Green>{"MyApp"}</Green>{"/>"}</pre>
      <pre>            {"<"}<Green>{"Accessibilik"}</Green>{"/>"}</pre>
      <pre style={{ lineHeight: '0.5'}}>           {'</'}<Green>div</Green>{">"}</pre>
      <pre>         );</pre>
      <pre style={{ lineHeight: '0.5'}}>     {"}"}</pre>
      <br />
    </CodeBlock>
  </ReactInstallWrapper>
);

export default ReactInstall;


