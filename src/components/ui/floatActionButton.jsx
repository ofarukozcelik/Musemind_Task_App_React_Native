import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import { Add } from 'iconsax-react-native';

const FloatActionButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Add size={40} color={ThemeColors.black} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColors.green,
    width: 80,
    height: 80,
    borderRadius: 80,
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
});

export default FloatActionButton;
