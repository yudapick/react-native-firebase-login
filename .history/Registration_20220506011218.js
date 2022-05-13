import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default Registration = ({navigation}) => (
    <View style={[styles.container, styles.horizontal]}>
        <Text>heyyy<br/>yyyy</Text>
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