/* eslint-disable react-hooks/rules-of-hooks */
import TransferBtn from '@/components/TransferBtn'
import TransferInput from '@/components/TransferInput'
import { useAuthStore } from '@/store/authStore'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Alert, Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const  loginImage = require('../../assets/images/login.png')

const login = () => {

    const [show,setShow] = useState(true)
    const [data,setData] = useState({
        email:"",
        password:""
    })
    const router = useRouter()
    const login = useAuthStore((state)=> state.login)

    const eyeClick = () => {
      setShow(!show)
    }

    const loginBtn = async() => {
       try {
            const res:any = await login(data)
            if(res?.message === "Login Successfully"){
                router.push("/(tabs)")
                setData({
                    email:"",
                    password:""
                })
            }
       } catch (error:any) {
            Alert.alert(error)
            setData({
                email:"",
                password:""
            })
       }
    }

    const inputChange = (text:string) => {
        if(text !== ''){
            setData((prev)=>(
                {
                ...prev,email:text
                }
            ))
        }
    }

    const passwordChange = (text:string) => {
        if(text !== ''){
                setData((prev)=>({
                    ...prev,password:text
                }))
        }
    }

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <View className='mt-6'>
            <Text className='text-center text-4xl font-semibold'>Welcome Back</Text>
            <View className='w-[350px] h-[300px] mx-auto'>
                <Image source={loginImage} className='w-full h-full'/>
            </View>
            <View className='gap-5'>
                <View className='w-[90%] mx-auto'>
                    <Text className='pl-3 text-xl'>Email</Text>
                    <TransferInput keyboardType="default" placeholder='Enter Email' change={inputChange}/>
                </View>
                 <View className='w-[90%] mx-auto relative'>
                    <Text className='pl-3 text-xl'>Password</Text>
                    <TransferInput keyboardType="default" placeholder='Enter Password' secure={show} change={passwordChange}/>
                    <Ionicons name={show ? 'eye-off':'eye'} size={24} className='absolute top-[55%] right-[10%]' onPress={eyeClick}/>
                </View>
                <View className='w-[90%] mx-auto'>
                    <TransferBtn text="Login" onPress={loginBtn}/>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default login
