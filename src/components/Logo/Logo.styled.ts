import styled from "styled-components";
import NextLink from "next/link";

export const LogoWrapper = styled(NextLink)`
  background-color: #222e8a;
  padding:.5em;
  width: max-content;
  /* width: 42px;
  height: 42px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border:1px solid white;


  bottom: 20px;
  transition: 0.3s;
  & > svg {
    fill: #ffffff;
    width: 3em;
    height: 3em;
  }
`;
