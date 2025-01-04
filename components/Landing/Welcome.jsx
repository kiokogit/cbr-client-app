
import { View } from "react-native"
import { COLORS, SIZES } from "../../constants";

import styles from "./styles";
import {useRouter} from 'expo-router';
import { Card, Text, Button, Avatar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const WelcomeLanding = () => {

    const router = useRouter();

    return (
        <View style={{flex: 1, backgroundColor: COLORS.dark_green}}>
            <View>
            <LinearGradient
                colors={[COLORS.dim_green, COLORS.dark_green]}
                >
            <View style={styles.container}>
                <Text style={styles.welcomeName}>C.B.R</Text>
            </View>

            <View style={styles.contentContainer}>

                <Text style={styles.italicisedName}> Consistent Bible Reading</Text>
                <Text style={styles.welcomeSlogan}>The hard way to build discipline in Fellowship with God</Text>

                <Button style={styles.getStartedBtn} onPress={() => router.push('/dash')}>
                    <Text style={{color: 'white'}}>Get Started</Text>
                </Button>
                
            </View>
            </LinearGradient>
            </View>
            <View style={{}}>

                <View style={styles.contentContainer2}>
                    
                    <Text style={styles.welcomeMessage}>Get Started with your Devotion Tracking and Recording</Text>
                    <Text style={styles.welcomeSlogan2}>CBR App helps you track your deviation from your set discipline for the duration of the courses and beyond.</Text>

                </View>
                <View style={{padding: 20}}>
                <Card>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                    <Card.Content>
                        <Text variant="titleLarge">Card title</Text>
                        <Text variant="bodyMedium">Card content</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>

                </View>


                <View style={styles.contentContainer2}>
                    
                    <Text style={styles.welcomeMessage}>Build a Lasting Discipline in Bible Reading and Prayer</Text>
                    <Text style={styles.welcomeSlogan2}>We fail to maintain discipline because we do not track the successes and the failures. Recording and rewarding yourself will entrench the discipline of reading the bible daily and consistently.</Text>

                </View>

            </View>
        </View>
    )
}


export default WelcomeLanding;
