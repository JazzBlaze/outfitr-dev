import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { ThemedText } from '@/components/ThemedText'
import DefaultButton from '@/components/buttons/defaultButton'
import LottieView from 'lottie-react-native'
import { router } from 'expo-router'
import DefaultStyles from '@/components/styles/defaultStyles'

const checkout = () => {
    const [userChoice,setUserChoice] = useState<any>(null)
    const paymentMethods = [
        "Debit/Credit Card",
        "Cash On Delivery"
    ]
    const [animation,setAnimation] = useState<boolean>(false)
    


  return (
    <SafeAreaView style={{backgroundColor:Colors.background,height:"100%",padding:10}}>
        {animation?
        <View style={styles.container}>
            <View style={{position:"absolute",top:60,justifyContent:"center"}}>
                <Text style={DefaultStyles.logoStyle}>Outfitr</Text>
            </View>
        <LottieView
          autoPlay
          style={{
            width: 300,
            height: 300,
            backgroundColor: Colors.background,
          }}
          source={require('@/assets/animations/order.json')}
        />
        <View style={{ alignSelf:"center",width:'100%',justifyContent:"center",marginHorizontal:30}}>
                  <DefaultButton text='Go back to feed' handlePress={()=>{router.push('/home')}}/>
        </View>
      </View>
        :
        <ScrollView>
            <ThemedText style={{ textAlign: 'center',marginTop:5, alignSelf:"center" }} type="title">Checkout</ThemedText>
            <ThemedText style={{ textAlign: 'center',marginTop:5, alignSelf:"center" ,marginHorizontal:20}} type="subtitle">Different brands? No worries, experience our one click checkout</ThemedText>

            <View style={{marginVertical:20,gap:10, marginHorizontal:10}}>
                <ThemedText style={{ textAlign: 'left' }} type="defaultSemiBold">Personal Information</ThemedText>
                <View>
                    <ThemedText style={{ textAlign: 'left' }} type="default">Name</ThemedText>
                    <TextInput
                          style={styles.customInput}
                          defaultValue='Thejas Sanjeev'
                          placeholder='Name'
                    />
                </View>
                <View>
                    <ThemedText style={{ textAlign: 'left' }} type="default">Email</ThemedText>
                    <TextInput
                          style={styles.customInput}
                          defaultValue='thejasdub@gmail.com'
                          placeholder='Email'
                    />
                </View>
                <View>
                    <ThemedText style={{ textAlign: 'left' }} type="default">Mobile</ThemedText>
                    <TextInput
                          style={styles.customInput}
                          placeholderTextColor={"#666"}
                    
                          placeholder='Mobile No.'
                    />
                </View>
            </View>
            <View style={{marginVertical:20,gap:10, marginHorizontal:10}}>
                <ThemedText style={{ textAlign: 'left' }} type="defaultSemiBold">Shipping Info</ThemedText>
                <View>
                    <ThemedText style={{ textAlign: 'left' }} type="default">Address</ThemedText>
                    <TextInput
                          style={styles.customInput}
                          defaultValue='VIT, Chennai, Kelambakkam'
                          placeholder='Address Line 1'
                    />
                </View>
                <View>
                    <ThemedText style={{ textAlign: 'left' }} type="default">State</ThemedText>
                    <TextInput
                          style={styles.customInput}
                          defaultValue='Tamil Nadu'
                          placeholder='State'
                    />
                </View>
                <View>
                    <ThemedText style={{ textAlign: 'left' }} type="default">Zip Code</ThemedText>
                    <TextInput
                          style={styles.customInput}
                          defaultValue='600127'
                          placeholder='Zip Code'
                    />
                </View>
            </View>
            <View style={{marginVertical:20,gap:10, marginHorizontal:10}}>
                <ThemedText style={{ textAlign: 'left' }} type="defaultSemiBold">Payment Method</ThemedText>
                <View style={{marginHorizontal:30}}>
                  {paymentMethods.map((item)=>(
                      <TouchableOpacity key={item}
                      style={[styles.button, userChoice == item && styles.selectedButton]}
                      onPress={() => setUserChoice(item)}
                      >
                      <Text style={[styles.buttonText, userChoice == item && styles.selectedButtonText]}>
                          {item}
                      </Text>
                      </TouchableOpacity>

                  ))}

                </View>
                <View style={{ alignItems:"center",width:'100%',}}>
                  <DefaultButton text='Place Order' handlePress={()=>{setAnimation(true)}}/>
                </View>
                
            </View>
        </ScrollView>}
    </SafeAreaView>
  )
}

export default checkout

const styles = StyleSheet.create({
    customInput:{
        backgroundColor:Colors.background,
        borderWidth:1,
        borderColor:Colors.text,
        fontFamily:'productSans',
        // marginHorizontal: 20,
        fontSize: 16,
        borderRadius: 15,
        paddingHorizontal:8,
        paddingVertical:8,
        color: Colors.text,
        
    
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
      container:{
        position:'absolute',
        width:'100%',
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.background
    }
})