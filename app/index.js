import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import { useState } from 'react';
import {Stack, useRouter} from 'expo-router';
import CustomHeader from '../components/header/Header';
import { COLORS, SIZES } from '../constants';
import WelcomeLanding from '../components/Landing/Welcome';


const Home = () => {

    const router = useRouter();

    return (
        <View style={{flex: 1}}>
    
            <CustomHeader background={COLORS.dim_green} />
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>

                <View style={{flex: 1}}>


                    {/* components */}
                    <WelcomeLanding />
                    


                </View>

            </ScrollView>
        </View>
    )
}

export default Home;

