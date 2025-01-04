import { useState } from "react";
import { View} from "react-native";
import { Text, Searchbar, Modal, Portal, Card, Avatar, Button} from "react-native-paper";
import { COLORS, SIZES } from "../../constants";
import { Link } from "expo-router";
import Popularjobs from "./PopularClasses";
import Nearbyclasses from "./NearbyClasses";


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


const NotEnrolled = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
    <View style={{flex: 1}}>

        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{backgroundColor: 'white', padding: 20}}>

                <Card>
                    <Card.Title title="Request Enrolment" subtitle="" left={LeftContent} />
                    <Card.Content>
                        <Text variant="titleLarge">JKUATCU MAIN CAMPUS CBR</Text>
                        <Text variant="bodyMedium">Jkuat, Kiambu County</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button onPress={hideModal}>Cancel</Button>
                        <Button onPress={() => window.alert('Request will be sent')}>Send Request</Button>
                    </Card.Actions>
                </Card>
            </Modal>
        </Portal>

        <View style={{marginTop: 5}}>
            <Text style={{textAlign: 'center', color: COLORS.gray, fontFamily: 'RobotoMono'}}>CBR 2025</Text>

        </View>
        <View style={{marginTop: 20, padding: 10}}>
            <Text style={{textAlign: 'center', color: COLORS.gray, fontFamily: 'RobotoMono'}}>You are not enrolled to any ongoing CBR class.</Text>

        </View>
        <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{textAlign: 'center', fontSize: SIZES.xLarge, fontWeight: "900", color: COLORS.jungle_green}}>Choose CBR Class</Text>

        </View>
        <View style={{justifyContent: "center", alignItems: "center"}}>
            <Searchbar
                style={{width: "100%", backgroundColor: COLORS.gray2}}
                placeholder="Search class..."
                onChangeText={setSearchQuery}
                value={searchQuery}
                />
        </View>
            
        <View style={{marginTop: 10, justifyContent: 'center', alignItems: "flex-end"}}>
            <Text style={{ color: COLORS.gray, fontFamily: 'Arial'}}>Cannot find a class? You can <Link style={{color: 'blue'}} href={""}>Request for a class</Link></Text>
        </View>

        <View>

            <Popularjobs handleCardPress={showModal} />
            <Nearbyclasses handleCardPress={showModal} />

        </View>
            
    </View>
    )
}


export default NotEnrolled;

