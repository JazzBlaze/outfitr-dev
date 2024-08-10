import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '@/components/styles/styles'
import { ThemedText } from '@/components/ThemedText'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View style={styles.viewContainer}>
          {/* <Image source={} /> */}

        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default App

