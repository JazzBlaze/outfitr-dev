import { Image, StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import DefaultStyles from '@/components/styles/defaultStyles'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';


import Sources from "@/constants/Sources"
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import AuthButton from '@/components/buttons/AuthButton'
import { router } from 'expo-router'

const App = () => {
  const opacity = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const translateY = useSharedValue(30);
  const opacityBtn = useSharedValue(0);
  const translateYBtn = useSharedValue(30);

  // Define the animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      opacity: opacity2.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  const animatedBtnContainer = useAnimatedStyle(() => {
    return {
      opacity: opacityBtn.value,
      transform: [{ translateY: translateYBtn.value }],
    };
  });

  // Effect to trigger the fade-in animation
  useEffect(() => {
    opacity.value = withTiming(0.5, { duration: 2500 });
    opacity2.value = withTiming(1, { duration: 2000 });
    translateY.value = withTiming(-10, { duration: 2000 }); 
    opacityBtn.value = withDelay(2000,(withTiming(1, { duration: 2000 })));
    translateYBtn.value = withDelay(2000,(withTiming(0, { duration: 2000 }))); 
  }, []);
  return (
    <SafeAreaView style={DefaultStyles.rootContainer}>
      <StatusBar translucent={true} backgroundColor="transparent" />
        <View style={DefaultStyles.viewContainer}>
          <Animated.ScrollView contentContainerStyle={{height:'100%',justifyContent:'flex-end',alignItems:'center',zIndex:999}} style={[animatedBtnContainer,{position:'absolute',zIndex:999}]} >
            <Text style={[styles.subText]}>Build your wardrobe</Text>
            <AuthButton handlePress={()=>router.push('/(auth)/sign-in')} btnType={"ghost"} type={"google"} />
            <AuthButton handlePress={()=>{}} btnType={"default"} type={"apple"} />
          </Animated.ScrollView>

          <Animated.Image source={Sources.landingGallery} style={[styles.image,animatedStyle]} resizeMode='contain' />
          <View style={styles.container}>
            <Animated.Text style={[styles.appTitle, animatedStyle2]}>Outfitr</Animated.Text>
          </View>

        </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  image:{
    width:'100%',
    zIndex:-1,
    opacity:0,
  },
  container:{
    position:'absolute',
    // justifyContent:'center',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    width:'100%',
    zIndex:0
  },
  appTitle:{
    color:Colors.text,
    fontSize: 80,
    fontFamily:'brolimo',
    letterSpacing:0.5,
  },
  subText:{
    color:Colors.text,
    textAlign:'center',
    marginBottom:30,
    fontSize: 24,
    fontFamily:'productSans'
  }

})

