import styled, { css } from "styled-components";

interface CarItemProps {
  $src: string;
  $isActive: boolean;
}

export const CarouselWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
`;

export const CarItem = styled.div<CarItemProps>`
  grid-column: 1;
  grid-row: 1;
  transition: opacity 0.3s ease-in;
  background-image: url(${({ $src }) => $src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
`;

export const CarDots = styled.ul`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 6px;
  height: 70px;
  list-style-type: none;
`;

export const CarDot = styled.li<{ $isActive: boolean }>`
  cursor: pointer;
  width: 25px;
  height: 25px;
  background-color: #d6c9b9;
  border: 2.5px solid #d6c9b9;
  border-radius: 50%;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(228, 155, 7, 0.6);
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      cursor: default;
      pointer-events: none;
      background-color: #e49b07;
    `};
`;
