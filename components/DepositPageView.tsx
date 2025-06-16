import useTransactionStore from '@/store/useTransactionStore'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import RenderCard from './RenderCard'

const DepositPageView = () => {

  const{allTransaction} = useTransactionStore()
  const [deposit,setDeposit] = useState<any[]>([])

  useEffect(()=>{
    if(allTransaction.length > 0){
      const filtertransaction = allTransaction.filter((transaction)=>{
        if(transaction.transactionType === 'Deposit'){
          return transaction;
        }
      })
      setDeposit(filtertransaction)
    }
  },[allTransaction])

  

  return (
    <View className='mt-3 flex-1'>
     {
      deposit.length > 0 ?(
         <FlatList data={deposit} keyExtractor={(item)=>item._id} renderItem={({item})=>(
        <RenderCard item={item} key={item._id}/>
      )}/>
      ):(
        <View>
          <Text className="text-xl font-semibold text-center">No Deposit Transaction Found.</Text>
        </View>
      )
     }
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View className="space-y-5">
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
        </View>
      </ScrollView> */}
    </View>
  )
}

export default DepositPageView

