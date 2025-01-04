import { Text, View, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  
  return (
    <TouchableOpacity onPress={handlePress} style={styles.btnContainer}>
        <Image source={iconUrl} resizeMode="cover" style={styles.btnImg(dimension)} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;