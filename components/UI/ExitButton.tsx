import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useRickStore from "@/zustand/store";

export default function ExitButton({ id }: { id: number }) {
  const removeRick = useRickStore((state) => state.removeRick);

  return (
    <TouchableOpacity
      className="p-1"
      onPress={() => {
        removeRick(id);
      }}
    >
      <View className="bg-gray-400 rounded items-center justify-center w-[30] h-[30]">
        <Text className="text-black">X</Text>
      </View>
    </TouchableOpacity>
  );
}
