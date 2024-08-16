import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList,Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useWishlist } from '@/context/WishlistContext';

interface Product {
  _id: string;
  brand: string;
  cover_image: string;
  productName: string;
  price: number;
  fit: string;
  sub_category: string;
}

const ClosetScreen = () => {
  const { wishlistProducts } = useWishlist();

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <View style={{ borderWidth:1, borderColor:Colors.text, padding:6,flex:1,borderRadius:20,margin:5 }}>
        <Image resizeMode="cover" source={{uri:item.cover_image}} style={{borderRadius:20,height:200,width:"auto"}}/>
        <ThemedText numberOfLines={2} style={{marginVertical:10,fontWeight:"bold"}} type="default">{item.productName}</ThemedText>
        <ThemedText numberOfLines={2} style={{marginVertical:0}} type="default">₹ {item.price}</ThemedText>

      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.background, height: '100%', padding: 10}}>
      <ThemedText style={{ textAlign: 'center',marginTop:5 }} type="title">Your Wishlist</ThemedText>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
        <TouchableOpacity
          style={styles.btnExpanded}>
          <TabBarIcon name={'search'} color={Colors.tint} />
          <TextInput
            style={{ color: Colors.text, width: '100%', height: '100%', fontFamily: 'productSans', fontSize: 16, lineHeight: 16 }}
            placeholderTextColor={Colors.text}
            placeholder='Search for a product'
          />
        </TouchableOpacity>
      </View>
      {wishlistProducts.length < 1 ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <ThemedText style={{ textAlign: 'center' }} type="subtitle">Add something to your wishlist!</ThemedText>
        </View>
        :
        <FlatList
          data={wishlistProducts}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          numColumns={2}
          initialNumToRender={2}
          contentContainerStyle={styles.grid}
        />
      }
    </SafeAreaView>
  );
};

export default ClosetScreen;

const styles = StyleSheet.create({
  btnExpanded: {
    marginVertical: 20,
    flexDirection: 'row',
    gap: 18,
    width: '100%',
    padding: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.text,
  },
  grid: {
  },
});
