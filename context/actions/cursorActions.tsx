import { useGlobalContext } from "../globalContext";

function useCursorAction() {
  let globalContext = useGlobalContext();
  let cursorStyles: string[];
  let currentCursorType = "NORMAL";
  let cursorStates: string[];
  let currentCursorState = "FREE";

  function changeCursorType(cursorType: string) {
    if (!!globalContext) {
      cursorStyles = globalContext?.state.cursorStyles;
      cursorType = cursorType.toUpperCase();
      currentCursorType =
        (cursorStyles.includes(cursorType) && cursorType) || "NORMAL";

      globalContext?.dispatch({
        type: "CURSOR_TYPE",
        cursorType: currentCursorType,
      });
    }
  }

  function changeCursorState(cursorState: string, e?: any): void;
  function changeCursorState(cursorState: string, e: any): void;
  function changeCursorState(cursorState: any, e: any) {
    let left = -1,
      top = -1,
      width = -1,
      height = -1;

    if (typeof e !== null && typeof e !== "undefined") {
      let rect = e.target.getBoundingClientRect();
      left = rect.left;
      top = rect.top;
      width = rect.width;
      height = rect.height;
    }

    if (!!globalContext) {
      cursorStates = globalContext?.state.cursorStates;
      currentCursorState =
        (cursorStates.includes(cursorState) && cursorState) || "FREE";

      globalContext?.dispatch({
        type: "CURSOR_STATE",
        cursorState: currentCursorState,
        cursorLockedPosition: { left, top, width, height },
      });
    }
  }

  return { changeCursorType, changeCursorState };
}

export default useCursorAction;
