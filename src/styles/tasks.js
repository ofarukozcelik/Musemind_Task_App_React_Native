import {StyleSheet} from 'react-native';
import {ThemeColors} from '../theme/colors';

const TasksStyle = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 150,
    backgroundColor: ThemeColors.green,
    marginHorizontal: 30,
    padding: 20,
    borderRadius:30,
    overflow: 'hidden'
  },
});

export {TasksStyle};
