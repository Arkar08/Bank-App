import React from 'react'
import { Text } from 'react-native'

interface Props{
    menu:string
}

const MenuText = ({menu}:Props) => {
  return (
      <Text className='text-center text-2xl mt-2'>
        {menu}
      </Text>
  )
}

export default MenuText
