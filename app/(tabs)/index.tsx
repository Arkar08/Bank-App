import Card from "@/components/Card";
import CurrentView from "@/components/CurrentView";
import HeaderView from "@/components/HeaderView";
import MenuBox from "@/components/MenuBox";
import useProfile from "@/store/useProfile";
import useTransactionStore from "@/store/useTransactionStore";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const HomeScreen = () => {

  const {recentList,getRecentList} = useTransactionStore()
  const {userList,getUsers} = useProfile()
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    const fetchRecent = async()=>{
      setLoading(true)
      try {
        await getRecentList()
      } catch (error:any) {
        throw (error.response.data.message)
      }finally{
        setLoading(false)
      }
    }

    const fetchUserProfile = async()=>{
      setLoading(true)
      try {
        await getUsers()
      } catch (error:any) {
        throw (error.response.data.message)
      }finally{
        setLoading(false)
      }
    }

    fetchRecent()
    fetchUserProfile()
  },[getRecentList,getUsers])


  const router = useRouter();

  const profileClick = () => {
    router.push("/(tabs)/account");
  };

  const notiClick = () => {
    router.push('/(tabs)/message')
  }

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
              {
                userList.profile !== '' && (
                  <Image source={{uri:userList.profile}} className="w-full h-full rounded-full object-center"/>
                )
              }
            </HeaderView>
            <View>
              <Text className="text-xl font-semibold text-[#59008c]">Hello,Good Morning</Text>
              <Text style={{fontSize:16,fontWeight:'bold'}} className="text-[#59008c] capitalize">{userList.name}</Text>
            </View>
          </View>
          <Pressable className="w-[40px]  p-2 h-[40px] justify-center items-center" style={{borderRadius:99999}} onPress={notiClick}>
            <Ionicons name="notifications" size={18} color="#59008c" />
          </Pressable>
        </View>
        <CurrentView color={'white'}>
          <Text className="text-center text-3xl text-[#59008c] font-semibold">Current Balance</Text>
          <Text className="text-center text-xl mt-[20px] font-semibold text-[#59008c]">
            {userList.account.balance}.00 Ks
          </Text>
        </CurrentView>
        <View className="flex flex-row gap-4 mt-2 justify-center items-center">
         <MenuBox icon="arrow-right-arrow-left" text="Transfer" changeRoute={transfer} color="blue"/>
         <MenuBox icon="add" text="Deposit" changeRoute={deposit} color="green"/>
         <MenuBox icon="arrow-down" text="Withdraw" changeRoute={withdraw} color="red"/>
         <MenuBox icon="qrcode" text="QRcode" changeRoute={qrCode} color="#59008c"/>
        </View>
        <View className="mt-2">
          <Text className="p-4 text-2xl font-semibold text-[#59008c]">Recent Transactions</Text>
          <View>
           {
            recentList.length > 0 ? (
               <FlatList data={recentList} keyExtractor={(item)=>item._id} renderItem={({item})=>(
                <Card item={item}/>
              )}/>
            ):(
              <View>
                <Text  className="text-xl font-semibold text-center">No Recent List Found.</Text>
              </View>
            )
           }
          </View>
          {
            loading && (
              <View>
                <ActivityIndicator />
              </View>
            )
          }
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
