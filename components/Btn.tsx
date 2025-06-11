import React from 'react';
import { Pressable, Text } from 'react-native';


interface BtnProps{
  text:string,
  onPress?:()=>void;
}

const Btn = ({text,onPress}:BtnProps) => {
  return (
    <Pressable className='bg-white p-4 justify-center items-center rounded-md' onPress={onPress}>
      <Text className='text-xl'>{text}</Text>
    </Pressable>
  )
}

export default Btn
