import { Animated, StyleSheet, Text, View, TouchableOpacity  } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useQuestionnaire } from '@/context/QuestionnaireProvider';

const genderValue:any={
    "Men's Fashion":"men",
    "Women's Fashion":"women",
    "Unisex Fashion":"unisex",
}


const GenderButton = () => {
    const { gender, updateQuestionnaire } = useQuestionnaire();

    const setSelectedGender = (genderVal:any) => {
        console.log(genderVal)
        updateQuestionnaire({ gender: genderVal });
    };
  
    const scaleAnim = new Animated.Value(1.05);

  const renderCard = (genderVal: string) => {
    const val:any=genderValue[genderVal]
    const isSelected = gender === genderValue[genderVal];
    return (
        <TouchableOpacity style={[styles.card,
            isSelected && styles.selectedCard]} onPress={() => setSelectedGender(val)}>
            <Ionicons color={isSelected?Colors.background:Colors.text} name={genderVal==="Men's Fashion"?'male':genderVal==="Women's Fashion"?'female':'transgender'} size={40} style={[{ marginBottom: -3 , paddingBottom:20}]}  />
            <Text style={[styles.cardText,isSelected && styles.selectedCardText]}>{genderVal}</Text>

        </TouchableOpacity >
    );
}
  return (
    <View style={styles.cardContainer}>
    {renderCard("Men's Fashion")}
    {renderCard("Women's Fashion")}
    {renderCard("Unisex Fashion")}
    </View>
  )
}

export default GenderButton

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'space-around', // Evenly space the cards vertically
        paddingHorizontal: 50,
        height:'auto',
        gap:25

    },
    card: {
        height:'auto',
        paddingVertical:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.text,

    },
    selectedCard: {
        backgroundColor: Colors.text,
        borderColor: Colors.background
    },
    cardText: {
        fontSize: 16,
        color:Colors.text,
    },
    selectedCardText: {
        color:Colors.background,
    },
    
})