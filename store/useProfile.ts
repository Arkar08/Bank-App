import { API_URL } from '@/config/api';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';



interface ProfileProps{
    userList:{
        _id:string,
        name:string,
        email:string,
        profile:string,
        account:{
            balance:number,
            qrCode:string,
            accountNo:string
        }
    },
    getUsers:()=>void;
}

const useProfile = create<ProfileProps>((set)=>({
    userList:{
        _id:'',
        name:'',
        email:"",
        profile:"",
        account:{
            balance:0,
            qrCode:'',
            accountNo:""
        }
    },

    getUsers:async()=>{
        const userId = await SecureStore.getItemAsync('userId')
        const token = await SecureStore.getItemAsync("token")
        try {
            axios.defaults.headers.common['Authorization'] = `Baerer ${token}`
            const response = await axios.get(`${API_URL}user/${userId}`)
            set({userList:response.data.data})
        } catch (error:any) {
            throw(error.response.data.message)
        }
    }
}))

export default useProfile;