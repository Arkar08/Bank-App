import Btn from '@/components/Btn'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface DataProps{
  data:string
}


const ScanScreen = () => {
  const [permission, requestPermission] = useCameraPermissions()
  const router = useRouter()


  const handleBarcodeScanned = ({ data }:DataProps) => {
      const sliceText = data.slice(0,4)
      const textLength = data.length;
      if(sliceText === 'Bank' && textLength === 14){
        router.push('/transfer/123')
      }
  }

  if (!permission) return <View />
  if (!permission.granted) {
    return (
      <View style={styles.container1}>
        <Text style={{ textAlign: 'center', paddingBottom: 10 }}>
          We need your permission to show the camera
        </Text>
        <Btn onPress={requestPermission} text="Grant permission" />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFill}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
        onBarcodeScanned={handleBarcodeScanned}
      />
    </SafeAreaView>
  )
}

export default ScanScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
