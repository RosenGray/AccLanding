import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import {
  CodeBlockWrapper,
  CopyContainerDesktop,
  CopyButton,
  CheckMark,
  Tooltip,
} from "./CodeBlock.styled";

interface CodeBlockProps {
  children: ReactNode;
}

const CodeBlock: FC<CodeBlockProps> = ({ children }) => {
  const codeRef = useRef<HTMLElement | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);
  const copyToClipboardHandler = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.innerText);
      setIsCopied(true);
    }
  };
  const renderIcon = () => {
    if (isCopied)
      return (
        <CheckMark>
          <CheckIcon fontSize="large" />
        </CheckMark>
      );
    return <ContentCopyIcon fontSize="large" />;
  };

  return (
    <CodeBlockWrapper onClick={copyToClipboardHandler}>
      <CopyContainerDesktop>
        <Tooltip $isCopied={isCopied}>copied!</Tooltip>
        <CopyButton>{renderIcon()}</CopyButton>
      </CopyContainerDesktop>
      <pre> <code ref={codeRef}>{children}</code></pre>
    </CodeBlockWrapper>
  );
};

export default CodeBlock;
