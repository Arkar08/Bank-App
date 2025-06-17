import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{title:"Profile",headerTintColor:"#59008c"}}/>
    </Stack>
  )
}

export default _layout
