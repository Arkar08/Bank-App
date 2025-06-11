import Card from "@/components/Card";
import CurrentView from "@/components/CurrentView";
import HeaderView from "@/components/HeaderView";
import MenuBox from "@/components/MenuBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profileImage = require("../../assets/images/girl2.jpg")

const HomeScreen = () => {
  const router = useRouter();

  const profileClick = () => {
    router.push("/(tabs)/account");
  };

  const transfer = ()=>{
    router.push("/transfer")
  }

  const deposit = ()=>{
    router.push("/deposit")
  }

  const qrCode = ()=>{
    router.push('/qrcode')
  }

  const withdraw = ()=>{
    router.push("/withdraw")
  }


  return (
    <SafeAreaView className="flex-1">
      <View>
        <View className="flex flex-row p-4 justify-between items-center">
          <View className="flex-row items-center gap-2">
            <HeaderView press={profileClick}>
              <Image source={profileImage} className="w-full h-full rounded-full object-center"/>
            </HeaderView>
            <View>
              <Text className="text-xl font-semibold">Hello , Good Morning</Text>
              <Text style={{fontSize:14}}>Arkar</Text>
            </View>
          </View>
          <View className="w-[50px]  p-2 h-[50px] justify-center items-center border border-[#59008c] border-solid" style={{borderRadius:99999}}>
            <Ionicons name="notifications" size={18} color="black" />
          </View>
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
          <Text className="p-4 text-2xl font-semibold">Recent Transactions</Text>
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
