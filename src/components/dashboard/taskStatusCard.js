import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/colors';
import {MoreCircle} from 'iconsax-react-native';

const TaskStatusCard = ({item, value}) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <View>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <View>
        <Pressable>
          <MoreCircle
            size="32"
            color={ThemeColors.white}
            backgroundColor="black"
            variant="Bold"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default TaskStatusCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    width: '47%',
    height: 140,
    borderRadius: 20,
    borderColor: ThemeColors.black,
    borderWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  value: {
    fontSize: 30,
    fontWeight: '500',
  },
  status: {
    fontSize: 18,
    fontWeight: '500',
  },
});
