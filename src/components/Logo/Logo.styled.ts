import styled from "styled-components";

export const LogoWrapper = styled.div`
  background-color: #222e8a;
  padding:.5em;
  width: max-content;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px 0 rgb(37 44 97 / 15%),
    0 2px 4px 0 rgb(93 100 148 / 20%);

  bottom: 20px;
  transition: 0.3s;
  & > svg {
    fill: #ffffff;
    width: 2em;
    height: 2em;
  }
`;
