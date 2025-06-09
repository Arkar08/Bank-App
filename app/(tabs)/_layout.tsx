import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
        backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
  }}>
        <Tabs.Screen name='index' options={{
            title:"Home",
            tabBarIcon:({focused,color})=>{
                    return <Ionicons name={focused ? 'home':'home-outline'} size={24} color={color}/>;
                },
                headerShown:false
        }}/>
        <Tabs.Screen name='scan' options={{
            title:"Scan",
            tabBarIcon:({focused,color})=>{
                return <Ionicons name={focused?"scan-circle":"scan-circle-outline"} size={24} color={color}/>
            }
        }}/>
        <Tabs.Screen name='account' options={{
                title:"Profile",
                tabBarIcon:({focused,color})=>{
                    return <Ionicons name={focused ? 'person':'person-outline'} size={24} color={color}/>;
                }
            }}/>
    </Tabs>
  )
}

export default TabLayout

