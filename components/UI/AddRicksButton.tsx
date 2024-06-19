import React, { useEffect, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import useRickStore from "@/zustand/store";
import { Character } from "@/types";

export default function AddRicksButton({ item }: { item: Character }) {
  const [isChecked, setIsChecked] = useState(false);
  const removeRick = useRickStore((state) => state.removeRick);
  const addRick = useRickStore((state) => state.addRick);
  const ricks = useRickStore((state) => state.ricks);
  const {} = useRickStore();

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
    <View style={styles.container}>
      <Pressable onPress={onPressButton}>
        <View style={[styles.button, isChecked && styles.buttonChecked]}>
          {isChecked && <FontAwesome name="check" size={15} color="white" />}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  button: {
    width: 20,
    height: 20,
    margin: 10,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonChecked: {
    backgroundColor: "blue",
  },
});
