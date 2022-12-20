import React from "react";
import { View, Text, Image } from "react-native";

export const ImageDetail = ({ title, image }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
    </View>
  );
};
