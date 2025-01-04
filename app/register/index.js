
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { COLORS, FONT, SIZES } from "../../constants";
import CustomHeader from '../../components/header/Header';
import Register from '../../components/auth/Register';

const register = () => {
    return (
        <View style={{flex: 1, backgroundColor: COLORS.main_background}}>
            
            <CustomHeader background={COLORS.main_background} />
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                <Register />
            </ScrollView>

        </View>
    )
}

export default register;
