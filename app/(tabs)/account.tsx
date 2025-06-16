import Btn from '@/components/Btn'
import ProfileCard from '@/components/ProfileCard'
import { useAuthStore } from '@/store/authStore'
import useProfile from '@/store/useProfile'
import React, { useState } from 'react'
import { ActivityIndicator, Image, Platform, Text, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const AccountScreen = () => {

  const logout = useAuthStore((state)=> state.logout)
  const [loading,setLoading] = useState(false)
  const {userList} = useProfile()

  const logoutClick = async() => {
    setLoading(true)
    await logout()
    setLoading(false)
  }

  if(loading){
    return (
      <View style={{flex:1 ,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={'large'}/>
      </View>
    )
  }

    const shadowStyle: ViewStyle = {
      borderRadius: 99999,
      backgroundColor: 'white',
      width: 120,
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        android: {
          elevation: 5,
        },
      }),
  };


  return (
    <SafeAreaView className='flex-1'>
      <View className='mt-4'>
        <Text className='text-center text-2xl font-semibold text-[#59008c]'>Profile</Text>
      </View>
      <View className='justify-center items-center mt-2'>
        <View style={shadowStyle}>
          {
            userList.profile !== '' && (
              <Image source={{uri:userList.profile}} className='w-full h-full rounded-full  object-center'/>
            )
          }
        </View>
        <View className='mt-4'>
          <Text className='text-center text-xl font-semibold text-[#59008c] capitalize'>{userList.name}</Text>
          <Text className='text-center text-xl font-semibold text-[#59008c]'>{userList.email}</Text>
          <View className='mt-4'>
            <Btn text='Edit Profile'/>
          </View>
        </View>
      </View>
      <View className='gap-4 justify-center items-center mt-6'>
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
      <View className='mt-8 w-[95%] mx-auto'>
        <Btn text="Logout" onPress={logoutClick}/>
      </View>
    </SafeAreaView>
  )
}

export default AccountScreen
