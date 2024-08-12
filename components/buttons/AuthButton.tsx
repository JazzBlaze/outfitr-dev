import { StyleSheet, TouchableOpacity,Text} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import Svg, { Path } from 'react-native-svg';
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
        {type==='apple'?
        <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" >
        <Path d="M12.2363 6.98601C13.016 6.98601 13.9932 6.45894 14.5752 5.75617C15.1023 5.11929 15.4866 4.22984 15.4866 3.3404C15.4866 3.21962 15.4756 3.09883 15.4537 3C14.5862 3.03294 13.543 3.58198 12.9171 4.31769C12.423 4.87771 11.9728 5.75617 11.9728 6.65659C11.9728 6.78836 11.9947 6.92013 12.0057 6.96405C12.0606 6.97503 12.1485 6.98601 12.2363 6.98601ZM9.49113 20.2727C10.5563 20.2727 11.0284 19.559 12.3571 19.559C13.7077 19.559 14.0042 20.2508 15.1901 20.2508C16.3541 20.2508 17.1337 19.1747 17.8694 18.1205C18.693 16.9126 19.0334 15.7267 19.0554 15.6718C18.9785 15.6498 16.7494 14.7384 16.7494 12.1799C16.7494 9.9618 18.5063 8.96255 18.6052 8.88568C17.4412 7.21661 15.6733 7.17269 15.1901 7.17269C13.8834 7.17269 12.8183 7.9633 12.1485 7.9633C11.4237 7.9633 10.4684 7.21661 9.3374 7.21661C7.18517 7.21661 5 8.99549 5 12.3556C5 14.4419 5.81258 16.6491 6.81182 18.0766C7.66832 19.2845 8.41501 20.2727 9.49113 20.2727Z" fill="black"/>
        </Svg>
        :<Svg width="30" height="30" viewBox="0 0 24 24" fill="none" >
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M20.208 12.1943C20.208 11.5881 20.1536 11.0051 20.0525 10.4455H12V13.7528H16.6015C16.4032 14.8215 15.8009 15.727 14.8953 16.3333V18.4786H17.6585C19.2753 16.9901 20.208 14.7982 20.208 12.1943Z" fill="#4285F4"/>
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 20.55C14.3085 20.55 16.2439 19.7844 17.6585 18.4786L14.8953 16.3333C14.1297 16.8463 13.1504 17.1494 12 17.1494C9.77311 17.1494 7.88822 15.6454 7.21588 13.6245H4.35941V15.8397C5.76627 18.634 8.65772 20.55 12 20.55Z" fill="#34A853"/>
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.2159 13.6245C7.0449 13.1115 6.94774 12.5635 6.94774 12C6.94774 11.4365 7.0449 10.8885 7.2159 10.3755V8.16028H4.35942C3.78035 9.31453 3.45001 10.6203 3.45001 12C3.45001 13.3797 3.78035 14.6855 4.35942 15.8397L7.2159 13.6245Z" fill="#FBBC05"/>
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.85056C13.2553 6.85056 14.3823 7.28195 15.2684 8.12918L17.7207 5.67688C16.24 4.29722 14.3046 3.45 12 3.45C8.65772 3.45 5.76627 5.36597 4.35941 8.16027L7.21588 10.3755C7.88822 8.35459 9.77311 6.85056 12 6.85056Z" fill="#EA4335"/>
        </Svg>}
        
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