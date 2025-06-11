import Btn from '@/components/Btn'
import ProfileCard from '@/components/ProfileCard'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const profileImage = require("../../assets/images/girl2.jpg")

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text className='text-center text-4xl'>Profile</Text>
      <View className='justify-center items-center mt-2'>
        <View className='bg-gray-400 w-40 h-40 rounded-full'>
          <Image source={profileImage} className='w-full h-full rounded-full  object-center'/>
        </View>
        <View className='mt-2'>
          <Text className='text-center text-2xl font-bold'>Arkar</Text>
          <Text className='text-center text-2xl font-bold'>arkar@gmail.com</Text>
          <View className='mt-2'>
            <Btn text='Edit Profile'/>
          </View>
        </View>
      </View>
      <View className='gap-4 justify-center items-center mt-4'>
        <View className='w-[95%]'>
          <ProfileCard text='Notifications'/>
        </View>
        <View  className='w-[95%]'>
          <ProfileCard text='Change Pin/Password'/>
        </View>
       <View  className='w-[95%]'>
        <ProfileCard text='Change Language'/>
       </View>
      </View>
      <View className='mt-4 w-[95%] mx-auto'>
        <Btn text="Logout"/>
      </View>
    </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})