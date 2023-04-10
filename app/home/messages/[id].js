import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router'

export default function messageRoom() {
  const {id} = useSearchParams();
  return (
    <View>
      <Text>id:{id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})