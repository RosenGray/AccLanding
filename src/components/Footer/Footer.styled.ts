import styled from 'styled-components';
import NextLink from "next/link";
export const FooterWrapper = styled.footer`
  height: 70px;
  background-color: #08334b;
`;


export const NavItems = styled.ul`
  list-style-type: none;
  display: flex;

  list-style: none;
  text-align: center;
  height: 100%;
  justify-content: center;
  align-items: center;


  /* width: 200px; */
`;
export const NavItem = styled.li`
     /* margin: 1rem; */

     padding: 1em;
     /* flex:1;
     display: flex;
     align-items: center;
     justify-content: center; */


`;
export const NavLink = styled(NextLink)`
  font-size: 18px;
  white-space: nowrap;
  font-weight: bold;
  &:link,
  &:visited {
    display: inline-block;
    font-weight: bold;
    padding: 1rem 2rem;
    letter-spacing: 1px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      $color-white 50%
    );
    background-size: 220%;
    transition: all 0.4s;
  }

  &:hover,
  &:active {
    background-position: 100%;
    color: $color-primary;
    transform: translateX(1rem);
  }
`;
