import { Stack } from "expo-router";

const TransferLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:'Transfer'}}/>
            <Stack.Screen name="[id]" options={{title:'Transfer'}}/>
        </Stack>
    )
}
export default TransferLayout