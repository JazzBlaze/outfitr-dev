import { StyleSheet, TouchableOpacity,Text} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '../navigation/TabBarIcon';
import { router } from 'expo-router';


const SearchButton = () => {
    
  return (
    <TouchableOpacity
        onPress={()=>{router.push("")}}
        activeOpacity={0.7}
        style={styles.btn}>
        <TabBarIcon name={'search'} color={Colors.tint} />
    </TouchableOpacity>
  )
}

export default SearchButton

const styles = StyleSheet.create({
    btn:{
        padding:15,
        borderRadius:100,
        borderWidth: 2,
        borderColor:Colors.text
    },


})