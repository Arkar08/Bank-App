import CurrentView from "@/components/CurrentView";
import TransferBtn from "@/components/TransferBtn";
import TransferInput from "@/components/TransferInput";
import useProfile from "@/store/useProfile";
import useTransfer from "@/store/useTransfer";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

const WithdrawDetails = () => {

    const {userList} = useProfile()
    const [amounts,setAmounts] = useState('')
    const [disable,setDisable] = useState(true)
    const {postWithdraw} = useTransfer()
    const router = useRouter()

    const amountChange = (text:string) => {
        if(text === '' || userList.card.cardBalance < Number(text)){
            setDisable(true)
            setAmounts(text)
        }else{
            setDisable(false)
            setAmounts(text)
        }
    }

    const withdraw = async() =>{
      try {
        const response:any = await postWithdraw(userList.account.accountNo,Number(amounts))
        if(response.message === 'Payment Successfully.'){
          router.push("/(tabs)")
          setAmounts('')
          setDisable(true)
        }
      } catch (error) {
          console.log(error)
          throw(error)
      }
    }


  return (
    <View className="mt-6 px-[15px]">
        <CurrentView color={'black'}>
          <View className="relative h-[100%] justify-center items-center">
            <Text className="text-white text-3xl text-center">ATM Card</Text>
            <Text className="text-white text-xl absolute bottom-0 left-0">{userList.card.cardNo}</Text>
          </View>
        </CurrentView>
        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-gray-500">Available Amount</Text>
          <Text className="text-gray-500">{userList.card.cardBalance}.00 Ks</Text>
        </View>
        <View className="mt-6">
            <TransferInput keyboardType={"numeric"} placeholder="Enter Amount" label="Amount"  change={amountChange} value={amounts}/>
        </View>
        <View className="mt-6">
            <TransferBtn text="Withdraw" disable={disable} onPress={withdraw}/>
        </View>
    </View>
  );
};

export default WithdrawDetails;
