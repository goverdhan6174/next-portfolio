import { createGlobalStyle, ThemeProps } from "styled-components";
// import { normalize } from "styled-normalize";
/* ${normalize} */

import { ThemeType } from "../themes/themes";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin : 0;
    outline: none;
    text-decoration: none;
    box-sizing: border-box;
}
html{
    box-sizing : border-box;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor : none;
  font-size: min(calc(1vw + 6px) , 1rem);
}
body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${(props: ThemeProps<ThemeType>) =>
      props.theme.backgroundColor};
    overscroll-behavior: none;
    overflow-x: hidden;
}
`;
