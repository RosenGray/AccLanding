import { media } from "@/styles/responsive";
import styled from "styled-components";

export const HeroTitleWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  flex:1.2;
`;

export const Title = styled.h1`
  font-size: 4vw;
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-weight: 600;

  display: flex;
  gap: 10px;
  span:nth-child(even) {
    color: #232e8b;
  }
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
  margin-bottom: 15px;
  /* &:not(:last-child) {
    margin-bottom: 15px;
  } */
`;

export const ButtonsContainer = styled.div`
  margin: auto 0;
  display: flex;
  gap: 20px;
  align-items: center;

    @media ${media.mobile} {
    flex-direction: column;
    button{
      flex:1;
      width: 100%;
      gap: 0;
    }
  }
`;
