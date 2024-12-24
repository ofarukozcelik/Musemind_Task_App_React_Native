import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { ThemeColors } from '../../theme/colors';

const Input = props => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};
const InputUpdate = props => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.titletwo}>{title}</Text>
      <TextInput {...props} style={styles.inputUpdate} />
    </View>
  );
};

export { Input, InputUpdate };

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 5,
    color: ThemeColors.blue,
  },
  input: {
    padding: 10,
    backgroundColor: ThemeColors.input,
    fontSize: 16,
    borderRadius: 15,
    paddingVertical: 15,
  },
  inputUpdate: {
    padding: 10,
    backgroundColor: ThemeColors.inputUpdate,
    fontSize: 16,
    borderRadius: 15,
    paddingVertical: 15,
  },
  titletwo: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 5,
    color: ThemeColors.inputTwo,
  },
});
