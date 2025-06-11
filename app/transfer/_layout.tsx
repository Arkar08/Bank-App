import { Stack } from "expo-router";

const TransferLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:'transfer'}}/>
            <Stack.Screen name="[id]" options={{title:'transfer'}}/>
        </Stack>
    )
}
export default TransferLayout