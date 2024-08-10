import { Colors } from '@/constants/Colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor:Colors.background,
        fontFamily:'productSans',
        height:'100%'
    },
    viewContainer: {
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        paddingLeft:4,
        paddingRight:4
    },
})

export default styles