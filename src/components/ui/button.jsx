import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeColors } from '../../theme/colors';

const Button = props => {
  const { title, status } = props;
  const setColors = () => {
    switch (status) {
      case 'success':
        return ThemeColors.blue;
      case 'warning':
        return ThemeColors.yellow;
      default:
        return ThemeColors.blue;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, { backgroundColor: setColors() }]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default Button;
