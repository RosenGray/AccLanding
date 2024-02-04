import styled from 'styled-components';

export const FeaturesSectionWrapper = styled.div`
padding: 100px 0;
`;

export const FeaturesList  = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 5em;
`;

export const FeaturesItem  = styled.li`
  background-color: rgba(51, 51, 51, 1);
  h4{
    color:white;

    padding: 1em;
    font-size: 2rem;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 200px;
`;