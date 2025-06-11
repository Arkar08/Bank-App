import TransferBtn from '@/components/TransferBtn'
import TransferInput from '@/components/TransferInput'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Transfer = () => {

  const router = useRouter()

  const continueClick = () => {
    router.push("/transfer/[id]")
  }

  return (
    <View>
      <View className='bg-white mt-4 w-[95%] mx-auto rounded-lg p-4'>
        <View>
          <Text>Transfer to Phone Number</Text>
          <TransferInput keyboardType="numeric" placeholder='Enter Phone Number'/>
          <View className='mt-4'>
              <TransferBtn onPress={continueClick} text="Continue"/>
          </View>
        </View>
      </View>
      <View className='mt-6'>
        <View className='flex-row justify-between items-center px-4'>
          <Text className='text-2xl font-semibold'>Recent Transfers</Text>
          <Ionicons name='trash'color='gray' size={24}/>
        </View>
      </View>
      <View className='m-6 gap-2'>
          <View className='border-b border-b-blue-300 border-solid rounded-lg p-4'>
            <Text className='text-xl'>Aung Aung</Text>
          </View>
          <View className='border-b border-b-blue-300 border-solid rounded-lg p-4'>
            <Text className='text-xl'>Aung Aung</Text>
          </View>
          <View className='border-b border-b-blue-300 border-solid rounded-lg p-4'>
            <Text className='text-xl'>Aung Aung</Text>
          </View>
      </View>
    </View>
  )
}

export default Transfer
