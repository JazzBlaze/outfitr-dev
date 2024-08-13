import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Onboarding3 = () => {
  return (
    <View style={{backgroundColor:'#00FF00',height:'100%'}}>
      <Text style={{marginTop:50}} onPress={()=>{router.push('/onboarding1')}}>onboarding3</Text>
    </View>
  )
}

export default Onboarding3

const styles = StyleSheet.create({})