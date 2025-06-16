import useTransactionStore from "@/store/useTransactionStore";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import RenderCard from "./RenderCard";

const WithdrawPageView = () => {

   const{allTransaction} = useTransactionStore()
    const [withdraw,setWithdraw] = useState<any[]>([])

    useEffect(()=>{
      if(allTransaction.length > 0){
        const filtertransaction = allTransaction.filter((transaction)=>{
          if(transaction.transactionType === 'Withdraw'){
            return transaction;
          }
        })
        setWithdraw(filtertransaction)
      }
  },[allTransaction])

  return (
    <View className="mt-3 flex-1">
       {
        withdraw.length > 0 ? (
           <FlatList data={withdraw} keyExtractor={(item)=>item._id} renderItem={({item})=>(
          <RenderCard item={item} key={item._id}/>
        )}/>
        ):(
          <View>
            <Text className="text-xl font-semibold text-center">No Withdraw Transaction Found.</Text>
          </View>
        )
       }
    </View>
  );
};

export default WithdrawPageView;
