import React from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { Character } from "@/types";
import AddRicksButton from "./UI/AddRicksButton";
import { useSearch } from "@/zustand/store";

export default function RickItems({ item }: { item: Character }) {
  const searchValue = useSearch((state) => state.searchValue);

  const findMatchingString = () => {
    const fetchedValueToLowercase = item.name.toLowerCase();
    const searchValueToLowercase = searchValue.toLowerCase();
    const firstIndex = fetchedValueToLowercase.indexOf(searchValueToLowercase);
    return (
      <Text>
        <Text>{item.name.slice(0, firstIndex)}</Text>
        <Text style={styles.boldText}>
          {item.name.slice(firstIndex, firstIndex + searchValue.length)}
        </Text>
        <Text>
          {item.name.slice(firstIndex + searchValue.length, item.name.length)}
        </Text>
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <AddRicksButton item={item}></AddRicksButton>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View>
        <View>{findMatchingString()}</View>
        <Text>{item.episode.length} Episodes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f8fafc",
    borderBottomWidth: 1,
    borderBottomColor: "#94a3b8",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
});
