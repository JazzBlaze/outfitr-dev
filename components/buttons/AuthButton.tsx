import { StyleSheet, TouchableOpacity,Text, Image} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import Apple from "@/assets/images/customIcons/apple.svg"
import Google from "@/assets/images/customIcons/google.svg"

export type AuthButtonProps =  {
    btnType?: 'ghost' | 'default' ;
    type?:'apple' | 'google';
    handlePress:any;
  };

const AuthButton = ({btnType,type,handlePress}:AuthButtonProps) => {
    
  return (
    <TouchableOpacity
        onPress={handlePress}

        activeOpacity={0.7}
        style={[
        btnType === 'default' ? styles.default : undefined,
        btnType === 'ghost' ? styles.ghost : undefined,
        styles.btn
    ]}>
        {type==='apple'?<Apple width={30} height={30}/>:<Google width={30} height={30}/>}
        
        <Text style={[
            btnType === 'default' ? {color:'#000'} : {color:'#fff'},
            styles.btnText
        ]}>Continue with {type=='apple'?'Apple':'Google'}</Text>
    </TouchableOpacity>
  )
}

export default AuthButton

const styles = StyleSheet.create({
    btn:{
        width:300,
        paddingVertical:15,
        borderRadius:50,
        borderWidth: 2,
        marginVertical:7,
        flex:1,
        flexDirection:'row',
        gap:5,
        justifyContent:'center'

    },
    default:{
        backgroundColor:Colors.text,
        borderColor:Colors.background,
        
    },
    ghost:{
        backgroundColor:Colors.background,
        borderColor:Colors.text,
    },
    btnText:{
        alignSelf:'center',
        fontSize: 18,
        fontFamily:'productSans'
    }


})