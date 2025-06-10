import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';


const {width} = Dimensions.get('window')

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{
            position:"absolute",
            bottom:20,
            left:16,
            right:16,
            height:72,
            elevation:0,
            backgroundColor:"white",
            borderRadius:16,
            alignItems:'center',
            justifyContent:"center"
        }
  }}>
        <Tabs.Screen name='index' options={{
            tabBarIcon:({focused})=>(
                <View style={{
                    paddingTop:10,
                    alignItems:'center',
                    width:width/5
                }}>
                    <Ionicons name={focused ? 'home':'home-outline'} color={focused ? '#59008c':'gray'} size={24}/>
                    <Text style={{
                        marginTop:4,
                        fontSize:12,
                        color:focused ? '#59008c':'gray'
                        }}>
                        Home
                    </Text>
                </View>
            )
        }}/>
         <Tabs.Screen name='transaction' options={{
            tabBarIcon:({focused})=>(
                <View style={{
                    paddingTop:10,
                    alignItems:'center',
                    width:width/5
                }}>
                    <Ionicons name={focused ? 'browsers':'browsers-outline'} size={24} color={focused ? '#59008c':'gray'}/>
                    <Text style={{marginTop:4,fontSize:12,color:focused ? '#59008c':'gray'}}>
                        Transaction
                    </Text>
                </View>
            )
        }}/>
        <Tabs.Screen name='scan' options={{
            tabBarIcon:({focused})=>(
                <View style={{
                    height:70,
                    width:70,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:99999,
                    backgroundColor:"#59008c",
                    marginBottom:30
                }}>
                    <Ionicons name="scan" size={42} color='white'/>
                </View>
            )
        }}/>
         <Tabs.Screen name='message' options={{
            tabBarIcon:({focused})=>(
                <View style={{
                    paddingTop:10,
                    alignItems:'center',
                    width:width/5
                }}>
                    <Ionicons name={focused ? 'chatbox-ellipses':'chatbox-ellipses-outline'} size={24} color={focused ? '#59008c':'gray'}/>
                    <Text style={{marginTop:4,fontSize:12,color:focused ? '#59008c':'gray'}}>
                        Messages
                    </Text>
                </View>
            )
        }}/>
        <Tabs.Screen name='account' options={{
            tabBarIcon:({focused})=>(
                <View style={{
                    paddingTop:10,
                    alignItems:'center',
                    width:width/5
                }}>
                    <Ionicons name={focused ? 'person':'person-outline'} size={24} color={focused ? '#59008c':'gray'}/>
                    <Text style={{marginTop:4,fontSize:12,color:focused ? '#59008c':'gray'}}>
                        Profile
                    </Text>
                </View>
            )
        }}/>
    </Tabs>
  )
}

export default TabLayout

