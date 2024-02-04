import styled from "styled-components";

export const ImportantSectionWrapper = styled.section`
  padding-bottom: 100px;
`;

export const Content = styled.div`
  border: 4px solid #232e8b;
  position: relative;
  padding: .5em;
  font-size: 20px;
  p {
    display: flex;

    svg {
      fill: red;
      margin-inline-end: 20px;
      line-height: 1;
      position: relative;
      top:5px;
    }
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  h2 {
    font-size: 30px;
    margin-bottom: 10px;
    color:#232e8b;
    
  }
`;
