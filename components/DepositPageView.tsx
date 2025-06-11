import { transferslip } from '@/utils/dummy'
import React from 'react'
import { FlatList, View } from 'react-native'
import RenderCard from './RenderCard'

const DepositPageView = () => {
  return (
    <View className='mt-3 flex-1'>
      <FlatList data={transferslip} keyExtractor={(item)=>item.id} renderItem={({item})=>(
        <RenderCard item={item} key={item.id}/>
      )}/>
      {/* <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView> */}
    </View>
  )
}

export default DepositPageView

