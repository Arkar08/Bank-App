import TransferBtn from '@/components/TransferBtn'
import TransferInput from '@/components/TransferInput'
import { useAuthStore } from '@/store/authStore'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Register = () => {

     const [show,setShow] = useState(true)
     const [confirm ,setConfirm] = useState(true)
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const [phoneNumber,setPhoneNumber] = useState('')
        const [name,setName] = useState('')
        const [confirmPassword,setConfirmPassword] = useState('')
        const [error,setError] = useState('')
        const router = useRouter()
        const signup = useAuthStore((state)=> state.signup)
    
        const eyeClick = () => {
          setShow(!show)
        }

        const confirmClick = () => {
            setConfirm(!confirm)
        }
    
        const registerBtn = async() => {
            if(password !== confirmPassword){
                setError('Password do not match')
                return;
            }
    
           try {
                const res:any = await signup(email,password,name,phoneNumber)
                if(res?.message === "Signup Successfully"){
                    Alert.alert(res.message)
                    router.push("/(tabs)")
                    setPassword('')
                    setEmail('')
                    setName('')
                    setPhoneNumber('')
                    setError('')
                    setConfirmPassword('')
                }
           } catch (error:any) {
                Alert.alert(error)
                setPassword('')
                setEmail('')
                setName('')
                setPhoneNumber('')
                setError('')
                setConfirmPassword('')
           }
        }
    
        const emailChange = (text:string) => {
            setEmail(text)
        }
    
        const passwordChange = (text:string) => {
            setPassword(text)
        }
        
        const nameChange = (text:string) => {
            setName(text)
        }

        const phoneNumberChange = (text:string)=>{
            setPhoneNumber(text)
        }

        const confirmPasswordChange = (text:string)=>{
            setConfirmPassword(text)
        }

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <View className='mt-6'>
            <Text className='text-center text-4xl font-semibold py-2'>Register</Text>
            <View className='gap-5 p-2'>
                <View className='w-[90%] mx-auto'>
                    <TransferInput placeholder='Enter Name' label='Name' change={nameChange} value={name}/>
                </View>
                <View className='w-[90%] mx-auto'>
                    <TransferInput placeholder='example@gmail.com' label='Email' change={emailChange} value={email} keyboardType={'email-address'}/>
                </View>
                <View className='w-[90%] mx-auto'>
                    <TransferInput placeholder='09*********' label='Phone Number' change={phoneNumberChange} value={phoneNumber} keyboardType={'numeric'} maxLength={11}/>
                </View>
                 <View className='w-[90%] mx-auto relative'>
                    <TransferInput placeholder='Enter Password' label='Password' secure={show} change={passwordChange} value={password}/>
                    <Ionicons name={show ? 'eye-off':'eye'} size={24} className='absolute top-[55%] right-[10%]' onPress={eyeClick} />
                </View>
                  <View className='w-[90%] mx-auto relative'>
                    <TransferInput placeholder='Enter Confirm Password' label='Confirm Password' secure={confirm} change={confirmPasswordChange} value={confirmPassword}/>
                    <Ionicons name={confirm ? 'eye-off':'eye'} size={24} className='absolute top-[50%] right-[10%]' onPress={confirmClick} />
                    {
                        error !== '' && (
                            <Text className='text-red-500 mt-2' style={{fontSize:16}}>{error}*</Text>
                        )
                    }
                </View>
                <View className='w-[90%] mx-auto'>
                    <TransferBtn text="Register" onPress={registerBtn}/>
                </View>
                <View className='mx-auto mt-4'>
                    <Text className='text-xl'>Already have An Account? <Link href={'/auth/login'} className='underline text-blue-600'>Login</Link></Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Register
