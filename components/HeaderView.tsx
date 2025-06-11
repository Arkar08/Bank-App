import React from 'react';
import { Platform, Pressable, ViewStyle } from 'react-native';


interface HeaderProps {
  children:React.ReactNode,
  press?:()=>void;
}

const HeaderView = ({children,press}:HeaderProps) => {

  const shadowStyle: ViewStyle = {
    borderRadius: 99999,
    backgroundColor: 'white',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  };

  return (
   <Pressable style={shadowStyle} onPress={press}>{children}</Pressable>
  )
}

export default HeaderView
