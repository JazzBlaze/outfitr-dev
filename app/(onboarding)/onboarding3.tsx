import { StyleSheet, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import ProgressBar from '@/components/progress/ProgressBar'
import { ThemedText } from '@/components/ThemedText'
import DefaultButton from '@/components/buttons/defaultButton'
import BrandGrid from '@/components/onboarding/BrandGrid'


const Onboarding3 = () => {


  return (
    <SafeAreaView style={{height:"100%"}} >
      <View style={styles.container}>
        <ProgressBar bar={3}/>
        <View style={{  marginHorizontal:16,marginTop:10,flex:1,justifyContent:'space-between'}}>

          <View>
            <ThemedText type="title">Pick a Few Brands</ThemedText>
            <ThemedText type="subtitle">Pick 3 or more brands you love.</ThemedText>
          </View>

          <View style={styles.subContainer}>
            <BrandGrid/>
              
          </View>

          <View style={{ alignItems:"center",width:'100%',}}>
            <DefaultButton text='Continue' handlePress={()=>{router.push('/onboarding4')}}/>
          </View>
        </View>
      </View> 
    </SafeAreaView>
  )
}

export default Onboarding3

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.background,
    flex:1,
    height:"100%",
    padding:10,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%"
  }
})