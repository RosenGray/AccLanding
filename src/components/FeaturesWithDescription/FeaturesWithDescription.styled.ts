import styled from "styled-components";

export const FeaturesWithDescriptionWrapper = styled.section`
  padding: 100px 0;

`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
`;
export const Description = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

export const FeaturesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  gap: 4em;
`;
