import {Text, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import ProgressBar from '@/components/progress/ProgressBar'
import { ThemedText } from '@/components/ThemedText'
import DefaultButton from '@/components/buttons/defaultButton'
import { useQuestionnaire } from '@/context/QuestionnaireProvider'
import axios from 'axios'
import { useGlobalContext } from '@/context/GlobalProvider'
import * as Location from 'expo-location';

const Onboarding6 = () => {
  const { location,gender ,age_group ,preferred_brands, price_range ,measurements,fit,updateQuestionnaire } = useQuestionnaire();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const {user} = useGlobalContext()


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        try{
          const quest={
            user_id:user.id,
            location:location,
            gender:gender,
            age_group:age_group,
            preferred_brands:preferred_brands,
            price_range:price_range,
            measurements:measurements,
            fit:fit
          }
          const response = await axios.post(`https://outfitr-dev-backend.onrender.com/newQuestionnaire`, quest);
          router.replace('/home')

        }catch(e){
          console.log(e)
        }
        return;
      }

      try{
      let locationData = await Location.getCurrentPositionAsync({});
      let address = await Location.reverseGeocodeAsync(locationData.coords);

      if (address.length > 0) {
        const locationString = `${address[0].city}, ${address[0].region}, ${address[0].country}`;
        updateQuestionnaire({ location: locationString });
        
          const quest={
            user_id:user.id,
            location:location,
            gender:gender,
            age_group:age_group,
            preferred_brands:preferred_brands,
            price_range:price_range,
            measurements:measurements,
            fit:fit
          }
          console.log(user.id)
          const response = await axios.post(`https://outfitr-dev-backend.onrender.com/newQuestionnaire`, quest);
          router.replace('/home')

        }
      }catch(e){
        console.log(e)
        const quest={
          user_id:user.id,
          location:location,
          gender:gender,
          age_group:age_group,
          preferred_brands:preferred_brands,
          price_range:price_range,
          measurements:measurements,
          fit:fit
        }
        console.log(user.id)
        const response = await axios.post(`https://outfitr-dev-backend.onrender.com/newQuestionnaire`, quest);
        router.replace('/home')
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

          
          <View style={{ alignItems:"center",width:'100%',}}>
          {errorMsg &&
            <DefaultButton text='Explore Your Styles' handlePress={()=>{router.replace('/home')}}/>
          }
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
    fontFamily:'productSans',
      fontSize: 18,
      color: Colors.text,
  },
  selectedButtonText: {
      color: Colors.background,
  },

  locationText: {
    fontSize: 18,
    color: 'white',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
})