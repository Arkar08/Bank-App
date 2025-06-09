import React from 'react'
import { Text, View } from 'react-native'

const Card = () => {
  return (
    <View className='w-[95%] ml-2 border-b rounded-lg flex flex-row justify-between items-center px-10 p-2'>
      <View>
        <Text className='text-xl text-center'>Withdraw</Text>
        <Text className='text-xl text-center'>3h ago</Text>
      </View>
      <View>
        <Text className='text-xl text-center font-semibold'>+10000 Ks</Text>
      </View>
    </View>
  )
}

export default Card

