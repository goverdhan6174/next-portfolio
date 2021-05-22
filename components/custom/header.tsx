import React from "react";
import useCursorAction from "../../context/actions/cursorActions";
import { useGlobalContext } from "../../context/globalContext";

import { BoxContainer } from "../../styles/customStyles";
import { HeaderNav, Menu } from "../../styles/headerStyles";
import { Row } from "../../styles/MaterialStyles";

function Header(props: any) {
  let globalContext = useGlobalContext();
  let isDrawerOpen = globalContext?.state.isDrawerOpen;
  let { changeCursorState, changeCursorType } = useCursorAction();

  return (
    <HeaderNav
      noHeight
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -10, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <BoxContainer fluid={false}>
        <Row noHeight>
          {props.children}
          <Menu scale={0.4}>
            <button
              onClick={() => {
                globalContext?.dispatch({
                  type: "TOGGLE_DRAWER",
                });
              }}
              onMouseEnter={(e) => {
                changeCursorType("POINTER");
                changeCursorState("LOCKED", e);
              }}
              onMouseLeave={() => {
                changeCursorType("NORMAL");
                changeCursorState("FREE");
              }}
            >
              <div className="hamBurgerStripContainer">
                <span
                  className={`hamBurgerStrip ${isDrawerOpen ? "first" : ""}`}
                ></span>
                <span
                  className={`hamBurgerStrip ${isDrawerOpen ? "second" : ""}`}
                ></span>
              </div>
            </button>
          </Menu>
        </Row>
      </BoxContainer>
    </HeaderNav>
  );
}

export default Header;
