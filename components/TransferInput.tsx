import { Text, TextInput, View } from "react-native";

interface TransferInputProps{
    keyboardType?:any,
    placeholder:string,
    change?:(text:string) => void;
    secure?:boolean
    value?:string
    label?:string
    maxLength?:number
}

const TransferInput = ({keyboardType,placeholder,change,secure,value,label,maxLength}:TransferInputProps) => {
    return (
        <View>
            <Text className="text-xl pl-3 pb-2">{label}</Text>
            <TextInput secureTextEntry={secure} keyboardType={keyboardType} value={value}  placeholder={placeholder} onChangeText={change} maxLength={maxLength} returnKeyLabel="done" className='p-4 bg-white border-b border-solid border-b-[#59008c] rounded-lg'/>
        </View>
    )
}

export default TransferInput;