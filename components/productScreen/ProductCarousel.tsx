import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface CarouselProps {
  images: string[];
}

const { width } = Dimensions.get('window');

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        width={width}
        height={500}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ImageCarousel;
