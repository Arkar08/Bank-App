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

  const transfer = ()=>{
    router.push("/transfer")
  }

  const deposit = ()=>{
    router.push('/deposit')
  }

  const qrCode = ()=>{
    router.push('/qrcode')
  }

  const withdraw = ()=>{
    router.push('/withdraw')
  }


  return (
    <SafeAreaView className="flex-1">
      <View>
        <View className="flex flex-row p-4 justify-between items-center">
          <HeaderView press={profileClick}>
            <Ionicons name="person" size={32} color="black" />
          </HeaderView>
          <HeaderView>
            <Ionicons name="notifications" size={24} color="black" />
          </HeaderView>
        </View>
        <CurrentView>
          <Text className="text-center text-2xl">Current Balance</Text>
          <Text className="text-center text-xl mt-[20px] font-semibold">
            1000 Ks
          </Text>
        </CurrentView>
        <View className="flex flex-row gap-4 mt-2 justify-center items-center">
         <MenuBox icon="arrow-right-arrow-left" text="Transfer" changeRoute={transfer}/>
         <MenuBox icon="add" text="Deposit" changeRoute={deposit}/>
         <MenuBox icon="arrow-down" text="Withdraw" changeRoute={withdraw}/>
         <MenuBox icon="qrcode" text="QRcode" changeRoute={qrCode}/>
        </View>
        <View>
          <Text className="p-4 text-3xl font-semibold">Recent Transactions</Text>
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
