import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter,useSearchParams,Stack } from 'expo-router'

const profile = () => {
    const router = useRouter();
    const {name,surname,username} = useSearchParams();
    console.log(name)
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
      <Stack.Screen options={{title:username,headerStyle:{backgroundColor:"#000a4e"}, headerTintColor:"#ffe030"}}/>
      <Text>profile</Text>
      <Text>Hello (@{username})</Text>
      <Button onPress={()=>router.back()} title='Go Back'/>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})