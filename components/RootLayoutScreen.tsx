import { useGlobalContext } from '@/context/GlobalProvider';
import { useFonts } from 'expo-font';
import {  Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import * as SystemUI from 'expo-system-ui';
SystemUI.setBackgroundColorAsync("black");
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayoutScreen() {
  const {loading} = useGlobalContext()
   
  const [loaded] = useFonts({
    brolimo: require('../assets/fonts/Brolimo.ttf'),
    productSans: require('../assets/fonts/ProductSans.ttf'),
  });

  useEffect(() => {
    if (loaded && !loading) {
      SplashScreen.hideAsync();
    }
  }, [loaded,loading]);

  if (!loaded) {
    return null;
  }
  

  return (
      <Stack  screenOptions={{
        contentStyle:{
          backgroundColor:'#000000'
        }
     }} >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
