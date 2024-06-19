import React from "react";
import { View, Text, Image } from "react-native";
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
        <Text className="font-bold">
          {item.name.slice(firstIndex, firstIndex + searchValue.length)}
        </Text>
        <Text>
          {item.name.slice(firstIndex + searchValue.length, item.name.length)}
        </Text>
      </Text>
    );
  };

  return (
    <View className="p-2.5 bg-gray-100 border-b border-gray-400 flex-row items-center">
      <AddRicksButton item={item} />
      <View className="w-20 h-20 mr-2.5">
        <Image
          source={{ uri: item.image }}
          className="w-full h-full rounded"
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
