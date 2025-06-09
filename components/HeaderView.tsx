import React from 'react'
import { View } from 'react-native'

const HeaderView = ({...props}) => {
  return (
   <View {...props} className='w-[60px] h-[60px] rounded-full bg-blue-500 flex justify-center items-center'/>
  )
}

export default HeaderView
