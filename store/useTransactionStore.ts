import { API_URL } from '@/config/api';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';


interface RecentProps{
    amount:number,
    transactionTime:string,
    transactionType:string,
    _id:string;
}

interface transactionProps{
    recentList:RecentProps[],
    allTransaction:any[],
    getRecentList:()=>void;
}

const useTransactionStore = create<transactionProps>((set)=>({
    recentList:[],
    allTransaction:[],


    getRecentList:async()=>{
        const userId = await SecureStore.getItemAsync('userId')
        const token = await SecureStore.getItemAsync("token")
        try {
            axios.defaults.headers.common['Authorization'] = `Baerer ${token}`
            const response = await axios.get(`${API_URL}transaction/${userId}`)
            const dataList = response.data.data;
            set({allTransaction:response.data.data})
            set({recentList:dataList.slice(0,6)})
        } catch (error:any) {
           throw (error.response.data.message)
        }
    }
}))

export default useTransactionStore;