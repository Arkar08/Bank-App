import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
        <Stack.Screen name="transfer" options={{headerShown:false}}/>
        <Stack.Screen name="deposit"  options={{headerShown:false}}/>
        <Stack.Screen name="withdraw" options={{headerShown:false}}/>
        <Stack.Screen name="qrcode"/>
      </Stack>
      <StatusBar style="auto"/>
    </>
  )
}
