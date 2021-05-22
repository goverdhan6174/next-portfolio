import React from "react";
import useCursorAction from "../../context/actions/cursorActions";

import {
  ExpandedHeader,
  ExpandedList,
  ExpandedContent,
  Icon,
  Row,
} from "../../styles/MaterialStyles";

function ExpandList(props: any) {
  const cursorType = useCursorAction().changeCursorType;

  return (
    <ExpandedList>
      <ExpandedHeader
        onClick={() => props.expandList(props.index)}
        onMouseEnter={() => cursorType("HOVERED")}
        onMouseLeave={() => cursorType("NORMAL")}
      >
        <Icon>{props.iconRender(props.isActive)}</Icon>
        {props.heading}
      </ExpandedHeader>
      <ExpandedContent
        animate={{
          height: props.isActive ? "auto" : "0px",
        }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {!props.fluid && (
          <Row style={{ justifyContent: "flex-start", paddingLeft: "1%" }}>
            <Icon style={{ opacity: 0 }}>
              {props.iconRender(props.isActive)}
            </Icon>
            <div>{props.children}</div>
          </Row>
        )}

        {props.fluid && props.children}
      </ExpandedContent>
    </ExpandedList>
  );
}

export default ExpandList;
