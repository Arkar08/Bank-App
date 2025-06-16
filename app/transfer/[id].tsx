import TransferBtn from "@/components/TransferBtn";
import TransferInput from "@/components/TransferInput";
import useProfile from "@/store/useProfile";
import useTransfer from "@/store/useTransfer";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

const TransferDetail = () => {
  const { id } = useLocalSearchParams();
  const { getUserId, users ,postTransfer} = useTransfer();
  const [loading, setLoading] = useState(false);
  const {userList} = useProfile()
  const [amounts,setAmounts] = useState('')
  const [note,setNote] = useState('')
  const [disable,setDisable] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchUserId = async () => {
      setLoading(true);
      try {
        await getUserId(id as string);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserId();
  }, [getUserId, id]);

  const amountChange = (text:string)=>{
    setAmounts(text)
  }

  const noteChange = (text:string) => {
    if(text.trim() === '' || amounts === '' || userList.account.balance < Number(amounts)){
        setDisable(true)
        setNote(text)
    }else{
      setDisable(false)
       setNote(text)
    }
  }

  const transfer = async() => {
    try {
        const response:any = await postTransfer(userList.account.accountNo,users.account.accountNo,Number(amounts),note)
        if(response.message === 'Payment Successfully.'){
          router.push("/(tabs)")
          setNote('')
          setAmounts('')
          setDisable(true)
        }
    } catch (error) {
        setNote('')
        setAmounts('')
        throw (error)
    }
  }

  return (
    <View className="mt-6 px-[15px]">
      {loading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
          <View className="flex-row items-center gap-2">
            <View className="w-[80px] h-[80px] rounded-full bg-white">
              <Image
                source={{ uri: users.profile }}
                className="w-full h-full rounded-full"
              />
            </View>
            <Text className="text-2xl py-3 capitalize">{users.name}</Text>
            <Text className="text-2xl py-3">({users.phoneNumber})</Text>
          </View>
        </View>
      )}

      <View className="mt-6">
        <TransferInput
          keyboardType={"numeric"}
          placeholder="Enter Amount"
          label="Amount"
          active={true}
          change={amountChange}
          value={amounts}
        />
      </View>
      <View className="flex-row justify-between items-center mt-4">
        <Text className="text-gray-500">Available Amount</Text>
        <Text className="text-gray-500">{userList.account.balance} Ks</Text>
      </View>
      <View className="mt-6">
        <TransferInput
          placeholder="Enter Notes"
          keyboardType={"default"}
          label="Notes"
          active={true}
          change={noteChange}
          value={note}
        />
      </View>
      <View className="mt-6">
        <TransferBtn text="Transfer" onPress={transfer} disable={disable}/>
      </View>
    </View>
  );
};

export default TransferDetail;
