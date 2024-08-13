import { Colors } from '@/constants/Colors';
import { Text, type TextProps, StyleSheet } from 'react-native';

  

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'appTitle' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
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
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'semibold',
    fontFamily:'productSans'
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
  subtitle: {
    fontSize: 16,
    color:Colors.subText,
    fontFamily:'productSans'
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
    fontFamily:'productSans'
  },
});
