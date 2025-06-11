import CardMessage from '@/components/CardMessage'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const MessageScreen = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View className='mt-4'>
        <Text className='text-2xl text-center text-[#59008c] font-semibold'>All message</Text>
      </View>
      <ScrollView className='mt-3'>
        <View className='space-y-3 gap-5'>
          <CardMessage />
          <CardMessage />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MessageScreen
