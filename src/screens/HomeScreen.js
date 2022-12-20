import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title={"Lists Screen"}
        onPress={() => navigation.navigate("Lists")}
      />
      <Button
        title={"Components Screen"}
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title={"Components Screen"}
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title={"Images Screen"}
        onPress={() => navigation.navigate("Images")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
