import React from 'react'
import { Image, Text, View } from 'react-native'

const bankImage = require('../assets/images/girl2.jpg')


interface renderProp {
  item:{
    id:string,
    amount:string,
    date:string,
    text:string
  }
}

const RenderCard = ({item}:renderProp) => {
  return (
    <View className='bg-white border-b border-b-[#59008c] border-solid p-4 flex-row justify-between items-center'>
      <View className='flex-row gap-2 items-center'>
        <View className='w-[50px] h-[50px] rounded-full'>
            <Image source={bankImage} className='w-full h-full rounded-full object-center'/>
        </View>
        <View>
            <Text className={item.text === 'withdraw' ? "text-red-500 text-xl capitalize" : item.text === 'deposit' ? "text-green-500 text-xl capitalize" : 'text-blue-500 text-xl capitalize'}>{item.text}</Text>
            <Text className='text-gray-500 mt-1'>{item.date}</Text>
        </View>
      </View>
      <View>
        <Text className='text-xl font-semibold'>{item.amount} Ks</Text>
      </View>
    </View>
  )
}

export default RenderCard
