import React from 'react'
import { Image, Text, View } from 'react-native'

const bankImage = require('../assets/images/girl2.jpg')


interface renderProp {
  text:string
}

const RenderCard = ({text}:renderProp) => {
  return (
    <View className='bg-white border-b border-b-[#59008c] border-solid p-4 flex-row justify-between items-center'>
      <View className='flex-row gap-2 items-center'>
        <View className='w-[50px] h-[50px] rounded-full'>
            <Image source={bankImage} className='w-full h-full rounded-full object-center'/>
        </View>
        <View>
            <Text className={text === 'withdraw' ? "text-red-500 text-xl capitalize" : text === 'deposit' ? "text-green-500 text-xl capitalize" : 'text-blue-500 text-xl capitalize'}>{text}</Text>
            <Text className='text-gray-500 mt-1'>23/7/2025 12:00AM</Text>
        </View>
      </View>
      <View>
        <Text className='text-xl font-semibold'>+10000 Ks</Text>
      </View>
    </View>
  )
}

export default RenderCard
