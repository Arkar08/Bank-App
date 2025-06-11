import { TextInput } from "react-native";

interface TransferInputProps{
    keyboardType:any,
    placeholder:string
}

const TransferInput = ({keyboardType,placeholder}:TransferInputProps) => {
    return (
        <TextInput keyboardType={keyboardType}  placeholder={placeholder} className='p-5 bg-white border-b border-solid border-b-[#59008c] mt-3 rounded-lg'/>
    )
}

export default TransferInput;