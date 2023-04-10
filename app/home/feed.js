import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const feed = () => {
  return (
    <View style={styles.view}>
      <Link style={styles.text} href="/">feed</Link>
    </View>
  )
}

export default feed

const styles = StyleSheet.create({
    view:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:20,
        fontWeight:"800"
    }
})