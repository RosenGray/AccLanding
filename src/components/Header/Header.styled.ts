import styled from "styled-components";
import { LogoWrapper } from "../Logo/Logo.styled";
import NextLink from "next/link";
import { LanguageSwitcherWrapper } from "../LanguageSwitcher/LanguageSwitcher.styled";
import { media } from "@/styles/responsive";

export const NavOverlay = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  right: 3rem;
  background-image: radial-gradient(#08334b, rgba(51, 51, 51, 1));
  z-index: 1000;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
`;

export const NavWrapper = styled.nav`
  /* height: 100vh; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
  opacity: 0;
  width: 0;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  min-height: 100vh;
  min-height: -webkit-fill-available;
`;

export const NavButton = styled.label`
  background-color: white;
  height: 7rem;
  width: 7rem;
  border: 1px solid black;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  text-align: center;
  /* @media ${media.mobile} {
    height: 5rem;
  width: 5em;
  }
   */
  cursor: pointer;
  /* margin-left: auto; */
  span {
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: rgba(51, 51, 51, 1);
      display: inline-block;
    }
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }
    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }
  &:hover span:before {
    top: -1rem;
  }
  &:hover span:after {
    top: 1rem;
  }
`;

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: #08334b;
  transition: all 0.8s ease;
  z-index: 100;
  border-bottom: 1px solid rgba(51, 51, 51, 1);
  height: 100px;
  display: flex;
  align-items: center;
  padding: 1em 2em;
  gap: 20px;
  direction: ltr;
  h3 {
    font-size: 20px;
    @media ${media.mobile} {
      font-size: 10px;
    }
  }
  ${LogoWrapper} {
    background-color: #08334b;
    z-index: 1001;
  }
  ${LanguageSwitcherWrapper} {
    position: relative;
    z-index: 10000000;
    margin-left: auto;
  }

  input[type="checkbox"] {
    display: none;
    &:checked ~ ${NavOverlay} {
      transform: scale(80);
    }
    &:checked + ${NavButton} span {
      background-color: transparent;
    }
    &:checked + ${NavButton} span:before {
      top: 0;
      transform: rotate(135deg);
    }
    &:checked + ${NavButton} span:after {
      top: 0;
      transform: rotate(-135deg);
    }
    &:checked ~ ${NavWrapper} {
      opacity: 1;
      width: 100vw;
    }
    &:checked ~ span.line {
      display: block;
    }
  }
  span.line {
    display: none;
    position: absolute;
    height: 2px;
    left: 0;
    right: 0;
    background-color: white;
    bottom: 0;
    z-index: 1001;
  }
`;

export const NavItems = styled.ul`
  list-style-type: none;
  /* display: flex; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
  width: min-content;

  /* width: 200px; */
`;
export const NavItem = styled.li`
  margin: 1rem;
`;
export const NavLink = styled(NextLink)`
  /* font-size: 18px; */
  white-space: nowrap;
  &:link,
  &:visited {
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    padding: 1rem 2rem;
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
