import { Stack } from "expo-router";

const WithdrawLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:'Withdraw',headerTintColor:"#59008c"}}/>
            <Stack.Screen name="[id]" options={{title:"Withdraw",headerTintColor:"#59008c"}}/>
        </Stack>
    )
}
export default WithdrawLayout