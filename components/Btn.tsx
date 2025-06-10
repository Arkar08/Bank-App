import React from 'react'
import { Pressable, Text } from 'react-native'


interface BtnProps{
  text:string
}

const Btn = ({text}:BtnProps) => {
  return (
    <Pressable className='bg-white p-4 justify-center items-center border border-solid rounded-lg'>
      <Text className='text-2xl'>{text}</Text>
    </Pressable>
  )
}

export default Btn
