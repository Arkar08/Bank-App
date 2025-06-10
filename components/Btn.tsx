import React from 'react'
import { Pressable, Text } from 'react-native'

const Btn = () => {
  return (
    <Pressable className='bg-white p-5 justify-center items-center border border-solid rounded-lg'>
      <Text className='text-2xl'>Logout</Text>
    </Pressable>
  )
}

export default Btn
