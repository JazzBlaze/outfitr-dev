import { Colors } from '@/constants/Colors'
import { StyleSheet } from 'react-native'

const DefaultStyles = StyleSheet.create({
    rootContainer: {
        backgroundColor:Colors.background,
        height:'100%',
    },
    viewContainer: {
        width:'100%',
        flexDirection:'column-reverse',
        justifyContent:'flex-start',
        alignItems:'center',
        height:'100%',
        position:'absolute',
        top:0
    },
    logoStyle:{
        color:Colors.text,
        fontFamily: 'brolimo',
        letterSpacing:0.5,
        fontSize:35,
        alignSelf:'center'
    }
})

export default DefaultStyles