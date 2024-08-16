import { brands } from '@/constants/Brands';
import { Colors } from '@/constants/Colors';
import { useQuestionnaire } from '@/context/QuestionnaireProvider';
import React, { useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Assuming your brand data is of the following type
interface Brand {
  brand_name: string;
  brand_logo: string;
}

const numColumns = 3; // Number of columns to display

const BrandGrid = () => {
  const { preferred_brands, updateQuestionnaire } = useQuestionnaire();

  const toggleSelection = (brand_name: string) => {
    if (preferred_brands.includes(brand_name)) {
      const temp = preferred_brands.filter(name => name !== brand_name)
      updateQuestionnaire({preferred_brands:temp})
    } else {
      const temp = [...preferred_brands, brand_name]
      updateQuestionnaire({preferred_brands:temp})
    }
  };

  const renderItem = ({ item }: { item: Brand }) => {
    const isSelected = preferred_brands.includes(item.brand_name);

    return (
      <View style={{margin:10}}>
          <TouchableOpacity
            style={[styles.itemContainer, isSelected && styles.selectedItemContainer]}
            onPress={() => toggleSelection(item.brand_name)}
          >
            <Image source={{ uri: item.brand_logo }} style={styles.image} resizeMode="contain" />
            
          </TouchableOpacity>
          <Text style={styles.brand_name}>{item.brand_name}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={brands}
      renderItem={renderItem}
      keyExtractor={(item) => item.brand_name}
      numColumns={numColumns}
      contentContainerStyle={styles.grid}
      extraData={preferred_brands}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    padding: 10,

  },
  itemContainer: {
    flex: 1,
  
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 40, // Adjust to fit the image size
    padding: 5,
  },
  selectedItemContainer: {
    borderColor: '#fff', // Thicker border color when selected
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35, // To make the image circular
    backgroundColor:'#fff',
  },
  brand_name: {
    fontFamily:'productSans',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    color:Colors.text,
    fontWeight:'bold'
  },
});

export default BrandGrid;