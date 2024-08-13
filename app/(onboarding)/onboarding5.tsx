
import {FlatList, StyleSheet, TouchableOpacity, View,Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import ProgressBar from '@/components/progress/ProgressBar'
import { ThemedText } from '@/components/ThemedText'
import DefaultButton from '@/components/buttons/defaultButton'
import { useQuestionnaire } from '@/context/QuestionnaireProvider'
import MeasurementScreen from '@/components/onboarding/MeasurementScreen'


const Onboarding5 = () => {
  const { updateQuestionnaire } = useQuestionnaire();






  return (
    <SafeAreaView style={{height:"100%"}} >
      <View style={styles.container}>
        <ProgressBar bar={5}/>
        <View style={{  marginHorizontal:16,marginTop:0,flex:1,justifyContent:'space-between'}}>

          <View style={{marginBottom:10,justifyContent:"flex-end", flexDirection:'row',width:'100%'}}>
            <TouchableOpacity onPress={()=>{
              updateQuestionnaire({fit:null,measurements:null})
              router.push('/onboarding6')
              }} style={{borderRadius:20,borderWidth:1,borderColor:Colors.text,paddingHorizontal:10}}>
              <ThemedText type="default">Skip</ThemedText>
            </TouchableOpacity>
          </View>

          <View>
            <ThemedText type="title">Measurements</ThemedText>
            <ThemedText type="subtitle">Rounded to the nearest inch. Again this is never made public, we will try to show clothes that fits you perfectly!</ThemedText>
          </View>

          <View style={styles.subContainer}>
            <MeasurementScreen/>

          </View>

          <View style={{ alignItems:"center",width:'100%',}}>
            <DefaultButton text='Continue' handlePress={()=>{router.push('/onboarding6')}}/>
          </View>
        </View>
      </View> 
    </SafeAreaView>
  )
}

export default Onboarding5

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
    width:"100%",

  },
  list: {
      flexGrow: 1,
      justifyContent: 'center',
      width:"100%"
  },
  button: {
      height: 60,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: Colors.text,
      marginVertical: 10,
      backgroundColor: Colors.background,
  },
  selectedButton: {
      backgroundColor: Colors.text,
      borderColor:Colors.background
  },
  buttonText: {
      fontSize: 18,
      color: Colors.text,
  },
  selectedButtonText: {
      color: Colors.background,
  },
})