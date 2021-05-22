import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, animate } from "framer-motion";

import { Logo, ThemeButton } from "../../styles/headerStyles";

//DISPATCH ACTIONS
import useCursorAction from "../../context/actions/cursorActions";
import useToggleTheme from "../../context/actions/toggleTheme";
import { useGlobalContext } from "../../context/globalContext";
import { Row } from "../../styles/MaterialStyles";
import { alignItems, justifyContent } from "../../styles/styleTypes";

export function SiteLogo(props: any) {
  let globalContext = useGlobalContext();
  let isDrawerOpen = globalContext?.state.isDrawerOpen;

  let firstLogoText: string = props.firstText;
  let secondLogoText: string = props.secondText;

  if (firstLogoText === undefined) firstLogoText = "RANDOM";
  if (secondLogoText === undefined) secondLogoText = "PROJECT";

  let firstIndex = firstLogoText.indexOf("O");
  let secondIndex = secondLogoText.indexOf("O");

  let [animateTo, setAnimateTo] = useState(0);

  useEffect(() => {
    let index = isDrawerOpen ? secondIndex : firstIndex - 0.35;
    setAnimateTo(index * 1.8 - 0.9);
  }, [isDrawerOpen]);

  let { changeCursorType, changeCursorState } = useCursorAction();
  let toggleTheme = useToggleTheme();

  return (
    <Row justifyContent={justifyContent.start} noHeight>
      <ThemeButton
        animate={{ x: animateTo + "rem" }}
        transition={{ ease: "backInOut", duration: 0.4 }}
        onClick={toggleTheme}
        onMouseEnter={(e) => {
          changeCursorType("POINTER");
          changeCursorState("LOCKED", e);
        }}
        onMouseLeave={() => {
          changeCursorType("NORMAL");
          changeCursorState("FREE");
        }}
      ></ThemeButton>
      <AnimatePresence initial={false}>
        {!isDrawerOpen ? (
          <Logo
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "backInOut", duration: 0.4 }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Link href="/">
              <a
                onMouseEnter={() => changeCursorType("HOVERED")}
                // onMouseLeave={() => changeCursorType("NORMAL")}
              >
                {firstLogoText.substring(0, firstIndex)}
              </a>
            </Link>
            <span></span>
            <Link href="/">
              <a
                onMouseEnter={() => changeCursorType("HOVERED")}
                // onMouseLeave={() => changeCursorType("NORMAL")}
              >
                {firstLogoText.substring(firstIndex + 1)}
              </a>
            </Link>
          </Logo>
        ) : (
          <Logo
            key={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "backInOut", duration: 0.4 }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Link href="/">
              <a
                onMouseEnter={() => changeCursorType("HOVERED")}
                // onMouseLeave={() => changeCursorType("NORMAL")}
              >
                {secondLogoText.substring(0, secondIndex)}
              </a>
            </Link>
            <span></span>
            <Link href="/">
              <a
                onMouseEnter={() => changeCursorType("HOVERED")}
                // onMouseLeave={() => changeCursorType("NORMAL")}
              >
                {secondLogoText.substring(secondIndex + 1)}
              </a>
            </Link>
          </Logo>
        )}
      </AnimatePresence>
    </Row>
  );
}
