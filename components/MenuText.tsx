import React from 'react'
import { Text } from 'react-native'

interface Props{
    menu:string,
    color:string
}

const MenuText = ({menu,color}:Props) => {
  return (
      <Text className='text-center mt-2' style={{color:color}}>
        {menu}
      </Text>
  )
}

export default MenuText
