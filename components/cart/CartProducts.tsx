
// import { Picker } from '@react-native-picker/picker';  // Picker for the size dropdown
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { ThemedText } from '../ThemedText';

interface Product {
    _id: string;
    brand: string;
    cover_image: string;
    productName: string;
    price: number;
    fit: string;
    sub_category: string;
  }

const CartItem = ({ item }: {item:Product}) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.cover_image }} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.productName}>{item.productName}</Text>
        <Text style={styles.productPrice}>₹{item.price}</Text>
        <Text style={styles.productBrand}>{item.brand}</Text>

        <View style={styles.selectorContainer}>
            <Text style={styles.label}>Size</Text>
            <TouchableOpacity style={styles.selector}>
            <Text style={styles.selectorText}>M <ThemedText style={{fontSize:12}} type="subtitle">{" (Suggested)"}</ThemedText></Text>
            <Ionicons
                style={{alignSelf:'center'}}
                name={"arrow-down-circle"}
                size={20}
                color={Colors.text}
              />
              
          </TouchableOpacity>
      </View>

        <View style={{flex:1, flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={styles.trashButton}>
                    <Ionicons name="trash-outline" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </View>

        <Text style={styles.arrivalText}>Estimated arrival 16 Aug - 20 Aug</Text>
      </View>
    </View>
  );
};

const CartScreen = ({products}:{products:Product[]}) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <CartItem item={item} />}
      keyExtractor={(item) => item._id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.background,
    marginBottom: 16,
    paddingBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    borderBottomColor:"#ededed3d",
    borderBottomWidth:2
  },
  productImage: {
    width: 150,
    height: "auto",
    resizeMode: 'stretch',
    borderRadius: 8,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color:Colors.text,
    fontFamily:"productSans"
  },
  productPrice: {
    fontSize: 18,
    color: Colors.text,
    marginBottom: 4,
    fontFamily:"productSans"
  },
  productBrand: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
    fontFamily:"productSans"
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:"#ededed3d",
    borderRadius:10,
    width:"auto"
    
  },
  quantityButton: {
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:"productSans"
  },
  quantity: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  trashButton: {
    marginLeft: 16,
  },
  arrivalText: {
    marginTop: 8,
    color: '#666',
    fontFamily:"productSans"
  },
  selectorContainer: {
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily:'productSans',
    color:Colors.text
  },
  selector: {
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth: 1,
    borderColor: Colors.text,
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  selectorText: {
    fontSize: 12,
    fontFamily:'productSans',
    color:Colors.text
  },
});

export default CartScreen;
