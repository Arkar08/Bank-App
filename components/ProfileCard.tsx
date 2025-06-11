import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable, Text } from 'react-native';

interface Props{
    text:string,
    profilePress?:()=>void;
}


const ProfileCard = ({text,profilePress}:Props) => {
  return (
    <Pressable className='border-b p-5 border-b-[#59008c] border-solid rounded-lg flex-row justify-between items-center bg-white' onPress={profilePress}>
      <Text>{text}</Text>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </Pressable>
  )
}

export default ProfileCard
