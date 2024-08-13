import {FlatList, StyleSheet, TouchableOpacity, View,Text,Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import ProgressBar from '@/components/progress/ProgressBar'
import { ThemedText } from '@/components/ThemedText'
import DefaultButton from '@/components/buttons/defaultButton'
import { useQuestionnaire } from '@/context/QuestionnaireProvider'


const Onboarding4 = () => {
  const { price_range, updateQuestionnaire } = useQuestionnaire();

  const priceBands = [
    "0-599",
    "600-1499",
    "1500-2499",
    "2500-3499",
    "3500-4499",
    "4500+",
  ];

  const handleSelectAgeBand = (priceBand: string) => {
    updateQuestionnaire({price_range:priceBand});
  };

  const renderItem = ({ item }: { item: string }) => {
      const isSelected = price_range === item;
      return (
          <TouchableOpacity
              style={[styles.button, isSelected && styles.selectedButton]}
              onPress={() => handleSelectAgeBand(item)}
          >
              <Text style={[styles.buttonText, isSelected && styles.selectedButtonText]}>
                  {item}
              </Text>
          </TouchableOpacity>
      );
  };




  return (
    <SafeAreaView style={{height:"100%"}} >
      <View style={styles.container}>
        <ProgressBar bar={4}/>
        <View style={{  marginHorizontal:16,marginTop:10,flex:1,justifyContent:'space-between'}}>

          <View>
            <ThemedText type="title">Price Preferences</ThemedText>
            <ThemedText type="subtitle">This helps to curate your feed but doesn't set strict limits.</ThemedText>
        
          </View>

          <View style={styles.subContainer}>
              <FlatList
                style={{width:"100%"}}
                  data={priceBands}
                  renderItem={renderItem}
                  keyExtractor={(item:any) => item}
                  contentContainerStyle={styles.list}
              />
          </View>

          <View style={{ alignItems:"center",width:'100%',}}>
            <DefaultButton text='Continue' handlePress={()=>{router.push('/onboarding5')}}/>
          </View>
        </View>
      </View> 
    </SafeAreaView>
  )
}

export default Onboarding4

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
    paddingHorizontal: 20,
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