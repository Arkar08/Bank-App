import Card from '@/components/Card'
import CurrentView from '@/components/CurrentView'
import HeaderView from '@/components/HeaderView'
import MenuText from '@/components/MenuText'
import MenuView from '@/components/MenuView'
import Entypo from '@expo/vector-icons/Entypo'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <View>
        <View className='flex flex-row p-5 justify-between items-center'>
            <HeaderView>
              <Ionicons name='person' size={24} color='white'/>
            </HeaderView>
            <HeaderView>
              <Ionicons name='notifications' size={24} color='white'/>
            </HeaderView>
        </View>
        <CurrentView>
          <Text className='text-center text-3xl'>
            Current Balance
          </Text>
          <Text className='text-center text-2xl mt-[20px] font-bold'>1000 Ks</Text>
        </CurrentView>
        <View className='flex flex-row gap-4 mt-6 justify-center items-center'>
             <View>
                <MenuView>
                  <Entypo name="plus" size={24} color="black" />
                </MenuView>
                <MenuText menu='Transfer'/>
            </View>
            <View>
              <MenuView>
                <Entypo name="plus" size={24} color="black" />
              </MenuView>
              <MenuText menu='Deposit'/>
            </View>
             <View>
              <MenuView>
                <Entypo name="plus" size={24} color="black" />
              </MenuView>
              <MenuText menu='Withdraw'/>
            </View>
            <View>
              <MenuView>
                <Entypo name="plus" size={24} color="black" />
              </MenuView>
              <MenuText menu='QR'/>
            </View>
        </View>
        <View className='mt-6'>
          <Text className='p-4 text-3xl'>Recent Transactions</Text>
          <View>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
