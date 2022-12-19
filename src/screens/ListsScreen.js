import React from "react";
import { FlatList, Text } from "react-native";

const ListsScreen = () => {
  return (
    <FlatList
      data={[{ name: "Mohammad" }, { name: "Yazan" }, { name: "Malek" }]}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default ListsScreen;
