import {FlatList, StyleSheet, TouchableOpacity, View,Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import ProgressBar from '@/components/progress/ProgressBar'
import { ThemedText } from '@/components/ThemedText'
import DefaultButton from '@/components/buttons/defaultButton'
import { useQuestionnaire } from '@/context/QuestionnaireProvider'


const Onboarding2 = () => {
  const { age_group, updateQuestionnaire } = useQuestionnaire();

  const ageBands = ['18-25', '26-35', '36-45', '46+'];

  const handleSelectAgeBand = (ageBand: string) => {
    console.log(ageBand)
    updateQuestionnaire({age_group:ageBand});
  };

  const renderItem = ({ item }: { item: string }) => {
      const isSelected = age_group === item;
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
        <ProgressBar bar={2}/>
        <View style={{  marginHorizontal:16,marginTop:10,flex:1,justifyContent:'space-between'}}>

          <View>
            <ThemedText type="title">Select Age Group</ThemedText>
            <ThemedText type="subtitle">This is never made public. We ask to show trending fashion in your demographic</ThemedText>
            
          </View>

          <View style={styles.subContainer}>
              <FlatList
                style={{width:"100%"}}
                  data={ageBands}
                  renderItem={renderItem}
                  keyExtractor={(item:any) => item}
                  contentContainerStyle={styles.list}
              />
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
    fontFamily:'productSans',
      fontSize: 18,
      color: Colors.text,
  },
  selectedButtonText: {
      color: Colors.background,
  },
})