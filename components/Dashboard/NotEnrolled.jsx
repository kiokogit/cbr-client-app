import { useState } from "react";
import { KeyboardAvoidingView, View} from "react-native";
import { Text, Searchbar, Modal, Portal, Card, TextInput, Button} from "react-native-paper";
import { COLORS, SIZES } from "../../constants";
import { Link } from "expo-router";
import PopularClasses from "./PopularClasses";
import Nearbyclasses from "./NearbyClasses";


const NotEnrolled = ({requested_class=null}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [visible, setVisible] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null)

    const showModal = (cls) => {
        setVisible(true)
        setSelectedClass(cls)
    };
    const hideModal = () => {
        setVisible(false)
        setSelectedClass(null)
    }


    return (
    <View style={{flex: 1}}>
        <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={0}>
            <Portal>
                <Modal visible={visible} onDismiss={() => {}} contentContainerStyle={{backgroundColor: 'white', margin: 20, borderRadius: 8, textAlign: 'center'}}>
                    <Card style={{justifyContent: 'center'}}>
                        <Card.Title style={{textAlign: 'center', justifyContent: 'center', alignContent: "center"}} title="Request Enrolment" subtitle="" />
                        <Card.Content>
                            <Text style={{textAlign: 'center'}} variant="titleLarge">{selectedClass?.class_title}</Text>
                            <Text style={{textAlign: 'center'}}  variant="bodyMedium">{selectedClass?.location}</Text>
                        </Card.Content>
                        
                            {selectedClass?.info_required?.length > 0 && <Card.Content>
                                <Text style={{textAlign: 'center', color: COLORS.gray, fontFamily: 'RobotoMono', marginTop: 5}}>{selectedClass.institution} requests the following information:</Text>
                                {selectedClass?.info_required.map(d =>
                                    <View style={{marginTop: SIZES.medium}}>
                                        <Text style={{color: COLORS.dim_green, fontWeight: "800"}}>{d.replace('_', ' ').replace('_', ' ')}</Text>
                                        <TextInput placeholder={d.replace('_', ' ')} dense={true} style={{marginTop: 5}} />
                                    </View>
                                )}
                        </Card.Content>
    }
                        {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                        <Card.Actions>
                            <Button style={{borderRadius: 5}} onPress={hideModal}>Cancel</Button>
                            <Button style={{borderRadius: 5, backgroundColor: COLORS.button_green}} onPress={() => window.alert('Request will be sent')}>Send Request</Button>
                        </Card.Actions>
                    </Card>
                </Modal>
            </Portal>
        </KeyboardAvoidingView>

        <View style={{marginTop: 5}}>
            <Text style={{textAlign: 'center', color: 'black', fontFamily: 'RobotoMono'}}>CBR 2025</Text>

        </View>
        <View style={{marginTop: 20, padding: 10}}>
            {requested_class? <Text style={{textAlign: 'center', color: COLORS.dark_green, fontFamily: 'Arial'}}>You have requested to join: {requested_class?.class_title}. Requesting another will cancel current request.</Text>

             : <Text style={{textAlign: 'center', color: COLORS.gray, fontFamily: 'RobotoMono'}}>You are not enrolled to any ongoing CBR class.</Text>}

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

            <PopularClasses handleCardPress={(cls) => showModal(cls)} />
            <Nearbyclasses handleCardPress={(cls) => showModal(cls)} />

        </View>
            
    </View>
    )
}


export default NotEnrolled;

