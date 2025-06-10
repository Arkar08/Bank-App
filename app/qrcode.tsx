import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'


const qrcode = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKoSURBVO3BQa7jSAwFwUxC97/yGy+5KkCw5N9DMMJ8sMYo1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijXKxZdUfikJv6TyS0n4RrFGKdYoxRrl4mFJeJLKHSonSehUuiScJOFJKk8q1ijFGqVYo1y8TOWOJNyh0iWhU+lUnqRyRxLeVKxRijVKsUa5GEalS0KnMlmxRinWKMUa5WI4lS4JncokxRqlWKMUa5SLlyXhLyWhU+mS8I0k/EuKNUqxRinWKBcPU/lLSehUuiR0Kl0STlT+ZcUapVijFGsU88H/mModSZisWKMUa5RijWI++IJKl4RO5UlJuEPlJAknKk9KwpuKNUqxRinWKBdfSkKn0iWhU+mS8JdU7kjCiUqXhF8q1ijFGqVYo5gPXqTSJaFT6ZLQqXwjCScqXRI6lZMk3KHSJeFJxRqlWKMUaxTzwRdUuiTcodIl4USlS0Kn8qYknKicJKFT6ZLwjWKNUqxRijWK+eBBKnck4USlS8KTVLoknKh0SThR6ZLwpmKNUqxRijXKxcOS8KQknKjckYQ3qZyodEl4UrFGKdYoxRrFfPAFlV9KwolKl4ROpUtCp9Il4UTljiR0Kl0SvlGsUYo1SrFGuXhYEp6kcqJyotIl4SQJJyonSfhLxRqlWKMUa5SLl6nckYQnJaFT6ZLQqXRJ6JLQqXwjCU8q1ijFGqVYo1wMp3KicqJykoR/SbFGKdYoxRrlYpgk3KHSJaFTuUPlJAlvKtYoxRqlWKNcvCwJb0pCp/INlTepdEl4UrFGKdYoxRrl4mEqv6TSJaFT6ZLQqXRJOFG5Iwm/VKxRijVKsUYxH6wxijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKN8h+WvQTxSBTh/gAAAABJRU5ErkJggg=="

const Qrcode = () => {
  return (
    <View style={styles.container}>
      <Text className='text-4xl font-semibold text-center p-5'>My QR Code</Text>
      <View className='items-center mt-5 justify-center'>
        <View className='w-[300px] h-[300px] bg-white rounded-md'>
          <Image source={{uri:qrcode}} className='w-full h-full rounded-md p-2'/>
        </View>
        <View className='flex-row justify-between items-center gap-5 mt-10'>
          <Pressable className='bg-green-500 p-4 rounded-md'>
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