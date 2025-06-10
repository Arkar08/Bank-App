import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ScanScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>scan</Text>
    </SafeAreaView>
  )
}

export default ScanScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})