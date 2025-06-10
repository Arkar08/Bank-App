import React from 'react';
import { Pressable } from 'react-native';


interface HeaderProps {
  children:React.ReactNode,
  press?:()=>void;
}

const HeaderView = ({children,press}:HeaderProps) => {
  return (
   <Pressable className='w-[60px] h-[60px] bg-white flex justify-center items-center' style={{borderRadius:99999}} onPress={press}>{children}</Pressable>
  )
}

export default HeaderView
