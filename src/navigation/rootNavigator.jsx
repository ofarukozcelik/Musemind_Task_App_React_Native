import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from '../screens/dashboard';
import Tasks from '../screens/tasks';
import { ADDTASK, DASHBOARD, TASKS, UPDATETASK } from '../utils/routes';
import { Pressable, Text, View } from 'react-native';
import { Notification, TaskSquare } from 'iconsax-react-native';
import { ThemeColors } from '../theme/colors';
import AddTask from '../screens/tasks/addTask';
import UpdateTask from '../screens/tasks/updateTask';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <Stack.Navigator
            screenOptions={({ route, navigation }) => ({
                headerShadowVisible: false,
                headerBackTitle: 'Back',
            })}>
            <Stack.Screen
                name={DASHBOARD}
                component={Dashboard}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Text
                            style={{
                                fontSize: 26,
                                fontWeight: 'bold',
                                marginLeft: 120,
                            }}>
                            Dashboard
                        </Text>
                    ),
                    headerTitle: '',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable>
                                <Notification size="32" color={ThemeColors.black} />
                            </Pressable>
                            <Pressable
                                style={{ marginLeft: 15 }}
                                onPress={() => navigation.navigate(TASKS)}>
                                <TaskSquare size="32" color={ThemeColors.black} />
                            </Pressable>
                        </View>
                    ),
                })}
            />
            <Stack.Screen
                name={TASKS}
                component={Tasks}
                options={{
                    headerTitle: 'Task List',
                }}
            />
            <Stack.Screen
                name={ADDTASK}
                component={AddTask}
                options={{
                    headerTitle: 'Add Task',
                }}
            />
            <Stack.Screen
                name={UPDATETASK}
                component={UpdateTask}
                options={{
                    headerTitle: 'Update Task',
                }}
            />
        </Stack.Navigator>
    );
}
export default App;
