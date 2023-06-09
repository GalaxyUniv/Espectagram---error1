import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DrawerNavigator from "./Navigation/DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <DrawerNavigator></DrawerNavigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
