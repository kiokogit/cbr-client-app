
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { COLORS, FONT, SIZES } from "../../constants";
import CustomHeader from '../../components/header/Header';
import ResetPassword from '../../components/auth/ResetPassword';

const forgot_password = () => {
    return (
        <View style={{flex: 1, backgroundColor: COLORS.main_background}}>

            <CustomHeader background={COLORS.main_background} />
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                <ResetPassword />
            </ScrollView>

        </View>
    )
}

export default forgot_password;

