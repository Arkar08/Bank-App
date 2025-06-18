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
        role:string,
        phoneNumber:number,
        address:string,
        account:{
            balance:number,
            qrCode:string,
            accountNo:string
        },
        card:{
            cardBalance:number,
            cardNo:string
        }
    },
    account:{
        customerName:string
    };
    getUsers:()=>void;
    getAccount:(accountNo:string) =>void;
    user:any;
    updateUser:(data:any) => void;
}

const useProfile = create<ProfileProps>((set)=>({
    userList:{
        _id:'',
        name:'',
        email:"",
        profile:"",
        role:"",
        phoneNumber:0,
        address:"",
        account:{
            balance:0,
            qrCode:'',
            accountNo:""
        },
        card:{
            cardBalance:0,
            cardNo:""
        },
    },
    account:{
        customerName:''
    },
    user:{},

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
    },

    getAccount:async(accountNo:string)=>{
        const token = await SecureStore.getItemAsync("token")
        try {
            axios.defaults.headers.common['Authorization'] = `Baerer ${token}`
            const response = await axios.get(`${API_URL}account/find/${accountNo}`)
            set({account:response.data.data})
        } catch (error:any) {
            throw(error.response.data.message)
        }
    },

    updateUser:async(data:any) => {
        const token = await SecureStore.getItemAsync("token")
        const userId = await SecureStore.getItemAsync("userId")
         try {
            axios.defaults.headers.common['Authorization'] = `Baerer ${token}`
            const response = await axios.put(`${API_URL}user/${userId}`,data)
            return response.data;
        } catch (error:any) {
            throw(error.response.data.message)
        }
    }
}))

export default useProfile;