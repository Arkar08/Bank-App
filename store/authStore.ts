import { LoginData } from '@/utils/type';
import axios from 'axios';
import { create } from 'zustand';


const API_URL = "https://banking-mangament-system-with-atm.onrender.com/api/v1/"

interface AuthProps{
    token:null,
    isLoading:boolean,
    login:(data:LoginData) => void;
}


export const useAuthStore = create<AuthProps>((set)=>({
    token:null,
    isLoading:true,


    login:async(data:LoginData) => {
        try {
            const response = await axios.post(`${API_URL}auth/login`,data)
            const {token,message} = response.data
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // await SecureStore.setItemAsync('token', token);
            return {message}
        } catch (error:any) {
            throw (error.response.data.message)
            //  if (error) {
            //     throw error;
            // }
            // throw new Error('Login failed');
        }
    },
}))