import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default homeComponent = () => (
    <View style={[styles.container, styles.horizontal]}>
        <Text>homeeeee</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });