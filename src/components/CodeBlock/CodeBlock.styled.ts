import { media } from "@/styles/responsive";
import styled from "styled-components";

export const CodeBlockWrapper = styled.div.attrs({role:'button'})`
  background-color: rgb(22, 27, 34);
  padding: 1em;
  font-size: 16px;
  line-height: 2;
  position: relative;
  display: flex;
  align-items: center;
  color:white;
  direction: ltr;
  cursor: pointer;
  overflow: auto;


  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const CopyContainerDesktop = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  inset-inline-end: 10px;
  top: 10px;
     @media ${media.tablet} {
  
    top:0;
    }
`;

export const CopyButton = styled.button`
  border: none;
  padding: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  line-height: 0;

  padding: 10px;
  &:hover {
    background-color: rgb(48, 54, 61);
  }
  svg {
    font-size: 25px;
    font-weight: bold;
    fill:white;
  }

  @media ${media.tablet} {
    padding:0;
    svg{
      fill: red;
    }
    }
`;

export const CheckMark = styled.i`
  svg {
    fill: #28a745;
    /* font-size: 30px; */
  }
`;

export const Tooltip = styled.span<{ $isCopied: boolean }>`
  background-color: #5C5C5C;
  color: white;
  padding: 5px 10px;
  font-size: 10px;
  font-weight: bold;
  margin-inline-end: 20px;
  transition: opacity .8s linear;
  opacity: ${({ $isCopied }) => ($isCopied ? 1 : 0)};
  min-width: 100px;
  text-align: center;
`;
//  position: absolute;
// right: 0;