import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
  padding: 100px 0;
`;

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2fr minmax(320px, 0.8fr);
  grid-auto-rows: 600px;
  column-gap: 2em;
`;
