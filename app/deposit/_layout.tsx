import { Stack } from "expo-router";

const DepositLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:'Deposit'}}/>
            <Stack.Screen name="[id]" options={{title:"Deposit"}}/>
        </Stack>
    )
}
export default DepositLayout