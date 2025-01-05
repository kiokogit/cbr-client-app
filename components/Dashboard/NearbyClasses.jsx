import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyclassesstyles";
import { COLORS } from "../../constants";
import NearbyClassCard from "./NearbyClassCard"
import useFetch from "../../hook/useFetch";

const Nearbyclasses = ({handleCardPress}) => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby classes</Text>
        {/* <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((cls) => (
            <NearbyClassCard
            cls={cls}
              key={`nearby-job-${cls?.id}`}
              handleNavigate={() => handleCardPress(cls)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyclasses;