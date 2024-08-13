import { Animated, StyleSheet, Text, View,TouchableWithoutFeedback  } from 'react-native'
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
        <TouchableWithoutFeedback style={{flex:1}} onPress={() => setSelectedGender(val)}>
            <Animated.View
                style={[
                    styles.card,
                    isSelected && styles.selectedCard,
                    { transform: [{ scale: isSelected ? scaleAnim : 1 }] },
                ]}
            >
                <Ionicons name={genderVal==="Men's Fashion"?'male':genderVal==="Women's Fashion"?'female':'transgender'} size={40} style={[{ marginBottom: -3 , paddingBottom:20}]}  />
                <Text style={styles.cardText}>{genderVal}</Text>
            </Animated.View>
        </TouchableWithoutFeedback >
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
        backgroundColor: Colors.text,
        borderRadius: 10,
        shadowColor: '#fff',
        shadowOffset: { width: 2, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        borderWidth: 3,
        borderColor: Colors.text,

    },
    selectedCard: {
        borderWidth: 3,
        borderColor: '#808080', // Change the color to whatever suits your design
    },
    cardText: {
        fontSize: 16,
    },
    
})