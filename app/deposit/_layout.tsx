import { Stack } from "expo-router";

const DepositLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:'Deposit',headerTintColor:"#59008c"}}/>
            <Stack.Screen name="[id]" options={{title:"Deposit",headerTintColor:"#59008c"}}/>
        </Stack>
    )
}
export default DepositLayout