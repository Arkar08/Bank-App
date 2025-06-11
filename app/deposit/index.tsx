import ProfileCard from '@/components/ProfileCard'
import { useRouter } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const Deposit = () => {

  const router = useRouter()

  const deposit = () => {
    router.push("/deposit/123")
  }

  return (
    <View className='mt-6 w-[95%] mx-auto'>
      <ProfileCard text='Cash In Branch' profilePress={deposit}/>
    </View>
  )
}

export default Deposit
