import { Stack } from "expo-router";

const DepositLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:'deposit'}}/>
            <Stack.Screen name="[id]" options={{title:"deposit"}}/>
        </Stack>
    )
}
export default DepositLayout