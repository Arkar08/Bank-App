import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
    item:{
        id:string,
        name:string
    },
    renderClick:(id:string)=>void;
}

const RecentCard = ({item,renderClick}:Props) => {
  return (
    <Pressable className="border-b border-b-[#59008c] border-solid rounded-lg p-4" onPress={()=>renderClick(item.id)}>
      <Text className="text-xl">{item.name}</Text>
    </Pressable>
  );
};

export default RecentCard;
