import styled from 'styled-components';

export const ScriptInstallWrapper = styled.div`

`;

export const Content = styled.ul`
  width: 90%;
  margin: auto;
`;
export const ContentItem = styled.li`
  &::marker {
    font-size: 20px;
    color: #232e8b;
  }
  h4 {
    font-size: 2.4rem;
    color: #232e8b;
    /* margin-bottom: 8px; */
  }
  p {
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: -0.04em;
    line-height: 1.7;
  }
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;