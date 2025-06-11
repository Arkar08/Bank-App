import RecentCard from '@/components/RecentCard'
import TransferBtn from '@/components/TransferBtn'
import TransferInput from '@/components/TransferInput'
import { recentList } from '@/utils/dummy'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'

const Transfer = () => {

  const [disable,setDisable] = useState(true)
  const [inputText,setInputText] = useState('')
  const router = useRouter()

  const continueClick = () => {
    setInputText('')
    router.push("/transfer/123")
  }

  const phoneNumberChange = (text:string) => {
    setInputText(text)
    if(text === ''){
      setDisable(true)
    }else{
      setDisable(false)
    }
  }

  const renderClick = (id:string) => {
    setInputText(id)
    setDisable(false)
  }

  return (
    <View>
      <View className='bg-white mt-4 w-[95%] mx-auto rounded-lg p-4'>
        <View>
          <Text>Transfer to Phone Number</Text>
          <TransferInput keyboardType="numeric" placeholder='Enter Phone Number' change={phoneNumberChange} text={inputText}/>
          <View className='mt-4'>
              <TransferBtn onPress={continueClick} text="Continue" disable={disable}/>
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
          <FlatList keyExtractor={(item)=>item.id} data={recentList} renderItem={({item})=>
            <RecentCard item={item} key={item.id} renderClick={renderClick}/>
          }/>
      </View>
    </View>
  )
}

export default Transfer
