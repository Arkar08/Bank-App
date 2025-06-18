
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
    <View className=' bg-white w-[95%]  mx-auto mt-1.5 rounded-lg flex flex-row justify-between items-center px-5 py-1.5'>
      <View>
        <Text  className={item.transactionType === 'Withdraw' ? "text-red-500 capitalize" : item.transactionType === 'Deposit' ? "text-green-500 capitalize" : 'text-blue-500 capitalize'}>{item.transactionType}</Text>
        <Text className='text-gray-500'>{item.transactionTime}</Text>
      </View>
      <View>
        <Text className='text-xl text-center font-semibold'>{item.amount} Ks</Text>
      </View>
    </View>
  )
}

export default Card

