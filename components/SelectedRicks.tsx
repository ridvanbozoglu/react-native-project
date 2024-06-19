import { View, Text } from "react-native";
import React from "react";
import ExitButton from "./UI/ExitButton";
import { Character } from "@/types";

export default function SelectedRicks({ item }: { item: Character }) {
  const { id, name } = item;
  return (
    <View className="bg-gray-200 p-1.75 rounded-lg mx-1 flex-row gap-0.5 items-center">
      <Text>{name}</Text>
      <ExitButton id={id}></ExitButton>
    </View>
  );
}
