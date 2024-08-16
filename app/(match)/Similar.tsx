import { StyleSheet, Text, View,TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useProduct } from '@/context/MagicMatchProvider'
import { ThemedText } from '@/components/ThemedText'
import LoaderScreen from '@/components/progress/LoaderScreen'

const Similar = () => {
  const {product} =useProduct()

  const product1={
    seller: 'Urban Monkey',
    brand: 'Urban Monkey',
    product_id: '8664565940505',
    product_url:
      'https://www.urbanmonkey.com/collections/oversized-hip-hop-t-shirts/products/within?section_title=oversized-t-shirts&?section_id=262759841876&?location_id=2',
    cover_image:
      'https://www.urbanmonkey.com/cdn/shop/files/within-tshirt-model-01.jpg?v=1708325318&width=720',
    images: [
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-01.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-03.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-04.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-02.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-05.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-06.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-black-oversized-tshirt-07.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-tshirt-model-02.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-tshirt-04.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-tshirt-03.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-tshirt-10.jpg?v=1711683285&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/within-tshirt-07.jpg?v=1711683285&width=720',
    ],
    productName: 'Within',
    sizes_available: {
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true,
    },
    price: 999,
    primary_colour: 'black',
    secondary_colour: null,
    material: '100% cotton',
    fit: 'updated oversized fit',
    occasion: null,
    season: null,
    theme: null,
    gender: 'unisex',
    pattern: null,
    master_category: 'apparels',
    sub_category: 'oversized T-shirt',
    LLM_desc: null,
    others: null,
  }
  const product2={
    seller: 'Urban Monkey',
    brand: 'Urban Monkey',
    product_id: '8904277983513',
    product_url:
      'https://www.urbanmonkey.com/collections/oversized-hip-hop-t-shirts/products/easy-t-shirt?section_title=oversized-t-shirts&?section_id=262759841876&?location_id=21',
    cover_image:
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-01.jpg?v=1711683183&width=720',
    images: [
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-02.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-07.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-03.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-04.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-05.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/easy-black-oversized-tshirt-06.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_231668-1.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_231674.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_2312953.jpg?v=1711683209&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_2312962.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_2312977.jpg?v=1711683183&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_2312979.jpg?v=1711683183&width=720',
    ],
    productName: 'Easy T-shirt',
    sizes_available: {
      XS: false,
      S: false,
      M: false,
      L: false,
      XL: false,
      XXL: false,
    },
    price: 999,
    primary_colour: 'black',
    secondary_colour: null,
    material: '100% cotton',
    fit: 'oversized fit',
    occasion: null,
    season: null,
    theme: null,
    gender: 'unisex',
    pattern: null,
    master_category: 'apparels',
    sub_category: 'oversized T-shirt',
    LLM_desc: null,
    others: null,
  }
  const product3={
    seller: 'Urban Monkey',
    brand: 'Urban Monkey',
    product_id: '8884162461977',
    product_url: 'https://www.urbanmonkey.com/products/legacy-t-shirt-001',
    cover_image:
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-black-oversized-tshirt-06.jpg?v=1712554381&width=720',
    images: [
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-black-oversized-logo-tshirt-04.jpg?v=1712554381&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-black-oversized-logo-tshirt-02.jpg?v=1712554381&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-black-oversized-logo-tshirt-01.jpg?v=1712554381&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-black-oversized-logo-tshirt-03.jpg?v=1712554376&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/legacy-black-oversized-logo-tshirt-05.jpg?v=1712554376&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_231645.jpg?v=1712554376&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_231652.jpg?v=1712554376&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/URBANMONKEY06_11_2312880.jpg?v=1712554376&width=720',
    ],
    productName: 'Legacy T-shirt // 001',
    sizes_available: {
      XS: true,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true,
    },
    price: 999,
    primary_colour: 'black',
    secondary_colour: null,
    material: '100% cotton',
    fit: 'oversized fit',
    occasion: null,
    season: null,
    theme: null,
    gender: 'unisex',
    pattern: null,
    master_category: 'apparels',
    sub_category: 'oversized T-shirt',
    LLM_desc: null,
    others: null,
  }


  return (
    <SafeAreaView style={{ backgroundColor: Colors.background, height: '100%', padding: 10}}>
        
        <View>

   

                  <Text style={{letterSpacing:1,fontFamily:'brolimo',color:Colors.text,fontSize:28,lineHeight:30,textAlign:"center",marginTop:5}}>Magic Match</Text>
                  <ThemedText type="subtitle" style={{textAlign:'center',marginTop:10}}>Find similar looking products or a matching outfit</ThemedText>
        </View>
        <View style={{        position:"absolute",
        top:50,left:10}}>
        <TouchableOpacity onPress={()=>{router.back()}} style={styles.iconContainer}>
                    <Ionicons
                    name={"arrow-back"}
                    size={30}
                    color={Colors.background}
                  />
                </TouchableOpacity>
        </View>
        {
          product?
          <ScrollView style={{marginTop:20}}>

            <ThemedText style={{textAlign:"center",fontSize:20, lineHeight:20,marginVertical:20}}> Similar items we found for your pick!</ThemedText>
            <View style={{flexDirection:"row",justifyContent:"center", width:'100%',flex:1}}>
                <View style={{flex:1}}>
                    <TouchableOpacity  style={{ width:"auto",height:"auto", borderWidth:1, borderColor:Colors.text, padding:10,borderRadius:20,margin:5 }}>
                        <Image resizeMode="contain" source={{uri:product.cover_image}} style={{borderRadius:15,height:250,width:168,alignSelf:"center"}}/>
                        <ThemedText numberOfLines={1} style={{marginTop:10,fontWeight:"bold"}} type="default">{product.productName}</ThemedText>
                        <ThemedText numberOfLines={2} style={{marginVertical:0}} type="default">₹ {product.price}</ThemedText>
                    </TouchableOpacity>
                    <ThemedText type="subtitle" style={{textAlign:'center',marginVertical:10}}>Your Pick</ThemedText>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity  style={{ width:"auto",height:"auto", borderWidth:1, borderColor:Colors.text, padding:10,borderRadius:20,margin:5 }}>
                        <Image resizeMode="contain" source={{uri:product1.cover_image}} style={{borderRadius:15,height:250,width:168,alignSelf:"center"}}/>
                        <ThemedText numberOfLines={1} style={{marginTop:10,fontWeight:"bold"}} type="default">{product1.productName}</ThemedText>
                        <ThemedText numberOfLines={2} style={{marginVertical:0}} type="default">₹ {product1.price}</ThemedText>
                    </TouchableOpacity>
                    <ThemedText type="subtitle" style={{textAlign:'center',marginVertical:10}}>Similar Match</ThemedText>
                </View>
                
            </View>
            <View style={{flexDirection:"row",justifyContent:"center", width:'100%',flex:1,marginTop:10}}>
                <View style={{flex:1}}>
                    <TouchableOpacity  style={{ width:"auto",height:"auto", borderWidth:1, borderColor:Colors.text, padding:10,borderRadius:20,margin:5 }}>
                        <Image resizeMode="stretch" source={{uri:product2.cover_image}} style={{borderRadius:15,height:250,width:168,alignSelf:"center"}}/>
                        <ThemedText numberOfLines={1} style={{marginTop:10,fontWeight:"bold"}} type="default">{product2.productName}</ThemedText>
                        <ThemedText numberOfLines={2} style={{marginVertical:0}} type="default">₹ {product2.price}</ThemedText>
                    </TouchableOpacity>
                    <ThemedText type="subtitle" style={{textAlign:'center',marginVertical:10}}>Similar Match</ThemedText>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity  style={{ width:"auto",height:"auto", borderWidth:1, borderColor:Colors.text, padding:10,borderRadius:20,margin:5 }}>
                        <Image resizeMode="stretch" source={{uri:product3.cover_image}} style={{borderRadius:15,height:250,width:168,alignSelf:"center"}}/>
                        <ThemedText numberOfLines={2} style={{marginTop:10,fontWeight:"bold"}} type="default">{product3.productName}</ThemedText>
                        <ThemedText numberOfLines={2} style={{marginVertical:0}} type="default">₹ {product3.price}</ThemedText>
                    </TouchableOpacity>
                    <ThemedText type="subtitle" style={{textAlign:'center',marginVertical:10}}>Similar Match</ThemedText>
                </View>
                
            </View>
            

          </ScrollView>
          :
          <LoaderScreen/>
        }
        
    </SafeAreaView>
  )
}

export default Similar

const styles = StyleSheet.create({
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
    iconContainer:{

        width:40,
        height:40,
        borderRadius:40,
        backgroundColor:Colors.text,
        justifyContent:"center",
        alignItems:"center"
      },
      text: {
        textAlign:"center",
        fontSize: 18,
        color: Colors.text,
        fontFamily:'productSans'
      },
      choiceBtn:{
        paddingVertical:50,
        borderRadius:20,
        backgroundColor:Colors.background,
        borderWidth:1,
        borderColor:Colors.text,
        flex:1,
        justifyContent:"center"
      },
})