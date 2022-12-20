import React from "react";
import { View } from "react-native";

import { ImageDetail } from "../components";

export const ImagesScreen = () => {
  return (
    <View>
      <ImageDetail title="Logo" image={require("../../assets/logo.png")} />
    </View>
  );
};
