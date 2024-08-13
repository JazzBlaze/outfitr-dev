import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  bar: number; // This will be a number from 1 to 6
}

const ProgressBar: React.FC<ProgressBarProps> = ({ bar }) => {
  const renderBars = () => {
    return Array.from({ length: 6 }, (_, index) => {
      const isActive = index + 1 === bar;
      return (
        <View
          key={index}
          style={[
            styles.bar,
            isActive ? styles.activeBar : styles.inactiveBar,
          ]}
        />
      );
    });
  };

  return <View style={styles.container}>{renderBars()}</View>;
};

const styles = StyleSheet.create({

  container: {
    marginHorizontal:16,
    marginVertical:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bar: {
    height: 6,
    flex:1,
    marginHorizontal: 2,
    borderRadius: 5,
  },
  activeBar: {
    backgroundColor: 'white', // Highlighted bar color
  },
  inactiveBar: {
    backgroundColor: '#333', // Non-highlighted bar color
  },
});

export default ProgressBar;
