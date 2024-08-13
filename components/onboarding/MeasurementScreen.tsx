import { Colors } from '@/constants/Colors';
import { useQuestionnaire } from '@/context/QuestionnaireProvider';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const MeasurementScreen = () => {
  const [showItemsInSize, setShowItemsInSize] = useState<boolean>(true);

  const { fit,measurements, updateQuestionnaire } = useQuestionnaire();

  const increment = (field: 'chest' | 'waist') => {
    if (measurements?.men) {
      updateQuestionnaire({
        measurements: {
          men: {
            ...measurements.men,
            [field]: (measurements.men[field] || 0) + 1,
          },
          women:null
        },
      });
    }
  };

  const decrement = (field: 'chest' | 'waist') => {
    if (measurements?.men && measurements.men[field] > 0) {
      updateQuestionnaire({
        measurements: {
          men: {
            ...measurements.men,
            [field]: (measurements.men[field] || 0) - 1,
          },
          women:null
        },
      });
    }
  };

  const handleInputChange = (field: 'chest' | 'waist', value: string) => {
    if (measurements?.men) {
      updateQuestionnaire({
        measurements: {
          men: {
            ...measurements.men,
            [field]: Number(value),
          },
          women:null
        },
        
      });
    }
  };


  const handleFitSelection = (selectedFit: string) => {
    updateQuestionnaire({fit:selectedFit});
  };

  return (
    <ScrollView style={styles.container}>
      {/* Chest */}
      <View style={styles.sizeParentContainer}>
        <View  style={styles.sizeContainer}>
            <TouchableOpacity onPress={() => decrement('chest')}  >
              <Ionicons color={Colors.text} name={"remove-circle"} size={70} style={[{ marginBottom: -3 }]}  />
            </TouchableOpacity>
            <TextInput
              style={styles.sizeText}
              keyboardType="numeric"
              value={measurements?.men?.chest?.toString() || '0'}
              onChangeText={(text) => handleInputChange('chest', text)}
            />
            <TouchableOpacity onPress={() => increment('chest')}  >
                <Ionicons color={Colors.text} name={"add-circle"} size={70} style={[{ marginBottom: -3 }]}  />
            </TouchableOpacity>
        </View>
        <Text style={styles.label}>Chest</Text>
      </View>

      {/* Waist */}
      <View style={styles.sizeParentContainer}>
      <View style={styles.sizeContainer}>
        <TouchableOpacity onPress={() => decrement('waist')}>
          <Ionicons color={Colors.text} name={"remove-circle"} size={70} style={[{ marginBottom: -3 }]}  />
        </TouchableOpacity>
        <TextInput
          style={styles.sizeText}
          keyboardType="numeric"
          value={measurements?.men?.waist?.toString() || '0'}
          onChangeText={(text) => handleInputChange('waist', text)}
        />
        <TouchableOpacity onPress={() => increment('waist')}>
          <Ionicons color={Colors.text} name={"add-circle"} size={70} style={[{ marginBottom: -3 }]}  />
        </TouchableOpacity>
        
      </View>
        <Text style={styles.label}>Waist</Text>
      </View>


      {/* Fit Selector */}
      <Text style={styles. fitLabel}>My preferred fit is…</Text>
      <View style={styles.fitSelectorContainer}>
        <TouchableOpacity
          style={[styles.fitButton, fit === ' Slim' && styles.selectedFitButton]}
          onPress={() => handleFitSelection(' Slim')}
        >
          <Text style={[styles.fitButtonText, fit === ' Slim' && styles.selectedFitButtonText]}>
            Slim
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.fitButton, fit === 'True to Size' && styles.selectedFitButton]}
          onPress={() => handleFitSelection('True to Size')}
        >
          <Text style={[styles.fitButtonText, fit === 'True to Size' && styles.selectedFitButtonText]}>
            True to Size
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.fitButton, fit === 'Oversized' && styles.selectedFitButton]}
          onPress={() => handleFitSelection('Oversized')}
        >
          <Text style={[styles.fitButtonText, fit === 'Oversized' && styles.selectedFitButtonText]}>
            Oversized
          </Text>
        </TouchableOpacity>
      </View>

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          onPress={() => setShowItemsInSize(!showItemsInSize)}
          style={styles.checkbox}
        >
          {showItemsInSize && <Ionicons color={Colors.text} name={"checkmark"}  size={10} style={[{ marginBottom: -3}]}  />}
        </TouchableOpacity>
        <Text onPress={() => setShowItemsInSize(!showItemsInSize)} style={styles.fitSubLabel}>Only show items available in my size or fit</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,

  },
  sizeParentContainer:{
    alignItems: 'center',
    justifyContent:"center",

  },
  sizeContainer: {
    alignSelf:'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 0,
    justifyContent:"center",
    width:'100%'
  },
  sizeText: {
    marginHorizontal: 20,
    fontSize: 80,
    color: Colors.text,
    textAlign: 'center',
    fontWeight:'bold',
  },
  label: {
    fontSize: 20,
    marginBottom: 1,
    textAlign: 'center',
    color: Colors.text,
    fontWeight:'bold',
  },
   fitLabel: {
    fontSize: 20,
    marginBottom: 1,
    marginTop:40,
    textAlign: 'left',
    color: Colors.text,
    fontWeight:'bold',
  },
  fitSubLabel: {
    fontSize: 14,
    marginBottom: 1,
    textAlign: 'center',
    color: Colors.text,
    alignSelf:"center"
  },
  fitSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    gap:5
  },
  fitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: Colors.text,
    borderWidth:1
  },
  selectedFitButton: {
    backgroundColor:  Colors.background,
    borderColor:Colors.text,
  },
  fitButtonText: {
    color: 'black',
    fontSize: 16,
  },
  selectedFitButtonText: {
    color: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
   justifyContent:"center",

  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: Colors.text,
    borderRadius:3,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: Colors.background,
  },
});

export default MeasurementScreen;