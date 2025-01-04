import ScreenHeaderBtn from '../common/Buttons/ScreenHeaderBtn';
import {Text} from 'react-native';
import {Stack} from 'expo-router';
import { Avatar, IconButton } from 'react-native-paper';

import {COLORS, FONT, icons, images} from '../../constants'


const CustomHeader = ({background=COLORS.main_background, isLoggedIn=false, user=null}) => { 

    return (
        <>
        { isLoggedIn ?  <Stack.Screen 
            options={{
                headerStyle: {backgroundColor: background}, 
                headerLeft: () => (<> <Avatar.Image size={30} source={images.profile} /> <Text style={{fontFamily: FONT.rochester, fontSize: 24, marginLeft: 12}}>Hello, {user?.name}!</Text></>
                ),
                headerRight: () => (<> 
                    <IconButton
                    icon={icons.notification}
                    iconColor={COLORS.dim_green}
                    size={20}
                    onPress={() => console.log('Pressed')}
                  />
                  <IconButton
                    icon={icons.messsages}
                    iconColor={COLORS.dim_green}
                    size={20}
                    onPress={() => console.log('Pressed')}
                  />
                    <IconButton
                    icon={icons.menuVertical}
                    iconColor={COLORS.dim_green}
                    size={20}
                    onPress={() => console.log('Pressed')}
                  /></>
                ),
                headerTitle: "",
                headerShadowVisible: true,
                headerBackButtonDisplayMode: "minimal",
                headerBackImageSource: icons.backarrow,
                
                }} /> :

                <Stack.Screen options={{
                    headerStyle: {backgroundColor: background},
                    headerTitle: "",
                    headerShadowVisible: false,
                    headerBackButtonDisplayMode: "minimal",
                    headerBackImageSource: icons.backarrow,
                    headerTintColor: COLORS.jungle_green
                }} 
                    
                    /> }
        </>
        
    )

}

export default CustomHeader;

