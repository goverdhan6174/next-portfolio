export interface ThemeType {
  canvasColor: string;
  backgroundColor: string;
  textColor: string;
  primaryColor: string;
  borderRadius: string;
  colors: {
    main: string;
    secondary: string;
  };
}

export const LightTheme: ThemeType = {
  canvasColor: "whitesmoke",
  backgroundColor: "lavender",
  textColor: "#020419",
  // primaryColor: "Lavender",
  // primaryColor: "LightSeaGreen",
  primaryColor: "SteelBlue",
  borderRadius: "50%",
  colors: {
    main: "#fff",
    secondary: "#FFf",
  },
};

export const DarkTheme: ThemeType = {
  canvasColor: "#020419",
  backgroundColor: "#020419",
  textColor: "lavender",
  primaryColor: "teal",
  borderRadius: "50%",
  colors: {
    main: "#000",
    secondary: "#000",
  },
};
