import { TextInput } from "react-native";

interface TransferInputProps{
    keyboardType:any,
    placeholder:string,
    change?:(text:string) => void;
    text?:string;
    secure?:boolean
}

const TransferInput = ({keyboardType,placeholder,change,text,secure}:TransferInputProps) => {
    return (
        <TextInput secureTextEntry={secure} keyboardType={keyboardType} value={text}  placeholder={placeholder} onChangeText={change} className='p-5 bg-white border-b border-solid border-b-[#59008c] mt-3 rounded-lg'/>
    )
}

export default TransferInput;