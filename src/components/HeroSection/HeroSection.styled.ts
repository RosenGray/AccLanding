import { media } from "@/styles/responsive";
import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
  padding: 100px 0;
  @media (max-width: 920px){
    padding: 50px 0;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
