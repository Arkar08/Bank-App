import React from 'react'
import { Text, View } from 'react-native'

const CardMessage = () => {
  return (
    <View className='h-[80px] border border-[#59008c] border-solid w-[95%] mx-auto rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md p-3'>
      <View className='flex-row justify-between items-center'>
        <Text className='text-xl font-semibold'>Arkar</Text>
        <Text className='text-gray-500'>3h ago</Text>
      </View>
        <View className='text-ellipsis h-[35px]'>
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, laboriosamsdfhkskdkdkdkdkdkdkdkdkddkdkkdkdkdkkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkddkkfdkkdkdkddkdkdkddkdkdkdkdkdkdkdk.</Text>
        </View>
    </View>
  )
}

export default CardMessage
