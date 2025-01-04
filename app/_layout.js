import { Stack } from "expo-router";

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { useCallback } from "react";
import {
    MD3LightTheme as DefaultTheme,
    PaperProvider,
  } from 'react-native-paper';

// SplashScreen.preventAutoHideAsync()

const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      ...DefaultTheme.colors,
      myOwnColor: '#BADA55',
    },
  };

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
        Akaya: require('../assets/fonts/AkayaTelivigala-Regular.ttf'),
        RobotoMono: require('../assets/fonts/RobotoMono-VariableFont_wght.ttf'),
        Rochester: require('../assets/fonts/Rochester-Regular.ttf'),

    })

    // const onLayoutRootView = useCallback(async () => {
    //     if(fontsLoaded) {
    //         await SplashScreen.hideAsync()
    //     }
    // }, [fontsLoaded])

    // if (!fontsLoaded) {
    //     return null
    // }


    

    return (

        <PaperProvider theme={theme}>
            <Stack />
        </PaperProvider>


    )
}

export default Layout;
