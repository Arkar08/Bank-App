import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
        <Stack.Screen name="transfer" />
        <Stack.Screen name="deposit"/>
        <Stack.Screen name="withdraw"/>
        <Stack.Screen name="qrcode"/>
      </Stack>
      <StatusBar style="auto"/>
    </>
  )
}
