import { StyleSheet, Text, View,TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useProduct } from '@/context/MagicMatchProvider'
import { ThemedText } from '@/components/ThemedText'
import LoaderScreen from '@/components/progress/LoaderScreen'
import LottieView from 'lottie-react-native'
import DefaultButton from '@/components/buttons/defaultButton'

const MagicMatch = () => {
  const {product} =useProduct()
  const [userChoice,setUserChoice] = useState('choice')
  const [categories,setCategories] = useState<any>([])

  const productCategories = [
    "Jackets & Tops",
    "Bottoms",
    "Sneakers",
    "Accessories",
  ];
  const occasions = [
    "Casual",
    "Club & Party",
    "Date Night",
    "Wedding",
    "Beach",
  ];

  const handleSelect = (priceBand: string) => {
    if(categories.includes(priceBand)){
      const temp = categories.filter((item:any) => item !== priceBand);
      setCategories(temp)
    }else{
      const temp = [...categories]
      temp.push(priceBand)
      setCategories(temp)

    }
  };

  // const renderItem = ({ item }: { item: string }) => {
  //     const isSelected = categories.includes(item);
  //     return (

  //     );
  // };

  function handleSimilarResults(){
    router.push("/Similar")
    setUserChoice('choice')

  }
  function handleOutfitResults(){
    router.push("/Outfit")
    setUserChoice('choice')


  }
  return (
    <SafeAreaView style={{ backgroundColor: Colors.background, height: '100%', padding: 10}}>
        <View>

                

                  <Text style={{letterSpacing:1,fontFamily:'brolimo',color:Colors.text,fontSize:28,lineHeight:30,textAlign:"center",marginTop:5}}>Magic Match</Text>
                  <ThemedText type="subtitle" style={{textAlign:'center',marginTop:10}}>Find similar looking products or a matching outfit</ThemedText>
        </View>
        <View style={{position:"absolute",top:50,left:10}}>
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
            <View style={{flexDirection:"row",justifyContent:"center"}}>
                <TouchableOpacity  style={{ width:"auto",height:"auto", borderWidth:1, borderColor:Colors.text, padding:10,borderRadius:20,margin:5 }}>
                    <Image resizeMode="contain" source={{uri:product.cover_image}} style={{borderRadius:15,height:250,width:168,alignSelf:"center"}}/>
                    <ThemedText numberOfLines={2} style={{marginTop:10,fontWeight:"bold"}} type="default">{product.productName}</ThemedText>
                    <ThemedText numberOfLines={2} style={{marginVertical:0}} type="default">₹ {product.price}</ThemedText>
            
                </TouchableOpacity>
                
            </View>
            <ThemedText type="subtitle" style={{textAlign:'center',marginVertical:10}}>Your Pick</ThemedText>
            {userChoice =="choice" && <ThemedText style={{textAlign:"center",fontSize:20, lineHeight:20,marginVertical:20}}> What do you want to do?</ThemedText>}
            <View>
            {userChoice==="choice" && 

            <View style={{flexDirection:"row",justifyContent:"center",marginVertical:10,marginHorizontal:20,gap:20}}>
              <TouchableOpacity onPress={()=>{setUserChoice('similar'); setTimeout(handleSimilarResults,5000)}} style={[styles.choiceBtn]}>
                <Text style={styles.text}>Find similar products</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{setUserChoice('outfit');}} style={styles.choiceBtn}>
                <Text style={styles.text}>Build an outfit</Text>
              </TouchableOpacity>
            </View>

            }
            {userChoice =="similar" && <ThemedText style={{textAlign:"center",fontSize:20, lineHeight:20,marginVertical:20}}> Finding similar products...</ThemedText>}
            {userChoice =="outfit" && <ThemedText style={{textAlign:"center",fontSize:20, lineHeight:20,marginVertical:20}}> Select the product types for your outfit</ThemedText>}
            {userChoice =="outfit2" && <ThemedText style={{textAlign:"center",fontSize:20, lineHeight:20,marginVertical:20}}> What's the occasion?</ThemedText>}
            {userChoice=="outfit" &&

       
                <View style={{marginHorizontal:30}}>
                  {productCategories.map((item)=>(
                      <TouchableOpacity key={item}
                      style={[styles.button, categories.includes(item) && styles.selectedButton]}
                      onPress={() => handleSelect(item)}
                      >
                      <Text style={[styles.buttonText, categories.includes(item) && styles.selectedButtonText]}>
                          {item}
                      </Text>
                      </TouchableOpacity>

                  ))}

                </View>

            }
            {userChoice=="outfit" && <View style={{ alignItems:"center",width:'100%',}}>
                  <DefaultButton text='Continue' handlePress={()=>{setUserChoice('outfit2')}}/>
                </View>}

            {userChoice=="outfit2" &&

                  
            <View style={{marginHorizontal:30}}>
              {occasions.map((item)=>(
                  <TouchableOpacity key={item}
                  style={[styles.button, categories.includes(item) && styles.selectedButton]}
                  onPress={() => handleSelect(item)}
                  >
                  <Text style={[styles.buttonText, categories.includes(item) && styles.selectedButtonText]}>
                      {item}
                  </Text>
                  </TouchableOpacity>

              ))}

            </View>

            }
            {userChoice=="outfit2" && <View style={{ alignItems:"center",width:'100%',}}>
                  <DefaultButton text='Build my outfit' handlePress={()=>{setUserChoice('outfit3');setTimeout(handleOutfitResults,3000)}}/>
                </View>}
            {(userChoice=="similar" || userChoice=="outfit3") && 
            <View style={{flexDirection:"row",justifyContent:"center",marginVertical:10,marginHorizontal:20,gap:20}}>
                 <LottieView
                  autoPlay
                  style={{
                    width: 300,
                    height: 300,
                  }}
                  source={require('@/assets/animations/loader.json')}
                />
            </View>
            }
            </View>

          </ScrollView>
          :
          <LoaderScreen/>
        }
        
    </SafeAreaView>
  )
}

export default MagicMatch

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