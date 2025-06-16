import React from 'react';
import { View } from 'react-native';

interface CurrentProps{
  children:React.ReactNode,
  color:string
}

const CurrentView = ({children,color}:CurrentProps) => {
  return (
      <View className="w-[360px] h-[150px] justify-center mx-auto rounded-lg p-3" style={{backgroundColor:color}}>
        {children}
      </View> 
  )
}

export default CurrentView;
