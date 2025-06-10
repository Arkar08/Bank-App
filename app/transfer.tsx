import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

const Transfer = () => {
  return (
    <View>
      <View className='bg-white mt-4 w-[95%] mx-auto rounded-lg p-4'>
        <View>
          <Text>Transfer to Phone Number</Text>
          <TextInput keyboardType='numeric'  placeholder='Enter Phone Number' className='px-3 bg-white border-b-2 border-solid border-b-blue-300 mt-3'/>
          <View className='mt-4'>
             <Pressable className='bg-[#59008c] p-3 rounded-lg justify-center items-center'>
              <Text className='text-xl text-white'>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View className='mt-6'>
        <View className='flex-row justify-between items-center px-4'>
          <Text className='text-xl font-semibold'>Recent Transfers</Text>
          <Ionicons name='trash'color='gray' size={24}/>
        </View>
      </View>
    </View>
  )
}

export default Transfer
