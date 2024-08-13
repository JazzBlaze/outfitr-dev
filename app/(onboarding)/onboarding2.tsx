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


const Onboarding2 = () => {
  const {user} = useGlobalContext()


  return (
    <SafeAreaView style={{height:"100%"}} >
      <View style={styles.container}>
        <ProgressBar bar={2}/>
        {/* <ThemedText type="subtitle">Welcome {user.givenName}</ThemedText> */}
        <View style={{  marginHorizontal:16,marginTop:10,flex:1,justifyContent:'space-between'}}>

          <View>
            <ThemedText type="title">Select Age Group</ThemedText>
            <ThemedText type="subtitle">This is never made public. We ask to show trending fashion among your demographic</ThemedText>
          </View>

          <View style={{marginTop:20}}>
            <GenderButton/>
          </View>

          <View style={{ alignItems:"center",width:'100%',}}>
            <DefaultButton text='Continue' handlePress={()=>{router.push('/onboarding3')}}/>
          </View>
        </View>
      </View> 
    </SafeAreaView>
  )
}

export default Onboarding2

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.background,
    flex:1,
    height:"100%",
    padding:10,
  
  },
})