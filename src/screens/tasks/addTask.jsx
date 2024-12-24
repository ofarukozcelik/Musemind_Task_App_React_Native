import React, { useState } from 'react';
import { View, Platform, Text } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../store/actions/tasksActions';
import { Radio, RadioGroup } from '@ui-kitten/components';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ThemeColors } from '../../theme/colors';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import { useNavigation } from '@react-navigation/native';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [status, setStatus] = useState('In Progress');
  const dispatch = useDispatch();
  const navigation = useNavigation(); 

  const saveTask = () => {
    const task = {
      id: Date.now(),
      title: title,
      status: status,
      date: date.toISOString(),
    };
    dispatch(addNewTask(task, navigation));
  };

  const handleStatusChange = index => {
    const statuses = ['In Progress', 'In Review', 'On Hold', 'Completed'];
    setStatus(statuses[index]);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View style={defaultScreenStyle.container}>
      <Input
        placeholder="Please set title"
        title="Task Title"
        onChangeText={value => setTitle(value)}
        value={title}
      />
      <TouchableWithoutFeedback onPress={() => setShowPicker(true)}>

        <Input
          placeholder="Select Date"
          title="Task Date"
          value={date.toLocaleDateString('tr-TR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
          editable={false}
          pointerEvents="none"
        />

      </TouchableWithoutFeedback>
      <View
        style={{
          alignItems: 'center',
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            textColor={ThemeColors.date}
            display="spinner"
            onChange={handleDateChange}
          />
        )}
      </View>

      <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
        <RadioGroup
          selectedIndex={['In Progress', 'In Review', 'On Hold', 'Completed'].indexOf(status)}
          onChange={handleStatusChange}>
          <Radio>In Progress</Radio>
          <Radio>In Review</Radio>
          <Radio>On Hold</Radio>
          <Radio>Completed</Radio>
        </RadioGroup>
      </View>
      <Button onPress={() => saveTask()} title="Save" status="success" />
    </View>
  );
};

export default AddTask;
