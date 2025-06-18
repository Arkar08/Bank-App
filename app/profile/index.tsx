import TransferBtn from '@/components/TransferBtn';
import TransferInput from '@/components/TransferInput';
import useProfile from '@/store/useProfile';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Platform, View, ViewStyle } from "react-native";


const Profile = () => {

     const shadowStyle: ViewStyle = {
      borderRadius: 99999,
      backgroundColor: 'white',
      width: 150,
      height: 150,
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

  const {getUsers,userList,updateUser} = useProfile()
  const [loading,setLoading] = useState(false)
  const [users,setUsers] = useState({
    name:userList.name,
    email:userList.email,
    phoneNumber:userList.phoneNumber,
    address:userList.address
  })
  const router = useRouter()

  useEffect(()=>{
    const fetchUser = async()=>{
        setLoading(true)
        try {
            await getUsers()
        } catch (error) {
            throw(error)
        }finally{
            setLoading(false)
        }
    }
    fetchUser()
  },[getUsers])

  if(loading){
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'} color={'blue'}/>
        </View>
    )
  }

  const nameChange = (text:string) => {
    setUsers((prev)=>{
        return ({
            ...prev,name:text
        })
    })
  }

  const emailChange = (text:string) => {
    setUsers((prev)=>{
        return ({
            ...prev,email:text
        })
    })
  }

  const phoneChange = (text:string) => {
    setUsers((prev)=>{
        return ({
            ...prev,phoneNumber:Number(text)
        })
    })
  }


  const addressChange = (text:string) => {
    setUsers((prev)=>{
        return ({
            ...prev,address:text
        })
    })
  }


  const saveBtn = async() => {
        try {
            const response:any = await updateUser(users)
            if(response.message === 'Update User Successfully.'){
                router.replace("/(tabs)")
            }
        } catch (error) {
            throw(error)
        }
  }

    return (
        <View className='relative px-[10px] h-[100%]'>
            <View className="justify-center items-center mt-4">
                <View style={shadowStyle} className="relative">
                    {
                        userList.profile && (
                            <Image source={{uri:userList.profile}} className='w-full h-full object-cover rounded-full'/>
                        )
                    }
                    <MaterialCommunityIcons name="camera-plus" size={38} color="gray" className='absolute bottom-0 right-0'/>
                </View>
            </View>
            <View className='gap-4'>
                <View>
                    <TransferInput placeholder='Name' label='Name' value={users.name} change={nameChange}/>
                </View>
                <View>
                    <TransferInput placeholder='Email'label='Email' value={users.email} change={emailChange}/>
                </View>
                <View>
                    <TransferInput placeholder='Phone Number' keyboardType={'numeric'} label='Phone Number' value={users.phoneNumber.toString()} change={phoneChange}/>
                </View>
                <View>
                    <TransferInput placeholder='Address' label='Address' value={users.address} change={addressChange}/>
                </View>
            </View>
            <View className='absolute w-[96vw] bottom-20 right-[10px]'>
                <TransferBtn text='Save' onPress={saveBtn}/>
            </View>
        </View>
    )
}

export default Profile;