import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{title:"Profile"}}/>
    </Stack>
  )
}

export default _layout
