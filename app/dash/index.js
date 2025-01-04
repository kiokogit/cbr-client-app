import { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Text } from 'react-native';
import { COLORS, FONT, SIZES } from "../../constants";
import CustomHeader from '../../components/header/Header';
import { useRouter } from 'expo-router';
import Dashboard from '../../components/Dashboard/Dashboard';

const dash = ({user={name: "Joan", profile_updated: true}, }) => {

    const router = useRouter()

    useEffect(() => {
        if (!user){
            router.replace('/login')
    
        } else if (user && !user.profile_updated){
            router.replace('/update_profile')
        }
    }, [user])
    

    return (
        <View style={{flex: 1, backgroundColor: COLORS.main_background}}>

            <CustomHeader isLoggedIn={true} background={COLORS.main_background} user={user} />
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                
                <Dashboard />

            </ScrollView>

        </View>
    )
}

export default dash;