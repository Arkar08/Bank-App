import { Text, TouchableOpacity } from "react-native";

interface TransferProp {
    onPress?:() => void;
    text:string
    disable?:boolean
}

const TransferBtn = ({onPress,text,disable}:TransferProp) => {
    return (
        <TouchableOpacity className={disable ? 'opacity-50 bg-[#59008c] p-3 rounded-lg justify-center items-center':'bg-[#59008c] p-3 rounded-lg justify-center items-center'} onPress={onPress} disabled={disable}>
            <Text className='text-xl text-white'>{text}</Text>
        </TouchableOpacity>
    )
}

export default TransferBtn;