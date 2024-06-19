import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  StatusBar,
} from "react-native";
import { useGetRicks } from "@/api/reactQuery";
import RickItems from "@/components/RickItems";
import { Character } from "@/types";
import SelectedRicks from "@/components/SelectedRicks";
import useRickStore, { useSearch } from "@/zustand/store";

export default function HomeScreen() {
  const searchValue = useSearch((state) => state.searchValue);
  const setSearchValue = useSearch((state) => state.setSearchValue);

  const { data, error, isLoading } = useGetRicks(searchValue);

  const ricks = useRickStore((state) => state.ricks);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View style={styles.listContainerMax}>
          <View style={styles.listContainer}>
            <FlatList
              data={ricks ?? []}
              horizontal
              renderItem={({ item }) => <SelectedRicks item={item} />}
              keyExtractor={(item) => item.id.toString()}
              ListEmptyComponent={null}
            />
          </View>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Search for Rick..."
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />
      </View>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error fetching data</Text>}
      {data && (
        <View style={styles.fetchedList}>
          <FlatList
            data={data?.results ?? []}
            renderItem={({ item }: { item: Character }) => (
              <RickItems item={item} />
            )}
            keyExtractor={(item: Character) => item.id.toString()}
            ListEmptyComponent={
              !isLoading && !error ? (
                <Text style={styles.emptyText}>No results found...</Text>
              ) : null
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#ffffff",
  },
  textInput: {
    height: 40,
    paddingHorizontal: 10,
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
  searchBarContainer: {
    backgroundColor: "#f0f0f0",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    padding: 5,
  },
  listContainer: {
    borderRadius: 5,
    flex: 1,
    maxWidth: "100%",
  },
  listContainerMax: {
    maxWidth: "80%",
    borderColor: "gray",
    borderRadius: 15,
    overflow: "hidden",
  },
  fetchedList: {
    width: "90%",
    backgroundColor: "#f8fafc",
    overflow: "hidden",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 70,
  },
});
