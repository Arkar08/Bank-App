import { API_URL } from "@/config/api";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { create } from "zustand";


interface TransferProps{
    postPhone:(phoneNumber:string)=>void;
    getUserId:(userId:string) =>void;
    users:any;
    postTransfer:(fromCustomerName:string,toCustomerName:string,amount:number,note:string)=>void;
}



const useTransfer = create<TransferProps>((set)=>({
    users:{},

    postPhone: async(phoneNumber:string)=>{
        const token = await SecureStore.getItemAsync('token')
        try {
            axios.defaults.headers.common['Authorization'] = `Baerer ${token}`
            const response = await axios.post( `${API_URL}transaction/${phoneNumber}`)
            const {message,data} = response.data;
            return {data,message}
        } catch (error:any) {
            throw(error.response.data.message)
        }
    },

    getUserId:async(userId:string)=>{
        const token = await SecureStore.getItemAsync('token')
        try {
             axios.defaults.headers.common['Authorization'] = `Baerer ${token}`
            const response = await axios.get( `${API_URL}user/${userId}`)
            set({users:response.data.data})
        } catch (error:any) {
            throw(error.response.data.message)
        }
    },

    postTransfer:async(fromCustomerName:string,toCustomerName:string,amount:number,note:string)=>{
        const data = {
            fromCustomerName:fromCustomerName,
            toCustomerName:toCustomerName,
            amount:amount,
            notes:note,
            transactionType:"Transfer"
        }
        const token = await SecureStore.getItemAsync('token')
        try {
             axios.defaults.headers.common['Authorization'] = `Baerer ${token}`
            const response = await axios.post(`${API_URL}transaction`,data)
            return response.data;
        } catch (error:any) {
             throw(error.response.data.message)
        }
    }
}))

export default useTransfer;