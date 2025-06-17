import { Text, TextInput, View } from "react-native";

interface TransferInputProps{
    keyboardType?:any,
    placeholder:string,
    change?:(text:string) => void;
    secure?:boolean
    value?:string
    label?:string
    maxLength?:number
    active?:boolean
    editable?:boolean
}

const TransferInput = ({keyboardType,placeholder,change,secure,value,label,maxLength,active,editable}:TransferInputProps) => {
    return (
        <View>
            <View className="flex-row gap-0.5">
                <Text className="pl-3 pb-2">{label}</Text>
                {
                    active && (
                        <Text className="text-red-500">*</Text>
                    )
                }
            </View>
            <TextInput secureTextEntry={secure} keyboardType={keyboardType} editable={editable} value={value}  placeholder={placeholder} onChangeText={change} maxLength={maxLength} returnKeyLabel="done" className='p-4 bg-white border-b border-solid border-b-[#59008c] rounded-lg'/>
        </View>
    )
}

export default TransferInput;