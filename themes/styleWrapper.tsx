import React, { useEffect } from "react";

//Styled-Components
import { DarkTheme, LightTheme } from "./themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";

import CustomCursor from "../components/custom/cursor";

import { useGlobalContext } from "../context/globalContext";
import Header from "../components/custom/header";
import { SiteLogo } from "../components/custom/logos";
// import PageDrawer from "./Home/pageDrawer";

function StyleWrapper(props: any) {
  let globalContext = useGlobalContext();

  useEffect(() => {
    // window.localStorage.setItem(
    //   "theme",
    //   globalContext?.state.currentTheme === "dark" ? "dark" : "light"
    // );
    let currentTheme = localStorage.getItem("theme");
    if (globalContext?.state.currentTheme !== currentTheme) {
      globalContext?.dispatch({
        type: "TOGGLE_THEME",
      });
    }
  }, [globalContext?.state.currentTheme]);
  return (
    <ThemeProvider
      theme={
        globalContext?.state.currentTheme === "dark" ? DarkTheme : LightTheme
      }
    >
      <Header>
        <SiteLogo />
      </Header>
      <GlobalStyle />
      <CustomCursor />
      {props.children}
    </ThemeProvider>
  );
}

export default StyleWrapper;
