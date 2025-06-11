import { Stack } from "expo-router";

const WithdrawLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:'withdraw'}}/>
            <Stack.Screen name="[id]" options={{title:"withdraw"}}/>
        </Stack>
    )
}
export default WithdrawLayout