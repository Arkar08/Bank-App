import { TextInput } from "react-native";

interface TransferInputProps{
    keyboardType:any,
    placeholder:string,
    change?:(text:string) => void;
    text?:string;
}

const TransferInput = ({keyboardType,placeholder,change,text}:TransferInputProps) => {
    return (
        <TextInput keyboardType={keyboardType} value={text}  placeholder={placeholder} onChangeText={change} className='p-5 bg-white border-b border-solid border-b-[#59008c] mt-3 rounded-lg'/>
    )
}

export default TransferInput;