import {  Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { product_details } from '@/constants/products';
import LoaderScreen from '@/components/progress/LoaderScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { brands } from '@/constants/Brands';
import ProductView from '@/components/productScreen/productView';
import ProductCarousel from '@/components/productScreen/ProductCarousel';
import ImageCarousel from '@/components/productScreen/ProductCarousel';

const ProductScreen = () => {
  const { query} = useLocalSearchParams();
  const[ displayProduct,setDisplayProduct] = useState<any>(null)

  function getProductById(queryId: any): any | undefined {
    return product_details.find((product:any) => product._id === queryId);
  }


  useEffect(()=>{
    if(query){
      const temp =getProductById(query)
      console.log(query)
      console.log(temp)
      setDisplayProduct(temp)
    }


  },[query])

  function getBrandLogoByName(brandName: string): string | undefined {
    const brand = brands.find(brand => brand.brand_name.toLowerCase() === brandName.toLowerCase());
    return brand ? brand.brand_logo : undefined;
  }

  function combineImages(){
    let temp = [displayProduct.cover_image]
    const final = temp.concat(displayProduct.images);
    console.log(final)
    return final
  }

  return (
    <SafeAreaView style={{height:"100%",backgroundColor:Colors.background}}>
      {displayProduct?
      <ScrollView style={styles.container}>

        <ImageCarousel images={combineImages()} />

        <View style={{height:"100%",flex:1,}}>
            
            <View style={styles.productHeader}>

              <TouchableOpacity style={styles.brandContainer}>
                <Image source={{ uri: getBrandLogoByName(displayProduct.brand) }} style={styles.image} resizeMode="contain" />
                <Text style={{fontFamily:'productSans',alignSelf:"center",fontWeight:"bold",color:Colors.text}}>{displayProduct.brand}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={{width:62,height:62,borderRadius:30,justifyContent:"center",borderWidth:1,borderColor:Colors.text}}>
                <Ionicons
                style={{alignSelf:'center'}}
                name={"bookmark-outline"}
                size={35}
                color={Colors.text}
              />
              </TouchableOpacity>

            </View>


          <ThemedText type="header">{displayProduct.productName}</ThemedText>
          <ThemedText type="defaultSemiBold">₹{displayProduct.price}</ThemedText>
          <ProductView product={displayProduct}/>

        </View>

        <View style={styles.header}>
          <TouchableOpacity onPress={()=>{router.back()}} style={styles.iconContainer}>
            <Ionicons
            name={"arrow-back"}
            size={30}
            color={Colors.background}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons
            name={"share"}
            size={30}
            color={Colors.background}
          />
          </TouchableOpacity>
        </View>


      </ScrollView>
      :
      <LoaderScreen/>
      }
      
    </SafeAreaView>
  )

}

export default ProductScreen

const styles = StyleSheet.create({
  container:{
    padding:10,
    minHeight:"100%",
  },
  iconContainer:{
    width:40,
    height:40,
    borderRadius:40,
    backgroundColor:Colors.text,
    justifyContent:"center",
    alignItems:"center"
  },
  header:{
    position:"absolute",
    top:0,
    width:"100%",
    height:"100%",
    padding:10,
    flexDirection:"row",
    justifyContent:"space-between"
  },

  productHeader:{
    width:"100%",
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:20,

  },

  brandContainer:{
    paddingRight:6,
    padding:2,
    borderWidth:1,
    borderColor:Colors.text,
    backgroundColor:Colors.background,
    borderRadius:40,
    flexDirection:"row",
    gap:4,
    width:"auto",
    
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30, // To make the image circular
    backgroundColor:'#fff',
  },

})