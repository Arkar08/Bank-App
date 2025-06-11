import React from 'react'
import { Text, View } from 'react-native'

interface renderProp {
  item:{
    id:string,
    amount:string,
    date:string,
    text:string
  }
}


const Card = ({item}:renderProp) => {
  return (
    <View className='w-[95%] ml-2 border-b border-b-[#59008c] rounded-lg flex flex-row justify-between items-center px-5 p-1'>
      <View>
        <Text  className={item.text === 'withdraw' ? "text-red-500 text-xl capitalize" : item.text === 'deposit' ? "text-green-500 text-xl capitalize" : 'text-blue-500 text-xl capitalize'}>{item.text}</Text>
        <Text className='text-gray-500'>{item.date}</Text>
      </View>
      <View>
        <Text className='text-xl text-center font-semibold'>{item.amount} Ks</Text>
      </View>
    </View>
  )
}

export default Card

