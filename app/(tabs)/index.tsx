import Card from "@/components/Card";
import CurrentView from "@/components/CurrentView";
import HeaderView from "@/components/HeaderView";
import MenuBox from "@/components/MenuBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const router = useRouter();

  const profileClick = () => {
    router.push("/(tabs)/account");
  };

  return (
    <SafeAreaView className="flex-1">
      <View>
        <View className="flex flex-row p-5 justify-between items-center">
          <HeaderView press={profileClick}>
            <Ionicons name="person" size={32} color="black" />
          </HeaderView>
          <HeaderView>
            <Ionicons name="notifications" size={24} color="black" />
          </HeaderView>
        </View>
        <CurrentView>
          <Text className="text-center text-3xl">Current Balance</Text>
          <Text className="text-center text-2xl mt-[20px] font-bold">
            1000 Ks
          </Text>
        </CurrentView>
        <View className="flex flex-row gap-4 mt-6 justify-center items-center">
         <MenuBox icon="arrow-right-arrow-left" text="Transfer"/>
         <MenuBox icon="add" text="Deposit"/>
         <MenuBox icon="arrow-down" text="Withdraw"/>
         <MenuBox icon="qrcode" text="QR"/>
        </View>
        <View className="mt-3">
          <Text className="p-4 text-3xl">Recent Transactions</Text>
          <View>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
