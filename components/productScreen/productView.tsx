import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import { Ionicons } from '@expo/vector-icons';

export default function ProductView({product}:{product:any}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>

        <View style={{flexDirection:'row',width:"100%",justifyContent:"flex-end"}}>
            <ThemedText type='link'>Size Guide</ThemedText>
        </View>
      {/* Color Selector */}
      <View style={styles.selectorContainer}>
        <Text style={styles.label}>Color</Text>
        <TouchableOpacity style={styles.selector}>
            <Text style={styles.selectorText}>{product.primary_colour}</Text>
            <Ionicons
                style={{alignSelf:'center'}}
                name={"arrow-down-circle"}
                size={20}
                color={Colors.text}
              />
              
          </TouchableOpacity>
      </View>

      {/* Size Selector */}
      <View style={styles.selectorContainer}>
        <Text style={styles.label}>Size</Text>
        <TouchableOpacity style={styles.selector}>
            <Text style={styles.selectorText}>M <ThemedText type="subtitle">{" (Suggested)"}</ThemedText></Text>
            <Ionicons
                style={{alignSelf:'center'}}
                name={"arrow-down-circle"}
                size={20}
                color={Colors.text}
              />
              
          </TouchableOpacity>
      </View>


      <View style={{paddingVertical:30}}>
          {/* Add to Cart Button */}
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
      </View>

      <View style={{borderTopColor:Colors.text, borderTopWidth:1,paddingTop:40}}>
          {/* Shipping Policy Button */}
          <TouchableOpacity style={styles.policyButton}>
            <Text style={styles.policyButtonText}>Shipping Policy</Text>
            <Ionicons
                style={{alignSelf:'center'}}
                name={"add-circle"}
                size={20}
                color={Colors.text}
              />
              
          </TouchableOpacity>
          {/* Return Policy Button */}
          <TouchableOpacity style={styles.policyButton}>
            <Text style={styles.policyButtonText}>Return Policy</Text>
            <Ionicons
                style={{alignSelf:'center'}}
                name={"add-circle"}
                size={20}
                color={Colors.text}
              />
              
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  selectorContainer: {
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
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
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  selectorText: {
    fontSize: 16,
    fontFamily:'productSans',
    color:Colors.text
  },
  quantityContainer: {
    marginBottom: 16,
  },

  expandButton: {
    backgroundColor: Colors.text,
    padding: 8,
    borderRadius: 8,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:'productSans',
    color:Colors.background
  },
  quantityText: {
    fontSize: 16,
    fontFamily:'productSans',
    color:Colors.text
  },
  addToCartButton: {
    backgroundColor: Colors.text,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 16,
  },
  addToCartText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily:'productSans',
  },
  policyButton: {
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth: 1,
    borderColor: Colors.text,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  policyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily:'productSans',
    color:Colors.text
  },
});
