import useTransactionStore from '@/store/useTransactionStore'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import RenderCard from './RenderCard'

const TransferPageView = () => {

    const{allTransaction} = useTransactionStore()
    const [transfer,setTransfer] = useState<any[]>([])

    useEffect(()=>{
      if(allTransaction.length > 0){
        const filtertransaction = allTransaction.filter((transaction)=>{
          if(transaction.transactionType === 'Transfer'){
            return transaction;
          }
        })
        setTransfer(filtertransaction)
      }
  },[allTransaction])

  return (
    <View className='mt-3 flex-1'>
      {
        transfer.length > 0 ? (
           <FlatList data={transfer} keyExtractor={(item)=>item._id} renderItem={({item})=>(
          <RenderCard item={item} key={item._id}/>
        )}/>
        ):(
          <View>
            <Text className="text-xl font-semibold text-center">No Transfer Transaction Found.</Text>
          </View>
        )
      }
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View className="space-y-5">
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
        </View>
      </ScrollView> */}
    </View>
  )
}

export default TransferPageView
