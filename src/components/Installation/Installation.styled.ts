import styled from "styled-components";

export const InstallationWrapper = styled.section`
  padding-bottom: 100px;
`;

export const Title = styled.h2`
  font-size: 4vw;
  color: #232e8b;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  font-size: 1rem;
`;

export const Tab = styled.div.attrs({ role: "button" })<{ $active: boolean }>`
  cursor: pointer;
  padding: 0.5em;
  background-color: ${({ $active }) =>
    $active ? "#232e8b" : "rgba(51,51,51,1)"};
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
  border: 2px solid white;
  display: inline-block;
  width: 50%;
  margin-bottom: 20px;
`;
