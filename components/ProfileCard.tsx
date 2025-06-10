import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Pressable, Text } from 'react-native'

interface Props{
    text:string
}


const ProfileCard = ({text}:Props) => {
  return (
    <Pressable className='w-[95%] border-b border-solid p-3 rounded-lg flex-row justify-between items-center bg-white'>
      <Text className='text-xl'>{text}</Text>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </Pressable>
  )
}

export default ProfileCard
