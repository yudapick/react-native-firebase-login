import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Home = ({navigation}) => (
    <View style={[styles.container, styles.horizontal]}>
        <Text>homeeeee</Text>
    </View>
)

export {Home}

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