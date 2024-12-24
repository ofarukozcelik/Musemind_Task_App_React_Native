import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SectionTitle from '../../components/ui/sectionTitle';
import TaskStatusCard from '../../components/dashboard/taskStatusCard';
import { useSelector } from 'react-redux';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { dashboardStyle } from '../../styles/dashboardStyle';
import BarrChart from '../../components/dashboard/barChart';

const Dashboard = () => {
    const { taskStatus, tasks } = useSelector(state => state?.tasks);
    const countTaskStatus = status => {
        return tasks.filter(item => item?.status === status).length;
    };
    return (
        <View style={defaultScreenStyle.container}>
            <ScrollView>
                <SectionTitle title={'Project Summary'} />
                <View style={dashboardStyle.card}>
                    {taskStatus.map(item => (
                        <TaskStatusCard
                            value={countTaskStatus(item.status)}
                            item={item}
                            key={item.id}
                        />
                    ))}
                </View>
                <SectionTitle title={'Project Statistics'} />
                <BarrChart />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    },
});

export default Dashboard;
