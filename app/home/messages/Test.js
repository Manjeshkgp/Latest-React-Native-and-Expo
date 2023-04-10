import { View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const index = () => {
  return (
    <View>
      <Link href="/home/messages/1">friend name 1</Link>
      <Link href="/home/messages/2">friend name 2</Link>
      <Link href="/home/messages/3">friend name 3</Link>
      <Link href="/home/messages/4">friend name 4</Link>
      <Link href="/home/messages/5">friend name 5</Link>
    </View>
  )
}

export default index