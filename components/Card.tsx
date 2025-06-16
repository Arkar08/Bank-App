import React from 'react'
import { Text, View } from 'react-native'

interface renderProp {
  item:{
    _id:string,
    amount:number,
    transactionTime:string,
    transactionType:string
  }
}


const Card = ({item}:renderProp) => {
  return (
    <View className='w-[95%] ml-2 border-b border-b-[#59008c] rounded-lg flex flex-row justify-between items-center px-5 p-1'>
      <View>
        <Text  className={item.transactionType === 'Withdraw' ? "text-red-500 text-xl capitalize" : item.transactionType === 'Deposit' ? "text-green-500 text-xl capitalize" : 'text-blue-500 text-xl capitalize'}>{item.transactionType}</Text>
        <Text className='text-gray-500'>{item.transactionTime}</Text>
      </View>
      <View>
        <Text className='text-xl text-center font-semibold'>{item.amount} Ks</Text>
      </View>
    </View>
  )
}

export default Card

