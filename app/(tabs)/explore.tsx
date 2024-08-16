import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { ThemedText } from '@/components/ThemedText'

const explore = () => {
  const trendingCards = [
    {
      name:"Streetwear",
      image:"https://i.pinimg.com/736x/27/a1/11/27a1115081bbdb3672ac1d0d107ffffd.jpg"
    },
    {
      name:"Old Money",
      image:"https://i.pinimg.com/736x/b4/94/46/b49446f1526543609401eb70aa89be79.jpg"
    },
    {
      name:"Summer Fits",
      image:"https://i.pinimg.com/564x/34/57/fb/3457fb45b8cdac6a98d63c15550e20f5.jpg"
    },
    {
      name:"90s Style",
      image:"https://i.pinimg.com/564x/03/8d/43/038d43112aee5ee16fc8d199269d3a39.jpg"
    },
    
    

  ]
  const styleCards = [
    {
      name:"Trending among              your age",
      image:"https://i.pinimg.com/564x/ed/6c/3f/ed6c3fb7253b34a1df3989e85c04b513.jpg"
    },
    {
      name:"Popular @ your location",
      image:"https://i.pinimg.com/564x/e8/ce/dc/e8cedc571c8afd6bca5cdd2fe5493942.jpg"
    },
    {
      name:"Popular @Bangalore",
      image:"https://i.pinimg.com/736x/81/fd/01/81fd0135e9d824491c4333d172becf88.jpg"
    },
    {
      name:"Popular @Mumbai",
      image:"https://i.pinimg.com/564x/5a/37/e0/5a37e0a4296bf5fc240d8175b310e6c7.jpg"
    },
    {
      name:"Popular right now",
      image:"https://i.pinimg.com/564x/09/f2/64/09f264838f2518dc9053f4c2a473426f.jpg"
    },
    {
      name:"Popular among              concert goers",
      image:"https://i.pinimg.com/564x/87/35/91/873591fdbd76d328936cf6d5f29dcdc1.jpg"
    },


    
    

  ]

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={{margin:5 }}>
        <Image resizeMode="cover" source={{uri:item.image}} style={{borderRadius:20,height:200,width:200}}/>
          <ThemedText numberOfLines={1} style={{marginVertical:10,fontWeight:"bold",position:"absolute",bottom:0, left:10}} type="default">{item.name}</ThemedText>

      </View>
    );
  };
  const renderItem2 = ({ item }: { item: any }) => {
    return (
      <View style={{margin:5,flex:1 }}>
        <Image resizeMode="cover" source={{uri:item.image}} style={{borderRadius:20,height:200,width:185}}/>
        <ThemedText numberOfLines={2} style={{marginVertical:10,fontWeight:"bold",position:"absolute",bottom:0, left:10,flexWrap:"wrap"}} type="default">{item.name}</ThemedText>

      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor:Colors.background,height:"100%",padding:10}}>
      <View style={{flex:1}}>
        <View>
          <ThemedText style={{marginVertical:20}} type="header">Trending Now</ThemedText>
          <FlatList
              data={trendingCards}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
              horizontal
              initialNumToRender={2}
          />
        </View>
        <View>
          <ThemedText style={{marginVertical:20}} type="header">Browse Style Inspo</ThemedText>
          <FlatList
              data={styleCards}
              renderItem={renderItem2}
              keyExtractor={(item) => item.name}
              numColumns={2}
              initialNumToRender={2}
              horizontal={false}
              contentContainerStyle={{height:"auto",paddingBottom:400}}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default explore

const styles = StyleSheet.create({})