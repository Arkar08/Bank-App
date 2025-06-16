import Btn from '@/components/Btn';
import useProfile from '@/store/useProfile';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface DataProps {
  data: string;
}

const ScanScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();
  const [scanned, setScanned] = useState(false);
  const {account,getAccount} = useProfile()

  useEffect(()=>{
    if(scanned){
      const timer = setInterval(()=>{
        setScanned(false)
      },500)
      return ()=> clearInterval(timer)
    }
  },[scanned])


  const handleBarcodeScanned = async({ data }: DataProps) => {
    if (scanned) return;

    const prefix = data.slice(0, 4);
    const id = data.slice(4, 14);
    const isValid = prefix === 'Bank' && data.length === 14;
    const response:any = await getAccount(id)
    if (isValid || response) {
      setScanned(true);
      router.push(`/transfer/${account.customerName}`);
    }
  };

  if (!permission) {
    return <View style={styles.container1}><Text>Loading permissions...</Text></View>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container1}>
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>
          We need your permission to access the camera
        </Text>
        <Btn onPress={requestPermission} text="Grant Permission" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFill}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
      />
      {scanned && (
        <View style={styles.rescanBtn}>
          <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rescanBtn: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
});
