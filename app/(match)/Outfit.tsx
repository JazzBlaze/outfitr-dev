import { StyleSheet, Text, View,TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useProduct } from '@/context/MagicMatchProvider'
import { ThemedText } from '@/components/ThemedText'
import LoaderScreen from '@/components/progress/LoaderScreen'

const Outfit = () => {
  const {product} =useProduct()

  const bottoms = {
    seller: 'Urban Monkey',
    brand: 'Urban Monkey',
    product_id: '8823421370649',
    product_url:
      'https://www.urbanmonkey.com/collections/cargo-pants/products/streetwear-cargo-pants-white?section_title=cargo-pants&?section_id=466211635481&?location_id=4',
    cover_image:
      'https://www.urbanmonkey.com/cdn/shop/files/streetwear-cargo-pant-white-model-01.png?v=1708325217&width=720',
    images: [
      'https://www.urbanmonkey.com/cdn/shop/files/streetwear-cargo-pant-white-model-02.png?v=1708325225&width=720',
      'https://www.urbanmonkey.com/cdn/shop/files/streetwear-cargo-pants-cream-01.jpg?v=1707817493&width=720',
    ],
    productName: 'Streetwear Cargo Pants // White',
    sizes_available: {
      XS: false,
      S: false,
      M: true,
      L: true,
      XL: true,
      XXL: false,
    },
    price: 1850,
    primary_colour: 'white',
    secondary_colour: null,
    material: '100% cotton',
    fit: 'relaxed fit',
    occasion: null,
    season: null,
    theme: null,
    gender: 'unisex',
    pattern: null,
    master_category: 'apparels',
    sub_category: 'cargo pants',
    LLM_desc: null,
    others: null,
  }
  const bracelet = {
    seller: 'Suffire',
    brand: 'Suffire',
    product_id: '8823421370649',
    product_url: 'https://suffire.in/collections/bracelets/products/synthe',
    cover_image:
      'https://suffire.in/cdn/shop/files/synthe-bracelet-mens-jewellery-india-suffire-accessories_540x.jpg?v=1707403327',
    images: [
      'https://suffire.in/cdn/shop/files/synthe-bracelet-mens-jewellery-india-suffire-accessories-22_540x.jpg?v=1708088995',
      'https://suffire.in/cdn/shop/files/synthe-bracelet-mens-jewellery-india-suffire-accessories-3_d22800cc-60b0-4a2b-a437-34a43e672299_540x.jpg?v=1708088995',
      'https://suffire.in/cdn/shop/files/synthe-bracelet_suffire_540x.jpg?v=1715958966',
    ],
    productName: 'SYNTHE',
    sizes_available: {
      XS: false,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: false
    },
    price: 699,
    primary_colour: 'black',
    secondary_colour: null,
    material: 'stainless steel',
    fit: 'regular',
    occasion: null,
    season: null,
    theme: null,
    gender: 'unisex',
    pattern: null,
    master_category: 'accessories',
    sub_category: 'bracelet',
    LLM_desc: null,
    others: null,
  }
  const sneakers ={
    seller: 'Nike',
    brand: 'Nike',
    product_id: 'ofpnmcalabcbjgholdjcjblkibolbppb',
    product_url:
      'https://www.nike.com/in/launch/t/air-pegasus-2005-smoke-grey-and-light-pumice-1',
    cover_image:
      'https://static.nike.com/a/images/t_prod_ss/w_480,c_limit,f_auto,q_auto/72231fe1-c768-4466-8259-d2a1934a49f9/air-pegasus-2005-smoke-grey-and-light-pumice-hq1173-001-release-date.jpg',
    images: [
      'https://static.nike.com/a/images/t_prod_sc/w_480,c_limit,f_auto,q_auto/3da014ec-b2d8-43fb-b736-56abc9f3946c/air-pegasus-2005-smoke-grey-and-light-pumice-hq1173-001-release-date.jpg',
      'https://static.nike.com/a/images/t_prod_ss/w_480,c_limit,f_auto,q_auto/7afc7e96-823e-4474-9a41-e911f2c29312/air-pegasus-2005-smoke-grey-and-light-pumice-hq1173-001-release-date.jpg',
    ],
    productName: 'Smoke Grey and Light Pumice',
    sizes_available: {
      XS: false,
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true,
    },
    price: 12500,
    primary_colour: 'grey',
    secondary_colour: 'white',
    material: 'synthetic leather',
    fit: 'regular',
    occasion: null,
    season: 'summer',
    theme: null,
    gender: 'unisex',
    pattern: null,
    master_category: 'footwear',
    sub_category: 'sneakers',
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

            <ThemedText style={{textAlign:"center",fontSize:20, lineHeight:20,marginVertical:20}}> The outfit we picked for you!</ThemedText>
            <View style={{flexDirection:"row",justifyContent:"center", width:'100%',flex:1}}>
                <View style={{flex:1}}>
                    <TouchableOpacity  style={{ width:"auto",height:"auto", borderWidth:1, borderColor:Colors.text, padding:10,borderRadius:20,margin:5 }}>
                        <Image resizeMode="contain" source={{uri:product.cover_image}} style={{borderRadius:15,height:250,width:168,alignSelf:"center"}}/>
                        <ThemedText numberOfLines={2} style={{marginTop:10,fontWeight:"bold"}} type="default">{product.productName}</ThemedText>
                        <ThemedText numberOfLines={2} style={{marginVertical:0}} type="default">₹ {product.price}</ThemedText>
                    </TouchableOpacity>
                    <ThemedText type="subtitle" style={{textAlign:'center',marginVertical:10}}>Your Pick</ThemedText>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity  style={{ width:"auto",height:"auto", borderWidth:1, borderColor:Colors.text, padding:10,borderRadius:20,margin:5 }}>
                        <Image resizeMode="contain" source={{uri:bottoms.cover_image}} style={{borderRadius:15,height:250,width:168,alignSelf:"center"}}/>
                        <ThemedText numberOfLines={1} style={{marginTop:10,fontWeight:"bold"}} type="default">{bottoms.productName}</ThemedText>
                        <ThemedText numberOfLines={2} style={{marginVertical:0}} type="default">₹ {bottoms.price}</ThemedText>
                    </TouchableOpacity>
                    <ThemedText type="subtitle" style={{textAlign:'center',marginVertical:10}}>Cargo Pants (Our Pick)</ThemedText>
                </View>
                
            </View>
            <View style={{flexDirection:"row",justifyContent:"center", width:'100%',flex:1,marginTop:10}}>
                <View style={{flex:1}}>
                    <TouchableOpacity  style={{ width:"auto",height:"auto", borderWidth:1, borderColor:Colors.text, padding:10,borderRadius:20,margin:5 }}>
                        <Image resizeMode="stretch" source={{uri:sneakers.cover_image}} style={{borderRadius:15,height:250,width:168,alignSelf:"center"}}/>
                        <ThemedText numberOfLines={1} style={{marginTop:10,fontWeight:"bold"}} type="default">{sneakers.productName}</ThemedText>
                        <ThemedText numberOfLines={2} style={{marginVertical:0}} type="default">₹ {sneakers.price}</ThemedText>
                    </TouchableOpacity>
                    <ThemedText type="subtitle" style={{textAlign:'center',marginVertical:10}}>Sneakers (Our Pick)</ThemedText>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity  style={{ width:"auto",height:"auto", borderWidth:1, borderColor:Colors.text, padding:10,borderRadius:20,margin:5 }}>
                        <Image resizeMode="stretch" source={{uri:bracelet.cover_image}} style={{borderRadius:15,height:250,width:168,alignSelf:"center"}}/>
                        <ThemedText numberOfLines={2} style={{marginTop:10,fontWeight:"bold"}} type="default">{bracelet.productName}</ThemedText>
                        <ThemedText numberOfLines={2} style={{marginVertical:0}} type="default">₹ {bracelet.price}</ThemedText>
                    </TouchableOpacity>
                    <ThemedText type="subtitle" style={{textAlign:'center',marginVertical:10}}>Bracelet (Our Pick)</ThemedText>
                </View>
                
            </View>
            

          </ScrollView>
          :
          <LoaderScreen/>
        }
        
    </SafeAreaView>
  )
}

export default Outfit

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