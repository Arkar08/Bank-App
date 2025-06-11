import { transferslip } from '@/utils/dummy'
import React from 'react'
import { FlatList, View } from 'react-native'
import RenderCard from './RenderCard'

const TransferPageView = () => {
  return (
    <View className='mt-3 flex-1'>
      <FlatList data={transferslip} keyExtractor={(item)=>item.id} renderItem={({item})=>(
        <RenderCard item={item} key={item.id}/>
      )}/>
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View className="space-y-5">
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
          <RenderCard text='transfer'/>
        </View>
      </ScrollView> */}
    </View>
  )
}

export default TransferPageView
