
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { COLORS, FONT, SIZES } from "../../constants";
import CustomHeader from '../../components/header/Header';
import Login from '../../components/auth/Login';

const login = () => {
    return (
        <View style={{flex: 1, backgroundColor: COLORS.main_background}}>

            <CustomHeader background={COLORS.main_background} />
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                <Login />
            </ScrollView>

        </View>
    )
}

export default login;

