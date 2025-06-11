import React from 'react'
import { Text, View } from 'react-native'

const Card = () => {
  return (
    <View className='w-[95%] ml-2 border-b border-b-[#59008c] rounded-lg flex flex-row justify-between items-center px-5 p-1'>
      <View>
        <Text className='text-xl'>Withdraw</Text>
        <Text className='text-xl'>3h ago</Text>
      </View>
      <View>
        <Text className='text-xl text-center font-semibold'>+10000 Ks</Text>
      </View>
    </View>
  )
}

export default Card

