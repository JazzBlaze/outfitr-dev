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
    <SafeAreaView style={{backgroundColor:Colors.background,height:'100%'}}>
      <StatusBar translucent={true} backgroundColor="#000000" />
      <View style={{borderWidth:2,borderColor:'#008000',height:'auto'}}>
        <Text style={DefaultStyles.logoStyle}>Outfitr</Text>
        <Text style={DefaultStyles.logoStyle}>Outfitr</Text>
        <Text style={DefaultStyles.logoStyle}>Outfitr</Text>
        <Text style={DefaultStyles.logoStyle}>Outfitr</Text>
        <Text style={DefaultStyles.logoStyle}>Outfitr</Text>
      </View>

      <View style={styles.container}>
        <Swiper
        cardStyle={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: 'auto',
          height: 'auto',
          marginVertical:10,
          marginHorizontal:10,
        }}
        containerStyle={styles.swiperContainer}
          cardVerticalMargin={0}
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
            backgroundColor={'#000000'}
            stackSize= {3}>

        </Swiper>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.background,
    marginTop:0,
    paddingTop:0,
    height:'auto',
    justifyContent:'flex-start',
    alignItems:'center',
    // borderWidth:2,
    // borderColor:'#008000',
    flex:1
  },
  card: {
    height:'100%',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
    margin:0,
    padding:0
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  swiperContainer:{
    flex:1,
    backgroundColor:Colors.background,
  }
});