
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { COLORS, FONT, SIZES } from "../../constants";
import CustomHeader from '../../components/header/Header';
import UpdateProfile from '../../components/auth/UpdateProfile';

const update_profile = () => {
    return (
        <View style={{flex: 1, backgroundColor: COLORS.main_background}}>
            
            <CustomHeader background={COLORS.main_background} />
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                <UpdateProfile />
            </ScrollView>

        </View>
    )
}

export default update_profile;