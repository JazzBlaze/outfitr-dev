import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { router, usePathname } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { ThemedText } from '@/components/ThemedText'
import { useScannerProduct } from '@/context/ScannerProvider'
import LoaderScreen from '@/components/progress/LoaderScreen'
import { ScanningProducts } from '@/constants/scanning'

const exact = () => {
    const {scannerProduct} = useScannerProduct()
    const resultProduct = ScanningProducts[0]
    const similarProducts = [ScanningProducts[1],ScanningProducts[2]]
    const pathname = usePathname()

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={{ borderWidth:1, borderColor:Colors.text, padding:6,flex:1,borderRadius:20,margin:5 }}>
            <Image resizeMode="cover" source={{uri:item.cover_image}} style={{borderRadius:20,height:200,width:"auto"}}/>
            <ThemedText numberOfLines={2} style={{marginVertical:10,fontWeight:"bold"}} type="default">{item.productName}</ThemedText>
            <ThemedText  style={{marginVertical:0}} type="default">₹ {item.price}</ThemedText>
    
          </View>
        );
      };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.background, height: '100%', padding: 10}}>
      <View style={{flex:1}}>
          <Text style={{letterSpacing:1,fontFamily:'brolimo',color:Colors.text,fontSize:28,lineHeight:30,textAlign:"center"}}>Outfitr Vision</Text>
          <View style={{position:"absolute",top:0,}}>
              <TouchableOpacity onPress={()=>{router.back()}} style={styles.iconContainer}>
                <Ionicons
                name={"arrow-back"}
                size={30}
                color={Colors.background}
                />
                  </TouchableOpacity>
          </View>
          {scannerProduct ?
          <ScrollView >
              <View style={{flexDirection:"row",justifyContent:"center",marginVertical:20}}>
                <Image source={{uri:scannerProduct}} style={{width:300,height:300,borderRadius:20,zIndex:-1}}/>
                  </View>
                  <ThemedText style={{textAlign:"center"}} type="subtitle">Your search</ThemedText>
              <View>
                <ThemedText style={{textAlign:"center", marginVertical:20,fontSize:22,lineHeight:22}}   type="header">Found an exact match</ThemedText>


              </View>
              <View style={{flexDirection:"row",justifyContent:"center",marginVertical:10}}>
                    <TouchableOpacity onPress={()=>{
                      const query = resultProduct._id
                      if(pathname.startsWith('/product')) router.setParams({query})
                      else router.push(`/product/${query}`)
                    }} style={{ width:170, height:"auto", borderWidth:1, borderColor:Colors.text, padding:10,flex:1,borderRadius:20,margin:5,marginHorizontal:100 }}>
                        <Image resizeMode="contain" source={{uri:resultProduct.cover_image}} style={{borderRadius:15,height:250,width:168,alignSelf:"center"}}/>
                    <ThemedText numberOfLines={2} style={{marginTop:10,fontWeight:"bold"}} type="default">{resultProduct.productName}</ThemedText>
                    <ThemedText numberOfLines={2} style={{marginVertical:0}} type="default">₹ {resultProduct.price}</ThemedText>
          
                    </TouchableOpacity>
                </View>
              <View>
                <ThemedText style={{marginVertical:20,fontSize:22,lineHeight:22}} type="header">Similar looking products</ThemedText>
                <FlatList
                    data={similarProducts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                    horizontal
                    initialNumToRender={2}
                />
          
              </View>
          </ScrollView>
          :
          <LoaderScreen/>
          }
      </View>
    </SafeAreaView>
  )
}

export default exact

const styles = StyleSheet.create({
    iconContainer:{
 
        width:40,
        height:40,
        borderRadius:40,
        backgroundColor:Colors.text,
        justifyContent:"center",
        alignItems:"center"
      },
})