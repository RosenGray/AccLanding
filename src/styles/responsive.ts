// Create a media template
//mobile first
// export const media = {
//   xsMobile: "(min-width: 0) and (max-width: 319px)",
//   mobile: "(min-width: 320px) and (max-width: 575px)",
//   tabletPortrait: "(min-width: 575px) and (max-width: 767px)",
//   tablet: "(min-width: 768px) and (max-width: 1023px)",
//   desktop: "(min-width: 1024px) and (max-width: 1279px)",
//   xlDesktop: "(min-width: 1280px)"
// };
//desktop first
export const media = {
  xlDesktop: "(min-width: 1280px)", // Styles for extra large desktops and above
  desktop: "(max-width: 1279px)", // Styles for desktops and below
  tablet: "(max-width: 1023px)", // Styles for tablets and below
  tabletPortrait: "(max-width: 767px)", // Styles for tablet portraits and below
  mobile: "(max-width: 575px)", // Styles for mobile devices and below
  xsMobile: "(max-width: 319px)" // Styles for extra small mobile devices
};



  // @media ${media.xlDesktop} {
  //   background: brown;
 
  // }
  // @media ${media.desktop} {
  //   background: yellow;
    
  // }
  // @media ${media.tablet} {
  //   background: orange;
  // }
  // @media ${media.tabletPortrait} {
  //   background: purple;
  // }
  // @media ${media.mobile} {
  //   background: green;
  // }
  // @media ${media.xsMobile} {
  //   background: red;
  // }
  