import Btn from '@/components/Btn'
import { CameraView, useCameraPermissions } from 'expo-camera'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface DataProps{
  data:string
}


const ScanScreen = () => {
  const [permission, requestPermission] = useCameraPermissions()
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    if (scanned) {
      const timer = setTimeout(() => setScanned(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [scanned])

  const handleBarcodeScanned = ({ data }:DataProps) => {
    if (!scanned) {
      setScanned(true)
      console.log('Scanned data:', data)
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
      <Text style={styles.scanText}>Scan a QR Code</Text>
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
  scanText: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
})
