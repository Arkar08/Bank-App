import TransferBtn from "@/components/TransferBtn";
import TransferInput from "@/components/TransferInput";
import { Text, View } from "react-native";

const TransferDetail = () => {
    return (
        <View className="mt-6 px-[15px]">
            <View>
                <Text className="text-2xl py-3">Arkar(09455666777)</Text>
            </View>
            <View className="mt-6">
                <Text className="text-xl">Amount</Text>
                <TransferInput keyboardType={"numeric"} placeholder="Enter Amount"/>
            </View>
            <View className="flex-row justify-between items-center mt-4">
                <Text className="text-gray-500">Available Amount</Text>
                <Text className="text-gray-500">1.00 Ks</Text>
            </View>
            <View className="mt-6">
                <Text className="text-xl">Notes</Text>
                <TransferInput placeholder="Enter Notes" keyboardType={'default'}/>
            </View>
           <View className='mt-6'>
               <TransferBtn text="Transfer"/>
            </View>
        </View>
    )
}

export default TransferDetail;