import {StyleSheet, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import ProgressBar from '@/components/progress/ProgressBar'
import { ThemedText } from '@/components/ThemedText'
import { useGlobalContext } from '@/context/GlobalProvider'
import GenderButton from '@/components/buttons/GenderButton'
import DefaultButton from '@/components/buttons/defaultButton'


const Onboarding1 = () => {
  const {user} = useGlobalContext()


  return (
    <SafeAreaView style={{height:"100%"}} >
      <View style={styles.container}>
        <ProgressBar bar={1}/>
        {/* <ThemedText type="subtitle">Welcome {user.givenName}</ThemedText> */}
        <View style={{  marginHorizontal:16,marginTop:10,flex:1,justifyContent:'space-between'}}>

          <View>
            <ThemedText type="title">Welcome Thejas!</ThemedText>
            <ThemedText type="subtitle">Select your preference</ThemedText>
          </View>

          <View>
            <GenderButton/>
          </View>

          <View style={{ alignItems:"center",width:'100%',}}>
            <DefaultButton text='Continue' handlePress={()=>{router.push('/onboarding2')}}/>
          </View>
        </View>
      </View> 
    </SafeAreaView>
  )
}

export default Onboarding1

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.background,
    flex:1,
    height:"100%",
    padding:10,
  
  },
})