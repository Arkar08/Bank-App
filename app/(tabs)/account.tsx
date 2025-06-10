import Btn from '@/components/Btn'
import ProfileCard from '@/components/ProfileCard'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const account = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text className='text-center text-4xl'>Profile</Text>
      <View className='justify-center items-center mt-4'>
        <View className='bg-gray-400 w-40 h-40 rounded-full'></View>
        <View className='mt-4'>
          <Text className='text-center text-2xl font-bold'>Arkar</Text>
          <Text className='text-center text-2xl font-bold'>arkar@gmail.com</Text>
          <View className='mt-4'>
            <Pressable className='p-2 bg-white border-solid border w-[200px] h-[50px] flex justify-center items-center rounded-lg'>
              <Text className='text-xl'>Edit Profile</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View className='gap-4 justify-center items-center mt-4'>
        <ProfileCard text='Notifications'/>
        <ProfileCard text='Change Pin/Password'/>
        <ProfileCard text='Change Language'/>
      </View>
      <View className='mt-8 w-[95%] mx-auto'>
        <Btn />
      </View>
    </SafeAreaView>
  )
}

export default account

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})