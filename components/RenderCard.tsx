import React from 'react'
import { Image, Text, View } from 'react-native'

const bankImage = require('../assets/images/girl2.jpg')


interface renderProp {
  item:{
    _id:string,
    amount:string,
    transactionTime:string,
    transactionType:string
  }
}

const RenderCard = ({item}:renderProp) => {
  return (
    <View className='bg-white p-4 flex-row justify-between items-center w-[95%] mx-auto mt-1.5 rounded-lg'>
      <View className='flex-row gap-2 items-center'>
        <View className='w-[50px] h-[50px] rounded-full'>
            <Image source={bankImage} className='w-full h-full rounded-full object-center'/>
        </View>
        <View>
            <Text className={item.transactionType === 'Withdraw' ? "text-red-500  capitalize" : item.transactionType === 'Deposit' ? "text-green-500  capitalize" : 'text-blue-500 capitalize'}>{item.transactionType}</Text>
            <Text className='text-gray-500 mt-1'>{item.transactionTime}</Text>
        </View>
      </View>
      <View>
        <Text className='text-xl font-semibold'>{item.amount} Ks</Text>
      </View>
    </View>
  )
}

export default RenderCard
