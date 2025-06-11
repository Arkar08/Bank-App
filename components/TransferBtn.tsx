import { Pressable, Text } from "react-native";

interface TransferProp {
    onPress?:() => void;
    text:string
}

const TransferBtn = ({onPress,text}:TransferProp) => {
    return (
        <Pressable className='bg-[#59008c] p-3 rounded-lg justify-center items-center' onPress={onPress}>
            <Text className='text-xl text-white'>{text}</Text>
        </Pressable>
    )
}

export default TransferBtn;