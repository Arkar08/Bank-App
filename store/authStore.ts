import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';


const API_URL = "https://banking-mangament-system-with-atm.onrender.com/api/v1/"

interface AuthProps{
    user:string | null,
    token: string | null,
    isLoading:boolean,
    login:(email:string,password:string) => void;
    initial:()=>void;
    logout:()=> void;
    signup:(name:string,email:string,password:string,phoneNumber:string) => void;
}


export const useAuthStore = create<AuthProps>((set)=>({
    user:null,
    token:null,
    isLoading:true,

    initial:async()=>{
         try {
        const token = await SecureStore.getItemAsync('token');
        const user = await SecureStore.getItemAsync('user');
            if (user && token) {
                set({ user:user, token:token })
            }
            } catch (error) {
            console.error('Error loading user:', error);
            await SecureStore.deleteItemAsync('token');
            await SecureStore.deleteItemAsync("user")
            } finally {
            set({ isLoading: false });
            }
    },


    login:async(email:string,password:string) => {

        const data = {
            email:email,
            password:password
        }
        try {
            const response = await axios.post(`${API_URL}auth/login`,data)
            const {token,email,message} = response.data
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await SecureStore.setItemAsync("user",email)
            await SecureStore.setItemAsync('token', token);
            set({ user: email, token })
            return {message}
        } catch (error:any) {
            throw (error.response.data.message)
        }
    },

    signup:async(email:string,name:string,password:string,phoneNumber:string)=>{

        const data = {
            name:name,
            email:email,
            password:password,
            phoneNumber:phoneNumber
        }

        try {
            const response = await axios.post(`${API_URL}auth/signup`,data)
            const {token,email,message} = response.data
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await SecureStore.setItemAsync("user",email)
            await SecureStore.setItemAsync('token', token);
            set({ user: email, token })
            return {message}
        } catch (error:any) {
            throw (error.response.data.message)
        }
    },

    logout:async()=>{
        try {
            const token = await SecureStore.getItemAsync("token")
            if(token){
                axios.defaults.headers.common['Authorization'] = `Baerer ${token}`
                await axios.post(`${API_URL}auth/logout`)
                await SecureStore.deleteItemAsync("token")
                await SecureStore.deleteItemAsync("user")
                set({ user: null, token: null });
                axios.defaults.headers.common['Authorization'] = '';
            }
        } catch (error) {
            console.log(error)
        }
    }
}))