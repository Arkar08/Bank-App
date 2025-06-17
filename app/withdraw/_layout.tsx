import { Stack } from "expo-router";

const WithdrawLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:'Withdraw'}}/>
            <Stack.Screen name="[id]" options={{title:"Withdraw"}}/>
        </Stack>
    )
}
export default WithdrawLayout