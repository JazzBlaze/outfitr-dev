import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import LottieView from 'lottie-react-native'

const LoaderScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 300,
          height: 300,
          backgroundColor: Colors.background,
        }}
        source={require('@/assets/animations/loader.json')}
      />
    </View>
  )
}

export default LoaderScreen

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.background
    }
})