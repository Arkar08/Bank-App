import { useAuthStore } from "@/store/authStore";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

function RootLayoutNav() {

  const {initial,isLoading,user} = useAuthStore()
  const segments = useSegments()
  const router = useRouter()

  useEffect(()=>{
      initial()

  },[initial])

  useEffect(()=>{
    if(isLoading) return;
     const isAuthGroup = segments[0] === 'auth'

      if(!user && !isAuthGroup ){
        router.replace("/auth/login")
      }else if(user && isAuthGroup ){
        router.replace("/(tabs)")
      }
  },[router, segments,isLoading,user])

   if (isLoading) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="auth/login" options={{headerShown:false}}/>
        <Stack.Screen name="auth/register" options={{headerShown:false}}/>
        <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
        <Stack.Screen name="transfer" options={{headerShown:false}}/>
        <Stack.Screen name="deposit"  options={{headerShown:false}}/>
        <Stack.Screen name="withdraw" options={{headerShown:false}}/>
        <Stack.Screen name="qrcode" options={{title:"QRCode"}}/>
      </Stack>
      <StatusBar style="auto"/>
    </>
  )
}


export default function RootLayout(){
   return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <RootLayoutNav />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}