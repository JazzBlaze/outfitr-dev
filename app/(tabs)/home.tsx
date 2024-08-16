import { Image,  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DefaultStyles from '@/components/styles/defaultStyles'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '@/constants/Colors'
import Swiper from 'react-native-deck-swiper'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import SearchButton from '@/components/buttons/SearchButton'
import Sources from '@/constants/Sources'
import { Ionicons } from '@expo/vector-icons'
import { feed_products, FeedProduct } from '@/constants/feed_products'
import { router, usePathname } from 'expo-router'
import { ThemedText } from '@/components/ThemedText'
import { useProduct } from '@/context/MagicMatchProvider'
import { useWishlist } from '@/context/WishlistContext'
import { useCart } from '@/context/CartContext'

const HomeScreen = () => {
  const pathname = usePathname()
  const swiperRef = React.useRef<Swiper<any>>(null);
  const [swipeRight,setSwipeRight]=useState<boolean>(false)
  const [swipeLeft,setSwipeLeft]=useState<boolean>(false)
  const [swipeUp,setSwipeUp]=useState<boolean>(false)
  const [swipeDown,setSwipeDown]=useState<boolean>(false)

  function detectSwipeDirection(x:any,y:any){
    if(x>50){
      setSwipeRight(true)
    }
    if(x<=50){
      setSwipeRight(false)
    }
    if(x<=-50){
      setSwipeLeft(true)
    }else{
      setSwipeLeft(false)
    }
    if(y<=-80 && x>-50 && x<50){
      setSwipeUp(true)
    }else{
      setSwipeUp(false)
    }
    if(y>50 && x>-60 && x<50){
      setSwipeDown(true)
    }else{
      setSwipeDown(false)
    }
  }
  function resetSwipeFilters(){
    setSwipeRight(false)
    setSwipeLeft(false)
    setSwipeUp(false)
    setSwipeDown(false)
  }

  function onCardClick(i:any){
    console.log(i)
    console.log(feed_products[i])
    if(feed_products[i]){
      const product:any = feed_products[i]
      const query = product._id
      if(pathname.startsWith('/product')) router.setParams({query})
      else router.push(`/product/${query}`)
    }
    


  }
  
  const { setProduct } = useProduct();
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <SafeAreaView style={{backgroundColor:Colors.background,height:'100%'}}>
      <StatusBar translucent={true} backgroundColor="#000000" />
      {swipeRight &&
        <View style={{position:"absolute",width:"100%",height:"100%",justifyContent:"center",alignItems:'center',zIndex:10}}>
          <Ionicons
          style={{opacity:0.7}}
          name={"bookmark"}
          size={200}
          color={Colors.background}
        />
         
        </View>
      }
            {swipeLeft &&
        <View style={{position:"absolute",width:"100%",height:"100%",justifyContent:"center",alignItems:'center',zIndex:10}}>
          <Ionicons
          style={{opacity:0.7}}
          name={"close-circle"}
          size={200}
          color={Colors.background}
        />
         
        </View>
      }
            {swipeUp &&
        <View style={{position:"absolute",width:"100%",height:"100%",justifyContent:"center",alignItems:'center',zIndex:10}}>
          <Ionicons
          style={{opacity:0.7}}
          name={"cart"}
          size={200}
          color={Colors.background}
        />
         
        </View>
      }
            {swipeDown &&
        <View style={{position:"absolute",width:"100%",height:"100%",justifyContent:"center",alignItems:'center',zIndex:10}}>
          <Ionicons
          style={{opacity:0.7}}
          name={"heart-half"}
          size={200}
          color={Colors.background}
        />
         
        </View>
      }
      <View style={styles.headerContainer}>
          <View style={styles.headerSubContainer}>
              <TouchableOpacity onPress={()=>{swiperRef.current?.swipeBack()}} style={styles.imageContainer}>
                  <Image source={Sources.arrow} style={styles.image} resizeMode='contain'/>
              </TouchableOpacity>
            <Text style={DefaultStyles.logoStyle}>Outfitr</Text>
            <SearchButton state='default'/>
          </View>
          <View style={{paddingVertical:10,flexDirection:"row",gap:4,justifyContent:"space-evenly"}}>
            <TouchableOpacity style={{backgroundColor:"#ededed3d",borderRadius:25,width:35,height:35,justifyContent:"center",alignItems:"center"}}>
              <Ionicons
            
                name={"options"}
                size={22}
                color={Colors.text}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"#ededed3d",borderRadius:25,paddingHorizontal:10,width:"auto",height:35,flexDirection:"row",gap:10,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontFamily:"productSans", color:Colors.text,fontSize:18,lineHeight:18,alignSelf:"center",marginTop:2,marginLeft:2}}>Brand</Text>
              <Ionicons
            
                name={"caret-down-outline"}
                size={20}
                color={Colors.text}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"#ededed3d",borderRadius:25,paddingHorizontal:10,width:"auto",height:35,flexDirection:"row",gap:10,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontFamily:"productSans", color:Colors.text,fontSize:18,lineHeight:18,alignSelf:"center",marginTop:2,marginLeft:2}}>Product</Text>
              <Ionicons
            
                name={"caret-down-outline"}
                size={20}
                color={Colors.text}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"#ededed3d",borderRadius:25,paddingHorizontal:10,width:"auto",height:35,flexDirection:"row",gap:10,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontFamily:"productSans", color:Colors.text,fontSize:18,lineHeight:18,alignSelf:"center",marginTop:2,marginLeft:2}}>Color</Text>
              <Ionicons
            
                name={"caret-down-outline"}
                size={20}
                color={Colors.text}
              />
            </TouchableOpacity>



          </View>


      </View>


      <View style={styles.container}>
        <Swiper
        ref={swiperRef}
        onTapCard={onCardClick}
        onSwiping={detectSwipeDirection}
        onSwipedAborted={resetSwipeFilters}
        onSwiped={resetSwipeFilters}
        onSwipedRight={(i:any)=>{
          if(feed_products[i]){
            const product:any = feed_products[i]
            addToWishlist(product)
          }

        }}
        onSwipedTop={(i:any)=>{
          if(feed_products[i]){
            const product:any = feed_products[i]
            addToCart(product)
          }

        }}
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
            cards={feed_products}
            renderCard={(product) => {
                return (
                    <View style={styles.card}>
                        <Image resizeMode={'contain'} source={{uri:product.cover_image}} style={styles.backgroundImage} />
                        <View style={{position:'absolute',bottom:-1,left:0}}>
                          <Image resizeMode={'contain'} source={Sources.gradient} style={{borderBottomLeftRadius:40,borderBottomRightRadius:40}} />
                      
                        </View>
                        <View style={{position:'absolute',bottom:10,padding:10}}>
                          <Text style={styles.text}>{product.productName}</Text>
                          <Text style={styles.brandtext}>{product.brand}</Text>
                          <Text style={styles.priceText}>₹{product.price}</Text>
                        </View>
                        <View style={{position:'absolute',top:10,right:10}}>
                          <TouchableOpacity onPress={()=>{
                            setProduct(product)
                            router.push('/MagicMatch')
                            
                          }} style={{height:60,width:60 }}>
                              <Image source={Sources.twinkle} style={{width:60,height:60}} resizeMode='contain'/>
                          </TouchableOpacity>
                        </View>
                        
                        
                    </View>
                )
            }}
            swipeBackCard={true}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#000000'}
            stackSize= {2}>

        </Swiper>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  headerContainer:{
    width:'100%',
    justifyContent:'center',
    paddingHorizontal:15,
    marginTop:15,

},
headerSubContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
},
image:{
    width:30,
    height:30
},
imageContainer:{
    // borderWidth:1,
    // borderColor:Colors.text,
    padding:5,
    borderRadius:70/2
},
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
  filterContainer:{
    width:'100%',
    height:100,
   flex:1,
   flexDirection:"row",
   gap:2,
   

  },
  card: {
    height:'100%',
    borderRadius: 40,
    justifyContent: "center",
    margin:0,
    padding:0
  },
  text: {
    fontFamily:'productSans',
    fontSize: 24,
    fontWeight:'bold',
    color:Colors.text
  },
  brandtext:{
    marginTop:1,
    fontFamily:'productSans',
    fontSize: 20,
    color:Colors.text
  },
  priceText:{
    marginTop:5,
    fontFamily:'productSans',
    fontSize: 22,
    fontWeight:'bold',
    color:Colors.text
  },
  swiperContainer:{
    flex:1,
    backgroundColor:Colors.background,
  },
  backgroundImage: {
    flex: 1, // Fill the entire container
    resizeMode: "stretch", // Adjust the image to cover the entire area
    borderRadius: 40,
  },
});