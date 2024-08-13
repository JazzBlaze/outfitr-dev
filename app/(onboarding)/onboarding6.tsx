import {Text, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import ProgressBar from '@/components/progress/ProgressBar'
import { ThemedText } from '@/components/ThemedText'
import DefaultButton from '@/components/buttons/defaultButton'
import { useQuestionnaire } from '@/context/QuestionnaireProvider'
import * as Location from 'expo-location';

const Onboarding6 = () => {
  const { location, updateQuestionnaire } = useQuestionnaire();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let locationData = await Location.getCurrentPositionAsync({});
      let address = await Location.reverseGeocodeAsync(locationData.coords);

      if (address.length > 0) {
        const locationString = `${address[0].city}, ${address[0].region}, ${address[0].country}`;
        updateQuestionnaire({ location: locationString });
      }
    })();
  }, []);



  return (
    <SafeAreaView style={{height:"100%"}} >
      <View style={styles.container}>
        <ProgressBar bar={6}/>
        <View style={{  marginHorizontal:16,marginTop:10,flex:1,justifyContent:'space-between'}}>
          <View>
            <ThemedText type="title">Just 1 Quick Thing...</ThemedText>
            <ThemedText type="subtitle">Please allow location access, this is never made public. We ask to show trending clothes near you.  </ThemedText>
          </View>

          <View style={styles.subContainer}>
              {errorMsg ? (
                <Text style={styles.errorText}>{errorMsg}</Text>
              ) : (
                <Text style={styles.locationText}>Location: {location || "Fetching location..."}</Text>
              )}
          </View>

          <View style={{ alignItems:"center",width:'100%',}}>
            <DefaultButton text='Continue' handlePress={()=>{router.push('/onboarding3')}}/>
          </View>
        </View>
      </View> 
    </SafeAreaView>
  )
}

export default Onboarding6

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

  locationText: {
    fontSize: 18,
    color: 'black',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
})