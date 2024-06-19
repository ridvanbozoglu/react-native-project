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
    <SafeAreaView className="flex-[1] w-full items-center p-[20]  bg-[#ffffff]">
      <View className="bg-gray-200 border border-gray-400 rounded-[15px]  mb-3 flex-row items-center w-[90%] p-1">
        <View className="max-w-[80%]  border-gray-400 rounded-[15px] overflow-hidden">
          <View className="rounded-[5px] flex-[1] max-w-full">
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
          className="h-[40] flex-[1] rounded-[10] py-[10] mx-[5]"
          placeholder="Search for Rick..."
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />
      </View>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error fetching data</Text>}
      {data && (
        <View className="w-[90%] bg-[#f8fafc] overflow-hidden border-[gray] border rounded-[15px] mb-[70px]">
          <FlatList
            data={data?.results ?? []}
            renderItem={({ item }: { item: Character }) => (
              <RickItems item={item} />
            )}
            keyExtractor={(item: Character) => item.id.toString()}
            ListEmptyComponent={
              !isLoading && !error ? (
                <Text className="text-center  text-[gray]">
                  No results found...
                </Text>
              ) : null
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
}
