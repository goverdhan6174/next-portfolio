import React from "react";
import Link from "next/link";
import useCursorAction from "../../context/actions/cursorActions";
import { useGlobalContext } from "../../context/globalContext";

import {
  BoxContainer,
  NavFooterText,
  NavFooterLink,
} from "../../styles/customStyles";
import { Row, Column } from "../../styles/MaterialStyles";

function Footer(props: { isPrimary?: boolean }) {
  let { changeCursorType } = useCursorAction();

  return (
    <BoxContainer fluid={false}>
      <Row noHeight>
        <Column noWidth>
          <Link href="" passHref>
            <NavFooterLink
              isPrimary={props.isPrimary}
              target="_blank"
              onHoverStart={(e) => {
                changeCursorType(props.isPrimary ? "HOVERED" : "POINTER");
              }}
              onMouseLeave={() => {
                changeCursorType(props.isPrimary ? "NORMAL" : "TEXTED");
              }}
            >
              mr_goverdhan
            </NavFooterLink>
          </Link>
          <NavFooterText isPrimary={props.isPrimary}>
            Say Hey
          </NavFooterText>
        </Column>
        <Link
          href="https://www.youtube.com/channel/UCqrxiLP9RHz2GxDJaZuTRBw"
          passHref
        >
          <NavFooterLink
            isPrimary={props.isPrimary}
            target="_blank"
            onHoverStart={(e) => {
              changeCursorType(props.isPrimary ? "HOVERED" : "POINTER");
            }}
            onMouseLeave={() => {
              changeCursorType(props.isPrimary ? "NORMAL" : "TEXTED");
            }}
          >
            Build with Wrong Akram
          </NavFooterLink>
        </Link>
      </Row>
    </BoxContainer>
  );
}

export default Footer;
