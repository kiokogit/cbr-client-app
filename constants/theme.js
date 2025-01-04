const COLORS = {
    primary: "#312651",
    secondary: "#444262",
    tertiary: "#FF7754",
  
    gray: "rgba(81, 79, 79, 0.8)",
    gray2: "#C1C0C8",
  
    white: "#F3F4F8",
    lightWhite: "#FAFAFC",
    jungle_green: "rgba(2, 39, 8, 0.85)",
    main_background: "rgba(205, 202, 205, 1)",
    light_green: "rgba(157, 204, 165, 1)",
    button_green: "rgba(2, 39, 8, 1)",

    dim_green: "rgba(94, 136, 101, 1)",
    dark_green: "rgba(24, 34, 25, 1)"
  };
  
  const FONT = {
    regular: "DMRegular",
    medium: "DMMedium",
    bold: "DMBold",

    rochester: "Rochester",
    akaya: "Akaya",
    mono: "RobotoMono"
  };
  
  const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
    superLarge: 36,
  };
  
  const SHADOWS = {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  };
  
  export { COLORS, FONT, SIZES, SHADOWS };