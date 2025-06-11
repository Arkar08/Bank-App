import { transferslip } from "@/utils/dummy";
import React from "react";
import { FlatList, View } from "react-native";
import RenderCard from "./RenderCard";

const WithdrawPageView = () => {
  return (
    <View className="mt-3 flex-1">
        <FlatList data={transferslip} keyExtractor={(item)=>item.id} renderItem={({item})=>(
        <RenderCard item={item} key={item.id}/>
      )}/>
    </View>
  );
};

export default WithdrawPageView;
