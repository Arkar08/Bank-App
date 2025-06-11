import ProfileCard from '@/components/ProfileCard'
import { useRouter } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const Withdraw = () => {

  const router = useRouter()

  const withdraw = () => {
    router.push("/withdraw/[id]")
  }

  return (
    <View className='mt-6 w-[95%] mx-auto'>
      <ProfileCard text='Cash Out Branch' profilePress={withdraw}/>
    </View>
  )
}

export default Withdraw
