import { Colors } from '@/constants/Colors';
import { Text, type TextProps, StyleSheet } from 'react-native';

  

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:'header'| 'default' | 'appTitle' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = Colors.text

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'appTitle' ? styles.appTitle : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'header' ? styles.header : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily:'productSans'
    
  },
  defaultSemiBold: {
    fontSize: 22,
    lineHeight: 22,
    fontWeight: 'bold',
    fontFamily:'productSans',
    marginVertical:10
  },
  appTitle:{
    fontSize: 80,
    fontFamily:'brolimo',
    letterSpacing:0.5,

  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontFamily:'productSans',
    letterSpacing:0.5,
  },
  header:{
    fontSize: 28,
    lineHeight: 28,
    fontFamily:'productSans',
    fontWeight: 'semibold',

  },
  subtitle: {
    fontSize: 16,
    color:Colors.subText,
    fontFamily:'productSans'
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
    textDecorationLine:"underline",
    color: Colors.text,
    fontFamily:'productSans'
  },
});
