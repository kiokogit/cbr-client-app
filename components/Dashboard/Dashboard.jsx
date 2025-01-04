import {useState} from "react";
import { View} from "react-native";
import { Text } from "react-native-paper";
import NotEnrolled from "./NotEnrolled";
import Ongoing from "./Ongoing";
import PendingStart from "./PendingStart";


const Dashboard = () => {

    const [cbrStatus, setCbrStatus] = useState({
        enrolled: false,
        classEnrolled: {
            class_title: "JKUATCU CBR 2025",
            class_status: "pending",
            start_date: "2025-01-6",
        }
    })


    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: "100%", padding: 10}}>
            {!cbrStatus.enrolled && <NotEnrolled />}
            {cbrStatus.enrolled && cbrStatus.classEnrolled.class_status === "pending" && <PendingStart cbr={cbrStatus.classEnrolled} />}
            {cbrStatus.enrolled && cbrStatus.classEnrolled.class_status === "ongoing" && <Ongoing cbr={cbrStatus.classEnrolled} />}
        </View>
    )
}


export default Dashboard;


