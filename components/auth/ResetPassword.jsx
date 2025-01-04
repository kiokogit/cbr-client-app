import { useState } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button, Text} from 'react-native-paper';
import { COLORS, FONT, SIZES } from '../../constants';
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const ResetPassword = () => {

    const [loadingState, setLoadingState] = useState(false);
    const router = useRouter();

    return (
        <KeyboardAwareScrollView behavior={'height'} scrollEnabled={true} >
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: "100%"}}>
            <View >
                <View style={{justifyContent: "center", alignItems: "center", marginTop: 70}}>
                    <Text style={{fontFamily: FONT.rochester, fontSize: 20}}>Welcome to CBR</Text>
                </View>
                <View style={{justifyContent: "center", alignItems: "center", marginTop: 70, marginBottom: 50}}>
                    <Text style={{fontSize: SIZES.superLarge, fontWeight: "900", color: COLORS.jungle_green}}>Reset Password</Text>
                </View>
            </View>
            <View style={{padding: 20, paddingBottom:70, backgroundColor: COLORS.jungle_green, width: '100%', borderTopEndRadius: 80, borderTopStartRadius: 80}}>

                <View style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: COLORS.gray2, fontWeight: "800"}}>Enter your credentials</Text>
                </View>
                <View style={{marginTop: SIZES.medium}}>
                    <Text style={{color: COLORS.white, fontWeight: "800"}}>Email</Text>
                    <TextInput placeholder='Email address' dense={true} style={{marginTop: 10}} />
                </View>
                
                <View style={{marginTop: SIZES.medium, width: "60%", alignSelf: 'center'}}>
                    <Button 
                        buttonColor={COLORS.button_green} 
                        mode="contained" 
                        loading={loadingState} 
                        style={{ justifyContent: 'center', borderRadius: 8, maxWidth: '100%'}}
                        labelStyle={{fontWeight: '800'}}
                        onPress={() => console.log('Pressed')}>
                        Submit
                    </Button>
                </View>

                <View style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: COLORS.gray2, fontWeight: "800"}}>Back to login?<Text style={{color: COLORS.light_green, fontWeight: "800"}} onPress={() => router.back()}>  Sign in</Text></Text>
                </View>

            </View>
            
        </View>
        </KeyboardAwareScrollView>
        
    )

}

export default ResetPassword;



