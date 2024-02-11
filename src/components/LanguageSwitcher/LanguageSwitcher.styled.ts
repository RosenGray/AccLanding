import styled from 'styled-components';
import NextLink from 'next/link'
import "/node_modules/flag-icons/css/flag-icons.min.css";

export const LanguageSwitcherWrapper = styled.div`
display: flex;
gap:10px;
`;

export const Link = styled(NextLink)`
 display: block;
`;
export const Flag = styled.span`
  width: 50px;
  height: 50px;
`;