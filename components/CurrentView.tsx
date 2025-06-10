import React from 'react'
import { View } from 'react-native'

const CurrentView = ({...props}) => {
  return (
    <View {...props} className="w-[350px] mt-2 h-[150px] flex justify-center items-center mx-auto rounded-lg p-3 bg-white"/>
  )
}

export default CurrentView
