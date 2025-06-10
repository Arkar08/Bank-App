import React from 'react'
import { View } from 'react-native'

const MenuView = ({...props}) => {
  return (
    <View className='bg-white w-[75px] h-[75px] flex justify-center items-center' style={{borderRadius:10}} {...props}/>
  )
}

export default MenuView

