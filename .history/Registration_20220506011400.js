import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default Registration = ({navigation}) => (
  <View style={{ padding: 20, marginTop: 50 }}>
    <Text>register screen</Text>
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