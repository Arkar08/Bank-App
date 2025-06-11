import React from 'react'
import { ScrollView, View } from 'react-native'
import RenderCard from './RenderCard'

const DepositPageView = () => {
  return (
    <View className='mt-3 flex-1'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="space-y-5">
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
          <RenderCard text='deposit'/>
        </View>
      </ScrollView>
    </View>
  )
}

export default DepositPageView

