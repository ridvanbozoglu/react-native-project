import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExitButton from "./UI/ExitButton";
import { Character } from "@/types";

export default function SelectedRicks({ item }: { item: Character }) {
  const { id, name } = item;
  return (
    <View style={styles.selectedRick}>
      <Text>{name}</Text>
      <ExitButton id={id}></ExitButton>
    </View>
  );
}

const styles = StyleSheet.create({
  selectedRick: {
    backgroundColor: "#e2e8f0",
    padding: 7,
    borderRadius: 10,
    marginHorizontal: 4,
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
});
