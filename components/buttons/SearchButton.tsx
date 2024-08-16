import { StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '../navigation/TabBarIcon';
import { router } from 'expo-router';

export type SearchButtonProps =  {
  state?: 'expanded' | 'default' ;
  setState?:any;
};

const SearchButton = ({state,setState}:SearchButtonProps) => {
    
  return (
    <>{
      state==="default"?
      <TouchableOpacity
        // onPress={()=>{router.push("/search")}}
        activeOpacity={0.7}
        style={styles.btn}>
        <TabBarIcon  size={35} name={'search'} color={Colors.tint} />
    </TouchableOpacity>
    :
    <TouchableOpacity
        onPress={()=>{router.push("/search")}}
        activeOpacity={0.7}
        style={styles.btnExpanded}>
        <TabBarIcon name={'search'} color={Colors.tint} />
        <TabBarIcon name={'close-circle'} color={Colors.tint} />
    </TouchableOpacity>
    }
    </>
    
  )
}

export default SearchButton

const styles = StyleSheet.create({
    btn:{
        padding:5,
        borderRadius:60/2,
        // borderWidth: 1,
        // borderColor:Colors.text
    },
    btnExpanded:{
      width:'100%',
      padding:15,
      borderRadius:50,
      borderWidth: 2,
      borderColor:Colors.text
    }


})