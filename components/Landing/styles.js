import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "100%",
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 150
  },
  welcomeMessage: {
    fontFamily:"Arial",
    fontSize: SIZES.xLarge,
    fontWeight: 800,
    marginTop: 2,
    color: COLORS.white,
     textAlign: 'center',
    lineHeight: 50
  },
  italicisedName: {
    fontFamily: "Rochester",
    fontSize: SIZES.xxLarge,
    color: COLORS.white,
    textAlign: 'center'

  },
  welcomeName: {
    fontFamily: FONT.akaya,
    fontSize: 96,
    color: COLORS.white,
     textAlign: 'center'
  },
  welcomeSlogan: {
    fontFamily: "Arial",
    fontSize: SIZES.small,
    marginTop: 10,
    color: COLORS.white,
     textAlign: 'center',
     
  },
  contentContainer: {
    width: "100%",
    paddingTop: 150,
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 5,
    paddingBottom: 60
  },

  contentContainer2: {
    width: "100%",
    paddingTop: 50,
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 5,
    padding: 60

  },
  getStartedBtn: {
    marginTop: 20,
    width: 150,
    height: 40,
    backgroundColor: "rgba(78, 39, 181, 1)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  welcomeSlogan2: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    marginTop: 10,
    color: COLORS.white,
     textAlign: 'center',
     lineHeight: 30,
     backgroundImage: "linear-gradient( rgb(180, 125, 164) 0%, rgb(168, 177, 32) 100%)"
  },
});

export default styles;