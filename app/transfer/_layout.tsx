import { Stack } from "expo-router";

const TransferLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:'Transfer',headerTintColor:"#59008c"}}/>
            <Stack.Screen name="[id]" options={{title:'Transfer',headerTintColor:"#59008c"}}/>
        </Stack>
    )
}
export default TransferLayout