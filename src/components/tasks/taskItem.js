import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {ThemeColors} from '../../theme/colors';
import {Calendar1, Edit2, Trash} from 'iconsax-react-native';
import setColor from '../../utils/function';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../store/actions/tasksActions';
import {useNavigation} from '@react-navigation/native';
import {UPDATETASK} from '../../utils/routes';

const TaskItem = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const deleteItem = () => {
    Alert.alert(
      'Delete Confirmation', 
      'Are you sure you want to delete this task?', 
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel', 
        },
        {
          text: 'Delete',
          onPress: () => dispatch(deleteTask(item.id)),
          style: 'destructive', 
        },
      ]
    );
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <View
            style={[styles.status, {backgroundColor: setColor(item.status)}]}>
            <Text style={styles.text}> {item.status}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Calendar1 size="30" color={ThemeColors.yellow} variant="Bold" />
          <Text style={styles.date}>
            {new Date(item.date).toLocaleDateString('tr-TR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', padding: 10}}>
        <TouchableOpacity onPress={deleteItem}>
          <Trash size="28" color={ThemeColors.green} variant="Bold" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(UPDATETASK, {task: item})}>
          <Edit2 size="28" color={ThemeColors.blue} variant="Bold" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: ThemeColors.blue,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 150,
  },
  card: {
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 25,
  },
  date: {
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 5,
  },
  status: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  text: {
    color: ThemeColors.black,
    fontWeight: '500',
  },
});

export default TaskItem;
