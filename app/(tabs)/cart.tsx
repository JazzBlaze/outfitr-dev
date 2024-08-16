import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import { useCart } from '@/context/CartContext'
import CartScreen from '@/components/cart/CartProducts'
import DefaultButton from '@/components/buttons/defaultButton'
import { router } from 'expo-router'

const Cart = () => {
  const {cartProducts} = useCart()
  let Subtotal=0
  cartProducts.forEach(product => {
    Subtotal+=product.price

    
  });
  return (
    <SafeAreaView style={{ backgroundColor: Colors.background, height: '100%', padding: 10}}>
      <View style={{flex:1}}>
        
        <View style={{flexDirection:"row",justifyContent:"space-between", marginHorizontal:10,alignContent:"center"}}>
          <ThemedText style={{ textAlign: 'center',marginTop:5, alignSelf:"center"}} type="link">Clear</ThemedText>
          <ThemedText style={{ textAlign: 'center',marginTop:5, alignSelf:"center" }} type="title">My Cart</ThemedText>
          <ThemedText style={{ textAlign: 'center',marginTop:5, alignSelf:"center"}} type="link">FAQs</ThemedText>

        </View>
        <ThemedText style={{ textAlign: 'center',marginTop:5, alignSelf:"center" ,marginHorizontal:20}} type="subtitle">Different brands? No worries, experience our one click checkout</ThemedText>

        {cartProducts.length<1?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <ThemedText style={{ textAlign: 'center' }} type="subtitle">Add something to your cart!</ThemedText>
      </View>
        :
        <View style={{flex:1}}>
          <ThemedText style={{ textAlign: 'center',marginVertical:20, alignSelf:"center"}} type="defaultSemiBold">Subtotal: ₹ {Subtotal}</ThemedText>
          <View style={{flex:7}}>
            <CartScreen products={cartProducts} />
          </View>
          <View style={{ alignItems:"center",width:'100%',flex:1, justifyContent:"flex-end",height:"100%"}}>
            <DefaultButton text='Continue to Checkout' handlePress={()=>{router.push("/checkout")}}/>
          </View>
        </View>
        }

      </View>

    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({})