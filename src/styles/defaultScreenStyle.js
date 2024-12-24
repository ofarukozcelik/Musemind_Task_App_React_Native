import {StyleSheet} from 'react-native';
import {ThemeColors} from '../theme/colors';

const defaultScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
    padding: 15,
  },
});

export {defaultScreenStyle};
