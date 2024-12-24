import {Alert} from 'react-native';
import {ADDTASK, DELETETASK, UPDATETASK} from '../types/tasksTypes';

const dispatchAction = async (
  dispatch,
  type,
  payload,
  successMessage,
  navigation,
) => {
  try {
    dispatch({type, payload});
    Alert.alert(
      successMessage,
      '',
      [
        {
          text: 'OK',
          onPress: () => {
            if (navigation) {
              navigation.goBack();
            }
          },
        },
      ],
      {cancelable: false},
    );
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};

export const addNewTask = (task, navigation) => {
  return async dispatch => {
    await dispatchAction(
      dispatch,
      ADDTASK,
      task,
      'Task added successfully.',
      navigation,
    );
  };
};

export const deleteTask = (task, navigation) => {
  return async dispatch => {
    await dispatchAction(
      dispatch,
      DELETETASK,
      task,
      'Successfully deleted.',
      navigation,
    );
  };
};

export const updateTask = (task, navigation) => {
  return async dispatch => {
    await dispatchAction(
      dispatch,
      UPDATETASK,
      task,
      'Updated successfully.',
      navigation,
    );
  };
};
