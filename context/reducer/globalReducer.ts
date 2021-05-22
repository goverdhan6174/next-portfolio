import { IGlobalState } from "./globalState";

export const GlobalReducer = (state: IGlobalState, action: any) => {
  switch (action.type) {

    case "TOGGLE_DRAWER" : {
      return {
        ...state,
        isDrawerOpen : !state.isDrawerOpen
      };
    }

    case "TOGGLE_THEME": {
      let newTheme = state.currentTheme === "dark" ? "light" : "dark";
      window.localStorage.setItem("theme", newTheme);
      return {
        ...state,
        currentTheme: newTheme,
      };
    }

    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }

    case "CURSOR_STATE": {
      return {
        ...state,
        cursorState: action.cursorState,
        cursorLockedPosition : action.cursorLockedPosition
      };
    }

    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
};
