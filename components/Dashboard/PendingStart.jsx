
import { View} from "react-native";
import { Text } from "react-native-paper";
import { formatDistanceToNow } from 'date-fns';
import { COLORS, FONT, SIZES } from "../../constants";


const convertToRelativeTime = (dateString) => {
    const date = new Date(dateString);
    try {
      return formatDistanceToNow(date, { addSuffix: false }).split(' ');
    } catch (error) {
        console.log(date);
    }
  };

const PendingStart = ({cbr}) => {


    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: "100%"}}>
            <View style={{marginTop: 20}}>
                <Text style={{textAlign: 'center', color: COLORS.gray, fontFamily: 'RobotoMono'}}>CBR 2025</Text>

            </View>
            <View style={{marginTop: 70}}>
                <Text style={{textAlign: 'center', color: COLORS.gray, fontFamily: 'RobotoMono'}}>Your request has been approved.</Text>
                <Text style={{textAlign: 'center', color: COLORS.gray, fontFamily: 'RobotoMono'}}> You are Enrolled to:</Text>

            </View>
            <View style={{marginTop: 30, marginBottom: 30}}>
                <Text style={{textAlign: 'center', fontSize: SIZES.xLarge, fontFamily: 'Arial', fontWeight: 900, color: 'rgba(144, 11, 9, 1)'}}>{cbr.class_title}</Text>

            </View>

            <View style={{marginTop: 10, marginBottom: 30}}>
                <Text style={{textAlign: 'center', color: COLORS.dim_green, margin: 20}}>Class Starts in </Text>
                <Text style={{textAlign: 'center', fontFamily: 'Arial', fontWeight: 900, fontSize: 64, color: COLORS.dim_green}}>{convertToRelativeTime(cbr.start_date)[0]}</Text>
                <Text style={{textAlign: 'center', color: COLORS.dim_green, fontFamily: 'Arial', fontWeight: 900, fontSize: 20,}}>{convertToRelativeTime(cbr.start_date)[1]}</Text>
            </View>

            <View style={{marginTop: 10, marginBottom: 30}}>
                <Text style={{textAlign: 'center', fontSize: SIZES.xxLarge, fontWeight: "900", color: COLORS.jungle_green}}>Awaiting Class to start</Text>

            </View>
            <View style={{marginTop: 30, marginBottom: 30, width: '80%'}}>
                <Text style={{textAlign: 'center', color: COLORS.gray, fontFamily: 'RobotoMono'}}>Meanwhile, Ensure you attend the first lesson to have your app classes started by the Moderator.</Text>

            </View>
        </View>
    )
}


export default PendingStart;

