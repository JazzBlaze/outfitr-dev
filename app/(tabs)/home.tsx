import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import DefaultStyles from '@/components/styles/defaultStyles'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '@/constants/Colors'
import Swiper from 'react-native-deck-swiper'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:Colors.background}}>
      <StatusBar translucent={true} backgroundColor="#000000" />
      <View style={DefaultStyles.rootContainer}>
        <Text style={DefaultStyles.logoStyle}>Outfitr</Text>

      </View>
      <View style={styles.container}>
        <Swiper
            cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
            renderCard={(card) => {
                return (
                    <View style={styles.card}>
                        <Text style={styles.text}>{card}</Text>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#4FD0E9'}
            stackSize= {3}>

        </Swiper>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});