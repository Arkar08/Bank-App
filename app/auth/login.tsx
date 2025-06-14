 
import TransferBtn from '@/components/TransferBtn'
import TransferInput from '@/components/TransferInput'
import { useAuthStore } from '@/store/authStore'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import { Alert, Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const  loginImage = require('../../assets/images/login.png')

const Login = () => {

    const [show,setShow] = useState(true)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const router = useRouter()
    const login = useAuthStore((state)=> state.login)

    const eyeClick = () => {
      setShow(!show)
    }

    const loginBtn = async() => {

        if(email === '' || password === ''){
            Alert.alert("Please Filledout in the form field.")
            return;
        }

       try {
            const res:any = await login(email,password)
            if(res?.message === "Login Successfully"){
                Alert.alert(res.message)
                router.push("/(tabs)")
                 setEmail('')
                setPassword('')
            }
       } catch (error:any) {
            Alert.alert(error)
            setPassword('')
           setEmail('')
       }
    }

    const inputChange = (text:string) => {
        setEmail(text)
    }

    const passwordChange = (text:string) => {
        setPassword(text)
    }

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <View className='mt-6'>
            <Text className='text-center text-4xl font-semibold'>Welcome Back</Text>
            <View className='w-[250px] h-[250px] mx-auto'>
                <Image source={loginImage} className='w-full h-full'/>
            </View>
            <View className='gap-5 p-2'>
                <View className='w-[90%] mx-auto'>
                    <TransferInput placeholder='example@gmail.com' label='Email' change={inputChange} value={email} keyboardType={'email-address'}/>
                </View>
                 <View className='w-[90%] mx-auto relative'>
                    <TransferInput placeholder='Enter Password' label='Password' secure={show} change={passwordChange} value={password}/>
                    <Ionicons name={show ? 'eye-off':'eye'} size={24} className='absolute top-[55%] right-[10%]' onPress={eyeClick} />
                </View>
                <View className='w-[90%] mx-auto'>
                    <TransferBtn text="Login" onPress={loginBtn}/>
                </View>
                <View className='mx-auto mt-4'>
                    <Text className='text-xl'>Don&apos;t have An Account? <Link href={'/auth/register'} className='underline text-blue-600'>Register</Link></Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Login
