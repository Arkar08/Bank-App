import React from 'react'
import { View } from 'react-native'

const MenuView = ({...props}) => {
  return (
    <View className='border-solid border w-[75px] h-[75px] rounded-lg flex justify-center items-center' {...props}/>
  )
}

export default MenuView

