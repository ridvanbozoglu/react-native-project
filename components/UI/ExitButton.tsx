import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import useRickStore from "@/zustand/store";

export default function ExitButton({ id }: { id: number }) {
  const removeRick = useRickStore((state) => state.removeRick);

  return (
    <TouchableOpacity
      style={styles.buttonTouchable}
      onPress={() => {
        removeRick(id);
      }}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>X</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonTouchable: {
    padding: 4,
  },
  button: {
    backgroundColor: "#94a3b8",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
  },
  buttonText: {
    color: "#000",
  },
});
