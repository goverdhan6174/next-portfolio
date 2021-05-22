export interface IGlobalState {
  canvasColor: {
    dark: string;
    light: string;
  };
  currentTheme: string;
  cursorType: string;
  cursorStyles: string[];
  cursorState: string;
  cursorStates: string[];
  isDrawerOpen: boolean;
  cursorLockedPosition: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
}

export const initialGlobalState: IGlobalState = {
  canvasColor: {
    dark: "black",
    // dark: "#020419",
    light: "whitesmoke",
  },
  currentTheme: "light",
  cursorType: "NORMAL",
  cursorStyles: ["TEXTED", "POINTER", "HOVERED", "NORMAL"],
  cursorState: "FREE",
  cursorStates: ["LOCKED", "FREE"],
  isDrawerOpen: false,
  cursorLockedPosition: {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  },
};
