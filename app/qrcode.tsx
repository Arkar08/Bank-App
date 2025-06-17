import useProfile from '@/store/useProfile';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';

const Qrcode = () => {

  const [hasPermission,setHasPermission] = useState(false)
  const {userList} = useProfile()

   useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const downloadAndSaveImage = async () => {
    try {
      if (!hasPermission) {
        Alert.alert('Permission required', 'Please allow access to media library.');
        return;
      }

      const fileUri = FileSystem.documentDirectory + 'downloadedImage.jpg';
      const downloadRes = await FileSystem.downloadAsync(userList.account.qrCode, fileUri);

      const asset = await MediaLibrary.createAssetAsync(downloadRes.uri);
      await MediaLibrary.createAlbumAsync('Download', asset, false);
      
      Alert.alert('Success', 'Image saved to gallery!');
    } catch (error) {
      Alert.alert('Error', `${error}Failed to save image`);
    }
  };


  return (
    <View style={styles.container}>
      <Text className='text-4xl font-semibold text-center p-5 text-[#59008c]'>My QR Code</Text>
      <View className='items-center mt-5 justify-center'>
        <View className='w-[300px] h-[300px] bg-white rounded-md'>
          <Image source={{uri:userList.account.qrCode}} className='w-full h-full rounded-md p-2'/>
        </View>
        <View className='flex-row justify-between items-center gap-5 mt-10'>
          <Pressable className='bg-green-500 p-4 rounded-md' onPress={downloadAndSaveImage}>
            <Text className='text-center text-white'>Save To Gallery</Text>
          </Pressable>
          <Pressable className='bg-green-500 p-4 rounded-md'>
            <Text className='text-center text-white'>Share QRCode</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})



export default Qrcode