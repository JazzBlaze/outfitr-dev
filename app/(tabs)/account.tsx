// @ts-nocheck

import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const AccountScreen = () => {
  const configureGoogleSignIn = ()=>{
    GoogleSignin.configure({
      webClientId:"41023045794-86epfchdqadi9q83hpqk92nc1htm2075.apps.googleusercontent.com",
      androidClientId:"41023045794-c89h8ckvfge8sgsmitljk0i7tkcnfs95.apps.googleusercontent.com",
      offlineAccess:true
    })
  }

  useEffect(()=>{
    configureGoogleSignIn();
  })
  async function signout() {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut().then(async ()=>{await GoogleSignin.revokeAccess();});
    
  }
  return (
    <SafeAreaView>
      <Text style={{fontSize:20}} onPress={()=>{signout()}}>Sign out</Text>
    </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})