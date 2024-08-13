import { StyleSheet, TouchableOpacity,Text} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

export type AuthButtonProps =  {
    handlePress:any;
    text:string
};

const DefaultButton = ({handlePress,text}:AuthButtonProps) => {
    
  return (
    <TouchableOpacity
        onPress={handlePress}

        activeOpacity={0.7}
        style={[
        styles.btn
    ]}>

        
        <Text style={[ {color:'#fff'},
            styles.btnText
        ]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default DefaultButton

const styles = StyleSheet.create({
    btn:{
        width:"100%",
        paddingVertical:15,
        borderRadius:50,
        borderWidth: 2,
        marginVertical:7,

        height:'auto',
        flexDirection:'row',
        gap:5,
        justifyContent:'center',
        backgroundColor:Colors.text
    },

    btnText:{
        alignSelf:'center',
        fontSize: 18,
        fontFamily:'productSans',
        fontWeight: 'bold',
        color:Colors.background
    }
})