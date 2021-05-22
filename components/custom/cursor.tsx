import React, { MutableRefObject, useEffect, useRef } from "react";
import { Cursor } from "../../styles/customStyles";
import { useGlobalContext } from "../../context/globalContext";

function CustomCursor() {
  let globalContext = useGlobalContext();
  let cursorType: string = "NORMAL";
  let cursorState: string = "Free";
  let cursorLockedPosition = {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  };

  if (globalContext?.state.cursorType) {
    cursorType = globalContext?.state.cursorType;
    cursorLockedPosition = globalContext?.state.cursorLockedPosition;
    cursorState = globalContext?.state.cursorState;
  }

  let pointer:
    | MutableRefObject<HTMLDivElement>
    | MutableRefObject<null> = useRef(null);

  const onMouseMove = (e: MouseEvent) => {
    if (!!pointer.current) {
      if (cursorState === "FREE") {
        pointer.current.style.top = `calc(${e.pageY}px)`;
        pointer.current.style.left = `calc(${e.clientX}px)`;
      }

      if (cursorState === "LOCKED") {
        pointer.current.style.top = `${
          cursorLockedPosition.top +( cursorLockedPosition.height / 2)
        }px`;
        pointer.current.style.left = `${
          cursorLockedPosition.left +( cursorLockedPosition.width / 2)
        }px`;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [cursorState]);

  return (
    <Cursor
      ref={pointer}
      className={`${cursorType === "NORMAL" ? "" : cursorType.toLowerCase()}`}
    />
  );
}

export default CustomCursor;
