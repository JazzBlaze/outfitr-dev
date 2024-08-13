import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";


import { useGlobalContext } from "../../context/GlobalProvider";
import { Colors } from "@/constants/Colors";
import { QuestionnaireProvider } from "@/context/QuestionnaireProvider";

import * as SystemUI from 'expo-system-ui';
SystemUI.setBackgroundColorAsync("black");

const AuthLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  // if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <>
    <QuestionnaireProvider>
      <Stack
            screenOptions={{
              contentStyle:{
                backgroundColor:'#000000'
              }
           }}  >
        <Stack.Screen
          name="onboarding1"
          options={{
            headerShown: false,
            
          }}
        />
        <Stack.Screen
          name="onboarding2"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="onboarding3"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="onboarding4"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="onboarding5"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="onboarding6"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar translucent={true}  backgroundColor={Colors.background} />
      </QuestionnaireProvider>
    </>
  );
};

export default AuthLayout;