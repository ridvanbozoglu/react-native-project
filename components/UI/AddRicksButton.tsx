import React, { useEffect, useState } from "react";
import { View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import useRickStore from "@/zustand/store";
import { Character } from "@/types";

export default function AddRicksButton({ item }: { item: Character }) {
  const [isChecked, setIsChecked] = useState(false);
  const removeRick = useRickStore((state) => state.removeRick);
  const addRick = useRickStore((state) => state.addRick);
  const ricks = useRickStore((state) => state.ricks);

  const toggleIsChecked = () => {
    setIsChecked((prev) => !prev);
  };

  const onPressButton = () => {
    toggleIsChecked();
    isChecked ? removeRick(item.id) : addRick(item);
  };

  useEffect(() => {
    if (ricks.some((rick) => rick.id === item.id)) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [ricks]);

  return (
    <View className="items-center justify-center mx-2.5">
      <Pressable onPress={onPressButton}>
        <View
          className={`w-5 h-5 m-2.5 rounded border border-black justify-center items-center ${
            isChecked ? "bg-blue-500" : ""
          }`}
        >
          {isChecked && <FontAwesome name="check" size={15} color="white" />}
        </View>
      </Pressable>
    </View>
  );
}
